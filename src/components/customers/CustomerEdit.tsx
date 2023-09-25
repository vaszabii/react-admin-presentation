import React from "react";
import { EditBase, SimpleForm, TextInput } from "react-admin";

interface CustomerEditProps {
  selectedId?: number;
}

const CustomerEdit = ({ selectedId }: CustomerEditProps) => {
  return selectedId ? (
    <EditBase id={selectedId}>
      <SimpleForm>
        <TextInput source="name" fullWidth required />
        <TextInput source="email" multiline fullWidth />
      </SimpleForm>
    </EditBase>
  ) : null;
};

export default CustomerEdit;
