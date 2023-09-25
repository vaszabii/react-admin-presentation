import React from "react";
import { Title } from "react-admin";

import { Grid } from "@mui/material";

import CustomerList from "../customers/CustomerList";
import PostListSideEdit from "../posts/PostListSideEdit";
import EditableUserList from "../users/EditableUserList";

const CustomPage = () => {
  return (
    <>
      <Title title="Custom page title" />
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={12}>
          <PostListSideEdit resource="posts" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <EditableUserList />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomerList />
        </Grid>
      </Grid>
    </>
  );
};

export default CustomPage;
