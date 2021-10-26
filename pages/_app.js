import '../styles/globals.css'
import "../styles/styles.css"

import { useState } from "react"
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/ThemeConfig" 
import Image from "next/image"

import lightModeIcon from "./img/lightmode.png"
import darkModeIcon from "./img/darkmode.png"


const DarkThemeButton = styled.button`
    width: 3vw;
    height: 3vw;
    background: #141417;
    position: fixed;
    border: none;
    top: 1vh;
    right: 1vw; 
    margin: 0;
    padding: 0;
    transition: all 1000ms ease;
    :hover{
        transform: scale(1.07);
        box-shadow: 0 0 6vw 6vw #252525;
    }
    :active {
        transform: scale(0.93);
    }
`

const LightThemeButton = styled.button`
    width: 3vw;
    height: 3vw;
    background: #E0E0FF;
    border: none;
    position: fixed;
    top: 1vh;
    right: 1vw; 
    margin: 0;
    padding: 0;
    transition: all 1000ms ease;
    :hover {
        transform: scale(1.07);
        box-shadow: 0 0 6vw 4vw #FCFCFC;
    }
    :active {
        transform: scale(0.8);
    }
`


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light") 
  
  const toggleTheme = () => {
      theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <LightThemeButton onClick={toggleTheme} id="lightButton">
        <Image src={lightModeIcon} alt="light Mode" />
      </LightThemeButton>
      <DarkThemeButton onClick={toggleTheme} id="darkButton">
        <Image src={darkModeIcon} alt="dark mode" />
      </DarkThemeButton>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
