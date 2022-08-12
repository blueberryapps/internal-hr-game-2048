import { createTheme } from "@mui/material/styles";
import { brown, deepOrange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      light: brown[300],
      main: brown[600],
      dark: brown[800],
    },
  },
});
