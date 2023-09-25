import { useState } from "react";

export type UseDialog = (
  initialOpen?: boolean
) => [boolean, () => void, () => void];

export const useDialog: UseDialog = (initialOpen = false) => {
  const [dialogOpen, setDialogOpen] = useState(initialOpen);

  const setOpen = () => {
    setDialogOpen(true);
  };

  const setClose = () => {
    setDialogOpen(false);
  };

  return [dialogOpen, setOpen, setClose];
};
