import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #075E55;
    height: 100%;
`

export const NameUser = styled.h1`
    display: flex;
    justify-content: center;
    padding-top: 2%;

`

export const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
`

export const LinkItem = styled(LinkR)`
    text-decoration: none;
    color: white;
`