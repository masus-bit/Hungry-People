import React, { useState } from 'react'
import styled from 'styled-components'
import {Specialities } from '../specialities/spec.jsx'
import {connect} from 'react-redux'
import { MenuSingleItem } from '../menu-item/menu-item.jsx'
import { splitData } from '../../utils/utils.js'
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
margin-left: 50px;
margin-right: 50px;
`

const MenuLink=styled.a`
font-family: "Open Sans", sans-serif;
color: #ffd600;
text-decoration: none;
cursor:pointer;
`

const Menu= (props)=>{
  const {menu} = props
  const normalizedMenu=splitData(menu.pizza)
  const [type,setType]=useState(null)

    return(
        <MenuWrapper>
        <main className="menu-page">
          
          <FullMenu>
            <MenuText>
              <h1 className="menu-title">DELICIOUS MENU</h1>
              <h3 className="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</h3>
            </MenuText>
            <MealType>
              {menu.map((it,i)=>{
                return <MealItem >
                  <MenuLink onClick={(evt)=>{
                  evt.preventDefault()
                  setType(evt.target.textContent)
                  }}>{menu.keys()[i]}</MenuLink>
                </MealItem>
              })}
              {/* <MealItem>
                <MenuLink>SOUP</MenuLink>
              </MealItem>
              <MealItem >
                <MenuLink>PIZZA</MenuLink>
              </MealItem>
              <MealItem>
                <MenuLink>PASTA</MenuLink>
              </MealItem>
              <MealItem>
                <MenuLink>DESERT</MenuLink>
              </MealItem>
              <MealItem>
                <MenuLink>WINE</MenuLink>
              </MealItem>
              <MealItem>
                <MenuLink>DRINKS</MenuLink>
              </MealItem>
              <MealItem>
                <MenuLink>BEER</MenuLink>
              </MealItem> */}
            </MealType>
            <ColumnWrapper>
             
              {normalizedMenu.map((it,i)=>{
                return <MenuColumn>
                  {normalizedMenu[i].map((it)=>{

                  return <MenuSingleItem key={it.id} item={it}/>
                  })}
                </MenuColumn>
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