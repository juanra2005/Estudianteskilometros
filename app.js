// const age = document.getElementById("age");
// const km = document.getElementById("km");
// const result = document.getElementById("result");


for (N = 1; N <= 15; N++) {

  var edad;

  edad = parseInt(prompt("Estudiante " + N + " ingrese su edad:"));

  var km;
  km = parseInt(prompt("Estudiante " + N + " ingrese a cuántos km de distancia vive:"));

  if (edad < 18 && km >= 10) {
    document.write("Estudiante " + N + " le corresponde la jornada Diurna <br>");
    // result.innerHTML = "Estudiante " + N + " le corresponde la jornada Diurna <br>";
  } else if (edad >= 18 && km >= 10) {
    document.write("Estudiante " + N + " le corresponde la jornada de la Tarde <br>");
    // result.innerHTML = "Estudiante " + N + " le corresponde la jornada de la Tarde <br>";
  } else if (edad >= 18 && km < 10) {
    document.write("Estudiante " + N + " le corresponde la jornada Nocturna <br>");
    // result.innerHTML = "Estudiante " + N + " le corresponde la jornada Nocturna <br>";
  }
}