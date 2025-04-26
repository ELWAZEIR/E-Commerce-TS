
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const Error = () => {
 
  return (
    <Container>
      <LottieHandler type="NotFound" message="from Not found hossam "/>
      <Link to="/" replace={true} >
      <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

        How about going back to safety?
      </h1>
      </Link>
    </Container>
  );
};

export default Error;