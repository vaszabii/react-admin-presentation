import { Calendar } from "@react-admin/ra-calendar";
import React, { useEffect } from "react";
import { List, useDataProvider, useGetList, useNotify } from "react-admin";

const CalendarForLive = () => {
  const notify = useNotify();
  const { data, refetch } = useGetList("events");
  const dataProvider = useDataProvider();

  useEffect(() => {
    const callback = (event: any) => {
      // event is like
      // {
      //     topic: 'messages',
      //     type: 'created',
      //     payload: 'New message',
      // }
      refetch();
      notify("Update in calendar");
    };
    // subscribe
    dataProvider.subscribe("calendarUpdate", callback);
    // unsubscribe
    return () => dataProvider.unsubscribe("calendarUpdate", callback);
  }, [notify, dataProvider, refetch]);

  return (
    <List resource="events">
      <Calendar events={data} />
    </List>
  );
};

export default CalendarForLive;
