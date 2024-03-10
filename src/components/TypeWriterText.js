import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Button from './Button'




const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;


span{
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
}
.text-1 {
    color: Yellow;
    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
}
`

const SubTitle = styled.h3`
font-size: ${(props => props.theme.frontlg)};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.text}, 0.6)`};
font-weight:600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;


`
const TypeWriterText = () => {
  return (
   <>
    <Title>
        The Raccoon Soseity
        <Typewriter
        options={{ 
            autoStart: true,
            loop:true,
        }}
    
        onInit={(typewriter) => {
            
            typewriter.typeString('<span class="text-1"> We are Builders. </span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-1">We are United.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-1">We Will Rock It!</span>')
            .pauseFor(2000)
            .deleteAll()
            .start()
           
        }}
        />
            </Title>
    
    <SubTitle>Looking for an awesome community? join The Raccoon Soseity.</SubTitle>
    
    
    <ButtonContainer>
    <Button text="Explore" link="#About"/>
    </ButtonContainer>
    
    </>
  )
}


export default TypeWriterText
