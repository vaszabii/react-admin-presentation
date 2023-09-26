import React from "react";
import MuiDialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import { useNotify } from "react-admin";

interface DialogInDialogProps {
  open: boolean;
  onClose: () => void;
}

const DialogInDialog = ({ open, onClose }: DialogInDialogProps) => {
  const notify = useNotify();

  const onNotifyClick = () => {
    notify(`You have benn notified`, {
      type: "success",
      anchorOrigin: { vertical: "top", horizontal: "right" },
      autoHideDuration: 5000,
    });
  };
  return (
    <MuiDialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      Dialog in dialog
      <Button onClick={onNotifyClick}>Notify me</Button>
    </MuiDialog>
  );
};

export default DialogInDialog;
