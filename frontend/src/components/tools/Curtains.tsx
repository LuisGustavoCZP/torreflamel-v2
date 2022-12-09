import styled from "styled-components";
import bigclouldleft from "../../assets/images/background/bigclouldleft.png";
import bigclouldright from "../../assets/images/background/bigclouldright.png";

interface IProps {
	state?: "Open" | "Close",
	time : number
}

const Image = styled.img`
	position: absolute;
	width: 100%;
	object-fit: cover;
`;

const LeftImage = styled(Image)<IProps>`
  @keyframes -leftClose
  {
	  0% {
		  transform: translate(-100%, 0);
	  }
	  100% {
		  transform: translate(0%, 0);
	  }
  }
  @keyframes -leftOpen
  {
	  0% {
		  transform: translate(0%, 0);
	  }
	  100% {
		  transform: translate(-100%, 0);
	  }
  }
  animation: -left${props => props.state || "Close"} normal ${props => {return (props.time?props.time:1)}}s;
`;

const RightImage = styled(Image)<IProps>`
  @keyframes -rightClose
  {
	  0% {
		  transform: translate(100%, 0);
	  }
	  100% {
		  transform: translate(0%, 0);
	  }
  }
  @keyframes -rightOpen
  {
	  0% {
		  transform: translate(0%, 0);
	  }
	  100% {
		  transform: translate(100%, 0);
	  }
  }
  animation: -right${props => props.state || "Close"} normal ${props => props.time}s;
`;

const Modal = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1000;
  position: absolute;
  overflow: hidden;
`;

export function Curtains ({state, time} : {state: 0 | 1 | 2, time:number})
{
	if(state == 0) return (<></>);
	
	const ocState = state == 2 ? "Open" : "Close";
	console.log(ocState, state);

	return (
		<Modal>
			<LeftImage state={ocState} time={time} src={bigclouldleft}/>
			<RightImage state={ocState} time={time} src={bigclouldright}/>
		</Modal>
	);
}