import React, {useContext} from 'react'
import Main from '../../components/Home/main/Main'
import Logos from '../../components/Home/logos/Logos'
import './Home.css'
import Footer from '../../components/footer/Footer'
import { ModeContext } from '../../context/ModeContext.js'

function Home() {

  const {darkMode,setDarkMode}=useContext(ModeContext);

  return (
      <div className={darkMode ? "dark-home-container" : "home-container"}>
        <Main />
        <Logos />
    </div>
  )
}

export default Home
