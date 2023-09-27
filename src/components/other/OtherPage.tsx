import React from "react";

import { Grid } from "@mui/material";

import DonutExample from "./DonutExample";
import LineChartExample from "./LineChartExample";
import FabricExample from "./FabricExample";

const styles = {
  root: {
    mt: 5,
  },
  chartGridContainer: {
    maxHeight: 300,
  },
  fabricContainer: {
    mt: 5,
  },
};

const OtherPage = () => {
  return (
    <Grid container spacing={2} sx={styles.root}>
      <Grid item xs={12} md={5}>
        <DonutExample />
      </Grid>
      <Grid item xs={12} md={7}>
        <LineChartExample />
      </Grid>
      <Grid item xs={12} sx={styles.fabricContainer}>
        <FabricExample />
      </Grid>
    </Grid>
  );
};

export default OtherPage;
