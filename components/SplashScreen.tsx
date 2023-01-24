import React from "react";
import {Box, CircularProgress, Container} from "@mui/material";

export interface SplashScreenProps {}

export const SplashScreen: React.FC<SplashScreenProps> = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100vw"
            height="100vh"
        >
            <CircularProgress />
        </Box>
    )
}
