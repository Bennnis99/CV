import "../styles/styles.css"

import { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/ThemeConfig" 
import Image from "next/image"

import lightModeIcon from "../public/lightmode.png"
import darkModeIcon from "../public/darkmode.png"

const DarkThemeButton = styled.button`
    width: 3vw;
    height: 3vw;
    background: #141417;
    background: none;
    position: fixed;
    border: none;
    top: 1vh;
    right: 1vw; 
    margin: 0;
    padding: 0;
    border-radius: 100%;
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
    background: none;
    border: none;
    position: fixed;
    top: 1vh;
    right: 1vw; 
    margin: 0;
    padding: 0;
    border-radius: 100%;
    transition: all 1000ms ease-out;
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
  
  useEffect(() => {
   if (typeof window !== "undefined") {
      if (localStorage.getItem("colorTheme") === null) {
        localStorage.setItem("colorTheme", "light")
      } else if (localStorage.getItem("colorTheme") === "light") {
        setTheme("light")
      } else if (localStorage.getItem("colorTheme") === "dark") {
        setTheme("dark")
      }
    }
  },[])

  const toggleTheme = () => {      
    if (theme === "light") {
      setTheme("dark")
      localStorage.setItem("colorTheme", "dark")
    } else if (theme === "dark") {
      setTheme("light")
      localStorage.setItem("colorTheme", "light")
    }
  }
  
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
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
