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

export {
  handletDragStart,
  handleDragEnd,
  handleDragOver,
  handleDragEnter,
  handleDragLeave,
  handleDrop,
};
