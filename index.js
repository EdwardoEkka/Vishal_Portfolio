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
    skillDiv.classList.add('skill-card');
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
        id:1,name:"Ecommerce",link:"https://edwardoekka.github.io/Ecommerce_Ui/index.html",image:"https://blog-frontend.envato.com/cdn-cgi/image/width=2560,quality=75,format=auto/uploads/sites/2/2022/04/E-commerce-App-JPG-File-scaled.jpg"
    },
    {
        id:2,name:"Blog App",link:"https://wardesk.vercel.app/",image:"https://pressreleasenetwork.com/site/wp-content/uploads/2021/04/blogging.jpg"
    },
    {
        id:3,name:"Social Media",link:"https://wardogram.vercel.app/",image:"https://plus.unsplash.com/premium_photo-1683583961441-511f9498e6ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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