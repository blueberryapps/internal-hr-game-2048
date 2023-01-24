import * as React from "react";
import {useCallback} from "react";
import {FieldPath, SubmitHandler, useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {Avatar, Box, Button, Container, Grid, Link, Typography,} from "@mui/material";
import Registration from "../components/modal/Registration";
import {ApolloError, useApolloClient, useMutation} from "@apollo/client";
import {FormTextField} from "./FormTextField";
import {useToggle} from "../hooks/useToggle";
import {loginSchema, LoginSchemaData} from "../validators/loginSchema";
import {useAuth} from "../lib/auth";

export default function LoginPage() {
    const { login } = useAuth();
    const [signupOpen, , openSignup, closeSignup] = useToggle(false);
    const client = useApolloClient();

    const {control, handleSubmit, formState, setError} = useForm<LoginSchemaData>({
        mode: "onBlur",
        resolver: joiResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = useCallback<SubmitHandler<LoginSchemaData>>(async (formData) => {
        try {
            await login({
                email: formData.email,
                password: formData.password,
            })
        } catch (err) {
            if (err instanceof ApolloError) {
                if (err.graphQLErrors.length > 0) {
                    const firstErr = err.graphQLErrors[0];
                    setError("email", { type: firstErr.name, message: firstErr.message });
                    return;
                }

                if (err.networkError) {
                    // TODO: handle network errors
                }
            }

            setError("form" as unknown as FieldPath<LoginSchemaData>, { type: "unknown", message: "You broke our app and I'm totally gonna tell on you!" })
        }
    }, [client, setError]);

    return (
        <Container maxWidth="xs">
            <Box mt={8}>
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography
                            variant="h2"
                            gutterBottom
                            component="div"
                            color="primary.dark"
                        >
                            PLAY 2048
                        </Typography>
                    </Grid>
                    <Grid item pt={2}>
                        <Avatar alt="Firstname lastname" sx={{width: 64, height: 64}}/>
                    </Grid>
                    <Grid item pt={2}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            component="div"
                            color="primary.dark"
                        >
                            Sign In
                        </Typography>
                    </Grid>
                    <Box component="form" autoComplete="off" noValidate width={"100%"} pt={2}
                         onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <FormTextField name="email" control={control} disabled={formState.isSubmitting} type="email" label="E-mail" fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <FormTextField name="password" control={control} disabled={formState.isSubmitting} type="password" label="Password" fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    type="submit"
                                    disabled={formState.isSubmitting}
                                >
                                    Sign in
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container justifyContent="space-between" mt={2}>
                        <Grid item>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    console.info("Forgot password?");
                                }}
                            >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={openSignup}
                            >
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Registration open={signupOpen} onClose={closeSignup} />
        </Container>
    );
}
