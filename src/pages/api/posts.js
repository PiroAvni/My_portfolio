// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { client } from "../../../sanity/lib/client";

// export default function post(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

// export async function loadData(start, end) {
//   const query = `{
//   'posts':  *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
//   "total": count(*[_type == "post"])
// }`;
//   const { posts, total } = await client.fetch(query);
// console.log(posts)
//   return {
//     posts,
//     total,
//   };
// }

import { client } from "../../../sanity/lib/client";

export default async function post(req, res) {
  try {
    const { start, end } = req.query; // Assuming you pass the 'start' and 'end' parameters in the request query

    // Call the 'loadData' function to fetch data from Sanity.io
    const { posts, total } = await loadData(start, end);

    // Send the fetched data as the API response
    res.status(200).json({ posts, total });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

export async function loadData(start, end) {
  const query = `{
    'posts': *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {
      _id,
      publishedDate,
      title,
      slug,
      description,
      image
    },
    "total": count(*[_type == "post"])
  }`;
  
  const { posts, total } = await client.fetch(query);
  console.log(posts);

  return {
    posts,
    total,
  };
}

