import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";

export default function Registration() {
  const [open, setOpen] = React.useState(false);

  //TODO: To registration, call the mutation createUser

  //TODO: Add form validations

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle color="primary.dark">Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText color="primary.main">
          Fill out the form carefully for registration
        </DialogContentText>
        <Grid container spacing={2} pt={2}>
          <Grid item xs={6}>
            <TextField label="First name" size="small" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last name" size="small" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="E-mail" size="small" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" size="small" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Confirm password" size="small" fullWidth />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={2} px={2} pb={1} justifyContent="flex-end">
          <Grid item>
            <Button onClick={handleClose}>Cancel</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClose}>Sign Up</Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
