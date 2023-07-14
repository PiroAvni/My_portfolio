import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, endDate}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col  justify-between md:w-[80%]"
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
        
            {time} | {endDate} | <span className="text-primary dark:text-primaryDark"> {place}</span> 
          </span>
          <p className="font-medium w-full md:text-sm ">{info}</p>
        </div>
      </motion.div>
    </li>
  );
};

const Education = ({educationData}) => {
       const ref = useRef(null)
       const {scrollYProgress} = useScroll(
              {
                     target: ref,
                     offset:['start end' ,'center start'],
              }
       )
       const options = { month: 'long', year: 'numeric' };
  return (
<>
       <motion.div
       initial={{opacity: 0}}
       whileInView={{opacity: 1}}
       transition={{duration:1.5}}
       className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center lg:h-[70vh] md:h-[60vh] sm:h-[40vh]'>
   
       <div className="my-26">
       <h2 className="font-bond text-8xl mb-18 w-full text-center lg:text-6xl md:text-4xl lg:mb-10">
        Education
       </h2>
       </div>
       </motion.div>

      <div ref={ref} className="w-[80%] mx-auto relative lg:w-[90%] md:w-full">

       <motion.div 
       style={{scaleY: scrollYProgress}}
       className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light " />

        <ul className="w-full flex flex-col items-start justify-between ml-6 xs:ml-8">
        {educationData?.map((education) => (
       
       <Details key={education._id} 
       type={education.subjectTitle}
       time={new Date(education.dateStarted).toLocaleString('en-GB', { year: 'numeric', month: 'long' })}
       endDate = {new Date(education.dateEnded).toLocaleString('en-GB', { year: 'numeric', month: 'long' })}
       place= {`@${education.school}`}
       info={education.points}
       
      />
     ))}
         
            {/* <LiIcon reference={ref} /> */}
         
        </ul>
      </div>
    
    </>
  );
};

export default Education;
