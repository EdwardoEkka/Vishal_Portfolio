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
        skillName.style.textAlign = 'center';
        skillName.textContent = skill.name;
        skillDiv.appendChild(skillImg);
        skillDiv.appendChild(skillName);
        skillContainer.appendChild(skillDiv);
    });

    const projects = [
        {
            id: 1, 
            name: "Ecommerce", 
            link: "https://edwardoekka.github.io/Ecommerce_Ui/index.html", 
            image: "https://www.newgenapps.com/hubfs/Imported_Blog_Media/eCommerce-Website-Components-photo.jpg", 
            bg: "#F96167", 
            description: "A comprehensive eCommerce platform offering a seamless shopping experience with a modern user interface."
        },
        {
            id: 2, 
            name: "Blog App", 
            link: "https://wardesk.vercel.app/", 
            image: "https://www.thebalancemoney.com/thmb/OqDqeT4W7DUsGBEas4kAgSxm8QM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Blogging-2227d2f697a54b6395f966dd0d85db6c.jpg", 
            bg: "#8AAAE5", 
            description: "An engaging blog application where users can read, write, and share insightful articles on various topics."
        },
        {
            id: 3, 
            name: "Social Media", 
            link: "https://wardogram.vercel.app/", 
            image: "https://www.kitomba.com/blog/wp-content/uploads/2017/07/Untitled-design-2.png", 
            bg: "#97BC62", 
            description: "A dynamic social media platform enabling users to connect, share updates, and interact with a vibrant community."
        },
    ];
    

    const portfolioContainer = document.querySelector('.portfolio-container');
    projects.map(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-card-item');
        const projectImg = document.createElement('img');
        projectImg.src = project.image;
        projectImg.alt = project.name;
        const Layer = document.createElement('div');
        Layer.classList.add('layer');
        Layer.style.backgroundColor = project.bg;
        projectDiv.appendChild(Layer);

        const projectName=document.createElement('div');
        projectName.classList.add('project-name');
        const project_Name=document.createElement('h2');
        project_Name.innerText=project.name;
        projectName.appendChild(project_Name);
        projectDiv.appendChild(projectName);


        const projectDetails = document.createElement('div');

        const description = document.createElement('h5');
        description.innerText = project.description;
        projectDetails.appendChild(description);
        projectDetails.classList.add('project-details');
    

        const Link = document.createElement('a');
        Link.href = project.link;
        Link.target="blank";
        const visitButton = document.createElement('button');
        visitButton.classList.add('link-button');
        visitButton.innerText = "Visit Website";

        Link.appendChild(visitButton);
        projectDetails.appendChild(Link);
        projectDiv.appendChild(projectImg);
        projectDiv.appendChild(projectDetails);
        portfolioContainer.appendChild(projectDiv);
    });



function updateImageSource() {
    const picture = document.querySelector('.my-profile');
    if (window.innerWidth < 600) {
      picture.src = 'my_half_pic.jpeg'; 
    } else {
      picture.src = 'mypic.jpeg';  
    }
  }
  

  updateImageSource();
  
  window.addEventListener('resize', updateImageSource);


  
  
  var canvas = document.getElementById('canvas'),
             
  /* The getContext() method returns an object 
  that provides methods and properties for 
  drawing on the canvas. */
  ctx = canvas.getContext('2d');

  /* Setting canvas width and height equal to
  window screen width and height. */
  function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }
  resize();
  window.onresize = resize;

  // Function to generate noise effect
  function generate_noise(ctx) {
      var w = ctx.canvas.width,
      h = ctx.canvas.height,
               
      /* This creates a new ImageData object
      with the specified dimensions(i.e canvas
      width and height). All pixels are set to
      transparent black (i.e rgba(0,0,0,0)). */
      idata = ctx.createImageData(w, h), 
               
      // Creating Uint32Array typed array
      buffer32 = new Uint32Array(idata.data.buffer), 
      buffer_len = buffer32.length,
      i = 0
      
      for ( ; i < buffer_len; i++)
          buffer32[i] = 
              ((255 * Math.random()) | 0) << 24;
           
      /* The putImageData() method puts the image
      data (from a specified ImageData object)
      back onto the canvas. */
      ctx.putImageData(idata, 0, 0); 
  }

  // Creating animation effect
  var toggle = true;
  (function loop() {
      toggle = !toggle;
      if (toggle) {
           
          // Loop function is called each time
          // before next repaint.
          requestAnimationFrame(loop); 
          return;
      }
  generate_noise(ctx);
  requestAnimationFrame(loop);
  })();