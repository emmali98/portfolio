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
  font-size: 2em;
  font-weight: ${props => props.selected ? '600' : '200'};
  color: ${props => props.selected ? props.textColors[0] : props.textColors[1]};
  transition: color 2s ease;
  cursor: default;
`;

const textPalette = {
  about: ['rgb(94, 123, 168)', 'rgb(134, 91, 66)'],
  coding: ['rgb(105, 106, 179)', 'rgb(112, 72, 48)'],
  animation: ['rgb(247, 246, 176)', 'rgb(240, 212, 185)'],
  contact: ['rgb(247, 176, 179)', 'rgb(130, 125, 177)']
}

const Sidebar = ({ focused, changeFocus }) => {
  const handleClick = (e) => {
    changeFocus(e.target.id);
  }

  const links = ['about', 'coding', 'animation', 'contact'];

  return (
    <Wrapper onClick={handleClick}>
    {links.map((link) =>
      <Link
        textColors={textPalette[focused]}
        selected={link === focused}
        id={link}
        key={link}>
      {link[0].toUpperCase() + link.slice(1)}</Link>)}
    </Wrapper>
  )
}

export default Sidebar;
