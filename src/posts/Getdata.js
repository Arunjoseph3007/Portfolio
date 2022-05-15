import shareMe from '../assets/shareMe.PNG'
import celloAPI from '../assets/celloAPI.PNG';
import celloSVG from '../assets/celloSVG.PNG';

export const AllPosts = [
  {
    id: 0,
    title: "My First Blog",
    date: "29/01/2022",
    description: "Just fidling atound with and getting things to work",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80",
    filename: "firstPost",
    tags: ["CSS", "Hardwork", "Dedication"],
  },
  {
    id: 1,
    title: "My testt Blog",
    date: "29/01/2022",
    description: "Just fidling atound with and made things to work",
    image:
      "https://i.pinimg.com/originals/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5.jpg",
    filename: "testPost",
    tags: ["CSS", "Victory", "Dedication"],
  },
];

export const AllProjects = [
  {
    id: 0,
    title: "Cello SVG",
    link: "http://cello-svg.vercel.app",
    image: celloSVG,
    description: "An awesome Random SVG generating app with many features.",
    stack: ["ReactJS", "NextJS", "D3.js"],
  },
  {
    id: 1,
    title: "Share me",
    link: "http://shareme-three.vercel.app",
    image: shareMe,
    description:
      "A full featured fullstack social media application with all features like share, delete, like post, follow users and many more.",

    stack: [
      "ReactJS",
      "NextJS",
      "tailwind CSS",
      "MongoDB",
      "Express",
      "Cloudinary",
      "SocketIO",
      "NodeJS",
      "100ms",
    ],
  },
  {
    id: 2,
    title: "Cello APIs",
    link: "http://celloapis.vercel.app",
    image: celloAPI,
    description:
      "A web version of Postman (a service used for api testing). Includes all basic and advanced features. You can change body content, add headers, params, configure multiple requests, save sessions to local storage and a lot more.",
    stack: ["React", "NextJS", "tailwind CSS"],
  },
];
