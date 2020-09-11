import React, { Fragment } from 'react'
import styled from 'styled-components'

const TeamPage=styled.main`
z-index: -10;
overflow: hidden;
margin: -10px 0;
display: flex;
flex-direction: column;
position: absolute;
left: 0;
width: 100%;
height: 100vh;
background: url("../img/team-bg.jpeg") center no-repeat;
background-size: cover;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
`
const TeamWrapper=styled.div`
margin-top: 30px;
display: flex;
flex-direction: row;
justify-content: space-around;
`
const TeamTitle=styled.p`
margin-left:-10px;
margin-top: 160px;
position: absolute;
display: flex;
color: white;
font-family: "Open Sans", sans-serif;
font-size: 0.8em;
letter-spacing: 7px;
width: 100%;
justify-content: center;
`
const TeamTitleTwo=styled.h1`
color: white;
font-family: "Banny Bold Round";
font-size: 3em;
text-align: center;
`
const TeamTextB=styled.p`
color: white;
font-family: "Open Sans", sans-serif;
font-weight: bold;
font-size: 1.3em;
text-align: center;
`
const TeamTextS=styled.p`
color: white;
font-family: "Open Sans", sans-serif;
text-align: center;
`
const TeamImg=styled.img`
z-index: 0;
width: 375px;
height: 375px;
box-shadow: 0 0 50px 20px black;
margin-top: 200px;
margin-bottom: 50px;
margin-left: 150px;
`
const TeamSquare=styled.div`
z-index: 100;
margin-left: -600px;
margin-top:160px
`
const TeamLeft=styled.div`
margin-left: -100px;
display: flex;
width: 400px;
`
const TeamRight=styled.div`
display: flex;
flex-direction: column;
width: 500px;
justify-content: center;
align-items: center;
`

export const Team = ()=>{
return(
    <Fragment>
        <TeamPage>
        <TeamWrapper>
          <TeamTitle>OUR TEAM</TeamTitle>
          <TeamLeft>
            <TeamImg src="./img/team-chef.jpeg" alt=""></TeamImg>
            <TeamSquare><svg
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
            </svg></TeamSquare>
          </TeamLeft>
          <TeamRight>
            <TeamTitleTwo>MASTER CHEF</TeamTitleTwo>
            <TeamTextB> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna.</TeamTextB>
            <TeamTextS>Integer ullamcorper neque eu purus euismod, ac faucibus mauris
              posuere. Morbi non ultrices ligula. Sed dictum, enim sed
              ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem
              quam nec sem. Mauris tincidunt feugiat diam convallis pharetra.
              Nulla facilisis semper laoreet.</TeamTextS>
          </TeamRight>
        </TeamWrapper>
      </TeamPage>
    </Fragment>
)

}