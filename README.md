<H1 align="center"> Ciencia de Datos </H1>

*Dentro del siguiente repositorio, se encuentran los códigos y la documentación correspondiente, de los proyectos, MVC_Tour proyect y MVC_postal proyect.*

<h1 align="center"> MVC TOUR PROYECT </H1>

<H2> Comando Node </H2>
Una vez configurado la conexión a la API, dentro de la aplicación Visual Studio Code, se abre una terminal, donde se ejecutará el comando, Node junto con el nombre del archivo que ejecutará **“APP.JS”**.

![Comando Node](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Comando%20Node/comando%20node.png)

Una vez ejecutado dicho comando, nos despliega un mensaje la terminal, que nos indica que sea ah realizado la conexion al servidor exitosamente, por lo que se puede proseguir con la ejecución de las pruebas.

<hr>

<H2> Consulta Tour </H2>
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

![Evidencia_2](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Tour/Evidencia%20Consulta%202.png)


<H2> Consulta inqId </H2>
Se realizará una consulta a la colección Tour, dentro de nuestra base de datos en la nube, en la que constará de una búsqueda específica, por ID, en la que una vez posicionado en la aplicación Postman, se introducirá, en la barra de búsqueda URL, lo siguiente: **localhost:3000/api/tours/”ID_definido”**.

En el que se ingresará algún ID, existente dentro de nuestra colección Tour, donde en este caso se hará uso del siguiente ID: **5cbf9d125476ba2a647aa252**.

![URLPostman](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20InqID/URL.png)

El cual realizará el mismo proceso que la consulta a la colección Tour, previamente detallado, el cual inicia en el archivo **app.js**, donde busca, el formato al que pertenece. 

![Archivo_App](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20InqID/App.png)

El cual nos dirige al archivo **admin.js** donde busca, las especificaciones de la consulta que se realizaran, así como la leyenda que se desplegará en caso de tener éxito en la búsqueda de la información.

![Archivo_Admin](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20InqID/Admin.png)

Donde posteriormente nos dirige, al archivo Tour.js, donde ya este especificado el modelo a usar, así como el nombre de la colección a la que se accederá.

![Archivo_Tour](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20InqID/Tour.png)

Donde posterior, se dirigirá a la base de datos dentro de nuestra nube, en la que se realizará la búsqueda de la información de la consulta, la cual corresponde a una consulta, de un registro (ID) especifico: **db.tour.find({ID: 5cbf9d125476ba2a647aa252})**. Donde una vez realizado el proceso, se obtendrá la información y se le desplegará al usuario en la aplicación Postman.

![Evidencia](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20InqID/Evidencia.png)

<H2> Consult InqByName </H2>
Se realizará una consulta dentro de la colección Tour, dentro de nuestra base de datos en Atlas, en la que constará de una búsqueda específica, por nombre del tour, en la que una vez posicionado en la aplicación Postman, se introducirá, en la barra de búsqueda URL, lo siguiente:
**localhost:3000/api/tours/” Nombre de tour definido”**
En el que se ingresará un Nombre de tour, existente dentro de nuestra colección Tour, para este ejemplo, se hará uso del siguiente nombre de tour: **In the Steps of John Muir**

![URL](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20InqByName/URL.PNG)

De igual manera realizará el mismo proceso que las consultas previamente expuestas, donde una vez realizado la petición en Postman, inicia en el archivo **app.js**, donde busca, el formato al que pertenece. 

![APP](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20InqByName/App.PNG)

El cual redirige la información al archivo **admin.js** donde busca, las especificaciones de la consulta que se realizaran, así como la leyenda que se desplegará en caso de tener éxito en la búsqueda de la información.

![ADMIN](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20InqByName/Admin.png)

El cual solicita el archivo **Tour.js**, para basarse en el modelo, descrito en e archivo, para la búsqueda de las solicitudes, así como la colección a la que tendrá que acceder dentro de la base de datos.

![Tour](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20InqByName/Tour.png)

Donde una vez realizado, el procedimiento se realizará la petición a nuestra base de datos en Atlas, para la obtención de información de la colección Tour, en la cual, se realizará, una consulta:
**db.tour.find({tourName:In the Steps of John Muir})**
En el cual, al finalizar, se desplegará toda la información que cumpla con la condición, solicitada por el usuario dentro de la aplicación Postman.

![Evidencia](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20InqByName/Evidencia.PNG)

<H2> Insert Tour </H2>
Esta ocasión se realizará un insert dentro de la colección Tour dentro de nuestra base de datos learning_mongo, almacenada en nuestra nube Atlas, en la cual en el apartado izquierdo donde se coloca la URL, se tendrá que cambiar la condición de **GET a POST**.
De igual manera, se tendrá que dirigir a la pestaña “Body”, posteriormente seleccionar la opción “Raw”, en la cual nos desplegará una terminal, donde se tendrá que introducir, toda a información que se requiera registrar en la colección.

![URL](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Insert%20Tour/URL.PNG)

Donde se nos desplegará una confirmación en la terminal, cuando se allá generado la información dentro de la colección.

![Terminal](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Insert%20Tour/Terminal.png)

La cual, dicha leyenda esta especificada, dentro del archivo Admin.js

![Admin](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Insert%20Tour/Admin.PNG)

En el cual podemos verificar, la información cuando se realiza una respectiva consulta dentro de la colección Tour. Verificando de esta manera, el almacenamiento de la información previamente enviada.

![Evidencia](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Insert%20Tour/Evidencia.png)

<H2> Eliminar Tour </H2>
Se realizará la eliminación completa de un objeto, para este servicio, se requiere posicionarse dentro la aplicación Postman, en la que se requiere seleccionar el servicio DELETE, de la parte izquierda donde se coloca la URL.
Y escribir sobre la parte de URL, la siguiente línea:

**localhost:3000/api/tours/5cc54d84d4755a33b0084179**

![URL](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Delete%20Tour/URL.png)

Una vez introducido la información correspondiente, el programa, inicia en el archivo Admi.js, en el que obtiene el nombre de la operación que realizamos.

![App](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Delete%20Tour/App.png)

Para posterior, dirigirse al archivo Admin.js, en el que se encuentra definida la operación a realizar dentro de la base de datos.

![Admin](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Delete%20Tour/Admin.png)

Donde procede a acceder a la base de datos, para ejecutar las instrucciones, donde le envía una respuesta a el usuario mediante una leyenda, confirmándole al usuario que la instrucción enviada resulto exitosa.

![Terminal](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Delete%20Tour/Terminal.png)

Donde si se realiza una consulta del elemento eliminado, no se desplegará ninguna información del elemento previamente eliminado.

![Evidencia](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Delete%20Tour/Evidencia.png)

