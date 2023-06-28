import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "../components/AnimatedText";
import {LinkArrow} from "../components/icons";
import HireMe from "@/components/HireMe";


export default function Home() {
  return (
    <>
      <Head>
        <title>Turning Vision Into Reality</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Avni Piro"
                className="w-full h-auto"
              
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality: Where Code and Design Converge."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                Fueling Innovation through Passionate Software Development:
                Explore My Projects and Articles Showcasing React.js Expertise
                and Full-Stack Development Skills.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:avnipiro.dev@gmail.com" target={"_blank"}
                className="ml-4 text-xl font-medium capitalize text-dark underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
