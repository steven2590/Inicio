###Configurar la simbologia de una capa de manera multiple

En este laboratorio se  agrega una capa geográfica a un ArcGIS API for JavaScript.

1. Haga clic  Click [create_starter_map/index.html](../create_starter_map2/index.html) y copie el contenido a un nuevo  [jsbin.com](http://jsbin.com).

2. Dentro del require agregue "esri/dijit/PopupTemplate","esri/layers/FeatureLayer",
"esri/map","esri/renderers/BlendRenderer","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol",y"esri/symbols/SimpleMarkerSymbol"

 ```javascript
  require([
    "dojo/_base/array", 
      "esri/Color", 
    /*** ADD ***/

     "esri/dijit/PopupTemplate", 
      "esri/layers/FeatureLayer",
      "esri/map", "esri/renderers/BlendRenderer",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/SimpleLineSymbol", 
      "esri/symbols/SimpleMarkerSymbol"
	"dojo/domReady!"
```
De igual forma agregue las funciones: 

PopupTemplate,FeatureLayer, Map, BlendRenderer, SimpleFillSymbol, SimpleLineSymbol,
      SimpleMarkerSymbol:

```
  ], function (array, Color,           

PopupTemplate,FeatureLayer, Map, BlendRenderer, SimpleFillSymbol, SimpleLineSymbol,
      SimpleMarkerSymbol){
  ```

3.Ya con el código pegado en jsbin.com nos disponemos a modificar la latitud y longitud del Web Map ademas del zoom que queremos sobre el mapa.

```
	   var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [0, 0],
        zoom: 2
```
```
	   var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-74.1, 4.6],
        zoom: 11
```

4. Antes de usar el servicio de una capa geográfica se propone configurar la ventana emergente o Pop Up de cada entidad, es por esto que se sugiere copiar el siguiente segmento de codigo:

```
var template = new PopupTemplate({
        title: "Localidades de Bogotá",
        content: 
          "<ul><li>Localidad: {NOMBRE_COM}" +
          "<li>Número de Localidad: {NUMERO_COM}", 
 });
```

NOMBRE_COM y NUMERO_COM son los atributos que deseamos que aparezcan en el Pop Up

5. A continuación agregue dentro del javascript  la variable que alojará el servicio de mapa (Map Service)para este ejemplo usaremos un servicio de las localidades de Bogotá:

  ```javascript
    ...

    /*** ADD ***/

    featureLayer = new FeatureLayer({
        url: "http://services3.arcgis.com/FrQaxkvr3gL42LSq/ArcGIS/rest/services/Localidades_Bogota/FeatureServer/0",
        outFields: ["*"],
        popupTemplate: template
      });
      map.add(featureLayer);
  ```

4. Despues de haber realizado el proceso el resultado debe ser muy similar a este:

* [Codigo](index.html)

