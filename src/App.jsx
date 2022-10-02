import React from "react";

import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";

import Forms from "./components/Forms";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Multistep Form
          </Typography>
        </Toolbar>
      </AppBar>

      <Forms />
    </>
  );
};

export default App;
