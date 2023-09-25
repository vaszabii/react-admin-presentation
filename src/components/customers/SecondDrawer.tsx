import { Drawer } from "@mui/material";
import React from "react";

interface SecondDrawerProps {
  open: boolean;
  onClose: () => void;
}

const SecondDrawer = ({ open, onClose }: SecondDrawerProps) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <>Drawer 2 content</>
    </Drawer>
  );
};

export default SecondDrawer;
