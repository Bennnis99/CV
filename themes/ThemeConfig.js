import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: '#FCFCFC',
  text: '#141417',
  mainbox: "#FCFCFC",
  mainboxShadow: "0 1vh 10vw #999999",
  accent: "#FCFCFC",
  titles: "#159ED8",
  filter: "invert(54%) sepia(33%) saturate(1531%) hue-rotate(159deg) brightness(88%) contrast(91%)",
  invertFilter: "invert(1%) sepia(7%) saturate(6499%) hue-rotate(206deg) brightness(98%) contrast(86%)",
  darkButton: "none",
  lightButton: "inline",
  profile: "0 0 1.5vw #999999",
  textboxShadow: "inset 0 0 1vw #999999",
  languageTable: "1px solid #999999"
} 

export const darkTheme = {
  body: '#252525',
  text: '#FAFAFA',
  mainbox: "#141417",
  mainboxShadow: "0 1vh 10vw black",
  accent: "#1C1C20",
  titles: "#B53241",
  filter: "invert(27%) sepia(16%) saturate(5460%) hue-rotate(322deg) brightness(99%) contrast(96%)",
  invertFilter: "invert(93%) sepia(18%) saturate(4913%) hue-rotate(187deg) brightness(112%) contrast(104%)",
  lightButton: "none",
  darkButton: "inline",
  profile: "0 0 1.5vw black",
  textboxShadow: "inset 0 0 1vw black",
  languageTable: "1px solid #1C1C20"
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }
  .mainbox {
    background: ${({ theme }) => theme.mainbox};
    transition: all .5s linear;
    box-shadow: ${({ theme }) => theme.mainboxShadow};
  }
  .text-area {
    background: ${({ theme }) => theme.accent};
    transition: all .5s linear;
    box-shadow: ${({ theme }) => theme.textboxShadow};

  }
  p {
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }

  h1, h2 {
    color: ${({ theme }) => theme.titles};
    transition: all .5s linear;
  }
  .icon {
    filter: ${({ theme }) => theme.invertFilter};
  }
  .active-icon {
    filter: ${({ theme }) => theme.filter};
  }
  .icon:hover {
    filter: ${({ theme }) => theme.filter};
  }
  #darkButton{
    display: ${({ theme }) => theme.lightButton};
  }
  #lightButton{
    display: ${({ theme }) => theme.darkButton};
  }
  .profile {
    box-shadow: ${({ theme }) => theme.profile};
  }
  .link {
    color: ${({ theme }) => theme.titles};
  }
  th {
    background: ${({ theme }) => theme.titles};
    border: ${({ theme }) => theme.languageTable};
  }
  td {
    border: ${({ theme }) => theme.languageTable};  
  }
  `