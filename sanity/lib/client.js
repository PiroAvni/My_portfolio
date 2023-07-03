// import {  createImageUrlBuilder } from 'next-sanity';
import {createClient} from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn } from '../env';

// const { apiVersion, projectId, dataset, useCdn } = config;

export const client = createClient({

    projectId:projectId,
    dataset:dataset ,
    apiVersion:apiVersion,
    useCdn:useCdn,
  
});

