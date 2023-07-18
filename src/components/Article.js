import React from 'react';
import Link from 'next/link';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";



const Article = ({
    children,
    backUrl
}) => {
  return (
    <article className="relative">
      <Link href={backUrl} className="flex flex-row  text-dark dark:text-light mb-10">
       
          <BsFillArrowLeftCircleFill size="1.7rem" className='' /> 
          <p className="font-semibold ml-3 text-lg text-dark dark:text-light">Back to Blogs</p>
        
      </Link>
      <div className="">
        {children}
      </div>
    </article>
  )
}

export default Article;