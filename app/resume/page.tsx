"use client";
import React, { useState } from "react";
import useScript from "../../components/hooks/useScript";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiFlutter,
  SiDjango,
  SiPostgresql,
  SiCelery,
  SiSelenium,
  SiSwift,
  SiKubernetes,
  SiMicrosoftazure,
  SiAmazonaws,
  SiAzuredevops,
  SiDocker,
  SiTerraform,
  SiDynamics365,
} from "react-icons/si";

// import { getUrl } from 'aws-amplify/storage';

const workExperience = [
  {
    company: "JAIX Logistics Software",
    location: "Adelaide, Australia",
    date: "2024/09 - Present",
    position: "Software Developer",
    tasks: [
      "Developed and implemented scalable Web APIs using ASP.NET Core",
      "Developed driver application using .NET MAUI with MVVM pattern",
      "Maintained warehouse smart scanning application using Xamarin Android",
      "Modified and optimized the WinForms UI to alignment with business requirements.",
      "Implemented logging with Serilog and Elasticsearch.",
      "Collaborated in an Agile team.",
      "Maintained and refactored legacy codebase ensuring alignment with current development standards",
    ],
  },
  {
    company: "Appcentric (jtwo solutions)",
    location: "Adelaide, Australia",
    date: "2022/01 - 2024/09",
    position: "Software Developer",
    tasks: [
      "Developed and Maintained Cloud migration web app with Django and React.",
      "Developed web application for SA Gov Agency with Django.",
      "Set up a pipeline for containerise application and deploying to AKS.",
      "Experienced and famliar with multiple cloud services.",
      "Templating the resources deployment with ARM templates and terraform.",
      "Integrate internal system synchronization with API.",
      "Integrate with Celery to be able to run asynchronous background tasks / corn jobs.",
      "Integrate Redis cache to improve querying performance with PostgreSQL.",
      "Prototyped mobile app using React Native and bridged native Swift UI views.",
    ],
  },
  {
    company: "CBRLife Media",
    location: "Canberra, Australia",
    date: "2021/07 - 2021/10",
    position: "Frontend Developer",
    tasks: [
      "Developing and maintained company main website by WordPress(https://www.cbrlife.com.au)",
      "Rebuilding the current mobile application by react native",
      "Ensured having user - friendly and responsive interface design",
      "Built consistence and reusable code base following with proper documentation and format",
      "Using Git to work collaboratively and waterfall method to follow project plan",
    ],
  },
];

const educations = [
  {
    school: "The Australian National University",
    location: "Canberra, Australia",
    date: "2020/02 - 2021/11",
    degree: "Master of Computing",
  },
  {
    school: "Portland State University",
    location: "Portland, United States",
    date: "2017/09 - 2019/06",
    degree: "Bachelor of Business Administration: Finance",
  },
];

const skills = [
  {
    category: "Frontend - WEB",
    items: [
      {
        title: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
      },
      {
        title: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        title: "Bootstrap",
        icon: SiBootstrap,
        color: "#7952B3",
      },
      {
        title: "Redux",
        icon: SiRedux,
        color: "#764ABC",
      },
    ],
  },
  {
    category: "Frontend - MOBILE",
    items: [
      {
        title: "React Native",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        title: "Flutter",
        icon: SiFlutter,
        color: "#02569B",
      },
      {
        title: "Swift UI",
        icon: SiSwift,
        color: "#FA7343",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        title: "Django",
        icon: SiDjango,
        color: "#092E20",
      },
      {
        title: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
      {
        title: "Celery",
        icon: SiCelery,
        color: "#37814A",
      },
      {
        title: "Selenium",
        icon: SiSelenium,
        color: "#43B02A",
      },
    ],
  },
  {
    category: "DevOps - (Others)",
    items: [
      {
        title: "Kubernetes",
        icon: SiKubernetes,
        color: "#326CE5",
      },
      {
        title: "Microsoft Azure",
        icon: SiMicrosoftazure,
        color: "#0078D4",
      },
      {
        title: "Amazon AWS",
        icon: SiAmazonaws,
        color: "#232F3E",
      },
      {
        title: "Azure DevOps",
        icon: SiAzuredevops,
        color: "#0078D7",
      },
      {
        title: "Docker",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        title: "Terraform",
        icon: SiTerraform,
        color: "#623CE4",
      },
      {
        title: "Dynamics 365 - Business Central",
        icon: SiDynamics365,
        color: "#002050",
      },
    ],
  },
];

function ResumePage() {
  useScript(`https://cdn.credly.com/assets/utilities/embed.js`);

  // const downloadResume = async () => {
  //     try {
  //         const getUrlResult = await getUrl({
  //             path: 'public/files/Resume.pdf',
  //             options: {
  //                 validateObjectExistence: false,  // Check if object exists before creating a URL
  //                 expiresIn: 20,// validity of the URL, in seconds. defaults to 900 (15 minutes) and maxes at 3600 (1 hour)
  //                 useAccelerateEndpoint: false, // Whether to use accelerate endpoint
  //             },
  //         });
  //         console.log(getUrlResult.url.toString());
  //         return getUrlResult.url.toString();
  //     }
  //     catch (error) {
  //         console.error('Error loading resume', error);
  //         return '';
  //     }
  // }

  return (
    <main className="flex flex-col items-center justify-between p-4 lg:p-16 text-white">
      <div className="w-full lg:px-16 lg:bg-white/30 rounded-lg shadow-lg">
        <div className="flex items-center justify-between py-4 mb-4 border-b border-gray-300 border-dotted">
          <h1 className="text-3xl font-bold">Resume</h1>
          <a
            target="_blank"
            href="https://yenwebsitebucket83ca8-dev.s3.ap-southeast-2.amazonaws.com/public/files/Resume.pdf"
            className="bg-amber-500/70 text-white font-bold py-2 px-2 lg:px-4 rounded-full shadow-lg duration-500 hover:bg-primary hover:shadow-2xl hover:scale-105 "
          >
            Download Resume
          </a>
        </div>

        <h2 className="text-xl font-bold">Work Experience</h2>
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="my-2 p-3 lg:p-6 bg-white/50 rounded-lg shadow-lg space-y-4 > *"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
              <h3 className="text-lg font-bold">{job.company}</h3>
              <p>{job.location}</p>
              <p>{job.date}</p>
            </div>
            <div className="font-bold">{job.position}</div>
            <ul className="break-words">
              {job.tasks.map((task, index) => (
                <li key={index}>- {task}</li>
              ))}
            </ul>
          </div>
        ))}
        <h2 className="text-xl font-bold">Education</h2>
        {educations.map((education, index) => (
          <div
            key={index}
            className="my-2 p-6 bg-white/50 rounded-lg shadow-lg space-y-4 > *"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
              <h3 className="text-lg font-bold">{education.school}</h3>
              <p>{education.location}</p>
              <p>{education.date}</p>
            </div>
            <div className="font-bold">{education.degree}</div>
          </div>
        ))}
        <h2 className="text-xl font-bold">Skills</h2>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="my-2 p-2 lg:p-6 bg-white/50 rounded-lg shadow-lg space-y-4 > *"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
              <h3 className="text-lg font-bold">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap">
              {skill.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1 mx-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mb-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                >
                  <item.icon color={item.color} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <h2 className="text-xl font-bold">Certificate</h2>
        <div
          data-iframe-width="300"
          data-iframe-height="300"
          data-share-badge-id="948aa351-269b-46d7-a63e-66c3e33f3ee9"
          data-share-badge-host="https://www.credly.com"
        />
      </div>
    </main>
  );
}

export default ResumePage;
