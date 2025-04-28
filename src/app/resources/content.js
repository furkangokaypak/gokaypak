import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Furkan Gökay",
  lastName: "PAK",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Developer",

  email: "furkangokaypak26@outlook.com",
  location: "Turkey", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "German", "Turkish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/furkangokaypak",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://tr.linkedin.com/in/furkan-g%C3%B6kay-pak-502279322",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Imagination to implementation: fullstack solutions</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">FindTeamMate.com</strong>
      </>
    ),
    href: "www.findteammate.com",
  },
  subline: (
    <>
      I'm Gökay, a Full Stack Developer.
      <br />I build my own projects using the latest and most advanced
      technologies.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Gökay is a passionate fullstack developer who excels at creating
        innovative projects. Based in Europe, he collaborates with companies
        across the continent while also developing his own independent
        solutions. As a developer from Turkey, his technical expertise allows
        him to contribute to diverse projects, bringing fresh perspectives and
        cutting-edge approaches to every endeavor. He specializes in delivering
        complete technology solutions and continues to push boundaries with his
        forward-thinking development work.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Eskisehir Technical University",
        description: (
          <>Electric Power Generation, Transmission, and Distribution</>
        ),
      },
      {
        name: "Anadolu University",
        description: <>Studied programming at Anadolu University.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Hosting",
        description: (
          <>Able to prototype in VPS and deploy with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/hostinger.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Databases",
        description: <>Building complex applications with databases.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/databases.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  certification: {
    display: true, // set to false to hide this section
    title: "Certifications",
    skills: [
      {
        title: "The Complete Full-Stack Web Development Bootcamp",
        description: <>Advanced web development education.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/certifications/fullstack.jpg",
            alt: "Certificate image",
            width: 16,
            height: 12,
          },
        ],
      },
      {
        title: "Django Web Applications",
        description: <>Building backend apps with Django.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/django.png",
            alt: "Project image",
            width: 18,
            height: 13,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
