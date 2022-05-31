import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Title } from "../components/title";
import Transition from "../components/transition";
import { ContentCard } from "./academy.style";
import Card from "../components/card";

const Academy = () => {
  const transitionline = gsap.timeline();
  let card = useRef(null);
  useEffect(() => {
    gsap.from(card, 1, {
      opacity: 0,
      y: -40,
      x: 40,
      ease: "power3.out",
      stagger: {
        amount: 0.15,
      },
    });
  });
  return (
    <div>
      <Transition timetransition={transitionline} />
      <Title lineContent="This is" lineContent2="Academy" />
      <ContentCard ref={(el) => (card = el)}>
      <h1>No Posts</h1>
      </ContentCard>
    </div>
  );
};

export default Academy;
