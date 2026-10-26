/* Hydraulics Stores — Part 3 interactive features */
document.addEventListener('DOMContentLoaded', () => {
  // Mark the current navigation link for assistive technology and styling.
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header nav a').forEach(link => {
    if (link.getAttribute('href') === currentFile) link.setAttribute('aria-current', 'page');
  });

  // Accessible image lightbox: clicking a content image opens a larger preview.
  const images = [...document.querySelectorAll('main img')];
  if (images.length) {
    const lightbox = document.createElement('dialog');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('aria-label', 'Image preview');
    lightbox.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close image preview">×</button><img alt=""><p class="lightbox-caption"></p>';
    document.body.appendChild(lightbox);
    const preview = lightbox.querySelector('img');
    const caption = lightbox.querySelector('.lightbox-caption');
    images.forEach(img => {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', `Enlarge image: ${img.alt || 'website image'}`);
      img.classList.add('zoomable-image');
      const open = () => { preview.src = img.src; preview.alt = img.alt; caption.textContent = img.alt; lightbox.showModal(); };
      img.addEventListener('click', open);
      img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
  }

  // Product-page search filters category list items and their containing sections.
  if (currentFile === 'products.html') {
    const main = document.querySelector('main');
    const sections = [...main.querySelectorAll('section')];
    const searchWrap = document.createElement('section');
    searchWrap.className = 'product-search';
    searchWrap.innerHTML = '<h2>Find a Product or Brand</h2><label for="product-search-input">Search products, categories or brands</label><input id="product-search-input" type="search" placeholder="Try sneakers, bags, Off-White…"><p id="product-search-status" role="status" aria-live="polite">Showing all product information.</p>';
    main.insertBefore(searchWrap, sections[1] || null);
    const input = searchWrap.querySelector('input');
    const status = searchWrap.querySelector('#product-search-status');
    input.addEventListener('input', () => {
      const q = input.value.trim().toLocaleLowerCase(); let count = 0;
      sections.slice(1).forEach(section => {
        let sectionMatches = false;
        section.querySelectorAll('li').forEach(li => { const match = li.textContent.toLocaleLowerCase().includes(q); li.hidden = !match; if (match) { count++; sectionMatches = true; } });
        const paragraphMatch = section.querySelector('p')?.textContent.toLocaleLowerCase().includes(q);
        const headingMatch = section.querySelector('h2')?.textContent.toLocaleLowerCase().includes(q);
        section.hidden = q !== '' && !sectionMatches && !paragraphMatch && !headingMatch;
      });
      status.textContent = q ? `${count} matching list item${count === 1 ? '' : 's'} found.` : 'Showing all product information.';
    });
  }

  // Turn selected content sections into keyboard-operable accordions.
  document.querySelectorAll('main section').forEach((section, index) => {
    const heading = section.querySelector(':scope > h2');
    if (!heading || index === 0 || section.classList.contains('product-search')) return;
    const content = [...section.children].filter(el => el !== heading);
    if (!content.length) return;
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'accordion-toggle'; button.setAttribute('aria-expanded', 'true');
    button.textContent = 'Show/hide section';
    heading.append(' '); heading.appendChild(button);
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.textContent = expanded ? 'Show section' : 'Hide section';
      content.forEach(el => { el.hidden = expanded; });
    });
  });

  // Client-side form validation. This does not transmit form data to a server.
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', event => {
      const phone = form.querySelector('input[type="tel"]');
      if (phone && phone.value.trim() && !/^[+\d()\s.-]{7,20}$/.test(phone.value.trim())) {
        phone.setCustomValidity('Enter a valid telephone number using 7–20 digits or common phone symbols.');
      } else if (phone) phone.setCustomValidity('');
      if (!form.checkValidity()) {
        event.preventDefault(); form.reportValidity(); return;
      }
      // Avoid falsely claiming a local static form has sent a message.
      if (form.getAttribute('action') === '#') {
        event.preventDefault();
        let notice = form.querySelector('.form-demo-notice');
        if (!notice) { notice = document.createElement('p'); notice.className = 'form-demo-notice'; notice.setAttribute('role','status'); form.appendChild(notice); }
        notice.textContent = 'Your details passed the browser checks. This demonstration form is not connected to a submission service, so your message has not been sent.';
      }
    });
    form.querySelectorAll('input, textarea, select').forEach(field => field.addEventListener('input', () => field.setCustomValidity('')));
  });
});
