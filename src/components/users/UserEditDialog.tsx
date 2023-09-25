import React, { ReactElement } from "react";
import { SelectArrayInput, SimpleForm, TextInput } from "react-admin";

import { EditDialog } from "@react-admin/ra-form-layout";

import { Box, Button, Chip, Typography } from "@mui/material";
import MuiDialog from "@mui/material/Dialog";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import TourIcon from "@mui/icons-material/Tour";
import Icon from "@mui/material/Icon";

import { useDialog } from "../../utils/useDialog";

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
    console.log(selected);
    if (selected.length === 0) {
      return null;
    }
    // This will return a comma-separated list of the values.
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
      <MuiDialog open={dialogOpen} onClose={setClose}>
        Dialog in dialog
      </MuiDialog>
    </EditDialog>
  );
};

export default UserEditDialog;
