/**
 * ლაშა მძინარიშვილი — პერსონალური პორტფოლიო
 * Vanilla JavaScript (ინტერაქტიულობა)
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. მობილური მენიუს მართვა (Mobile Navigation Drawer)
     ========================================================================== */
  const openMenuBtn = document.getElementById('mobile-menu-open-btn');
  const closeMenuBtn = document.getElementById('mobile-menu-close-btn');
  const menuBackdrop = document.getElementById('mobile-menu-backdrop');
  const menuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  /**
   * მენიუს გახსნა
   */
  function openMobileMenu() {
    if (!menuBackdrop || !menuDrawer) return;
    menuBackdrop.classList.add('is-open');
    menuDrawer.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  /**
   * მენიუს დახურვა
   */
  function closeMobileMenu() {
    if (!menuBackdrop || !menuDrawer) return;
    menuBackdrop.classList.remove('is-open');
    menuDrawer.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  // ღილაკების მოვლენების მიბმა
  if (openMenuBtn) openMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMobileMenu);

  // მენიუს ბმულზე დაწკაპუნებისას მენიუს დახურვა
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Escape კლავიშზე დაჭერისას მენიუს დახურვა
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuDrawer && menuDrawer.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  /* ==========================================================================
     2. ელ-ფოსტის ბუფერში კოპირება (Copy to Clipboard)
     ========================================================================== */
  const copyBtn = document.getElementById('copy-email-btn');
  const copyLabel = document.getElementById('copy-label');
  const copyIcon = document.getElementById('copy-icon');
  const emailToCopy = 'mdzinarishvililasha@gmail.com';

  if (copyBtn && copyLabel && copyIcon) {
    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // სარეზერვო მეთოდი (Fallback)
          const tempInput = document.createElement('textarea');
          tempInput.value = emailToCopy;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        // ვიზუალური უკუკავშირი
        copyLabel.textContent = 'დაკოპირდა!';
        copyIcon.textContent = 'check';
        copyBtn.style.backgroundColor = 'var(--color-surface-container-high)';

        setTimeout(() => {
          copyLabel.textContent = 'კოპირება';
          copyIcon.textContent = 'content_copy';
          copyBtn.style.backgroundColor = '';
        }, 2200);
      } catch (err) {
        copyLabel.textContent = 'შეცდომა';
        setTimeout(() => {
          copyLabel.textContent = 'კოპირება';
        }, 2000);
      }
    });
  }

  /* ==========================================================================
     3. აქტიური სექციის გამოკვეთა სქროლისას (Scroll Spy)
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const drawerLinks = document.querySelectorAll('.drawer-nav .drawer-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerOffset = 100;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - headerOffset;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        drawerLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
});
