import WetherImg from '../images/Weather.jpeg'
import BlogImg from '../images/blogWebsite.jpeg'
import UrlsImg from '../images/urlsShortener.jpeg'
import TodoImag from '../images/TodoList.png'
import PasswordGenerator from '../images/passwordGenerator.png'
import ShopApp from '../images/ShopApp.png'




export const Bio = {
  name: "Surya Singh",
  roles: [
    "Full Stack Developer",
    "C++ Programmer",    
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/surya123-dot",
  resume:
     "https://drive.google.com/file/d/1LpqLKTCcOqU9_48aEFB0p4nC9ZlE_XCZ/view",
  linkedin: "https://www.linkedin.com/in/surya-singh-6b7323344/",  
  insta: "https://www.instagram.com/suryavashi_s07/",
 
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },      
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },      
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
        "https://tse1.mm.bing.net/th?id=OIP.C_fpD1wS-LugVknSn1VKcQHaDs&pid=Api&P=0&h=180}",
      },
      
      {
        name: "MongoDB",
        image:"https://images.ctfassets.net/23aumh6u8s0i/6wTbGkTM3EBoO6hytvOcXj/d0144f86227382219fd2c8f4f53499c6/illustration"
      },
      {
        name: "ejs",
        image: "https://i1.wp.com/www.eugeniojstigol.com/wp-content/uploads/2015/11/icona-LOGO-EJS-512px.png?ssl=1",
      },
      {
        name: "JWT",
        image: "https://1.bp.blogspot.com/-LK60jfD3joA/Xo_JR6z6ZkI/AAAAAAAAT2w/lYwgFCvdlVsMmsqu36KJMoKgSgRwCxCpgCLcBGAsYHQ/s1600/JWT%2BLogo.png",
      },
    ],
  },
 
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
     
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "",
      role: "Fullstack Developer",
    company: "Jan Elaaj",
    date: "Nov 2024",
    desc: `
Developed an operations dashboard with interactive analytics for partner and clinic verification, tracking engagement metrics. Implemented real-time push notifications using Firebase, Node.js, and scheduling tools to ensure timely delivery, enhancing user engagement and operational efficiency.`,
    skills: [
      "Node js",
      "Express",      
      "JavaScript",
      "React",
      "Material Ui",
      "SQL"  
    ],
    doc: ""
     },
  {
    id: 1,
    img: "",
     role: "Fullstack Developer",
    company: "Aminurmus Technology Pvt lmt",
    date: "Sept 2024",
    desc: "Led the development of Aminurmus’s official website using React, Node.js, and MongoDB. Built a learning platform with user login, course purchases, and job applications. Integrated PhonePe for payments and created an admin dashboard for user and data management.",
    skills: [
      "Node js",
      "Express",      
      "JavaScript",
      "React",
      "Material Ui",
      "Mongo Db"  
    ],
    doc: ""},
    {
      id: 2,
      img: "https://www.barraiser.com/wp-content/themes/astra-child/images/barraiser-logo.png",
      role: "Frontent Developer",
      company: "BarRaiser",
      date: "March 2024",
      desc:`Developed a Candidate Comparison Tool for interviewers to compare BGS reports using Autocomplete, Apollo GraphQL, and React. Created timestamped interview notes, round copying features, and an Upcoming Interviews page. Integrated Mixpanel for tracking user events and errors.",
    `,
         skills: [      
        "JavaScript",
        "React",
        "Material Ui",
        "Graph ql",
        "Appolo"
      ],
      doc: ""
    },
    {
      id: 3,
      img: "",
      role: "Web Developer Intern",
      company: "Zebblock Private Limit",
      date: "Jan 2023",
      desc:`Integrated Redux Toolkit into an ongoing project, improving state management with a centralized data store. This enhanced application stability by ensuring predictable state changes and providing a scalable architecture for better performance and maintainability. `,
         skills: [      
        "JavaScript",
        "React",
        "Material Ui",
        "Redux"
      ],
      doc: ""
    },
  
];

