import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/images/profile/avni.1.png";
import AnimatedText from "../components/AnimatedText";
import {LinkArrow} from "../components/icons";
import HireMe from "@/components/HireMe";
import {loadData} from "./api/getPosts";
import { useState, useEffect } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import TypewriterText from "@/components/CartoonImage";






export default function Home() {



  
  return (
    <>
      <Head>
        <title>Avni Piro | Turning Vision Into Reality</title>
        <meta name="description" content="full stack developer portfolio" />
        {/* <link rel="preload" href={profilePic} as="image" /> */}
      </Head>
      <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Avni Piro"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
             
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality: Where Code and Design Converge."
                className="!text-6xl !text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Fueling Innovation through Passionate Software Development:
                Explore My Projects and Articles Showcasing React.js Expertise
                and Full-Stack Development Skills.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base
                  
                  "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:avnipiro.dev@gmail.com" target={"_blank"}
                className="ml-4 text-xl font-medium capitalize text-dark underline dark:text-light
                md:text-base
                ">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <TypewriterText />
      </main>
    </>
  );
}
