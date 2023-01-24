import React from "react";
import {styled} from "@mui/system";

const StyledGridBoard = styled("div")({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "7px"
})

export interface GridBoardProps {
    children?: React.ReactNode
}

export const GridBoard: React.FC<GridBoardProps> = ({ children }) => {
    return (
        <StyledGridBoard>{children}</StyledGridBoard>
    )
}
