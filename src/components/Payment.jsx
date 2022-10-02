import React from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

const Payment = ({ onSubmit }) => {
  return (
    <>
      <Typography variant="h5" textAlign={"center"}>
        Your Payment Info
      </Typography>

      <Box style={{ maxWidth: "320px", margin: "auto" }}>
        <TextField
          id="standard-basic"
          label="Amount"
          variant="standard"
          fullWidth
          margin="normal"
        />

        <TextField
          id="standard-basic"
          label="Credit/Debit Card"
          variant="standard"
          fullWidth
          margin="normal"
        />

        <TextField
          id="standard-basic"
          label="CVV"
          variant="standard"
          fullWidth
          margin="normal"
        />

        <Button varient="text" fullWidth>
          Pay
        </Button>
      </Box>
    </>
  );
};

export default Payment;
