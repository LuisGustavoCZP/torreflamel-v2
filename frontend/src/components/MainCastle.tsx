import styled from "styled-components";
import { Weather } from "./tools/Weather";
import castleRight from "../assets/images/castle/castleright.png";
import castleEntrance from "../assets/images/castle/castleentrance.png";
import castleLeft from "../assets/images/castle/castleleft.png";
import castleMiddle from "../assets/images/castle/castlemiddle.png";
import mountains from "../assets/images/grounds/mountains.png";
import background from "../assets/images/grounds/background.png";
import mountainTop from "../assets/images/grounds/mountain-top.png";
import mountainMid from "../assets/images/grounds/mountain-mid.png";
import mountainBot from "../assets/images/grounds/mountain-bot.png";

interface ILayerProp {
    layer: number
    src: string
}

interface IPartProp extends ILayerProp {
    hover?: boolean
}

interface IColored extends ILayerProp {
    color: string
}

const Castle = styled.div`
    display: flex;
    position: relative;
    align-self: flex-end;
    justify-content: center;
    align-items: flex-end;
    /* width: 25%; */
    height: 60%;
    left: 50%;
`;

const CastlePart = styled.img<IPartProp>`
    position: ${props => props.hover?"absolute":"unset"};
    height: 100%;
    z-index: ${props => props.layer};
    bottom: 45%;
`;

const Backimage = styled.div<IColored>`
    position: absolute; 
    width: 100%;
    bottom: 0;
    align-self: flex-end;
    background-size: cover;
    background-clip: border-box;
    z-index: ${props => props.layer};

    background-color: var(--${props => props.color});
    --img: url(${props => props.src});
    -webkit-mask: var(--img) no-repeat center;
    mask: var(--img) no-repeat center;
    height: 100%;
`;

export function MainCastle ()
{
    return (
        <>
            <Weather /* layers="1, 30, 40, 100" play="true" density="1" speed=".5" size=".8" altitude="0" amplitude=".4" *//>
            <Castle>
                <CastlePart hover={true} layer={90} src={castleRight} />
                <CastlePart hover={true} layer={45} src={castleEntrance} />
                <CastlePart hover={true} layer={10} src={castleLeft} />
                <CastlePart hover={true} layer={35} src={castleMiddle} />
            </Castle>
            <Backimage layer={4} color="montain" src={mountains} />
            <Backimage layer={5} color="ground-back" src={background} />
            <Backimage layer={8} color="ground" src={mountainTop} />
            <Backimage layer={7} color="ground" src={mountainMid} />
            <Backimage layer={6} color="montain" src={mountainBot} />
        </>
    );
}