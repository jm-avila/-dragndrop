import React, { Fragment, useRef } from "react";

import "./App.css";

function App() {
  const draggedElementRef = useRef(null);
  const draggedElement = (
    <div className="fill" draggable={true} ref={draggedElementRef}></div>
  );

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

export default App;

function handletDragStart(e) {
  const { target } = e;
  target.className += " hold";
  setTimeout(() => (target.className += " invisible"), 0);
}

function handleDragEnd(e) {
  e.target.className = "fill";
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter(e) {
  e.preventDefault();
  e.target.className += " hovered";
}

function handleDragLeave(e) {
  e.target.className = "empty";
}

function handleDrop(e, element) {
  const { target } = e;
  target.className = "empty";
  target.append(element.current);
}
