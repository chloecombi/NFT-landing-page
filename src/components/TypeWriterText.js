import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Title = styled.h2`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${props => props.theme.text};
    align-self: flex-start;

    span {
        text-transform: uppercase;
        font-family: "Akaya Telivigala", cursive;
    }

    .text-1 {
        color: Yellow;
        text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
    }
`;

const SubTitle = styled.h3`
    font-size: ${(props => props.theme.frontlg)};
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.text}, 0.6)`};
    font-weight:600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;
`;

const ButtonContainer = styled.div`
    width: 7.5%;
    align-self: flex-start;


    display: inline-block;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    outline: none;
    border: none;

    font-size: ${props => props.theme.fontsm};
    margin:10px;
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

const TypeWriterText = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Title>
                The Raccoon Soseity
                <Typewriter
                    options={{ 
                        autoStart: true,
                        loop: true,
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
                            .start();
                    }}
                />
            </Title>

            <SubTitle>Looking for an awesome community? join The Raccoon Soseity.</SubTitle>

            <ButtonContainer>
                {/* Use JavaScript function to scroll to the "About" section */}
                <a href="#about" onClick={scrollToAbout}>Explore</a>
            </ButtonContainer>
        </>
    );
}

export default TypeWriterText;
