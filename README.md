# Data-Mining-and-Data-Warehousing
Documentación Api
# Comando Node
Una vez configurado la conexión a la API, dentro de la aplicación Visual Studio Code, se abre una terminal, donde se ejecutará el comando, Node junto con el nombre del archivo que ejecutará **“APP.JS”**.

![Comando Node](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Comando%20Node/comando%20node.png)

Una vez ejecutado dicho comando, nos despliega un mensaje la terminal, que nos indica que sea ah realizado la conexion al servidor exitosamente, por lo que se puede proseguir con la ejecución de las pruebas.

# Consulta Tour
Una vez ejecutado el comando, el sistema realizara conexión con el servidor.
<img align="center">
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

![Evidencia_2](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Tour/Evidencia%20Consulta%202.png)


# Consulta inqId
Se realizará una consulta a la colección Tour, dentro de nuestra base de datos en la nube, en la que constará de una búsqueda específica, por ID, en la que una vez posicionado en la aplicación Postman, se introducirá, en la barra de búsqueda URL, lo siguiente: **localhost:3000/api/tours/”ID_definido”**.

En el que se ingresará algún ID, existente dentro de nuestra colección Tour, donde en este caso se hará uso del siguiente ID: **5cbf9d125476ba2a647aa252**.

![URLPostman]

El cual realizará el mismo proceso que la consulta a la colección Tour, previamente detallado, el cual inicia en el archivo **app.js**, donde busca, el formato al que pertenece. 

![Archivo_App]

El cual nos dirige al archivo **admin.js** donde busca, las especificaciones de la consulta que se realizaran, así como la leyenda que se desplegará en caso de tener éxito en la búsqueda de la información.

![Archivo_Admin]

Donde posteriormente nos dirige, al archivo Tour.js, donde ya este especificado el modelo a usar, así como el nombre de la colección a la que se accederá.

![Archivo_Tour]

Donde posterior, se dirigirá a la base de datos dentro de nuestra nube, en la que se realizará la búsqueda de la información de la consulta, la cual corresponde a una consulta, de un registro (ID) especifico: **db.tour.find({ID: 5cbf9d125476ba2a647aa252})**. Donde una vez realizado el proceso, se obtendrá la información y se le desplegará al usuario en la aplicación Postman.

![Evidencia]
