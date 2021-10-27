import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import React from "react"

import aboutLogo from "./img/aboutme.svg"
import projectsLogo from "./img/projects.svg"
import profile from "./img/Coconut-maid.png"
import githubLogo from "./img/githubLogo.svg"


const MainBox = styled.div`
    width: 70vw;
    height: 80vh;
    margin: 10vh auto 0 auto;
    padding: 1vw;
    display: flex;
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
    width: 35vw;
`
const StyledDivs = styled.div`
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
    padding: 0 1vw;
    margin: 1.5vw;
`
const StyledDivs2 = styled.div`
    padding: 0 1vw;
`
const BoxBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 56vw;
    overflow-y:scroll;
`


export default function Side() {
    return (
            <MainBox className="mainbox">
                <LinkContainer>
                    <Link href="/hjem" >
                        <a>
                            <Image src={ aboutLogo } alt="link" className="icon active-icon" />
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a>
                            <Image src={ projectsLogo } alt="link" className="icon" />
                        </a>
                    </Link>
                    <Link href="https://github.com/Bennnis99" >
                        <a target="_blank" rel="noreferrer noopener" >
                            <Image src={ githubLogo } alt="link" className="icon github" />
                        </a>
                    </Link>
                    <Link href="/" >
                        <a>
                            <Image src={ githubLogo } alt="link" className="icon github" />
                        </a>
                    </Link>
                </LinkContainer>
                <StyledProfile className={"text-area profile"}>
                    <Image src={profile} alt="me"/>
                </StyledProfile>
                <BoxBox>
                    <StyledDivs1 className="text-area">
                        <h1>Title 1</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec placerat purus.
                             Etiam congue rhoncus metus nec bibendum. Aenean varius, justo quis semper mattis, nulla metus auctor ex,
                              id pellentesque est enim id purus. Nulla eros odio, gravida id purus quis, pharetra consequat tellus. Nunc 
                              in felis eros. Suspendisse a sem nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                               posuere cubilia curae;</p>
                    </StyledDivs1>
                    <StyledDivs>
                        <StyledDivs2 className="text-area">
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
                        <StyledDivs2 className="text-area">
                            <h2>Title 3</h2>
                            <p>In hac habitasse platea dictumst. Donec consectetur lectus ut dui eleifend scelerisque.
                                Praesent et ultrices nisl, quis commodo eros. Aenean dictum facilisis turpis quis
                                viverra. Aenean lobortis magna sed metus viverra pretium. Proin volutpat tincidunt
                                fringilla. Suspendisse id mattis tortor.
                            </p>
                        </StyledDivs2>
                        <StyledDivs2 className="text-area">
                            <h2>Title 4</h2>
                            <p>Etiam ut aliquam lectus. Donec egestas, quam ac tincidunt fermentum, nunc dui imperdiet ipsum,
                                ac vehicula arcu enim quis nulla. Nunc in aliquam mi. Nulla eleifend turpis sodales felis
                                ultrices, et posuere dolor mollis. Ut efficitur venenatis quam a sollicitudin. Suspendisse
                                potenti. Proin consectetur ante in viverra dignissim. Duis placerat cursus placerat. Sed
                                dignissim lacus eu nisl dictum, id finibus ipsum euismod. Quisque et dictum neque. Nulla
                                nec placerat leo.
                            </p>
                        </StyledDivs2>
                        <StyledDivs2 className="text-area">
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
    )
}