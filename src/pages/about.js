import React from 'react';
import gsap from 'gsap';
import { Title } from '../components/title';
import Transition from '../components/transition';

const About = () => {
    const transitionline = gsap.timeline();
    return(
        <div>
            <Transition timetransition={transitionline}/>
        <Title lineContent="This is" lineContent2="About"/>
        <div>
            <p className='info'>
                Eu voluptate dolore sint ea duis aute consectetur culpa proident amet do id. Nostrud pariatur anim duis ullamco ea cillum nulla ex duis tempor. Id cillum ex proident anim qui veniam. Tempor quis quis reprehenderit laborum do non sit dolore qui excepteur ea est non minim. Fugiat dolore reprehenderit aliqua reprehenderit aute pariatur incididunt ullamco magna. Consequat mollit qui esse sint minim laborum fugiat dolore. Mollit Lorem duis mollit eu deserunt exercitation qui aute officia officia culpa sint aliqua aliquip.
            </p>
        </div>
    </div>
    )
}

export default About;