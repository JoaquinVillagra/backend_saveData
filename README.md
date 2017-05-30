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

Modelo JSON a usar en Insert
{
	"username": "ignacio",
    "password": "123456",
    "value1": "valor1",
    "value2": "valor2"
}

*Data*
- /data     = Petición GET Toda la data del sistema
- /data/:id = Petición GET Lista data particular según id
- /data     = Petición POST Añade un nuevo registro data
- /data/:id = Petición PUT Actualiza registro de data existente referenciado por el id
- /data/:id = Petición DELETE