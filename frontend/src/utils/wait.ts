export async function waitTime (time : number)
{
    return new Promise ((resolve : any) => 
    {
        setTimeout(resolve, time);
    });
}

export async function waitFor (condition : () => boolean, timeCycle : number = 200)
{
    while(!condition())
    {
        await waitTime(timeCycle);
    }
    return;
}