import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'

const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body}
`

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.NavHeight};
margin: 0 auto;
`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
`


const MenuItem = styled.li `
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer !important;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height:2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;

}

&:hover::after{
  width: 100%
}

`
const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const Navigation = () => {
  return (

    <Section>
      <NavBar>
        <Logo />
        <Menu>
        <MenuItem onClick={() => handleScroll('home')}>Home</MenuItem>
          <MenuItem onClick={() => handleScroll('about')}>About</MenuItem>
          <MenuItem onClick={() => handleScroll('roadmap')}>Roadmap</MenuItem>
          <MenuItem onClick={() => handleScroll('showcase')}>Showcase</MenuItem>
          <MenuItem onClick={() => handleScroll('team')}>Team</MenuItem>
         
        </Menu>

       <Button text="Twitter" link="https://twitter.com/rocketjetracoon"/>
 
        
      
      </NavBar>
    </Section>
  )
}

export default Navigation
