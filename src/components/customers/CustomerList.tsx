import React, { useState } from "react";
import { List, Datagrid, TextField, Button, FunctionField } from "react-admin";

import IconKeyboardArrowRight from "@mui/icons-material/ArrowRight";
import EditIcon from "@mui/icons-material/Edit";
import { Drawer } from "@mui/material";

import CustomerEdit from "./CustomerEdit";
import SecondDrawer from "./SecondDrawer";

const CustomerList = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [selectedId, setSelectedId] = useState<number>();

  const openEditPanel = () => {
    setShowPanel(true);
  };

  const handleCloseClick = () => {
    setShowPanel(false);
  };

  const [showSecondPanel, setShowSecondPanel] = useState(false);

  const editButtonClicked = (id: number) => {
    setSelectedId(id);

    openEditPanel();
  };

  return (
    <List resource="customers">
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="address" />

        <FunctionField
          label="icon"
          render={(record: any) => (
            <Button onClick={() => editButtonClicked(record.id)}>
              <EditIcon />
            </Button>
          )}
        />
      </Datagrid>

      <Drawer
        anchor="right"
        open={showPanel}
        onClose={handleCloseClick}
        PaperProps={{
          sx: { width: "50%" },
        }}
      >
        <Button label="Close" onClick={handleCloseClick}>
          <IconKeyboardArrowRight />
        </Button>

        <CustomerEdit selectedId={selectedId} />

        <Button onClick={() => setShowSecondPanel(true)}>
          <>Open Second panel</>
        </Button>

        <SecondDrawer
          open={showSecondPanel}
          onClose={() => setShowSecondPanel(false)}
        />
      </Drawer>
    </List>
  );
};

export default CustomerList;
