/* ============================================================
   YATHESH V PORTFOLIO JAVASCRIPT
   ============================================================ */


/* ============================================================
   DOM ELEMENTS
   ============================================================ */

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");

const navItems =
  document.querySelectorAll(".nav-link");

const backToTop =
  document.getElementById("backToTop");

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");

const year =
  document.getElementById("year");


/* ============================================================
   COPYRIGHT YEAR
   ============================================================ */

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* ============================================================
   MOBILE MENU
   ============================================================ */

if (menuToggle && navLinks) {

  menuToggle.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle("open");

    }
  );

}


/* ============================================================
   CLOSE MOBILE MENU AFTER CLICK
   ============================================================ */

navItems.forEach(
  (item) => {

    item.addEventListener(
      "click",
      () => {

        navLinks.classList.remove("open");

      }
    );

  }
);


/* ============================================================
   ACTIVE NAVIGATION
   ============================================================ */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );


function updateActiveNav() {

  let currentSection = "";

  const scrollPosition =
    window.scrollY + 150;


  sections.forEach(
    (section) => {

      const sectionTop =
        section.offsetTop;

      const sectionHeight =
        section.offsetHeight;


      if (
        scrollPosition >= sectionTop &&
        scrollPosition <
          sectionTop + sectionHeight
      ) {

        currentSection =
          section.getAttribute("id");

      }

    }
  );


  navItems.forEach(
    (link) => {

      link.classList.remove("active");


      const href =
        link.getAttribute("href");


      if (
        href === `#${currentSection}`
      ) {

        link.classList.add("active");

      }

    }
  );

}


window.addEventListener(
  "scroll",
  updateActiveNav
);


updateActiveNav();


/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 500) {

      backToTop.classList.add("show");

    } else {

      backToTop.classList.remove("show");

    }

  }
);


if (backToTop) {

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    }
  );

}


/* ============================================================
   CONTACT FORM
   ============================================================ */

if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const name =
        document.getElementById("name").value.trim();

      const email =
        document.getElementById("email").value.trim();

      const subject =
        document.getElementById("subject").value.trim();

      const message =
        document.getElementById("message").value.trim();


      /* Validation */

      if (!name) {

        showFormMessage(
          "Please enter your name.",
          "error"
        );

        return;

      }


      if (!validateEmail(email)) {

        showFormMessage(
          "Please enter a valid email address.",
          "error"
        );

        return;

      }


      if (!subject) {

        showFormMessage(
          "Please enter a subject.",
          "error"
        );

        return;

      }


      if (!message) {

        showFormMessage(
          "Please enter your message.",
          "error"
        );

        return;

      }


      /*
       * Front-end only.
       *
       * Opens the user's email application
       * with the entered details.
       */

      const mailSubject =
        encodeURIComponent(subject);


      const mailBody =
        encodeURIComponent(

          `Name: ${name}\n\n` +

          `Email: ${email}\n\n` +

          `Message:\n${message}`

        );


      const mailtoLink =
        `mailto:yatheshv7299@gmail.com` +
        `?subject=${mailSubject}` +
        `&body=${mailBody}`;


      window.location.href =
        mailtoLink;


      showFormMessage(
        "Opening your email application...",
        "success"
      );


      contactForm.reset();

    }
  );

}


/* ============================================================
   EMAIL VALIDATION
   ============================================================ */

function validateEmail(email) {

  const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);

}


/* ============================================================
   FORM MESSAGE
   ============================================================ */

function showFormMessage(
  message,
  type
) {

  if (!formMessage) {
    return;
  }


  formMessage.textContent =
    message;


  if (type === "error") {

    formMessage.style.color =
      "#ef4444";

  } else {

    formMessage.style.color =
      "#22c55e";

  }


  setTimeout(
    () => {

      formMessage.textContent =
        "";

    },
    5000
  );

}


/* ============================================================
   SCROLL REVEAL
   ============================================================ */

const revealElements =
  document.querySelectorAll(
    ".skill-card, .project-card, .cert-card, .resume-card, .timeline-card, .contact-form, .contact-info"
  );


const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(
        (entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(
  (element) => {

    element.classList.add(
      "reveal"
    );

    revealObserver.observe(
      element
    );

  }
);


/* ============================================================
   KEYBOARD ACCESSIBILITY
   ============================================================ */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      navLinks.classList.remove(
        "open"
      );

    }

  }
);


/* ============================================================
   PREVENT EMPTY ANCHOR JUMP
   ============================================================ */

document
  .querySelectorAll('a[href="#"]')
  .forEach(
    (link) => {

      link.addEventListener(
        "click",
        (event) => {

          event.preventDefault();

        }
      );

    }
  );


/* ============================================================
   CONSOLE MESSAGE
   ============================================================ */

console.log(
  "%cYathesh V — Software Developer",
  "color:#38bdf8;font-size:18px;font-weight:bold;"
);

console.log(
  "Portfolio loaded successfully."
);