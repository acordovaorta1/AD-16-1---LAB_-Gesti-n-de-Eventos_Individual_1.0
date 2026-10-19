function infoEnlaces() {
  const enlaces = document.links;
  alert(
    "Número de enlaces: " + enlaces.length + "\n" +
    "Primer enlace: " + enlaces[0].href + "\n" +
    "Último enlace: " + enlaces[enlaces.length - 1].href
  );
}