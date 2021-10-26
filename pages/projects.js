import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import React, {useState} from "react"
import { useRouter } from 'next/router'

import aboutLogo from "./img/aboutme.svg"
import projectsLogo from "./img/projects.svg"
import profile from "./img/vanilla1.png"
import githubLogo from "./img/githubLogo.svg"
import lightModeIcon from "./img/lightmode.png"
import darkModeIcon from "./img/darkmode.png"


const lightMode = {
    background: "FCFCFC",
    accent: "FCFCFC"
}
const darkMode = {
    background: "#141417",
    accent: "#1C1C20"
}
let colorScheme = darkMode;

const MainBox = styled.div`
    width: 70vw;
    height: 80vh;
    background: ${colorScheme.background};
    /* background: #FFF; */
    margin: 10vh auto 0 auto;
    padding: 1vw;
    display: flex;
    box-shadow: 0 1vh 10vw black;
`

const LinkContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 12vh 0;
    grid-auto-flow: row;
    grid-template-areas:
        "."
        "."
        "."
        ".";
    margin: 10vh 1vw 10vh 0vw;
    width: 4vw;
    justify-content: center;
`

const StyledProfile = styled.div`
    margin: -4vh 2vw -4vh 0;
    background: ${colorScheme.accent};
    width: 35vw;
    box-shadow: 0 0 1.5vw black;
`
const StyledDivs = styled.div`
    /* background: blue; */
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 1.5vw 1.5vw; 
    grid-template-areas: 
        ". ."
        ". .";
    padding: 1.5vw; 
`
const StyledDivs1 = styled.div`
    background: ${colorScheme.accent};
    padding: 0 1vw;
    margin: 1.5vw;
    color: #E0E0FF;
    box-shadow: inset 0 0 1vw black;
`
const StyledDivs2 = styled.div`
    background: ${colorScheme.accent};
    padding: 0 1vw;
    color: #E0E0FF;
    box-shadow: inset 0 0 1vw black;
