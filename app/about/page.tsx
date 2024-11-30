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
        <div className="space-y-4 > *">
          <Card>
            I've been a software engineer 👨🏻‍💻 for{" "}
            <Counter
              date={new Date("January 17, 2022 09:00:00")}
              color={"darkblue"}
            />{" "}
            years
          </Card>
          <Card>
            Currently, I'm working at{" "}
            <a
              className="text-orange-500"
              href="https://jaix.com.au/"
              target="blank"
            >
              JAIX 🚚 - a logistics software company
            </a>{" "}
            in Adelaide, South Australia
          </Card>
          <Card>
            My favorite city is Portland, Oregon 🌲. I studied and met my wife
            there
          </Card>
          <Card>
            We have a cat named August 🐱. She's a grey british shorthair
          </Card>
          <Card>
            <div className="flex items-center">
              My favorite framework is
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
          <Card>
            I was borned{" "}
            <Counter
              date={new Date("March 11, 1997 09:00:00")}
              color={"IndianRed"}
            />{" "}
            years ago in Taiwan.
          </Card>
          <Card>
            I'm a{" "}
            <a href="https://www.16personalities.com/" target="blank">
              ISTJ
            </a>{" "}
            by heart
          </Card>
        </div>
      </PageWrapper>
    </>
  );
}

export default AboutPage;
