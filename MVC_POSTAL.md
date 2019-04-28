<H1 align="center"> Ciencia de Datos </H1
  
*En el presente repositorio, se almacena la documentación del proyecto MVC_postales, asi como las consultas realizadas*

<hr>

<H1 align="center"> MVC_POSTAL </H1>

<H2> Configuración Key </H2>

La configuración del siguiente proyecto, es similar al proyecto **MVC_TOUR** previamente presentado, en el que se, tiene que tiene que tener configurado, el archivo Key, el cual nos permite, ingresar a nuestra base de datos Atlas, en la que se encuentran nuestras colecciones.
El cual consta de el usuario y contraseña de nuestro administrador, de nuestra nube, así como las tres conexiones que disponemos, con su respectivo puerto y nombre. De igual manera, se especifica la base de datos a la que se accederá.

![Key](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Key_Confg/Key.png)

<hr>

<H2> Comando Node </H2>

Una vez realizado la configuración correspondiente, se continuará abriendo una terminal dentro la aplicación Visual Studio Code, en el que se posicionará dentro de la carpeta en la que se encuentra, nuestros archivos correspondientes al proyecto Postal y se escribirá el siguiente comando:
**Node app.js**

![Node](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Key_Confg/Node.png)

En el que comenzara con la conexión a la base de datos, para poder así realizar pruebas de los siguientes servicios Web (GET, POST, PUT DELETE). Mediante la aplicación de Postman.

<hr>

<H2> Consulta Postal </H2>

Una vez realizado la conexión con la base de datos, se comenzará con la realización de la primera prueba, la cual consta, de una búsqueda de toda la colección Postal.
Por lo que se abrirá la aplicación Postman, en la que, dentro del apartado de URL, se escribirá lo siguiente:
**localhost:3000/api/postales/**

![URL]

Donde posterior se continuará con él envió de la petición, conforme la URL, solicitada dentro de la URL.
La cual la petición pasa por el archivo App.js, el cual, identifica el nombre de la petición, que esta previamente definida dentro del archivo, para así enviarlo al siguiente archivo js, para la búsqueda de instrucciones.

![App]

Donde lo redirige a el archivo Admin.js, en el cual contiene la consulta y las instrucciones que realizara dicha petición.

![Admin]

Para ello pasa por el archivo Postal.js, en la que se especifica un modelo de la base de datos, para hacer más efectiva la búsqueda dentro de la base de datos, con el uso de la librería Mongoose, de igual manera se especifica, la colecciona a la que realizara la conexión y obtención de información.

![Postal]

Donde una vez conociendo las instrucciones de la petición a realizar, se conecta a la base de datos de nuestra nube, en la que ejecutará la consulta definida dentro del archivo Admin.js, donde una vez obtenida la información la despliega al usuario, dentro del programa Postman. El cual realiza una consulta general de todos los datos dentro de la colección Postal.
**Db.postal.find()**

![Evidencia]

<hr>

<H2> Consulta PostaById </H2>

En la siguiente consulta, se realizará una búsqueda con condición, en la que, en este caso, mostrará los objetos, que contengan, el Id, que sea introducido por el usuario dentro del apartado de URL en la aplicación Postman. 
Para el siguiente ejemplo de tomar la siguiente ID: **5cbf9f4d5476ba2a647b6ab0**. Para ello se tendrá que escribir lo siguiente dentro del apartado de la URL:
**localhost:3000/api/postales/5cbf9f4d5476ba2a647b6ab0**

![Url]

Donde posterior, la información pasa por el archivo App.js, donde se encuentra con el nombre correspondiente, previamente definido, para conectarlo con el siguiente archivo.

![App]

Donde una vez identificado, el nombre lo enlaza con el archivo Admin.js, en el que se encuentran definidas las consultas e instrucciones de cada uno de los nombres, en este caso se hará uso del siguiente:

![Admin]

El cual tendrá que pasar por el archivo, Posta.js, en el cual se encuentra el modelo, de la base de datos, para la identificación de las colecciones y documentos, dentro de la nube.

![Postal]

Para posteriormente, regresar con la información y desplegarla a usuario dentro de la aplicación Postman. El cual realizo el comando
**Db.postal.find({_id: 5cbf9f4d5476ba2a647b6ab0})**

![Evidencia]

<hr>

<H2> Consulta PostalByCode </H2>

La siguiente consulta, tiene por fin, realizar una consulta, mediante una condición, la cual es desplegar, aquellos objetos que tengan por igual, mismo código postal, ingresado por el usuario, para este ejemplo, tomaremos el siguiente código postal:**50994**, donde dentro del apartado de URL, se introducirá lo siguiente:
**localhost:3000/api/postales/ciudades/50994**

![Url]

Donde pasará por el archivo App.js, para la búsqueda del nombre, con el que fue especificado previamente.

![App]

Para posteriormente, dirigirse al archivo, Admin.js, en el que se especificaran las instrucciones de la consulta, que se realiará.

![Admin]

Posteriormente se dirigirá al archivo Postal.js, en el que encuentra, el modelo de la base de datos, conforme a las necesidades de las consultas que realizaremos, dentro de nuestras colecciones.

![Postal]

Finalmente, retornara con la información encontrada, para su despliegue con el usuario dentro de la aplicación Postman, mediante el comando:
**Db.postal.find({d_codigo:50994})**

![Evidencia]

<hr>

<H2> Consulta PostalCity </H2>

En la siguiente consulta, se realizará una consulta, en la que se pretende listar, las ciudades que se encuentran registradas dentro de nuestra colección Postal,
Para ello dentro de la URL, en la aplicación Postman, se escribirá la siguiente línea:
**localhost:3000/api/ciudades**

![Url]

Donde pasará por el archivo App.js, en el que buscará, el mismo nombre con el que fue insertado por el usuario.

![App]

Una vez encontrado, el nombre lo redirigirá al archivo Admin.js, en el que se encontrará con las instrucciones que realizará dentro de la base de datos.

![Admin]

Posteriormente, se conecta con el archivo Postal.js, para obtener la información de modelo, en el que se basará para la obtención de la información, así como la colección a la que accederá.

![Postal]

Una vez realizado, se dirige ala base de datos, en la que, obtiene la información de la colección correspondiente, y posterior regresa, para el despliegue al usuario dentro de la aplicación Postman.

![Evidencia]

<hr>
