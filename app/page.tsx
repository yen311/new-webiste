
import {
  SiAwsamplify,
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 xs:p-0">
      <div className="w-full p-6 bg-white/30 rounded-lg text-white space-y-4 > *">
        <h2 className="text-2xl font-bold">Welcome 歡迎</h2>
        <div className=" font-semibold border-b border-gray-300 border-dotted w-1/2 pb-12">
          A simple, clean, responsive morden website built by Next.js with Tailwind CSS, and hosting on AWS amplify.
          <br />
          <div className="flex mt-4 space-x-4 > *">
            <a
              href="https://nextjs.org/"
              target="_blank"
            >
              <SiNextdotjs
                className="inline-block w-10 h-10 transform transition duration-300 flash hover:rotate-180 text-black"
              />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
            >
              <SiTailwindcss
                className="inline-block w-10 h-10 transform transition duration-300 flash hover:rotate-180 text-[#06B6D4]"
              />
            </a>
            <a
              href="https://docs.amplify.aws/nextjs/"
              target="_blank"
            >
              <SiAwsamplify
                className="inline-block w-10 h-10 transform transition duration-300 flash hover:rotate-180 text-[#FF9900]"
              />
            </a>
          </div>
        </div>
        <p className="font-normal">Welcome to my website.</p>
        <p className="font-normal">Feel free to look around and get know more&nbsp;
          <a href="/about" className="underline font-extrabold hover:text-primary">about me</a>.
        </p>
        <p className="font-normal">Check out my
          &nbsp;<a href="/resume" className="underline font-extrabold hover:text-primary">resume</a>,
          &nbsp;<a href="/blogs" className="underline font-extrabold hover:text-primary">blogs</a>,
          or contact me. I like to make new friends!
        </p>
      </div>
    </main>
  );
}
