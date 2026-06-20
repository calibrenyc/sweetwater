const menuData = {
  en: [
    {
      title: "Appetizers",
      items: [
        { title: "Chicken Wings (8)", price: "$18", description: "crispy chicken wings served golden and flavorful" },
        { title: "Fried Calamari", price: "$20", description: "lightly fried calamari served crisp with house seasoning" },
        {
          title: "Nachos",
          price: "Chicken $16 / Beef $18",
          description: "tortilla chips topped with cheese, your choice of chicken or beef, and house toppings",
        },
        { title: "Personal Jalea", price: "$25", description: "personal-size Peruvian fried seafood platter" },
        {
          title: "Mofonguitos (3)",
          price: "Chicken $14 / Beef $16 / Shrimp $18",
          description: "mini mashed plantain cups filled with your choice of chicken, beef, or shrimp",
        },
        { title: "Colombian Empanadas (3)", price: "$13", description: "crispy Colombian-style corn empanadas" },
        { title: "Pork Chicharrón ", price: "$20", description: "crispy Dominican-style pork chicharrón order" },
      ],
    },
    {
      title: "Sides",
      items: [
        { title: "Rice", price: "$7", description: "steamed white rice" },
        { title: "Salad", price: "$7", description: "fresh house salad" },
        { title: "French Fries", price: "$7", description: "golden-cut fries" },
        { title: "Fried Green Plantains", price: "$7", description: "crispy tostones" },
      ],
    },
    {
      title: "Sweetwater Platter",
      isFull: true,
      items: [
        {
          title: "$40 / $50 / $60",
          price: "",
          description: "Sweetwater grilled chicken, grilled beef, 4 chicken wings, longaniza, and Colombian chorizo",
        },
      ],
    },
    {
      title: "Entrees",
      items: [
        { title: "Mixed Peruvian Ceviche", price: "$24", description: "fresh mixed seafood cured in lime with Peruvian seasoning" },
        { title: "Shrimp Ceviche", price: "$24", description: "shrimp cured in lime with onions, cilantro, and house seasoning" },
        { title: "Fish Ceviche", price: "$20", description: "fresh fish cured in lime with onions, cilantro, and Peruvian seasoning" },
        { title: "Steak with Onions", price: "$23", description: "steak topped with sauteed onions and house seasoning" },
        { title: "Chicken Quesadilla", price: "$16", description: "grilled flour tortilla filled with chicken and melted cheese" },
        { title: "Beef Quesadilla", price: "$18", description: "grilled flour tortilla filled with beef and melted cheese" },
        { title: "Tacos (3)", price: "$13", description: "three chicken tacos with house toppings" },
        { title: "Beef Tacos (3)", price: "$15", description: "three beef tacos with house toppings" },
        { title: "Pesto Pasta (Tallarin Verde)", price: "Chicken $17 / Beef $20", description: "Peruvian-style green pesto pasta with your choice of chicken or beef" },
        { title: "Penne a la Vodka", price: "Chicken $17 / Shrimp $22", description: "penne pasta tossed in creamy vodka sauce with your choice of protein" },
        { title: "Lomo Saltado", price: "Chicken $17 / Beef $23", description: "Peruvian stir-fry with onions, tomatoes, fries, and house seasoning" },
        { title: "Family Jalea", price: "$35", description: "family-size Peruvian fried seafood platter" },
      ],
    },
  ],
  es: [
    {
      title: "Aperitivos",
      items: [
        { title: "Alitas de Pollo (8)", price: "$18", description: "alitas de pollo crujientes, doradas y llenas de sabor" },
        { title: "Calamares Fritos", price: "$20", description: "calamares ligeramente fritos, crujientes y sazonados al estilo de la casa" },
        {
          title: "Nachos",
          price: "Pollo $16 / Res $18",
          description: "totopos con queso, su eleccion de pollo o res y toppings de la casa",
        },
        { title: "Jalea Personal", price: "$25", description: "surtido personal de mariscos fritos al estilo peruano" },
        {
          title: "Mofonguitos (3)",
          price: "Pollo $14 / Res $16 / Camaron $18",
          description: "mini canastas de platano majado rellenas con su eleccion de pollo, res o camaron",
        },
        { title: "Empanadas Colombianas (3)", price: "$13", description: "empanadas de maiz estilo colombiano, crujientes y sabrosas" },
        { title: "Chicharrón de Cerdo", price: "$20", description: "orden de chicharrón de cerdo crujiente alestilo dominicano" },
      ],
    },
    {
      title: "Acompanantes",
      items: [
        { title: "Arroz", price: "$7", description: "arroz blanco al vapor" },
        { title: "Ensalada", price: "$7", description: "ensalada fresca de la casa" },
        { title: "Papas Fritas", price: "$7", description: "papas fritas doradas" },
        { title: "Tostones", price: "$7", description: "platanos verdes fritos y crujientes" },
      ],
    },
    {
      title: "Plato Sweetwater",
      isFull: true,
      items: [
        {
          title: "$40 / $50 / $60",
          price: "",
          description: "pollo a la parrilla Sweetwater, carne a la parrilla, 4 alitas de pollo, longaniza y chorizo colombiano",
        },
      ],
    },
    {
      title: "Platos Fuertes",
      items: [
        { title: "Ceviche Peruano Mixto", price: "$24", description: "mariscos frescos curados en limon con sazon peruana" },
        { title: "Ceviche de Camaron", price: "$24", description: "camarones curados en limon con cebolla, cilantro y sazon de la casa" },
        { title: "Ceviche de Pescado", price: "$20", description: "pescado fresco curado en limon con cebolla, cilantro y sazon peruana" },
        { title: "Bistec Encebollado", price: "$23", description: "bistec cubierto con cebollas salteadas y sazon de la casa" },
        { title: "Quesadilla de Pollo", price: "$16", description: "tortilla de harina a la plancha rellena de pollo y queso derretido" },
        { title: "Quesadilla de Res", price: "$18", description: "tortilla de harina a la plancha rellena de res y queso derretido" },
        { title: "Tacos de Pollo (3)", price: "$13", description: "tres tacos de pollo con toppings de la casa" },
        { title: "Tacos de Res (3)", price: "$15", description: "tres tacos de res con toppings de la casa" },
        { title: "Pasta al Pesto (Tallarin Verde)", price: "Pollo $17 / Res $20", description: "pasta al pesto estilo peruano con su eleccion de pollo o res" },
        { title: "Penne a la Vodka", price: "Pollo $17 / Camaron $22", description: "pasta penne en salsa cremosa de vodka con su eleccion de proteina" },
        { title: "Lomo Saltado", price: "Pollo $17 / Res $23", description: "salteado peruano con cebollas, tomates, papas fritas y sazon de la casa" },
        { title: "Jalea Familiar", price: "$35", description: "surtido familiar de mariscos fritos al estilo peruano" },
      ],
    },
  ],
};

