import React, { Fragment } from 'react'
import styled from 'styled-components'

const ElementWrapper=styled.div`
margin-top:-10px;
z-index: -10;
overflow: hidden;
margin: -10px 0;
display: flex;
flex-direction: row;
position: absolute;
left: 0;
width:100vw;
height: 100vh;
background: url("../img/ad8dc293645eb043ad328652e84f9f87.jpeg") center
  no-repeat;
background-size: cover;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
`
const BookLeft=styled.div`
margin-top: 100px;
margin-left: -20px;
width: 700px;
`
const BookingForm=styled.form`
width: 700px;
border: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const BookingFieldset=styled.fieldset`
border: none;

justify-content: center;

width: 600px;
flex-direction: row;
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
const SelectField=styled.select`
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
const BookButton=styled.button`
width:550px;
align-self: center;
margin-left: -25px;
outline: none;
border: none;
background-color: #ffd600;
border-radius: 5px;
height: 60px;
font-family: "Open Sans", sans-serif;
color: black;
font-size: large;
font-weight: bold;
:hover{
    width: 600;
    background-color:#ADFF2F;
    transition: 0.3s;
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
`
const BookTitle=styled.h1`
@font-face {
    font-family: "Banny Bold Round";
    font-style: normal;
    font-weight: normal;
    src: local("Banny Bold Round"), url("../Banny-BoldRound.woff");
  };
  font-family: "Banny Bold Round";
font-size: 3em;
margin-left: -10px;
color:white;
`
const BookRight=styled.div`
display: flex;
`
const BookImg=styled.img`
width: 375px;
height: 375px;
box-shadow: 0 0 50px 20px black;
margin-top: 180px;
margin-bottom: 50px;
margin-left: 50px;
`
const BookSquare=styled.div`
position: absolute;
margin-left: 200px;
margin-top: 145px;
`


export const Booking=()=>{

    return(
        <Fragment>
             <div className="book__wrapper">
      <main className="book">
        <ElementWrapper>
          <BookLeft>
            <BookingForm>
              <BookTitle>BOOK A TABLE</BookTitle>
              <BookingFieldset>
                <InputField type="text" name="name" placeholder="NAME"/>
                <InputField type="email" name="email" placeholder="EMAIL"/>
                <InputField type="phone" name="phone" id="" placeholder="PHONE NUMBER"/>
                <SelectField
                  name="people"
                  id=""
                 
                  aria-placeholder="People"
                >
                
                  <option className="option" value="" disabled selected>PEOPLE</option>
                  <option className="option" value="1">1</option>
                  <option className="option"  value="2">2</option>
                  <option className="option"  value="3">3</option>
                  <option  className="option"  value="4">4</option>
                </SelectField>
                <InputField type="text" name="date" placeholder="DATE" />
                <SelectField name="time" id="">
                  <option value="" selected disabled>TIME</option>
                  <option value="">12:00</option>
                  <option value="">13:00</option>
                  <option value="">14:00</option>
                  <option value="">15:00</option>
                  <option value="">16:00</option>
                  <option value="">17:00</option>
                  <option value="">18:00</option>
                </SelectField>

                
              </BookingFieldset>
              <BookButton type="submit">BOOK NOW</BookButton>
            </BookingForm>
          </BookLeft>
          <BookRight>
            <BookImg src="./img/book.jpeg" alt="" />
            <BookSquare>
              <svg
                width="429"
                height="450"
                viewBox="0 0 429 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <mask id="path-1-inside-1" fill="white">
                    <rect x="100" y="100" width="250" height="250" rx="5" />
                  </mask>
                  <rect
                    x="100"
                    y="100"
                    width="250"
                    height="250"
                    rx="5"
                    stroke="#E8C300"
                    stroke-width="40"
                    mask="url(#path-1-inside-1)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="450"
                    height="450"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="50" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </BookSquare>
          </BookRight>
        </ElementWrapper>
      </main>
    </div>
        </Fragment>
    )
}