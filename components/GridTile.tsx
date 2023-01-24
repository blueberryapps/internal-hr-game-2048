import React from "react";
import {Grid, Paper} from "@mui/material";
import {styled} from "@mui/system";


const getBgItemColor = (number: number) => {
    switch (number) {
        case 2:
            return "#eee4da";
        case 4:
            return "#eee1c9";
        case 8:
            return "#f3b27a";
        case 16:
            return "#f69664";
        case 32:
            return "#f77c5f";
        case 64:
            return "#f75f3b";
        case 128:
            return "#edd073";
        case 256:
            return "#edcc62";
        case 512:
            return "#edc950";
        case 1024:
            return "#ffc400";
        case 2048:
            return "#ffab00";
        default:
            return "#d7ccc8";
    }
};

export interface GridTileProps {
    value: number;
}

const StyledGridTile = styled("div")({
    display: "flex",
    flex: 1,
    margin: "7px",
    alignItems: "center",
    justifyContent: "center",
    fontSize: `16px`
})

export const GridTile: React.FC<GridTileProps> = ({ value }) => {
    return (
        <StyledGridTile style={{ backgroundColor: getBgItemColor(value) }}><div>{value}</div></StyledGridTile>
    )
}
