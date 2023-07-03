import { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { motion } from "framer-motion";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const about = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);
  return (
    <>
      <Head>
        <title> Avni Piro | About Page </title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion, Creativity and Innovation"
            className="mb-16 text-6xl"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
              className="col-span-4 flex flex-col items-start justify-start"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className=" font-medium">
                Programming has always been a passion and a hobby since I could
                remember. I would pick up programming books from the library and
                study them as a kid, playing video games and having my first PC
                at the age of 12. I was amazed at how it all worked. So back in
                2006 I graduated from university in BEng where I studied
                Computer System and Software Engineering, however, I was never
                able to follow the path into the industry due to personal
                commitments. In the last few months, I have reignited that
                passion again and have since studied and completed courses on
                HTML, CSS and I am currently in the middle of studying frontend
                technologies JavaScript and react.js. I have gained
                certification in MTA 98-361 Software Development Fundamentals,
                AZ-900 Microsoft Azure Fundamentals whilst learning C# and
                Python. I am very active on Github, I have deployed small
                projects (Portfolio) in JavaScript and python as well as
                uploading code snippets in (JavaScript, Python and C#) also
                showing my progress on new technologies that I am learning. I
                plan to continue to learn new technologies and to upload more
                projects to continue my development and practice to further
                improve my knowledge and skills.
              </p>
              <p className=" font-medium">
                I believe myself to be hard working, trustworthy, loyal,
                reliable and forward thinking. I work well off my own initiative
                or as a team member. I believe I am good at man management; I
                work well under pressure and can always perform to time scale
                and target. The 20 years’ experience gained from high level
                education plus working for 14 years for a renowned company, I
                have developed valuable skills in problem solving i.e assisting
                in implementing new systems and procedures and while identifying
                current and future problems inline to UK legislations. Data
                Analytics, i.e help and provide raw data, make business
                decisions to help the business in relation to overhead costs and
                budget reports etc. Attention to Detail i.e. working with
                external and internal departments, making sure the data is
                correct and strong internal controls and procedures are in
                place.
              </p>

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
              dark:bg-dark dark:border-light

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
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark  dark:bg-light"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-auto rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
              >
                <Image
                  src={profilePic}
                  alt="Avni Piro"
                  className="w-full h-auto rounded-2xl"
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>
            </motion.div>
          </div>
          <Skills />
          <WorkExperience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
