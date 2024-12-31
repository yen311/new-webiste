"use client";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "@/utils/config";
import useScript from "../../components/hooks/useScript";
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

interface SkillCategory {
  id: number;
  name: string;
  order: number;
  skills: Skill[];
}

interface Skill {
  id: number;
  title: string;
  icon: string;
  color: string;
  order: number;
  categoryId: number;
}

// Format date string to "YYYY-MM"
const formatDate = (dateString: string): string => {
  // Ensure the date is in ISO format (YYYY-MM-DD)
  const isoFormattedDate = dateString.replace(/\//g, "-"); // Replaces any slashes with dashes
  const date = new Date(isoFormattedDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 since getMonth() is 0-indexed
  return `${year}/${month}`;
};

function ResumePage() {
  // The state to store the fetched data
  const [workExperiences, setWorkExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Experience[]>([]);
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);

  // Fetch the data by using react-query
  const {
    isPending: isExperiencesPending,
    isError: isExperiencesError,
    data: experiencesData,
    error: experiencesError,
  } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/api/experiences`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });

  const {
    isPending: isSkillsPending,
    isError: isSkillsError,
    data: skillCategoriesData,
    error: skillsError,
  } = useQuery({
    queryKey: ["skillCategories"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/api/skill-categories`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });

  // Update the state when the data is fetched
  useEffect(() => {
    if (experiencesData) {
      const workExperiences = experiencesData
        .filter((item: Experience) => item.experienceItemType === "Work")
        .map((item: Experience) => ({
          ...item,
          startDate: formatDate(item.startDate),
          endDate: item.endDate ? formatDate(item.endDate) : null,
        }))
        .sort(
          (firstItem: Experience, secondItem: Experience) =>
            new Date(secondItem.startDate).getTime() -
            new Date(firstItem.startDate).getTime(),
        );

      const educationExperiences = experiencesData
        .filter((item: Experience) => item.experienceItemType === "Education")
        .map((item: Experience) => ({
          ...item,
          startDate: formatDate(item.startDate),
          endDate: item.endDate ? formatDate(item.endDate) : null,
        }))
        .sort(
          (firstItem: Experience, secondItem: Experience) =>
            new Date(secondItem.startDate).getTime() -
            new Date(firstItem.startDate).getTime(),
        );

      setWorkExperiences(workExperiences);
      setEducations(educationExperiences);
    }
  }, [experiencesData]);

  useEffect(() => {
    if (skillCategoriesData) {
      // Handle skill categories data here and update state
      setSkillCategories(
        skillCategoriesData.sort(
          (a: SkillCategory, b: SkillCategory) => a.order - b.order,
        ),
      ); // Assuming you have a setSkillCategories function
    }
  }, [skillCategoriesData]);

  // Fade in animation
  const fadeInAnimation = useSpring({
    opacity: isExperiencesPending ? 0 : 1,
    transform: isExperiencesPending ? "translateY(20px)" : "translateY(0px)",
    config: { duration: 500 },
  });

  useScript(
    `https://cdn.credly.com/assets/utilities/embed.js`,
    experiencesData,
  );

  return (
    <PageWrapper disappearOnMobile={true} noPadding={true}>
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
        if (isExperiencesPending || isSkillsPending) {
          return (
            <LoadingSpinner>
              Good things take time... almost there! 🚀
            </LoadingSpinner>
          );
        } else if (isExperiencesError || isSkillsError) {
          if (isSkillsError) {
            return <ErrorMessage error={skillsError} />;
          }
          return <ErrorMessage error={experiencesError} />;
        } else {
          return (
            <animated.div style={fadeInAnimation}>
              <h2 className="text-xl font-bold mb-2">Work Experience</h2>
              {workExperiences.map((job, index) => (
                <div key={index} className="mb-4 space-y-2 > * ml-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 items-center text-indigo-300 lg:text-indigo-900">
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
                  <div className="grid grid-cols-1 lg:grid-cols-3 items-center text-indigo-300 lg:text-indigo-900">
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
              {skillCategories.sort().map((skillCategory) => (
                <div
                  key={`skill-category-${skillCategory.id}`}
                  className="my-2 p-2 lg:p-6 bg-white/50 rounded-lg shadow-lg space-y-4 > *"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
                    <h3 className="text-lg font-bold">{skillCategory.name}</h3>
                  </div>
                  <div className="flex flex-wrap">
                    {skillCategory.skills
                      .sort((a: Skill, b: Skill) => a.order - b.order)
                      .map((skill) => (
                        <div
                          key={`skill-${skill.id}`}
                          className="flex items-center space-x-1 mx-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mb-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                        >
                          <IconRenderer icon={skill.icon} color={skill.color} />
                          <span>{skill.title}</span>
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
  );
}

export default ResumePage;
