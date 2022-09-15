import React from 'react'
import styled from 'styled-components'
import styles from "../a-styles/Section.module.css";
import Fade from "react-reveal/Fade";

function Section({title,leftBtnText,rightBtnText,backgroundImage,description}) {

  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText className={styles.ItemText}>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <ButtonContainer>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src="./images/down-arrow.svg" />
      </ButtonContainer>
    </Wrap>
  );
}

export default Section

const Wrap = styled.div`
     background-image: ${props => `url("./images/${props.bgImage}")`};
     width: 100vw;
     height: 100vh;
     background-size: cover;
     background-repeat: no-repeat;
     background-position: center;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     padding:10px
`

const ItemText=styled.div`
`

const ButtonGroup=styled.div`
      display:flex;
      margin-bottom:30px;

      @media (max-width :768px){
         flex-direction:column;
      } 

`

const LeftButton=styled.div`
   background-color:rgba(26,28,32,0.8);
   height:40px;
   width:256px; 
   color:white;
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius:100px;
   opacity:0.85;
   text-transform:uppercase;
   font-size:12px;
   cursor:pointer;
   margin:8px;
  
`

const RightButton=styled(LeftButton)`
     background-color:white;
     opacity:0.65;
     color:black;
     font-weight:bold;
`

const DownArrow = styled.img`
   margin-top: 15;
   height: 40px;
   animation: animateDown infinite 1.5s;

`

const ButtonContainer=styled.div`
`