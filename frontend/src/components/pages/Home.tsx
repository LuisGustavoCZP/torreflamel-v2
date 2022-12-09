import styled from "styled-components";

import { MainCastle } from "../MainCastle";

const Background = styled.div`
    display: flex; 
    position: relative; 
    width: 100%; 
    height: 100%; 
    overflow: hidden;
    
    background-color: var(--azuldark);
`;


export function HomePage ()
{
    return (
        <Background>
            <MainCastle/>
        </Background>
    );
}