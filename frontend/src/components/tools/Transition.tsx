import React, { Dispatch, useEffect, useState } from "react";
import { waitFor, waitTime } from "../../utils/wait";
import { Curtains } from "./Curtains";

const sceneTimeout = 5;

export const TransitionContext = React.createContext<{screen: string; setScreen: (screenName : string)=>void} | undefined>(undefined);

export function Transition ({children} : {children : JSX.Element})
{
    const [state, setState] = useState<0 | 1 | 2>(0);
    const [screen, setScreen] = useState("");

    async function waitStart ()
    {
      setState(1);
      await waitTime(sceneTimeout*1000);
    }

    async function waitEnd ()
    {
      setState(2);
      await waitTime(sceneTimeout*1000);
      setState(0);
    }

    async function changeScreen (screenName : string) 
    {
      await waitStart ();
      setScreen(screenName);
      await waitEnd ();
    }

    useEffect(()=>
    {
    }, [screen]);

    const value = {screen, setScreen:changeScreen};
    return (
      <TransitionContext.Provider value={value}>
        <Curtains state={state} time={sceneTimeout}/>
        {children}
      </TransitionContext.Provider>
    )
}

