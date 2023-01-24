import * as React from "react";
import { Key } from 'ts-key-enum';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {gql} from "../gql";
import {useMutation, useQuery} from "@apollo/client";
import {GridTile} from "./GridTile";
import {GridRow} from "./GridRow";
import {GridBoard} from "./GridBoard";
import {useEventListener} from "../hooks/useEventListener";
import {Direction, GameInput} from "../gql/graphql";

const GAME_FRAGMENT = gql(`
  fragment GameFragment on Game {
    state
    score
    finished
  }
`)

const NEW_GAME = gql(`
  query NewGame {
    newGame {
      ...GameFragment
    }
  }
`)

const PROCESS_GAME = gql(`
  mutation processGame($game: GameInput!) {
    processGame(game: $game) {
      ...GameFragment
    }
  }
`)

const HIGH_SCORE = gql(`
  query HighScore($where: ScoreWhereInput, $first: Int, $sortBy: [SortScoresBy!]) {
    allScores(where: $where, first: $first, sortBy: $sortBy) {
      id
      score
    }
  }
`)

const keyDirectionMap: Record<string, Direction> = {
  [Key.ArrowUp]: Direction.Up,
  [Key.ArrowRight]: Direction.Right,
  [Key.ArrowDown]: Direction.Down,
  [Key.ArrowLeft]: Direction.Left
}

export default function Game() {
  const { data: highScoreData } = useQuery(HIGH_SCORE);
  const { data, refetch } = useQuery(NEW_GAME);
  const [processGame] = useMutation(PROCESS_GAME, {
    update(cache, data) {
      const result = data?.data?.processGame;

      if (!result) {
        return;
      }

      cache.writeQuery({
        query: NEW_GAME,
        data: {
          newGame: {
            ...result
          }
        }
      })
    }
  });

  const highScore = highScoreData?.allScores && highScoreData?.allScores[0]?.score || data?.newGame?.score || 0;

  useEventListener(window, "keydown", async (event) => {
    const direction = keyDirectionMap[event.key];

    if (!direction) {
      return;
    }

    try {
      const gameInput: GameInput = {
        state: [...(data?.newGame?.state || [])],
        score: data?.newGame?.score || 0,
        direction
      }

      await processGame({
        variables: {
          game: gameInput
        }
      })
    } catch (err) {
      console.error(err);
    }
  })

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
                    {data?.newGame?.score}
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
                    {highScore}
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
          <Button variant="contained" onClick={() => refetch()}>
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
        <GridBoard>
          {data?.newGame?.state?.map((row, rowIndex) => (
              <GridRow key={rowIndex}>
                {row?.map((value, colIndex) => (
                    <GridTile key={`${colIndex}-${rowIndex}`} value={value} />
                ))}
              </GridRow>
          ))}
        </GridBoard>
      </Box>
    </Container>
  );
}
