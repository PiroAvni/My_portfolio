import React from 'react';

import { PortableText } from '@portabletext/react'

import  config  from "../../sanity.config";


const Content = ({
    body
}) => {
  console.log("body",body)
  return (
    <div className=" prose xl:w-full md:w-full  dark:text-light">
        <PortableText
          value={body}
          imageOptions={{w: 1000, h: 750, fit: 'max'}}
          projectId={config.projectId}
          dataset={config.dataset}
          
        />
    </div>
  )
}

export default Content;