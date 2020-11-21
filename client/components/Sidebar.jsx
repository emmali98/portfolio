import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
`;

const Link = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.focused ? 'black' : 'palevioletred'};
  cursor: default;
`;

const Sidebar = ({ focused, changeFocus }) => {
  const handleClick = (e) => {
    changeFocus(e.target.id);
  }

  const links = ['about', 'coding', 'animation', 'contact'];

  return (
    <Wrapper onClick={handleClick}>
    {links.map((link) =>
      <Link
        focused={link === focused}
        id={link}
        key={link}>
      {link}</Link>)}
    </Wrapper>
  )
}

export default Sidebar;
