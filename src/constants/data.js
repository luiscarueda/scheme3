import { photo02 } from "./images";
import { photo03 } from "./images";

export const NAVBAR = [

  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#contact", label: "CONTACT" },      
];

export  const HEADER = {
    tag: 'Web Designer',
    title:'Hello my name is Jhon Smith',
    description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a erat tristique, vehicula magna nec, pharetra velit. Nunc tincidunt magna nec lacinia cursus. In hac habitasse platea dictumst. Vivamus non nisl arcu. Ut nulla velit, ultrices vel sapien vel, condimentum elementum est. Suspendisse dui mauris, luctus in suscipit vel, commodo.',   
  };

export const ABOUT = {  
    tag: 'Get To Know',
    title:'ABOUT ME',
    description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a erat tristique, vehicula magna nec, pharetra velit. Nunc tincidunt magna nec lacinia cursus. In hac habitasse platea dictumst. Vivamus non nisl arcu. Ut nulla velit, ultrices vel sapien vel, condimentum elementum est. Suspendisse dui mauris, luctus in suscipit vel, commodo.',
    photo  : photo02,
    photosmall : photo03,
  };

export  const SERVICES = {    
    title:'Our Services',
    description :'lorem ipsum jhijh',
    data : [      
        { id :1 , 
          title: 'HOLA' , 
          description:'lorem',    
        },
        { id :2 , 
          title: 'SERVICES' , 
          description:'lorem2',
        },
        { id :3 , 
          title: 'CONTENT' , 
          description:'lorem3',         
        },
      ],
  }; 
 
export  const TESTIMONIALS = {    
    title:'TESTIMONIALS',
    description :'lorem5', 
    data : [
      { name: 'MAMA',opinion: 'OPINION ',  },
      { name: 'PAPA',opinion: 'titulo2',   },
      { name: 'PEPE  ', opinion: 'titulo3', },
      { name: 'HIJO  ', opinion: 'titulo3', },
   ],
  }; 

  export  const CONTACT = {
    title:'CONTACT ME',
    description :'Get in Touch',   
  };

  export  const HIREME = {
    title:'I Am Available',
    description :'FOR FREELANCER',   
  };


/*
  export  const FOOTER ={
    title : 'LUIS CARLOS',
    links : [
      { text : 'HOME', url:'#' },
      { text : 'ABOUT ME', url:'#about' },
      { text : 'EXPERIENCE', url:'#experience' },
      { text : 'SERVICES', url:'#services' },
      { text : 'TESTIMONIALS', url:'#testimonials' },
      { text : 'CONTACT', url:'#contact' },      
    ],
  };
 

  */

  