import React from "react";
import MuiDialog from "@mui/material/Dialog";
import { Box, Button } from "@mui/material";
import { useNotify, useStore } from "react-admin";

interface DialogInDialogProps {
  open: boolean;
  onClose: () => void;
}

const DialogInDialog = ({ open, onClose }: DialogInDialogProps) => {
  const notify = useNotify();
  const [countedNumber, setCountedNumber] = useStore("countedNumber", 0);

  const onNotifyClick = () => {
    notify(`You have benn notified`, {
      type: "success",
      anchorOrigin: { vertical: "top", horizontal: "right" },
      autoHideDuration: 5000,
    });
  };

  const onIncrease = () => {
    setCountedNumber(countedNumber + 1);
  };

  const onDecrease = () => {
    setCountedNumber(countedNumber - 1);
  };

  return (
    <MuiDialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      Dialog in dialog {countedNumber}
      <Button onClick={onNotifyClick}>Notify me</Button>
      <Box>
        <Button onClick={onDecrease}>Counter decrease</Button>
        <Button onClick={onIncrease}>Counter increase</Button>
      </Box>
    </MuiDialog>
  );
};

export default DialogInDialog;
