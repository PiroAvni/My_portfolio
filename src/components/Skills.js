import React,{useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';



const Skills = ({skillsData }) => {


 console.log('avni', skillsData)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center lg:h-[80vh] md:h-[60vh]  sm:h-[40vh]"
      >
        <div className="my-64  lg:my-32">
          <h2 className="font-bond text-8xl mb-20 w-full text-center lg:text-6xl md:text-4xl lg:mb-10">
            Skills
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-4 gap-5">
      {skillsData?.map((skill) => (
       
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </>
  );
};
export default Skills



