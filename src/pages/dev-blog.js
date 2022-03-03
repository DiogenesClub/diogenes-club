import React from 'react';
import gsap from 'gsap';
import { Title } from '../components/title';
import Transition from '../components/transition';

const DevBlog = () => {
    const transitionline = gsap.timeline();
    return(
        <div>
            <Transition timetransition={transitionline}/>
            <Title lineContent="This is" lineContent2="DevBlog"/>
        </div>
    )
}

export default DevBlog;