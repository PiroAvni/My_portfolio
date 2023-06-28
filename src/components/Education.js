import { useRef } from 'react'
import { motion, useScroll }from 'framer-motion'
import LiIcon from './LiIcon'

const Education = () => {
//    const ref = useRef(null)
    return (
     <li className= "my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <div>
                
            </div>
     </li>
    );
  };

  export default Education