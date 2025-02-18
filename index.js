const frontend_skills = [
  { id: 1, name: "React", path: "./skills/React.png" },
  { id: 2, name: "Next", path: "./skills/Next.js.png" },
  { id: 3, name: "MUI", path: "./skills/Material UI.png" },
  { id: 4, name: "Tailwind", path: "./skills/Tailwind CSS.png" },
  { id: 5, name: "Bootstrap", path: "./skills/Bootstrap.png" },
  { id: 6, name: "HTML5", path: "./skills/Html5.png" },
  { id: 7, name: "CSS3", path: "./skills/Css3.png" },
  { id: 8, name: "Javascript", path: "./skills/JavaScript.png" },
  { id: 9, name: "Redux", path: "./skills/Redux.png" },
  { id: 10, name: "ESLint", path: "./skills/ESLint.png" },
  { id: 11, name: "NPM", path: "./skills/NPM.png" },
  { id: 12, name: "Vite", path: "./skills/Vite.js.png" },
  { id: 13, name: "Yarn", path: "./skills/Yarn.png" },
  { id: 14, name: "Typescript", path: "./skills/TypeScript.png" },
];

const backend_skills = [
  { id: 1, name: "Node", path: "./skills/Node.js.png" },
  { id: 2, name: "Express", path: "./skills/Express.png" },
  { id: 3, name: "Socket", path: "./skills/Socket.io.png" },
  { id: 4, name: "MongoDB", path: "./skills/MongoDB.png" },
  { id: 5, name: "MySQL", path: "./skills/MySQL.png" },
  { id: 6, name: "PostgreSQL", path: "./skills/PostgresSQL.png" },
  { id: 7, name: "JSON", path: "./skills/Json.png" },
  { id: 8, name: "Nodemon", path: "./skills/Nodemon.png" },
];

const other_skills = [{ id: 1, name: "Git", path: "./skills/Git.png" },
    { id: 2, name: "VS Code", path: "./skills/VS_Code.png" },
    { id: 3, name: "Postman", path: "./skills/Postman.png" },
    { id: 4, name: "Docker", path: "./skills/Docker.png" },
    { id: 5, name: "Firebase", path: "./skills/Firebase.png" },
    { id: 6, name: "Jira", path: "./skills/Jira.png" },
    { id: 7, name: "Stack Overflow", path: "./skills/Stack Overflow.png" },
];

const FrontendskillContainer = document.querySelector(".frontend-container");
FrontendskillContainer.style.display = "flex";
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

const Frontend = document.getElementById("frontend");
Frontend.classList='selected';
const Backend = document.getElementById("backend");
const Others = document.getElementById("others");

function RenderSkill(k) {
  switch (k) {
    case "f":
      FrontendskillContainer.style.display = "flex";
      BackendskillContainer.style.display = "none";
      OtherskillContainer.style.display = "none";
      Frontend.classList='selected';
      Backend.classList='none';
      Others.classList='none';
      break;
    case "b":
      FrontendskillContainer.style.display = "none";
      BackendskillContainer.style.display = "flex";
      OtherskillContainer.style.display = "none";
      Frontend.classList='none';
      Backend.classList='selected';
      Others.classList='none';
      break;
    case "o":
      FrontendskillContainer.style.display = "none";
      BackendskillContainer.style.display = "none";
      OtherskillContainer.style.display = "flex";
      Frontend.classList='none';
      Backend.classList='none';
      Others.classList='selected';
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

