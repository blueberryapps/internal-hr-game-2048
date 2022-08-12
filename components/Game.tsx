import * as React from "react";

import { Box, Button, Container, Grid, Typography } from "@mui/material";

export default function Game() {
  //TODO: To start the game, call the query newGame

  //TODO: For each step in the game, call the mutation processGame

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

  return (
    <Container maxWidth="sm">
      <Box pt={8}>
        <Grid container spacing={2}>
          <Grid item flex={1}>
            <Typography
              variant="h1"
              gutterBottom
              component="div"
              fontWeight="bold"
              color="primary.dark"
            >
              2048
            </Typography>
          </Grid>
          <Grid item>
            <Box bgcolor="#bbada0" py={0.5} px={2} borderRadius={1}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography
                    variant="body1"
                    component="div"
                    fontWeight="bold"
                    color="#d7ccc8"
                  >
                    SCORE
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                    color="white"
                  >
                    0
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Box bgcolor="#bbada0" py={0.5} px={2} borderRadius={1}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography
                    variant="body1"
                    component="div"
                    fontWeight="bold"
                    color="#d7ccc8"
                  >
                    HIGH SCORE
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                    color="white"
                  >
                    1408
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Typography variant="body1" component="div" color="primary.main">
            Join the tiles, get to
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            component="div"
            fontWeight="bold"
            color="primary.main"
          >
            2048!
          </Typography>
        </Grid>
        <Grid item flex={1} textAlign="end">
          <Button variant="contained" onClick={() => console.log("new game")}>
            New game
          </Button>
        </Grid>
      </Grid>
      <Box
        width={470}
        height={470}
        margin="0 auto"
        my={5}
        bgcolor="#bbada0"
        borderRadius={2}
      >
        {/* TODO: Show Grid for Game 2048 */}
      </Box>
    </Container>
  );
}
