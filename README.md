# ArcGIS para Desarrolladores, no Desarrolladores

Este repositorio cuenta con información básica sobre como iniciar en el mundo de desarrollo con ArcGIS Online.

## ¿Se tiene que ser un experto en ArcGIS para hacer un desarrollo propio?

La respuesta es: NO, para desarrollar solo se necesita mucha iniciativa por parte de la persona que quiera hacerlo y contar con el apoyo de personas que puedan orientar en un inicio, para que posteriormente se avance en el aprendizaje de una forma casi que independiente.

para este proceso es necesario tener en cuenta los siguientes aspectos para crear una aplicación innovadora:

1. **Datos:** para la creación de la aplicación es necesario contar los datos necesarios y conocer la manera de prepararlos para nuestra aplicación.
2. **Diseño:** los estilos, colores y estética hacen parte fundamental de nuestra aplicación en el momento de crearla
3. **Desarrollo:** como se mencionaba en un principio de este repositorio, el propósito de este es acercar a las personas al desarrollo para que sus aplicaciones no tengan limites en el momento de crearlas.

![Process](./Imagen_Inicio.png)

## Que se necesita?

Para iniciar un proyecto es indispensable:

1. **Crear una cuenta de Desarrollador gratuita** [Suscripción  a ArcGIS Developer ](https://developers.arcgis.com/en/sign-up/) - Esta cuenta le permite descargar software y aplicaciones de la plataforma, de igual forma se puede tener acceso a AGOL (ArcGIS Online). Si ya dispone de una cuenta Organizacional de AGOL, servirá de igual forma. 

2. **Realizar los laboratorios propuestos en este repositorio** - A continuación, se compartirán una serie de laboratorios, con los que se buscan que se aprenda de una forma interactiva las nociones básicas de desarrollo en la plataforma.

## Recursos

Estos son recursos muy útiles para el desarrollo de los laboratorios..

* [ArcGIS for Developers - Cuenta, documentación, ejemplos, Aplicaciones, Descargas](http://developers.arcgis.com)
* [JS Bin - Visor interactivo de JS](http://jsbin.com)
* [Una guía sencilla para la creación de un servidor web local (opcional)](https://gist.github.com/jgravois/5e73b56fa7756fd00b89)


## Laboratorios
El flujo de trabajo se hará de la siguiente forma:

Datos - Diseño - Desarrollo. 

para este ejercicio se hará uso de datos de Colombia alojados en mi cuenta, pero si desean pueden utilizar datos propios u obtenerlos del [Portal de Datos Abiertos de Esri Colombia](http://datosabiertos.esri.co/) En este caso se utilizan los datos abiertos Portland, pero no dude en utilizar sus propios datos para construir sus propias soluciones personalizadas. 

Sin más preámbulo 

### 1. Mi primera aplicación Geográfica

El uso de datos dentro de una aplicación geográfica es sumamente importante, ya que a partir de ellos es que se puede hacer representaciones y análisis muy importante, en el siguiente laboratorio vamos a ver como a través de un servicio previamente publicado en AGOL, es consumido por una aplicación creada por nosotros mismos sin necesidad de hacer uso directo de la plataforma de ArcGIS Online 

Ejercicio
* Agregar una capa geográfica a una Aplicación [Dé clic aquí para iniciar](./develop/jsapi/add_feature_layer/lab.md)

### 2. Que tu mapa muestre lo que realmente quieres que vean los demás.

El propósito del segundo laboratorio es poder mostrar los datos de nuestro mapa, de una manera mucho más explicativa, usando distintos tipos de simbología, además de usar varias a la vez, con el fin de mostrar más datos en un solo mapa, sin la necesidad de crear más de uno, así optimizando los recursos que se tienen.

Ejercicio
* Configuración de la simbología de una capa [Dé clic aquí para iniciar](./develop/jsapi/config_simbology_layer/lab.md)(./develop/jsapi/Cluster/lab.md)

### 3. Creando una plantilla configurable.

Después de realizar una serie de ejercicios básicos e intermedios, el laboratorio que se verá a continuación engloba todo lo visto, además de esto se podrá crear una aplicación que podrá usar otra persona aparte del que la creó o que no posee conocimiento sobre programación.

Ejercicio
* Configuración, creación y ejecución de una aplicación configurable [Dé clic aquí para inicar](./develop/jsapi/Cluster/lab.md)


