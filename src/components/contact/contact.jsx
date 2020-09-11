import React, { Fragment } from 'react'
import styled from 'styled-components'
const Wrapper=styled.div`
margin-top:-10px;
z-index: -10;
overflow: hidden;
margin: -10px 0;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
position: absolute;
left: 0;
width:100vw;
height: 100vh;
background: url("../img/ad8dc293645eb043ad328652e84f9f87.jpeg") center
  no-repeat;
background-size: cover;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);

`
const TextBlock=styled.section`
margin-top:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;
`
const TextTitle=styled.h1`
font-size: 3em;
@font-face {
    font-family: "Banny Bold Round";
    font-style: normal;
    font-weight: normal;
    src: local("Banny Bold Round"), url("../Banny-BoldRound.woff");
  };
  font-family: "Banny Bold Round";
`
const TextText=styled.p`
width:100%;
font-family: "Open Sans", sans-serif;
margin-top:-40px;
margin-bottom:40px;
`
const InputField=styled.input`
font-family: "Open Sans", sans-serif;
background-color: lightgray;
outline: none;
border: none;
width: 270px;
height: 60px;
border-radius: 5px;
margin-bottom: 10px;
margin-left: 10px;
text-align: start;
padding-left: 20px;
-webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  animation-delay:0.5s;
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
`
const Form=styled.form`
display:flex;
width:840px;
flex-wrap:wrap;
justify-content:flex-end;


`
const Message=styled.textarea`
text-align: start;
padding-left: 20px;
margin-bottom: 10px;
margin-left: 10px;
min-height:120px;
min-width:830px;
font-family: "Open Sans", sans-serif;
background-color: lightgray;
outline: none;
border: none;
width: 270px;
height: 60px;
border-radius: 5px;
-webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  animation-delay:0.5s;
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
`
const SendButton=styled.button`
width:415px;
align-self: center;
margin-left: -25px;
outline: none;
border: none;
background-color: #ffd600;
border-radius: 5px;
height: 60px;
font-family: "Open Sans", sans-serif;
color: white;
font-size: large;
font-weight: bold;
:hover{
    background-color:#ADFF2F;
    -webkit-animation-name: pulse;
    animation-name: pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    }
    @-webkit-keyframes pulse {
    0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    }
    50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
    }
    100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    
    }
    }
    @keyframes pulse {
    0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    }
    50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
    }
    100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    }
}
`


export const Contact=()=>{
    return(
        <Fragment>
<Wrapper>
    <TextBlock>
        <TextTitle>CONTACT US</TextTitle>
        <TextText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextText>
    </TextBlock>
    <Form>
        <InputField name="name" id="name" placeholder="NAME"/>
        <InputField name="email" id="email" placeholder="EMAIL"/>
        <InputField name="phone" id="phone" placeholder="PHONE"/>
        <Message name="message" id="message" placeholder="MESSAGE" />
        <SendButton>SEND MESSAGE</SendButton>
    </Form>
</Wrapper>
        </Fragment>
    )
}