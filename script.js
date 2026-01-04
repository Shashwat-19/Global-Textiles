document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Sticky Header
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('py-2');
      header.classList.remove('py-4');
    } else {
      header.classList.remove('py-2');
      header.classList.add('py-4');
    }
  });

  // Reveal on Scroll Animation
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));

  // Gallery Modal Logic
  const modal = document.getElementById('gallery-modal');
  const modalContent = document.getElementById('modal-content');
  const closeModalButton = document.getElementById('modal-close');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const { type, src } = item.dataset;

      modalContent.innerHTML = '';

      if (type === 'image') {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'max-w-full max-h-[90vh] object-contain';
        modalContent.appendChild(img);
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modalContent.innerHTML = '';
  };

  closeModalButton.addEventListener('click', closeModal);
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal();
    }
  });
});

