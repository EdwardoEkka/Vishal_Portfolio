const skills = [
    { id: 1, name: "C", path: "./skills/C.png" },
    { id: 2, name: "Git", path: "./skills/Git.png" },
    { id: 3, name: "Javascript", path: "./skills/JavaScript.png" },
    { id: 4, name: "React", path: "./skills/React.png" },
    {id: 5, name:"Next",path:"./skills/Next.js.png"},
    {id:6,name:"Typescript",path:"./skills/TypeScript.png"},
    {id:7,name:"Postman",path:"./skills/Postman.png"},
    {id:8,name:"MySQL",path:"./skills/MySQL.png"}
];

const skillContainer = document.querySelector('.skill-container');
skills.map(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill-card-item');
    const skillImg = document.createElement('img');
    skillImg.src = skill.path;
    skillImg.alt = skill.name;
    const skillName = document.createElement('p');
    skillName.style.textAlign='center';
    skillName.textContent = skill.name;
    skillDiv.appendChild(skillImg);
    skillDiv.appendChild(skillName);
    skillContainer.appendChild(skillDiv);
});

const projects=[
    {
        id:1,name:"Ecommerce",link:"https://edwardoekka.github.io/Ecommerce_Ui/index.html"
    },
    {
        id:2,name:"Blog App",link:"https://wardesk.vercel.app/"
    },
    {
        id:3,name:"Social Media",link:"https://wardogram.vercel.app/"
    },
    {
        id:4,name:"Social Media",link:"https://wardogram.vercel.app/"
    },
    {
        id:4,name:"Social Media",link:"https://wardogram.vercel.app/"
    }
]

const portfolioContainer=document.querySelector('.portfolio-container');
projects.map(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-card-item');
    const projectImg = document.createElement('img');
    projectImg.src = project.image;
    projectImg.alt = project.name;
    const projectName = document.createElement('p');
    projectName.style.textAlign='center';
    projectName.textContent = project.name;
    projectDiv.appendChild(projectImg);
    // projectDiv.appendChild(projectName);
    portfolioContainer.appendChild(projectDiv);
});

const previous=document.querySelector('.prev');
const next=document.querySelector('.next');


const scrollAmountPercentage = 0.5; // 50% as a decimal

next.addEventListener('click', () => {
    let scrollAmount;
    if (window.innerWidth < 600) {
        scrollAmount = portfolioContainer.clientWidth; // 100% of the container's width
    } else {
        scrollAmount = portfolioContainer.clientWidth * scrollAmountPercentage; // 50% of the container's width
    }
    portfolioContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

previous.addEventListener('click', () => {
    let scrollAmount;
    if (window.innerWidth < 600) {
        scrollAmount = portfolioContainer.clientWidth; // 100% of the container's width
    } else {
        scrollAmount = portfolioContainer.clientWidth * scrollAmountPercentage; // 50% of the container's width
    }
    portfolioContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});