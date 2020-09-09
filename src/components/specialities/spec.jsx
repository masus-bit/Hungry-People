import React from 'react'
import styled from 'styled-components'

const SpecWrapper=styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
`
const SpecTitle=styled.h1`
@font-face {
    font-family: "Banny Bold Round";
    font-style: normal;
    font-weight: normal;
    src: local("Banny Bold Round"), url("../Banny-BoldRound.woff");
  }
color: white;
  font-family: "Banny Bold Round";
`
const SpecImage=styled.img`
z-index: 0;
width: 375px;
height: 375px;
box-shadow: 0 0 50px 20px black;

margin-bottom: 50px;
margin-left: 150px;
`
const SpecContainer=styled.div`
display: flex;
justify-content: space-around;
margin-top: 100px;
`
const SpecLeft=styled.div`
display: flex;
margin-right: 300px;
`
const SpecRight=styled.div`
width: 500px;
`
const SpecSquare=styled.div`
z-index: 1;
margin-left: -600px;
margin-top:-40px
`
const SpecTitleText=styled.h1`
color: white;
font-family: "Banny Bold Round";
font-size: 3em;
text-align: center;
`
const SpecTextB=styled.p`
color: white;
font-family: "Open Sans", sans-serif;
font-weight: bold;
font-size: 1.3em;
text-align: center;
`
const SpecTextS=styled.p`
color: white;
font-family: "Open Sans", sans-serif;
text-align: center;
`

export const Specialities=()=>{

    return(
        <SpecWrapper>
              <SpecTitle>SPECIALTIES</SpecTitle>
              <SpecContainer>
              <SpecLeft>
                <SpecImage src="./img/image-spec.png"></SpecImage>
                <SpecSquare><svg
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
                      strokeWidth="40"
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
                      colorInterpolationFilters="sRGB"
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
                </svg></SpecSquare>
              </SpecLeft>
              <SpecRight>
                <SpecTitleText>CHOCOLATE PANCAKES</SpecTitleText>
                <SpecTextB> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                  velit maximus, molestie est a, tempor magna.</SpecTextB>
                <SpecTextS>Integer ullamcorper neque eu purus euismod, ac faucibus mauris
                  posuere. Morbi non ultrices ligula. Sed dictum, enim sed
                  ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem
                  quam nec sem. Mauris tincidunt feugiat diam convallis pharetra.
                  Nulla facilisis semper laoreet.</SpecTextS>
              </SpecRight>
            </SpecContainer>
          </SpecWrapper>
    )
}