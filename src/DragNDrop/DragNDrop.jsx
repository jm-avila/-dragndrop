import React from "react";
import "./DragNDrop.css";
import DraggedElement from "./DraggedElement";
import Grid from "./Grid";

function DragNDrop() {
  return <Grid {...DraggedElement()} />;
}

export default DragNDrop;
