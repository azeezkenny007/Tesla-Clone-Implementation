import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from '../features/Car/carSlice';
import { useSelector } from 'react-redux';
import  styles from './Section.module.css'

function Header() {

   const [burgerStatus,setBurgerStatus]=useState(false)
   const cars=useSelector(selectCars)
   

  return (
    <Container>
      <a href="#">
        <img src="./images/logo.svg" alt="" />
      </a>

      <Menu>{cars && cars.map((car, index) => <a  key={index} href="#">{car}</a>)}</Menu>

      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
   {cars && cars.map((car, index) => <li key={index}><a href="#">{car}</a></li>)}        
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cyber truck</a></li>
        <li><a href="#">Roadaster</a></li>

      </BurgerNav>
    </Container>
  );
}

export default Header

const Container = styled.div`
   min-height: 60px;
   position: fixed;
   display:flex;
   align-items:center;
   padding: 0 20px;
   top:0;
   left:0;
   right:0;
   justify-content:space-between;
   z-index:1;
`

const Menu=styled.div`
   a{
    text-decoration:none;
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
   }

   @media (max-width: 900px){
      display:none;
   }
`

const RightMenu = styled(Menu)`
    padding:0;
    margin-right:10px;
    display:flex;
    align-items:center;
`;

const CustomMenu=styled(MenuIcon)`
    cursor:pointer;
`

const BurgerNav=styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    list-style:none;
    padding:20px;
    text-align:start; 
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'  };
    transition: transform 0.2s ease-in;
    display:flex;
    flex-direction:column;

    li{
      padding:15px 0;
      border-bottom: 1px solid rgba(0,0,0,0.2);
   
       a{
         font-weight:600;
       }


    }
    
`

const CustomClose=styled(CloseIcon)`
    cursor:pointer;
`

const CloseWrapper=styled.div`
     display:flex;
     justify-content:flex-end;
`