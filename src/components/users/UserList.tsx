import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  FunctionField,
} from "react-admin";

import UserEditDialog from "./UserEditDialog";
import LanguagesField from "./LanguagesField";

const UserList = () => {
  return (
    <List resource="users">
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <FunctionField label="Language" render={() => <LanguagesField />} />
        <EditButton />
        <DeleteButton />
      </Datagrid>

      <UserEditDialog />
    </List>
  );
};

export default UserList;
