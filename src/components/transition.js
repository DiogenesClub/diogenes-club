import React, { useEffect, useRef } from 'react'
import {Power4} from 'gsap'
import { Effect } from './transition.style'

function Transition({timetransition}) {
    const trans = useRef(null);
    useEffect(()=>{
        timetransition.to(trans.current,{
            duration: 4,
            x: 2500,
            ease: Power4.easeOut
        })
    })
    return (
        <Effect ref={trans}></Effect>
    )
}

export default Transition