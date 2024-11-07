import React from "react";
import Image from "../public/Yen.jpg";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function footer() {
  return (
    <footer className="flex flex-col justify-around items-center p-4 lg:p-8 mx-auto w-9/12 border-t border-gray-300 text-stone-200">
      <div className="flex flex-1 flex-col justify-between items-center mb-4 space-y-2 > *">
        <img
          className="bg-gray-500 rounded-full w-40 h-40"
          src={Image.src}
          alt="404"
        />
        <p className="font-bold text-opacity-80 text-3xl">Yen Kuo</p>
        <a
          className="font-semibold text-opacity-80 text-xs hover:text-stone-500"
          href="mailto:kuoyen5@gmail.com"
          target="_blank"
        >
          kuoyen5@gmail.com
        </a>
        <div className="flex flex-1 justify-between items-center space-x-2 > *">
          <a href="https://github.com/yen311" target="_blank">
            <FaGithub className="hover:text-stone-500 w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100001234828807"
            target="_blank"
          >
            <FaFacebook className="hover:text-stone-500 w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/yen-kuo/" target="_blank">
            <FaLinkedin className="hover:text-stone-500 w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/yen__0311/" target="_blank">
            <FaInstagram className="hover:text-stone-500 w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="mb-4">
          <span className="font-bold">Hello, I'm Yen</span> — a passionate
          full-stack software developer based in Adelaide, currently focusing
          primarily on .NET technologies with a love for React. My expertise
          spans building robust web applications, cloud solutions, and expanding
          my knowledge in mobile app development. <br />
          <br />
          As an alumnus of both the Australian National University and Portland
          State University, I've built a solid foundation in software
          development. In 2024, I'm eager to deepen my knowledge in .NET,
          specifically ASP.NET for web APIs and MAUI for mobile applications,
          while staying up to date with the latest technologies as well.
        </p>
      </div>
      <div className="flex-1 mt-2 text-xs text-gray-300">
        HandCrafted by Yen Kuo © 2024
      </div>
    </footer>
  );
}

export default footer;
