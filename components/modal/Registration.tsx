import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {Box, Grid, LinearProgress} from "@mui/material";
import {gql} from "../../gql";
import {ApolloError, useMutation} from "@apollo/client";
import {FieldPath, SubmitHandler, useForm} from "react-hook-form";
import {loginSchema, LoginSchemaData} from "../../validators/loginSchema";
import {joiResolver} from "@hookform/resolvers/joi";
import {registrationSchema, RegistrationSchemaData} from "../../validators/registrationSchema";
import {FormTextField} from "../FormTextField";
import {useCallback, useEffect} from "react";
import {useAuth} from "../../lib/auth";

export interface RegistrationProps {
  open: boolean;
  onClose?: () => void;
}

export default function Registration({ open, onClose }: RegistrationProps) {
  const { signup } = useAuth();

  const {control, handleSubmit, formState, setError, reset} = useForm<RegistrationSchemaData>({
    mode: "onBlur",
    resolver: joiResolver(registrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit = useCallback<SubmitHandler<RegistrationSchemaData>>(async (formData) => {
    try {
      await signup({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password
      });

      reset();
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
  }, [setError]);

  const handleClose = () => {
    reset();

    if (typeof onClose === "function") {
      onClose();
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      {formState.isSubmitting && <LinearProgress />}
      <DialogTitle color="primary.dark">Sign Up</DialogTitle>
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText color="primary.main">
            Fill out the form carefully for registration
          </DialogContentText>
          <Grid container spacing={2} pt={2}>
            <Grid item xs={6}>
              <FormTextField name="firstName" label="First name" disabled={formState.isSubmitting} size="small" control={control} fullWidth/>
            </Grid>
            <Grid item xs={6}>
              <FormTextField name="lastName" control={control} label="Last name" disabled={formState.isSubmitting} size="small" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="email" type="email" control={control} label="E-mail" disabled={formState.isSubmitting} size="small" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="password" type="password" label="Password" disabled={formState.isSubmitting} control={control} size="small" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <FormTextField name="confirmPassword" type="password" label="Confirm password" disabled={formState.isSubmitting} control={control} size="small" fullWidth />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={2} px={2} pb={1} justifyContent="flex-end">
            <Grid item>
              <Button disabled={formState.isSubmitting} onClick={handleClose}>Cancel</Button>
            </Grid>
            <Grid item>
              <Button type="submit" disabled={formState.isSubmitting} onClick={handleSubmit(onSubmit)}>Sign Up</Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
