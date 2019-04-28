# Data-Mining-and-Data-Warehousing
Documentación Api
# Comando Node
Una vez configurado la conexión a la API, dentro de la aplicación Visual Studio Code, se abre una terminal, donde se ejecutará el comando, Node junto con el nombre del archivo que ejecutará **“APP.JS”**.

![Comando Node](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Comando%20Node/comando%20node.png)

Una vez ejecutado dicho comando, nos despliega un mensaje la terminal, que nos indica que sea ah realizado la conexion al servidor exitosamente, por lo que se puede proseguir con la ejecución de las pruebas.

# Consulta Tour
Una vez ejecutado el comando, el sistema realizara conexión con el servidor.

![Conexion](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Tour/ConexionBD.png)

Donde una vez conectado el servidor, se procede a abrir a aplicación Postman, en el cual dentro de la barra en la que se coloque, la URL. Donde se seleccionará la opción GET, para poder y se anexará la URL
**localhost:3000/api/tours/**

![URL_Postman](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Tour/URLPostman.png)

El cual consta del servidor local, el puerto por el que se realiza la petición, y el nombre de la solicitud, que se encuentra definido dentro del archivo **APP.JS:**

![Archivo APP](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Tour/App.png)

El cual nos redirige a el archivo **amdmin.js**, donde se encuentra, la especificación de la consulta que se realizara con la especificación enviada en la URL

![Archivo ADMIN](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Tour/Admin.png)

El cual toma la ayuda del archivo Tour.js, en el que con el uso del driver Mongoose, se crea un modelo para definir las propiedades de nuestro documento, almacenada en nuestra nube, esto para poder facilitar a búsqueda y obtención de información.

![Archivo_Tour](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Tour/Tour.png)

Donde cabe mencionar, que se especifico la colección a la que se entrara para la obtención de datos, mediante el código:

![Linea_Tour](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Tour/Tourlinea.png)

 Ya que, al tener más de 1 colección en nuestra misma base de datos, a la hora de realizar la conexión a la base de datos, esta entra en conflicto, ya que, dentro del archivo Tour.js no se especifica la colección a la cual pertenece el modelo, creado para la obtención de información.

Donde una vez realizado el proceso, se dirige a la nube, junto a la base de datos y coleccione especificada, para posteriormente, obtener la información, la cual consta de la selección total, de la colección, **“db.tour.find()”**, por lo que la recogerla, la envía devuelta a el usuario para su despliegue.

![Evidencia_1](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Tour/Evidencia%20Consulta%201.png)

!Evidencia_2](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Tour/Evidencia%20Consulta%202.png)
