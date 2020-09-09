import React from 'react'
import styled from 'styled-components'
const MenuItem=styled.div`
font-family: "Banny Bold Round";
display: flex;
width: 300px;
flex-wrap: wrap;
color: white;
`
const ItemDescr=styled.p`
font-size: small;
color:lightsteelblue !important;
margin-top: -20px;
`
export const MenuSingleItem=(props)=>{
    console.log(props)
const {item}=props
return(
    <MenuItem>
    <p className="menu-item--title"> {item.name}. . . .</p>
    <p className="menu-item--price">{item.price} USD</p>
    <ItemDescr>
      {item.description}
    </ItemDescr>
  </MenuItem>
)

}