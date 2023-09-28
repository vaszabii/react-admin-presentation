import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import { useGetOne } from "react-admin";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const styles = {
  root: {
    mr: 5,
    textAlign: "center",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

const LineChartExample = () => {
  const { data } = useGetOne("statistics", { id: 2 });

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];

  const postsDataset = useMemo(
    () => ({
      label: "Posts",
      data: [
        data?.January ?? 0,
        data?.February ?? 0,
        data?.March ?? 0,
        data?.April ?? 0,
        data?.May ?? 0,
        data?.June ?? 0,
        data?.July ?? 0,
        data?.August ?? 0,
        data?.September ?? 0,
        data?.October ?? 0,
        data?.November ?? 0,
        data?.December ?? 0,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    }),
    [data]
  );

  return (
    <Box sx={styles.root}>
      <Box sx={{ m: 2 }}>
        <Typography variant="h4">Posts in 2022</Typography>
      </Box>
      <Line
        options={{ responsive: true }}
        data={{
          labels,
          datasets: [postsDataset],
        }}
        updateMode="resize"
      />
    </Box>
  );
};

export default LineChartExample;
