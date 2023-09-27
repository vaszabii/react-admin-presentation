import React from "react";
import { AppBar, TitlePortal } from "react-admin";

import { Box } from "@mui/material";

import CounterDisplay from "./CounterDisplay";

const CustomAppbar = () => {
  return (
    <AppBar color="primary">
      <TitlePortal />
      <Box flex="1" />
      <CounterDisplay />
    </AppBar>
  );
};

export default CustomAppbar;
