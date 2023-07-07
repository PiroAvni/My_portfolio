// import { client } from "../../../sanity/lib/client";


// export default function pageInfo(req, res) {
//     res.status(200).json({ name: "John Doe" });
//     console.log(res)
//   }

// export async function handler() {
//   const query = `{
//     'pageInfo': *[_type == "pageInfo"][0]
// }`;

//   const { pageInfo } = await client.fetch(query);

//   console.log("pageInfo", pageInfo)
//   return {
//     pageInfo,
//   };
// }

// import { groq } from "next-sanity";


// export default async function getPageInfo(req, res) {
//   const query = groq`
//     *[_type == "pageInfo"]
//   `;

//   try {
//     const pageInfo = await client.fetch(query);

//     res.status(200).json({ pageInfo });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch skills" });
//   }
// }

import { client } from "../../../sanity/lib/client";
export async function fetchPageInfo() {
  const query = `{
  'getPageInfo':   *[_type == "pageInfo"][0]{_id, name,desc, backgroundInformation, body, phoneNumber,phoneNumber,profilePic,heroImage}
}`;
  const { getPageInfo } = await client.fetch(query);
console.log('post',getPageInfo)
  return {
    getPageInfo
  };
}