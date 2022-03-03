import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap';
import { H1, H2 } from './title.style';

export const Title = ({ lineContent, lineContent2}) => {
    let line1 = useRef(null);
    let line2 = useRef(null);

    useEffect(()=>{
        gsap.from([line1, line2], 0.8,{
            ease: "power3.out",
            y: 64,
            x: -50,
            stagger: {
                amount: 0.15
            }
        });
    }, [line1, line2])

  return (
    <>
        <H2 ref={el => line1 = el}>{lineContent}</H2>
        <H1 ref={el => line2 = el}>{lineContent2}</H1>
    </>
  )
}