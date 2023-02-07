# <span style="color:green">**|**</span> SAS Site &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ![badge](https://img.shields.io/badge/Status-in%20progress-yellowgreen)


*Sitio web para emprendimiento de marca **SAS Cerámica***

<br>

## <span style="color:green">|</span> Índice&nbsp;&nbsp;🔍


- ### <a target= "introduccion" >Introducción </a>
- ### <a target="id">Tecnologías usadas </a>
- ### <a target ="implementacion"> Implementación </a>
- ### <a target ="utilizacion"> Utilización </a>
- ### <a target ="front-end"> Front-end </a>
- ### <a target= "conclusiones"> Conclusiones </a>

<br>

<br>

## <span id= "introduccion" style="color:green">|</span> Introducción&nbsp;&nbsp;📋

Se decidió desarrollar una app que hiciera de API, manejando endpoints para permitir tanto el CRUD de productos en una base de datos como la visualización del sitio en si mismo. 
<br>

## <span id= "id" style="color:green">|</span> Tecnologías usadas&nbsp;&nbsp;🧰

<br>

&nbsp;&nbsp;&nbsp;&nbsp;![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)	

&nbsp;&nbsp;&nbsp;&nbsp;![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)


&nbsp;&nbsp;&nbsp;&nbsp;![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

&nbsp;&nbsp;&nbsp;&nbsp;![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

<br>

## <span id= "implementacion" style="color:green">|</span> Implementación &nbsp;&nbsp;	⚒		

<br>


Se necesitaba de una base de datos donde se pudieran guardar los productos y sus caracteristicas, y que permitiera la consulta de los mismos tanto por categoría como por disponibilidad (en stock) para luego ser "pintados" por el front-end.

La base de datos fue [creada](https://github.com/ahroncich7/Sas/blob/dev2/api/config/DB2.sql) utilizando [MySQL](https://www.mysql.com/) 

<br>

<p align="center">
<img src="https://i.ibb.co/pbd14yC/image.png" alt="image" border="0">
</p>

<br>

Se decidió estructurar la implementación de la API con un modelo Model-Routes-Controller. 
El router recibe las peticiones y llama a los métodos de los controladores. 

No se utilizó un ORM sino el driver [mysql](https://www.npmjs.com/package/mysql) disponible a través de NPM.
Por lo tanto, en éste caso el [modelo](https://github.com/ahroncich7/Sas/blob/dev2/api/model/products.js) sirve de conector con la base de datos, y expone los métodos que permiten realizar el CRUD desde Node.

<br>

![modelo](https://i.ibb.co/xHGcvp6/image.png)

<br>

Se utilizaron los middlewares express.JSON() y express.urlencoded()para parsear las peticiones que llegan por HTTP del cliente.

<br>


## <span id= "utilizacion" style="color:green">|</span> Utilización &nbsp;&nbsp;✍

<br>

### [End-Points]():
Ejemplos:
<br>

GET/listAll 🠮  Devuelve array de todos los productos

GET/listByType 🠮 Devuelve array de los productos de una categoría en particular (que viaja en el body de la petición)

GET/listCategory 🠮 Devuelve array con las categorías de la tabla CATEGORÍA 

GET/listInStock 🠮 Devuelve array con los productos cuyo campo stock es 1 (true)

POST/insertProduct 🠮 Inserta fila en la tabla PRODUCTOS

PUT/updateProduct 🠮 Modifica un registro por identificado por el ID(que viaja en el body de la petición)

DELETE/deleteProduct 🠮 Elimina de la tabla PRODUCTOS un registro identificado por el ID (que viaja en el body de la petición).

<br>


## <span id= "front-end" style="color:green">|</span> Front-End &nbsp;&nbsp;💻

<br>

Con el fin de hacer públicos los productos de la marca y brindar una herramienta de difusión de la misma, se utilizaron los datos proveidos por la API creada para alimentar la estructura de un front-end sencillo, con estilos definidos con hojas de [CSS](https://developer.mozilla.org/es/docs/Web/CSS) y [Bootstrap](https://www.getbootstrap.com/).

También se hizo uso de un apartado de administrador con un formulario que permite dar de alta nuevos productos en la base de datos, como así también modificar y eliminar registros.

<br>

## <span id= "conclusion" style="color:green">|</span> Conclusión &nbsp;&nbsp;📜

<br>

Éste es un proyecto en desarrollo y por lo tanto pueden observarse algunos bugs y errores en varias partes del código.

Sin embargo, la app cumple con los objetivos planteados para ésta primera etapa de desarrollo y puede ser desplegada para el uso doméstico que se le pretende dar en lo inmediato.

<br>

## Autor: Alejandro Hroncich - *Desarrollador Web Trainee*

<img width="10px" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"> Linkedin: https://www.linkedin.com/in/alejandro-hroncich/
