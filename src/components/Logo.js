import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'; // Adjust the import path as per your project setup



const LogoText = styled.h1`


font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontmd};
color: ${props => props.theme.text};
transition: all 0.2s ease;

a:hover {
    transform: scale(1.1);

}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
            The Raccoon Soseity
        </Link>
    </LogoText>
  )
}

export default Logo
