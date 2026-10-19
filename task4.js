// 1. Seleccionar la sección con id container
const contenedor = document.getElementById("container");
console.log("Sección:", contenedor);

// 2. Seleccionar todos los li con clase "second"
const segundos = document.querySelectorAll("li.second");
console.log("Elementos second:", segundos);

// 3. Seleccionar el li con clase "third" solo dentro del ol
const tercero = document.querySelector("ol li.third");
console.log("Third dentro del ol:", tercero);

// 4. Agregar y quitar la clase "main" al div footer
const footer = document.querySelector("div.footer");
footer.classList.add("main");
console.log("Footer con main:", footer.className);
footer.classList.remove("main");
console.log("Footer sin main:", footer.className);

// 5. Crear un li nuevo con el texto "cuatro" y agregarlo al ul
const nuevoLi = document.createElement("li");
nuevoLi.textContent = "cuatro";
document.querySelector("ul").appendChild(nuevoLi);

// 6. Dar el texto "¡Hola!" a la sección container
// (va al final porque textContent borra todo lo que hay dentro, incluidas las listas)
contenedor.textContent = "¡Hola!";