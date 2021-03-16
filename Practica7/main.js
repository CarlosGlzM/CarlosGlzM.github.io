var paises = document.querySelector("#paises");

fetch("data.json").then(function (response) {
  response.json().then(function (data) {
    data.forEach((registro) => {
      console.log(registro);

      let nombre = document.createElement("p");
      nombre.textContent =
        "País: " + registro.country + " - Casos Hoy: " + registro.cases;
      paises.appendChild(nombre);
    });
  });
});