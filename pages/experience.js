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
    img {
        object-fit: cover;
        /* object-position: 60% 100%; */
    }
`
const StyledDivs = styled.div`
    padding: 1.5vw; 
`
const StyledDivs1 = styled.div`
    padding: 0 1vw;
    margin: 1.5vw;
`
const StyledDivs2 = styled.div`
    padding: 0.1vh 1vw 1vh 1vw;
    margin-bottom: 2vh;
    `
const BoxBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 56vw;
    overflow-y:scroll;
`
const SmallTitle = styled.h3`
    margin: 0;
    font-size: 1.2rem;
`
const SlantedText = styled.p`
    font-style: italic;
    margin: 0;
`
const BoldText = styled.b`
    font-weight: bold;
`


export default function Side() {
    return (
        <>
            <Head>
                <title>Utdanning & Erfaring</title>
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
                                <Image src="/projects.svg" alt="link" className="icon" layout="responsive" width="30px" height="30px" />
                            </a>
                        </Link>
                        <span className="tooltiptext">Prosjekter</span>
                    </div>
                    <div className="tooltip">
                        <Link href="/experience" >
                            <a>
                                <Image src="/utdanning.svg" alt="link" className="icon active-icon" layout="responsive" width="30px" height="30px" />
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
                <StyledProfile className="text-area profile">
                    <Image src="/stock4.jpg" alt="photo" layout="responsive" width="30px" height="52px" />
                    {/* <Image src="/chocola.png" alt="me" layout="responsive" width="30px" height="52px" /> */}
                    {/* <Image src="/background.jpg" alt="me" layout="responsive" width="35vw" height="62.9vh" /> */}
                </StyledProfile>
                <BoxBox>
                    <StyledDivs id="experience">
                        <StyledDivs2 className="text-area">
                            <h2>Utdanning</h2>
                            <p>
                            <SmallTitle> Dataelektroniker </SmallTitle>
                            <SlantedText>Årstad videregående skole </SlantedText>
                            2018 - 2019 <br /><br />
                            <SmallTitle> Data & Elektronikk </SmallTitle>
                            <SlantedText>Årstad videregående skole </SlantedText>
                            2016 - 2018 <br /><br />
                            <SmallTitle> Elektro </SmallTitle>
                            <SlantedText>Laksevåg videregående skole </SlantedText>
                            2015 - 2016 
                            </p>
                        </StyledDivs2>
                        <StyledDivs2 className="text-area">
                            <h2>Erfaring</h2>
                                <p>
                                    <SmallTitle> Radioservice </ SmallTitle>
                                    <SlantedText>
                                        Strusshamn, Askøy <br />
                                        DES 2019 - JAN 2021
                                    </SlantedText>
                                    <p>Jobbet med nettbutikk</p>

                                    <SmallTitle> Bright </ SmallTitle>
                                    <SlantedText>
                                        Sanbrekkevegen 100 <br />
                                        5 uker 2019
                                    </SlantedText>
                                    <p>Service, Reperasjon og Produksjon av elektronikk, kabler, etc..</p>

                                    <SmallTitle> Undervisning i koding </SmallTitle>
                                    <SlantedText>
                                        Ytrebygda & Rådalslien ungdomsskole <br />
                                        HØST 2016 - VÅR 2017                                
                                    </SlantedText>
                                    <p>Jeg hjalp til med å undervise Arduino og Proccesing til 2 klasser i valgfaget programmering.</p>
                                    <SmallTitle> KIWI </ SmallTitle>
                                    <SlantedText>
                                        Allehelgensgate & Hamrehjørnet <br  />
                                        OKT 2013 - OKT 2015
                                    </SlantedText>
                                    <p>Butikkmedarbeider</p>
                                </p>
                        </StyledDivs2>
                    </StyledDivs>
                </BoxBox>
            </MainBox>
        </>
    )
}