import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.div`
    background-color: #075E55;
    height: 100%;
`

export const NameUser = styled.h1`
    display: flex;
    justify-content: center;

`

export const LinkItem = styled(LinkR)`
    text-decoration: none;
    color: white;
`