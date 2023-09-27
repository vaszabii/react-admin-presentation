import React from "react";
import { Menu } from "react-admin";

import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";
import LabelIcon from "@mui/icons-material/Label";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const CustomMenu = () => {
  return (
    <Menu>
      <Menu.Item to="/posts" primaryText="Posts" leftIcon={<BookIcon />} />
      <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />} />
      <Menu.Item
        to="/customers"
        primaryText="Customers"
        leftIcon={<PeopleIcon />}
      />
      <Menu.Item to="/custom" primaryText="Custom" leftIcon={<LabelIcon />} />
      <Menu.Item
        to="/events"
        primaryText="Calendar"
        leftIcon={<CalendarMonthIcon />}
      />
      <Menu.Item
        to="/live"
        primaryText="Live Calendar"
        leftIcon={<CalendarMonthIcon />}
      />
    </Menu>
  );
};
