
import {motion} from 'framer-motion'
import { urlForImage } from '../../sanity/lib/client'

// type Props = {
//     directionLeft?: Boolean
// };

const Skill = ({directionLeft,skill}) => {
  return (
    <div  className='group relative flex cursor-pointer items-center justify-center'>
        <motion.img 
        initial={{ opacity: 0, scale: 0.1}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration:2.5}}
       whileInView={{opacity:1}}
        src={urlForImage(skill?.image).url()}
        alt={skill.title}
        className='rounded-full border border-dark object-cover w-32 h-32 md:w-[6rem] md:h-[6rem] lg:w-28 lg:h-28 sm:w-[5rem] sm:h-[5rem] filter group-hover:grayscale transition duration-300 ease-in-out' 
        />
    </div>
  )
}
 
export default Skill