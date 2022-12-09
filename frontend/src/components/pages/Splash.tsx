import styled from "styled-components";
import sky from "../../assets/images/splash/sky.png";
import castle from "../../assets/images/splash/castle.png";
import logo from "../../assets/images/splash/logo.png";
import { waitTime } from "../../utils/wait";
import { useContext, useEffect, useState } from "react";
import { Modal } from "../tools/Modal";
import { Login } from "../Login";
import { TransitionContext } from "../tools/Transition";
import { elevate, grow } from "../../animations";

interface IProps {
    time : number
}

const Image = styled.img`
    position: absolute;
    height: 100%;
    object-fit: cover;
`;

const ElevatorImage = styled(Image)<IProps>`
    animation: ${elevate} normal ${props => props.time}s;
`;

const GrowerImage = styled(Image)<IProps>`
    animation: ${grow} normal ${props => props.time}s;
`;

const Background = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-end;
    background: radial-gradient(circle at center, rgb(204, 194, 250), rgba(57, 58, 141, 0.5) 30%);
`;

export function SplashPage ()
{
    const [completed, setCompleted] = useState(false);
    const transition = useContext(TransitionContext);
    const time = 10;
    
    async function WaitOpen ()
    {
      await waitTime(time*1000);
      setCompleted(true);
    }

    function Next ()
    {
        transition?.setScreen("home");
        console.log("Clicou aqui!")
    }

    useEffect(()=>
    {
        WaitOpen();
    }, [])

    return (
        <Background>
            <Modal isVisible={completed}>
                <Login onFinish={Next} ></Login>
            </Modal>
            <GrowerImage time={time} src={sky} alt=""/>
            <ElevatorImage time={time} src={castle} alt=""/>
            <Image src={logo} alt=""/>
        </Background>
    );
}