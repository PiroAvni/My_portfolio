export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
     name:"name",
   title:"Name",
   type:"string", 
    },
    {
     name:'desc',
    title:"Description",
    type:"string" 
    },
    {
      name:"heroImage",
      title:"Image",
      type:"image",
      options:{
        hotspot:true,
      }
    }
    
   
  ],

  
}
