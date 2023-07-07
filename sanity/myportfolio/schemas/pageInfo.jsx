const textEditorStyles = [
  { title: 'Paragraph', value: 'normal' },
  { title: 'Heading 1', value: 'h1' },
  { title: 'Heading 2', value: 'h2' },
  { title: 'Heading 3', value: 'h3' },
  { title: 'Bullet', value: 'bullet' },
  { title: 'Numbered', value: 'number' },
  { title: 'Quote', value: 'blockquote' },
];



export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "backgroundInformation",
      title: "BackgroundInformation",
      type: "string",
    },
    {
          title: 'Body content', 
          name: 'body',
          type: 'array',
          validation: Rule => Rule.required(),
          of: [
              {
                  type: 'block',
                  styles: textEditorStyles
              },
             
          ]
      },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name:"phoneNumber",
      title: "PhoneNumber",
      type:"string",
    },
    {
      name:"email",
      title: "Email",
      type:"string",
    },
    {
      name:"address",
      title: "Address",
      type:"string",
    },
    {
      name:"socials",
      title: "Socials",
      type:"array",
      of:[{type:"reference", to:{type:"social"}}]
    }
  ],
};
