// URL de la API que deseas consultar
const apiUrl = "https://rickandmortyapi.com/";

// Realizar una solicitud GET
fetch(apiUrl)
  .then((response) => {
    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (response.ok) {
      // Parsear la respuesta JSON
      return response.json();
    } else {
      // Manejar errores en caso de que la solicitud falle
      throw new Error("Error en la solicitud");
    }
  })
  .then((data) => {
    // Aquí puedes trabajar con los datos recibidos en formato JSON
    console.log(data);
  })
  .catch((error) => {
    // Manejar errores generales
    console.error("Error:", error);
  });