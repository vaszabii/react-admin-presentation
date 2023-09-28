import React from "react";
import { Menu } from "react-admin";

import { MultiLevelMenu } from "@react-admin/ra-navigation";

import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";
import LabelIcon from "@mui/icons-material/Label";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BathtubIcon from "@mui/icons-material/Bathtub";

export const CustomMenu = () => {
  return (
    <MultiLevelMenu>
      <Menu.Item to="/posts" primaryText="Posts" leftIcon={<BookIcon />} />

      <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />} />
      <Menu.Item
        to="/customers"
        primaryText="Customers"
        leftIcon={<PeopleIcon />}
      />
      <Menu.Item to="/custom" primaryText="Custom" leftIcon={<LabelIcon />} />
      <MultiLevelMenu.Item
        name="calendars"
        label="Calendars"
        icon={<CalendarMonthIcon />}
      >
        <MultiLevelMenu.Item name="events" to="/events" label="Calendar" />
        <MultiLevelMenu.Item name="live" to="/live" label="Live Calendar" />
      </MultiLevelMenu.Item>
      <Menu.Item
        to="/other"
        primaryText="3rd party"
        leftIcon={<BathtubIcon />}
      />
    </MultiLevelMenu>
  );
};
