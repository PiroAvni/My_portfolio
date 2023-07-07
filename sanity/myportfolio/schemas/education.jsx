export default {
    name: "education",
    title: "Education",
    type: "document",
    fields: [
      {
        name: "subjectTitle",
        title: "SubjectTitle",
        type: "string",
      },
      {
        name: "certificationImage",
        title: "CertificationImage",
        type: "image",
        options: {
  hotspot:true,
        }
      },
      {
        name: "school",
        title: "School",
        type: "text",
      },
      {
        name: "dateStarted",
        title: "DateStarted",
        type: "date",
      },
      {
        name: "dateEnded",
        title: "DateEnded",
        type: "date",
      },
     
      {
        name:"technologies",
        title: "Technologies",
        type:"array",
        of:[{type:"reference",to:{type:"skill"}}],
      },
      {
        name:"points",
        title: "Points",
        type:"array",
        of:[{type:"string",}]
      },
     
    ],
  };