import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dimension,
  expel,
  kpmg,
  symantec,
  django,
  elasticSearch,
  flask,
  gcp,
  golang,
  python,
  postgres,
  mSpaceTheme,
  mLondon,
  mPride,

 
  stonksMovie,
  twentyFour,
  todayMLearned,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'tech',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'React.js Developer',
    icon: web,
  },
  {
    title: 'API Builder',
    icon: mobile,
  },
  {
    title: 'Frontend Developer',
    icon: backend,
  },
  {
    title: 'Process Creator',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Golang',
    icon: golang,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Elastic Search',
    icon: elasticSearch,
  },
  {
    name: 'Postgres',
    icon: postgres,
  },

  {
    name: 'GCP',
    icon: gcp,
  },

  {
    name: 'git',
    icon: git,
  },

  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
 
  {
    title: 'Web developer',
    company_name: 'Smart India Hackathon',
    icon: dimension,
    iconBg: '#E6DEDD',
    date: 'August 2022 - January 2023',
    points: [
      'Using JavaScript,React.js and Node.js. Created a website for Expanding Tourism in INDIA.',
    ],
  },
  {
    title: 'Open Source Contributor',
    company_name: 'Github',
    icon: expel,
    iconBg: '#E6DEDD',
    date: 'May 2020 - August 2022',
    points: [
      'Developed and implement UI features, using React.js. and Node.js, to increase the productivity of the Appwrite',
      
    ],
  },
 
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]
const personalPhotos = [
  // { name: 'Space M', icon: mSpaceTheme },
  { name: 'M London', icon: mLondon },
  // { name: 'M Pride', icon: mPride },
]


const projects = [
 
  {
    name: 'BrandPage',
    description: `The shoe brand's website captivates with sleek design and dynamic visuals, emphasizing the product's quality and style. Minimalist yet engaging, it offers easy navigation, a detailed product showcase, and customer reviews, complemented by a fashion blog for added value. Seamless social media integration encourages interaction, while a user-friendly shopping platform ensures a hassle-free purchase process, underscoring the brand's commitment to customer satisfaction.
      `,
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'node.js',
        color: 'pink-text-gradient',
      },
    ],
    image: stonksMovie,
    // source_code_link: 'https://github.com/MGhostHarley/movieSIte',
 // live_project_url: 'https://stonksmoviesite.vercel.app/',
},
 
  {
    name: 'Responsive Website',
    description:
      'Responsive websites are designed to provide an optimal viewing experience across a wide range of devices, from desktop computers to mobile phones. They employ fluid grids and flexible images, adjusting layout and content dynamically based on screen size. This approach enhances user experience, accessibility, and search engine rankings, accommodating the diverse needs of modern users..',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'superbase',
        color: 'green-text-gradient',
      },
      {
        name: 'vercel',
        color: 'pink-text-gradient',
      },
    ],
    image: todayMLearned,
    //source_code_link: 'https://github.com/MGhostHarley/today-i-learned',
 // live_project_url: 'https://today-m-learned.vercel.app/',
  },
]
const faqs = [
  {
    title: 'Where are you located?',
    answer:
      'I currently live in Bokaro Steel City. I am interested in remote, hybrid and in person roles.',
  },
  {
    title: 'What kind of role are you interested in?',
    answer: "I'm open to both Frontend and Backend Roles or As a Fullstack Role",
  },
  {
    title: 'What are your most used programming languages?',
    answer: 'I primarily write code in',
    list: ['Python', 'JavaScript', 'Golang'],
  },
  {
    title: 'What new tech are you exceited about?',
    answer:
      "I'm really exctied about Next.js and how React is exploring server side rendering. I think it has the potential to add huge benefits for front end development",
    list: ['Python', 'JavaScript', 'Golang'],
  },

  {
    title: "What's you're favorite color?",
    answer: 'Hopefully from this website, you can guess 😉',
  },
]

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  personalPhotos,
  faqs,
}