const slideshowData = [
  {
    src: "assets/slideshow/slideshow-1.png",
    title: "Bar and bottles",
    copy: "The main bar glowing under chandeliers and lined with a full back bar.",
  },
  {
    src: "assets/slideshow/slideshow-2.png",
    title: "Champagne service",
    copy: "A chilled bottle presented the way a celebration should feel.",
  },
  {
    src: "assets/slideshow/slideshow-3.png",
    title: "Bottle lineup",
    copy: "Premium rum and whiskey on display in the bottle room.",
  },
  {
    src: "assets/slideshow/slideshow-4.png",
    title: "Signature cocktail",
    copy: "A bright house drink with a polished bar backdrop.",
  },
  {
    src: "assets/slideshow/slideshow-5.png",
    title: "Bucket service",
    copy: "Ice-cold Heineken bottles ready for a round with friends.",
  },
  {
    src: "assets/slideshow/slideshow-6.png",
    title: "Pool tables",
    copy: "Blue felt tables set up for a night of friendly competition.",
  },
  {
    src: "assets/slideshow/slideshow-7.png",
    title: "Patio nights",
    copy: "String lights and outdoor seating for an easygoing night out.",
  },
  {
    src: "assets/slideshow/slideshow-8.png",
    title: "Jalea bites",
    copy: "Golden seafood bites plated for a bold, shareable appetizer.",
  },
  {
    src: "assets/slideshow/slideshow-9.png",
    title: "Ceviche bowl",
    copy: "Fresh ceviche served bright, crisp, and ready to share.",
  },
];

const menuContainer = document.getElementById("menu-container");
const slideshowViewport = document.getElementById("slideshow-viewport");
const slideshowDots = document.getElementById("slideshow-dots");
const slideshowTitle = document.getElementById("slideshow-title");
const slideshowCopy = document.getElementById("slideshow-copy");
const scenes = [...document.querySelectorAll(".scene")];
const sceneIndexById = new Map(scenes.map((scene, index) => [scene.id, index]));
const langButtons = [...document.querySelectorAll(".lang-btn")];
const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
const jumpButtons = [...document.querySelectorAll("[data-jump]")];

let slideIndex = 0;
let slideTimer = null;
let activeSceneIndex = 0;
let sceneTransitioning = false;
const sceneFadeMs = 320;

function renderMenu(lang) {
  menuContainer.innerHTML = menuData[lang]
    .map((section) => {
      const items = section.items
        .map(
          (item) => `
            <article class="menu-item">
              <div class="menu-item-head">
                <div class="menu-item-title">${item.title}</div>
                ${item.price ? `<div class="menu-item-price">${item.price}</div>` : ""}
              </div>
              <p class="menu-item-desc">${item.description}</p>
            </article>
          `
        )
        .join("");

      return `
        <section class="menu-section${section.isFull ? " is-full" : ""}">
          <h3>${section.title}</h3>
          <div class="menu-items">${items}</div>
        </section>
      `;
    })
    .join("");
}

