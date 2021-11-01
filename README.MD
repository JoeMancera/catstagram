# 😻 Catstagram

Catstagram es una web app que hace uso de la API [The API Cat](https://thecatapi.com/) para que tengas las imagenes de los gatos más bonitos del mundo.

Puedes guardar tus favoritos, ver la raza del día y votar por los gatos que son tendencia.

Puedes ver el diseño [aquí](https://www.figma.com/file/LoQkoEto5rCyPNcS6K4DWO/Catstagram "Go to Catstagram figma file")
# 🎲 Tecnologías

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=plastic&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=plastic&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/-React-61DAFB?style=plastic&logo=react&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-C21325?style=plastic&logo=Jest&logoColor=white)
![Webpack](https://badges.aleen42.com/src/webpack.svg)

# 🎛 Configuración

Para configurar el proyecto, debes de clonarlo en tu equipo, ``git clone https://github.com/JoeMancera/catstagram.git`` o desde el cliente de GitHub para escritorio.

Una vez clonado, debes ejecutar el comando ```npm install``` para instalar los paquetes necesarios para el proyecto.

En la raiz del proyecto, crea un archivo `.env` y llenamo con la siguiente estructura, te puedes guiar del .env.example

  ```
  CATS_API_URL=https://api.thecatapi.com/v1
  CATS_API_KEY=<COLOCAR-LA-KEY-DEL-API>
  CATS_DAY_NUM=<COLOCAR-NUMERO-DE-GATOS-EN-EL-HOME-POR-DEFECTO-SALDRÁ-UNO>

  ```

Una vez creado el archivo `.env` puedes ejecutar ```npm run start``` para ejecutarlo localmente. Abrirá la aplicación en el puerto 8080

# 🦆 Testing

Antes de ejecutar las pruebas del proyecto debes de instalar jest de forma global ```npm install jest -g```, si tienes problemas con permisos añade sudo al comando o corre la linea de comandos en modo administrador.

El proyecto cuenta con tres comandos para ejecutar las pruebas generadas:

1. ```npm test```: Corre las pruebas mostrando el resultado de cada una
2. ```jest --watch```: Corre las pruebas generadas y muestra el resultado, pero se mantiene escuchando los cambios que se realicen para correrlas nuevamente
3. ```jest --coverage```: Genera el reporte de coverage generado por jest

# 🤓 links of interest

- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)