import { client } from "../../../sanity/lib/client";

// export default function social(req, res) {
//     res.status(200).json({ name: "John Doe" });
//     console.log(res)
//   }
// export async function handler() {
//   const query = `{
//     'eduction': *[_type == "education"],
// }`;

//   const { eduction } = await client.fetch(query);
// //   res.status(200).json({ socials})
//   console.log("eduction", eduction)
//   return {
//     eduction,
//   };
// }

// import { groq } from "next-sanity";


// export default async function education(req, res) {
//   const query = groq`
//     *[_type == "education"]
//   `;

//   try {
//     const education = await client.fetch(query);

//     res.status(200).json({ education });
//     console.log('education',education)
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch skills" });
//   }
// }

export async function fetchEducation() {
  const query = `{
  'education': *[_type == "education"] | order(dateEnded desc)
}`;
  const { education } = await client.fetch(query);
console.log('post',education)
  return {
    education,
  };
}
