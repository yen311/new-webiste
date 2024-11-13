"use client";
import React, { useState } from "react";
import Typewriter from "@/components/Typewriter";
import { Counter } from "@/components/Counter";
import Card from "@/components/Card";

function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-between p-4 lg:p-16 text-white">
      <div className="w-full p-6 lg:px-16 bg-white/30 rounded-lg shadow-lg">
        <div className="flex flex-col items-start justify-between border-b border-gray-300 border-dotted">
          <h1 className="text-3xl font-bold">
            <Typewriter
              texts={["README.MD", "<p>ABOUT ME</p>", "HELLO STRANGER👋!"]}
            ></Typewriter>
          </h1>
          <h4 className="pt-4 pb-2">Fun Facts</h4>
        </div>
        <div className="text-lg font-normal">
          <div className="rounded-2xl bg-white/50 my-4 p-4">
            Hey G'Day!
            <br /> Welcome to my personal website. I'm glad you're here! 🎉
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
