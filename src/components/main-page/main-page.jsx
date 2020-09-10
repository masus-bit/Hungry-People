import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";
import {PageHeader} from '../header/header.jsx'
import {Link} from 'react-router-dom'
const MainPageStyled = styled.main`
  z-index: -10;
  overflow: hidden;
  margin: -10px 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  width:100%;
  height: 99vh;
  background: url("../img/ad8dc293645eb043ad328652e84f9f87.jpeg") center
    no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
`;
const Title = styled.p`
width:100%;
  margin-top: 40vh;
  font-family: "Open Sans", sans-serif;
  color: white;
  transition:ease-in;
`;
const RestName = styled.div`
  @font-face {
    font-family: "Banny Bold Round";
    font-style: normal;
    font-weight: normal;
    src: local("Banny Bold Round"), url("../Banny-BoldRound.woff");
  }
  
  font-family: "Banny Bold Round";
  font-size: 96px;
  color: white;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }

`;
const BtnContainer = styled.div`
  margin-left: -20px;
  display: flex;
  justify-content: center;
  padding: 40px;
`;
const BtnBook = styled(Link)`
font-family: "Open Sans", sans-serif;
  background-color: #ffd600;
  border: none;
  border-radius: 5px;
  color: black;
  width: 200px;
  height: 60px;
  font-weight: bold;
  margin-right: 30px;
  text-decoration:none;
  display:flex;
  justify-content:center;
  align-items:center;
  :hover {
    width: 210px;
    height: 70px;
    transition: 0.2s;
  }
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  animation-delay:1s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
`;
const BtnExplore = styled.button`
font-family: "Open Sans", sans-serif;
  background-color: transparent;
  border: 0.5px white solid;
  border-radius: 5px;
  color: white;
  width: 200px;
  height: 60px;
  font-weight: bold;
  opacity: 1;
  :hover {
    width: 210px;
    height: 70px;
    transition: 0.2s;
  }
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  animation-delay:1.5s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
`;
const SocialSection = styled.section`
  position: absolute;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: flex-end;
  margin-top: 40vh;
  margin-left: 10vw;
`;
const SocFb = styled.a`
  width: 40px;
  height: 40px;
  margin: 10px;
  background: url("../socials/Facebook.png") center;
  background-size: cover;
  z-index: 1000;
`;
const SocInst = styled.a`
  width: 40px;
  height: 40px;
  margin: 10px;
  background: url("../socials/INST.png") center;
  background-size: cover;
  z-index: 1000;
  cursor: pointer;
`;
const SocTwit = styled.a`
  width: 40px;
  height: 40px;
  margin: 10px;
  background: url("../socials/Twitter.png") center;
  background-size: cover;
  z-index: 1000;
`;
const NameWrapper=styled.div`
margin-top:0px;
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
`
export const MainPage = () => {
  return (
    <Fragment>
        
      <div>
        <MainPageStyled>
          <NameWrapper>
            <div>
              
              <Title>RESTAURANT</Title>
            </div>
            <RestName>HUNGRY PEOPLE</RestName>
          </NameWrapper>
          <BtnContainer>
            <BtnBook to="/booking">BOOK TABLE</BtnBook>
            <BtnExplore>EXPLORE</BtnExplore>
          </BtnContainer>
          <SocialSection>
            <SocFb></SocFb>
            <SocInst></SocInst>
            <SocTwit></SocTwit>
          </SocialSection>
        </MainPageStyled>
      </div>
      <footer className="main-footer">
        <p className="footer">copyright</p>
      </footer>
    </Fragment>
  );
};
