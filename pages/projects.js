import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import React, {useState} from "react"
import Head from "next/head"

import Modal from "../components/Modal"
import { MainBox, LinkContainer, BoxBox, StyledProfile } from "../components/StyledComponents"
import { device } from "../components/ScreenSizes"

const StyledDivs = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    /* grid-template-rows: 1fr 1fr;  */
    gap: 1.5vw 1.5vw; 
    /* grid-template-areas: 
        ". ."
        ". ."; */
    padding: 1.5vw; 

    @media ${device.mobileL} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas:
            "."
            "."
            "."
            ".";
    }
`
const StyledDivs1 = styled.div`
    padding: 0 1vw;
    /* margin: 1.5vw; */
    grid-column: 1 / 3;

    @media ${device.mobileL} {
        padding: 0 2vw 0 2vw;
    }
`
const StyledDivs2 = styled.div`
    padding: 0 1vw 2.5vh 1vw;

    @media ${device.mobileL} {
        padding: 0 2vw 1vh 2vw;
    }
`


export default function Projects() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Head>
                <title>Prosjekter</title>
                <meta name="description" content="Created by Benjamin" />
                <link rel="icon" href="/topicon.png" />
                <meta property="og:image" content="/topicon.png" />
            </Head>
            <MainBox className="mainbox">
                <LinkContainer>
                    <div className="tooltip">
                        <Link href="/">
                            <a>
                                <Image src="/aboutme.svg" alt="link" className="icon" layout="responsive" width="30px" height="30px" />
                            </a>
                        </Link>
                        <span className="tooltiptext">Hjem</span>
                    </div>
                    <div className="tooltip">
                        <Link href="/projects">
                            <a>
                                <Image src="/projects.svg" alt="link" className="icon active-icon" layout="responsive" width="30px" height="30px" />
                            </a>
                        </Link>
                        <span className="tooltiptext">Prosjekter</span>
                    </div>
                    <div className="tooltip">
                        <Link href="/experience" >
                            <a>
                                <Image src="/utdanning.svg" alt="link" className="icon" layout="responsive" width="30px" height="30px" />
                            </a>
                        </Link>
                        <span className="tooltiptext">Utdanning & erfaring</span>
                    </div>
                    <div className="tooltip">
                        <Link href="https://github.com/Bennnis99" >
                            <a target="_blank" rel="noreferrer noopener" >
                                <Image src="/githubLogo.svg" alt="link" className="icon github" layout="responsive" width="30px" height="30px" />
                            </a>
                        </Link>
                        <span className="tooltiptext">Min Github</span>
                    </div>
                </LinkContainer>
                <StyledProfile className={"text-area profile"}>
                    <Image src="/stock6.jpg" alt="photo" layout="responsive" width="30px" height="52px" />
                    {/* <Image src="/vanilla1.png" alt="me" layout="responsive" width="30px" height="52px" /> */}
                </StyledProfile>
                <BoxBox>
                    <StyledDivs>
                        <StyledDivs1 className="text-area">
                            <h1>Prosjekter</h1>
                            <p>På denne siden kan du se noen av prosjektene jeg har programmert, hvor jeg tar i bruk
                                flere forskjellige teknologier som React, Next.js, CSS, HTML, JavaScript
                            </p>
                        </StyledDivs1>
                        <StyledDivs2 className="text-area">
                            <h2>React Tetris</h2>
                            <Image className="project-image" src="/react-tetris.png" alt="react tetris" onClick={() => setShowModal(true)} layout="responsive" width="1366px" height="656px" />
                            <Modal onClose={() => setShowModal(false)}show={showModal}>
                                <Image src="/react-tetris.png" alt="react tetris" onClick={() => setShowModal(true)} layout="responsive" width="1366px" height="656px" />
                            </Modal>
                            <p>Tetris lagd i React</p>
                            <a href="https://bennnis99.github.io/React-Tetris/" target="_blank" rel="noreferrer noopener" className="link">Link til siden</a><br /><br />
                            <a href="https://github.com/Bennnis99/React-Tetris" target="_blank" rel="noreferrer noopener" className="link">Link til Github</a>
                        </StyledDivs2>
                        <StyledDivs2 className="text-area">
                            <h2>Next.js CV-side</h2>
                            <p>Denne siden</p>
                            {/* <a href="https://bennnis99.github.io/React-Tetris/" target="_blank" rel="noreferrer noopener" className="link">Link til siden</a><br /><br /> */}
                            <a href="https://github.com/Bennnis99/CV" target="_blank" rel="noreferrer noopener" className="link">Link til Github</a>
                        </StyledDivs2>
                        <StyledDivs2 className="text-area">
                            <h2>Title 4</h2>
                            <p>
                                prosjekt3
                            </p>
                        </StyledDivs2>
                        <StyledDivs2 className="text-area">
                            <h2>Title 5</h2>
                            <p>
                                prosjekt4
                            </p>
                        </StyledDivs2>
                    </StyledDivs>
                </BoxBox>
            </MainBox>
        </>
    )
}