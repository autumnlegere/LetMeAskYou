import React from 'react'
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import '../assets/css/Login.css';
// import siteLogo from '../assets/images/lmay-logo.png';
// import Signup from './Signup';


// ended up going with styled componenets for now instead of MUI because it was being a pain in my butt for now
const Login = () => {
  return (
    <div className='login-body'>
    <MainContainer>
      <WelcomeText>Let Me Ask You</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Log In" />
      </ButtonContainer>
      <HorizontalRule />
      <orSignUp>
        {/* not sure why this is isnt registering, tried a couple things already  */}
        <h5 className='black'>
        Don't have an Account?
        </h5>
      </orSignUp>
      <ButtonContainer>
        <Button content="Sign Up Here" />
      </ButtonContainer>
    </MainContainer>

    </div>

  );
}




const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 30vw;
  justify-content: center;
  margin-top: 150px;
  background: rgba(255, 255, 255, 0.11);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 70vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 70vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color: black;
  margin-top: -20px;
  font-weight: bolder;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;

`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//not sure why its saying this isnt defined lol (bc it is)

const orSignUp = styled.div`
  cursor: pointer;
  margin-top: 40px;
  color: black;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, black 0%, white 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;



export default Login;
