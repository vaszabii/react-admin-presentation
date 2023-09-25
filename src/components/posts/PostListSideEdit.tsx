import React, { useState } from "react";
import {
  Datagrid,
  DateField,
  Identifier,
  List,
  RaRecord,
  TextField,
} from "react-admin";

import PostAsideEdit from "./PostAsideEdit";

const PostListSideEdit = ({ ...props }: any) => {
  const [editId, setEditId] = useState<Identifier>();
  const onRowClick = (id: Identifier, resource: string, record: RaRecord) => {
    setEditId(id);

    return ""; // Workaround
  };

  return (
    <List {...props} aside={<PostAsideEdit selectedId={editId} />}>
      <Datagrid rowClick={onRowClick}>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="publishedAt" />
      </Datagrid>
    </List>
  );
};

export default PostListSideEdit;
