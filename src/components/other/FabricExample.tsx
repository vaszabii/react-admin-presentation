import React from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

import { Box, Button, Typography } from "@mui/material";
import "./fabric.css";

const FabricExample = () => {
  const { editor, onReady } = useFabricJSEditor({
    defaultFillColor: "#ffa000",
  });
  const onAddCircle = () => {
    editor?.addCircle();
  };
  const onAddRectangle = () => {
    editor?.addRectangle();
  };

  return (
    <Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h4">Fabric example</Typography>
      </Box>
      <Button variant="contained" onClick={onAddCircle} sx={{ mr: 2 }}>
        Add circle
      </Button>
      <Button variant="contained" onClick={onAddRectangle}>
        Add Rectangle
      </Button>
      <Box sx={{ height: 400 }}>
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      </Box>
    </Box>
  );
};

export default FabricExample;