export const education = [
  {
    id: 0,
    img: "https://imgs.search.brave.com/DDkr3jxsxw59ismGS03Yq_OJ2VQPA0c0Kra9_dsD4vY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OS85OC9Eci5fQS5Q/LkouX0FiZHVsX0th/bGFtX1RlY2huaWNh/bF9Vbml2ZXJzaXR5/X2xvZ28ucG5nLzUx/MnB4LURyLl9BLlAu/Si5fQWJkdWxfS2Fs/YW1fVGVjaG5pY2Fs/X1VuaXZlcnNpdHlf/bG9nby5wbmc",
    school: "jss Academy of Technical Education",
    date: "Oct 2024 - Sep 2028",
    grade: "8 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at jss Academy of Technical Education. I have completed 4 semesters and have a CGPA of 8.2. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. ",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://play-lh.googleusercontent.com/NEIjAGq2QvBFzXu2o4r4UyDd-10piHplc4iXYyDbwUZQEU_a4jIi4D6Fp60P__qwNK4",
    school: "international hindu school",
    date: "Apr 2019 - Apr 2022",
    grade: "92%",
    desc: "I completed my class 12 high school education at international hindu school Uttar Pradesh where I studied Math.",
    degree: "CBSE(XII), Math",
  },
  
];

export const projects = [
  {
    id:0,
    title: "Wether",
    date: "Jun 2025 - Jul 2025",
    description:
      "In this website we can find our city weather details.You can also covert the details Unit",
    image:WetherImg,
    tags: [
      "Node.js",
      "ExpressJs",
      "Api call",
      "HTML",
      "CSS",
      "Bootstrap ",
      
    ],
    category: "Full Stack",
    github: "https://github.com/sury/weather",
    webapp: "https://weather-ho4l.onrender.com",
  },
  {
    id: 1,
    title: "Blog",
    date: "Apr 2025 - june 2025",
    description:
      "In this Blogify website we read some articles/blog.Feature added : Authorize User can read , create , update ,delete the blog (update and delete only his blog/article) and also comment on blog. Admin panel : Admin can read , create ,update and delete any blog also comment Admin can also delete the user."
   ,
    image:BlogImg,
    tags: ["multer","jwt","ejs", "MongoDb", "Node Js", "Express Js"],
    category: "Full Stack",
    github: "https://github.com/surya123-dot/BlogProject",
    webapp: "https://blogproject-surya123-dot.onrender.com",
   
  },
  {
    id: 2,
    title: "URLS Shortner",
    date: "Aug 2025 - Nov 2025",
    description:
      "URL SHORTENER website take a valid URL and return a shortened URL . When anyone visited  the shortened URL link than that redirect to the previously provided URL.	Also keep track of total visits/clicks on the URL. Feature added :User can see the previous generated shortened URL , number of time visited on that URL and also delete the previous shortened URL"
   ,
    image:UrlsImg,
    tags: ["multer","jwt","ejs", "MongoDb", "Node Js", "Express Js"],
    category: "Full Stack",
    github: "https://github.com/surya123-dot/UrlsShortener",
    webapp: "https://urlsshortener.onrender.com",
   
  },
  {
    id: 3,
    title: "Todo List",
    date: "Aug 2025 - Sep 2025",
    description:
      "In this you add edit,deleted and reverse your item. In this i also used local Storage."
   ,
    image:TodoImag,
    tags: ["react","boostrap"],
    category: "Frontent",
    github: "https://github.com/surya123-dot/TodoList",
    webapp: "https://todo-list-5r4z.onrender.com",
   
  },
  {
    id: 4,
    title: "Random Password Generator",
    date: "Oct 2025",
    description:
      "In this we can generate more secure password."
   ,
    image:PasswordGenerator,
    tags: ["react","boostrap"],
    category: "Frontent",
    github: "https://github.com/surya123-dot/Random_Password_Generator",
    webapp: "https://random-password-generate.onrender.com/",
   
  },
  {
    id: 5,
    title: "Mega-Mart Shop App",
    date: "Dec 2025",
    description:
      "This app only foucus of design. In this there is many store user can see the product"
   ,
    image:ShopApp,
    tags: ["react","tailwin css"],
    category: "Frontent",
    github: "https://github.com/surya123-dot/shop-app",
    webapp: "https://shop-app-a4d1.onrender.com/",
   
  },
  
];


