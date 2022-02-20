import styled from "styled-components";
import img2 from '../../images/peakpx.jpg'


export const ChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ChatContainer = styled.div`
    background-image: url(${img2});
    height: 800px;
`

export const TopBar = styled.div`
    background-color: #00A884;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3%;

`

export const BottonBar = styled.div`
    display: flex;
    width: 100%;
    background-color: #00A884 ;
    position: fixed;
    top: auto;
    bottom: 0%;
`

export const H2 = styled.h2`
    display: flex;
    justify-content: center;
    color: white;
`