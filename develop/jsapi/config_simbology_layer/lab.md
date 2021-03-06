###Configurar la simbolog�a de una capa de manera m�ltiple

En este laboratorio se agrega una capa geogr�fica a un ArcGIS API for JavaScript.

1. Haga clic  [Mapa de inicio](../create_starter_map2/index.html) y copie el contenido a un nuevo  [jsbin.com](http://jsbin.com).

2. Dentro del require agregue "esri/dijit/PopupTemplate","esri/layers/FeatureLayer",
"esri/map","esri/renderers/BlendRenderer","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol"y"esri/symbols/SimpleMarkerSymbol"

 ```
 require([
      "dojo/_base/array", 
      "esri/Color", 
      "esri/map", 

    /*** ADD ***/

	 "esri/dijit/PopupTemplate", 
      "esri/layers/ArcGISTiledMapServiceLayer", 
      "esri/layers/FeatureLayer",
      "esri/renderers/BlendRenderer",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/SimpleLineSymbol", 
      "esri/symbols/SimpleMarkerSymbol", 
      "esri/renderers/Renderer",

	 "dojo/domReady!"
```
De igual forma agregue las funciones: 

BlendRenderer,PopupTemplate,FeatureLayer, SimpleFillSymbol, SimpleLineSymbol,SimpleMarkerSymbol:

```
  ], function (array, Color, Map

PopupTemplate, ArcGISTiledMapServiceLayer, FeatureLayer,  BlendRenderer, SimpleFillSymbol, SimpleLineSymbol,
      SimpleMarkerSymbol,Renderer){
  ```

3.Ya con el c�digo pegado en jsbin.com lo primero que haremos, ser� usar el servicio geogr�fico que contiene la capa que buscamos representar con varias simbolog�as 

```
  map = new Map("map", {
        basemap: "dark-gray", //"topo"
        center: [-76,5.5],
        zoom: 6
      });

//Servicio de muertes de ni�os por desnutrici�n en Colombia

var layerUrl = "http://services3.arcgis.com/FrQaxkvr3gL42LSq/ArcGIS/rest/services/Desnutricion_2/FeatureServer/0";

```

4. A continuaci�n agregaremos a nuestro c�digo los par�metros que se utilizaran de la librer�a BlendRenderer con el fin de poder utilizar sus m�todos para la simbolog�a:

```
var blendRendererOptions = {
        //blendMode:"color" //By default, it uses "source-over", uncomment to display different mode
        //See: http://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
        symbol: new SimpleMarkerSymbol().setOutline(new SimpleLineSymbol().setWidth(0)),
        fields: [
          {
            field: "Casos", 
            color: new Color("#0000") //blue
          }
          
        ],
        opacityStops: [
          {
            value:0, 
            opacity:0
          }
        ]
        
      };
      renderer = new BlendRenderer(blendRendererOptions);

      //set background fill symbol to show census block outlines
      renderer.backgroundFillSymbol = new SimpleFillSymbol().setColor(null).setOutline(new SimpleLineSymbol().setWidth(1).setColor(new Color([
        200, 200, 200
      ])));
         
```


5. Despu�s de tener los par�metros y variables, procedemos a utilizar los m�todos que se llamaron, el primero ser� el de "Simbolog�a por Color", donde le daremos un color tenue (blanco) a los valores m�s bajos y un color m�s fuerte (rojo) para los valores m�s altos, en este caso se representar� la variable "porcentaje" la cual muestra el porcentaje de fallecidos de cada departamento respecto al pa�s

  ```
	//Color
	renderer.setColorInfo({
        field: "Porcentaje",
        minDataValue: 0,
        maxDataValue: 7.23,
        colors: [
          new Color([255,255,255]),//Balnco
          new Color([255, 0, 0])//Rojo
        ]
      });
  ```
7. De forma similar haremos con la variable "TAS_NAT" (Tasa de Natalidad) la cual se representar� con "Simbolog�a de tama�o" donde a mayor tama�o m�s nacimiento y viceversa

  ``` 
//Tama�o
      renderer.setVisualVariables([
        {
          type: "sizeInfo",
          field: "TAS_NAT",
          minSize: 5,
          maxSize: 50,
          minDataValue: 303,
          maxDataValue: 117776
        },
        







      ]);      
        
  ```
6.Representaremos la variable "Casos" que representa el n�mero de muertos de ni�os por desnutrici�n en cada departamento y ciudades representativas

  ``` 
//Tama�o
      renderer.setVisualVariables([
        {
          type: "sizeInfo",
          field: "TAS_NAT",
          minSize: 5,
          maxSize: 50,
          minDataValue: 303,
          maxDataValue: 117776
        },
  //      

    /*** ADD ***/

//transparencia


        {
          type: "opacityInfo",
          field: "Casos",
          stops: [
            { value: 0, opacity: 0.1 },
            { value: 5, opacity: 1 }    
          ]
        }

//
      ]);      
//
        
  ```
7. Y finalmente agregamos la configuraci�n del Pop Up o ventana emergente

  ``` 
//generate popup definition
      var template = new PopupTemplate({
        title: "{DPTO}",
        "fieldInfos": [
       
          {
            "fieldName": "TAS_NAT",
            "label": "Tasa de Natalidad",
            "visible": true,
            "format": {
              "places": 0,
              "digitSeparator": true
            }
          }, {
            "fieldName": "Casos",
            "label": "N�mero de casos por departamento",
            "visible": true,
            "format": {
              "places": 0,
              "digitSeparator": true
            }          
          },{
            "fieldName": "Porcentaje",
            "label": "Procentaje respecto al pa�s",
            "visible": true,
            "format": {
              "places": 0,
              "digitSeparator": true
            }          
          }
        ]
      });
              
  ```
8. Asignamos los valores del template ("TAS_NAT","Casos"y "Porcentaje") y su visualizaci�n

```
layer = new FeatureLayer(layerUrl, {
        outFields: ["","", ""],
        opacity: 1
      });

      layer.setRenderer(renderer);
      map.addLayer(layer);




layer = new FeatureLayer(layerUrl, {
        outFields: ["TAS_NAT","Casos", "Porcentaje"],
        opacity: 1,
        infoTemplate: template
      });

      layer.setRenderer(renderer);
      map.addLayer(layer);
      
```


9. de manera opcional agregaremos una breve descripci�n del mapa en el recuadro blanco de la parte izquierda inferior que hemos visto desde el inicio del laboratorio.

``` 
 });
     </script>
  </head>
  <body class="claro">
    <div data-dojo-type="dijit/layout/BorderContainer" data-dojo-props="design:'headline',gutters:false" style="width: 100%; height: 100%; margin: 0;">
      <div id="map" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'center'">
         <div id="meta">

    /*** ADD ***/

            <h3>Esta capa contiene las estad�sticas de desnutrici�n en Colombia para enero del a�o 2016</h3>
            <br>
            <br>En este mapa se muestra dos variables representadas por color y tama�o
            <ul>
              <li>El porcentaje de muertes por desnutrici�n de ni�os en el pa�s (Color) 
              <li>El n�mero de ni�os nacidos en el periodo de tiempo en estudio (Tama�o)
               <li></li>El n�mero de casos de muerte por desnutrici�n (Opacidad)
               
        
```

4. Despu�s de haber realizado el proceso el resultado debe ser muy similar a este:

* [C�digo](index.html)


