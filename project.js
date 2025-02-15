const projects = [
    {
      id: 1,
      name: "Ecommerce",
      link: "https://edwardoekka.github.io/Ecommerce_Ui/index.html",
      image:
        "https://www.newgenapps.com/hubfs/Imported_Blog_Media/eCommerce-Website-Components-photo.jpg",
      bg: "#F96167",
      tools: ["NextJS","Firebase","Tailwind"],
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
      tools: ["ReactJS","MaterialUI","NodeJS","MongoDB"],
      description:
        "An engaging blog application where users can read, write, and share insightful articles on various topics.",
    },
    {
      id: 3,
      name: "Folder Tree",
      link: "https://wardogram.vercel.app/",
      image: "/folder.jpg",
      tools: ["NextJS","MaterialUI","NodeJS","Postgres","Prisma"],
      bg: "#97BC62",
      description:
        "A dynamic social media platform enabling users to connect, share updates, and interact with a vibrant community.",
    },
  ];
  
  const projectContainer = document.querySelector(".project-container");
  projects.forEach((project) => {
    const mainProjectDiv = document.createElement("div");
    mainProjectDiv.classList.add("main-pro-div");
  
    // Left JSON Details
    const leftJsonDiv = document.createElement("div");
    leftJsonDiv.classList.add("left-json-div");
    const nameDiv=document.createElement("div");
    nameDiv.classList.add("project-name");

    const threeDots=document.createElement("img");
    threeDots.classList.add("three-dots");
    threeDots.src="./three-dots.png";
    threeDots.alt="three dots";
    nameDiv.appendChild(threeDots);

    const nameHead=document.createElement("h2");
    nameHead.innerText=project.name;
    nameDiv.appendChild(nameHead);
    leftJsonDiv.appendChild(nameDiv);

    const jsonData=document.createElement("div");
    jsonData.classList.add("json-data-div");

    const lineOne=document.createElement("p");
    lineOne.innerHTML = "<span class=\"constSpan\">const</span> project = {";
    jsonData.appendChild(lineOne);

    const middleDiv=document.createElement("div");
    middleDiv.classList.add("middle-div");

    
    const projectName=document.createElement("p");
    projectName.innerHTML=`name: '<span class="p-name">${project.name}</span>',`;
    middleDiv.appendChild(projectName);
    
    const toolsContainer=document.createElement("p");

    toolsContainer.innerHTML = `tools: [ ${project.tools.map(tool => `'<span class="tool-name">${tool}</span>'`).join('<span class="tools-comma">,</span> ')} ],`;

    middleDiv.appendChild(toolsContainer);

    const projectDesc=document.createElement("p");
    projectDesc.innerHTML=`description: '<span class="p-desc">${project.description}</span>',`;
    middleDiv.appendChild(projectDesc);

    const projectLink=document.createElement("p");
    projectLink.innerHTML = `link: <a class="p-link" href="${project.link}" target="_blank">Click here</a>`;
    middleDiv.appendChild(projectLink);

    jsonData.appendChild(middleDiv);

    const lineLast=document.createElement("p");
    lineLast.innerText="}";
    jsonData.appendChild(lineLast);

    leftJsonDiv.appendChild(jsonData);
  
  
    mainProjectDiv.appendChild(leftJsonDiv);
    projectContainer.appendChild(mainProjectDiv);
  });
  