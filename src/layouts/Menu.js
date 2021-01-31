import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Spacer } from '../GlobalStyle';
import { useHistory } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import bgImage from '../images/inicio.jpg';
import Footer from '../components/Footer';

import onboardImage from '../images/onboard.png';

const Background = styled.div`
	background-color: #FFF;
	top: 0;
	left: 0;
	height: 100%;
	overflow: hidden;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
    background-position: center;
	position: fixed;
	z-index: 1003;
`;

const Container = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 1004;
`;

const Wall = styled.div`
	background-color: #3FA3EF;
	width: 100%;
	z-index: 1003;
    color: #FFF;
    padding-top:5%;
    padding-left:10%;
    height: 70%;
    @media only screen and (min-width: 481px) {
        height: 65%;
        padding-top:10%;
        padding-left:30%;
    }
    @media only screen and (min-width: 768px) {
        height: 65%;
        padding-top:10%;
        padding-left:30%;
    }
`;

const Floor = styled.div`
	background-color: #FFE303;
	width: 100%;
	z-index: 1003;
    border-top:5px solid black;
    height: 30%;
    @media only screen and (min-width: 481px) {
        height: 35%;
    }
    @media only screen and (min-width: 768px) {
        height: 35%;
    }
`;

const OnboardCharacter = styled.img`
    opacity: 1;
    position: absolute;
    z-index:1100;
    top:45%;
    left:30%;
    width:130px;
    @media only screen and (min-width: 481px) {
        top:50%;
        left:25%;
        width:175px;
    }
    @media only screen and (min-width: 768px) {
        top:35%;
        left:15%;
        width:175px;
    }
`;

const OnboardTitle = styled.h1`
    text-align: left;
    font: bold 22px Verdana;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding-bottom:10px;
    font: bold 18px Verdana;
    padding-left:0;
    padding-top:5px;
    width:90%;
    text-align: center;
    @media only screen and (min-width: 481px) {
        font: bold 22px Verdana;
        padding-left:20%;
        padding-top:25px;
        padding-bottom:30px;
        width:80%;
        text-align: center;
    }
    @media only screen and (min-width: 768px) {
        font: bold 22px Verdana;
        padding-left:0;
        padding-top:25px;
        padding-bottom:30px;
        width:80%;
        text-align: left;
    }
`;

const OnboardText = styled.p`
    font: normal 13px Verdana;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding-bottom:20px;
    padding-left:0;
    width:90%;
    @media only screen and (min-width: 481px) {
        font: normal 16px Verdana;
        width:95%;
        padding-left:5%;
        text-align: center;
    }
    @media only screen and (min-width: 768px) {
        font: normal 16px Verdana;
        width:610px;
        padding-bottom:25px;
        padding-left:0;
        text-align: left;
    }
`;

const OnboardCall = styled.h3`
    text-align: left;
    font: bold 16px Verdana;
    letter-spacing: 0px;
    color: #FFE303;
    opacity: 1;
    padding-bottom:10px;
    cursor: pointer;
    padding-left:0;
    width:90%;
    text-align: center;
    @media only screen and (min-width: 481px) {
        font: bold 18px Verdana;
        padding-left:20%;
        width:80%;
        text-align: left;
    }
    @media only screen and (min-width: 768px) {
        font: bold 18px Verdana;
        padding-left:0;
        width:80%;
        text-align: left;
    }
`;

const StartGameBtn = styled.button`
	width: 80px;
    height: 80px;
    background-color: #FFE303;
    border: none;
    text-align: center;
    font: normal 60px Verdana;
    color: #000;
    opacity: 1;
    position:relative;
    top: 30%;
    left: 40%;
    @media only screen and (min-width: 481px) {
        top: 40%;
        left: 40%;
    }
    @media only screen and (min-width: 768px) {
        top: 40%;
        left: 45%;
    }
`;

export default function Menu({ layoutState, layoutDispatch }) {
	const history = useHistory();
	return (
		
            <TransitionGroup>
            <CSSTransition
              appear
              in
              classNames='transition'
              timeout={300}
              key={window.location.key}
            >
            <>
			<Container>
                <OnboardCharacter src={onboardImage} />
                <Wall>
                <OnboardTitle>Todos buscamos a Santi</OnboardTitle>
                <OnboardText>¡Hola! ¿Hacemos equipo?<br />Estoy buscando a Santi igual que tú y necesito ayuda para poder terminar el juego. Estoy seguro de que entre todos los personajes encontraremos a Santi y nos divertiremos mucho.</OnboardText>
                <OnboardText>¡Además! Conoceremos mucho sobre los tipos de alimentos saludables que podemos encontrar en nuestro país.</OnboardText>
                <OnboardCall onClick={() => {
						layoutDispatch({ type: consts.START_GAME });
						history.push('/round');
					}}>¿Te apuntas? ¡Vamos!</OnboardCall>
                </Wall>
                <Floor>
                <StartGameBtn
					onClick={() => {
						history.goBack();
					}}
				>
					&#8963;
				</StartGameBtn>
                </Floor>
			</Container>
			<Background bgImage={bgImage} />
            <Footer />
            </>
            </CSSTransition>
            </TransitionGroup>
		
	);
}

Menu.propTypes = {
	layoutDispatch: PropTypes.func,
};