import { Box } from "@mui/material";
import { CompleteCalendar } from "@react-admin/ra-calendar";
import React from "react";
import {
  BooleanInput,
  DateTimeInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const styles = {
  calendarContainer: {
    maxHeight: 500,
  },
};

const CalendarPage = ({ props }: any) => {
  return (
    <Box sx={styles.calendarContainer}>
      <CompleteCalendar {...props} CalendarProps={{ height: 650 }}>
        <SimpleForm>
          <TextInput source="title" autoFocus validate={required()} />
          <DateTimeInput source="start" validate={required()} />
          <DateTimeInput source="end" validate={required()} />
          <BooleanInput source="allDay" />
        </SimpleForm>
      </CompleteCalendar>
    </Box>
  );
};

export default CalendarPage;
