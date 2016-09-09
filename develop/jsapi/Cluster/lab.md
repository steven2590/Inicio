##Creando una plantilla configurable.



En esta ultima entrega de laboratorio veremos como resolver un problema muy comun que se dá con el manejo de muchos datos (puntos)en ArcGIS Online.

###Problema a resolver.

Generalmente cuando creamos una aplicación lo que buscamos es resolver algun tipo de problema o reto que se puede llegar a presentar,para este caso es la dificultad al intentar vizualizar una gran cantidad de datos en un Web Map como se ve  [en este link](http://arcg.is/2c8lG9s) 

###Configurar AGOL para usar la aplicación configurable.

Para hacer uso de la aplicación es necesario seguir los siguientes pasos:

-Inicie sesión en AGOL y dirijase a la seccion de GRUPOS

![Process](/develop/jsapi/Cluster/Grupos.PNG)

-cree un grupo nuevo en el cual alojará la aplicación.

![Process](/develop/jsapi/Cluster/grupo_creado.PNG)

Nota: con anteroridad debe tener creado un Web Map en el que exista una cantidad de puntos considerable (más de mil)este web service será util para este ejercicio:

http://services2.arcgis.com/9CNwmNo6GCOCKWA0/arcgis/rest/services/POI_Colombia/FeatureServer



```
Nota: con anteroridad debe tener creado un Web Map en el que exista una cantidad de puntos considerable (más de mil)este web service será util para este ejercicio:

http://services2.arcgis.com/9CNwmNo6GCOCKWA0/arcgis/rest/services/POI_Colombia/FeatureServer

```

-Configurar el item de aplicaciones configurables y mapa, para esto nos dirijimos a 	MI ORGANIZACION y EDITAR AJUSTES

![Process](/develop/jsapi/Cluster/Organizacion.PNG)

![Process](/develop/jsapi/Cluster/Editar Ajustes.PNG)


![Process](/develop/jsapi/Cluster/Mapa_App_Configurable.PNG)

![Process](/develop/jsapi/Cluster/Grupos_App_configurable.PNG)


