import React, { useRef } from "react";

function DraggedElement() {
  const draggedElementRef = useRef(null);
  const draggedElement = (
    <div className="fill" draggable={true} ref={draggedElementRef}></div>
  );

  return {
    draggedElement,
    draggedElementRef,
  };
}

export default DraggedElement;
