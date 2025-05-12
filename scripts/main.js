// Cargar el archivo CSS externo
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/gh/brunocelada/seirosario.ar@main/styles/style.css';
document.head.appendChild(link);

// index.html pasado a main.js
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app') || document.body;
  
    // HEADER
    const header = document.createElement('header');
  
    const logoLink = document.createElement('a');
    logoLink.id = 'logo-link';
    logoLink.href = 'index.html';
  
    const logoImg = document.createElement('img');
    logoImg.className = 'logo';
    logoImg.src = 'images/sei-logo-white.png';
    logoImg.alt = 'Logo SEI';
    logoLink.appendChild(logoImg);
  
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';
    menuDiv.id = 'menu';
  
    const menuImg = document.createElement('img');
    menuImg.src = 'images/menu.png';
    menuImg.alt = 'Menu';
    menuDiv.appendChild(menuImg);
  
    const nav = document.createElement('nav');
    nav.id = 'navega';
    const enlaces = [
      { href: 'index.html', text: 'Inicio', class: 'actual-page' },
      { href: 'creditos.html', text: 'Mis Créditos' },
      { href: 'contactanos.html', text: 'Contactanos' }
    ];
    enlaces.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      if (link.class) a.className = link.class;
      nav.appendChild(a);
    });
  
    header.appendChild(logoLink);
    header.appendChild(menuDiv);
    header.appendChild(nav);
    app.appendChild(header);
  
    // VIDEO de fondo
    const backgroundVideo = document.createElement('video');
    backgroundVideo.className = 'background-video';
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.muted = true;
    backgroundVideo.playsInline = true;
    backgroundVideo.src = 'images/background1.mp4';
    app.appendChild(backgroundVideo);
  
    // HERO
    const hero = document.createElement('div');
    hero.id = 'hero';
    const heroVideo = document.createElement('video');
    heroVideo.src = 'images/HeroVideo-InstitutoRosario.mp4';
    heroVideo.autoplay = true;
    heroVideo.loop = true;
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.width = 100;
    hero.appendChild(heroVideo);
    app.appendChild(hero);
  
    // MAIN
    const main = document.createElement('main');
  
    const año = document.createElement('h2');
    año.id = 'año';
    main.appendChild(año);
  
    const periodo = document.createElement('h2');
    periodo.id = 'periodo';
    main.appendChild(periodo);
  
    const mensaje = document.createElement('p');
    mensaje.id = 'mensaje';
    mensaje.style.color = 'red';
    mensaje.style.fontWeight = 'bolder';
    mensaje.style.fontSize = '1.3em';
    main.appendChild(mensaje);
  
    const cursos = document.createElement('div');
    cursos.id = 'cursos';
    main.appendChild(cursos);
  
    app.appendChild(main);
  
    // FOOTER
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.innerHTML = `
      INSTITUTO DE RELIGION ROSARIO
      <br>Mitre 1377, Rosario, Santa Fe, Argentina (CP 2000)
      <br>&COPY;<span id="current-year"></span> Todos los derechos reservados | Bruno Celada
    `;
    footer.appendChild(p);
  
    const social = document.createElement('div');
    social.className = 'social';
    const redes = [
      { href: 'https://www.instagram.com/institutorosario/', img: 'images/instagram-logo-white.png', alt: 'Instagram Logo' },
      { href: 'https://chat.whatsapp.com/B7n9XdpWbe2JIBR5nPKnxv', img: 'images/whatsapp-logo-white.png', alt: 'Whatsapp Logo' },
      { href: 'https://www.facebook.com/RosarioInstitutoSUD/', img: 'images/facebook-logo-white.png', alt: 'Facebook Logo' }
    ];
    redes.forEach(r => {
      const a = document.createElement('a');
      a.href = r.href;
      a.target = '_blank';
      const img = document.createElement('img');
      img.src = r.img;
      img.alt = r.alt;
      a.appendChild(img);
      social.appendChild(a);
    });
    footer.appendChild(social);
    app.appendChild(footer);
  
    // Año actual en footer
    const currentYear = new Date().getFullYear();
    const yearSpan = footer.querySelector('#current-year');
    if (yearSpan) yearSpan.textContent = currentYear;
  });
  


// Tomar información de un archivo .json para los cursos y mostrarlos en la pantalla.
const urlProgramas = "https://raw.githubusercontent.com/brunocelada/seirosario.ar/main/JSON/cursos.json";

async function getUrlData(url, funcion) {
    const response = await fetch(url); //, { mode: 'no-cors' }
    if (response.ok) {
        const data = await response.json();

        funcion(data);
    }
}
getUrlData(urlProgramas, outputCursos);

function outputCursos(data) {
    data.forEach(programa => {
        let div = document.createElement("div");
        div.className = "cursos-contenedor";

        let nombre = document.createElement("h2");
        nombre.textContent = programa.nombre;

        programa.cursos.forEach(curso => {
            if (curso.status) {
                let section = document.createElement("section");
                section.className = "curso";

                let imagen = document.createElement("img");
                imagen.className = "curso-img";
                imagen.src = curso.img;
                imagen.alt = curso.titulo;
                section.appendChild(imagen);

                let titulo = document.createElement("h3");
                titulo.className = "curso-titulo";
                titulo.textContent = curso.titulo;
                section.appendChild(titulo);

                let horario = document.createElement("h4");
                horario.className = "curso-horario";
                horario.textContent = curso.horario;
                section.appendChild(horario);

                let instructor = document.createElement("p");
                instructor.className = "curso-modalidad";
                instructor.textContent = curso.instructor;
                section.appendChild(instructor);

                let modalidad = document.createElement("p");
                modalidad.className = "curso-modalidad";
                modalidad.textContent = curso.modalidad;
                section.appendChild(modalidad);

                let wspLink = document.createElement("a");
                wspLink.className = "button wsp";
                wspLink.href = curso.linkWSP;
                wspLink.textContent = "Unirme al grupo";
                wspLink.target = "_blank";
                section.appendChild(wspLink);

                let space = document.createElement("br");
                section.appendChild(space);

                let matLink = document.createElement("a");
                matLink.className = "button material";
                matLink.href = curso.linkMAT;
                matLink.textContent = "Material de estudio";
                matLink.target = "_blank";
                section.appendChild(matLink);

                div.appendChild(section);
            }
        });

        let newPrograma = document.querySelector("#cursos");
        newPrograma.appendChild(nombre);
        newPrograma.appendChild(div);
    });
};

// Titulo y mensajes
const urlMensajes = "https://raw.githubusercontent.com/brunocelada/seirosario.ar/main/JSON/mensajes.json";
const año = document.querySelector("#año");
const periodo = document.querySelector("#periodo");
const mensaje = document.querySelector("#mensaje");

getUrlData(urlMensajes, outputMensajes);

function outputMensajes(data) {
    año.innerHTML = data.año;
    periodo.innerHTML = data.periodo;
    mensaje.innerHTML = data.mensaje;
};