import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { Container, ContainerImg, ContainerInput, ContainerText, Wrapper } from './home.style';
import { Title } from '../components/title';
import Transition from '../components/transition';

const Home = () => {
    let parraf = useRef(null);
    let image = useRef(null);
    let input = useRef(null);
    const transitionline = gsap.timeline();

    const timeline = gsap.timeline({
        defaults: {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        }
    })
    useEffect(()=>{
        timeline
        .from(parraf, {
            x: -50, stagger: 0.3
        })
        .from(image, {x: 60, y:-64, stagger:0.3}, "-=0.9")
        .from(input, {x:70}, "0.1")
    })
    return(
        <Container>
            <Transition timetransition={transitionline}/>
            <Wrapper>
                <ContainerText>
                    <Title lineContent="Welcome to" lineContent2="Diógenes Club"/>
                    <p ref={el => parraf = el}>
                    It is a scientific-academic entity that carries out research and training activities in favor of the video game development industry.
                    </p>
                </ContainerText>
                <ContainerImg>
                    <img ref={el => image = el} src='./bandera.png' alt=''/>
                </ContainerImg>
                <ContainerInput ref={el => input = el}>
                    <p>Enter you email to get Started!</p>
                    <input type="text" placeholder='email@email.org'/>
                    <button>Begin</button>
                </ContainerInput>
            </Wrapper>
        </Container>
    )
}

export default Home;