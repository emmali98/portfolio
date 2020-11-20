import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar.jsx';
import About from './About.jsx';
import Coding from './Coding.jsx';
import Animation from './Animation.jsx';
import Contact from './Contact.jsx';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const App = () => {
  const [current, setCurrent] = useState('about');

  return (
    <Wrapper>
      <Sidebar focused={current} changeFocus={setCurrent} />
      {current === 'about' && <About />}
      {current === 'coding' && <Coding />}
      {current === 'animation' && <Animation />}
      {current === 'contact' && <Contact />}
    </Wrapper>
  )
}

export default App;
