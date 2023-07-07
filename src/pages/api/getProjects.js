import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";


// export default async function project(req, res) {
//   const query = groq`
//   *[_type == "project"]{
//     ...,
//     technologies[]->
//   }
//   `;

//   try {
//     const projects = await client.fetch(query);

//     res.status(200).json({ projects });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch skills" });
//   }
// }
export async function fetchProjects(start, end) {
  const query = `{
  'project': *[_type == "project"]{
        ...,
        technologies[]->
      }| order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
  "total": count(*[_type == "project"])
}`;
    
  const {project, total } = await client.fetch(query);
// console.log('post',project)
  return {
    project,
    total

  };
}
