import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { motion } from "framer-motion";

const about = () => {
  return (
    <>
      <Head>
        <title> Avni Piro | About Page </title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-flex flex-col items-center justify-center">
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
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
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
              <p className="my-4 font-medium">
                My goal is to work my way up as a software developer, to
                continue to learn new technologies and to improve and develop as
                a developer. My current goal is to perfect the programming
                languages I have learnt or learning and to continue to learn the
                back-end development. I have always had a passion for software
                development as stated above, the idea of contributing to a
                fast-moving industry where it will allow me to create, write
                code and potentially help improve experience or solve a problem
                be it aimed at company or personal level. I have attended a
                Firebrand boot camp where I have learnt the fundamentals of
                software development, understanding application lifecycle
                management, testing, Data Structure and algorithms and have
                learnt new fundamentals in three programming languages in C#,
                Python and SQL. I.T is constantly evolving, developing and
                adapting, so to keep up to date with technology as it develops
                it provides an opportunity of improving knowledge, constantly
                learning and career development. With 14 years’ experience in my
                previous job, I have worked my way up to a managerial position,
                always showing the desire to learn and achieved success and
                attention to detail where I saved the business £10k a year by
                recommending, moving and implementing to a paperless solution
                and making sure the business is in line with the current and any
                new legislation. I identified an opportunity for recommendation
                to implement improvements within the departments processes and
                procedures minimizing 60% of entry errors.
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
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8"
            >
              <motion.div
                // initial={{
                //   x: 400,
                //   opacity: 0,
                // }}
                // transition={{
                //   duration: 2.5,
                // }}
                // viewport={{ once: true }}
                // whileInView={{ opacity: 1, x: 0 }}
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark "
              />
              <motion.image
                src={profilePic}
                alt="Avni Piro"

                 initial={{
                  x: 400,
                  opacity: 0,
                }}
                transition={{
                  duration: 2.5,
                }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                className="w-full h-auto rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
              />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
