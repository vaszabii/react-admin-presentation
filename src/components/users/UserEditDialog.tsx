import React from "react";
import { SelectArrayInput, SimpleForm, TextInput } from "react-admin";

import { EditDialog } from "@react-admin/ra-form-layout";

import { Box, Button, Chip, Typography } from "@mui/material";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";

import { useDialog } from "../../utils/useDialog";
import DialogInDialog from "./DialogInDialog";

interface ChoiceType {
  id: string;
  iconName: string;
  value: string;
}

const styles = {
  optionContainer: {
    display: "flex",
    flexDirection: "column",
  },
  optionDescription: {
    fontSize: 10,
  },
};

const UserEditDialog = () => {
  const [dialogOpen, setOpen, setClose] = useDialog();

  const onClickHandler = () => {
    setOpen();
  };

  const languageChoices: ChoiceType[] = [
    { id: "Hungarian", iconName: "placeholder", value: "Hungarian" },
    { id: "English", iconName: "placeholder", value: "English" },
    { id: "Espanol", iconName: "placeholder", value: "Espanol" },
    { id: "Valami", iconName: "placeholder", value: "Valami" },
    { id: "Valami2", iconName: "placeholder", value: "Valami2" },
  ];

  const optionRenderer = (choice: ChoiceType) => (
    <Box sx={styles.optionContainer}>
      <Box>
        <EmojiFlagsIcon />
        {choice.value}
      </Box>
      <Typography sx={styles.optionDescription}>Description</Typography>
    </Box>
  );

  const valueRender = (selected: any) => {
    if (selected.length === 0) {
      return null;
    }

    return (
      <>
        {selected.map((item: string) => (
          <Chip label={item} key={item} />
        ))}
      </>
    );
  };

  return (
    <EditDialog>
      <SimpleForm>
        <TextInput source="name" fullWidth required />
        <TextInput source="email" multiline fullWidth />
        <SelectArrayInput
          source="language"
          choices={languageChoices}
          optionText={optionRenderer}
          aria-multiline
          options={{ renderValue: valueRender }}
        />
      </SimpleForm>

      <Button onClick={onClickHandler}>Open dialog</Button>
      <DialogInDialog open={dialogOpen} onClose={setClose} />
    </EditDialog>
  );
};

export default UserEditDialog;
