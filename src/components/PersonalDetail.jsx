import React from "react";

import { Typography, TextField, Box, Button } from "@mui/material";

const User = () => {
  return (
    <>
      <Typography variant="h5" textAlign={"center"}>
        Your Personal Details (Optional)
      </Typography>

      <Box style={{ maxWidth: "320px", margin: "auto" }}>
        <TextField
          id="standard-basic"
          label="Occupation"
          variant="standard"
          fullWidth
          margin="normal"
        />
        <TextField
          id="filled-multiline-static"
          label="Address"
          multiline
          fullWidth
          margin="normal"
          variant="standard"
        />
        <TextField
          id="filled-multiline-static"
          label="Bio"
          multiline
          margin="normal"
          fullWidth
          variant="standard"
        />

        <Button varient="text" fullWidth>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default User;
