"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "@/utils/config";
import useScript from "../../components/hooks/useScript";
import * as ReactIcon from "react-icons/si";
import PageWrapper from "@/components/PageWrapper";
import LoadingSpinner from "@/components/LoadingSpinner";
import IconRenderer from "@/components/IconRenderer";
import ErrorMessage from "@/components/ErrorMessage";

interface ExperienceItemDetail {
  id: number;
  order: number;
  description: string;
  experienceItemId: number;
}

interface Experience {
  id: number;
  title: string;
  city: string;
  country: string;
  position: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  experienceItemType: string;
  experienceItemDetails: ExperienceItemDetail[];
}

const skills = [
  {
    category: "Frontend - WEB",
    items: [
      {
        title: "React",
        icon: "SiReact",
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        icon: "SiNextdotjs",
        color: "#000000",
      },
      {
        title: "Tailwind CSS",
        icon: "SiTailwindcss",
        color: "#06B6D4",
      },
      {
        title: "Bootstrap",
        icon: "SiBootstrap",
        color: "#7952B3",
      },
      {
        title: "Redux",
        icon: "SiRedux",
        color: "#764ABC",
      },
    ],
  },
  {
    category: "Frontend - MOBILE",
    items: [
      {
        title: "React Native",
        icon: "SiReact",
        color: "#61DAFB",
      },
      {
        title: "Flutter",
        icon: "SiFlutter",
        color: "#02569B",
      },
      {
        title: "Swift UI",
        icon: "SiSwift",
        color: "#FA7343",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        title: "Django",
        icon: "SiDjango",
        color: "#092E20",
      },
      {
        title: "PostgreSQL",
        icon: "SiPostgresql",
        color: "#336791",
      },
      {
        title: "Celery",
        icon: "SiCelery",
        color: "#37814A",
      },
      {
        title: "Selenium",
        icon: "SiSelenium",
        color: "#43B02A",
      },
    ],
  },
  {
    category: "DevOps - (Others)",
    items: [
      {
        title: "Kubernetes",
        icon: "SiKubernetes",
        color: "#326CE5",
      },
      {
        title: "Microsoft Azure",
        icon: "SiMicrosoftazure",
        color: "#0078D4",
      },
      {
        title: "Amazon AWS",
        icon: "SiAmazonaws",
        color: "#232F3E",
      },
      {
        title: "Azure DevOps",
        icon: "SiAzuredevops",
        color: "#0078D7",
      },
      {
        title: "Docker",
        icon: "SiDocker",
        color: "#2496ED",
      },
      {
        title: "Terraform",
        icon: "SiTerraform",
        color: "#623CE4",
      },
      {
        title: "Dynamics 365 - Business Central",
        icon: "SiDynamics365",
        color: "#002050",
      },
    ],
  },
];

// Format date string to "YYYY-MM"
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 since getMonth() is 0-indexed
  return `${year}/${month}`;
};

function ResumePage() {
  // The state to store the fetched data
  const [workExperience, setWorkExperience] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Experience[]>([]);

  // Fetch the data by using react-query
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/api/experiences`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const workExperiences = data
        .filter((item: Experience) => item.experienceItemType === "Work")
        .map((item: Experience) => ({
          ...item,
          startDate: formatDate(item.startDate),
          endDate: item.endDate ? formatDate(item.endDate) : null,
        }))
        .sort(
          (fristItem: Experience, secondItem: Experience) =>
            new Date(secondItem.startDate).getTime() -
            new Date(fristItem.startDate).getTime(),
        );

      const educationExperiences = data
        .filter((item: Experience) => item.experienceItemType === "Education")
        .map((item: Experience) => ({
          ...item,
          startDate: formatDate(item.startDate),
          endDate: item.endDate ? formatDate(item.endDate) : null,
        }))
        .sort(
          (fristItem: Experience, secondItem: Experience) =>
            new Date(secondItem.startDate).getTime() -
            new Date(fristItem.startDate).getTime(),
        );

      setWorkExperience(workExperiences);
      setEducations(educationExperiences);

      return data;
    },
  });

  // Fade in animation
  const fadeInAnimation = useSpring({
    opacity: isPending ? 0 : 1,
    transform: isPending ? "translateY(20px)" : "translateY(0px)",
    config: { duration: 500 },
  });

  useScript(`https://cdn.credly.com/assets/utilities/embed.js`, data);

  return (
    <>
      <PageWrapper disappearOnMobile={true}>
        <div className="flex items-center justify-between py-4 mb-4 border-b border-gray-300 border-dotted">
          <h1 className="text-3xl font-bold">Resume</h1>
          <a
            target="_blank"
            href="https://yenwebsitebucket83ca8-dev.s3.ap-southeast-2.amazonaws.com/public/files/Resume.pdf"
            className="bg-amber-500 text-white font-bold py-2 px-2 lg:px-4 rounded-full shadow-lg duration-500 hover:bg-primary hover:shadow-2xl hover:scale-105"
          >
            Download
          </a>
        </div>
        {(() => {
          if (isPending) {
            return (
              <LoadingSpinner>
                Good things take time... almost there! 🚀
              </LoadingSpinner>
            );
          } else if (isError) {
            const errorMessages = error?.message ?? "An error occurred";
            return <ErrorMessage error={error} />;
          } else {
            return (
              <animated.div style={fadeInAnimation}>
                <h2 className="text-xl font-bold mb-2">Work Experience</h2>
                {workExperience.map((job, index) => (
                  <div key={index} className="mb-4 space-y-2 > * ml-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center text-indigo-900">
                      <h3 className="text-lg font-bold">{job.title}</h3>
                      <p className="text-left lg:text-center">
                        {job.country}, {job.city}
                      </p>
                      <p className="text-left lg:text-right">
                        {formatDate(job.startDate)} -{" "}
                        {job.isCurrent
                          ? "Present"
                          : formatDate(job.endDate ?? "")}
                      </p>
                    </div>
                    <div className="font-bold">{job.position}</div>
                    <ul className="break-words">
                      {job.experienceItemDetails.map((detail, index) => (
                        <li key={index}>- {detail.description}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <h2 className="text-xl font-bold mb-2">Education</h2>
                {educations.map((education, index) => (
                  <div key={index} className="mb-4 space-y-2 > * ml-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center text-indigo-900">
                      <h3 className="text-lg font-bold">{education.title}</h3>
                      <p className="text-left lg:text-center">
                        {education.country}, {education.city}
                      </p>
                      <p className="text-left lg:text-right">
                        {formatDate(education.startDate)} -{" "}
                        {education.isCurrent
                          ? "Present"
                          : formatDate(education.endDate ?? "")}
                      </p>
                    </div>
                    <div className="font-bold">{education.position}</div>
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
                          <IconRenderer icon={item.icon} color={item.color} />
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
              </animated.div>
            );
          }
        })()}
      </PageWrapper>
    </>
  );
}

export default ResumePage;
