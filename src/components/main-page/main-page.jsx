import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";
import {PageHeader} from '../header/header.jsx'
const MainPageStyled = styled.main`
  z-index: -10;
  overflow: hidden;
  margin: -10px 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url("../img/ad8dc293645eb043ad328652e84f9f87.jpeg") center
    no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
`;
const Title = styled.p`
  margin-left: 45%;
  margin-top: 40vh;
  font-family: "Open Sans", sans-serif;
  color: white;
`;
const RestName = styled.div`
  @font-face {
    font-family: "Banny Bold Round";
    font-style: normal;
    font-weight: normal;
    src: local("Banny Bold Round"), url("../Banny-BoldRound.woff");
  }
  margin-left: 20vw;
  font-family: "Banny Bold Round";
  font-size: 96px;
  color: white;
`;
const BtnContainer = styled.div`
  margin-left: -20px;
  display: flex;
  justify-content: center;
  padding: 40px;
`;
const BtnBook = styled.button`
  background-color: #ffd600;
  border: none;
  border-radius: 5px;
  color: black;
  width: 200px;
  height: 60px;
  font-weight: bold;
  margin-right: 30px;
  :hover {
    width: 210px;
    height: 70px;
    transition: 0.2s;
  }
`;
const BtnExplore = styled.button`
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
export const MainPage = () => {
  return (
    <Fragment>
        
      <div>
        <MainPageStyled>
          <div>
            <div>
              <Title>RESTAURANT</Title>
            </div>
            <RestName>HUNGRY PEOPLE</RestName>
          </div>
          <BtnContainer>
            <BtnBook>BOOK TABLE</BtnBook>
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
