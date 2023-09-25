import React from "react";
import {
  ArrayInput,
  DateInput,
  EditBase,
  Identifier,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

interface PostAsideEditProps {
  selectedId?: Identifier;
}

const PostAsideEdit = ({ selectedId }: PostAsideEditProps) => {
  return selectedId ? (
    <EditBase id={selectedId}>
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
    </EditBase>
  ) : null;
};

export default PostAsideEdit;
