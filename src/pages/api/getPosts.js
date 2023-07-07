// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from "../../../sanity/lib/client";

export default function post(req, res) {
  res.status(200).json({ name: "John Doe" });

}

export async function loadData(start, end) {
  const query = `{
  'posts':  *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
  "total": count(*[_type == "post"])
}`;
  const { posts, total } = await client.fetch(query);
console.log('post',posts)
  return {
    posts,
    total,
  };
}



