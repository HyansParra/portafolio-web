const hamburger=document.getElementById('hamburger');const navMenu=document.getElementById('nav-menu');if(hamburger){hamburger.addEventListener('click',()=>navMenu.classList.toggle('show'));}const toggleBtn=document.getElementById('dark-toggle');if(toggleBtn){toggleBtn.addEventListener('click',()=>document.documentElement.classList.toggle('dark-mode'));}

// --- EFECTO MÁQUINA DE ESCRIBIR ---
document.addEventListener('DOMContentLoaded', () => {
  const titleElement = document.getElementById('hero-title');
  if (titleElement) {
    const text = "Hyans Parra";
    const period = ".";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        titleElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150); // Velocidad de escritura
      } else {
        // Añade el punto al final con el color secundario
        titleElement.innerHTML += `<span>${period}</span>`;
      }
    }
    typeWriter();
  }
});