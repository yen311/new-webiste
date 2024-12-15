"use client";
import React from "react";
import Typewriter from "@/components/Typewriter";
import { Counter } from "@/components/Counter";
import Card from "@/components/Card";
import { useSprings, animated } from "@react-spring/web";
import { SiReact } from "react-icons/si";
import PageWrapper from "@/components/PageWrapper";

const listItems: React.ReactNode[] = [
  <>
    I've been a software engineer 👨🏻‍💻 for{" "}
    <Counter date={new Date("January 17, 2022 09:00:00")} color={"darkblue"} />{" "}
    years
  </>,
  <>
    Currently, I'm working at{" "}
    <a className="text-orange-500" href="https://jaix.com.au/" target="blank">
      JAIX 🚚 - a logistics software company
    </a>{" "}
    in Adelaide, South Australia.
  </>,
  <>
    My favorite city is Portland, Oregon 🌲. I studied and met my wife there.
  </>,
  <>We have a cat named August 🐱. She's a grey british shorthair.</>,
  <div className="flex items-center">
    My favorite framework is
    <a href="https://react.dev/" target="blank" className="text-[#61DAFB] mx-2">
      React
    </a>
    <SiReact color="#61DAFB" />
  </div>,
  <>
    I was borned{" "}
    <Counter date={new Date("March 11, 1997 09:00:00")} color={"IndianRed"} />{" "}
    years ago in Taiwan.
  </>,
  <>
    I'm a{" "}
    <a href="https://www.16personalities.com/" target="blank">
      ISTJ
    </a>{" "}
    by heart.
  </>,
];

function AboutPage() {
  const springs = useSprings(
    listItems.length, // Number of springs
    listItems.map((_, index) => ({
      from: { opacity: 0, transform: "rotateY(180deg)" },
      to: { opacity: 1, transform: "rotateY(0deg)" },
      delay: index * 200, // Stagger the animations with delay
    })),
  );

  return (
    <>
      <PageWrapper disappearOnMobile={true}>
        <div className="flex flex-col items-start justify-between border-b border-gray-300 border-dotted mb-4">
          <h1 className="text-3xl font-bold">
            <Typewriter
              texts={["README.MD", "<p>ABOUT ME</p>", "HELLO STRANGER👋!"]}
            ></Typewriter>
          </h1>
          <h4 className="pb-2">Fun Facts</h4>
        </div>
        <div className="space-y-4 > *">
          {springs.map((props, index) => (
            <animated.div style={props} key={index}>
              <Card>{listItems[index]}</Card>
            </animated.div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}

export default AboutPage;
