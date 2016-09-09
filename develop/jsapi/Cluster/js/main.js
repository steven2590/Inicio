/*global define,document */
/*jslint sloppy:true,nomen:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
 try{
define([
    "dojo/ready",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "esri/arcgis/utils",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/on"
], function (
    ready,
    declare,
    lang,
    arcgisUtils,
    dom,
    domClass,
    on
) {
    return declare(null, {
        config: {},
        startup: function (config) {

            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;
                // document ready
                ready(lang.hitch(this, function () {

                    console.log(this.config);

                    var itemInfo = this.config.webmap || this.config.itemInfo;

                    if(this.config.webmapid)
                        var itemInfo = this.config.webmapid;

                    var mapaBase = "Streets";

                    var jsonCapa ={
                        url: "http://services3.arcgis.com/FrQaxkvr3gL42LSq/ArcGIS/rest/services/POI/FeatureServer/0",
                        titlePopup: "",
                        fieldsShow: []
                    };
                    

                    if(this.config.mapaBase){
                        mapaBase = this.config.mapaBase;
                    }

                    if(this.config.tableLayer){
                        var idLayer = this.config.tableLayer.id;
                        var campos = this.config.tableLayer.fields[0].fields;
                        var titlePopup = this.config.titlePopup;
                        var main = this;

                        $.each(this.config.itemInfo.itemData.operationalLayers, function(i, v) {                
                            if (v.id == idLayer) {
                                jsonCapa.url = v.url;
                                jsonCapa.popupInfo = v.popupInfo;
                                jsonCapa.titlePopup = titlePopup;
                                jsonCapa.fieldsShow = campos;
                                main._createClusterMap(jsonCapa, mapaBase);
                                return false;
                            }
                        });
                    }else{
                        this._createClusterMap(jsonCapa, mapaBase);
                    }

                }));
            } else {
                var error = new Error("Main:: Config is not defined");
                this.reportError(error);
            }
        },
        findLayer: function(itemInfo, idLayer){
            $.each(itemInfo.itemData.operationalLayers, function(i, v) {
                
                if (v.id == idLayer) {
                    console.log(v.url);
                    return v.url;
                }
            });
        },
        reportError: function (error) {
            // remove loading class from body
            domClass.remove(document.body, "app-loading");
            domClass.add(document.body, "app-error");
            // an error occurred - notify the user. In this example we pull the string from the
            // resource.js file located in the nls folder because we've set the application up
            // for localization. If you don't need to support multiple languages you can hardcode the
            // strings here and comment out the call in index.html to get the localization strings.
            // set message
            var node = dom.byId("loading_message");
            if (node) {
                if (this.config && this.config.i18n) {
                    node.innerHTML = this.config.i18n.map.error + ": " + error.message;
                } else {
                    node.innerHTML = "Unable to create map: " + error.message;
                }
            }
        },
        _createClusterMap: function(infoCapa, mapaBase){
            var map = L.map('viewMap').setView([4, -74], 5);

            L.esri.basemapLayer(mapaBase).addTo(map);

            var capa = L.esri.Cluster.clusteredFeatureLayer({
                url: infoCapa.url
            }).addTo(map);

            //Crear cadena concatenada de los campos a mostrar en el popup
            var camposPopup = "<strong>"+infoCapa.titlePopup+"</strong><br><br>";
            camposPopup = camposPopup.toUpperCase();
            for(var i=0; i < infoCapa.fieldsShow.length; i++){
                var label = infoCapa.fieldsShow[i];
                for(var j =0; j < infoCapa.popupInfo.fieldInfos.length; j++){
                    if(infoCapa.fieldsShow[i] === infoCapa.popupInfo.fieldInfos[j].fieldName){
                        label = infoCapa.popupInfo.fieldInfos[j].label;
                    }
                }
                camposPopup+="<strong>"+label+": </strong> {"+infoCapa.fieldsShow[i]+"}<br>";
            }

            capa.bindPopup(function (evt) {
                return L.Util.template(camposPopup, evt.properties);
            });
            var arcgisOnline = L.esri.Geocoding.arcgisOnlineProvider();

            var searchControl = L.esri.Geocoding.geosearch({
            providers: [arcgisOnline]
            }).addTo(map);

            var results = L.layerGroup().addTo(map);

            searchControl.on('results', function(data){
            results.clearLayers();
            for (var i = data.results.length - 1; i >= 0; i--) {
              results.addLayer(L.marker(data.results[i].latlng));
            }
            });
        },
        // create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            arcgisUtils.createMap(itemInfo, "viewDiv", {
                mapOptions: {
                    // Optionally define additional map config here for example you can
                    // turn the slider off, display info windows, disable wraparound 180, slider position and more.
                },
                bingMapsKey: this.config.bingKey
            });
        }
    });
});
} catch (e) {
  Rollbar.error("Error in main.js", e);
}