import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import About from './About.jsx';
import Coding from './Coding.jsx';
import Animation from './Animation.jsx';
import Contact from './Contact.jsx';

const App = () => {
  const [current, setCurrent] = useState('about');

  return (
    <div>
      <Sidebar focused={current} changeFocus={setCurrent} />
      {current === 'about' && <About />}
      {current === 'coding' && <Coding />}
      {current === 'animation' && <Animation />}
      {current === 'contact' && <Contact />}
    </div>
  )
}

export default App;
