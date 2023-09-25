import React from "react";
import { BulkDeleteButton, EmailField, List, TextField } from "react-admin";

import { EditableDatagrid } from "@react-admin/ra-editable-datagrid";

import UserListRowEdit from "./UserListRowEdit";
import DeleteEmailsButton from "./DeleteEmailsButton";

const EditableUserList = () => {
  const PostBulkActionButtons = (props: any) => (
    <>
      <DeleteEmailsButton label="Delete emails" {...props} />
      {/* Add the default bulk delete action */}
      <BulkDeleteButton {...props} />
    </>
  );

  return (
    <List
      resource="users"
      // hasCreate -> Sima create button-t kitesz, de redirectel a /users oldalra, ezért ebben az esetben ez a megoldás nem jó
      empty={false}
    >
      <EditableDatagrid
        mutationMode="undoable"
        editForm={<UserListRowEdit />}
        createForm={<UserListRowEdit />}
        bulkActionButtons={<PostBulkActionButtons />}
      >
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
      </EditableDatagrid>
    </List>
  );
};

export default EditableUserList;
