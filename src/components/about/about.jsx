import React, { Fragment } from 'react'
import styled from 'styled-components'

const AboutWrapper=styled.main`
z-index: -10;
overflow: hidden;
margin: -10px 0;
display: flex;
flex-direction: column;
position: absolute;
left: 0;
width:100%;
height: 100vh;
background: url("../img/ad8dc293645eb043ad328652e84f9f87.jpeg") center
  no-repeat;
background-size: cover;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
`
const AboutTextContainer=styled.div`
display: flex;
flex-direction: column;
margin-top: 200px;
align-items: center;
width: 600px;
`
const AboutParag=styled.p`
font-family: "Open Sans", sans-serif;
margin-left: 20px;
text-align: center;
color:white;
`
const StyledAboutParag=styled(AboutParag)`
font-weight: bold;
font-size: 1.3em;
color:white;
`
const AboutTitle=styled.h1`
@font-face {
    font-family: "Banny Bold Round";
    font-style: normal;
    font-weight: normal;
    src: local("Banny Bold Round"), url("../Banny-BoldRound.woff");
  };
  font-family: "Banny Bold Round";
color:white;
`
const AboutWrapperTwo=styled.div`
display: flex;
justify-content: space-around;
`
const AboutImage=styled.img`
width: 375px;
height: 375px;
box-shadow: 0 0 50px 20px black;
margin-top: 200px;
margin-bottom: 50px;
margin-left: 150px;
`
const AboutSquare=styled.div`
margin-top: 160px;
margin-left: -230px;
`

export const About=()=>{

return(
    <Fragment>
         <AboutWrapper>
        <AboutWrapperTwo>
          <AboutTextContainer>
            <AboutTitle>ABOUT US</AboutTitle>
            <StyledAboutParag>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna.
            </StyledAboutParag>
            <AboutParag>
              Integer ullamcorper neque eu purus euismod, ac faucibus mauris
              posuere. Morbi non ultrices ligula. Sed dictum, enim sed
              ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem
              quam nec sem. Mauris tincidunt feugiat diam convallis pharetra.
              Nulla facilisis semper laoreet.
            </AboutParag>
          </AboutTextContainer>
         <AboutImage src="/media/masus/1430073D30072578/okkai/public/img/about-1.jpeg"/>
          <AboutSquare>
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
          </AboutSquare>
        </AboutWrapperTwo>
      </AboutWrapper>
    </Fragment>
)

}