{
	"configurationSettings": [{
		"category": "General Settings",
		"fields": [
		   {
				"type": "paragraph",
				"value": "* Configura tu plantilla. <a href='#'>More info</a>."
		   }, {  
               "type":"layerAndFieldSelector",
               "fieldName":"tableLayer",
               "label":"<strong>Seleccionar capa y campos</strong>",
               "tooltip":"Layer a mostrar en leafleft",
               "fields":[  
                  {  
                     "multipleSelection":true,
                     "fieldName":"hiddenFields",
                     "label":"Seleccionar los campos a mostrar",
                     "tooltip":"Seleccionar los campos a mostrar",
                     "supportedTypes":[  
                        "esriFieldTypeSmallInteger",
                        "esriFieldTypeInteger",
                        "esriFieldTypeSingle",
                        "esriFieldTypeDouble",
                        "esriFieldTypeString"
                     ]
                  }
               ],
               "layerOptions":{  
                  "supportedTypes":[  
                     "FeatureLayer"
                  ],
                  "geometryTypes":[  
                     "esriGeometryPoint"
                  ]
               }
         }, {
            "type": "string",        
            "fieldName": "titlePopup",        
            "label": "<strong>Titulo del popup</strong>",        
            "tooltip": "",        
            "stringFieldOption": "textbox",        
            "placeHolder": "Titulo del popup"
         }, {
				"type": "options",   
				"fieldName": "mapaBase",   
				"tooltip": "Elegir mapa base",   
				"label": "<strong>Elegi mapa base</strong>",   
				"options": [
					{
		     			"label": "Streets", "value": "Streets"
			   		}, {
				     	"label": "Topographic", "value": "Topographic"
				   	}, {
				     	"label": "Gray", "value": "Gray"
				   	}, {
				     	"label": "Dark gray", "value": "DarkGray"
			   	}
			  ]
		   }
		]
	}]
}