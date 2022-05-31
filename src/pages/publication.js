import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Title } from "../components/title";
import Transition from "../components/transition";
import Card from "../components/card";
import { ContentCard } from "./publication.style";

const Publications = () => {
  const transitionline = gsap.timeline();
  let card = useRef(null);
  useEffect(() => {
    gsap.from(card, 1, {
      opacity: 0,
      y: -40,
      ease: "power3.out",
      stagger: {
        amount: 0.15,
      },
    });
  });

  return (
    <div>
      <Transition timetransition={transitionline} />
      <Title lineContent="This is" lineContent2="Scientific Publications" />
      <ContentCard ref={(el) => (card = el)}>
        <h1>No Posts</h1>
      </ContentCard>
    </div>
  );
};

export default Publications;
