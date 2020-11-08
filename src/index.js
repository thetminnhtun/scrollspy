function scrollspy(options = {}) {
  const defaults = {
    el: "",
    activeClass: "current",
    offsetTop: 0,
  };

  let settings = { ...defaults, ...options };
  let navLinks;

  if (typeof settings.el !== "string") {
    console.error(`options.el "${options.navElements}" must be string.`);
    return;
  }

  try {
    navLinks = document.querySelector(settings.el).querySelectorAll("a");
  } catch (e) {
    console.error(`options.el "${options.el}" must has child "A" Tag.`);
    return;
  }

  window.addEventListener("scroll", (event) => {
    let fromTop = window.scrollY + settings.offsetTop;

    navLinks.forEach((link) => {
      let section = document.querySelector(link.hash);
      if (section) {
        if (section.offsetTop <= fromTop) {
          navLinks.forEach((el) => {
            el.classList.remove(settings.activeClass);
          });
          link.classList.add(settings.activeClass);
        }
      } else {
        console.error(`The element with ID "${link.hash}" not found.`);
      }
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      let target = document.querySelector(event.target.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - settings.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

export default scrollspy;