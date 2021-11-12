import styled from "styled-components"
import { device } from "./ScreenSizes"

export const MainBox = styled.div`
    width: 70vw;
    height: 80vh;
    margin: 10vh auto 0 auto;
    padding: 1vw;
    display: flex;

    @media ${device.mobileL} {
        width: 100vw;
        height: 100vh;
        margin: 0;
    }
`

export const LinkContainer = styled.div`
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

@media ${device.mobileL} {
    width: 10vw;
}
`

export const BoxBox = styled.div`
display: flex;
flex-direction: column;
width: 56vw;
overflow-y:scroll;

@media ${device.mobileL} {
    width: 90vw;
}
`

export const StyledProfile = styled.div`
margin: -4vh 2vw -4vh 0;
width: 35vw;
img {
    object-fit: cover;
}

@media ${device.mobileL} {
    display: none;
}
`
export const StyledTable = styled.table`
border-collapse: collapse;
width: 100%;
margin-bottom: 2vh;

td {
    padding: 8px; 
}
th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    color: white;
    padding: 8px;
}
`