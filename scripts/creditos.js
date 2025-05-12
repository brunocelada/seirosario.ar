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
      { href: 'creditos.html', text: 'Mis Créditos', class: 'actual-page' },
      { href: 'contactanos.html', text: 'Contactanos' }
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
    main.id = 'creditos';
  
    const h1 = document.createElement('h1');
    h1.textContent = 'Mis Créditos';
    main.appendChild(h1);
  
    const p1 = document.createElement('p');
    p1.textContent = 'Ingresá al siguiente link con tu cuenta LDS para ver tus créditos';
    main.appendChild(p1);
  
    const linkCreditos = document.createElement('a');
    linkCreditos.className = 'button ver-creditos';
    linkCreditos.href = 'https://myinstitute.churchofjesuschrist.org/';
    linkCreditos.target = '_blank';
    linkCreditos.textContent = 'Ver mis créditos';
    main.appendChild(linkCreditos);
  
    const br1 = document.createElement('br');
    const br2 = document.createElement('br');
    main.appendChild(br1.cloneNode());
    main.appendChild(br2.cloneNode());
  
    const instructivo1 = document.createElement('a');
    instructivo1.className = 'instructivo';
    instructivo1.target = '_blank';
    instructivo1.href = 'https://drive.google.com/file/d/14w8Yol2aIqDIyUbefF0Gv_JgIOzh5ACW/view?usp=sharing';
    instructivo1.textContent = '¿Cómo veo mis créditos totales?';
    main.appendChild(instructivo1);
  
    main.appendChild(document.createElement('br'));
  
    const instructivo2 = instructivo1.cloneNode(true);
    instructivo2.textContent = '¿Cómo solicito la transferencia de mis créditos a BYU?';
    main.appendChild(instructivo2);
  
    main.appendChild(br1.cloneNode());
    main.appendChild(br2.cloneNode());
  
    const p2 = document.createElement('p');
    p2.innerHTML = `Si querés recibir impresos tus certificados de finalización de curso del año pasado,  
      <a href="https://forms.gle/77H5gW5f8Qs8oErE7" class="formulario" target="_blank">hacé click acá</a>`;
    main.appendChild(p2);
  
    main.appendChild(document.createElement('br'));
    main.appendChild(document.createElement('br'));
    main.appendChild(document.createElement('br'));
  
    const h3 = document.createElement('h3');
    h3.textContent = 'Requisitos para graduarme de Instituto';
    main.appendChild(h3);
  
    const p3 = document.createElement('p');
    p3.innerHTML = `Para graduarte de Instituto debés completar un total de 14 créditos, y deben ser:
      <li>8 créditos de Cursos Fundamentales</li>
      <li>6 créditos de Cursos Opcionales</li>`;
    main.appendChild(p3);
  
    const p4 = document.createElement('p');
    p4.innerHTML = `Los cursos fundamentales son:
      <li>200 - La Familia Eterna (2 créditos)</li>
      <li>225 - Fundamentos de la Restauración (2 créditos)</li>
      <li>250 - Jesucristo y el Evangelio Sempiterno (2 créditos)</li>
      <li>275 - Enseñanzas y Doctrina del Libro de Mormón (2 créditos)</li>`;
    main.appendChild(p4);
  
    main.appendChild(document.createElement('br'));
  
    const p5 = document.createElement('p');
    p5.innerHTML = `Si te gustaría que pudieramos dar algún curso en específico, 
      podés completar el siguiente 
      <a href="https://forms.gle/i9cpWAgi8TkUgwxY8" class="formulario" target="_blank">Formulario de Google</a>`;
    main.appendChild(p5);
  
    const iframe = document.createElement('iframe');
    iframe.src = 'https://docs.google.com/forms/d/e/1FAIpQLScfQMA0BSe_1InCo6LUzBdLIQneOnOeMHFRa5jTZJKVb4GF-Q/viewform?embedded=true';
    iframe.frameBorder = '0';
    iframe.marginHeight = '0';
    iframe.marginWidth = '0';
    iframe.textContent = 'Cargando…';
    main.appendChild(iframe);
  
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
  
    // Año actual
    const currentYear = new Date().getFullYear();
    const yearSpan = footer.querySelector('#current-year');
    if (yearSpan) yearSpan.textContent = currentYear;
  });
  