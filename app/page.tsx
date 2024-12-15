"use client";
import PageWrapper from "@/components/PageWrapper";
import { SiDotnet, SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";

import { useSprings, animated } from "@react-spring/web";

const icons = [
  {
    Icon: SiNextdotjs,
    href: "https://nextjs.org/",
    color: "text-black",
  },
  {
    Icon: SiTailwindcss,
    href: "https://tailwindcss.com/",
    color: "text-[#06B6D4]",
  },
  {
    Icon: SiDotnet,
    href: "https://dotnet.microsoft.com/en-us/apps/aspnet/apis/",
    color: "text-[#512bd4]",
  },
  {
    Icon: BiLogoPostgresql,
    href: "https://www.postgresql.org/",
    color: "text-[#336791]",
  },
  {
    Icon: FaAws,
    href: "https://aws.amazon.com/?nc2=h_lg",
    color: "text-[#FF9900]",
  },
];

export default function Home() {
  const springs = useSprings(
    icons.length,
    icons.map((_, index) => ({
      from: { opacity: 0, transform: "translateX(500%)" },
      to: { opacity: 1, transform: "translateX(0%)" },
      delay: index * 300,
    })),
  );
  return (
    <PageWrapper disappearOnMobile={false}>
      <div className="space-y-4 > *">
        <h2 className="text-2xl font-bold">Welcome 歡迎</h2>
        <div className=" font-semibold border-b border-gray-300 border-dotted pb-4 lg:w-1/2">
          A simple, clean, responsive modern website built with Next.js and
          Tailwind CSS, connected to my custom .NET Core Web API and a
          self-managed PostgreSQL database on EC2.
          <br />
          <div className="flex mt-4 space-x-4 > *">
            {springs.map((props, index) => {
              const { Icon, href, color } = icons[index];
              return (
                <animated.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  style={props}
                  className={`inline-block w-10 h-10 transform transition duration-300 hover:rotate-180 ${color}`}
                >
                  <Icon className="w-10 h-10" />
                </animated.a>
              );
            })}
          </div>
        </div>
        <p className="font-normal">Welcome to my website.</p>
        <p className="font-normal">
          Feel free to look around and get know more&nbsp;
          <a
            href="/about"
            className="underline font-extrabold hover:text-primary"
          >
            about me
          </a>
          .
        </p>
        <p className="font-normal">
          Check out my &nbsp;
          <a
            href="/resume"
            className="underline font-extrabold hover:text-primary"
          >
            resume
          </a>
          , &nbsp;
          <a
            href="/blogs"
            className="underline font-extrabold hover:text-primary"
          >
            blogs
          </a>
          , or contact me. I like to make new friends!
        </p>
      </div>
    </PageWrapper>
  );
}
