function getFormvalue() {
  event.preventDefault(); // evita la recarga
  const form = document.getElementById("form1");
  console.log("Nombre: " + form.elements["fname"].value);
  console.log("Apellido: " + form.elements["lname"].value);
}