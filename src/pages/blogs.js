import React, { useRef} from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Button from "@/components/Button";
import { loadData } from "./api/getPosts";
import { urlForImage } from "../../sanity/lib/client";

// const FramerImage = motion(Image);

const LOAD_MORE_STEP = 4;

const MovingImage = ({ title, img, slug}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
console.log('slug', slug)
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
    href={`/blog/${encodeURIComponent(slug.current)}`}
      // target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <motion.img
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        ref={imgRef}
        src={urlForImage(img).url()}
        alt={title}
        // width="100"
        // height="100"
        // priority="true" 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        className=" z-10 w-96 h-auto hidden absolute rounded-lg  md:!hidden"
      />
    </Link>
  );
};

const Blog = ({ article, index }) => {
  // console.log("blog", article);
  return (
    <motion.li
    key={index}
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImage title={article.title} img={article.image} slug={article.slug} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {article.readTime}
      </span>
    </motion.li>
  );
};

const FeatureArticle = ({ article}) => {

  console.log("Article", article);
  return (
    <li key ={article.slug} className=" relative col-span-1 w-full p-4 bg-light border border-solid border-dark dark:bg-dark dark:border-light  rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={`/blog/${encodeURIComponent(article.slug.current)}`}
        // target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <motion.img
          src={urlForImage(article.image).url()}
          alt={article.title}
          // width="100"
          // height="100"
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
       
        />
      </Link>
      <Link  href={`/blog/${encodeURIComponent(article.slug.current)}`}
      //  target="_blank"
       >
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {article.title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{article.description}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {article.readTime}
      </span>
    </li>
  );
};
const blogs = ({ initialPost,total }) => {
  const [articles, setArticles] = React.useState(initialPost);
  const [loadedAmount, setLoadedAmount] = React.useState(LOAD_MORE_STEP);
  const [loading, setLoading] = React.useState(false);

  const showLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `/api/getPosts?start=${loadedAmount}&end=${
          loadedAmount + LOAD_MORE_STEP
        }`
      );
      const data = await response.json();

      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setArticles([...articles, ...data.posts]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title> Avni Piro | Blog Page </title>
        <meta
          name="description"
          content="Welcome to my blog! Explore a collection of insightful articles on various topics including web development, programming, technology, and more. Stay updated with the latest trends, tips, and resources to enhance your skills and knowledge. Join the discussion and discover new ideas in the digital world. #webdevelopment #programming #technology #blog"
        />
        <meta
          name="keywords"
          content="web development, programming, technology, blog, articles, trends, tips, resources, react, software development"
        />
      </Head>
      <TransitionEffect />
      <main className=" w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Code. Create. Impact: Revolutionising the World, One Project at a Time"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            {articles?.map((article, index) => {
              if (index < 2) {
                return <FeatureArticle key={index} article={article} />;
              }
              return null; // Don't render anything for the first two articles
            })}
          </ul>

          {articles.length > 2 && (
            <>
              <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                All Blogs
              </h2>
              <ul>
                {articles.slice(2).map((article,index) => (
                  <Blog key={index} article={article} />
                ))}
              </ul>
            </>
          )}

          {showLoadButton && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
              }}
            >
              <Button disabled={loading} onClick={getMorePosts}>
                Load more posts...
              </Button>
            </div>
          )}
        </Layout>
      </main>
    </>
  );
};

export default blogs;

export async function getServerSideProps() {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);

  return {
    props: {
      initialPost: posts,
      total,
    },
  };
}
