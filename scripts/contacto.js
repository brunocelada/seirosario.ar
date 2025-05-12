document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app') || document.body;
  
    // Background video
    const backgroundVideo = document.createElement('video');
    backgroundVideo.className = 'background-video';
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.muted = true;
    backgroundVideo.playsInline = true;
    backgroundVideo.src = 'images/background1.mp4';
    app.appendChild(backgroundVideo);
  
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
    const links = [
      { href: 'index.html', text: 'Inicio' },
      { href: 'creditos.html', text: 'Mis Créditos' },
      { href: 'contactanos.html', text: 'Contactanos', class: 'actual-page' }
    ];
    links.forEach(link => {
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
  
    // MAIN
    const main = document.createElement('main');
    main.id = 'contactanos';
  
    const h2 = document.createElement('h2');
    h2.textContent = 'Contactanos';
    main.appendChild(h2);
  
    const p = document.createElement('p');
    p.innerHTML = `
      Para comunicarte con nosotros escribinos a 
      <a target="_blank" href="mailto:administracion@seirosario.ar">administracion@seirosario.ar</a> 
      o por nuestras redes sociales: 
      <br><br>
      Instagram: <a target="_blank" href="https://ig.me/m/institutorosario">Instituto Rosario</a>
      <br>
      Facebook: <a target="_blank" href="https://m.me/RosarioInstitutoSUD">Rosario Instituto SUD</a>
      <br><br>
      Teléfono: <a href="tel:+5493414246245">341 424-6245</a>
    `;
    main.appendChild(p);
  
    app.appendChild(main);
  
    // FOOTER
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    footerText.innerHTML = `
      INSTITUTO DE RELIGION ROSARIO
      <br>Mitre 1377, Rosario, Santa Fe, Argentina (CP 2000)
      <br>&COPY;<span id="current-year"></span> Todos los derechos reservados | Bruno Celada
    `;
    footer.appendChild(footerText);
  
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
  
    // Año actual
    const currentYear = new Date().getFullYear();
    const yearSpan = footer.querySelector('#current-year');
    if (yearSpan) yearSpan.textContent = currentYear;
  });
  