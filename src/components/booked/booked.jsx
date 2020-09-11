import React, { Fragment } from 'react'
import styled from 'styled-components'

const BookedContainer=styled.div`

width:400px;
height: 200px;

background: lightyellow;
border: #ffd600 5px solid;
border-radius: 10px;
z-index: 1000;
display:flex;
justify-content:center;
align-items:center;
`
const BookedText=styled.p`
width:300px;
text-align:center;
`
const Wrapper=styled.div`
top:40%;
position: absolute;
display:flex;
width:100%;
height:300px;
justify-content:center;
align-items:center;

&.fade-enter {
    opacity: 0;
    transform:translateY(-200px)
  };
  
  
  &.fade-enter-active {
    opacity: 1;
    transform:translateY(0px);
    transition:0.3s;
  };
  
  
  &.fade-exit {
    opacity: 1;
    transform:translateY(0px)
  };
  
  
  &.fade-exit-active {
    opacity: 0;
    transform:translateY(200px);
    transition:0.1s;
  };
  
`

export const Booked = (props)=>{
    const {name, people, date, time}=props.props;
    console.log()
return(
    <Fragment>
        <Wrapper>
<BookedContainer>
    <BookedText>
    Table reserved in the name of <b>{name}</b> for <b>{people}</b> people at <b>{time}</b> <b>{date}</b>
    </BookedText>
</BookedContainer>
</Wrapper>
    </Fragment>
)

}