import { useState } from "react";
import styled from "styled-components";

const Background = styled.div`
    margin: 0;
    font-family: 'Skranji', cursive;
    display: flex; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.603); /* Black w/ opacity */
    justify-content: center;
    align-items: center;
`;

export function Modal ({children, isVisible} : {children : JSX.Element, isVisible : boolean})
{
    if(isVisible) return (
        <Background>
            {children}
        </Background>
    );

    return <></>;
}