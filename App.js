// Esconde la pantalla de carga y muestra el contenido principal
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');
  
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transition = 'opacity 1s ease';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 1s ease';
        setTimeout(() => {
          mainContent.style.opacity = '1';
        }, 100);
      }, 1000);
    }, 4000);
  });

  
  ////--------------------------------------------------------
  
  const btn = document.querySelector('.btn')
  const mainNav = document.querySelector('.nav')
  const equis = document.querySelector('.nover')
  
  btn.addEventListener("click", () => {
    mainNav.classList.toggle("viewNav");
    btn.classList.toggle("nover");
    equis.classList.toggle("ver");
  });
  
  equis.addEventListener("click", () => {
    mainNav.classList.toggle("viewNav");
    equis.classList.toggle("ver");
    btn.classList.toggle("nover")  
  });
  
  ////--------------------------------------------------------

  const Copiar = document.querySelector('.copiar')

    Copiar.addEventListener('click', () =>  {

    var campoCorreo = document.getElementById("correo");


    campoCorreo.select();


    document.execCommand("copy");

 
    window.getSelection().removeAllRanges();


    alert("Correo copiado: " + campoCorreo.value);
  }
    )



    
      const translations = {};
      
      // Cargar las traducciones
      const loadTranslations = async (language = "en") => {
        console.log(language);
        
          try {
              if (!translations[language]) {
                  const response = await fetch(`./translations/${language}.json`);
                  translations[language] = await response.json();
              }
              applyTranslations(language);
              localStorage.setItem("language", language);
              updateButtonText(language);
          } catch (error) {
              console.error("Error al cargar traducciones:", error);
          }
      };
      
      
      const applyTranslations = (language) => {
          const elementsToTranslate = document.querySelectorAll("[id]");
          elementsToTranslate.forEach((element) => {
              const key = element.id;
              if (translations[language] && translations[language][key]) {
                  element.textContent = translations[language][key];
              }
      });
  };
  
  const updateButtonText = (currentLanguage) => {
      const button = document.querySelector(".language-button");
      const nextLanguage = currentLanguage === "es" ? "en" : "es";
      button.textContent = nextLanguage;
  };
  
  document.querySelector(".language-button").addEventListener("click", () => {
      const currentLanguage = localStorage.getItem("language") || "en";
      const nextLanguage = currentLanguage === "es" ? "en" : "es";
      loadTranslations(nextLanguage);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
      const selectedLanguage = localStorage.getItem("language") || "en";
      loadTranslations(selectedLanguage);
  });
  