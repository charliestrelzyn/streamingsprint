import React, {useContext} from 'react'
import Main from '../../components/main/Main'
import Logos from '../../components/Logos'
import './Home.css'
import { ModeContext } from '../../context/ModeContext.js'

function Home() {

  const {darkMode,setDarkMode}=useContext(ModeContext);

  return (
      <div class={darkMode ? "dark-home-container" : "home-container"}>
        <Main />
        <Logos/>
        <p>Hello World</p>
        <footer>
            <div className={darkMode ? "dark-footer-container" : "footer-container"}>
              <a className={darkMode ? "reference-dark" : "reference"}href="https://www.watchmode.com/">Streaming Data Provided By WatchMode</a>
            </div>
            </footer>
    </div>
  )
}

export default Home
