const projectsContainer = document.querySelector(".grid-view");
const projectsTemplate = document.getElementById("projects-template");
const projectCount = document.getElementById("projects-count");


const projects = [
  {
    title: "Blog Marshal",
    url: "https://blog-marshal-v1.vercel.app/",
    description:
      "An article publishing application inspired by Medium.com, designed to empower users to publish their original articles instantly and engage with a global audience. The platform is built using ReactJS for interactive user interface and Appwrite as backend service for handling business logic and storage processes.",
    technologies: ["ReactJS", "Redux-Toolkit", "Tailwind", "Appwrite"],
    thumbnail: "/images/Blog-Marshal-Cover.webp",
  },
  {
    title: "Little Lemon",
    url: "https://little-lemon-v1.vercel.app/",
    description:
      "An article publishing application inspired by Medium.com, designed to empower users to publish their original articles instantly and engage with a global audience. The platform is built using ReactJS for interactive user interface and Appwrite as backend service for handling business logic and storage processes.",
    technologies: ["ReactJS", "Tailwind"],
    thumbnail: "/images/Little-Lemon-Cover.webp",
  },
  {
    title: "Paperless Pages",
    url: "https://paperlesspages.netlify.app/",
    description:
      "An article publishing application inspired by Medium.com, designed to empower users to publish their original articles instantly and engage with a global audience. The platform is built using ReactJS for interactive user interface and Appwrite as backend service for handling business logic and storage processes.",
    technologies: ["ReactJS", "ExpressJS", "MongoDB", "Cloudinary", "Stripe"],
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
      const projectLinkElement = projectClone.querySelector("#project-url")
      projectLinkElement.href = url
    projectClone.querySelector("#project-description").textContent =
          description;
      const technologiesContainer = projectClone.querySelector("#technologies")
      technologies.forEach(technology => {
          const techSpan = document.createElement('span')
          techSpan.textContent = technology
          technologiesContainer.append(techSpan)
    })

      
      
      
    projectsContainer.append(projectClone);
  });
};

showProjects();
