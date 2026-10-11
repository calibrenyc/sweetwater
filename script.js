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
        {
          title: "Mofonguitos (3)",
          price: "Chicken $14 / Beef $16 / Pork Chicharron $16 / Shrimp $18",
          description: "mini mashed plantain cups filled with your choice of chicken, beef, pork chicharron, or shrimp",
        },
        { title: "Colombian Empanadas (3)", price: "$13", description: "crispy Colombian-style corn empanadas" },
        { title: "Pork Chicharron", price: "$20", description: "crispy Dominican-style pork chicharron order" },
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
        { title: "Lomo Saltado", price: "Chicken $17 / Beef $23", description: "Peruvian stir-fry with onions, tomatoes, fries, and house seasoning" },
        { title: "Mixed Seafood Salad", price: "$25", description: "fresh mixed seafood salad with house seasoning and bright citrus flavor" },
        { title: "Fried Seafood Platter", price: "$30", description: "crispy fried seafood platter served golden and flavorful" },
        { title: "Dominican-Style Pork Chicharron", price: "$20", description: "crispy Dominican-style pork chicharron seasoned and fried until golden" },
        { title: "Sweetwater Wrap", price: "$14", description: "grilled chicken wrap with lettuce, tomato, and house sauce" },
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
        {
          title: "Mofonguitos (3)",
          price: "Pollo $14 / Res $16 / Chicharron $16 / Camaron $18",
          description: "mini canastas de platano majado rellenas con su eleccion de pollo, res, chicharron, o camaron",
        },
        { title: "Empanadas Colombianas (3)", price: "$13", description: "empanadas de maiz estilo colombiano, crujientes y sabrosas" },
        { title: "Chicharron de Cerdo", price: "$20", description: "orden de chicharron de cerdo crujiente al estilo dominicano" },
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
        { title: "Lomo Saltado", price: "Pollo $17 / Res $23", description: "salteado peruano con cebollas, tomates, papas fritas y sazon de la casa" },
        { title: "Ensalada Mixta de Mariscos", price: "$25", description: "ensalada fresca de mariscos mixtos con sazon de la casa y un toque citrico" },
        { title: "Chicharrón de Pescado con Camarones", price: "$30", description: "plato de mariscos fritos crujientes servido dorado y lleno de sabor" },
        { title: "Chicharron de Cerdo al Estilo Dominicano", price: "$20", description: "chicharron de cerdo al estilo dominicano, bien crujiente y dorado" },
        { title: "Wrap Sweetwater", price: "$14", description: "wrap de pollo a la parrilla con lechuga, tomate y salsa de la casa" },
      ],
    },
  ],
};
const currentMenuData = {
  en: [
    { title: "Appetizers", items: [
      { title: "Chicken Wings (8)", price: "$18", description: "crispy chicken wings served golden and flavorful" },
      { title: "Fried Calamari", price: "$16", description: "lightly fried calamari served crisp with house seasoning" },
      { title: "Mofonguitos (3)", price: "Chicken $14 / Beef $16 / Pork Chicharrón $16 / Shrimp $18", description: "mini mashed plantain cups filled with your choice of protein" },
      { title: "Colombian Empanadas (3)", price: "$13", description: "crispy Colombian-style corn empanadas" },
      { title: "Sweetfire Pork Bun", price: "$15", description: "shaved marinated pork with roasted peppers and Sweetfire sauce, served with fries" },
      { title: "Chicken Fingers (10)", price: "$10", description: "fried chicken fingers served with house dipping sauce" },
      { title: "Dominican-Style Pork Chicharrón", price: "$20", description: "crispy pork chicharrón, seasoned and fried until golden" },
    ] },
    { title: "Tallarines", items: [
      { title: "Beef Tallarines", price: "$25", description: "noodles with beef, onion, tomato, green onion, ginger, garlic, red pepper, and cilantro" },
      { title: "Fish Tallarines", price: "$20", description: "noodles with fish, vegetables, ginger, garlic, and house seasoning" },
      { title: "Chicken Tallarines", price: "$20", description: "noodles with chicken, vegetables, ginger, garlic, and house seasoning" },
      { title: "Shrimp Tallarines", price: "$25", description: "noodles with shrimp, vegetables, ginger, garlic, and house seasoning" },
      { title: "Seafood Tallarines", price: "$25", description: "noodles with mixed seafood, vegetables, ginger, garlic, and house seasoning" },
    ] },
    { title: "Stir-Fries", items: [
      { title: "Chicken Saltado", price: "$20", description: "chicken sautéed with onion, tomato, cilantro, and served with white rice" },
      { title: "Fish Saltado", price: "$20", description: "fish sautéed with onion, tomato, cilantro, and served with white rice" },
      { title: "Shrimp Saltado", price: "$25", description: "shrimp sautéed with onion, tomato, cilantro, and served with white rice" },
      { title: "Seafood Saltado", price: "$25", description: "mixed seafood sautéed with onion, tomato, cilantro, and served with white rice" },
    ] },
    { title: "Chaufa", items: [
      { title: "Chicken Chaufa", price: "$20", description: "fried rice with chicken, green onion, egg, soy sauce, ginger, and garlic" },
      { title: "Fish Chaufa", price: "$20", description: "fried rice with fish, green onion, egg, soy sauce, ginger, and garlic" },
      { title: "Shrimp Chaufa", price: "$25", description: "fried rice with shrimp, green onion, egg, soy sauce, ginger, and garlic" },
      { title: "Seafood Chaufa", price: "$25", description: "fried rice with mixed seafood, green onion, egg, soy sauce, ginger, and garlic" },
      { title: "Steak Chaufa", price: "$25", description: "fried rice with steak, green onion, egg, soy sauce, ginger, and garlic" },
    ] },
    { title: "From the Grill", items: [
      { title: "Ribeye", price: "$23", description: "grilled ribeye served with two sides" },
      { title: "Churrasco", price: "$23", description: "grilled churrasco served with two sides" },
      { title: "Grilled Fish", price: "$20", description: "grilled fish served with two sides" },
      { title: "Shrimp (12)", price: "$25", description: "grilled shrimp served with two sides" },
    ] },
    { title: "Seafood", isFull: true, items: [
      { title: "Mixed Seafood Salad", price: "$25", description: "mixed seafood salad with house seasoning and fresh vegetables" },
      { title: "Rice with Seafood", price: "$25", description: "seasoned rice mixed with seafood and house flavors" },
      { title: "Fish Ceviche", price: "$22", description: "fresh fish cured in lime juice with red onion, cilantro, and house seasoning" },
      { title: "Mixed Seafood Ceviche", price: "$25", description: "mixed seafood cured in lime juice with red onion, cilantro, and house seasoning" },
      { title: "Shrimp Ceviche", price: "$25", description: "shrimp marinated in lime juice with red onion, cilantro, and house seasoning" },
      { title: "Octopus Ceviche", price: "$25", description: "octopus marinated in lime juice with red onion, cilantro, and house seasoning" },
      { title: "Spicy Shrimp (10)", price: "$25", description: "shrimp in spicy house sauce, served with sides" },
      { title: "Spicy Shrimp Sauce", price: "$30", description: "shrimp in spicy shrimp sauce, served with sides" },
      { title: "Spicy Seafood", price: "$25", description: "mixed seafood in spicy house sauce" },
      { title: "Spicy Calamari", price: "$16", description: "calamari in spicy house sauce" },
      { title: "Spicy Fish in Seafood Sauce", price: "$30", description: "fish in spicy seafood sauce" },
      { title: "Grilled Seafood", price: "$25", description: "grilled seafood served with your choice of sides" },
      { title: "Grilled Shrimp", price: "$25", description: "grilled shrimp served with your choice of sides" },
      { title: "Grilled Octopus", price: "$25", description: "grilled octopus served with your choice of sides" },
      { title: "Grilled Mixed Seafood", price: "$25", description: "mixed grilled seafood served with your choice of sides" },
      { title: "Small Jalea", price: "$26", description: "fried seafood platter with fish, calamari, shrimp, and marinated seafood" },
      { title: "Family Jalea", price: "$40", description: "large fried seafood platter for sharing" },
      { title: "Crispy Fried Calamari", price: "$16", description: "fried calamari served golden and crisp" },
      { title: "Crispy Fried Shrimp", price: "$25", description: "fried shrimp served golden and crisp" },
    ] },
    { title: "Tacos & Sandwiches", items: [
      { title: "Chicken Tacos (3)", price: "$13", description: "three chicken tacos with house toppings" },
      { title: "Beef Tacos (3)", price: "$15", description: "three beef tacos with house toppings" },
      { title: "Chicken Sandwich", price: "$15", description: "house sandwich served with fries" },
      { title: "Chicharrón Sandwich", price: "$15", description: "house sandwich served with fries" },
      { title: "Steak Sandwich", price: "$15", description: "house sandwich served with fries" },
      { title: "Pork Sandwich", price: "$15", description: "house sandwich served with fries" },
    ] },
    { title: "Sharing Platters", items: [
      { title: "Sweetwater Platter", price: "$40 / $50 / $60", description: "Sweetwater grilled chicken, grilled beef, 4 chicken wings, longaniza, and Colombian chorizo" },
      { title: "Pork Platter", price: "$40 / $50 / $60", description: "pork picadera platter for sharing" },
      { title: "Mixed Picadera", price: "Ask Server", description: "chicharrón, chicken, mitas, and chorizo" },
    ] },
    { title: "Sides", items: [
      { title: "Rice", price: "$7", description: "steamed white rice" }, { title: "Salad", price: "$7", description: "fresh house salad" },
      { title: "French Fries", price: "$7", description: "golden-cut fries" }, { title: "Fried Green Plantains", price: "$7", description: "crispy tostones" },
      { title: "Yuca", price: "$7", description: "boiled or fried yuca" }, { title: "Sautéed Potatoes", price: "$7", description: "house-style sautéed potatoes" },
      { title: "Beans", price: "$7", description: "house beans" },
    ] },
  ],
  es: [
    { title: "Aperitivos", items: [
      { title: "Alitas de Pollo (8)", price: "$18", description: "alitas de pollo crujientes, doradas y llenas de sabor" },
      { title: "Calamares Fritos", price: "$16", description: "calamares ligeramente fritos, crujientes y sazonados al estilo de la casa" },
      { title: "Mofonguitos (3)", price: "Pollo $14 / Res $16 / Chicharrón $16 / Camarón $18", description: "mini canastas de plátano majado rellenas con su elección de proteína" },
      { title: "Empanadas Colombianas (3)", price: "$13", description: "empanadas de maíz estilo colombiano, crujientes y sabrosas" },
      { title: "Pan de Cerdo Sweetfire", price: "$15", description: "cerdo marinado en lascas con pimientos asados y salsa Sweetfire, servido con papas fritas" },
      { title: "Chicken Fingers (10)", price: "$10", description: "deditos de pollo fritos servidos con salsa de la casa" },
      { title: "Chicharrón de Cerdo", price: "$20", description: "chicharrón de cerdo al estilo dominicano, dorado y crujiente" },
    ] },
    { title: "Tallarines", items: [
      { title: "Tallarines de Carne", price: "$25", description: "con cebolla, tomate, cebollín, jengibre, ajo, pimiento rojo y cilantro" },
      { title: "Tallarines de Pescado", price: "$20", description: "con pescado, vegetales, jengibre, ajo y sazón de la casa" },
      { title: "Tallarines de Pollo", price: "$20", description: "con pollo, vegetales, jengibre, ajo y sazón de la casa" },
      { title: "Tallarines de Camarones", price: "$25", description: "con camarones, vegetales, jengibre, ajo y sazón de la casa" },
      { title: "Tallarines de Mariscos", price: "$25", description: "con mariscos mixtos, vegetales, jengibre, ajo y sazón de la casa" },
    ] },
    { title: "Saltados", items: [
      { title: "Saltado de Pollo", price: "$20", description: "pollo salteado con cebolla, tomate, cilantro y arroz blanco" },
      { title: "Saltado de Pescado", price: "$20", description: "pescado salteado con cebolla, tomate, cilantro y arroz blanco" },
      { title: "Saltado de Camarones", price: "$25", description: "camarones salteados con cebolla, tomate, cilantro y arroz blanco" },
      { title: "Saltado de Mariscos", price: "$25", description: "mariscos salteados con cebolla, tomate, cilantro y arroz blanco" },
    ] },
    { title: "Chaufa", items: [
      { title: "Chaufa de Pollo", price: "$20", description: "arroz frito con pollo, cebolla china, huevo, sillao, jengibre y ajo" },
      { title: "Chaufa de Pescado", price: "$20", description: "arroz frito con pescado, cebolla china, huevo, sillao, jengibre y ajo" },
      { title: "Chaufa de Camarones", price: "$25", description: "arroz frito con camarones, cebolla china, huevo, sillao, jengibre y ajo" },
      { title: "Chaufa de Mariscos", price: "$25", description: "arroz frito con mariscos, cebolla china, huevo, sillao, jengibre y ajo" },
      { title: "Chaufa de Bistec", price: "$25", description: "arroz frito con bistec, cebolla china, huevo, sillao, jengibre y ajo" },
    ] },
    { title: "A la Plancha", items: [
      { title: "Ribeye", price: "$23", description: "a la plancha servido con dos guarniciones" }, { title: "Churrasco", price: "$23", description: "a la plancha servido con dos guarniciones" },
      { title: "Pescado a la Plancha", price: "$20", description: "servido con dos guarniciones" }, { title: "Camarones (12)", price: "$25", description: "a la plancha servidos con dos guarniciones" },
    ] },
    { title: "Mariscos", isFull: true, items: [
      { title: "Ensalada Mixta de Mariscos", price: "$25", description: "ensalada mixta de mariscos con sazón de la casa y vegetales frescos" },
      { title: "Arroz con Mariscos", price: "$25", description: "arroz sazonado con mariscos y sabores de la casa" },
      { title: "Ceviche de Pescado", price: "$22", description: "pescado fresco marinado en limón con cebolla morada, cilantro y sazón de la casa" },
      { title: "Ceviche Mixto", price: "$25", description: "mariscos mixtos marinados en limón con cebolla morada, cilantro y sazón de la casa" },
      { title: "Ceviche de Camarones", price: "$25", description: "camarones marinados en limón con cebolla morada, cilantro y sazón de la casa" },
      { title: "Ceviche de Pulpo", price: "$25", description: "pulpo marinado en limón con cebolla morada, cilantro y sazón de la casa" },
      { title: "Picante de Camarones (10)", price: "$25", description: "camarones en salsa picante de la casa, servido con acompañantes" },
      { title: "Picante de Salsa de Camarón", price: "$30", description: "camarones en salsa picante de camarón, servido con acompañantes" },
      { title: "Picante de Mariscos", price: "$25", description: "mariscos mixtos en salsa picante de la casa" },
      { title: "Picante de Calamar", price: "$16", description: "calamar en salsa picante de la casa" },
      { title: "Picante de Pescado en Salsa de Marisco", price: "$30", description: "pescado en salsa picante de mariscos" },
      { title: "Mariscos a la Plancha", price: "$25", description: "mariscos a la plancha con acompañantes" },
      { title: "Camarones a la Plancha", price: "$25", description: "camarones a la plancha con acompañantes" },
      { title: "Pulpo a la Plancha", price: "$25", description: "pulpo a la plancha con acompañantes" },
      { title: "Mixto a la Plancha", price: "$25", description: "mariscos mixtos a la plancha con acompañantes" },
      { title: "Jalea Pequeña", price: "$26", description: "mariscos fritos con pescado, calamar, camarón y mariscos marinados" },
      { title: "Jalea Familiar", price: "$40", description: "jalea grande familiar para compartir" },
      { title: "Chicharrón de Calamar", price: "$16", description: "calamar frito estilo chicharrón, dorado y crujiente" },
      { title: "Chicharrón de Camarón", price: "$25", description: "camarón frito estilo chicharrón, dorado y crujiente" },
    ] },
    { title: "Tacos y Sandwiches", items: [
      { title: "Tacos de Pollo (3)", price: "$13", description: "tres tacos de pollo con toppings de la casa" }, { title: "Tacos de Res (3)", price: "$15", description: "tres tacos de res con toppings de la casa" },
      { title: "Sandwich de Pollo", price: "$15", description: "sandwich de la casa servido con papas fritas" }, { title: "Sandwich de Chicharrón", price: "$15", description: "sandwich de la casa servido con papas fritas" },
      { title: "Sandwich de Bistec", price: "$15", description: "sandwich de la casa servido con papas fritas" }, { title: "Sandwich de Cerdo", price: "$15", description: "sandwich de la casa servido con papas fritas" },
    ] },
    { title: "Picaderas", items: [
      { title: "Plato Sweetwater", price: "$40 / $50 / $60", description: "pollo a la parrilla, carne a la parrilla, 4 alitas, longaniza y chorizo colombiano" },
      { title: "Picadera de Carnita de Cerdo", price: "$40 / $50 / $60", description: "picadera de cerdo para compartir" },
      { title: "Picadera Mixta", price: "Pregunte", description: "chicharrón, pollo, mitas y chorizo" },
    ] },
    { title: "Acompañantes", items: [
      { title: "Arroz", price: "$7", description: "arroz blanco al vapor" }, { title: "Ensalada", price: "$7", description: "ensalada fresca de la casa" },
      { title: "Papas Fritas", price: "$7", description: "papas fritas doradas" }, { title: "Tostones", price: "$7", description: "plátanos verdes fritos y crujientes" },
      { title: "Yuca", price: "$7", description: "yuca hervida o frita" }, { title: "Papa Salteada", price: "$7", description: "papa salteada estilo de la casa" },
      { title: "Frijoles", price: "$7", description: "frijoles de la casa" },
    ] },
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
    title: "Mofonguitos",
    copy: "Mini mashed plantain cups filled with your choice of protein.",
  },
  {
    src: "assets/slideshow/slideshow-9.png",
    title: "Ceviche bowl",
    copy: "Fresh ceviche served bright, crisp, and ready to share.",
  },
];

