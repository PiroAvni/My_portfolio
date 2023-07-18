import { client } from "../../../sanity/lib/client";


// export default function project(req, res) {
//     res.status(200).json({ name: "John Doe" });
//     console.log(res)
//   }

// export async function handler() {
//   const query = `{
//     'experiences': *[_type == "experience"]{
//         ...,
//         technologies[]->
//     },
// }`;

//   const { experiences } = await client.fetch(query);

//   console.log("experiences", experiences)
//   return {
//     experiences,
//   };
// }
// import { groq } from "next-sanity";


// export default async function experience(req, res) {
//   const query = groq`
//     *[_type == "experience"]{
//         ...,
//         technologies[]->
//       }
//   `;

//   try {
//     const experiences = await client.fetch(query);

//     res.status(200).json({ experiences });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch skills" });
//   }
// }

export async function fetchExperience() {
  const query = `{
  'work': *[_type == "jobExperience"] | order(dateStarted desc){
    ...,
    technologies[]->
}
}`;
  const { work } = await client.fetch(query);
// console.log('WORK',work)
  return {
    work
  };
}