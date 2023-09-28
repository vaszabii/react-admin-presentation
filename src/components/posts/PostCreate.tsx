import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const PostCreate = ({ ...props }: any) => {
  return (
    <Create title="Post create" {...props}>
      <SimpleForm>
        <TextInput source="title" fullWidth required placeholder="Title" />
        <TextInput source="body" multiline fullWidth />
        <TextInput multiline source="title" />
        <DateInput name="Published" source="publishedAt" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
