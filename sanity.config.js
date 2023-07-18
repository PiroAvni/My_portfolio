import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {schemaTypes} from "./sanity/myportfolio/schemas"
import { visionTool } from '@sanity/vision';



const config = defineConfig({
    name: 'default',
    title: 'My_Portfolio',
    projectId: 'a0xdx2my',
    dataset: 'portfolio',
    apiVersion:'2023-29-06',
  
    basePath: '/admin',
  
    plugins: [deskTool(), visionTool()],
  
    schema: {
      types: schemaTypes,
    },
  })
  export default config