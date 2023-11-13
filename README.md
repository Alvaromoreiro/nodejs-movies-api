# Proyecto de API con Node.js

Este proyecto es una API desarrollada con Node.js que utiliza diversas carpetas para organizar su estructura. A continuación, se proporciona una descripción de cada carpeta y las dependencias utilizadas en el proyecto.

## Estructura de Carpetas

- **controllers:** Contiene los controladores que manejan las funciones lógicas de la aplicación.
- **middlewares:** Almacena middleware personalizados que se utilizan en las rutas.
- **utils:** Contiene utilidades y funciones de ayuda utilizadas en todo el proyecto.
- **models:** Contiene los modelos de datos de la aplicación.
- **schemas:** Guarda los esquemas de validación utilizados, especialmente si estás utilizando Zod para validar los datos.
- **routes:** Contiene las definiciones de las rutas de la API.

## Dependencias

- **standard:** Conjunto de reglas para garantizar la consistencia en el estilo de código.
- **cors:** Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **dotenv:** Carga variables de entorno desde un archivo `.env` para su uso en el proyecto.
- **express:** Framework web para Node.js que simplifica la creación de aplicaciones web y APIs.
- **mongodb:** Controlador oficial de MongoDB para Node.js.
- **morgan:** Middleware para el registro de solicitudes HTTP.
- **zod:** Biblioteca para la validación de esquemas de datos en TypeScript.

Para levantar el proyecto, primero necesitarás instalar Node.js y npm en tu sistema. Aquí tienes instrucciones generales para instalarlos en sistemas operativos comunes:

### Instalación de Node.js y npm en Windows:

1. **Descarga Node.js:**

   - Ve al sitio web oficial de Node.js (https://nodejs.org/).
   - Descarga la versión LTS (Long Term Support) recomendada para la mayoría de los usuarios.

2. **Instala Node.js:**

   - Ejecuta el instalador descargado y sigue las instrucciones del asistente de instalación.

3. **Verifica la Instalación:**
   - Abre la línea de comandos (cmd) o PowerShell.
   - Para verificar que Node.js y npm se hayan instalado correctamente, ejecuta los siguientes comandos:
     ```bash
     node -v
     npm -v
     ```

### Instalación de Node.js y npm en macOS:

1. **Instalación con Homebrew (recomendado):**

   - Abre la Terminal.
   - Instala Homebrew si aún no lo tienes:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Instala Node.js y npm con Homebrew:
     ```bash
     brew install node
     ```

2. **Verifica la Instalación:**
   - En la Terminal, ejecuta los siguientes comandos:
     ```bash
     node -v
     npm -v
     ```

### Instalación de Node.js y npm en Linux (Ubuntu):

1. **Instalación con apt:**

   - Abre la Terminal.
   - Actualiza el índice de paquetes:
     ```bash
     sudo apt update
     ```
   - Instala Node.js y npm:
     ```bash
     sudo apt install nodejs npm
     ```

2. **Verifica la Instalación:**
   - En la Terminal, ejecuta los siguientes comandos:
     ```bash
     node -v
     npm -v
     ```

### Levantando el Proyecto:

1. **Clona el Proyecto:**

   - Abre la Terminal.
   - Navega al directorio donde deseas clonar el proyecto.
   - Ejecuta el siguiente comando para clonar el repositorio:
     ```bash
     git clone URL_DEL_REPOSITORIO
     ```

2. **Ingresa al Directorio del Proyecto:**

   - Navega al directorio del proyecto:
     ```bash
     cd nombre_del_proyecto
     ```

3. **Instala las Dependencias:**

   - Ejecuta el siguiente comando para instalar las dependencias del proyecto:
     ```bash
     npm install
     ```

4. **Crea el Archivo `.env`:**

   - Crea un archivo `.env` en la raíz del proyecto y establece la clave de MongoDB:
     ```plaintext
     MONGODB_PASSWORD="CLAVE"
     ```

5. **Ejecuta el Servidor:**

   - Inicia el servidor con el siguiente comando:
     ```bash
     npm start
     ```

6. **Accede a la API:**
   - Abre tu navegador y accede a la URL de la API (por defecto, http://localhost:3000).

Ahora deberías tener el proyecto levantado y listo para probar. Puedes usar la extensión "Rest Client" en Visual Studio Code o cualquier otra herramienta de tu elección para realizar solicitudes a la API. ¡Buena suerte con tu proyecto!

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y establece la clave de MongoDB:

   ```plaintext
   MONGODB_PASSWORD="CLAVE"
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Ejecuta el servidor:

- JSON
  ```bash
  npm run dev:json
  ```
- MONGODB
  ```bash
  npm run dev:mongo
  ```

El servidor se ejecutará en el puerto especificado en tu archivo `.env` o en el puerto predeterminado 8080. Puedes acceder a la API en `http://localhost:8080`.

## Probando la API

Puedes utilizar la extensión "Rest Client" en Visual Studio Code para probar la API. Asegúrate de tener el archivo `requests.http` y utiliza los archivos de ejemplo proporcionados para realizar solicitudes de prueba.

Alternativamente, puedes usar Postman u otra herramienta similar para probar las rutas de la API. Asegúrate de ajustar las URL y los datos según sea necesario para tu entorno de desarrollo.
