import React from 'react';
import cl from 'classnames';
import BlockContent from '@sanity/block-content-to-react';

import  config  from "../../sanity.config";



const Content = ({
    body
}) => {
  return (
    <div className="">
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