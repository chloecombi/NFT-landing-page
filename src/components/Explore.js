// Explore.js

import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    display: inline-block;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    outline: none;
    border: none;
    font-size: ${props => props.theme.fontsm};
    margin: 10px;
    padding: 0.9rem 2.3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(0.9);
    }

    &:hover::after {
        transform: translate(-50%,-50%) scale(1);
        padding: 0.3rem;
    }
`;

const Explore = ({ text, targetId }) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Btn onClick={handleClick}>
            {text}
        </Btn>
    );
}

export default Explore;
