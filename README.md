# ToDo-App

Esta es una aplicación que permite crear tareas que debemos realizar. Las mismas, se pueden
almacenar en carpetas para separarlas por tipo. Ademas, podemos seleccionar si la tarea
fue realizada o editar el nombre de la misma. Por ultimo, podemos eliminar una carpeta y al
realizar esto se nos van a eliminar todas las tareas que la coponian.

Para realizar esta aplicación, utilice distintas tecnologias: 
Para el front-end: 
- React ^17.0.1
- Redux ^4.1.2
- CSS
- HTML
Para el back-end:
-Node js >=12.18.3
-Express ^4.17.1
-PostgreSQL v14.1
-Sequelize ^6.3.5

Para instalar las dependencias y poder correr la aplicacion. 
- "npm": ">=6.14.6"

Para poder correr esta aplicacion es necesario instalar las dependencias tanto en el back-end
como en el front-end. Para esto debemos diriginos a la ruta en donde se encuentra el archivo 
"package.json" tanto en la carpeta "client" como en la "api" y ejecutamos el comando "npm
install".

Por otra parte debemos crear la base de datos. Como en este caso se utilizo PostgreSQL,
nos dirigmos a la consola de PostgreSQL y creamos la base de datos con el nombre "todo".
Tener en cuenta, que en el archivo "db.js" que se encuentra en /api/src, tenemos la conexion
de sequelize con la base de datos. Aqui lo que debemos hacer es cambiar los parametros 
{DB_USER} y {DB_PASSWORD} para que nuestro back-end se pueda conectar a la misma. 

Una vez realizado esto, ejecutamos npm start tanto en el back-end como en el front-end y
esto nos va a correr la aplicacion en el puerto 3000 de localhost. 


