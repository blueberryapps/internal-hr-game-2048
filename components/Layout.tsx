import React from "react";
import {useAuth} from "../lib/auth";
import {SplashScreen} from "./SplashScreen";
import {useRouter} from "next/router";
import {PUBLIC_ROUTES, ROUTES} from "../lib/routes";

export interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { authPending, loggedIn } = useAuth();
    const router = useRouter();

    if (authPending) {
        return <SplashScreen />;
    }

    let redirectPath;

    if (loggedIn && router.asPath === ROUTES.LOGIN) {
        redirectPath = ROUTES.HALL_OF_FAME;
        router.push(ROUTES.HALL_OF_FAME);
    }

    if (!loggedIn && !PUBLIC_ROUTES.has(router.asPath)) {
        redirectPath = ROUTES.LOGIN;
    }

    if (redirectPath) {
        router.push(redirectPath);
        return <SplashScreen />
    }

    return (
        <>{children}</>
    );
}