`
const BoxBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 56vw;
    overflow-y:scroll;
`

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
    transition: all 1000ms ease-out;
    :hover{
        transform: scale(1.07);
        box-shadow: 0 0 8vw 2vw black;
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
    right: 4.5vw; 
    margin: 0;
    padding: 0;
    transition: all 1000ms ease-out;
    :hover {
        transform: scale(1.07);
        box-shadow: 0 0 5vw 3vw white;
    }
    :active {
        transform: scale(0.8);
    }
`


export default function Side() {
    // const [useColorTheme, setColorTheme] = useState({})
    // const router = useRouter()
    
    // function changeColorTheme(theme) {
    //     if (theme === "lightMode"){
    //         colorScheme = lightMode
    //         console.log("light")
    //     } else if (theme === "darkMode") {
    //         colorScheme = darkMode
    //         console.log("dark")
    //     }
    //     router.reload(window.location.pathname)
    //     console.log("refreshed")
    // }
    
    // function changeColorTheme() {
    //     console.log("button")
    // }
// onClick={() => {changeColorTheme("lightMode")}}
    return (
        <div>
            <MainBox>
                <LinkContainer>
                    <Link href="/hjem" >
                        <a>
                            <Image src={ aboutLogo } alt="link" className="icon" />
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a>
                            <Image src={ projectsLogo } alt="link" className="icon active-icon" />
                        </a>
                    </Link>
                    <Link href="/" >
                        <a>
                            <Image src={ githubLogo } alt="link" className="icon github" />
                        </a>
                    </Link>
                    <Link href="/" >
                        <a>
                            <Image src={ githubLogo } alt="link" className="icon github" />
                        </a>
                    </Link>
                </LinkContainer>
                <StyledProfile>
                    <Image src={profile} alt="me"/>
                </StyledProfile>
                <BoxBox>
                    <StyledDivs1>
                        <h1>Title 1</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec placerat purus.
                             Etiam congue rhoncus metus nec bibendum. Aenean varius, justo quis semper mattis, nulla metus auctor ex,
                              id pellentesque est enim id purus. Nulla eros odio, gravida id purus quis, pharetra consequat tellus. Nunc 
                              in felis eros. Suspendisse a sem nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                               posuere cubilia curae;</p>
                    </StyledDivs1>
                    <StyledDivs>
                        <StyledDivs2>
                            <h2>Title 2</h2>
                            <p>Etiam ut dignissim ipsum. Etiam eu ex porta, tincidunt velit eu, interdum ligula.
                                In hac habitasse platea dictumst. Mauris in rhoncus sapien, vitae pulvinar velit.
                                Donec condimentum leo vel neque elementum scelerisque. In sem tellus, consequat nec vestibulum a,
                                pulvinar id leo. Ut dui neque, scelerisque eget turpis nec, venenatis fermentum arcu. Vestibulum in
                                {/* malesuada justo. Curabitur nunc velit, fringilla sed vulputate eget, convallis ut felis. Fusce eu nisl
                                sed dolor molestie volutpat ac sed magna. Etiam tempor, erat ac egestas congue, tellus justo aliquam
                                leo, in accumsan arcu ipsum vel lectus. In blandit suscipit diam, id interdum sapien. Etiam id velit
                                ut tellus interdum tempus eu sed ex. Nulla pharetra ligula ut sem tristique, sit amet dictum metus
                                condimentum. Pellentesque ac tellus et lectus consequat ornare pharetra vel nibh. */}
                            </p>
                        </StyledDivs2>
                        <StyledDivs2>
                            <h2>Title 3</h2>
                            <p>In hac habitasse platea dictumst. Donec consectetur lectus ut dui eleifend scelerisque.
                                Praesent et ultrices nisl, quis commodo eros. Aenean dictum facilisis turpis quis
                                viverra. Aenean lobortis magna sed metus viverra pretium. Proin volutpat tincidunt
                                fringilla. Suspendisse id mattis tortor.
                            </p>
                        </StyledDivs2>
                        <StyledDivs2>
                            <h2>Title 4</h2>
                            <p>Etiam ut aliquam lectus. Donec egestas, quam ac tincidunt fermentum, nunc dui imperdiet ipsum,
                                ac vehicula arcu enim quis nulla. Nunc in aliquam mi. Nulla eleifend turpis sodales felis
                                ultrices, et posuere dolor mollis. Ut efficitur venenatis quam a sollicitudin. Suspendisse
                                potenti. Proin consectetur ante in viverra dignissim. Duis placerat cursus placerat. Sed
                                dignissim lacus eu nisl dictum, id finibus ipsum euismod. Quisque et dictum neque. Nulla
                                nec placerat leo.
                            </p>
                        </StyledDivs2>
                        <StyledDivs2>
                            <h2>Title 5</h2>
                            <p>Maecenas interdum ultricies sapien, sit amet semper lacus mattis at. Duis maximus dapibus condimentum.
                                Proin convallis sollicitudin nunc sit amet efficitur. Quisque elementum magna et enim varius,
                                id consequat dolor mollis. Nam placerat neque et scelerisque consequat. Nam massa felis, congue
                                quis nunc non, vulputate vulputate urna. Nam arcu erat, suscipit sollicitudin velit at, tincidunt
                                hendrerit velit. Proin pulvinar malesuada dolor vulputate eleifend. Nunc imperdiet orci justo,
                                vitae porttitor neque tempor vitae.
                            </p>
                        </StyledDivs2>
                    </StyledDivs>
                </BoxBox>
            </MainBox>
            <LightThemeButton>
                <Image src={lightModeIcon} alt="light Mode" />
            </LightThemeButton>
            <DarkThemeButton>
                <Image src={darkModeIcon} alt="dark mode" />
            </DarkThemeButton>
        </div>
    )
}