const menuContainer = document.getElementById("menu-container");
const slideshow = document.querySelector(".slideshow");
const slideshowViewport = document.getElementById("slideshow-viewport");
const slideshowDots = document.getElementById("slideshow-dots");
const slideshowTitle = document.getElementById("slideshow-title");
const slideshowCopy = document.getElementById("slideshow-copy");
const slideshowPrev = document.querySelector(".slideshow-arrow-prev");
const slideshowNext = document.querySelector(".slideshow-arrow-next");
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
  menuContainer.innerHTML = currentMenuData[lang]
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
    dot.addEventListener("pointerenter", () => setSlide(Number(dot.dataset.slideDot)));
    dot.addEventListener("focus", () => setSlide(Number(dot.dataset.slideDot)));
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
  if (window.matchMedia("(max-width: 640px)").matches) {
    stopSlideTimer();
    return;
  }
  if (slideTimer) {
    window.clearInterval(slideTimer);
  }
  slideTimer = window.setInterval(nextSlide, 4800);
}

function stopSlideTimer() {
  if (!slideTimer) return;
  window.clearInterval(slideTimer);
  slideTimer = null;
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
    if (window.matchMedia("(max-width: 640px)").matches) {
      scenes[index].scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
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
  slideshowPrev.addEventListener("click", () => setSlide(slideIndex - 1));
  slideshowNext.addEventListener("click", () => setSlide(slideIndex + 1));
  slideshow.addEventListener("pointerenter", stopSlideTimer);
  slideshow.addEventListener("pointerleave", startSlideTimer);
  slideshow.addEventListener("focusin", stopSlideTimer);
  slideshow.addEventListener("focusout", (event) => {
    if (!slideshow.contains(event.relatedTarget)) startSlideTimer();
  });
  window.addEventListener("resize", startSlideTimer);

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
