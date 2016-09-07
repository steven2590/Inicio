###Configurar la simbologia de una capa de manera multiple

En este laboratorio se  agrega una capa geogr�fica a un ArcGIS API for JavaScript.

1. Haga clic  Click [Mapa de inicio](../create_starter_map2/index.html) y copie el contenido a un nuevo  [jsbin.com](http://jsbin.com).

2. Dentro del require agregue "esri/dijit/PopupTemplate","esri/layers/FeatureLayer",
"esri/map","esri/renderers/BlendRenderer","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol",y"esri/symbols/SimpleMarkerSymbol"

 ```
 require([
      "dojo/_base/array", 
      "esri/Color", 
      "esri/map", 

    /*** ADD ***/
	"esri/renderers/BlendRenderer",
     "esri/dijit/PopupTemplate", 
     "esri/layers/FeatureLayer",      	"esri/symbols/SimpleFillSymbol",
     "esri/symbols/SimpleLineSymbol", 
     "esri/symbols/SimpleMarkerSymbol"
	"dojo/domReady!"
```
De igual forma agregue las funciones: 

BlendRenderer,PopupTemplate,FeatureLayer, SimpleFillSymbol, SimpleLineSymbol,SimpleMarkerSymbol:

```
  ], function (array, Color, Map

BlendRenderer,PopupTemplate,FeatureLayer, SimpleFillSymbol, SimpleLineSymbol,SimpleMarkerSymbol){
  ```

3.Ya con el c�digo pegado en jsbin.com lo primero que haremos, ser� usar el servicio geografico que contiene la capa que buscamos representar con varias simbologia 

```
  map = new Map("map", {
        basemap: "dark-gray", //"topo"
        center: [-76,5.5],
        zoom: 6
      });

//Servicio de muertes de ni�os por desnutrici�n en Colombia

var layerUrl = "http://services3.arcgis.com/FrQaxkvr3gL42LSq/ArcGIS/rest/services/Desnutricion_2/FeatureServer/0";

```

4. A continuacion agregaremos a nuestro c�digo los parametros que se utilizaran de la libreria BlendRenderer con el fin de poder utilizar sus metodos para la simbologia :

```
//Set the blendRenderer's parameters
      
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

5. Paso a seguir,vamos a declarar las variables que usaremos para crear la simbologia que se propone al inicio de este laboratorio

```

  layer = new FeatureLayer(layerUrl, {
        outFields: ["Porcentaje","TAS_NAT","Casos" ],
        opacity: 1,
        infoTemplate: template
      });
```

6. Despues de tener los parametros y variables, procedemos a utilizar los metodos que se llamaron, el primero ser� el de "Simbologia por Color", donde le daremos un color tenue (blanco) a los valores mas bajos y un color m�s fuerte (rojo) para los valores mas altos, enn este caso se representar� la variable "porcentaje" la cual muestra el porcentaje de fallecidos de cada departamento respecto al pais

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
7. De forma similar haremos con la variable "TAS_NAT" (Tasa de Natalidad) la cual se representar� con "Simbologia de tama�o" donde a mayor tama�o m�s nacimineto y viceversa

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
8. Y finalmente representaremos la variable "Casos" que representa el numero de muertos de ni�os por desnutricion en cada departamento y ciudades representativas

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
9. Finalmente agregaremos una breve descripcion del mapa en el recuadro blanco de la parte izquierda inferior que hemos visto desde el inicio del laboratorio.

``` 
 });
     </script>
  </head>
  <body class="claro">
    <div data-dojo-type="dijit/layout/BorderContainer" data-dojo-props="design:'headline',gutters:false" style="width: 100%; height: 100%; margin: 0;">
      <div id="map" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'center'">
         <div id="meta">

    /*** ADD ***/

            <h3>Esta capa contiene las estadisticas de desnutrici�n en Colombia para enero del a�o 2016</h3>
            <br>
            <br>En este mapa se muestra dos variables representadas por color y tama�o
            <ul>
              <li>El porcentaje de muertes por desnutrici�n de ni�os en el pa�s (Color) 
              <li>El n�mero de ni�os nacidos en el periodo de tiempo en estudio (Tama�o)
               <li></li>El n�mero de casos de muerte por desnutrici�n (Opacidad)
               
        
```

4. Despues de haber realizado el proceso el resultado debe ser muy similar a este:

* [Codigo](index.html)

