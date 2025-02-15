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

const Frontend = document.getElementById("frontend");
Frontend.classList='selected';
const Backend = document.getElementById("backend");
const Others = document.getElementById("others");

function RenderSkill(k) {
  switch (k) {
    case "f":
      FrontendskillContainer.style.display = "grid";
      BackendskillContainer.style.display = "none";
      OtherskillContainer.style.display = "none";
      Frontend.classList='selected';
      Backend.classList='none';
      Others.classList='none';
      break;
    case "b":
      FrontendskillContainer.style.display = "none";
      BackendskillContainer.style.display = "grid";
      OtherskillContainer.style.display = "none";
      Frontend.classList='none';
      Backend.classList='selected';
      Others.classList='none';
      break;
    case "o":
      FrontendskillContainer.style.display = "none";
      BackendskillContainer.style.display = "none";
      OtherskillContainer.style.display = "grid";
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

const aboutLink = document.querySelector('.about-link');
const projectLink = document.querySelector('.project-link');
const contactLink = document.querySelector('.contact-link');

const aboutView = document.querySelector('.about-view');
const projectView = document.querySelector('.project-view');
const contactView = document.querySelector('.contact-view');

function scrollToView(view) {
  view.scrollIntoView({ behavior: 'smooth' });
}


aboutLink.addEventListener('click', () => scrollToView(aboutView));
projectLink.addEventListener('click', () => scrollToView(projectView));
contactLink.addEventListener('click', () => scrollToView(contactView));
