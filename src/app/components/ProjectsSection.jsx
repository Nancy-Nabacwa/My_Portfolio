"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Wezesha a Case Study",
    description: "An end-to-end project built using React.js, Python, and Kotlin aimed to help farmers easily access their cooperative records and keep track of their financial transactions to build their creditworthiness.",
    image: "/images/projects/1.png",
    tag: ["All","Mobile"],
    gitUrl: "https://github.com/akirachix/Tech-Marvels-Informational.git",
    previewUrl: "https://appetize.io/app/b_l2p65plipuygoweb2sp3wdavey",
    
  },
  {
    id: 2,
    title: "Themis AI",
    description: "Platform designed to support the Kenyan judicial system. It provides real-time transcription, case briefs, and case matching, enabling judges to streamline court proceedings and reduce delays",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/akirachix/Taishi-Frontend",
    previewUrl: "https://themis-dashboard-one.vercel.app/",
  },
  {
    id: 3,
    title: "Swahili Pal",
    description: "SwahiliPal is designed to revolutionize the language learning experience by providing a comprehensive, interactive platform that combines structured translations with personalized vocabulary building. The app aims to create an engaging environment that fosters self-directed learning, allowing users like Kioko Kwame to take control of their educational journey.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "AkiraOil",
    description: "Design Inspiration for oil and gas company",
    image: "/images/projects/4.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Simple Todo list",
    description: "Boot camps can be tiring. This ia a simple to do list I made for myself to help me stay organised and ahead of my tasks life in a bootcamp.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nancy-Nabacwa/my-projects.git",
    previewUrl: "https://my-projects-green-nine.vercel.app/",
  },
  {
    id: 6,
    title: "Multimedia Project",
    description: "This is a website that documents how well I can work with different stakeholders. In this, you will find how well my team has taken time to note and write down all our multimedia projects.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nancy-Nabacwa/Code-Taishi.git",
    previewUrl: "https://code-taishi-rdc3-git-main-nancy-nabacwas-projects.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
