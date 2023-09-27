import React, { useMemo } from "react";
import { useGetOne } from "react-admin";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

import { Box, Typography } from "@mui/material";

Chart.register(ArcElement, Tooltip, Legend);

const styles = {
  root: {
    maxHeight: "500px",
    maxWidth: "500px",
    textAlign: "center",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

const DonutExample = () => {
  const { data } = useGetOne("statistics", { id: 1 });

  const configuration = useMemo(
    () => [
      {
        label: () => "Hungarian",
        backgroundColor: "#EBE4D1",
        data: () => data?.hungarian ?? 0,
      },
      {
        label: () => "English",
        backgroundColor: "#B4B4B3",
        data: () => data?.english ?? 0,
      },
      {
        label: () => "Spanish",
        backgroundColor: "#26577C",
        data: () => data?.spanish ?? 0,
      },
      {
        label: () => "Italian",
        backgroundColor: "#E55604",
        data: () => data?.french ?? 0,
      },
      {
        label: () => "French",
        backgroundColor: "#219C90",
        data: () => data?.italian ?? 0,
      },
    ],
    [data]
  );

  return (
    <Box sx={styles.root}>
      <Box sx={{ m: 2 }}>
        <Typography variant="h4">Users languages</Typography>
      </Box>

      <Doughnut
        height={250}
        data={{
          labels: configuration.map(({ label }) => label()),
          datasets: [
            {
              backgroundColor: configuration.map(
                ({ backgroundColor }) => backgroundColor
              ),
              data: configuration.map(({ data }) => data()),
            },
          ],
        }}
      />
    </Box>
  );
};

export default DonutExample;
