import { client } from "../../../sanity/lib/client";


// export default function project(req, res) {
//     res.status(200).json({ name: "John Doe" });
//     console.log(res)
//   }

// export async function handler() {
//   const query = `{
//     'projects': *[_type == "project"]{
//         ...,
//         technologies[]->
//     },
// }`;

//   const { projects } = await client.fetch(query);

//   console.log("projects", projects)
//   return {
//     projects,
//   };
// }
import { groq } from "next-sanity";


export default async function project(req, res) {
  const query = groq`
  *[_type == "project"]{
    ...,
    technologies[]->
  }
  `;

  try {
    const projects = await client.fetch(query);

    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skills" });
  }
}