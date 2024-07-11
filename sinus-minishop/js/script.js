// Code here!

// Exercise 1
let art1H3Ref = document.querySelector(".art-1 h3");
art1H3Ref.textContent = "Potato";

// Exercise 2
let navA1Ref = document.querySelector("nav a:nth-of-type(1)");
navA1Ref.textContent = "Start";

// Exercise 3
let navA3Ref = document.querySelector("nav a:nth-of-type(3)");
navA3Ref.textContent = "Mail Us";

// Exercise 4

let art2PRef = document.querySelector(".art-2 p");
art2PRef.textContent = "this is a new description, hehe";

// Exercise 5
let art1ButtonRef = document.querySelector(".art-1 button");
art1ButtonRef.style.backgroundColor = "rgb(244, 182, 10)";
art1ButtonRef.style.color = "black";

// Exercise 6
art1FigureRef = document.querySelector(".art-1 figure");
art1FigureRef.style.backgroundColor = "tomato";

// Exercise 7
pAddressRef = document.querySelector(".address");
pAddressRef.innerHTML = "Sinus SKATE <br> Vägvägen 11 <br> 777 77 Pipenäs";

// Exercise 8
let pRefs = document.querySelectorAll("p");
pRefs.forEach((pRef) => {
  pRef.style.color = "teal";
});

// Exercise 9
let buttonRefs = document.querySelectorAll("button");
buttonRefs.forEach((buttonRef) => {
  buttonRef.textContent = "add to cart";
});

// Exercise 10
navA1Ref.classList.add("active");

// Exercise 11
let logoRef = document.querySelector("#logo");
logoRef.classList.remove("logo");

// Exercise 12
let navRef = document.querySelector("nav");
let navA4Ref = document.createElement("a");
navA4Ref.innerText = "Search";
navRef.appendChild(navA4Ref);

// Exercise 13
let mainRef = document.querySelector("main");
let art4Ref = document.createElement("article");
art4Ref.classList.add("art-4");

mainRef.appendChild(art4Ref);
art4Ref.insertAdjacentHTML(
  "beforeend",
  '<figure><img src="img/hoodie-forrest.png" alt="hoodie" /></figure><h2>Sinus Hoodie</h2><h3>Forrest</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p><button>buy</button>'
);

// Exercise 14
logoRef.addEventListener("click", (e) => {
  console.log("found you!!!");
});

// Exercise 15
let articleh3Refs = document.querySelectorAll("article>h3");
let mainArticleRefs = document.querySelectorAll("main>article");
mainArticleRefs.forEach((article, index) => {
  article.addEventListener("click", (e) => {
    console.log(articleh3Refs[index].innerText);
  });
});
