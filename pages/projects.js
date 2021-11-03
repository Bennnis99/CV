import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import React, {useState} from "react"
import Head from "next/head"

import Modal from "../components/Modal"

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
    padding: 0 1vw 2.5vh 1vw;
`
const BoxBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 56vw;
    overflow-y:scroll;
`


export default function Projects() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Head>
                <title>Prosjekter</title>
                <meta name="description" content="Created by Benjamin" />
                <link rel="icon" href="/Icon.png" />
                <meta property="og:image" content="/Icon.png" />
            </Head>
            <MainBox className="mainbox">
                <LinkContainer>
                    <Link href="/" >
                        <a>
                            <Image src="/aboutme.svg" alt="link" className="icon" layout="responsive" width="30px" height="30px" />
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a>
                            <Image src="/projects.svg" alt="link" className="icon active-icon" layout="responsive" width="30px" height="30px" />
                        </a>
                    </Link>
                    <Link href="/erfaring" >
                        <a>
                            <Image src="/utdanning.svg" alt="link" className="icon github" layout="responsive" width="30px" height="30px" />
                        </a>
                    </Link>
                    <Link href="https://github.com/Bennnis99" >
                        <a target="_blank" rel="noreferrer noopener" >
                            <Image src="/githubLogo.svg" alt="link" className="icon github" layout="responsive" width="30px" height="30px" />
                        </a>
                    </Link>
                </LinkContainer>
                <StyledProfile className={"text-area profile"}>
                    <Image src="/vanilla1.png" alt="me" layout="responsive" width="30px" height="52px" />
                </StyledProfile>
                <BoxBox>
                    <StyledDivs1 className="text-area">
                        <h1>Prosjekter</h1>
                        <p>På denne siden kan du se noen av prosjektene jeg har programmert, hvor jeg tar i bruk
                            flere forskjellige teknologier som React, Next.js, CSS, HTML, JavaScript
                        </p>
                    </StyledDivs1>
                    <StyledDivs>
                        <StyledDivs2 className="text-area">
                            <h2>React Tetris</h2>
                            <Image className="imagexd" src="/react-tetris.png" alt="react tetris" onClick={() => setShowModal(true)} layout="responsive" width="16px" height="9px" />
                            <Modal onClose={() => setShowModal(false)}show={showModal}>
                                <Image src="/react-tetris.png" alt="react tetris" onClick={() => setShowModal(true)} layout="responsive" width="16px" height="9px" />
                            </Modal>
                            <p>tetris lagd i React</p>
                            <a href="https://bennnis99.github.io/React-Tetris/" target="_blank" rel="noreferrer noopener" className="link">Link til siden</a><br /><br />
                            <a href="https://github.com/Bennnis99/React-Tetris" target="_blank" rel="noreferrer noopener" className="link">Link til Github</a>
                        </StyledDivs2>
                        <StyledDivs2 className="text-area">
                            <h2>Next.js CV-side</h2>
                            <p>
                                Denne siden
                            </p>
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