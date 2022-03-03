import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { Container, ContainerImg, ContainerText, Wrapper } from './home.style';
import { Title } from '../components/title';
import Transition from '../components/transition';

const Home = () => {
    let parraf = useRef(null);
    let image = useRef(null);
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
        .from(image, {x: 60, y:-64, stagger:0.3}, "-=0.2")
    })
    return(
        <Container>
            <Transition timetransition={transitionline}/>
            <Wrapper>
                <ContainerText>
                    <Title lineContent="Welcome, " lineContent2="Diógenes Club"/>
                    <p ref={el => parraf = el}>
                    Eu voluptate dolore sint ea duis aute consectetur culpa proident amet do id. Id cillum ex proident anim qui veniam. Mollit Lorem duis mollit eu deserunt.
                    </p>
                </ContainerText>
                <ContainerImg>
                    <img ref={el => image = el} src='./imagen1.jpg' alt=''/>
                </ContainerImg>
            </Wrapper>
        </Container>
    )
}

export default Home;