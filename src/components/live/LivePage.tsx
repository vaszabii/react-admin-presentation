import React from "react";
import { useDataProvider, useUpdate } from "react-admin";

import { Button } from "@mui/material";
import CalendarForLive from "../calendar/CalendarForLive";
import { wait } from "../../dataProvider/simulateRealtime";

const previousData = {
  id: "432647",
  title: "Team Meeting",
  start: "2023-09-28T09:00:00.000Z",
  end: "2023-09-28T10:30:00.000Z",
  backgroundColor: "#FF5733",
};

const updatedData = {
  id: "432647",
  title: "Team Meeting",
  start: "2023-09-27T09:00:00.000Z",
  end: "2023-09-27T10:30:00.000Z",
  backgroundColor: "#FF5733",
};

const LivePage = () => {
  const dataProvider = useDataProvider();

  const [update] = useUpdate("events", {
    id: "432647",
    data: updatedData,
  });

  const onClickNotification = async () => {
    update();

    await wait(2);

    dataProvider.publish("calendarUpdate", {
      type: "updated",
      payload: { eventId: 1 },
    });
  };

  return (
    <>
      Live
      <Button onClick={onClickNotification}>Set orange event to date 27</Button>
      <CalendarForLive />
    </>
  );
};

export default LivePage;
