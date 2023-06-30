export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
      {
        name: "blogTitle",
        title: "BlogTitle",
        type: "string",
      },
      {
        name: "blogImage",
        title: "BlogImage",
        type: "image",
        options: {
  hotspot:true,
        }
      },
      {
        name:"linkToBlog",
        title: "LinkToBlog",
        type:"url",
      },
      {
        name: "dateCreated",
        title: "DateCreated",
        type: "date",
      },
      
      {
        name:"technologies",
        title: "Technologies",
        type:"array",
        of:[{type:"reference",to:{type:"skill"}}],
      },
      {
        name: "content",
        title: "Content",
        type: "text",
      },
      {
        name: "time",
        title: "Time",
        type: "text",
      },
     
    ],
  };
  