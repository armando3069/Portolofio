import './App.scss'
import Navbar from './components/navbar'
import Menu from './components/menu'
import Intro from './components/intro'
import Project from './components/project'
import Contacts from './components/contacts'
import Testimonial from './components/testimonial'
import Portofolio from './components/portofolio/portofolio'
import Space from './components/space'
import Aos from "aos";
import "aos/dist/aos.css"
import  { useState,useEffect } from 'react';


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

const [openMenu,setOpenMenu] = useState(false);


  return (
    <div className="App">

     <Navbar openMenu ={openMenu} setOpenMenu={setOpenMenu} /> 
    { openMenu && <Menu  openMenu ={openMenu} setOpenMenu={setOpenMenu}  />}

      <div className="sections">
        
        <Intro />
        <Project />
        <Space/>
        <Portofolio/>
        <Space/>
        <Contacts />
      </div>     
    </div>
  )
}

export default App
