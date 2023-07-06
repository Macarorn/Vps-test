import express from "express";
const app = express();
import bodyParser from "body-parser";

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta GET para invertir una palabra
app.get("/invertir-palabra", (req, res) => {
  const palabra = req.body.palabra;
  if (!palabra) return res.send("no hay palabra o algo así")
  const palabraInvertida = palabra.split("").reverse().join("");
  res.send(palabraInvertida);
});

app.get("/palabra-cool/:palabra", (req, res) => {
  const palabra = req.params.palabra;
  if (!palabra) return res.send("No se proporcionó ninguna palabra.");
  const palabraInvertida = palabra.split("").reverse().join("");
  res.send(palabraInvertida);
});

app.get("/palabra-no-cool", (req, res) => {
  const palabra = req.query.palabra;
  if (!palabra) return res.send("No se proporcionó ninguna palabra.");
  const palabraInvertida = palabra.split("").reverse().join("");
  res.send(palabraInvertida);
});



app.get("/", (req, res) => {
  res.send("Hola Chanel");
});

// Puerto en el que el servidor escucha las solicitudes
const puerto = 3000;

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});

