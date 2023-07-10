import React from 'react';
import { format } from 'date-fns';
import Head from 'next/head';

import { client } from "../../../sanity/lib/client";

import Article from '@/components/Article';
import Layout from '@/components/Layout';
import Content from '@/components/Content';
import AnimatedText from '@/components/AnimatedText';



const Post = ({ post }) => {

    console.log("blog", post)
    const date = format(new Date(post.publishedDate), 'dd MMM yyy');
    return (
        <>
        <Head>
        <title> Avni Piro | {post.meta_title} </title>
        <meta
          name="description"
          content="Welcome to my blog! Explore a collection of insightful articles on various topics including web development, programming, technology, and more. Stay updated with the latest trends, tips, and resources to enhance your skills and knowledge. Join the discussion and discover new ideas in the digital world. #webdevelopment #programming #technology #blog"
        />
        <meta
          name="keywords"
          content="web development, programming, technology, blog, articles, trends, tips, resources, react, software development"
        />
      </Head>
        <Layout className="pt-16 ">
        <Article backUrl="/blogs" className='text-dark mb-6'>
            
      <AnimatedText
            text={post.title}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
            <p className='text-dark'>{date} </p> 
            <p className='text-primary dark:text-primaryDark mb-4'>{post.readTime}</p>
            
            <Content body={post.body} />
        </Article>
        </Layout>
        </>
    );
}

export default Post;

export async function getStaticPaths() {
    const query = `*[_type == "post"] {
        slug {
            current
        }
    }`;

    const posts = await client.fetch(query);
    const paths = posts.map((post) => ({
        params: {
            slug: post.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params: { slug }}) {
    const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

    const post = await client.fetch(query);

    return {
        props: {
            post
        }
    }
}

  