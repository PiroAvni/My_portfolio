// import {  createImageUrlBuilder } from 'next-sanity';
import {createClient} from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId, useCdn } from '../env';

// const { apiVersion, projectId, dataset, useCdn } = config;

export const client = createClient({

    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion:"2023-06-29",
    useCdn:true,
  
});



const imageBuilder = createImageUrlBuilder({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
