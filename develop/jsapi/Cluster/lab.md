##Creando una plantilla configurable...



En esta �ltima entrega de laboratorio veremos c�mo resolver un problema muy com�n que se da con el manejo de muchos datos (puntos)en ArcGIS Online.

###Problema a resolver.

Generalmente cuando creamos una aplicaci�n lo que buscamos es resolver alg�n tipo de problema o reto que se puede llegar a presentar, para este caso es la dificultad al intentar visualizar una gran cantidad de datos en un Web Map como se ve  [en este link](http://arcg.is/2c8lG9s) 

###Configurar AGOL para usar la aplicaci�n configurable.

Para hacer uso de la aplicaci�n es necesario seguir los siguientes pasos:

-Inicie sesi�n en AGOL y dir�jase a la secci�n de GRUPOS

![Process](/develop/jsapi/Cluster/Grupos.PNG)

-cree un grupo nuevo en el cual alojar� la aplicaci�n.

![Process](/develop/jsapi/Cluster/grupo_creado.PNG)


```
Nota: con anterioridad debe tener creado un Web Map en el que exista una cantidad de puntos considerable (m�s de mil)este web service ser� �til para este ejercicio:

http://services2.arcgis.com/9CNwmNo6GCOCKWA0/arcgis/rest/services/POI_Colombia/FeatureServer

```

-Configurar el �tem de aplicaciones configurables y mapa, para esto nos dirigimos a 	MI ORGANIZACION y EDITAR AJUSTES

![Process](/develop/jsapi/Cluster/Organizacion.PNG)

![Process](/develop/jsapi/Cluster/Editar Ajustes.PNG)


![Process](/develop/jsapi/Cluster/Mapa_App_Configurable.PNG)

![Process](/develop/jsapi/Cluster/Grupos_App_configurable.PNG)

Despu�s de realizar los respectivos ajustes al AGOL lo que se procede hacer es crear una Aplicaci�n Configurable, para esto nos vamos a dirigir a Mi Contenido

![Process](/develop/jsapi/Cluster/Inicio_AGOL.PNG)

En agregar elemento, seleccionamos una aplicaci�n 

![Process](/develop/jsapi/Cluster/Crear_Aplicacion.PNG)


Completamos el formulario de una forma muy similar como veremos a continuacion:

![Process](/develop/jsapi/Cluster/Configurable.PNG)

descargar el repositorio, copiamos la carpeta "Cluster" que se encuentra dentro de este repositorio, en la siguiente ruta:

```
geodev-hackerlabs-gh-pages\develop\jsapi\Cluster

```
Guardamos esta carpeta dentro del servidor local.

Nota: para configurar el servidor local ingrese [aqu�](https://gist.github.com/jgravois/5e73b56fa7756fd00b89)

copiamos la url del servidor local que aloja el idex de la aplicaci�n del index

```
http://localhost/Cluster/index.html

```
Damos un t�tulo a la aplicaci�n y le asignamos etiquetas, debe ser muy similar a la siguiente imagen:

![Process](/develop/jsapi/Cluster/Configurable2.PNG)

Ya creada la aplicaci�n la compartimos en el grupo que creo en un inicio

![Process](/develop/jsapi/Cluster/Compartir_grupo.PNG)

nos dirigimos a la seccion "Avanzada" y nuevamente seleccionamos "Configurable"

![Process](/develop/jsapi/Cluster/Avanzada.PNG)

y damos clic en guardar 

A continuaci�n, vamos a crear los par�metros que el usuario final completar� para hacer uso de la App.

Nos dirigimos al directorio:

```
C:\inetpub\wwwroot\Cluster\config
```

Abrimos el archivo config.js con cualquier editor de texto y copiamos el contenido

![Process](/develop/jsapi/Cluster/Parametros.PNG)

y guardamos los cambios.

Nos dirigimos al Web Map que se cre� inicialmente con el servicio de m�ltiples puntos y damos clic en crear una aplicaci�n web, Utilizando una plantilla

![Process](/develop/jsapi/Cluster/Plantilla.PNG)

Seleccionamos la aplicaci�n configurable y damos clic en crear aplicaci�n web

![Process](/develop/jsapi/Cluster/crear_app.PNG)

Llenamos los par�metros, como nombre, descripci�n y etiquetas y damos clic en hecho.

###Configuraci�n de la App.

Ya creada la aplicaci�n es necesario configurarla, para esto completaremos los cuatro par�metros de configuraci�n 

![Process](/develop/jsapi/Cluster/4parametros.PNG)

*Seleccionamos la capa (POI_Colombia)
*Campos a mostrar (POI_NAME y Dexripcion_CAT_ID)
*Titulo (Sitio de inter�s en la ciudad -Opcional)
*Mapa Base (selecciones el mapa Base que mas le guste)

![Process](/develop/jsapi/Cluster/4parametrosf.PNG)

y damos clic en guardar y ver

![Process](/develop/jsapi/Cluster/Appfinal.PNG)

y luego en cerrar para salir de la configuraci�n y ver c�mo queda la configuraci�n de la App.

Como se puede ver es mejor la visualizaci�n y rendimiento de la aplicaci�n usando esta App lo que permite resolver el problema que se plante� en un inicio de forma �ptima y r�pida.
