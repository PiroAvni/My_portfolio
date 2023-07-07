// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";


export default async function social(req, res) {
  const query = groq`
    *[_type == "social"]
  `;

  try {
    const socials = await client.fetch(query);

    res.status(200).json({ socials });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skills" });
  }
}