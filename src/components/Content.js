import React from 'react';

import BlockContent from '@sanity/block-content-to-react';

import  config  from "../../sanity.config";


const Content = ({
    body
}) => {
  // console.log("body",body)
  return (
    <div className="xl:w-full md:w-full flex items-center justify-center dark:text-light">
        <BlockContent
          blocks={body}
          imageOptions={{w: 1000, h: 750, fit: 'max'}}
          projectId={config.projectId}
          dataset={config.dataset}
        />
    </div>
  )
}

export default Content;