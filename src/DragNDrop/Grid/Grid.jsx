import React, { Fragment } from "react";
import {
  handletDragStart,
  handleDragEnd,
  handleDragOver,
  handleDragEnter,
  handleDragLeave,
  handleDrop,
} from "./eventHandlers.js";

function Grid({ draggedElement, draggedElementRef }) {
  return (
    <Fragment>
      {Array.from({ length: 5 }, (...args) => (
        <div
          className="empty"
          key={args[1]}
          onDragStart={handletDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, draggedElementRef)}
        >
          {!args[1] && draggedElement}
        </div>
      ))}
    </Fragment>
  );
}

export default Grid;
