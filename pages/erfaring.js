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
        <>
            <Head>
                <title>Utdanning & Erfaring</title>
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
                    <StyledDivs1 className="text-area">
                        <h1>placeholder?</h1>
                        <p>;</p>
                    </StyledDivs1>
                    <StyledDivs>
                        <StyledDivs2 className="text-area">
                            <h2>Utdanning</h2>
                            <p>
                            Elektro <br />
                            Data & Elektronikk <br />
                            Dataelektroniker <br />
                            </p>
                        </StyledDivs2>
                        <StyledDivs2 className="text-area">
                            <h2>Erfaring</h2>
                            <p>
                            KIWI <br />
                            Bright <br />
                            Radioservice <br />
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
        </>
    )
}