import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

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