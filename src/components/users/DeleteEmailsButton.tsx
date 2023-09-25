import React from "react";
import { Button, useUpdateMany } from "react-admin";

const DeleteEmailsButton = ({ basePath, resource, selectedIds }: any) => {
  const [updateMany, { data, isLoading, error }] = useUpdateMany(resource, {
    ids: selectedIds,
    data: { email: "" },
  });

  const handleClick = () => {
    console.log(resource);
    updateMany();
  };
  return <Button label="Delete emails" onClick={handleClick} />;
};

export default DeleteEmailsButton;
