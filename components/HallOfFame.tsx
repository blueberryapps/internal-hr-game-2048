import * as React from "react";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";

export default function HallOfFame() {
  //TODO: To view the hall of fame, call the query allScores

  //TODO: To start the game, call the query newGame

  return (
    <Container maxWidth="sm">
      <Box pt={8}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              color="primary.dark"
            >
              PLAY 2048
            </Typography>
          </Grid>
          <Grid item>
            <Avatar alt="Firstname lastname" sx={{ width: 48, height: 48 }} />
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="primary.dark"
            >
              Peter Unknown
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container justifyContent="center" mt={2}>
        <Grid item>
          <Button variant="contained" onClick={() => console.log("new game")}>
            New game
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={3}>
        <Grid item>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            color="primary.dark"
          >
            Hall of fame
          </Typography>
        </Grid>
      </Grid>
      {/* TODO: Show Hall of Fame */}
      <Grid container justifyContent="center" mt={2}>
        <Grid item>
          {/* TODO: Lazy loading */}
          <Button onClick={() => console.log("show more")}>show more</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
