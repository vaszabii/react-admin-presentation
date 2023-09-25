import React from "react";
import { TextField, TextInput } from "react-admin";

import { RowForm } from "@react-admin/ra-editable-datagrid";

const UserListRowEdit = () => {
  return (
    <RowForm>
      <TextField source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
    </RowForm>
  );
};

export default UserListRowEdit;
