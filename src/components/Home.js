import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="order online for touchless delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        DownArrow="down-arrow.svg"
      />

      <Section
        title="Model Y"
        description="order online for touchless delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        DownArrow="down-arrow.svg"
      />

      <Section
        title="Model 3"
        description="order online for touchless delivery"
        backgroundImage="model-3.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        DownArrow="down-arrow.svg"
      />

      <Section
        title="Model X"
        description="order online for touchless delivery"
        backgroundImage="model-x.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        
      />

      <Section
        title="Lowest Costs Solar Panel in America"
        description="Money-back guarantee"
        backgroundImage="solar-panel.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />

      <Section
        title="Solar For New Roofs"
        description="Solar Roofs Cost Less Than a New Roof Plus Solar Panel"
        backgroundImage="solar-roof.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />

      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnText="Shop Now"
        rightBtnText=""
      />
    </Container>
  );
}

export default Home

const Container=styled.div`
    height:100vh;   

`