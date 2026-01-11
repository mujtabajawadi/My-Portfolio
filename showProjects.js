const projectsContainer = document.querySelector(".grid-view");
const projectsTemplate = document.getElementById("projects-template");
const projectCount = document.getElementById("projects-count");

const projects = [
  {
    title: "Blog Marshal",
    url: "https://blog-marshal-v1.vercel.app/",
    description:
      "An article publishing application inspired by  <a href='https://medium.com' target='_blank'>Medium.com</a>, designed to empower users to publish their original articles instantly and engage with a global audience. The platform is built using ReactJS for interactive user interface and Appwrite as backend service for handling business logic and storage processes.",
    technologies: ["ReactJS", "Redux-Toolkit", "Tailwind", "Appwrite"],
    thumbnail: "/images/Blog-Marshal-Cover.webp",
  },
  {
    title: "Little Lemon",
    url: "https://little-lemon-v1.vercel.app/",
    description:
      'A responsive React application for the "Little Lemon" restaurant. Features include a dynamic restaurant booking system with real-time slot validation, modern UI/UX components, and a mobile-first architecture. Developed as the Capstone project for the Meta Front-End Certification.',
    technologies: ["ReactJS", "Tailwind"],
    thumbnail: "/images/Little-Lemon-Cover.webp",
  },
  {
    title: "Paperless Pages",
    url: "https://paperlesspages.netlify.app/",
    description:
      "A collaborative MERN stack e-commerce platform for digital books, featuring an integration with Google AI Studio(Gemini API). To solve the problem of manual data entry, Integrated a feature that dynamically generates book descriptions in real-time. The application handles operations from signingup to checkingout powered by Stripe.",
    technologies: ["ReactJS", "ExpressJS", "MongoDB", "Cloudinary", "Stripe", "Gemini API(gen-AI)"],
    thumbnail: "/images/Paperless-Pages-Cover.webp",
  },
];

projectCount.innerText = `(${projects.length})`;

const showProjects = () => {
  if (!projects) return false;

  projects.forEach((currentProject) => {
    const { title, url, description, technologies, thumbnail } = currentProject;
    const projectClone = document.importNode(projectsTemplate.content, true);

    projectClone.querySelector(".project-image").src = thumbnail;
    projectClone.querySelector(".project-image").alt = title;
    projectClone.querySelector("#project-title").textContent = title;
    projectClone.querySelector("#project-url").textContent = url;
    const projectLinkElement = projectClone.querySelector("#project-url");
    projectLinkElement.href = url;
    projectClone.querySelector("#project-description").innerHTML =
      description;
    const technologiesContainer = projectClone.querySelector("#technologies");
    technologies.forEach((technology) => {
      const techSpan = document.createElement("span");
      techSpan.textContent = technology;
      technologiesContainer.append(techSpan);
    });

    projectsContainer.append(projectClone);
  });
};

showProjects();
