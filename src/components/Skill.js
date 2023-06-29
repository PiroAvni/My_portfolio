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
        className='rounded-full border border-dark object-cover w-24 h-24  md:w-28 md:h-28 lg:w-32 lg:h-32 filter group-hover:grayscale transition duration-300 ease-in-out' 
        />
    </div>
  )
}

export default Skill