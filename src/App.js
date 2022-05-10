import React from 'react';
import Header from './Components/header';
import Languages from './Components/language';
import Projects from './Components/projects';
import Skills from './Components/skills';
import Work from './Components/work';
import Maintained from './Components/maintained';
import './app.scss'

export const App = () =>  {
  return (
      <div>
      <Header />
      <Languages />
      <Skills/>
      <Work/>
      <Projects/>
      <Maintained/> 
      </div>
  )
}

export default App;
