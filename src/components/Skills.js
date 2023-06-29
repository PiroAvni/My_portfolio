import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
const Skills = () => {


  return (
<>

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>

    <div className="my-64">
    <h2 className="font-bond text-8xl mb-20 w-full text-center ">
     Skills
    </h2>

    <h3 className=' mt-2 uppercase tracking-[3px] text-dark/75 text-sm flex items-center justify-center' >
        Hover over a skill for current profieciency
    </h3>
    
    </div>
    </motion.div>

    <div className='grid grid-cols-4 gap-5'>
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    </div>
    </>
   
  )
}

export default Skills