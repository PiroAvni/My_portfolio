import React from "react";
import { motion } from "framer-motion";
import { urlForImage } from '../../sanity/lib/client'

const ExperienceCard = ({ experience }) => {

  console.log(experience)

  return (
    <>
    
      <article
        className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[900px] md:w-[500px] xl:w-[600px] snap-center border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden shadow-2xl "
      >
        
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={urlForImage(experience.companyImage).url()}
          alt={experience.jobTitle}
        />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-dark ">{experience.jobTitle}</h4>
          <p className="font-bold text-2xl mt-1 text-primary dark:text-primaryDark"> @ {experience.company}</p>
          <div className="flex space-x-2 my-2">
            {/* <img className=" h-10 w-10 rounded-full" src={image} alt={experience.title} /> */}
            {/* Tech Used */}
            {/* Tech Used */}
            {/* Tech Used */}
            {/* Tech Used */}
          </div>
          <p className="uppercase py-5  text-dark/75 dark:text-light/75">
            Start Date: {experience.dateStarted} - Ended: {experience.dateEnded}
          </p>
          <ul className="list-disc space-y-4 ml-5 text-xl">
          {experience.points?.map((point) => (
  <li key={point.id}>{point}</li>
))}
          
           
          </ul>
        </div>
      </article>
    </>
  );
};

export default ExperienceCard;
