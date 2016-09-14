# SPA-MEAN (Single Page Application - MEAN)

Estructura de directorios

- node_modules: Directorio que contiene las dependencias o modulos que necesita la aplicación.
- public: Directorio que contiene los recursos/assets que son publicos y accesibles (css, js, imagenes, etc...).
- routes: Directorio que contiene los controladores de rutas para la aplicación.
- views: Directorio que contiene las vistas en formato html con la extención EJS.
- config.js: Archivo que contiene toda la configuración de la aplicación.
- package.json: Archivo que contiene informacion acerca de la aplicacion, sus dependencias, autor, scripts, etc...
- server.js: Archivo principal para ejecucion de la aplicación con toda la definición (Rutas, Modulos, Apis, etc...)


Ejecutando la aplicación

Despues de clonar el repositorio es necesario instalar todas las dependencias necesarias para la ejecución de la aplicación
para esto es necesario ejecutar el siguiente comando en la terminal:

    npm install

Una vez instaladas las dependencias de la aplicación, para ejecutar el servidor es necesario ejecutar el siguiente comando en la terminal:

    node server.js

Este comando mostrara un mensaje en la consola, notificando que el servidor se encuentra activo y escuchando en el puerto 3000.
Para verificar que el servidor inicio correctamente nos dirigmos a un navegador y visualizamos la siguiente url:

    http://localhost:3000

Deberá mostrarse una página con un mensaje.

