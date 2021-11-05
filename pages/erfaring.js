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
    /* display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 1.5vw 1.5vw; 
    grid-template-areas: 
        ". ."
        ". ."; */
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
                    <Link href="/" >
                        <a>
                            <Image src="/aboutme.svg" alt="link" className="icon" layout="responsive" width="30px" height="30px" />
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a>
                            <Image src="/projects.svg" alt="link" className="icon" layout="responsive" width="30px" height="30px" />
                        </a>
                    </Link>
                    <Link href="/erfaring" >
                        <a>
                            <Image src="/utdanning.svg" alt="link" className="icon active-icon" layout="responsive" width="30px" height="30px" />
                        </a>
                    </Link>
                    <Link href="https://github.com/Bennnis99" >
                        <a target="_blank" rel="noreferrer noopener" >
                            <Image src="/githubLogo.svg" alt="link" className="icon github" layout="responsive" width="30px" height="30px" />
                        </a>
                    </Link>
                </LinkContainer>
                <StyledProfile className="text-area profile">
                    {/* <Image src="/chocola.png" alt="me" layout="responsive" width="30px" height="52px" /> */}
                    {/* <Image src="/background.jpg" alt="me" layout="responsive" width="35vw" height="62.9vh" /> */}
                </StyledProfile>
                <BoxBox>
                    {/* <StyledDivs1 className="text-area">
                        <h1>placeholder?</h1>
                        <p>;</p>
                    </StyledDivs1> */}
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
                            {/* <ul>
                                <li> */}<p>
                                    <SmallTitle> Radioservice </ SmallTitle>
                                    <SlantedText>
                                        Strusshamn, Askøy <br />
                                        DES 2019 - JAN 2021
                                    </SlantedText>
                                    <p>Jobbet med nettbutikk</p>
                                {/* </li>
                                <li> */}
                                    <SmallTitle> Bright </ SmallTitle>
                                    <SlantedText>
                                        Sanbrekkevegen 100 <br />
                                        5 uker 2019
                                    </SlantedText>
                                    <p>Service, Reperasjon og Produksjon av elektronikk, kabler, etc..</p>
                                {/* </li>
                                <li> */}
                                    <SmallTitle> Undervisning i koding </SmallTitle>
                                    <SlantedText>
                                        Ytrebygda & Rådalslien ungdomsskole <br />
                                        HØST 2016 - VÅR 2017                                
                                    </SlantedText>
                                    <p>Jeg hjalp til med å undervise Arduino og Proccesing til 2 klasser i valgfaget programmering.</p>
                                {/* </li>
                                <li> */}</p>
                                    <SmallTitle> KIWI </ SmallTitle>
                                    <SlantedText>
                                        Allehelgensgate & Hamrehjørnet <br  />
                                        OKT 2013 - OKT 2015
                                    </SlantedText>
                                    <p>Butikkmedarbeider</p>
                                {/* </li>
                            </ul> */}
                            {/* <p> */}
                            {/* </p> */}
                        </StyledDivs2>
                        {/* <StyledDivs2 className="text-area">
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
                        </StyledDivs2> */}
                    </StyledDivs>
                </BoxBox>
            </MainBox>
        </>
    )
}