import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Title } from "../components/title";
import Transition from "../components/transition";
import { ContentCard } from "./dev-blog.style";
import Card from "../components/card";
import postlist from "../data/blog.json";

const DevBlog = ({posts}) => {
  console.log(postlist)
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
  const excerptList = postlist.map(post =>{
    return post.description.split(" ").slice(0, 10).join(" ")
  })
  return (
    <div>
      <Transition timetransition={transitionline} />
      <Title lineContent="This is" lineContent2="DevBlog" />
      <ContentCard ref={(el) => (card = el)}>
      { 
      postlist.length !== 0 ?
      postlist.map((item, i) => (
        <Card
          key={item.id}
            title={item.title}
            description={excerptList[i]}
            url={item.id}
          />
      ))
      :
      (<h1>No Posts</h1>)
      }

      </ContentCard>
    </div>
  );
};

export default DevBlog;
