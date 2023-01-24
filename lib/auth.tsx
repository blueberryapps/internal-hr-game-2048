import React, {useCallback, useContext, useMemo, useState} from "react";
import {gql} from "../gql";
import {useMutation, useQuery} from "@apollo/client";
import {
    AuthenticateUserWithPasswordMutationVariables,
    UserCreateInput, ViewerQuery
} from "../gql/graphql";
import {clearToken, setToken} from "./token";
import {useRouter} from "next/router";

export const VIEWER_FRAGMENT = gql(`
    fragment ViewerFragment on User {
        id
        email
        name
    }
`);

const VIEWER = gql(`
    query Viewer {
        viewer: authenticatedUser {
            id
            ...ViewerFragment
        }
    }
`);

const LOGIN_USER = gql(`
  mutation authenticateUserWithPassword($email: String, $password: String) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
    }
  }
`);

const CREATE_USER = gql(`
  mutation createUser($data: UserCreateInput) {
    createUser(data: $data) {
      id
    }
  }
`);

const LOGOUT = gql(`
  mutation logout {
    unauthenticateUser {
      success
    }
  }
`);

export interface AuthContextValue {
    viewer: ViewerQuery["viewer"];
    loggedIn: boolean;
    authPending: boolean;
    loginPending: boolean;
    signupPending: boolean;
    login: (data: AuthenticateUserWithPasswordMutationVariables) => Promise<void>;
    signup: (data: UserCreateInput) => Promise<void>;
    logout: () => Promise<void>;
}

async function asyncNoop() {}

const defaultValue: AuthContextValue = {
    viewer: null,
    loggedIn: false,
    authPending: false,
    login: asyncNoop,
    loginPending: false,
    signup: asyncNoop,
    signupPending: false,
    logout: asyncNoop
}

export const AuthContext = React.createContext<AuthContextValue>(defaultValue);

export interface AuthProviderProps {
    children?: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [pending, setPending] = useState(false);
    const { data, client, loading: viewerPending } = useQuery(VIEWER, {
        fetchPolicy: "network-only"
    });

    const [loginUser, { loading: loginPending }] = useMutation(LOGIN_USER);
    const [createUser, { loading: signupPending }] = useMutation(CREATE_USER);
    const [logoutUser] = useMutation(LOGOUT);

    const loggedIn = !!data?.viewer?.id;
    const authPending = viewerPending || loginPending || signupPending || pending;

    const login = useCallback<AuthContextValue["login"]>(async ({ email, password }) => {
        setPending(true)

        try {
            const { data } = await loginUser({
                variables: { email, password }
            });

            const token = data?.authenticateUserWithPassword?.token;

            if (token) {
                setToken(token);
                await client.resetStore();
                setPending(false);
                return;
            }
        } catch (err) {
            clearToken();
            setPending(false);
            throw err;
        } finally {
            setPending(false);
        }

        clearToken();
    }, []);

    const signup = useCallback<AuthContextValue["signup"]>(async ({ name, email, password }) => {
        setPending(true)
        await createUser({
            variables: {
                data: {
                    name,
                    email,
                    password
                }
            }
        });

        await login({ email, password });
    }, []);

    const logout = useCallback<AuthContextValue["logout"]>(async () => {
        clearToken();
        client.resetStore();
        logoutUser();
    }, []);

    const value = useMemo<AuthContextValue>(() => ({
        viewer: data?.viewer,
        loggedIn,
        authPending,
        login,
        loginPending,
        signup,
        signupPending,
        logout
    }), [loginPending, signupPending, loggedIn, authPending, data?.viewer])

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )

}

export function useAuth(): AuthContextValue {
    return useContext(AuthContext);
}
