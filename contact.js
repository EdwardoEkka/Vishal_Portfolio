document.addEventListener("DOMContentLoaded", () => {
    const ContactMain = document.querySelector(".contact");
    const ContactForm = document.querySelector(".main-contact");
    if (ContactMain) {
      ContactMain.style.display = "none";
      ContactForm.style.display = "none";
    }
    const ContactMeButton = document.querySelector(".cntc-btn");
    
    ContactMeButton.addEventListener("click", () => {
        ContactMain.style.display = "flex";
        ContactForm.style.display = "block";
    });

    const CloseButton= document.querySelector(".close-btn-contact");
    CloseButton.addEventListener("click", () => {
        ContactMain.style.display = "none";
        ContactForm.style.display = "none";
    });
  });
  

  
  