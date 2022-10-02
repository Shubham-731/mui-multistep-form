import React from "react";

import { Typography, TextField, Box, Button } from "@mui/material";

const User = () => {
  return (
    <>
      <Typography variant="h5" textAlign={"center"}>
        Your details
      </Typography>

      <Box style={{ maxWidth: "320px", margin: "auto" }}>
        <TextField
          id="standard-basic"
          label="First Name"
          variant="standard"
          fullWidth
          margin="normal"
        />
        <TextField
          id="standard-basic"
          label="Last name"
          variant="standard"
          fullWidth
          margin="normal"
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          margin="normal"
          fullWidth
        />

        <Button varient="text" fullWidth>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default User;
