import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl"> {type} </h3>
        <div>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75">
            {time} |<span className="text-primary dark:text-primaryDark"> {place}</span> 
          </span>
          <p className="font-medium w-full">{info}</p>
        </div>
      </motion.div>
    </li>
  );
};

const Education = () => {
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
       className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
   
       <div className="my-64">
       <h2 className="font-bond text-8xl mb-32 w-full text-center ">
        Education
       </h2>
       </div>
       </motion.div>

      <div ref={ref} className="w-[75%] mx-auto relative">

       <motion.div 
       style={{scaleY: scrollYProgress}}
       className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light" />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
          type="Software Degrees"
          time="2023"
          place="Greenwich University"
          info="Software development tools"
          />
          <Details
          type="Software Degrees"
          time="2023"
          place="Greenwich University"
          info="Software development tools"
          
          
          />
            {/* <LiIcon reference={ref} /> */}
         
        </ul>
      </div>
    
    </>
  );
};

export default Education;
