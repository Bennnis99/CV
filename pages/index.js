import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import React from "react"
import Head from "next/head"

import { MainBox, LinkContainer, BoxBox, StyledProfile, StyledTable } from "../components/StyledComponents"
import { device } from "../components/ScreenSizes"

const StyledDivs = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 1.5vw 1.5vw; 
    grid-template-areas: 
        ". .";
    padding: 1.5vw; 

    @media ${device.mobileL} {
        display: block;
    }
`
const StyledDivs1 = styled.div`
    padding: 0 1vw;
    margin: 1.5vw;
    @media ${device.mobileL} {
        margin-top: 4vh;
        margin-bottom: 3vh;
        padding: 0 2vw;
    }
`
const StyledDivs2 = styled.div`
    padding: 0 1vw;

    @media ${device.mobileL} {
        padding: 0 2vw 1vh 2vw;
        margin-bottom: 2vh;
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
                    <Image src="/stock5.jpg" alt="photo" layout="responsive" width="30px" height="52px" />
                    {/* <Image src="/Coconut-maid.png" alt="me" layout="responsive" width="30px" height="52px" /> */}
                </StyledProfile>
                <BoxBox>
                    <StyledDivs1 className="text-area">
                        <h1>Om meg</h1>
                        <p>
                            Mitt navn er Benjamin, for øyeblikket holder jeg på med et IT utvikler AMO kurs
                             hos kodehode<br />
                            Interessen min for programmering startet når jeg begynte å spille dataspill. Jeg ville
                            finne ut hvordan spillene ble lagd og hvordan jeg kunne gjøre noe lignende. Jeg 
                            liker å lage systemer og å designe applikasjoner.<br />
                            på fritiden liker jeg å spille dataspill med venner

                        </p>
                    </StyledDivs1>
                    <StyledDivs>
                        <StyledDivs2 className="text-area">
                            <h2>Ferdigheter</h2>
                            <p>
                                Jeg kan bruke JavaScript, HTML, CSS, React og Arduino.
                            </p>
                        </StyledDivs2>
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
                                <tr>
                                    <td>Japansk</td>
                                    <td>Grunnleggende</td>
                                </tr>
                            </StyledTable>
                    </StyledDivs>
                </BoxBox>
            </MainBox>
        </>
    )
} 