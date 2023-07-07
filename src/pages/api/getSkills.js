//Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { client } from "../../../sanity/lib/client";
// import { groq } from "next-sanity";

// export default async function getSkill(req, res) {
//   const query = groq`
//     *[_type == "skill"]{_id, image, title}
//   `;

//   try {
//      const skills = await client.fetch(query);
// console.log('Skills',skills)
// return res.status(200).json({ skills });

//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch skills" });
//   }
// }
import { client } from "../../../sanity/lib/client";
export async function fetchSkills() {
  const query = `{
  'skills':   *[_type == "skill"]{_id, image, title}
}`;
  const { skills } = await client.fetch(query);
// console.log('post',skills)
  return {
    skills
  };
}


