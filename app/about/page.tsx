"use client";
import React, { useState } from "react";
import Typewriter from "@/components/Typewriter";
import { Counter } from "@/components/Counter";
import Card from "@/components/Card";
import FlexStack from "@/components/FlexStack";
import { SiReact } from "react-icons/si";
import PageWrapper from "@/components/PageWrapper";

function AboutPage() {
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
        <div className="text-lg font-normal">
          <FlexStack>
            <Card top="I've been a software engineer 👨🏻‍💻 for" bottom="years">
              <Counter
                date={new Date("January 17, 2022 09:00:00")}
                color={"darkblue"}
              />
            </Card>
            <Card
              top="Currently, I'm working at"
              bottom="in Adelaide, South Australia"
            >
              <a
                className="text-orange-500"
                href="https://jaix.com.au/"
                target="blank"
              >
                JAIX 🚚 - a logistics software company
              </a>{" "}
            </Card>
            <Card
              top="My favorite city is"
              bottom="I studied and met my wife there"
            >
              Portland, Oregon 🌲
            </Card>
            <Card
              top="We have a cat named"
              bottom="She's a grey british shorthair"
            >
              August 🐱
            </Card>
            <Card
              top="My favorite framework is"
              bottom="What I'm using to build this site"
            >
              <div className="flex items-center">
                <a
                  href="https://react.dev/"
                  target="blank"
                  className="text-[#61DAFB] mx-2"
                >
                  React
                </a>
                <SiReact color="#61DAFB" />
              </div>
            </Card>
            <Card top="I was borned" bottom="years in Taiwan.">
              <Counter
                date={new Date("March 11, 1997 09:00:00")}
                color={"IndianRed"}
              />
            </Card>
            <Card top="I'm a" bottom="by heart">
              <a href="https://www.16personalities.com/" target="blank">
                ISTJ
              </a>
            </Card>
          </FlexStack>
        </div>
      </PageWrapper>
    </>
  );
}

export default AboutPage;
