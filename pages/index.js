import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import React from "react"
import Head from "next/head"


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
const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    /* margin-top: 2vh; */
    margin-bottom: 2vh;
    
    td {
    border: 1px solid #ddd;
    padding: 8px; 
    }
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04AA6D;
        color: white;
        border: 1px solid #ddd;
        padding: 8px;
    }
`


export default function Home() {
    return (
        <>
            <Head>
                <title>Om meg</title>
                <meta name="description" content="Created by Benjamin" />
                <link rel="icon" href="/topicon.png" />
                <meta property="og:image" content="/topicon.png" />
            </Head>
            <MainBox className="mainbox">
                <LinkContainer>
                <div className="tooltip">
                    <Link href="/">
                        <a>
                            <Image src="/aboutme.svg" alt="link" className="icon active-icon" layout="responsive" width="30px" height="30px" />
                        </a>
                    </Link>
                    <span className="tooltiptext">Hjem</span>
                </div>
                <div className="tooltip">
                    <Link href="/projects">
                        <a>
                            <Image src="/projects.svg" alt="link" className="icon" layout="responsive" width="30px" height="30px" />
                        </a>
                    </Link>
                    <span className="tooltiptext">Prosjekter</span>
                </div>
                <div className="tooltip">
                    <Link href="/erfaring" >
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
                </div>                </LinkContainer>
                <StyledProfile className={"text-area profile"}>
                    <Image src="/Coconut-maid.png" alt="me" layout="responsive" width="30px" height="52px" />
                </StyledProfile>
                <BoxBox>
                    <StyledDivs1 className="text-area">
                        <h1>Om meg</h1>
                        <p>
                            Mitt navn er Benjamin, for øyeblikket holder jeg på med et IT utvikler AMO kurs
                             hos kodehode<br />
                            Interessen min for programmering startet når jeg begynte å spille dataspill, 
                            på fritiden liker jeg å spille dataspill med venner

                        </p>
                    </StyledDivs1>
                    <StyledDivs>
                        <StyledDivs2 className="text-area">
                            <h2>Ferdigheter</h2>
                            <p>
                                Jeg kan programmere JavaScript, HTML, CSS, React og Arduino.
                            </p>
                        </StyledDivs2>
                        {/* <StyledDivs2 className="text-area"> */}
                            {/* <h2>Språk</h2> */}
                            <StyledTable>
                                <tr>
                                    <th>Språk</th>
                                    <th>Evne</th>
                                </tr>
                                <tr>
                                    <td>Norsk</td>
                                    <td>Morsmål</td>
                                </tr>
                                <tr>
                                    <td>Engelsk</td>
                                    <td>Flytende</td>
                                </tr>
                            </StyledTable>
                        {/* </StyledDivs2> */}
                    </StyledDivs>
                </BoxBox>
            </MainBox>
        </>
    )
} 