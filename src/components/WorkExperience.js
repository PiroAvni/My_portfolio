import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'


const WorkExperience = () => {

    
  return (
    <>
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>

    <div className="my-64">
    <h2 className="font-bond text-8xl mb-18 w-full text-center ">
      Experience
    </h2>
    </div>
    </motion.div>

    <div className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  ">

        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
    </div>
    </>
  )
}

export default WorkExperience;