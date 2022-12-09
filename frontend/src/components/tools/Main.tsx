import { useContext, useEffect } from "react";
import { HomePage } from "../pages/Home";
import { SplashPage } from "../pages/Splash";
import { TransitionContext } from "./Transition";

export function Main ()
{
    const transition = useContext(TransitionContext);
    const screenMap = new Map<string, JSX.Element>([
        ["", <></>],
        ["splash", <SplashPage/>],
        ["home", <HomePage/>]
    ]);

    useEffect(() => 
    {
        transition?.setScreen("splash");
    }, [])

    return (
        <>
            {screenMap.get(transition!.screen)}
        </>
    );
}