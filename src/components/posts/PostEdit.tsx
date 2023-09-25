import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

const PostEdit = ({ ...props }: any) => {
  return (
    <Edit title="Post edit" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="title" fullWidth required />
        <TextInput source="body" multiline fullWidth />
        <DateInput name="Published" source="publishedAt" fullWidth />
        <ArrayInput source="tags">
          <SimpleFormIterator inline>
            <TextInput source="tagName" helperText={false} />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
