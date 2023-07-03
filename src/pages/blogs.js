import React, { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Blog1 from "../../public/images/articles/pagination component in reactjs.jpg";
import Blog2 from "../../public/images/articles/create modal component in react using react portals.png";
import Blog3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className=" z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Blog = ({ title, img, date, link }) => {
  return (
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0,transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
    
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4">
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeatureArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-light border border-solid border-dark dark:bg-dark dark:border-light  rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
    </li>
  );
};
const blogs = () => {
  return (
    <>
      <Head>
        <title> Avni Piro | Blog Page </title>
        <meta name="description" content="any description" />
      </Head>
      <main className=" w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Code. Create. Impact: Revolutionising the World, One Project at a Time"
            className="mb-16"
          />

          <ul className="grid grid-cols-2 gap-16">
            <FeatureArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={Blog1}
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
            <FeatureArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={Blog2}
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt 32 ">
            All Blogs
          </h2>

          <ul>
            <Blog
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Blog3}
              date="June 30 2023"
              link="/"
            />
            <Blog
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Blog3}
              date="June 30 2023"
              link="/"
            />
            <Blog
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Blog3}
              date="June 30 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default blogs;
