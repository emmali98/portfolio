import React from 'react';

const Sidebar = ({ focused, changeFocus }) => {
  const handleClick = (e) => {
    changeFocus(e.target.id);
    console.log(focused);
  }

  return (
    <div onClick={handleClick}>
      <div id="about">About</div>
      <div id="coding">Coding</div>
      <div id="animation">Animation</div>
      <div id="contact">Contact</div>
    </div>
  )
}

export default Sidebar;
