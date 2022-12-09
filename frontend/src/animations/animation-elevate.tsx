import styled, {keyframes} from "styled-components";

export const elevate = keyframes`
    0% {
        transform: translate(0, 100%);
    }
    100% {
        transform: translate(0, 0%);
    }
`;