import React from 'react';
import gsap from 'gsap';
import { Title } from '../components/title';
import Transition from '../components/transition';

const Publications = () => {
    const transitionline = gsap.timeline();
    return(
        <div>
            <Transition timetransition={transitionline}/>
            <Title lineContent="This is" lineContent2="Scientific Publications"/>
        </div>
    )
}

export default Publications;