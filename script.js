document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("hero-title");
  const scrollButton = document.getElementById("scroll-button");
  const aboutContent = document.getElementById("aboutContent");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  if (title) observer.observe(title);
  if (aboutContent) observer.observe(aboutContent);

  if (scrollButton) {
    scrollButton.addEventListener("click", function () {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("site-header");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

 
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
  });

  
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for fade-in animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    observer.observe(card);
  });


  const seeMoreBtn = document.querySelector(".see-more-btn");
  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", function () {
      alert("will work on them soon...");
    });
  }
});
