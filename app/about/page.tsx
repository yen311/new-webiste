"use client";
import React, { useState } from "react";
import Typewriter from "@/components/Typewriter";
import { Counter } from "@/components/Counter";
import Sentence from "@/components/Sentence";

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
          <Sentence>
            Hey G'Day! Welcome to my personal website. I'm glad you're here! 🎉
          </Sentence>
          <Sentence>
            &lt;Component&gt;I'm a software engineer 👨🏻‍💻 with{" "}
            <Counter
              date={new Date("January 17, 2022 09:00:00")}
              color={"darkblue"}
            />{" "}
            year of experience in Adelaide, Australia.&lt;/Component&gt;
          </Sentence>
          <Sentence>
            Currently, I'm working at a logistics software company —{" "}
            <a
              className="text-orange-500"
              href="https://jaix.com.au/"
              target="blank"
            >
              JAIX
            </a>{" "}
            in Adelaide, where we're building a comprehensive ERP system for
            logistics companies across Australia! 🚚 Doesn’t that sound cool &&
            exciting? 😎
          </Sentence>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
