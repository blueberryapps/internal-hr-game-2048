import * as React from "react";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
  Table,
  Typography,
  Paper,
} from "@mui/material";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import {ROUTES} from "../lib/routes";
import {gql} from "../gql";
import {useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import {SortScoresBy} from "../gql/graphql";
import {useAuth} from "../lib/auth";
import {useState} from "react";

const TOP_SCORES = gql(`
  query TopScores($where: ScoreWhereInput, $first: Int, $skip: Int, $sortBy: [SortScoresBy!]) {
    allScores(where: $where, first: $first, skip: $skip, sortBy: $sortBy) {
      id
      player {
        id
        name
      }
      score
    }
  }
`)

const iconsByPosition: Record<number, React.ReactNode> = {
  0: <Star />,
  1: <StarHalf />,
  2: <StarBorder />
};

export default function HallOfFame() {
  const { viewer } = useAuth();
  const router = useRouter();
  const [limit, setLimit] = useState(10);
  const { data, fetchMore } = useQuery(TOP_SCORES, {
    variables: {
      where: { score_gte: 0 }, // ignore nulls
      sortBy: [SortScoresBy.ScoreDesc],
      first: limit
    }
  });

  // For some reason apollo's not handling cache on fetch more so whole table blinks and skips up
  const handleFetch = async () => {
    try {
      const currentLength = data?.allScores?.length || 0;
      const result = await fetchMore({
        variables: {
          limit: 10,
          skip: currentLength
        }
      })

      setLimit((result?.data?.allScores?.length ?? 0) + currentLength)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}>
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
            <Avatar alt={viewer?.name || ""} sx={{ width: 48, height: 48 }} />
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="primary.dark"
            >
              {viewer?.name}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container justifyContent="center" mt={2}>
        <Grid item>
          <Button variant="contained" onClick={() => router.push(ROUTES.GAME)}>
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
      <Grid container direction="column" alignItems="center" mt={3} sx={{ flexShrink: 1, overflow: "hidden" }}>
        <Grid item sx={{ width: '100%', overflow: "hidden", display: "flex" }}>
          <TableContainer sx={{ maxHeight: "100%" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {data?.allScores?.map((score, index) => {
                  if (!score) {
                    return null;
                  }

                  return (
                      <TableRow
                          key={score.id || score.player?.id || index}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}.
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <div>{score.player?.name}</div> {iconsByPosition[index]}
                          </Box>
                        </TableCell>
                        <TableCell>{score.score ?? 0}</TableCell>
                      </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={2}>
        <Grid item>
          <Button onClick={handleFetch}>show more</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
