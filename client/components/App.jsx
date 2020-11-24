import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar.jsx';
import About from './About.jsx';
import Coding from './Coding.jsx';
import Animation from './Animation.jsx';
import Contact from './Contact.jsx';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 4fr;
  background: ${props => props.bgColor};
  transition: background 2s ease;
`;

const bgColors = {
  about: 'rgb(255, 239, 180)',
  coding: 'rgb(255, 198, 138)',
  animation: 'rgb(226, 129, 103)',
  contact: 'rgb(40, 37, 87)'
};

const App = () => {
  const [current, setCurrent] = useState('about');

  return (
    <Wrapper bgColor={bgColors[current]}>
      <Sidebar focused={current} changeFocus={setCurrent} />
      {current === 'about' && <About />}
      {current === 'coding' && <Coding />}
      {current === 'animation' && <Animation />}
      {current === 'contact' && <Contact />}
    </Wrapper>
  )
}

export default App;
