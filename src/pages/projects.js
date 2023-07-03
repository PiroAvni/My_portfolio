import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import {motion} from 'framer-motion'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";



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
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl">

        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl"/>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2  dark:hover:color-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light">{title}</h2>
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
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold"
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
  <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-6 relative rounded-br-2xl">
    <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl"/>
  <Link
    href={link}
    target="_blank"
    className="w-full cursor-pointer overflow-hidden rounded-lg"
  >
    <FramerImage src={img} alt={title} className="w-full h-auto"
    whileHover={{scale:1.05}}
    transition={{duration:0.2}} />
  </Link>
  <div className="w-full flex flex-col items-start justify-between mt-4">
    <span className="text-primary dark:text-primaryDark font-medium text-xl ">{type}</span>
    <Link
      href={link}
      target="_blank"
      className="hover:underline underline-offset-2"
    >
      <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
    </Link>
    <div className="flex items-center space-x-2 justify-center">
      <img className="h-10 w-10" src={technologies} alt={technologies} />
    </div>
    <p className="my-2 font-medium text-dark ">{summary}</p>

    <div className="w-full mt-2 flex items-center justify-between">
      <Link href={github} target="_blank" className="w-10">
        <GithubIcon />
      </Link>
      <Link
        href={link}
        target="_blank"
        className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
      >
        Visit
      </Link>
    </div>
  </div>
</article>
  )
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Avni Piro | Project Page</title>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Empowering the Future through Innovation!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
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
                summary="Portfolio The slick desgin"
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
             className=" col-span-6">
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
              className=" col-span-6"> <Project
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
            className=" col-span-6"> <Project
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
            className=" col-span-6"> <Project
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
