import React, {useContext} from 'react'
import Main from '../../components/Home/main/Main'
import Logos from '../../components/Home/logos/Logos'
import './Home.css'
import { ModeContext } from '../../context/ModeContext.js'

function Home() {

  const {darkMode,setDarkMode}=useContext(ModeContext);

  return (
      <div className={darkMode ? "dark-home-container" : "home-container"}>
        <Main />
        <Logos/>
        <footer>
            <div className={darkMode ? "dark-footer-container" : "footer-container"}>
              <a className={darkMode ? "reference-dark" : "reference"}href="https://www.watchmode.com/">Streaming Data Provided By WatchMode</a>
            </div>
            </footer>
    </div>
  )
}

export default Home
