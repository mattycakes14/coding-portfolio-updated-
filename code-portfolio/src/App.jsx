import "./App.css";
import "devicon/devicon.min.css";

import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import mainPicture from "./assets/computer.jpg";
// import secondPhoto from "./assets/secondphoto.jpg";
import WorkBox from "./WorkBox";
import Tool from "./Tool";

// work image imports
import cseed from "./assets/cseed.png";
import et from "./assets/et.jpg";
import web from "./assets/web.jpg";
import swecc from "./assets/swecc.png";
import cladlabs from "./assets/CladLabs.jpg";
import udsm from "./assets/UDSM.jpg";

function App() {
  // work experience hardcoded
  const workExperience = [
    {
      logo: cladlabs,
      title: "Software Intern @ Clad Labs",
      duration: "May 2025 - Present",
      desc: "Building a proxy that injects developer tool ads into AI coding assistants. Backed by Y Combinator (F25).",
    },
    {
      logo: et,
      title: "Lead Developer @ Eat Together",
      duration: "January 2025 - September 2025",
      desc: "Built a smart restaurant recommendation algorithm serving 500+ students. Matches users based on dietary restrictions, cuisine preferences, and group compatibility.",
    },
    {
      logo: udsm,
      title: "Web Dev @ UDSM",
      duration: "January 2026 - Present",
      desc: "Revamping the web app for a student-run free clinic serving Seattle's homeless population. Collaborating with leadership to amplify their mission for healthcare equity.",
    },
    {
      logo: web,
      title: "Developer @ Web Impact",
      duration: "January 2025 - June 2025",
      desc: "Developed a dynamic 'Meet Our Board' page for iMuslims, an on-campus organization. Focused on responsive design and accessibility.",
    },
    {
      logo: cseed,
      title: "Builder @ CSEED BuildSpace Cohort",
      duration: "September 2024 - November 2024",
      desc: "Prototyped and pitched a marketplace connecting UW students with freelance barbers and artists.",
    },
    {
      logo: swecc,
      title: "Marketing Officer @ SWECC",
      duration: "February 2025 - June 2025",
      desc: "Created and filmed promotional content to make tech more welcoming. Grew meeting attendance by highlighting the community and removing intimidation barriers.",
    },
  ];

  // tools
  const technologies = [
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "CSS", icon: "devicon-css3-plain" },
    { name: "SQL", icon: "devicon-azuresqldatabase-plain" },
    { name: "Go", icon: "devicon-go-original-wordmark" },
    { name: "Swift", icon: "devicon-swift-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "React Native", icon: "devicon-react-original" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "Flask", icon: "devicon-flask-original" },
    { name: "FastAPI", icon: "devicon-fastapi-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Express.js", icon: "devicon-express-original" },
    { name: "Selenium", icon: "devicon-selenium-original" },
    { name: "Expo", icon: "devicon-react-original" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
    { name: "BeautifulSoup", icon: "devicon-python-plain" },
    { name: "LangChain", icon: "devicon-python-plain" },
    { name: "NumPy", icon: "devicon-numpy-original" },
    { name: "Pandas", icon: "devicon-pandas-original" },
    { name: "TensorFlow", icon: "devicon-tensorflow-original" },
    { name: "PyTorch", icon: "devicon-pytorch-original" },
    { name: "Transformers", icon: "devicon-python-plain" },
    { name: "HuggingFace", icon: "devicon-python-plain" },
    { name: "FAISS", icon: "devicon-python-plain" },
    { name: "Firebase", icon: "devicon-firebase-plain" },
    { name: "Supabase", icon: "devicon-supabase-plain" },
    { name: "Redis", icon: "devicon-redis-plain" },
    { name: "Qdrant", icon: "devicon-python-plain" },
    { name: "Pinecone", icon: "devicon-python-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Alembic", icon: "devicon-sqlalchemy-original" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "Postman", icon: "devicon-postman-plain" },
    { name: "Figma", icon: "devicon-figma-plain" },
    { name: "Sanity", icon: "devicon-sanity-plain" },
    { name: "AWS S3", icon: "devicon-amazonwebservices-plain-wordmark" },
    { name: "AWS EC2", icon: "devicon-amazonwebservices-plain-wordmark" },
    { name: "Vercel", icon: "devicon-vercel-original" },
    { name: "REST APIs", icon: "devicon-fastapi-plain" },
  ];

  return (
    <>
      {/* <nav className="nav">
        <div>Home</div>
        <div>Projects</div>
        <div>Contact Me</div>
      </nav> */}
      <header className="header">
        <div className="titleContainer">
          <div className="mainHeader">
            Hey, I'm Matt! Full-stack Developer & AI Engineer
          </div>
          <div className="smallHeaderDescription">
            CS student at UW specializing in full-stack development and AI
            integration. Built ad targeting systems at Clad Labs (YC F25) and
            mobile apps serving 500+ users.
          </div>
          <nav className="links">
            <a href="https://github.com/mattycakes14" target="_blank">
              <img src={github} alt="github"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/matt-lau-7b482531b/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin"></img>
            </a>
            <a href="https://x.com/RealMattLau14" target="_blank">
              <img src={twitter} alt="twitter"></img>
            </a>
          </nav>
        </div>
        <figure className="figure">
          <img src={mainPicture} alt="Flat icon image"></img>
        </figure>
      </header>
      <section className="experienceContainer">
        <div className="headerContainer">
          <div className="workTitleContainer">
            <div>Experience & Leadership</div>
            <div className="secondSmallDesc">
              Here are my experiences so far ever since I started my programming
              and engineering journey here at UW. Each role taught me something
              new about building for users, shipping to production, and
              iterating based on real feedback.
            </div>
          </div>
          <figure>
            {/* <img
              className="secondPhoto"
              src={secondPhoto}
              alt="Flat icone image"
            ></img> */}
          </figure>
        </div>
        <div className="mainWorkContainer">
          {workExperience.map((item, i) => (
            <WorkBox {...item} key={i} />
          ))}
        </div>
      </section>
      <section className="technologiesContainer">
        <div className="textContainer">
          <div className="techTitle">Technologies I've Used</div>
          <div className="techDesc">
            8 languages, 20+ frameworks, countless projects. Here's the tech
            stack I've battle-tested building everything from AI apps to mobile
            platforms.
          </div>
        </div>
        <div className="toolsContainer">
          {technologies.map((item, i) => (
            <Tool {...item} key={i} />
          ))}
        </div>
      </section>
      <footer className="footerContainer">
        <p>&copy; 2025 Matt Lau. Built with React & Vite.</p>
        <nav className="linksContainer">
          <div className="importantLinksContaienr">
            <div>Important Links</div>
            <a
              href="https://www.dropbox.com/scl/fi/f331pzrnzalwbkg10sf3x/Matt_Lau_Official_Res.pdf?rlkey=p3ctz5y8dlff7tejbclec5zyj&st=jwwpswz8&dl=0"
              target="_blank"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/matt-lau-7b482531b/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/mattycakes14" target="_blank">
              Github
            </a>
          </div>
          <div className="socialsContainer">
            <div>Socials</div>
            <a href="https://www.instagram.com/realmattlau/" target="_blank">
              Instagram
            </a>
            <a href="https://x.com/RealMattLau14" target="_blank">
              Twitter
            </a>
            <a href="https://www.facebook.com/matt.lau.1460" target="_blank">
              Facebook
            </a>
          </div>
          <div className="otherContainer">
            <div>Other</div>
            <a href="mailto:matthewlau191@gmail.com">Contact Me</a>
            <a href="https://www.cladlabs.ai/">Check Out Clad Labs</a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default App;
