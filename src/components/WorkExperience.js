import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import LiIcon from './LiIcon';
import { urlForImage } from '../../sanity/lib/client'


const Experience = ({ type, start, place,end, info , id}) => {
  const ref = useRef(null);


  
  return (
    <li key={id}
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] sm:items-start"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs-text-lg"> {type} </h3>
        <div>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {start} | {end} | <span className="text-primary dark:text-primaryDark"> {place}</span> 
          </span>
          <p className="font-medium w-full md:text-sm ">{info}</p>
        </div>
      </motion.div>
    </li>
  );
};



const WorkExperience = ({experience}) => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
         {
                target: ref,
                offset:['start end' ,'center start'],
         }
  )

    
  return (
    <>
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center lg:h-[70vh] md:h-[60vh]  sm:h-[40vh]'>

    <div className="my-32 ">
    <h2 className="font-bond text-8xl mb-18 w-full text-center lg:text-6xl md:text-4xl">
      Experience
    </h2>
    </div>
    </motion.div>

    <div className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory sm:hidden  ">
    {experience?.map((job) => (
       
       <ExperienceCard 
       key={job._id}
       experience={job}
        />
     ))}
        
    </div>

      <div ref={ref} className="w-[75%] mx-auto relative hidden sm:flex sm:align-center lg:w-[90%] md:w-full">

       <motion.div 
       style={{scaleY: scrollYProgress}}
       className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light " />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-8 ">
       
        {experience?.map((job) => (
       
       <Experience 
        key={job._id}
        type={job.jobTitle}
        start={new Date(job.dateStarted).toLocaleString('en-GB', { year: 'numeric', month: 'long' })}
        end={new Date(job.dateEnded).toLocaleString('en-GB', { year: 'numeric', month: 'long' })}
        place={job.company}
       
        />
     ))}
          
         
            {/* <LiIcon reference={ref} /> */}
         
        </ul>
      </div>
    </>
  )
}

export default WorkExperience;