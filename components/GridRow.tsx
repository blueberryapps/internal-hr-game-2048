import React from "react";
import {styled} from "@mui/system";

const StyledGridRow = styled("div")({
    display: "flex",
    flex: 1
})

export interface GridRowProps {
    children?: React.ReactNode
}

export const GridRow: React.FC<GridRowProps> = ({ children }) => {
    return (
        <StyledGridRow>{children}</StyledGridRow>
    )
}
