const frontend_skills = [
  { id: 1, name: "React", path: "./skills/React.png" },
  { id: 2, name: "Next", path: "./skills/Next.js.png" },
  { id: 3, name: "MUI", path: "./skills/Material UI.png" },
  { id: 4, name: "Tailwind", path: "./skills/Tailwind CSS.png" },
  { id: 5, name: "Bootstrap", path: "./skills/Bootstrap.png" },
  { id: 6, name: "Bootstrap", path: "./skills/Bootstrap.png" },
];

const backend_skills = [
  { id: 1, name: "Node", path: "./skills/Node.js.png" },
  { id: 2, name: "Express", path: "./skills/Express.png" },
  { id: 3, name: "Socket", path: "./skills/Socket.io.png" },
  { id: 4, name: "MongoDB", path: "./skills/MongoDB.png" },
  { id: 5, name: "MySQL", path: "./skills/MySQL.png" },
  { id: 6, name: "MySQL", path: "./skills/MySQL.png" },
];

const other_skills = [{ id: 1, name: "Git", path: "./skills/Git.png" },
    { id: 2, name: "VS Code", path: "./skills/VS_Code.png" },
    { id: 3, name: "Postman", path: "./skills/Postman.png" },
    { id: 4, name: "Postman", path: "./skills/Postman.png" },
    { id: 5, name: "Postman", path: "./skills/Postman.png" },
    { id: 6, name: "Postman", path: "./skills/Postman.png" },
];

const FrontendskillContainer = document.querySelector(".frontend-container");
FrontendskillContainer.style.display = "grid";
frontend_skills.map((skill) => {
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill-card-item");
  const skillImg = document.createElement("img");
  skillImg.src = skill.path;
  skillImg.alt = skill.name;
  const skillName = document.createElement("p");
  skillName.style.textAlign = "center";
  skillName.textContent = skill.name;
  skillDiv.appendChild(skillImg);
  skillDiv.appendChild(skillName);
  FrontendskillContainer.appendChild(skillDiv);
});

const BackendskillContainer = document.querySelector(".backend-container");
BackendskillContainer.style.display = "none";
backend_skills.map((skill) => {
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill-card-item");
  const skillImg = document.createElement("img");
  skillImg.src = skill.path;
  skillImg.alt = skill.name;
  const skillName = document.createElement("p");
  skillName.style.textAlign = "center";
  skillName.textContent = skill.name;
  skillDiv.appendChild(skillImg);
  skillDiv.appendChild(skillName);
  BackendskillContainer.appendChild(skillDiv);
});

const OtherskillContainer = document.querySelector(".others-container");
OtherskillContainer.style.display = "none";
other_skills.map((skill) => {
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill-card-item");
  const skillImg = document.createElement("img");
  skillImg.src = skill.path;
  skillImg.alt = skill.name;
  const skillName = document.createElement("p");
  skillName.style.textAlign = "center";
  skillName.textContent = skill.name;
  skillDiv.appendChild(skillImg);
  skillDiv.appendChild(skillName);
  OtherskillContainer.appendChild(skillDiv);
});

const Frontend = document.querySelector(".frontend");
const Backend = document.querySelector(".backend");
const Others = document.querySelector(".others");

function RenderSkill(k) {
  switch (k) {
    case "f":
      FrontendskillContainer.style.display = "grid";
      BackendskillContainer.style.display = "none";
      OtherskillContainer.style.display = "none";
      break;
    case "b":
      FrontendskillContainer.style.display = "none";
      BackendskillContainer.style.display = "grid";
      OtherskillContainer.style.display = "none";
      break;
    case "o":
      FrontendskillContainer.style.display = "none";
      BackendskillContainer.style.display = "none";
      OtherskillContainer.style.display = "grid";
      break;
    default:
      break;
  }
}

Frontend.addEventListener("click", () => {
  RenderSkill("f");
});

Backend.addEventListener("click", () => {
  RenderSkill("b");
});

Others.addEventListener("click", () => {
  RenderSkill("o");
});

const projects = [
  {
    id: 1,
    name: "Ecommerce",
    link: "https://edwardoekka.github.io/Ecommerce_Ui/index.html",
    image:
      "https://www.newgenapps.com/hubfs/Imported_Blog_Media/eCommerce-Website-Components-photo.jpg",
    bg: "#F96167",
    description:
      "A comprehensive eCommerce platform offering a seamless shopping experience with a modern user interface.",
  },
  {
    id: 2,
    name: "Blog App",
    link: "https://wardesk.vercel.app/",
    image:
      "https://www.thebalancemoney.com/thmb/OqDqeT4W7DUsGBEas4kAgSxm8QM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Blogging-2227d2f697a54b6395f966dd0d85db6c.jpg",
    bg: "#8AAAE5",
    description:
      "An engaging blog application where users can read, write, and share insightful articles on various topics.",
  },
  {
    id: 3,
    name: "Social Media",
    link: "https://wardogram.vercel.app/",
    image:
      "https://www.kitomba.com/blog/wp-content/uploads/2017/07/Untitled-design-2.png",
    bg: "#97BC62",
    description:
      "A dynamic social media platform enabling users to connect, share updates, and interact with a vibrant community.",
  },
];

const portfolioContainer = document.querySelector(".portfolio-container");
projects.map((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project-card-item");
  const projectImg = document.createElement("img");
  projectImg.src = project.image;
  projectImg.alt = project.name;
  const Layer = document.createElement("div");
  Layer.classList.add("layer");
  Layer.style.backgroundColor = project.bg;
  projectDiv.appendChild(Layer);

  const projectName = document.createElement("div");
  projectName.classList.add("project-name");
  const project_Name = document.createElement("h2");
  project_Name.innerText = project.name;
  projectName.appendChild(project_Name);
  projectDiv.appendChild(projectName);

  const projectDetails = document.createElement("div");

  const description = document.createElement("p");
  description.innerText = project.description;
  projectDetails.appendChild(description);
  projectDetails.classList.add("project-details");

  const Link = document.createElement("a");
  Link.href = project.link;
  Link.target = "blank";
  const visitButton = document.createElement("button");
  visitButton.classList.add("link-button");
  visitButton.innerText = "Visit Website";

  Link.appendChild(visitButton);
  projectDetails.appendChild(Link);
  projectDiv.appendChild(projectImg);
  projectDiv.appendChild(projectDetails);
  portfolioContainer.appendChild(projectDiv);
});

function updateImageSource() {
  const picture = document.querySelector(".my-profile");
  if (window.innerWidth < 600) {
    picture.src = "my_half_pic.jpeg";
  } else {
    picture.src = "mypic.jpeg";
  }
}

updateImageSource();

window.addEventListener("resize", updateImageSource);
