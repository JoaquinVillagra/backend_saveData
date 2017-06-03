**API REST**
========================
- NODE.JS
- EXPRESS
- MONGODB/MYSQL/OTRA

*Instalación*
------------------------------
- npm install 

*Arrancar servidor*
--------------------------------
- Arrancar servidor: En la raíz del proyecto ejecutar: 
    - node app.js

*Rutas*
----------------------------
* Cada ruta extiende de: 138.197.22.39:3030/
----------------------------
*Usuarios*
- /users    = Petición GET Todos los usuarios del sistema
- /user/:id = Petición GET Lista usuario particular según id
- /user     = Petición POST Añade un nuevo usuario
- /user/:id = Petición PUT Actualiza registro de usuario existente referenciado por el id
- /user/:id = Petición DELETE

*Preguntas*
- /question/last = Petición GET Obtiene la ultima pregunta ingresada
- /questions     = Petición GET Toda la data del sistema
- /question/:id  = Petición GET Lista data particular según id
- /question      = Petición POST Añade un nuevo registro data
- /question/:id  = Petición PUT Actualiza registro de data existente referenciado por el id
- /question/:id  = Petición DELETE

Modelo JSON a usar en Insert de Pregunta
{
	"username": "ignacio",
    "password": "123456",
    "pregunta": "#",
    "alternativa_1": "#",
    "alternativa_2": "#",
    "alternativa_3": "#",
    "alternativa_4": "#"
}

*Data*
- /data     = Petición GET Toda la data del sistema
- /data/:id = Petición GET Lista data particular según id
- /data     = Petición POST Añade un nuevo registro data
- /data/:id = Petición PUT Actualiza registro de data existente referenciado por el id
- /data/:id = Petición DELETE

Modelo JSON a usar en Insert de Data
{
	"username": "ignacio",
    "password": "123456",
    "pregunta_id": "#",
    "alternativa_1": "#",
    "alternativa_2": "#",
    "alternativa_3": "#",
    "alternativa_4": "#"
}