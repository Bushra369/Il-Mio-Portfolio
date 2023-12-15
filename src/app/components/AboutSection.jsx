"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Tailwind CSS</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Firebase</li>
        <li>CLI</li>
        <li>GIT</li>
        <li>Jest</li>
        <li>Figma</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Front-End Bootcamp Re:Coded</li>
        <li> Fullstuck Bootcamp SEF Academy</li>

      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft office </li>
        <li> videography and Film editing </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about me"  />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Embarking on a digital odyssey, I am a versatile web developer and visionary leader, converging diverse skills into a harmonious symphony. 🚀 From crafting intricate handmade crochet art to sculpting seamless web experiences with HTML, CSS, and JavaScript, I navigate the digital realm with finesse. My mastery extends to React.js, Jest, Firebase, and the creative canvas of Figma, where innovation takes shape. 🎨 Drawing from a filmmaking background, I infuse cinematic flair to enhance user experiences. 🎬 With roots in chemistry, I ensure a methodical approach to functionality. 🧪 A linguist at heart, I embrace foreign languages with a growth mindset, swiftly adapting and learning. 🌍 This dynamic fusion of skills, along with a focus on UI/UX and leadership, underscores my commitment to continuous growth, crafting digital wonders that transcend the ordinary and exemplify the boundless possibilities of the web development landscape. 💻🌐🚀🎬
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;