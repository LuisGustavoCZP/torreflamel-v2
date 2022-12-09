import styled from "styled-components";
import background from "../assets/images/main/menu.svg";
import play from "../assets/images/main/play.svg";

const Background = styled.div`
    background-color: var(--modal-background);
    --img: url(${background});
    -webkit-mask: var(--img) no-repeat center;
    mask: var(--img) no-repeat center;
    -webkit-mask-clip: border-box;
    -webkit-mask-size: contain;
    mask-clip: border-box;
    mask-size: contain;
    /* background-image: url(${background});
    background-size: contain;
    background-repeat: no-repeat; */
    margin: auto;
    border: 1px solid rgba(136, 136, 136, 0);
    width: 480px;
    height: 500px;
`;

const Content = styled.div`
    width: 69%;
    height: 320px;
    margin-left: 60px;
    margin-top: 5px;
    background-color: #a4704e00;
    overflow: hidden;
    overflow-y: auto;
    padding: 10px;
    border-radius: 10px;
   
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
`;

const SubTitle = styled.div`
    font-family: 'Skranji', cursive;
    color: var(--menu-mid);
    text-align:center;
    vertical-align: middle;
    padding-top: 2em;
    font-size: 25px;
    letter-spacing: .2rem;
`;

const Title = styled(SubTitle)`
    font-size: 34px;
`;

const Input = styled.input`
    width: 80%;
    height: 30px;
    font-family: 'Skranji', cursive;
    border-radius: 30px;
    font-size: 18px;
    text-align: center;
`;

const Button = styled.button`
    border-radius: 60px;
    background-image: url(${play});
    width: 110px;
    height: 110px;
    margin-top: 15px;
    background-color: #4EA466;
    font-weight: 500;
    color: #000;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    background-size: 30px;
    background-position: center;
    background-repeat: no-repeat;

    &:hover {
        background-color: var(--modal-button-glow);
        transform: translateY(-5px);
    }
`;

export function Login ({onFinish} : {onFinish:()=>void})
{
    async function Execute ()
    {
        onFinish();
    }

    return (
        <Background>
            <Title><strong>LOGIN</strong></Title>
            <Content>
                <SubTitle><strong>NOME</strong></SubTitle>
                <Input placeholder="DIGITE SEU NOME AQUI"/>
                <Button onClick={Execute}>Ok</Button>
            </Content> 
        </Background>
    );
}