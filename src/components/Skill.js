import React from 'react'
import {motion} from 'framer-motion'

// type Props = {
//     directionLeft?: Boolean
// };

const Skill = ({directionLeft}) => {
  return (
    <div className='group relative flex cursor-pointer items-center justify-center'>
        <motion.img 
        initial={{
            x:directionLeft ? -200:200,
            opacity:0,
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        alt=""
        className='rounded-full border border-dark object-cover w-32 h-32 md:w-[6rem] md:h-[6rem] lg:w-28 lg:h-28 sm:w-[5rem] sm:h-[5rem] filter group-hover:grayscale transition duration-300 ease-in-out' 
        />
    </div>
  )
}
 
export default Skill