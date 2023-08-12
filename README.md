# Documentación del Proyecto
Este documento proporciona una descripción detallada de la estructura y el funcionamiento del proyecto, así como una guía para comprender cada componente.

## Backend
#### Paquetes instalados
- Nodemon: Herramienta para el desarrollo que reinicia automáticamente el servidor cuando detecta cambios en los archivos.
- CORS: Soluciona el problema de políticas de mismo origen (Cross-Origin Resource Sharing) permitiendo que los recursos web sean solicitados desde un dominio diferente al del servidor.
- Express: Framework de aplicaciones web para Node.js que facilita la creación de rutas y controladores.
- mysql2: Paquete para la conexión y comunicación con bases de datos MySQL.
### Estructura de directorios:
```
backend/
|-- src/
|   |-- config/
|   |   |-- app.js
|   |   |-- database.js
|   |   |-- index.js
|   |
|   |-- controllers/
|   |   |-- user.controller.js
|   |
|   |-- routes/
|   |   |-- user.routes.js
|
|-- index.js
```
- config: Contiene archivos de configuración para la aplicación y la base de datos.
- controllers: Contiene los controladores que manejan la lógica de negocio de las rutas.
- routes: Define las rutas de la aplicación.
### app.js (Configuración de la Aplicación)
```
import express from "express";
import cors from "cors";
import { router } from "../routes/user.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Endpoints
app.use("/user", router);

export { app };

``` 
- Middlewares: Funciones que se ejecutan antes de que las rutas manejen las peticiones. En este caso, se configuran middlewares para el manejo de JSON, datos de formulario y CORS.
- Endpoints: Define las rutas base que serán manejadas por el enrutador.
database.js (Conexión con la Base de Datos)
```
import mysql2 from "mysql2";

const database = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "tutorial",
});

export { database };
```
- Establece la conexión con la base de datos MySQL.
### user.controller.js (Controladores)
Controladores que manejan las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para la entidad "User".

### user.routes.js (Rutas de Usuarios)
```
import { Router } from "express";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export { router };
```
- Define las rutas y asigna los controladores correspondientes.
## Frontend
La carpeta "frontend" contiene un archivo HTML llamado "index.html".

### index.html (Interfaz Frontend)
Este archivo contiene formularios para realizar operaciones GET, POST, PUT y DELETE hacia el backend.

#### index.js (Funcionalidad Frontend)
Este archivo contiene código JavaScript que captura eventos de formulario y realiza peticiones HTTP al backend utilizando la API Fetch.

## Conexión entre Frontend y Backend
La conexión entre el frontend y el backend se logra a través de peticiones HTTP. El frontend envía solicitudes al servidor backend usando URLs específicas definidas en las rutas del backend. El servidor backend procesa estas solicitudes usando los controladores correspondientes y envía respuestas de vuelta al frontend.

Por ejemplo, cuando el usuario llena y envía un formulario en el frontend para crear un nuevo usuario, el frontend hace una petición POST al servidor backend a través de la URL /user. El servidor procesa la petición usando el controlador createUser, que a su vez realiza una operación de inserción en la base de datos. Luego, el servidor envía una respuesta de éxito al frontend.

### Recomendación: Extensión "RapidAPI client" para Visual Studio Code
Para simplificar la generación y prueba de peticiones HTTP en el backend, te recomiendo usar la extensión "RapidAPI client" para Visual Studio Code. Esta extensión te permite definir y ejecutar solicitudes HTTP directamente desde archivos de texto, lo que facilita el testing de tus rutas y controladores.

---

¡Espero que esta documentación te haya sido útil! Si tienes alguna pregunta adicional o necesitas más detalles, no dudes en preguntar.
