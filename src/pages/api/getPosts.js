// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from "../../../sanity/lib/client";

export default async function getPosts(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).end();
  }

  const {posts, total, } = await loadData(start, end);

  res.status(200).json({
    posts,
    total,
  })
}

export async function loadData(start, end) {
  const query = `{
  'posts':  *[_type == "post"]{
    ...,
    technologies[]->
  } | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image, readTime,technologies},
  "total": count(*[_type == "post"])
}`;
  const { posts, total } = await client.fetch(query);
// console.log('post',posts)
  return {
    posts,
    total,
  };
}



