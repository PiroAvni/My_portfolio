import React,{ useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/4A0A0142.jpg";
import { motion } from "framer-motion";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { fetchSkills } from "@/pages/api/getSkills";
import { fetchPageInfo } from "@/pages/api/getPageInfo";
import { fetchEducation } from "./api/getEducation";
import { fetchExperience } from "./api/getExperience";

const About = ({ skillsData, pageInfoData, educationData, experience }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [skills, setSkills] = React.useState([]);
  const [aboutMe, setAboutMe] = React.useState([]);
  const [education, setEducation] = React.useState([]);
  const [work, setWork] = React.useState([]);

//  console.log("About", aboutMe)

  const {body}= aboutMe;
 


  useEffect(() => {
    setSkills(skillsData);
    setAboutMe(pageInfoData);
    setEducation(educationData);
    setWork(experience);
  }, [skillsData, pageInfoData, educationData, experience]);

  useEffect(() => {
    setImageLoaded(true);
  }, []);
  return (
    <>
      <Head>
        <title> Avni Piro | About Page </title>
        <meta
          name="description"
          content="Welcome to my web development journey! I'm Avni Piro, a dedicated web developer with a passion for crafting exceptional user experiences. With expertise in Next.js, Framer Motion, and sanity.io, I'm constantly pushing the boundaries of what's possible in the digital realm.

Throughout my career, I've honed my skills and stayed up-to-date with the latest technologies to deliver cutting-edge solutions. Now, I'm thrilled to be working on my new portfolio, where I'll showcase my proficiency in Next.js, a powerful framework that enables fast and optimized web development. I'll also leverage Framer Motion to add dynamic animations and interactivity, creating immersive experiences for visitors.

To ensure seamless content management and easy updates, I've integrated sanity.io as the backend CRM for my portfolio. This robust content management system empowers me to efficiently manage and organize my website's content, allowing me to focus on what I do best—building exceptional web solutions.

I'm excited to connect with fellow developers, designers, and collaborators who share my passion for innovation. Together, we can create impactful projects that leave a lasting impression. If you're looking to collaborate or have an exciting project in mind, feel free to reach out.

Follow my journey as I embark on new challenges, explore emerging technologies, and continuously refine my skills. Stay tuned for updates on my portfolio and web development insights. Let's connect and create something extraordinary.

#webdevelopment #portfolio #Nextjs #FramerMotion #sanityio #webdeveloper"
        />

        <meta
          name="keywords"
          content="web development, programming, technology, blog, articles, trends, tips, resources, react, software development"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Passion, Creativity and Innovation"
            className="mb-16 text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8  ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
              className="col-span-4 flex flex-col items-start justify-start lg:order-2 lg:col-span-8 "
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                About Me
              </h2>
              {body &&
        body.map((block, blockIndex) => (
          <div key={blockIndex}>
            {block.children &&
              block.children.map((span, spanIndex) => (
                <p key={spanIndex}>{span.text}</p>
              ))}
          </div>
        ))}
     
           
            </motion.div>

            <motion.div
              //   initial={{
              //     x: 400,
              //     opacity: 0,
              //   }}
              //   transition={{
              //     duration: 2.5,
              //   }}
              //   whileInView={{ opacity: 1, x: 0 }}
              //   viewport={{ once: true }}
              className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
              dark:bg-dark dark:border-light  lg:flex lg:self-center lg:order-1 lg:col-span-8 

              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                transition={{
                  duration: 2.5,
                }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark  dark:bg-light "
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-auto rounded-2xl hover:scale-110 transition duration-300 ease-in-out lg:hover:scale-105 "
              >
                <Image
                  src= {profilePic}
                  alt="Avni Piro"
                  className="w-full h-auto rounded-2xl "
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>
            </motion.div>
          </div>
          <Skills skillsData={skills} />
          <WorkExperience experience={work} />
          <Education educationData={education} />
        </Layout>
      </main>
    </>
  );
};

export default About;

export async function getServerSideProps() {
  const { skills } = await fetchSkills();
  const { getPageInfo } = await fetchPageInfo();
  const { education } = await fetchEducation();
  const { work } = await fetchExperience();
  return {
    props: {
      skillsData: skills,
      pageInfoData: getPageInfo,
      educationData: education,
      experience: work,
    },
  };
}