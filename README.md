# Prueba BRM 🧩

 A continuación dejo una guía detallada sobre el proyecto que he completado como parte de una prueba técnica para evaluar mis conocimientos como desarrollador Backend. En este proyecto, he demostrado mi habilidad para desarrollar aplicaciones backend utilizando las tecnologías y prácticas más recientes en el ecosistema de Node.js.
 

No es necesario la creación de la base de datos en local para probar la API ya que esta conectada a una base de datos en la nube.

 
## Paquetes utilizados 🔧
A continuación, se enumeran los paquetes necesarios para ejecutar el proyecto en un entorno local:

- **bcryptjs** : Librería para el hashing seguro de contraseñas en Node.js.
- **cors** : Middleware para Express que habilita la política de mismo origen (CORS).
- **dotenv** : Carga variables de entorno desde un archivo `.env` a `process.env`.
- **express** : Framework web minimalista para Node.js.
- **jsonwebtoken** : Implementación de JSON Web Tokens (JWT) para autenticación.
- **mysql2** : Cliente MySQL para Node.js que se integra con Sequelize.
- **nodemon** : Herramienta que reinicia automáticamente la aplicación Node.js cuando se detectan cambios en los archivos.
- **sequelize** : ORM (Object-Relational Mapping) para Node.js que soporta varios dialectos de bases de datos, incluyendo MySQL.

 
 
## Este proyecto incluye las siguientes características ✨

- **Validaciones en los EndPoints:** Garantiza que los datos enviados a través de las solicitudes cumplan con los requisitos esperados.
- **Control de Errores:** Maneja y responde adecuadamente a los errores que pueden surgir durante la ejecución.
- **Autenticación con Token:** Implementa un sistema de autenticación basado en tokens para asegurar las rutas y proteger los datos.
- **Responsabilidades de los Módulos Separadas:** Mantiene una arquitectura modular que facilita el mantenimiento y la escalabilidad del código.
- **Respuestas en JSON:** Todas las respuestas de la API están formateadas en JSON para una fácil integración y manipulación.
- **Documentación de la API:** Proporciona documentación detallada para facilitar el uso y la integración de la API por parte de desarrolladores.



## Guías de Uso 🛞

Aquí encontrarás guías detalladas para configurar y utilizar el proyecto:

- **Ejecución Local**: Consulta el [archivo PDF](https://drive.google.com/file/d/1OELtFZY2wFC048v7deo6dSJ7yXwFbs-A/view?usp=sharing) para instrucciones sobre cómo ejecutar el proyecto en tu máquina local.
- **Funcionamiento de la API**: Revisa la [documentación PDF](https://drive.google.com/file/d/1-UkTmCTxR7jTGE8aWWfU9JjD9zqmsWls/view?usp=sharing) para entender cómo funciona y cómo interactuar con la API.



## Archivo de Postman para pruebas 🎨

Descarga el [archivo POSTMAN](https://drive.google.com/file/d/10vGlpRHC-zqMOIWfltCDxCVnatObDtuM/view?usp=sharing) para realizar las pruebas de la API.


## Despliegue 📦 
A continuación, se presenta la URL de despliegue de la API:

https://prueba-brm-production.up.railway.app/