# Español

## Clone de Google Translator con React

Puedes acceder al sitio web desde el siguiente enlace, tanto en tu PC como en tu celular: [clone de google translator](https://fake-google-translator.netlify.app/)

Este es un proyecto que clona el funcionamiento de **Google Translate**, utilizando **React**. La aplicación soporta **109 idiomas** y permite traducir texto de manera sencilla. Además, ofrece funcionalidades avanzadas como la detección automática del idioma, copiar al portapapeles, intercambiar idiomas y la opción de borrar el texto. La traducción es proporcionada por la IA de Google (Gemini-2.0-flash). El proyecto también cuenta con soporte para **modo claro** y **modo oscuro**.

## Importante

Este proyecto tiene un archivo de configuración para **Netlify**, lo cual facilita el despliegue en ese host específico. Si deseas usarlo en otro servicio de hosting o en local, se deben realizar algunas modificaciones:

- Si tienes pensado usar el proyecto en local puedes borrar la constante `HOST_BACKEND_URL` en la linea 9 del archivo `./src/utils/translation.js`

- De lo contrario si usaras el proyecto en un host debes borrar o comentar la linea 6 de dicho archivo y modificar el valor de la constante `HOST_BACKEND_URL` dentro de `./src/utils/constants.js`

- La carpeta `functions` y el archivo `public/netlify.toml` están configurados para que funcione específicamente en **Netlify**. Si deseas desplegarlo en otro servicio de hosting, por favor consulta la documentación de ese servicio para hacer las configuraciones correspondientes.
  
- Para usar el proyecto **en local**, debes agregar un archivo `.env.local` en la raíz del proyecto y colocar lo siguiente: `VITE_BACKEND_URL=http://localhost:3001`.

  Puedes usar el puerto que prefieras para tu backend (en este caso estamos usando el `3001`).

- Dentro de la carpeta `utils/constants.js`, hay una constante llamada `HOST_BACKEND_URL`. Esta constante debe ser cambiada si se desea subir el proyecto a un host distinto a **Netlify**. Actualízala con la URL del host que estés utilizando.

## Características

- **Integración con IA de Google**: Utiliza la inteligencia artificial de Google (Gemini-2.0-flash) para realizar las traducciones.
- **Soporte para 109 idiomas**: Permite traducir entre una amplia variedad de idiomas.
- **Detección automática del idioma**: La aplicación detecta el idioma en el que el usuario está escribiendo.
- **Copiar al portapapeles**: Los usuarios pueden copiar la traducción al portapapeles fácilmente.
- **Borrar texto**: Se puede borrar el texto de entrada con un solo clic.
- **Intercambiar idiomas**: Permite intercambiar los idiomas de origen y destino.
- **Modo Claro y Oscuro**: Los usuarios pueden alternar entre los modos de interfaz según su preferencia.

## Instalación

Este proyecto puede ser levantado tanto en desarrollo como en producción. Sigue los pasos a continuación según el entorno en el que desees ejecutarlo.

### Versión de Desarrollo (Local)

Para ejecutar la versión de desarrollo, sigue estos pasos:

1. **Clona el repositorio**:

  ```bash
   git clone https://github.com/Facundo-Chiappero/translator.git
   cd translator
  ```
2. **Configura los archivos `.env`**:

   - Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

    ```bash
     VITE_BACKEND_URL=http://localhost:3001
    ```
   - Mientras estés en modo desarrollo se usará la variable de entorno `VITE_BACKEND_URL` para hacer las peticiones al servidor.

   - Dentro de la carpeta `backend`, crea un archivo `.env` con lo siguiente:

    ```bash
     API_KEY=tu_api_key_de_gemini
     FRONTEND_URL=http://localhost:5173
     BACKEND_URL=http://localhost:3001
    ```

     Para ambas URLs puedes seleccionar el puerto que prefieras cambiando el número al final de la misma, ten en cuenta que `BACKEND_URL` y `VITE_BACKEND_URL` deben ser iguales y que `FRONTEND_URL` debe ser la url que aparece al ejecutar `npm run dev`.

3. **Instala las dependencias**:

   - Dentro de la carpeta `translator`, ejecuta:

    ```bash
     npm install
    ```

   - Dentro de la carpeta `backend`, ejecuta:

    ```bash
     npm install
    ```
4. **Levanta el proyecto**:

   - En una terminal, navega hasta la carpeta `translator` y ejecuta:

    ```bash
     npm run dev
    ```
   - En otra terminal, navega hasta la carpeta `backend` y ejecuta:

    ```bash
     node server.js
    ```
   Ahora el proyecto debería estar corriendo en [http://localhost:5173](http://localhost:5173) (o el puerto que hayas seleccionado).

### Versión de Producción

Si deseas subir el proyecto a **Netlify** u otro host:

1. **Netlify**: El proyecto está configurado específicamente para ser desplegado en **Netlify**. Las configuraciones necesarias ya están en la carpeta `functions` y el archivo `public/netlify.toml`.
    
2. **Otros Hosts**: Si deseas usar un host diferente, asegúrate de cambiar la constante `HOST_BACKEND_URL` en `utils/constants.js` a la URL de tu backend. También revisa y modifica la carpeta `functions` y el archivo `public/netlify.toml` según lo que requiera el host.

3. **Build**: Puedes ejecutar el siguiente comando para crear la carpeta `dist`, cuyos archivos subirás al host, en el caso de Netlify junto con la carpeta `functions` y un archivo `package.json`, con el contenido indicado a continuación:

   - Comando:

    ```bash
     npm run build
    ```
   - `package.json`:

    ```bash
     {
       "name": "netlify-backend",
       "version": "1.0.0",
       "main": "index.js",
       "scripts": {
         "start": "node server.js"
       },
       "license": "MIT",
       "type": "commonjs",
       "dependencies": {
         "@google/genai": "^0.7.0",
         "cors": "^2.8.5",
         "dotenv": "^16.4.7",
         "express": "^4.21.2"
       }
     }
    ```

## Tecnologías Usadas

- **React**: Para la construcción de la interfaz de usuario.
- **@google/genai**: Para integrar la inteligencia artificial de Google (Gemini-2.0-flash).
- **Vite**: Como herramienta de construcción y bundling.
- **dotenv**: Para manejar variables de entorno en local.
- **express**: Para crear el servidor backend.
- **cors**: Para manejar la política de acceso entre dominios en el servidor.
- **vite-tsconfig-paths**: Para hacer las importaciones más legibles en el proyecto.

## Licencia

Este proyecto está bajo la licencia MIT. Esto significa que puedes usar, modificar y distribuir el código como desees, siempre que incluyas la licencia MIT en tu distribución.

# English

## Google Translator Clone with React

You can access the website from the following link, both on your PC and your mobile phone: [google translator clone](https://fake-google-translator.netlify.app/)

This is a project that clones the functionality of **Google Translate**, using **React**. The application supports **109 languages** and allows you to translate text easily. Additionally, it offers advanced features such as automatic language detection, copy to clipboard, swap languages, and the option to clear text. Translation is provided by Google's AI (Gemini-2.0-flash). The project also supports **light mode** and **dark mode**.

## Important

This project has a configuration file for **Netlify**, which facilitates deployment on that specific host. If you want to use it on another hosting service or locally, some modifications must be made:

- If you plan to use the project locally, you can delete the constant `HOST_BACKEND_URL` on line 9 of the `./src/utils/translation.js` file.

- Otherwise, if you will use the project on a host, you should delete or comment out line 6 of that file and modify the value of the constant `HOST_BACKEND_URL` inside `./src/utils/constants.js`.

- The `functions` folder and the `public/netlify.toml` file are configured to work specifically on **Netlify**. If you want to deploy it on another hosting service, please consult the documentation of that service to make the corresponding configurations.

- To use the project **locally**, you must add a `.env.local` file in the project root and place the following: `VITE_BACKEND_URL=http://localhost:3001`.

  You can use the port you prefer for your backend (in this case, we are using `3001`).

- Inside the `utils/constants.js` folder, there is a constant called `HOST_BACKEND_URL`. This constant must be changed if you want to upload the project to a host other than **Netlify**. Update it with the URL of the host you are using.

## Features

-   **Google AI Integration**: Uses Google's artificial intelligence (Gemini-2.0-flash) for translations.
-   **109 Language Support**: Allows translation between a wide variety of languages.
-   **Automatic Language Detection**: The application detects the language the user is typing in.
-   **Copy to Clipboard**: Users can easily copy the translation to the clipboard.
-   **Clear Text**: Input text can be cleared with a single click.
-   **Swap Languages**: Allows swapping the source and destination languages.
-   **Light and Dark Mode**: Users can toggle between interface modes according to their preference.

## Installation

This project can be run in both development and production. Follow the steps below depending on the environment in which you want to run it.

### Development Version (Local)

To run the development version, follow these steps:

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/Facundo-Chiappero/translator.git
    cd translator
    ```

2.  **Configure the `.env` files**:

    -   Create a `.env.local` file in the project root with the following content:

        ```bash
        VITE_BACKEND_URL=http://localhost:3001
        ```

    -   While in development mode, the `VITE_BACKEND_URL` environment variable will be used to make requests to the server.

    -   Inside the `backend` folder, create a `.env` file with the following:

        ```bash
        API_KEY=your_gemini_api_key
        FRONTEND_URL=http://localhost:5173
        BACKEND_URL=http://localhost:3001
        ```

        For both URLs, you can select the port you prefer by changing the number at the end of it. Keep in mind that `BACKEND_URL` and `VITE_BACKEND_URL` must be the same and that `FRONTEND_URL` must be the URL that appears when you run `npm run dev`.

3.  **Install dependencies**:

    -   Inside the `translator` folder, run:

        ```bash
        npm install
        ```

    -   Inside the `backend` folder, run:

        ```bash
        npm install
        ```

4.  **Run the project**:

    -   In a terminal, navigate to the `translator` folder and run:

        ```bash
        npm run dev
        ```

    -   In another terminal, navigate to the `backend` folder and run:

        ```bash
        node server.js
        ```

    Now the project should be running at [http://localhost:5173](http://localhost:5173) (or the port you selected).

### Production Version

If you want to upload the project to **Netlify** or another host:

1.  **Netlify**: The project is configured specifically to be deployed on **Netlify**. The necessary configurations are already in the `functions` folder and the `public/netlify.toml` file.

2.  **Other Hosts**: If you want to use a different host, make sure to change the `HOST_BACKEND_URL` constant in `utils/constants.js` to your backend URL. Also, review and modify the `functions` folder and the `public/netlify.toml` file as required by the host.

3.  **Build**: You can run the following command to create the `dist` folder, whose files you will upload to the host, in the case of Netlify along with the `functions` folder and a `package.json` file, with the content indicated below:

    -   Command:

        ```bash
        npm run build
        ```

    -   `package.json`:

        ```bash
        {
          "name": "netlify-backend",
          "version": "1.0.0",
          "main": "index.js",
          "scripts": {
            "start": "node server.js"
          },
          "license": "MIT",
          "type": "commonjs",
          "dependencies": {
            "@google/genai": "^0.7.0",
            "cors": "^2.8.5",
            "dotenv": "^16.4.7",
            "express": "^4.21.2"
          }
        }
        ```

## Used Technologies

-   **React**: For building the user interface.
-   **@google/genai**: To integrate Google's artificial intelligence (Gemini-2.0-flash).
-   **Vite**: As a build and bundling tool.
-   **dotenv**: To manage environment variables locally.
-   **express**: To create the backend server.
-   **cors**: To manage cross-domain access policy on the server.
-   **vite-tsconfig-paths**: To make imports more readable in the project.

## License

This project is under the MIT license. This means you can use, modify, and distribute the code as you wish, as long as you include the MIT license in your distribution.