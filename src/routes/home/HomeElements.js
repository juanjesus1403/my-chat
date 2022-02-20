import styled from "styled-components";
import img from '../../images/peakpx.jpg' 

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: url(${img});
`

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    color: white;
    padding-top: 15%;
    padding-bottom: 6%;
`

export const H2 = styled.h2`
    display: flex;
    justify-content: center;
    color: white;
    margin-bottom: 0.5%;
`

export const InputText = styled.input`
    margin-left: 42%;
    width: 16%;
    margin-top: 15px;
`

export const Button = styled.button`
    margin-left: 45%;
    width: 10%;
    margin-top: 15px;
    margin-bottom: 17%;
`