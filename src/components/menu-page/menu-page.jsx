import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components'
import {Specialities } from '../specialities/spec.jsx'
import {connect} from 'react-redux'
import { MenuSingleItem } from '../menu-item/menu-item.jsx'
import { splitData } from '../../utils/utils.js'
import { CSSTransition } from "react-transition-group"




const MenuWrapper=styled.div`
background: url('../img/menu-bg.jpeg') no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  margin: -10px;
  padding: 0px;
  width: 99vw;
  height: 300vh;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);

`
const MenuText=styled.div`
color: white;
font-family: "Banny Bold Round";
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 200px;
justify-content: center;
`
const FullMenu=styled.div`
display: flex;
flex-direction: column;
margin: 0;
width: 100%;
align-items: center;
@font-face {
    font-family: "Banny Bold Round";
    font-style: normal;
    font-weight: normal;
    src: local("Banny Bold Round"), url("../Banny-BoldRound.woff");
  }
`

const MealType=styled.ul`
display: flex;
justify-content: space-around;
webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  animation-delay:0.3s;
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
const MealItem=styled.li`
margin: 50px 20px;
list-style: none;

`
const ColumnWrapper=styled.div`
display: flex;
width: 100%;
justify-content: center;
flex-wrap: wrap;
`


const MenuColumn=styled.div`

&.fade-enter {
  opacity: 0;
  transform:translateX(-200px)
};


&.fade-enter-active {
  opacity: 1;
  transform:translateX(0px);
  transition:0.3s;
};


&.fade-exit {
  opacity: 1;
  transform:translateX(0px)
};


&.fade-exit-active {
  opacity: 0;
  transform:translateX(200px);
  transition:0.1s;
};

margin-left: 50px;
margin-right: 50px;

`

const MenuLink=styled.a`
font-family: "Open Sans", sans-serif;
color: #ffd600;
text-decoration: none;
cursor:pointer;
:hover{
  color:green;
  transition:0.2s;
}
`


const Menu= (props)=>{
  const {menu} = props
  
  const [type,setType]=useState("PIZZA")
const [active, setActive]=useState(false)
    return(
        <MenuWrapper>
        <main className="menu-page">
          
          <FullMenu>
            <MenuText>
              <h1 className="menu-title">DELICIOUS MENU</h1>
              <h3 className="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</h3>
            </MenuText>
            <MealType>
              {Object.keys(menu).map((it,i)=>{
                return <MealItem >
                  <MenuLink active={active} onClick={(evt)=>{
                  evt.preventDefault()
                  
                  setActive(false)
                  setType(evt.target.textContent)
                  setTimeout(()=>setActive(true),200)
            
                  }}>{Object.keys(menu)[i]}</MenuLink>
                </MealItem>
              })}
          
            </MealType>
            <ColumnWrapper>
             
              {
              splitData(menu[type]).map((it,i)=>{
                return <CSSTransition
                in={active}
                classNames="fade"
                timeout={300}
                unmountOnExit
              ><MenuColumn>
                  {splitData(menu[type])[i].map((it)=>{

                  return <MenuSingleItem key={it.id} item={it}/>
                  })}
                </MenuColumn>
                </CSSTransition>
              })}
              <Specialities/>
            </ColumnWrapper>
            
          </FullMenu>
         
        </main>
      </MenuWrapper>
    )
}
const mapStateToProps=(state)=>{
  return(
    Object.assign({}, state, {
      menu:state.menu
    })
  )
}
export default connect(mapStateToProps)(Menu)