function setLanguage(lang) {
  const nextLang = lang === "es" ? "es" : "en";
  document.documentElement.lang = nextLang;
  renderMenu(nextLang);

  langButtons.forEach((button) => {
    const active = button.dataset.lang === nextLang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function renderSlideshow() {
  slideshowViewport.innerHTML = slideshowData
    .map(
      (slide, index) => `
        <figure class="slideshow-slide${index === 0 ? " is-active" : ""}" data-slide="${index}">
          <img src="${slide.src}" alt="${slide.title}" loading="${index === 0 ? "eager" : "lazy"}" />
        </figure>
      `
    )
    .join("");

  slideshowDots.innerHTML = slideshowData
    .map(
      (_, index) => `
        <button class="slideshow-dot${index === 0 ? " is-active" : ""}" type="button" aria-label="Go to slide ${index + 1}" data-slide-dot="${index}"></button>
      `
    )
    .join("");

  slideshowDots.querySelectorAll("[data-slide-dot]").forEach((dot) => {
    dot.addEventListener("click", () => setSlide(Number(dot.dataset.slideDot)));
  });

  updateSlideContent();
}

function updateSlideContent() {
  const slides = [...slideshowViewport.querySelectorAll(".slideshow-slide")];
  const dots = [...slideshowDots.querySelectorAll(".slideshow-dot")];

  slides.forEach((slide, index) => slide.classList.toggle("is-active", index === slideIndex));
  dots.forEach((dot, index) => dot.classList.toggle("is-active", index === slideIndex));
  slideshowTitle.textContent = slideshowData[slideIndex].title;
  slideshowCopy.textContent = slideshowData[slideIndex].copy;
}

function setSlide(index) {
  slideIndex = (index + slideshowData.length) % slideshowData.length;
  updateSlideContent();
}

function nextSlide() {
  setSlide(slideIndex + 1);
}

function startSlideTimer() {
  if (slideTimer) {
    window.clearInterval(slideTimer);
  }
  slideTimer = window.setInterval(nextSlide, 4800);
}

function setActiveScene(index) {
  scenes.forEach((scene, sceneIndex) => {
    const active = sceneIndex === index;
    scene.classList.toggle("is-active", active);
    scene.classList.remove("is-exiting");
    scene.setAttribute("aria-hidden", String(!active));
  });
  activeSceneIndex = index;
}

function goToScene(index) {
  if (sceneTransitioning || index === activeSceneIndex) return;
  if (index < 0 || index >= scenes.length) return;

  const currentScene = scenes[activeSceneIndex];
  const nextScene = scenes[index];
  sceneTransitioning = true;

  currentScene.classList.add("is-exiting");
  currentScene.classList.remove("is-active");
  currentScene.setAttribute("aria-hidden", "true");

  window.setTimeout(() => {
    currentScene.classList.remove("is-exiting");
    nextScene.classList.add("is-active");
    nextScene.setAttribute("aria-hidden", "false");
    activeSceneIndex = index;

    window.setTimeout(() => {
      sceneTransitioning = false;
    }, sceneFadeMs);
  }, sceneFadeMs);
}

function goToSceneById(id) {
  const index = sceneIndexById.get(id);
  if (typeof index === "number") {
    goToScene(index);
  }
}

function canScrollMenu(direction) {
  const menuScroll = scenes[activeSceneIndex]?.querySelector(".menu-scroll");
  if (!menuScroll) return false;

  if (direction > 0) {
    return menuScroll.scrollTop + menuScroll.clientHeight < menuScroll.scrollHeight - 1;
  }

  if (direction < 0) {
    return menuScroll.scrollTop > 0;
  }

  return false;
}

function bindEvents() {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || !hash.startsWith("#")) return;
      event.preventDefault();
      goToSceneById(hash.slice(1));
    });
  });

  jumpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const jump = button.dataset.jump;
      if (jump === "1") goToSceneById("atmosphere");
      if (jump === "2") goToSceneById("menu");
    });
  });

  window.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) < 5) return;

      const direction = Math.sign(event.deltaY);
      if (sceneTransitioning) {
        event.preventDefault();
        return;
      }

      if (scenes[activeSceneIndex]?.id === "menu" && canScrollMenu(direction)) {
        return;
      }

      if (direction > 0 && activeSceneIndex < scenes.length - 1) {
        event.preventDefault();
        goToScene(activeSceneIndex + 1);
        return;
      }

      if (direction < 0) {
        if (activeSceneIndex > 0) {
          event.preventDefault();
          goToScene(activeSceneIndex - 1);
        }
        event.preventDefault();
      }
    },
    { passive: false }
  );
}

function init() {
  renderSlideshow();
  setLanguage("en");
  bindEvents();
  startSlideTimer();
  setActiveScene(0);
}

init();
