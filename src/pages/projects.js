import React, { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import {motion} from 'framer-motion'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import { fetchProjects } from "./api/getProjects";

const  LOAD_MORE_STEP =4


const FramerImage =motion(Image);

const FeatureProject = ({
  type,
  title,
  summary,
  img,
  technologies,
  link,
  github,
}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">

        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl  xs:-right-2 sm:h-[102%] xs:w-[100%] cs:rounded-[1.5rem]"/>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2  dark:hover:color-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <div className="flex items-center space-x-2 justify-center">
          <img className="h-10 w-10" src={technologies} alt={technologies} />
        </div>
        <p className="my-2 font-medium text-dark  dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, technologies, link, github }) => {
  return(
  <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-6 relative rounded-br-2xl xs:p-4">
    
    <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
  <Link
    href={link}
    target="_blank"
    className="w-full cursor-pointer overflow-hidden rounded-lg"
  >
    <FramerImage src={img} alt={title} className="w-full h-auto"
    whileHover={{scale:1.05}}
    transition={{duration:0.2}}
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
     />
  </Link>
  <div className="w-full flex flex-col items-start justify-between mt-4">
    <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">{type}</span>
    <Link
      href={link}
      target="_blank"
      className="hover:underline underline-offset-2"
    >
      <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
    </Link>
    <div className="flex items-center space-x-2 justify-center">
      <img className="h-10 w-10" src={technologies} alt={technologies} />
    </div>
    <p className="my-2 font-medium text-dark sm:text-sm ">{summary}</p>

    <div className="w-full mt-2 flex items-center justify-between">
      <Link href={github} target="_blank" className="w-10  md:w-8">
        <GithubIcon />
      </Link>
      <Link
        href={link}
        target="_blank"
        className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold md:text-base"
      >
        Visit
      </Link>
    </div>
  </div>
</article>
  )
};

const projects = ({initialProject}) => {

  const [project, setProject] = useState(initialProject);


useEffect(() => {
  setProject(initialProject)

}, [initialProject]);



  return (
    <>
      <Head>
        <title>Avni Piro | Project Page</title>
        <meta name="description" content="Explore a collection of my software development projects showcasing my skills and expertise. From web applications to mobile apps, discover innovative solutions developed using various technologies including HTML, CSS, JavaScript, React, Node.js, and more. Gain insights into my coding practices, problem-solving approaches, and project outcomes. Get inspired and see how I leverage technology to create impactful software solutions. #softwaredevelopment #webdevelopment #mobileapps #coding #projects" />
  <meta name="keywords" content="software development, web development, mobile apps, coding, projects, HTML, CSS, JavaScript, React, Node.js, postgres, mongodb, restful api, api" />

      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Empowering the Future through Innovation!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{
               duration: 0.8,
               delay: 0.5,
               ease: [0, 0.71, 0.2, 1.01]}}

            className=" col-span-12">
              <FeatureProject
                title="Portfolio"
                img={project1}
                technologies={"technologies"}
                summary="Portfolio The slick desgin, beautifull app that  helps , the world and create a safe enviroment. "
                link="/"
                github="/"
                type="Featured Project"
              />
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{
               duration: 0.8,
               delay: 0.5,
               ease: [0, 0.71, 0.2, 1.01]}}
             className=" col-span-6 sm:col-span-12">
              
                <Project
            title="Portfolio"
            img={project1}
            technologies={"technologies"}
            summary="Portfolio The slick desgin"
            link="/"
            github="/"
            type="Featured Project"
            /></motion.div>

            <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{
               duration: 0.8,
               delay: 0.5,
               ease: [0, 0.71, 0.2, 1.01]}}
              className=" col-span-6 sm:col-span-12 "> <Project
            title="Portfolio"
            img={project1}
            technologies={"technologies"}
            summary="Portfolio The slick desgin"
            link="/"
            github="/"
            type="Featured Project"
            /></motion.div>

            <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{
               duration: 0.8,
               delay: 0.5,
               ease: [0, 0.71, 0.2, 1.01]}}
            className=" col-span-12"> <FeatureProject
                title="Portfolio"
                img={project1}
                technologies={"technologies"}
                summary="Portfolio The slick desgin"
                link="/"
                github="/"
                type="Featured Project"
              /></motion.div>

            <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{
               duration: 0.8,
               delay: 0.5,
               ease: [0, 0.71, 0.2, 1.01]}}
            className=" col-span-6 sm:col-span-12"> <Project
            title="Portfolio"
            img={project1}
            technologies={"technologies"}
            summary="Portfolio The slick desgin"
            link="/"
            github="/"
            type="Featured Project"
            /></motion.div>

            <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{
               duration: 0.8,
               delay: 0.5,
               ease: [0, 0.71, 0.2, 1.01]}}
            className=" col-span-6 sm:col-span-12"> <Project
            title="Portfolio"
            img={project1}
            technologies={"technologies"}
            summary="Portfolio The slick desgin"
            link="/"
            github="/"
            type="Featured Project"
            /></motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

export async function getServerSideProps() {
  const {project,total}= await fetchProjects(0,LOAD_MORE_STEP)

  return {
    props: {
      initialProject:project,
      total, 

    },
  }
}