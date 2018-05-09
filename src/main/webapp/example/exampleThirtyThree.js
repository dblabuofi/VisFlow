var exampleThirtyThree = {
	"nodes": [
		{
			"id": "ed56bcf7-025d-4eec-baa4-65f62c803ad4",
			"x": 679.8068891458297,
			"y": -236.5729109892179,
			"label": "OGC GetStyle\n",
			"timestamp": 1477386170408,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
					"resourceType": "HTTP",
					"organization": "OGC",
					"resourceName": "OGC GetStyle",
					"description": "Get Styles Information",
					"url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
					"urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
					"method": "GET",
					"attributes": [
						{
							"label": "layers",
							"name": "layers",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "GBR_BGS_625k_BA",
							"attributeType": "input",
							"description": "structure id",
							"from": "input"
						},
						{
							"label": "version",
							"name": "version",
							"type": "string",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version",
							"from": "default"
						},
						{
							"label": "REQUEST",
							"name": "REQUEST",
							"type": "string",
							"value": "GetStyles",
							"required": true,
							"shown": false,
							"example": "GetMap",
							"attributeType": "input",
							"description": "GetStyles",
							"from": "default"
						},
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"type": "string",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "SERVICE",
							"from": "default"
						},
						{
							"label": "format",
							"name": "format",
							"type": "string",
							"value": "text/xml",
							"required": true,
							"shown": false,
							"example": "text/xml",
							"attributeType": "input",
							"description": "format",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "Name",
							"name": "Name",
							"type": "string"
						},
						{
							"label": "ogc:PropertyName",
							"name": "ogc:PropertyName",
							"type": "string"
						},
						{
							"label": "ogc:Literal",
							"name": "ogc:Literal",
							"type": "string"
						},
						{
							"label": "CssParameter",
							"name": "CssParameter",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<StyledLayerDescriptor>\r\n\t\t\t\t<NamedLayer>\r\n\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t<UserStyle>\r\n\t\t\t\t\t\t<Rule>\r\n\t\t\t\t\t\t\t<ogc:Filter>\r\n\t\t\t\t\t\t\t\t<ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t\t\t<ogc:PropertyName></ogc:PropertyName>\r\n\t\t\t\t\t\t\t\t\t<ogc:Literal></ogc:Literal>\r\n\t\t\t\t\t\t\t\t</ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t</ogc:Filter>\r\n\t\t\t\t\t\t\t<PolygonSymbolizer>\r\n\t\t\t\t\t\t\t\t<Fill>\r\n\t\t\t\t\t\t\t\t\t<CssParameter></CssParameter>\r\n\t\t\t\t\t\t\t\t</Fill>\r\n\t\t\t\t\t\t\t</PolygonSymbolizer>\r\n\t\t\t\t\t\t</Rule>\r\n\t\t\t\t\t</UserStyle>\r\n\t\t\t\t</NamedLayer>\r\n\t\t\t</StyledLayerDescriptor>",
					"jsUrlReturnFileSchema": {},
					"fileName": "OGC GetStyle.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "OGC GetStyle"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
					"resourceType": "HTTP",
					"organization": "OGC",
					"resourceName": "OGC GetStyle",
					"description": "Get Styles Information",
					"url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
					"urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
					"method": "GET",
					"attributes": [
						{
							"label": "layers",
							"name": "layers",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "GBR_BGS_625k_BA",
							"attributeType": "input",
							"description": "structure id",
							"from": "input"
						},
						{
							"label": "version",
							"name": "version",
							"type": "string",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version",
							"from": "default"
						},
						{
							"label": "REQUEST",
							"name": "REQUEST",
							"type": "string",
							"value": "GetStyles",
							"required": true,
							"shown": false,
							"example": "GetMap",
							"attributeType": "input",
							"description": "GetStyles",
							"from": "default"
						},
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"type": "string",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "SERVICE",
							"from": "default"
						},
						{
							"label": "format",
							"name": "format",
							"type": "string",
							"value": "text/xml",
							"required": true,
							"shown": false,
							"example": "text/xml",
							"attributeType": "input",
							"description": "format",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "Name",
							"name": "Name",
							"type": "string"
						},
						{
							"label": "ogc:PropertyName",
							"name": "ogc:PropertyName",
							"type": "string"
						},
						{
							"label": "ogc:Literal",
							"name": "ogc:Literal",
							"type": "string"
						},
						{
							"label": "CssParameter",
							"name": "CssParameter",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<StyledLayerDescriptor>\r\n\t\t\t\t<NamedLayer>\r\n\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t<UserStyle>\r\n\t\t\t\t\t\t<Rule>\r\n\t\t\t\t\t\t\t<ogc:Filter>\r\n\t\t\t\t\t\t\t\t<ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t\t\t<ogc:PropertyName></ogc:PropertyName>\r\n\t\t\t\t\t\t\t\t\t<ogc:Literal></ogc:Literal>\r\n\t\t\t\t\t\t\t\t</ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t</ogc:Filter>\r\n\t\t\t\t\t\t\t<PolygonSymbolizer>\r\n\t\t\t\t\t\t\t\t<Fill>\r\n\t\t\t\t\t\t\t\t\t<CssParameter></CssParameter>\r\n\t\t\t\t\t\t\t\t</Fill>\r\n\t\t\t\t\t\t\t</PolygonSymbolizer>\r\n\t\t\t\t\t\t</Rule>\r\n\t\t\t\t\t</UserStyle>\r\n\t\t\t\t</NamedLayer>\r\n\t\t\t</StyledLayerDescriptor>",
					"jsUrlReturnFileSchema": {},
					"fileName": "OGC GetStyle.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "OGC GetStyle"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "50d00d2b-c1c2-44a2-ba66-136ffcae1cc3",
			"x": 482.1154049999996,
			"y": -237.62248300000005,
			"label": "",
			"timestamp": 1477387155271,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
					"resourceType": "HTTP",
					"organization": "OGC",
					"resourceName": "OGC GetStyle",
					"description": "Get Styles Information",
					"url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
					"urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
					"method": "GET",
					"attributes": [
						{
							"label": "layers",
							"name": "layers",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "GBR_BGS_625k_BA",
							"attributeType": "input",
							"description": "structure id",
							"from": "input"
						},
						{
							"label": "version",
							"name": "version",
							"type": "string",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version",
							"from": "default"
						},
						{
							"label": "REQUEST",
							"name": "REQUEST",
							"type": "string",
							"value": "GetStyles",
							"required": true,
							"shown": false,
							"example": "GetMap",
							"attributeType": "input",
							"description": "GetStyles",
							"from": "default"
						},
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"type": "string",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "SERVICE",
							"from": "default"
						},
						{
							"label": "format",
							"name": "format",
							"type": "string",
							"value": "text/xml",
							"required": true,
							"shown": false,
							"example": "text/xml",
							"attributeType": "input",
							"description": "format",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "Name",
							"name": "Name",
							"type": "string"
						},
						{
							"label": "ogc:PropertyName",
							"name": "ogc:PropertyName",
							"type": "string"
						},
						{
							"label": "ogc:Literal",
							"name": "ogc:Literal",
							"type": "string"
						},
						{
							"label": "CssParameter",
							"name": "CssParameter",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<StyledLayerDescriptor>\r\n\t\t\t\t<NamedLayer>\r\n\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t<UserStyle>\r\n\t\t\t\t\t\t<Rule>\r\n\t\t\t\t\t\t\t<ogc:Filter>\r\n\t\t\t\t\t\t\t\t<ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t\t\t<ogc:PropertyName></ogc:PropertyName>\r\n\t\t\t\t\t\t\t\t\t<ogc:Literal></ogc:Literal>\r\n\t\t\t\t\t\t\t\t</ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t</ogc:Filter>\r\n\t\t\t\t\t\t\t<PolygonSymbolizer>\r\n\t\t\t\t\t\t\t\t<Fill>\r\n\t\t\t\t\t\t\t\t\t<CssParameter></CssParameter>\r\n\t\t\t\t\t\t\t\t</Fill>\r\n\t\t\t\t\t\t\t</PolygonSymbolizer>\r\n\t\t\t\t\t\t</Rule>\r\n\t\t\t\t\t</UserStyle>\r\n\t\t\t\t</NamedLayer>\r\n\t\t\t</StyledLayerDescriptor>",
					"jsUrlReturnFileSchema": {},
					"fileName": "OGC GetStyle.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "OGC GetStyle"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "layers.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {},
					"id": "a70b035e-ffbe-8453-c4c2-a39715555ca2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"layers.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
						"resourceType": "HTTP",
						"organization": "OGC",
						"resourceName": "OGC GetStyle",
						"description": "Get Styles Information",
						"url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
						"urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
						"method": "GET",
						"attributes": [
							{
								"label": "layers",
								"name": "layers",
								"type": "string",
								"value": "GBR_BGS_625k_BA",
								"required": true,
								"shown": true,
								"example": "GBR_BGS_625k_BA",
								"attributeType": "input",
								"description": "structure id",
								"from": "input"
							},
							{
								"label": "version",
								"name": "version",
								"type": "string",
								"value": "1.1.1",
								"required": true,
								"shown": false,
								"example": "1.1.1",
								"attributeType": "input",
								"description": "version",
								"from": "default"
							},
							{
								"label": "REQUEST",
								"name": "REQUEST",
								"type": "string",
								"value": "GetStyles",
								"required": true,
								"shown": false,
								"example": "GetMap",
								"attributeType": "input",
								"description": "GetStyles",
								"from": "default"
							},
							{
								"label": "SERVICE",
								"name": "SERVICE",
								"type": "string",
								"value": "WMS",
								"required": true,
								"shown": false,
								"example": "WMS",
								"attributeType": "input",
								"description": "SERVICE",
								"from": "default"
							},
							{
								"label": "format",
								"name": "format",
								"type": "string",
								"value": "text/xml",
								"required": true,
								"shown": false,
								"example": "text/xml",
								"attributeType": "input",
								"description": "format",
								"from": "default"
							}
						],
						"outAttributes": [
							{
								"label": "Name",
								"name": "Name",
								"type": "string"
							},
							{
								"label": "ogc:PropertyName",
								"name": "ogc:PropertyName",
								"type": "string"
							},
							{
								"label": "ogc:Literal",
								"name": "ogc:Literal",
								"type": "string"
							},
							{
								"label": "CssParameter",
								"name": "CssParameter",
								"type": "string"
							}
						],
						"methodReturnFileType": "XML",
						"urlReturnFileType": "XML",
						"urlReturnFileSchema": "<StyledLayerDescriptor>\r\n\t\t\t\t<NamedLayer>\r\n\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t<UserStyle>\r\n\t\t\t\t\t\t<Rule>\r\n\t\t\t\t\t\t\t<ogc:Filter>\r\n\t\t\t\t\t\t\t\t<ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t\t\t<ogc:PropertyName></ogc:PropertyName>\r\n\t\t\t\t\t\t\t\t\t<ogc:Literal></ogc:Literal>\r\n\t\t\t\t\t\t\t\t</ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t</ogc:Filter>\r\n\t\t\t\t\t\t\t<PolygonSymbolizer>\r\n\t\t\t\t\t\t\t\t<Fill>\r\n\t\t\t\t\t\t\t\t\t<CssParameter></CssParameter>\r\n\t\t\t\t\t\t\t\t</Fill>\r\n\t\t\t\t\t\t\t</PolygonSymbolizer>\r\n\t\t\t\t\t\t</Rule>\r\n\t\t\t\t\t</UserStyle>\r\n\t\t\t\t</NamedLayer>\r\n\t\t\t</StyledLayerDescriptor>",
						"jsUrlReturnFileSchema": {},
						"fileName": "OGC GetStyle.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "OGC GetStyle"
					}
				}
			]
		},
		{
			"id": "5d4f8e0a-1cb4-4b02-97e3-3fc2f47bdacb",
			"x": 748.5816049999995,
			"y": 172.32551699999993,
			"label": "Geotime SPARQL\n",
			"timestamp": 1478193817141,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
					"resourceType": "HTTP",
					"organization": "geotime.tw.rpi.edu",
					"resourceName": "Geotime SPARQL",
					"description": "Geotime SPARQL service",
					"url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
					"urlExample": "",
					"method": "GET",
					"attributes": [
						{
							"label": "query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
							"attributeType": "input",
							"description": "query",
							"from": "input"
						},
						{
							"label": "output",
							"name": "output",
							"type": "string",
							"value": "json",
							"required": true,
							"shown": false,
							"example": "",
							"attributeType": "input",
							"description": "result type",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "datatype",
							"name": "datatype",
							"type": "string"
						},
						{
							"label": "type",
							"name": "type",
							"type": "string"
						},
						{
							"label": "value",
							"name": "value",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "",
					"fileName": "Geotime SPARQL.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Geotime SPARQL",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper"
					},
					"jsUrlReturnFileSchema": {}
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
					"resourceType": "HTTP",
					"organization": "geotime.tw.rpi.edu",
					"resourceName": "Geotime SPARQL",
					"description": "Geotime SPARQL service",
					"url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
					"urlExample": "",
					"method": "GET",
					"attributes": [
						{
							"label": "query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
							"attributeType": "input",
							"description": "query",
							"from": "input"
						},
						{
							"label": "output",
							"name": "output",
							"type": "string",
							"value": "json",
							"required": true,
							"shown": false,
							"example": "",
							"attributeType": "input",
							"description": "result type",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "datatype",
							"name": "datatype",
							"type": "string"
						},
						{
							"label": "type",
							"name": "type",
							"type": "string"
						},
						{
							"label": "value",
							"name": "value",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "",
					"fileName": "Geotime SPARQL.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Geotime SPARQL",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper"
					},
					"jsUrlReturnFileSchema": {}
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "581cc5fb-113e-4a75-8f40-c361acd0e6ea",
			"x": 606.5639049999995,
			"y": 8.34631699999995,
			"label": "",
			"timestamp": 1478251545581,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "title.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ab1b3f34-c230-f7f9-b986-36458f83b45f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "sparqlQuery.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "66f0a6ac-bb5a-aff6-d365-e4f3630583f6",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "0282b12b-3624-3a51-b0fb-78d2a3cc6a50",
					"act": "Function",
					"inputFileNames": [
						"title.csv"
					],
					"outputFileNames": [
						"sparqlQuery.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetFunction": {
						"libraryName": "SPARQL Query Generation",
						"libraryId": "5cef7f58-f692-11e7-8c3f-9a214cf093ae",
						"organization": "University of Idaho",
						"id": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
						"functionName": "generateSparqlQuery.py",
						"functionType": "python executable",
						"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
						"description": "Generate SPARQL query for query ages.",
						"urlReturnFileType": "",
						"attributes": [
							{
								"label": "outFile",
								"name": "-outFile",
								"type": "String",
								"value": "sparqlQuery.xml",
								"required": true,
								"shown": true,
								"example": "sparqlQuery.csv",
								"attributeType": "input",
								"description": "output file",
								"from": "input"
							},
							{
								"label": "inputFile",
								"name": "-inputFile",
								"type": "String",
								"value": "title.csv",
								"required": true,
								"shown": true,
								"example": "title.csv",
								"attributeType": "input",
								"description": "Input File Name",
								"from": "input"
							}
						],
						"type": "function",
						"comandLine": ""
					}
				}
			],
			"librariesIn": [
				{
					"libraryName": "SPARQL Query Generation",
					"libraryId": "5cef7f58-f692-11e7-8c3f-9a214cf093ae",
					"organization": "University of Idaho",
					"id": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
					"functionName": "generateSparqlQuery.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Generate SPARQL query for query ages.",
					"urlReturnFileType": "",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						}
					],
					"type": "function"
				}
			]
		},
		{
			"id": "7d52b97b-6f30-4234-8a82-93e7f2408d38",
			"x": 401.5899049999996,
			"y": 192.82291699999993,
			"label": "",
			"timestamp": 1478251814416,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "sparqlQuery.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "66f0a6ac-bb5a-aff6-d365-e4f3630583f6",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "queries",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "query",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				},
				{
					"id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
					"resourceType": "HTTP",
					"organization": "geotime.tw.rpi.edu",
					"resourceName": "Geotime SPARQL",
					"description": "Geotime SPARQL service",
					"url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
					"urlExample": "",
					"method": "GET",
					"attributes": [
						{
							"label": "query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
							"attributeType": "input",
							"description": "query",
							"from": "input"
						},
						{
							"label": "output",
							"name": "output",
							"type": "string",
							"value": "json",
							"required": true,
							"shown": false,
							"example": "",
							"attributeType": "input",
							"description": "result type",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "datatype",
							"name": "datatype",
							"type": "string"
						},
						{
							"label": "type",
							"name": "type",
							"type": "string"
						},
						{
							"label": "value",
							"name": "value",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "",
					"fileName": "Geotime SPARQL.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Geotime SPARQL",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper"
					},
					"jsUrlReturnFileSchema": {}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gsspLabel.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {},
					"id": "df734a85-388f-5fe6-c40e-5be466471c91",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"gsspLabel.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
						"resourceType": "HTTP",
						"organization": "geotime.tw.rpi.edu",
						"resourceName": "Geotime SPARQL",
						"description": "Geotime SPARQL service",
						"url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
						"urlExample": "",
						"method": "GET",
						"attributes": [
							{
								"label": "query",
								"name": "query",
								"type": "string",
								"value": "query",
								"required": true,
								"shown": true,
								"example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
								"attributeType": "input",
								"description": "query",
								"from": "sparqlQuery.xml"
							},
							{
								"label": "output",
								"name": "output",
								"type": "string",
								"value": "json",
								"required": true,
								"shown": false,
								"example": "",
								"attributeType": "input",
								"description": "result type",
								"from": "default"
							}
						],
						"outAttributes": [
							{
								"label": "datatype",
								"name": "datatype",
								"type": "string"
							},
							{
								"label": "type",
								"name": "type",
								"type": "string"
							},
							{
								"label": "value",
								"name": "value",
								"type": "string"
							}
						],
						"methodReturnFileType": "JSON",
						"urlReturnFileType": "XML",
						"urlReturnFileSchema": "",
						"fileName": "Geotime SPARQL.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "Geotime SPARQL",
						"wrapper": {
							"wrapperName": "jsonTOxmlWrapper"
						},
						"jsUrlReturnFileSchema": {}
					}
				}
			]
		},
		{
			"id": "d7cd0a5f-cc31-4cb7-8898-7caaa30df6dd",
			"x": 379.6284049999996,
			"y": 293.84581699999995,
			"label": "",
			"timestamp": 1478256730115,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
					"resourceType": "HTTP",
					"organization": "geotime.tw.rpi.edu",
					"resourceName": "Geotime SPARQL",
					"description": "Geotime SPARQL service",
					"url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
					"urlExample": "",
					"method": "GET",
					"attributes": [
						{
							"label": "query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
							"attributeType": "input",
							"description": "query",
							"from": "input"
						},
						{
							"label": "output",
							"name": "output",
							"type": "string",
							"value": "json",
							"required": true,
							"shown": false,
							"example": "",
							"attributeType": "input",
							"description": "result type",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "datatype",
							"name": "datatype",
							"type": "string"
						},
						{
							"label": "type",
							"name": "type",
							"type": "string"
						},
						{
							"label": "value",
							"name": "value",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "",
					"fileName": "Geotime SPARQL.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Geotime SPARQL",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper"
					},
					"jsUrlReturnFileSchema": {}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "ageTable.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {},
					"id": "16b4a098-ac66-1e29-bee1-d28aa7031c40",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"ageTable.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
						"resourceType": "HTTP",
						"organization": "geotime.tw.rpi.edu",
						"resourceName": "Geotime SPARQL",
						"description": "Geotime SPARQL service",
						"url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
						"urlExample": "",
						"method": "GET",
						"attributes": [
							{
								"label": "query",
								"name": "query",
								"type": "string",
								"value": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#>  PREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>  PREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#> PREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#>  PREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#> PREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#> PREFIX skos: <http://www.w3.org/2004/02/skos/core#>   SELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName WHERE  { ?base gts:stratotype ?gssp;       tm:position ?baseTime. ?gssp rdfs:label ?gsspLabel;       gts:primaryGuidingCriterion ?primaryGuidingCriterion;       sam:shape ?gsspLocation. ?gsspLocation gm:position ?gsspPosition. ?gsspPosition gm:coordinates ?coordinates. ?baseTime tm:value ?age. OPTIONAL { ?base gtrs:positionalUncertainty ?baseTimeUncertainty. ?baseTimeUncertainty basic:amount ?ageUncertainty. } { ?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;                        gtrs:start ?base. } UNION { ?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;                        gtrs:start ?base. } UNION { ?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;                        gtrs:start ?base. } UNION { ?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;                        gtrs:start ?base. } ?lowestRankConcept skos:prefLabel ?detailedConceptName FILTER (lang(?detailedConceptName) = \"en\" ) } ORDER BY ?age",
								"required": true,
								"shown": true,
								"example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
								"attributeType": "input",
								"description": "query",
								"from": "input"
							},
							{
								"label": "output",
								"name": "output",
								"type": "string",
								"value": "json",
								"required": true,
								"shown": false,
								"example": "",
								"attributeType": "input",
								"description": "result type",
								"from": "default"
							}
						],
						"outAttributes": [
							{
								"label": "datatype",
								"name": "datatype",
								"type": "string"
							},
							{
								"label": "type",
								"name": "type",
								"type": "string"
							},
							{
								"label": "value",
								"name": "value",
								"type": "string"
							}
						],
						"methodReturnFileType": "JSON",
						"urlReturnFileType": "XML",
						"urlReturnFileSchema": "",
						"fileName": "Geotime SPARQL.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "Geotime SPARQL",
						"wrapper": {
							"wrapperName": "jsonTOxmlWrapper"
						},
						"jsUrlReturnFileSchema": {}
					}
				}
			]
		},
		{
			"id": "c5edb536-9628-433b-9232-eeb79d892fe5",
			"x": 161.16522529922273,
			"y": 399.495447576273,
			"label": "GPlates Paleo-geographic Coordinates\n",
			"timestamp": 1479096295438,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
					"resourceType": "HTTPS",
					"organization": "GPlates",
					"resourceName": "GPlates Paleo-geographic Coordinates",
					"description": "Reconstruct the geographic locations from present day coordinates back to their paleo-positions. Each location will be assigned a plate id and moved back in time using the chosen reconstruction model.",
					"url": "https://gws.gplates.org/reconstruct/reconstruct_points/",
					"urlExample": "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140",
					"method": "GET",
					"attributes": [
						{
							"label": "points",
							"name": "points",
							"value": "",
							"required": true,
							"shown": true,
							"example": "95,54",
							"attributeType": "input",
							"description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
							"from": "input"
						},
						{
							"label": "time",
							"name": "time",
							"value": "",
							"required": true,
							"shown": true,
							"example": "140",
							"attributeType": "input",
							"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "coordinates",
							"name": "coordinates",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
					"jsUrlReturnFileSchema": {},
					"fileName": "GPlates Paleo-geographic Coordinates.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "GPlates Paleo-geographic Coordinates",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper"
					}
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
					"resourceType": "HTTPS",
					"organization": "GPlates",
					"resourceName": "GPlates Paleo-geographic Coordinates",
					"description": "Reconstruct the geographic locations from present day coordinates back to their paleo-positions. Each location will be assigned a plate id and moved back in time using the chosen reconstruction model.",
					"url": "https://gws.gplates.org/reconstruct/reconstruct_points/",
					"urlExample": "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140",
					"method": "GET",
					"attributes": [
						{
							"label": "points",
							"name": "points",
							"value": "",
							"required": true,
							"shown": true,
							"example": "95,54",
							"attributeType": "input",
							"description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
							"from": "input"
						},
						{
							"label": "time",
							"name": "time",
							"value": "",
							"required": true,
							"shown": true,
							"example": "140",
							"attributeType": "input",
							"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "coordinates",
							"name": "coordinates",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
					"jsUrlReturnFileSchema": {},
					"fileName": "GPlates Paleo-geographic Coordinates.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "GPlates Paleo-geographic Coordinates",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper"
					}
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "bc19e5a2-5dd0-4858-98e7-33d96713dce3",
			"x": -690.6286950000003,
			"y": -253.72758300000004,
			"label": "",
			"timestamp": 1479115311443,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "comTable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "10bf2cb0-bf60-ab81-2136-30ec47f45ff3",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "4e2862aa-fa04-9ce1-6e81-960e6ba88043",
					"act": "print",
					"outputFileNames": [
						"comTable.csv"
					],
					"printType": "table",
					"resourceid": "3c3bade0-f943-9642-97d1-432242f55dba",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": [
						{
							"functionName": "WebSite",
							"value": "picture"
						},
						{
							"functionName": "WebSite",
							"value": "wiki"
						},
						{
							"functionName": "ShowColor",
							"value": "CssParameter"
						}
					]
				}
			]
		},
		{
			"id": "ea009e1c-c546-4e16-a171-bde736087187",
			"x": 748.5816049999995,
			"y": -99.99708300000005,
			"label": "",
			"timestamp": 1515649034147,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
					"libraryName": "SPARQL Query Generation",
					"libraryId": "5cef7f58-f692-11e7-8c3f-9a214cf093ae",
					"organization": "University of Idaho",
					"id": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
					"functionName": "generateSparqlQuery.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Generate SPARQL query for query ages.",
					"urlReturnFileType": "",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						}
					],
					"type": "function"
				},
				{
					"libraryName": "title function",
					"libraryId": "ab0bbbf0-00a8-4965-bd35-3e07b1d025a1",
					"organization": "University of Idaho",
					"id": "f4499451-6779-46de-8d25-ed50c48c7589",
					"functionName": "title.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "calcuate avarage function",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"resourcesIn": [],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "209f6ee3-b2c7-411a-8daf-b6f2be03bf5c",
			"x": 319.6003049999996,
			"y": -237.62248300000005,
			"label": "",
			"timestamp": 1516146573181,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "layers.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {
						"text": "StyledLayerDescriptor",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "NamedLayer",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "UserStyle",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [
											{
												"text": "FeatureTypeStyle",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "Rule",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [
															{
																"text": "PolygonSymbolizer",
																"a_attr": {
																	"style": ""
																},
																"state": {
																	"opened": true
																},
																"children": [
																	{
																		"text": "Fill",
																		"a_attr": {
																			"style": ""
																		},
																		"state": {
																			"opened": true
																		},
																		"children": [
																			{
																				"text": "CssParameter",
																				"a_attr": {
																					"style": ""
																				},
																				"state": {
																					"opened": true
																				},
																				"children": [],
																				"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/PolygonSymbolizer/Fill/CssParameter"
																			}
																		],
																		"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/PolygonSymbolizer/Fill"
																	}
																],
																"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/PolygonSymbolizer"
															},
															{
																"text": "ogc:Filter",
																"a_attr": {
																	"style": ""
																},
																"state": {
																	"opened": true
																},
																"children": [
																	{
																		"text": "ogc:PropertyIsEqualTo",
																		"a_attr": {
																			"style": ""
																		},
																		"state": {
																			"opened": true
																		},
																		"children": [
																			{
																				"text": "ogc:PropertyName",
																				"a_attr": {
																					"style": ""
																				},
																				"state": {
																					"opened": true
																				},
																				"children": [],
																				"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/ogc:Filter/ogc:PropertyIsEqualTo/ogc:PropertyName"
																			},
																			{
																				"text": "ogc:Literal",
																				"a_attr": {
																					"style": ""
																				},
																				"state": {
																					"opened": true
																				},
																				"children": [],
																				"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/ogc:Filter/ogc:PropertyIsEqualTo/ogc:Literal"
																			}
																		],
																		"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/ogc:Filter/ogc:PropertyIsEqualTo"
																	}
																],
																"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/ogc:Filter"
															},
															{
																"text": "Name",
																"a_attr": {
																	"style": ""
																},
																"state": {
																	"opened": true
																},
																"children": [],
																"xpath": "/StyledLayerDescriptor/NamedLayer/Name"
															}
														],
														"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule"
													}
												],
												"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle"
											}
										],
										"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle"
									},
									{
										"text": "Name",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [],
										"xpath": "/StyledLayerDescriptor/NamedLayer/Name"
									}
								],
								"xpath": "/StyledLayerDescriptor/NamedLayer"
							}
						],
						"xpath": "/StyledLayerDescriptor"
					},
					"id": "a70b035e-ffbe-8453-c4c2-a39715555ca2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "featuretypes.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "b6610198-3f24-b40c-24b1-beacaa2e3201",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "d512e611-1812-b6c2-7e90-2b0f5727e1dd",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "layers.xml",
						"urlReturnFileType": "XML",
						"resourceType": "XML",
						"jsUrlReturnFileSchema": {
							"text": "StyledLayerDescriptor",
							"a_attr": {
								"style": ""
							},
							"state": {
								"opened": true
							},
							"children": [
								{
									"text": "NamedLayer",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": [
										{
											"text": "UserStyle",
											"a_attr": {
												"style": ""
											},
											"state": {
												"opened": true
											},
											"children": [
												{
													"text": "FeatureTypeStyle",
													"a_attr": {
														"style": ""
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "Rule",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [
																{
																	"text": "PolygonSymbolizer",
																	"a_attr": {
																		"style": ""
																	},
																	"state": {
																		"opened": true
																	},
																	"children": [
																		{
																			"text": "Fill",
																			"a_attr": {
																				"style": ""
																			},
																			"state": {
																				"opened": true
																			},
																			"children": [
																				{
																					"text": "CssParameter",
																					"a_attr": {
																						"style": ""
																					},
																					"state": {
																						"opened": true
																					},
																					"children": [],
																					"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/PolygonSymbolizer/Fill/CssParameter"
																				}
																			],
																			"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/PolygonSymbolizer/Fill"
																		}
																	],
																	"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/PolygonSymbolizer"
																},
																{
																	"text": "ogc:Filter",
																	"a_attr": {
																		"style": ""
																	},
																	"state": {
																		"opened": true
																	},
																	"children": [
																		{
																			"text": "ogc:PropertyIsEqualTo",
																			"a_attr": {
																				"style": ""
																			},
																			"state": {
																				"opened": true
																			},
																			"children": [
																				{
																					"text": "ogc:PropertyName",
																					"a_attr": {
																						"style": ""
																					},
																					"state": {
																						"opened": true
																					},
																					"children": [],
																					"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/ogc:Filter/ogc:PropertyIsEqualTo/ogc:PropertyName"
																				},
																				{
																					"text": "ogc:Literal",
																					"a_attr": {
																						"style": ""
																					},
																					"state": {
																						"opened": true
																					},
																					"children": [],
																					"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/ogc:Filter/ogc:PropertyIsEqualTo/ogc:Literal"
																				}
																			],
																			"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/ogc:Filter/ogc:PropertyIsEqualTo"
																		}
																	],
																	"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule/ogc:Filter"
																},
																{
																	"text": "Name",
																	"a_attr": {
																		"style": ""
																	},
																	"state": {
																		"opened": true
																	},
																	"children": [],
																	"xpath": "/StyledLayerDescriptor/NamedLayer/Name"
																}
															],
															"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle/Rule"
														}
													],
													"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle/FeatureTypeStyle"
												}
											],
											"xpath": "/StyledLayerDescriptor/NamedLayer/UserStyle"
										},
										{
											"text": "Name",
											"a_attr": {
												"style": ""
											},
											"state": {
												"opened": true
											},
											"children": [],
											"xpath": "/StyledLayerDescriptor/NamedLayer/Name"
										}
									],
									"xpath": "/StyledLayerDescriptor/NamedLayer"
								}
							],
							"xpath": "/StyledLayerDescriptor"
						},
						"id": "a70b035e-ffbe-8453-c4c2-a39715555ca2",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
					},
					"outputFileNames": [
						"featuretypes.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "CssParameter",
							"input": "",
							"name": "CssParameter",
							"xpath": "//*[local-name()='CssParameter']",
							"attrIndex": 8,
							"totalNodes": 15
						},
						{
							"attribute": "ogc:Literal",
							"input": "",
							"name": "literal",
							"xpath": "//ogc:Literal",
							"attrIndex": 12,
							"totalNodes": 15
						}
					],
					"afterAction": {
						"action": "filter",
						"input": "literal#^((?!Unknown).)*$"
					}
				}
			]
		},
		{
			"id": "cd160ad7-fe39-49ba-866a-601cf1cdd251",
			"x": 94.12890499999962,
			"y": 283.5971169999999,
			"label": "",
			"timestamp": 1516161970435,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "ageTable.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {
						"text": "Result",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "head",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "vars",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [],
										"xpath": "/Result/head/vars"
									}
								],
								"xpath": "/Result/head"
							},
							{
								"text": "results",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "bindings",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [
											{
												"text": "ageUncertainty",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "datatype",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/ageUncertainty/datatype"
													},
													{
														"text": "type",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/ageUncertainty/type"
													},
													{
														"text": "value",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/ageUncertainty/value"
													}
												],
												"xpath": "/Result/results/bindings/ageUncertainty"
											},
											{
												"text": "coordinates",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "value",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/coordinates/value"
													},
													{
														"text": "datatype",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/coordinates/datatype"
													},
													{
														"text": "type",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/coordinates/type"
													}
												],
												"xpath": "/Result/results/bindings/coordinates"
											},
											{
												"text": "detailedConceptName",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "type",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/detailedConceptName/type"
													},
													{
														"text": "xml:lang",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/detailedConceptName/xml:lang"
													},
													{
														"text": "value",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/detailedConceptName/value"
													}
												],
												"xpath": "/Result/results/bindings/detailedConceptName"
											},
											{
												"text": "gsspLabel",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "value",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/gsspLabel/value"
													},
													{
														"text": "xml:lang",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/gsspLabel/xml:lang"
													},
													{
														"text": "type",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/gsspLabel/type"
													},
													{
														"text": "datatype",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/gsspLabel/datatype"
													}
												],
												"xpath": "/Result/results/bindings/gsspLabel"
											},
											{
												"text": "age",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "datatype",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/age/datatype"
													},
													{
														"text": "value",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/age/value"
													},
													{
														"text": "type",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/age/type"
													}
												],
												"xpath": "/Result/results/bindings/age"
											},
											{
												"text": "primaryGuidingCriterion",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "value",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/primaryGuidingCriterion/value"
													},
													{
														"text": "type",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/primaryGuidingCriterion/type"
													},
													{
														"text": "datatype",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/primaryGuidingCriterion/datatype"
													},
													{
														"text": "xml:lang",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/Result/results/bindings/primaryGuidingCriterion/xml:lang"
													}
												],
												"xpath": "/Result/results/bindings/primaryGuidingCriterion"
											}
										],
										"xpath": "/Result/results/bindings"
									}
								],
								"xpath": "/Result/results"
							}
						],
						"xpath": "/Result"
					},
					"id": "16b4a098-ac66-1e29-bee1-d28aa7031c40",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gsspwhole.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "f7e4e127-fcc1-9d49-c47e-a9fd31eb3936",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "c2eefd61-9637-202b-f9c1-f1f2930f1908",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "ageTable.xml",
						"urlReturnFileType": "XML",
						"resourceType": "XML",
						"jsUrlReturnFileSchema": {
							"text": "Result",
							"a_attr": {
								"style": ""
							},
							"state": {
								"opened": true
							},
							"children": [
								{
									"text": "head",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": [
										{
											"text": "vars",
											"a_attr": {
												"style": ""
											},
											"state": {
												"opened": true
											},
											"children": [],
											"xpath": "/Result/head/vars"
										}
									],
									"xpath": "/Result/head"
								},
								{
									"text": "results",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": [
										{
											"text": "bindings",
											"a_attr": {
												"style": ""
											},
											"state": {
												"opened": true
											},
											"children": [
												{
													"text": "ageUncertainty",
													"a_attr": {
														"style": ""
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "datatype",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/ageUncertainty/datatype"
														},
														{
															"text": "type",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/ageUncertainty/type"
														},
														{
															"text": "value",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/ageUncertainty/value"
														}
													],
													"xpath": "/Result/results/bindings/ageUncertainty"
												},
												{
													"text": "coordinates",
													"a_attr": {
														"style": ""
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "value",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/coordinates/value"
														},
														{
															"text": "datatype",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/coordinates/datatype"
														},
														{
															"text": "type",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/coordinates/type"
														}
													],
													"xpath": "/Result/results/bindings/coordinates"
												},
												{
													"text": "detailedConceptName",
													"a_attr": {
														"style": ""
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "type",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/detailedConceptName/type"
														},
														{
															"text": "xml:lang",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/detailedConceptName/xml:lang"
														},
														{
															"text": "value",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/detailedConceptName/value"
														}
													],
													"xpath": "/Result/results/bindings/detailedConceptName"
												},
												{
													"text": "gsspLabel",
													"a_attr": {
														"style": ""
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "value",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/gsspLabel/value"
														},
														{
															"text": "xml:lang",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/gsspLabel/xml:lang"
														},
														{
															"text": "type",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/gsspLabel/type"
														},
														{
															"text": "datatype",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/gsspLabel/datatype"
														}
													],
													"xpath": "/Result/results/bindings/gsspLabel"
												},
												{
													"text": "age",
													"a_attr": {
														"style": ""
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "datatype",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/age/datatype"
														},
														{
															"text": "value",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/age/value"
														},
														{
															"text": "type",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/age/type"
														}
													],
													"xpath": "/Result/results/bindings/age"
												},
												{
													"text": "primaryGuidingCriterion",
													"a_attr": {
														"style": ""
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "value",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/primaryGuidingCriterion/value"
														},
														{
															"text": "type",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/primaryGuidingCriterion/type"
														},
														{
															"text": "datatype",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/primaryGuidingCriterion/datatype"
														},
														{
															"text": "xml:lang",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/Result/results/bindings/primaryGuidingCriterion/xml:lang"
														}
													],
													"xpath": "/Result/results/bindings/primaryGuidingCriterion"
												}
											],
											"xpath": "/Result/results/bindings"
										}
									],
									"xpath": "/Result/results"
								}
							],
							"xpath": "/Result"
						},
						"id": "16b4a098-ac66-1e29-bee1-d28aa7031c40",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
					},
					"outputFileNames": [
						"gsspwhole.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "value",
							"input": "",
							"name": "coordinates",
							"xpath": "/Result/results/bindings/coordinates/value",
							"attrIndex": 11,
							"totalNodes": 32
						},
						{
							"attribute": "value",
							"input": "",
							"name": "detailedConceptName",
							"xpath": "/Result/results/bindings/detailedConceptName/value",
							"attrIndex": 17,
							"totalNodes": 32
						},
						{
							"attribute": "value",
							"input": "",
							"name": "term",
							"xpath": "/Result/results/bindings/gsspLabel/value",
							"attrIndex": 19,
							"totalNodes": 32
						},
						{
							"attribute": "value",
							"input": "",
							"name": "age",
							"xpath": "/Result/results/bindings/age/value",
							"attrIndex": 25,
							"totalNodes": 32
						},
						{
							"attribute": "value",
							"input": "",
							"name": "primaryGuidingCriterion",
							"xpath": "/Result/results/bindings/primaryGuidingCriterion/value",
							"attrIndex": 28,
							"totalNodes": 32
						}
					],
					"afterAction": {
						"action": "none"
					}
				}
			]
		},
		{
			"id": "c23fd36d-3c3e-464d-8c17-58b596b2b4e8",
			"x": -187.51056077262353,
			"y": -93.30777190162235,
			"label": "",
			"timestamp": 1516299786589,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gsspwhole.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "f7e4e127-fcc1-9d49-c47e-a9fd31eb3936",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gsspwhole.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "detailedConceptName",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "age",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "primaryGuidingCriterion",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				},
				{
					"urlReturnFileName": "gssp.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "99455ab7-6496-3320-7ad5-fd4225ef8417",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gssp.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gsspDetail.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "141ad46b-a988-aadc-bf4e-23fd35a1136f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "5f93cd8e-aa54-6c19-92d4-233e107c61a3",
					"act": "MergeTable",
					"outputFileNames": [
						"gsspDetail.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "appendwithmapkey",
					"mergeTableSelectInput": "gssp.csv,gssp#gsspwhole.csv,term#coordinates,age,primaryGuidingCriterion",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "52212f6c-45dc-4eac-82b3-ee5cd8a9df5f",
			"x": 42.885404999999615,
			"y": 74.23081699999994,
			"label": "",
			"timestamp": 1516301307986,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gsspinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "61715aed-9746-01de-e63b-0fef86c645fc",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gsspinfo.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gssp.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "99455ab7-6496-3320-7ad5-fd4225ef8417",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "40554fe1-1642-b243-6149-9f3651c6997f",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "gsspinfo.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"id": "61715aed-9746-01de-e63b-0fef86c645fc",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"jsUrlReturnFileSchema": {
							"text": "gsspinfo.csv",
							"a_attr": {
								"style": ""
							},
							"state": {
								"opened": true
							},
							"children": [
								{
									"text": "gssp",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "term",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								}
							]
						}
					},
					"outputFileNames": [
						"gssp.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "gssp",
							"name": "gssp"
						},
						{
							"attribute": "term",
							"name": "term"
						}
					],
					"newAttrs": [],
					"afterAction": {
						"action": "filter",
						"input": "gssp#"
					}
				}
			]
		},
		{
			"id": "362135ad-7d23-4772-ad6f-0ab2569a6621",
			"x": -397.80869500000034,
			"y": -319.61208300000004,
			"label": "",
			"timestamp": 1516317512436,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Purdue GSSP Info",
					"libraryId": "530b843a-4de1-4cb3-87a1-e8fd161c0151",
					"organization": "University of Idaho",
					"id": "7cab97c0-7bd0-4468-94d9-7fd808db2f61",
					"functionName": "generatePurdueGsspLink.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Generate Purdue GSSP web link information",
					"urlReturnFileType": "",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "term",
							"attributeType": "input",
							"description": "attribute",
							"from": "default"
						}
					],
					"type": "function"
				},
				{
					"libraryName": "add wiki function",
					"libraryId": "422d7bee-2137-416b-9ced-50b00212e836",
					"organization": "University of Idaho",
					"id": "4a90b1b9-02ca-4b23-83d3-82d75bfb6b41",
					"functionName": "addwiki.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "add wiki url for gssp names",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"resourcesIn": [],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "64b5e4bf-f89c-4d97-8e24-f7dc8e942659",
			"x": -358.4183588259331,
			"y": -130.11621014023947,
			"label": "",
			"timestamp": 1516317731035,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gssptable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "cece4d1d-f08e-a26f-80df-b3b5c446df7b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gssptable.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "age",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "primaryGuidingCriterion",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "CssParameter",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "wiki",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "fossilinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "8ee3bd9c-4d95-d7e9-4a1c-49ca38613263",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "Purdue GSSP Info",
					"libraryId": "530b843a-4de1-4cb3-87a1-e8fd161c0151",
					"organization": "University of Idaho",
					"id": "7cab97c0-7bd0-4468-94d9-7fd808db2f61",
					"functionName": "generatePurdueGsspLink.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Generate Purdue GSSP web link information",
					"urlReturnFileType": "",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "term",
							"attributeType": "input",
							"description": "attribute",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"actions": [
				{
					"id": "d3ed7849-cf1d-8558-eb51-22da2b7a6d4a",
					"act": "Function",
					"inputFileNames": [
						"gsstable.csv"
					],
					"outputFileNames": [
						"fossilinfo.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetFunction": {
						"libraryName": "Purdue GSSP Info",
						"libraryId": "530b843a-4de1-4cb3-87a1-e8fd161c0151",
						"organization": "University of Idaho",
						"id": "7cab97c0-7bd0-4468-94d9-7fd808db2f61",
						"functionName": "generatePurdueGsspLink.py",
						"functionType": "python executable",
						"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
						"description": "Generate Purdue GSSP web link information",
						"urlReturnFileType": "",
						"attributes": [
							{
								"label": "outFile",
								"name": "-outFile",
								"type": "String",
								"value": "fossilinfo.csv",
								"required": true,
								"shown": true,
								"example": "sparqlQuery.csv",
								"attributeType": "input",
								"description": "output file",
								"from": "input"
							},
							{
								"label": "inputFile",
								"name": "-inputFile",
								"type": "String",
								"value": "gssptable.csv",
								"required": true,
								"shown": true,
								"example": "title.csv",
								"attributeType": "input",
								"description": "Input File Name",
								"from": "input"
							},
							{
								"label": "attribute",
								"name": "-attribute",
								"type": "String",
								"value": "term",
								"required": true,
								"shown": true,
								"example": "term",
								"attributeType": "input",
								"description": "attribute",
								"from": "input"
							}
						],
						"type": "function",
						"comandLine": ""
					}
				}
			]
		},
		{
			"id": "5573cf7f-3ed9-4539-8d02-d48b010df954",
			"x": -229.43719500000037,
			"y": 402.1892169999999,
			"label": "",
			"timestamp": 1516322907018,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
					"resourceType": "HTTPS",
					"organization": "GPlates",
					"resourceName": "GPlates Paleo-geographic Coordinates",
					"description": "Reconstruct the geographic locations from present day coordinates back to their paleo-positions. Each location will be assigned a plate id and moved back in time using the chosen reconstruction model.",
					"url": "https://gws.gplates.org/reconstruct/reconstruct_points/",
					"urlExample": "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140",
					"method": "GET",
					"attributes": [
						{
							"label": "points",
							"name": "points",
							"value": "",
							"required": true,
							"shown": true,
							"example": "95,54",
							"attributeType": "input",
							"description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
							"from": "input"
						},
						{
							"label": "time",
							"name": "time",
							"value": "",
							"required": true,
							"shown": true,
							"example": "140",
							"attributeType": "input",
							"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "coordinates",
							"name": "coordinates",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
					"jsUrlReturnFileSchema": {},
					"fileName": "GPlates Paleo-geographic Coordinates.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "GPlates Paleo-geographic Coordinates",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper"
					}
				},
				{
					"urlReturnFileName": "gplateinput.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "a39224d5-ebf1-6298-7625-507d3d05fc0c",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gplateinput.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "points",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "time",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gsspCoord.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {},
					"id": "13f0b927-a60e-8e42-bae5-45a7175e04bf",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"gsspCoord.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
						"resourceType": "HTTPS",
						"organization": "GPlates",
						"resourceName": "GPlates Paleo-geographic Coordinates",
						"description": "Reconstruct the geographic locations from present day coordinates back to their paleo-positions. Each location will be assigned a plate id and moved back in time using the chosen reconstruction model.",
						"url": "https://gws.gplates.org/reconstruct/reconstruct_points/",
						"urlExample": "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140",
						"method": "GET",
						"attributes": [
							{
								"label": "points",
								"name": "points",
								"value": "points",
								"required": true,
								"shown": true,
								"example": "95,54",
								"attributeType": "input",
								"description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
								"from": "gplateinput.csv"
							},
							{
								"label": "time",
								"name": "time",
								"value": "time",
								"required": true,
								"shown": true,
								"example": "140",
								"attributeType": "input",
								"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
								"from": "gplateinput.csv"
							}
						],
						"outAttributes": [
							{
								"label": "coordinates",
								"name": "coordinates",
								"type": "string"
							}
						],
						"methodReturnFileType": "JSON",
						"urlReturnFileType": "XML",
						"urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
						"jsUrlReturnFileSchema": {},
						"fileName": "GPlates Paleo-geographic Coordinates.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "GPlates Paleo-geographic Coordinates",
						"wrapper": {
							"wrapperName": "jsonTOxmlWrapper"
						}
					}
				}
			]
		},
		{
			"id": "ca8fbf35-2646-4b14-8b03-491b9518a2ee",
			"x": 160.0134049999996,
			"y": 192.82291699999993,
			"label": "",
			"timestamp": 1516430699039,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gsspLabel.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {
						"text": "AppendResultSet",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "results",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "bindings",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [
											{
												"text": "gsspLabel",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "type",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/AppendResultSet/results/bindings/gsspLabel/type"
													},
													{
														"text": "datatype",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/AppendResultSet/results/bindings/gsspLabel/datatype"
													},
													{
														"text": "xml:lang",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/AppendResultSet/results/bindings/gsspLabel/xml:lang"
													},
													{
														"text": "value",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/AppendResultSet/results/bindings/gsspLabel/value"
													}
												],
												"xpath": "/AppendResultSet/results/bindings/gsspLabel"
											}
										],
										"xpath": "/AppendResultSet/results/bindings"
									}
								],
								"xpath": "/AppendResultSet/results"
							},
							{
								"text": "head",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "vars",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [],
										"xpath": "/AppendResultSet/head/vars"
									}
								],
								"xpath": "/AppendResultSet/head"
							},
							{
								"text": "ConverJSONError",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [],
								"xpath": "/AppendResultSet/ConverJSONError"
							}
						],
						"xpath": "/AppendResultSet"
					},
					"id": "df734a85-388f-5fe6-c40e-5be466471c91",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gsspAll.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "16a38a14-a5d6-caec-6aeb-f712175d0139",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "0315843c-d5f6-273f-c4a8-04fe52e51359",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "gsspLabel.xml",
						"urlReturnFileType": "XML",
						"resourceType": "XML",
						"jsUrlReturnFileSchema": {
							"text": "AppendResultSet",
							"a_attr": {
								"style": ""
							},
							"state": {
								"opened": true
							},
							"children": [
								{
									"text": "results",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": [
										{
											"text": "bindings",
											"a_attr": {
												"style": ""
											},
											"state": {
												"opened": true
											},
											"children": [
												{
													"text": "gsspLabel",
													"a_attr": {
														"style": ""
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "type",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/AppendResultSet/results/bindings/gsspLabel/type"
														},
														{
															"text": "datatype",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/AppendResultSet/results/bindings/gsspLabel/datatype"
														},
														{
															"text": "xml:lang",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/AppendResultSet/results/bindings/gsspLabel/xml:lang"
														},
														{
															"text": "value",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": [],
															"xpath": "/AppendResultSet/results/bindings/gsspLabel/value"
														}
													],
													"xpath": "/AppendResultSet/results/bindings/gsspLabel"
												}
											],
											"xpath": "/AppendResultSet/results/bindings"
										}
									],
									"xpath": "/AppendResultSet/results"
								},
								{
									"text": "head",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": [
										{
											"text": "vars",
											"a_attr": {
												"style": ""
											},
											"state": {
												"opened": true
											},
											"children": [],
											"xpath": "/AppendResultSet/head/vars"
										}
									],
									"xpath": "/AppendResultSet/head"
								},
								{
									"text": "ConverJSONError",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": [],
									"xpath": "/AppendResultSet/ConverJSONError"
								}
							],
							"xpath": "/AppendResultSet"
						},
						"id": "df734a85-388f-5fe6-c40e-5be466471c91",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
					},
					"outputFileNames": [
						"gsspAll.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"selectAttrs": [],
					"newAttrs": [],
					"afterAction": {
						"action": "rowReplace",
						"input": "<Con.*>#<head><vars>gsspLabel</vars></head><results></results>"
					}
				}
			]
		},
		{
			"id": "ed5ffe1d-0f04-4d21-b301-116b3aa6da48",
			"x": 293.2465049999996,
			"y": -104.38938300000004,
			"label": "",
			"timestamp": 1516824434581,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "featuretypes.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "b6610198-3f24-b40c-24b1-beacaa2e3201",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "featuretypes.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "CssParameter",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "literal",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "titledLieral.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0ef16b6f-3850-fcac-9d87-b06b6d8e2ff3",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "title function",
					"libraryId": "ab0bbbf0-00a8-4965-bd35-3e07b1d025a1",
					"organization": "University of Idaho",
					"id": "f4499451-6779-46de-8d25-ed50c48c7589",
					"functionName": "title.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "calcuate avarage function",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "titledLieral.csv",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "featuretypes.csv",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "literal",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "literal",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"actions": [
				{
					"id": "7ec9a553-2bd6-6cef-b056-ac644e373b87",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [
						{
                            "inputType": "csv",
							"Resource": "featuretypes.csv",
							"Type": "CSV"
						}
					],
					"inputFileNames": [
						"featuretypes.csv"
					],
					"outputFileNames": [
						"titledLieral.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [
						{
							"attribute": "literal",
							"name": "",
							"action": {
								"libraryName": "title function",
								"libraryId": "ab0bbbf0-00a8-4965-bd35-3e07b1d025a1",
								"organization": "University of Idaho",
								"id": "f4499451-6779-46de-8d25-ed50c48c7589",
								"functionName": "title.py",
								"functionType": "python executable",
								"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
								"description": "calcuate avarage function",
								"urlReturnFileType": "csv",
								"attributes": [
									{
										"label": "outFile",
										"name": "-outFile",
										"type": "String",
										"value": "titledLieral.csv",
										"required": true,
										"shown": true,
										"example": "sparqlQuery.csv",
										"attributeType": "input",
										"description": "output file",
										"from": "default"
									},
									{
										"label": "inputFile",
										"name": "-inputFile",
										"type": "String",
										"value": "featuretypes.csv",
										"required": true,
										"shown": true,
										"example": "title.csv",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "attribute",
										"name": "-attribute",
										"type": "String",
										"value": "literal",
										"required": true,
										"shown": true,
										"example": "ncib-geneid",
										"attributeType": "input",
										"description": "Input",
										"from": "default"
									},
									{
										"label": "name",
										"name": "-name",
										"type": "String",
										"value": "literal",
										"required": true,
										"shown": true,
										"example": "ncbigeneid",
										"attributeType": "input",
										"description": "attribute new name",
										"from": "default"
									}
								],
								"type": "function"
							}
						}
					],
					"newAttrs": []
				}
			]
		},
		{
			"id": "018e6a51-ad99-494e-a747-415ef972ef8d",
			"x": 457.2257049999996,
			"y": 6.882216999999949,
			"label": "",
			"timestamp": 1516825190758,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "titledLieral.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0ef16b6f-3850-fcac-9d87-b06b6d8e2ff3",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "titledLieral.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "CssParameter",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "literal",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "title.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ab1b3f34-c230-f7f9-b986-36458f83b45f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "3ebd9143-0ebc-ab4f-6a2f-55c51ae8e995",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "titledLieral.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"id": "0ef16b6f-3850-fcac-9d87-b06b6d8e2ff3",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"jsUrlReturnFileSchema": {
							"text": "titledLieral.csv",
							"a_attr": {
								"style": ""
							},
							"state": {
								"opened": true
							},
							"children": [
								{
									"text": "CssParameter",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "literal",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								}
							]
						}
					},
					"outputFileNames": [
						"title.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "literal",
							"name": "term"
						}
					],
					"newAttrs": [],
					"afterAction": {
						"action": "none",
						"input": ""
					}
				}
			]
		},
		{
			"id": "243dc7e9-a44d-4398-bed1-bbd37aac5118",
			"x": 278.6055049999996,
			"y": 84.47951699999994,
			"label": "",
			"timestamp": 1516856561017,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "title.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ab1b3f34-c230-f7f9-b986-36458f83b45f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "title.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				},
				{
					"urlReturnFileName": "gsspAll.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "16a38a14-a5d6-caec-6aeb-f712175d0139",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "AppendResultSet",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "results",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "bindings",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [
											{
												"text": "gsspLabel",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "type",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/AppendResultSet/results/bindings/gsspLabel/type"
													},
													{
														"text": "datatype",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/AppendResultSet/results/bindings/gsspLabel/datatype"
													},
													{
														"text": "xml:lang",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/AppendResultSet/results/bindings/gsspLabel/xml:lang"
													},
													{
														"text": "value",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": [],
														"xpath": "/AppendResultSet/results/bindings/gsspLabel/value"
													}
												],
												"xpath": "/AppendResultSet/results/bindings/gsspLabel"
											}
										],
										"xpath": "/AppendResultSet/results/bindings"
									}
								],
								"xpath": "/AppendResultSet/results"
							},
							{
								"text": "head",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "vars",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [],
										"xpath": "/AppendResultSet/head/vars"
									}
								],
								"xpath": "/AppendResultSet/head"
							}
						],
						"xpath": "/AppendResultSet"
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gsspinfoTmp.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "65199e25-9213-a789-2ab7-a2ee8c440350",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "8f24e0b9-276a-00b9-6f15-33e8a187e87c",
					"act": "MergeTable",
					"outputFileNames": [
						"gsspinfoTmp.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "selectandappendbyrow",
					"mergeTableSelectInput": "title.csv#gsspAll.xml",
					"selectAttrs": [
						{
							"attribute": "term",
							"name": "term",
							"resourceName": "title.csv"
						},
						{
							"attribute": "results",
							"name": "gssp",
							"xpath": "/AppendResultSet/results",
							"resourceName": "gsspAll.xml"
						}
					]
				}
			]
		},
		{
			"id": "c97252cf-566b-477c-940d-ba9f6c9354e0",
			"x": 190.7595049999996,
			"y": -42.89718300000005,
			"label": "",
			"timestamp": 1516858335463,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gsspinfoTmp.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "65199e25-9213-a789-2ab7-a2ee8c440350",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gsspinfoTmp.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gsspinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "61715aed-9746-01de-e63b-0fef86c645fc",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "Replace function",
					"libraryId": "1f40e40c-5021-4295-a307-75d859e054bb",
					"organization": "University of Idaho",
					"id": "ae4b0429-dae5-4dc3-9a24-ef816a893561",
					"functionName": "replace.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "replace function",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "genes",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"actions": [
				{
					"id": "515c9380-df6e-455f-96f6-fba28bc5729e",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [
						{
                            "inputType": "csv",
							"Resource": "gsspinfoTmp.csv",
							"Type": "CSV"
						}
					],
					"inputFileNames": [
						"gsspinfoTmp.csv"
					],
					"outputFileNames": [
						"gsspinfo.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [],
					"newAttrs": []
				}
			]
		},
		{
			"id": "7ff05ac0-d065-4fb0-948d-e5debbf4c6da",
			"x": 78.02380499999961,
			"y": -135.13548300000005,
			"label": "",
			"timestamp": 1516858348816,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Replace function",
					"libraryId": "1f40e40c-5021-4295-a307-75d859e054bb",
					"organization": "University of Idaho",
					"id": "ae4b0429-dae5-4dc3-9a24-ef816a893561",
					"functionName": "replace.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "replace function",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "genes",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				},
				{
					"libraryName": "add wiki function",
					"libraryId": "422d7bee-2137-416b-9ced-50b00212e836",
					"organization": "University of Idaho",
					"id": "4a90b1b9-02ca-4b23-83d3-82d75bfb6b41",
					"functionName": "addwiki.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "add wiki url for gssp names",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"resourcesIn": [],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "b0710a39-2902-462f-80a5-a0bc7ba60106",
			"x": -204.54749500000037,
			"y": 78.62311699999994,
			"label": "",
			"timestamp": 1516864074025,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "fossilinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "8ee3bd9c-4d95-d7e9-4a1c-49ca38613263",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "fossilinfo.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "age",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "primaryGuidingCriterion",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "CssParameter",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "wiki",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "picture",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gplateinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "79aa5779-e7a1-7007-f9df-5e01a8494add",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "Split and add new column function",
					"libraryId": "fb2a7de2-d8f5-4d42-a5e6-91ee1be0c409",
					"organization": "University of Idaho",
					"id": "40fc7357-43c0-4322-8b35-7ed3805d0b78",
					"functionName": "splitadd.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "splite an attribute and add new column",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "genes",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"actions": [
				{
					"id": "8192234e-53b7-b0a7-3516-8a204c3a1e92",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"fossilinfo.csv"
					],
					"outputFileNames": [
						"gplateinfo.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [],
					"newAttrs": [
						{
							"attribute": "lng",
							"action": {
								"libraryName": "Split and add new column function",
								"libraryId": "fb2a7de2-d8f5-4d42-a5e6-91ee1be0c409",
								"organization": "University of Idaho",
								"id": "40fc7357-43c0-4322-8b35-7ed3805d0b78",
								"functionName": "splitadd.py",
								"functionType": "python executable",
								"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
								"description": "splite an attribute and add new column",
								"urlReturnFileType": "csv",
								"attributes": [
									{
										"label": "outFile",
										"name": "-outFile",
										"type": "String",
										"value": "gplateinfo.csv",
										"required": true,
										"shown": true,
										"example": "sparqlQuery.csv",
										"attributeType": "input",
										"description": "output file",
										"from": "default"
									},
									{
										"label": "inputFile",
										"name": "-inputFile",
										"type": "String",
										"value": "fossilinfo.csv",
										"required": true,
										"shown": true,
										"example": "title.csv",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "attribute",
										"name": "-attribute",
										"type": "String",
										"value": "coordinates",
										"required": true,
										"shown": true,
										"example": "genes",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "actionInput",
										"name": "-actionInput",
										"type": "String",
										"value": " #1",
										"required": true,
										"shown": true,
										"example": "ncib-geneid",
										"attributeType": "input",
										"description": "Input",
										"from": "default"
									},
									{
										"label": "name",
										"name": "-name",
										"type": "String",
										"value": "lng",
										"required": true,
										"shown": true,
										"example": "ncbigeneid",
										"attributeType": "input",
										"description": "attribute new name",
										"from": "default"
									}
								],
								"type": "function"
							},
							"resourceName": "fossilinfo.csv"
						},
						{
							"attribute": "lat",
							"action": {
								"libraryName": "Split and add new column function",
								"libraryId": "fb2a7de2-d8f5-4d42-a5e6-91ee1be0c409",
								"organization": "University of Idaho",
								"id": "40fc7357-43c0-4322-8b35-7ed3805d0b78",
								"functionName": "splitadd.py",
								"functionType": "python executable",
								"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
								"description": "splite an attribute and add new column",
								"urlReturnFileType": "csv",
								"attributes": [
									{
										"label": "outFile",
										"name": "-outFile",
										"type": "String",
										"value": "gplateinfo.csv",
										"required": true,
										"shown": true,
										"example": "sparqlQuery.csv",
										"attributeType": "input",
										"description": "output file",
										"from": "default"
									},
									{
										"label": "inputFile",
										"name": "-inputFile",
										"type": "String",
										"value": "fossilinfo.csv",
										"required": true,
										"shown": true,
										"example": "title.csv",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "attribute",
										"name": "-attribute",
										"type": "String",
										"value": "coordinates",
										"required": true,
										"shown": true,
										"example": "genes",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "actionInput",
										"name": "-actionInput",
										"type": "String",
										"value": " #0",
										"required": true,
										"shown": true,
										"example": "ncib-geneid",
										"attributeType": "input",
										"description": "Input",
										"from": "default"
									},
									{
										"label": "name",
										"name": "-name",
										"type": "String",
										"value": "lat",
										"required": true,
										"shown": true,
										"example": "ncbigeneid",
										"attributeType": "input",
										"description": "attribute new name",
										"from": "default"
									}
								],
								"type": "function"
							},
							"resourceName": "fossilinfo.csv"
						}
					]
				}
			]
		},
		{
			"id": "1a0154cb-60e8-45a0-89d5-19e5719a5edb",
			"x": -465.1572950000003,
			"y": 222.10491699999994,
			"label": "",
			"timestamp": 1516864097235,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Split and add new column function",
					"libraryId": "fb2a7de2-d8f5-4d42-a5e6-91ee1be0c409",
					"organization": "University of Idaho",
					"id": "40fc7357-43c0-4322-8b35-7ed3805d0b78",
					"functionName": "splitadd.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "splite an attribute and add new column",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "genes",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				},
				{
					"libraryName": "Select and merge function",
					"libraryId": "5fa9d88a-701a-4a52-9ca1-1732ee037a17",
					"organization": "University of Idaho",
					"id": "065c2c7b-162c-49ec-b61e-f86da670adf7",
					"functionName": "selectandmerge.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Select and merge function",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"resourcesIn": [],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "10a611ff-db6a-4fc5-bb4f-4867eb109533",
			"x": -49.35289500000037,
			"y": 207.46391699999992,
			"label": "",
			"timestamp": 1516864845020,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gplateinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "79aa5779-e7a1-7007-f9df-5e01a8494add",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gplateinfo.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "age",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "primaryGuidingCriterion",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "CssParameter",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "wiki",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "picture",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gplate.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "99dd2802-58df-e9ae-a84e-2e261c737392",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "Select and merge function",
					"libraryId": "5fa9d88a-701a-4a52-9ca1-1732ee037a17",
					"organization": "University of Idaho",
					"id": "065c2c7b-162c-49ec-b61e-f86da670adf7",
					"functionName": "selectandmerge.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Select and merge function",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"actions": [
				{
					"id": "5352dc90-c3bd-cc32-cb00-d8368228f8c5",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"gplateinfo.csv"
					],
					"outputFileNames": [
						"gplate.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [],
					"newAttrs": [
						{
							"attribute": "points",
							"action": {
								"libraryName": "Select and merge function",
								"libraryId": "5fa9d88a-701a-4a52-9ca1-1732ee037a17",
								"organization": "University of Idaho",
								"id": "065c2c7b-162c-49ec-b61e-f86da670adf7",
								"functionName": "selectandmerge.py",
								"functionType": "python executable",
								"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
								"description": "Select and merge function",
								"urlReturnFileType": "csv",
								"attributes": [
									{
										"label": "outFile",
										"name": "-outFile",
										"type": "String",
										"value": "gplate.csv",
										"required": true,
										"shown": true,
										"example": "sparqlQuery.csv",
										"attributeType": "input",
										"description": "output file",
										"from": "default"
									},
									{
										"label": "inputFile",
										"name": "-inputFile",
										"type": "String",
										"value": "gplateinfo.csv",
										"required": true,
										"shown": true,
										"example": "title.csv",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "actionInput",
										"name": "-actionInput",
										"type": "String",
										"value": ",#lng,lat",
										"required": true,
										"shown": true,
										"example": "ncib-geneid",
										"attributeType": "input",
										"description": "Input",
										"from": "default"
									},
									{
										"label": "name",
										"name": "-name",
										"type": "String",
										"value": "points",
										"required": true,
										"shown": true,
										"example": "ncbigeneid",
										"attributeType": "input",
										"description": "attribute new name",
										"from": "default"
									}
								],
								"type": "function"
							},
							"resourceName": "gplateinfo.csv"
						}
					]
				}
			]
		},
		{
			"id": "fda87bab-9f6d-4968-b599-a78789e2e4de",
			"x": -229.43719500000037,
			"y": 274.81251699999996,
			"label": "",
			"timestamp": 1516865477610,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gplate.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "99dd2802-58df-e9ae-a84e-2e261c737392",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gplate.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "age",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "primaryGuidingCriterion",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "CssParameter",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "wiki",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "picture",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "points",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gplateinput.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "a39224d5-ebf1-6298-7625-507d3d05fc0c",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "190fbd52-25e7-b461-5c34-9e1fb9a2b4a1",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "gplate.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"id": "99dd2802-58df-e9ae-a84e-2e261c737392",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"jsUrlReturnFileSchema": {
							"text": "gplate.csv",
							"a_attr": {
								"style": ""
							},
							"state": {
								"opened": true
							},
							"children": [
								{
									"text": "gssp",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "term",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "coordinates",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "age",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "primaryGuidingCriterion",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "CssParameter",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "wiki",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "picture",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "lng",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "lat",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "points",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								}
							]
						}
					},
					"outputFileNames": [
						"gplateinput.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "age",
							"name": "time"
						},
						{
							"attribute": "points",
							"name": "points"
						}
					],
					"newAttrs": [],
					"afterAction": {
						"action": "none",
						"input": ""
					}
				}
			]
		},
		{
			"id": "551f2fe5-a65a-4d43-86da-c759195a569f",
			"x": -526.6494950000003,
			"y": 402.1892169999999,
			"label": "",
			"timestamp": 1516865898086,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gsspCoord.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {
						"text": "AppendResultSet",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "array",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [],
										"xpath": "/AppendResultSet/coordinates/array"
									}
								],
								"xpath": "/AppendResultSet/coordinates"
							},
							{
								"text": "type",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [],
								"xpath": "/AppendResultSet/type"
							}
						],
						"xpath": "/AppendResultSet"
					},
					"id": "13f0b927-a60e-8e42-bae5-45a7175e04bf",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gsspCoord.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "501afed3-d065-ea3e-78a6-03f5aea932f7",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "66f61236-ab9c-ab52-5a3c-5b94256fb8f6",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "gsspCoord.xml",
						"urlReturnFileType": "XML",
						"resourceType": "XML",
						"jsUrlReturnFileSchema": {
							"text": "AppendResultSet",
							"a_attr": {
								"style": ""
							},
							"state": {
								"opened": true
							},
							"children": [
								{
									"text": "coordinates",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": [
										{
											"text": "array",
											"a_attr": {
												"style": ""
											},
											"state": {
												"opened": true
											},
											"children": [],
											"xpath": "/AppendResultSet/coordinates/array"
										}
									],
									"xpath": "/AppendResultSet/coordinates"
								},
								{
									"text": "type",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": [],
									"xpath": "/AppendResultSet/type"
								}
							],
							"xpath": "/AppendResultSet"
						},
						"id": "13f0b927-a60e-8e42-bae5-45a7175e04bf",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
					},
					"outputFileNames": [
						"gsspCoord.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [],
					"newAttrs": [
						{
							"attribute": "oldLng",
							"xpath": "/AppendResultSet/coordinates/array[1]"
						},
						{
							"attribute": "oldLat",
							"xpath": "/AppendResultSet/coordinates/array[2]"
						}
					],
					"afterAction": {
						"action": "none",
						"input": ""
					}
				}
			]
		},
		{
			"id": "7e371656-1f4b-4227-9ac7-e617ca777700",
			"x": 77.7969556402312,
			"y": -241.96053174976302,
			"label": "",
			"timestamp": 1516868064788,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gsspDetail.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "141ad46b-a988-aadc-bf4e-23fd35a1136f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gsspDetail.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "age",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "primaryGuidingCriterion",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				},
				{
					"urlReturnFileName": "titledLieral.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0ef16b6f-3850-fcac-9d87-b06b6d8e2ff3",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "titledLieral.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "CssParameter",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "literal",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gsspmerged.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "d54fa108-fe3b-3caa-8955-466416871fc4",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "e9a08899-b1ff-a5fd-7efb-3d604e7c6aee",
					"act": "MergeTable",
					"outputFileNames": [
						"gsspmerged.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "appendwithmapkey",
					"mergeTableSelectInput": "gsspDetail.csv,term#titledLieral.csv,literal#CssParameter",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "f1e8db27-f9fb-4be5-8840-87763968f1e6",
			"x": -163.62737321771192,
			"y": -252.82084363925998,
			"label": "",
			"timestamp": 1516868393720,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gsspmerged.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "d54fa108-fe3b-3caa-8955-466416871fc4",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gsspmerged.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "age",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "primaryGuidingCriterion",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "CssParameter",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gssptable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "cece4d1d-f08e-a26f-80df-b3b5c446df7b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "add wiki function",
					"libraryId": "422d7bee-2137-416b-9ced-50b00212e836",
					"organization": "University of Idaho",
					"id": "4a90b1b9-02ca-4b23-83d3-82d75bfb6b41",
					"functionName": "addwiki.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "add wiki url for gssp names",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"actions": [
				{
					"id": "8741aaca-d06f-9809-afc0-3c23c14c59ec",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"gsspmerged.csv"
					],
					"outputFileNames": [
						"gssptable.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [],
					"newAttrs": [
						{
							"attribute": "wiki",
							"action": {
								"libraryName": "add wiki function",
								"libraryId": "422d7bee-2137-416b-9ced-50b00212e836",
								"organization": "University of Idaho",
								"id": "4a90b1b9-02ca-4b23-83d3-82d75bfb6b41",
								"functionName": "addwiki.py",
								"functionType": "python executable",
								"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
								"description": "add wiki url for gssp names",
								"urlReturnFileType": "csv",
								"attributes": [
									{
										"label": "outFile",
										"name": "-outFile",
										"type": "String",
										"value": "gssptable.csv",
										"required": true,
										"shown": true,
										"example": "sparqlQuery.csv",
										"attributeType": "input",
										"description": "output file",
										"from": "default"
									},
									{
										"label": "inputFile",
										"name": "-inputFile",
										"type": "String",
										"value": "gsspmerged.csv",
										"required": true,
										"shown": true,
										"example": "title.csv",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "attribute",
										"name": "-attribute",
										"type": "String",
										"value": "term",
										"required": true,
										"shown": true,
										"example": "ncib-geneid",
										"attributeType": "input",
										"description": "Input",
										"from": "default"
									},
									{
										"label": "name",
										"name": "-name",
										"type": "String",
										"value": "wiki",
										"required": true,
										"shown": true,
										"example": "ncbigeneid",
										"attributeType": "input",
										"description": "attribute new name",
										"from": "default"
									}
								],
								"type": "function"
							},
							"resourceName": "gsspmerged.csv"
						}
					]
				}
			]
		},
		{
			"id": "bb278f1e-fdc2-40fb-8b04-4114edfe4e1d",
			"x": -696.4850950000003,
			"y": 90.33591699999994,
			"label": "",
			"timestamp": 1516869147364,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gsspCoord.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "501afed3-d065-ea3e-78a6-03f5aea932f7",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "gsspCoord.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "oldLng",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "oldLat",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				},
				{
					"urlReturnFileName": "fossiltable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "80fdd384-ced7-4db2-6b13-7a6d72b3d004",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "fossiltable.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "age",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "primaryGuidingCriterion",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "CssParameter",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "wiki",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "picture",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "comTable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "10bf2cb0-bf60-ab81-2136-30ec47f45ff3",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "29aa328e-ddb7-f155-6d16-bfb7c9382e44",
					"act": "MergeTable",
					"outputFileNames": [
						"comTable.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "selectandappendbyrow",
					"mergeTableSelectInput": "fossiltable.csv#gsspCoord.csv",
					"selectAttrs": [
						{
							"attribute": "oldLng",
							"name": "oldLng",
							"resourceName": "gsspCoord.csv"
						},
						{
							"attribute": "oldLat",
							"name": "oldLat",
							"resourceName": "gsspCoord.csv"
						},
						{
							"attribute": "gssp",
							"name": "gssp",
							"resourceName": "fossiltable.csv"
						},
						{
							"attribute": "term",
							"name": "term",
							"resourceName": "fossiltable.csv"
						},
						{
							"attribute": "coordinates",
							"name": "coordinates",
							"resourceName": "fossiltable.csv"
						},
						{
							"attribute": "age",
							"name": "age",
							"resourceName": "fossiltable.csv"
						},
						{
							"attribute": "primaryGuidingCriterion",
							"name": "primaryGuidingCriterion",
							"resourceName": "fossiltable.csv"
						},
						{
							"attribute": "CssParameter",
							"name": "CssParameter",
							"resourceName": "fossiltable.csv"
						},
						{
							"attribute": "wiki",
							"name": "wiki",
							"resourceName": "fossiltable.csv"
						},
						{
							"attribute": "picture",
							"name": "picture",
							"resourceName": "fossiltable.csv"
						},
						{
							"attribute": "lng",
							"name": "lng",
							"resourceName": "fossiltable.csv"
						},
						{
							"attribute": "lat",
							"name": "lat",
							"resourceName": "fossiltable.csv"
						}
					]
				}
			]
		},
		{
			"id": "105f3f15-1d67-4256-bfd3-2e4a9d294260",
			"x": -512.4682567603704,
			"y": -3.7393368338881205,
			"label": "",
			"timestamp": 1516869752411,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "fossilinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "8ee3bd9c-4d95-d7e9-4a1c-49ca38613263",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "fossilinfo.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "term",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "gssp",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "age",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "primaryGuidingCriterion",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "CssParameter",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "wiki",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "picture",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "fossiltable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "80fdd384-ced7-4db2-6b13-7a6d72b3d004",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "Split and add new column function",
					"libraryId": "fb2a7de2-d8f5-4d42-a5e6-91ee1be0c409",
					"organization": "University of Idaho",
					"id": "40fc7357-43c0-4322-8b35-7ed3805d0b78",
					"functionName": "splitadd.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "splite an attribute and add new column",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "genes",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"actions": [
				{
					"id": "38249cba-444c-bcd2-15d5-0342b975a82c",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"fossilinfo.csv"
					],
					"outputFileNames": [
						"fossiltable.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [],
					"newAttrs": [
						{
							"attribute": "lng",
							"action": {
								"libraryName": "Split and add new column function",
								"libraryId": "fb2a7de2-d8f5-4d42-a5e6-91ee1be0c409",
								"organization": "University of Idaho",
								"id": "40fc7357-43c0-4322-8b35-7ed3805d0b78",
								"functionName": "splitadd.py",
								"functionType": "python executable",
								"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
								"description": "splite an attribute and add new column",
								"urlReturnFileType": "csv",
								"attributes": [
									{
										"label": "outFile",
										"name": "-outFile",
										"type": "String",
										"value": "fossiltable.csv",
										"required": true,
										"shown": true,
										"example": "sparqlQuery.csv",
										"attributeType": "input",
										"description": "output file",
										"from": "default"
									},
									{
										"label": "inputFile",
										"name": "-inputFile",
										"type": "String",
										"value": "fossilinfo.csv",
										"required": true,
										"shown": true,
										"example": "title.csv",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "attribute",
										"name": "-attribute",
										"type": "String",
										"value": "coordinates",
										"required": true,
										"shown": true,
										"example": "genes",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "actionInput",
										"name": "-actionInput",
										"type": "String",
										"value": " #1",
										"required": true,
										"shown": true,
										"example": "ncib-geneid",
										"attributeType": "input",
										"description": "Input",
										"from": "default"
									},
									{
										"label": "name",
										"name": "-name",
										"type": "String",
										"value": "lng",
										"required": true,
										"shown": true,
										"example": "ncbigeneid",
										"attributeType": "input",
										"description": "attribute new name",
										"from": "default"
									}
								],
								"type": "function"
							},
							"resourceName": "fossilinfo.csv"
						},
						{
							"attribute": "lat",
							"action": {
								"libraryName": "Split and add new column function",
								"libraryId": "fb2a7de2-d8f5-4d42-a5e6-91ee1be0c409",
								"organization": "University of Idaho",
								"id": "40fc7357-43c0-4322-8b35-7ed3805d0b78",
								"functionName": "splitadd.py",
								"functionType": "python executable",
								"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
								"description": "splite an attribute and add new column",
								"urlReturnFileType": "csv",
								"attributes": [
									{
										"label": "outFile",
										"name": "-outFile",
										"type": "String",
										"value": "fossiltable.csv",
										"required": true,
										"shown": true,
										"example": "sparqlQuery.csv",
										"attributeType": "input",
										"description": "output file",
										"from": "default"
									},
									{
										"label": "inputFile",
										"name": "-inputFile",
										"type": "String",
										"value": "fossilinfo.csv",
										"required": true,
										"shown": true,
										"example": "title.csv",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "attribute",
										"name": "-attribute",
										"type": "String",
										"value": "coordinates",
										"required": true,
										"shown": true,
										"example": "genes",
										"attributeType": "input",
										"description": "Input File Name",
										"from": "default"
									},
									{
										"label": "actionInput",
										"name": "-actionInput",
										"type": "String",
										"value": " #0",
										"required": true,
										"shown": true,
										"example": "ncib-geneid",
										"attributeType": "input",
										"description": "Input",
										"from": "default"
									},
									{
										"label": "name",
										"name": "-name",
										"type": "String",
										"value": "lat",
										"required": true,
										"shown": true,
										"example": "ncbigeneid",
										"attributeType": "input",
										"description": "attribute new name",
										"from": "default"
									}
								],
								"type": "function"
							},
							"resourceName": "fossilinfo.csv"
						}
					]
				}
			]
		}
	],
	"edges": [
		{
			"from": "ed56bcf7-025d-4eec-baa4-65f62c803ad4",
			"to": "50d00d2b-c1c2-44a2-ba66-136ffcae1cc3",
			"id": "32f70298-8be8-4bcd-a53f-2c32164f65a5",
			"arrows": "to",
			"label": "OGC GetStyle\n",
			"resources": [
				{
					"id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
					"resourceType": "HTTP",
					"organization": "OGC",
					"resourceName": "OGC GetStyle",
					"description": "Get Styles Information",
					"url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
					"urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
					"method": "GET",
					"attributes": [
						{
							"label": "layers",
							"name": "layers",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "GBR_BGS_625k_BA",
							"attributeType": "input",
							"description": "structure id",
							"from": "input"
						},
						{
							"label": "version",
							"name": "version",
							"type": "string",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version",
							"from": "default"
						},
						{
							"label": "REQUEST",
							"name": "REQUEST",
							"type": "string",
							"value": "GetStyles",
							"required": true,
							"shown": false,
							"example": "GetMap",
							"attributeType": "input",
							"description": "GetStyles",
							"from": "default"
						},
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"type": "string",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "SERVICE",
							"from": "default"
						},
						{
							"label": "format",
							"name": "format",
							"type": "string",
							"value": "text/xml",
							"required": true,
							"shown": false,
							"example": "text/xml",
							"attributeType": "input",
							"description": "format",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "Name",
							"name": "Name",
							"type": "string"
						},
						{
							"label": "ogc:PropertyName",
							"name": "ogc:PropertyName",
							"type": "string"
						},
						{
							"label": "ogc:Literal",
							"name": "ogc:Literal",
							"type": "string"
						},
						{
							"label": "CssParameter",
							"name": "CssParameter",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<StyledLayerDescriptor>\r\n\t\t\t\t<NamedLayer>\r\n\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t<UserStyle>\r\n\t\t\t\t\t\t<Rule>\r\n\t\t\t\t\t\t\t<ogc:Filter>\r\n\t\t\t\t\t\t\t\t<ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t\t\t<ogc:PropertyName></ogc:PropertyName>\r\n\t\t\t\t\t\t\t\t\t<ogc:Literal></ogc:Literal>\r\n\t\t\t\t\t\t\t\t</ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t</ogc:Filter>\r\n\t\t\t\t\t\t\t<PolygonSymbolizer>\r\n\t\t\t\t\t\t\t\t<Fill>\r\n\t\t\t\t\t\t\t\t\t<CssParameter></CssParameter>\r\n\t\t\t\t\t\t\t\t</Fill>\r\n\t\t\t\t\t\t\t</PolygonSymbolizer>\r\n\t\t\t\t\t\t</Rule>\r\n\t\t\t\t\t</UserStyle>\r\n\t\t\t\t</NamedLayer>\r\n\t\t\t</StyledLayerDescriptor>",
					"jsUrlReturnFileSchema": {},
					"fileName": "OGC GetStyle.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "OGC GetStyle"
				}
			],
			"libraries": []
		},
		{
			"from": "581cc5fb-113e-4a75-8f40-c361acd0e6ea",
			"to": "7d52b97b-6f30-4234-8a82-93e7f2408d38",
			"id": "1a7cc42d-6cc7-4be1-8ee7-c9c46c59accd",
			"arrows": "to",
			"label": "sparqlQuery.xml\n",
			"resources": [
				{
					"urlReturnFileName": "sparqlQuery.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "66f0a6ac-bb5a-aff6-d365-e4f3630583f6",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "ea009e1c-c546-4e16-a171-bde736087187",
			"to": "581cc5fb-113e-4a75-8f40-c361acd0e6ea",
			"id": "6a0cae05-ff6c-4f62-aa86-b8dec013ab1c",
			"arrows": "to",
			"label": "SPARQL Query Generation\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "SPARQL Query Generation",
					"libraryId": "5cef7f58-f692-11e7-8c3f-9a214cf093ae",
					"organization": "University of Idaho",
					"id": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
					"functionName": "generateSparqlQuery.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Generate SPARQL query for query ages.",
					"urlReturnFileType": "",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						}
					],
					"type": "function"
				}
			]
		},
		{
			"from": "5d4f8e0a-1cb4-4b02-97e3-3fc2f47bdacb",
			"to": "7d52b97b-6f30-4234-8a82-93e7f2408d38",
			"id": "d2d1da85-ca71-4d1f-90f1-53f1bde6199d",
			"arrows": "to",
			"label": "Geotime SPARQL\n",
			"resources": [
				{
					"id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
					"resourceType": "HTTP",
					"organization": "geotime.tw.rpi.edu",
					"resourceName": "Geotime SPARQL",
					"description": "Geotime SPARQL service",
					"url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
					"urlExample": "",
					"method": "GET",
					"attributes": [
						{
							"label": "query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
							"attributeType": "input",
							"description": "query",
							"from": "input"
						},
						{
							"label": "output",
							"name": "output",
							"type": "string",
							"value": "json",
							"required": true,
							"shown": false,
							"example": "",
							"attributeType": "input",
							"description": "result type",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "datatype",
							"name": "datatype",
							"type": "string"
						},
						{
							"label": "type",
							"name": "type",
							"type": "string"
						},
						{
							"label": "value",
							"name": "value",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "",
					"fileName": "Geotime SPARQL.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Geotime SPARQL",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper"
					},
					"jsUrlReturnFileSchema": {}
				}
			],
			"libraries": []
		},
		{
			"from": "5d4f8e0a-1cb4-4b02-97e3-3fc2f47bdacb",
			"to": "d7cd0a5f-cc31-4cb7-8898-7caaa30df6dd",
			"id": "e2d5e2f1-784f-46bb-9e6f-6bfbcd613a86",
			"arrows": "to",
			"label": "Geotime SPARQL\n",
			"resources": [
				{
					"id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
					"resourceType": "HTTP",
					"organization": "geotime.tw.rpi.edu",
					"resourceName": "Geotime SPARQL",
					"description": "Geotime SPARQL service",
					"url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
					"urlExample": "",
					"method": "GET",
					"attributes": [
						{
							"label": "query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
							"attributeType": "input",
							"description": "query",
							"from": "input"
						},
						{
							"label": "output",
							"name": "output",
							"type": "string",
							"value": "json",
							"required": true,
							"shown": false,
							"example": "",
							"attributeType": "input",
							"description": "result type",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "datatype",
							"name": "datatype",
							"type": "string"
						},
						{
							"label": "type",
							"name": "type",
							"type": "string"
						},
						{
							"label": "value",
							"name": "value",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "",
					"fileName": "Geotime SPARQL.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Geotime SPARQL",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper"
					},
					"jsUrlReturnFileSchema": {}
				}
			],
			"libraries": []
		},
		{
			"from": "50d00d2b-c1c2-44a2-ba66-136ffcae1cc3",
			"to": "209f6ee3-b2c7-411a-8daf-b6f2be03bf5c",
			"id": "f3cdc913-6912-4858-971b-8ed1b1339600",
			"arrows": "to",
			"label": "layers.xml\n",
			"resources": [
				{
					"urlReturnFileName": "layers.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {},
					"id": "a70b035e-ffbe-8453-c4c2-a39715555ca2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "d7cd0a5f-cc31-4cb7-8898-7caaa30df6dd",
			"to": "cd160ad7-fe39-49ba-866a-601cf1cdd251",
			"id": "49d5520c-0fd2-4603-8922-0687193dedcd",
			"arrows": "to",
			"label": "ageTable.xml\n",
			"resources": [
				{
					"urlReturnFileName": "ageTable.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {},
					"id": "16b4a098-ac66-1e29-bee1-d28aa7031c40",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "cd160ad7-fe39-49ba-866a-601cf1cdd251",
			"to": "c23fd36d-3c3e-464d-8c17-58b596b2b4e8",
			"id": "62e4211c-a12f-49ed-b21c-aba50db39f16",
			"arrows": "to",
			"label": "gsspwhole.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gsspwhole.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "f7e4e127-fcc1-9d49-c47e-a9fd31eb3936",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "362135ad-7d23-4772-ad6f-0ab2569a6621",
			"to": "64b5e4bf-f89c-4d97-8e24-f7dc8e942659",
			"id": "d72fa3a6-6afd-4ad0-96a1-a98f77b36718",
			"arrows": "to",
			"label": "Purdue GSSP Info\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Purdue GSSP Info",
					"libraryId": "530b843a-4de1-4cb3-87a1-e8fd161c0151",
					"organization": "University of Idaho",
					"id": "7cab97c0-7bd0-4468-94d9-7fd808db2f61",
					"functionName": "generatePurdueGsspLink.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Generate Purdue GSSP web link information",
					"urlReturnFileType": "",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "term",
							"attributeType": "input",
							"description": "attribute",
							"from": "default"
						}
					],
					"type": "function"
				}
			]
		},
		{
			"from": "c5edb536-9628-433b-9232-eeb79d892fe5",
			"to": "5573cf7f-3ed9-4539-8d02-d48b010df954",
			"id": "993907a2-d438-4bb8-83e5-a1269aae26f0",
			"arrows": "to",
			"label": "GPlates Paleo-geographic Coordinates\n",
			"resources": [
				{
					"id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
					"resourceType": "HTTPS",
					"organization": "GPlates",
					"resourceName": "GPlates Paleo-geographic Coordinates",
					"description": "Reconstruct the geographic locations from present day coordinates back to their paleo-positions. Each location will be assigned a plate id and moved back in time using the chosen reconstruction model.",
					"url": "https://gws.gplates.org/reconstruct/reconstruct_points/",
					"urlExample": "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140",
					"method": "GET",
					"attributes": [
						{
							"label": "points",
							"name": "points",
							"value": "",
							"required": true,
							"shown": true,
							"example": "95,54",
							"attributeType": "input",
							"description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
							"from": "input"
						},
						{
							"label": "time",
							"name": "time",
							"value": "",
							"required": true,
							"shown": true,
							"example": "140",
							"attributeType": "input",
							"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "coordinates",
							"name": "coordinates",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
					"jsUrlReturnFileSchema": {
						"text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j5_1",
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"id": "j5_2",
								"children": []
							}
						]
					},
					"fileName": "GPlates Paleo-geographic Coordinates.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "GPlates Paleo-geographic Coordinates",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "7d52b97b-6f30-4234-8a82-93e7f2408d38",
			"to": "ca8fbf35-2646-4b14-8b03-491b9518a2ee",
			"id": "0300bb40-f734-46ff-a9a3-1cff4f877858",
			"arrows": "to",
			"label": "gsspLabel.xml\n",
			"resources": [
				{
					"urlReturnFileName": "gsspLabel.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {},
					"id": "df734a85-388f-5fe6-c40e-5be466471c91",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "209f6ee3-b2c7-411a-8daf-b6f2be03bf5c",
			"to": "ed5ffe1d-0f04-4d21-b301-116b3aa6da48",
			"id": "0c61645a-f94e-486f-9bfe-e963e013314d",
			"arrows": "to",
			"label": "featuretypes.csv\n",
			"resources": [
				{
					"urlReturnFileName": "featuretypes.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "b6610198-3f24-b40c-24b1-beacaa2e3201",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "ea009e1c-c546-4e16-a171-bde736087187",
			"to": "ed5ffe1d-0f04-4d21-b301-116b3aa6da48",
			"id": "a0281095-baad-4395-b0f6-310019b4f9e2",
			"arrows": "to",
			"label": "title function\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "title function",
					"libraryId": "ab0bbbf0-00a8-4965-bd35-3e07b1d025a1",
					"organization": "University of Idaho",
					"id": "f4499451-6779-46de-8d25-ed50c48c7589",
					"functionName": "title.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "calcuate avarage function",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			]
		},
		{
			"from": "ed5ffe1d-0f04-4d21-b301-116b3aa6da48",
			"to": "018e6a51-ad99-494e-a747-415ef972ef8d",
			"id": "23dae34e-f392-46ce-be75-493054a048ef",
			"arrows": "to",
			"label": "titledLieral.csv\n",
			"resources": [
				{
					"urlReturnFileName": "titledLieral.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0ef16b6f-3850-fcac-9d87-b06b6d8e2ff3",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "018e6a51-ad99-494e-a747-415ef972ef8d",
			"to": "243dc7e9-a44d-4398-bed1-bbd37aac5118",
			"id": "9a9d3e27-04f9-42ef-b2a5-c450b8237b03",
			"arrows": "to",
			"label": "title.csv\n",
			"resources": [
				{
					"urlReturnFileName": "title.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ab1b3f34-c230-f7f9-b986-36458f83b45f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "ca8fbf35-2646-4b14-8b03-491b9518a2ee",
			"to": "243dc7e9-a44d-4398-bed1-bbd37aac5118",
			"id": "826e13a2-b2df-41ea-bd9b-a73bc4ea104f",
			"arrows": "to",
			"label": "gsspAll.xml\n",
			"resources": [
				{
					"urlReturnFileName": "gsspAll.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "16a38a14-a5d6-caec-6aeb-f712175d0139",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "7ff05ac0-d065-4fb0-948d-e5debbf4c6da",
			"to": "c97252cf-566b-477c-940d-ba9f6c9354e0",
			"id": "3e07fdb9-36c7-4163-84ca-f00a2e8bb0e6",
			"arrows": "to",
			"label": "Replace function\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Replace function",
					"libraryId": "1f40e40c-5021-4295-a307-75d859e054bb",
					"organization": "University of Idaho",
					"id": "ae4b0429-dae5-4dc3-9a24-ef816a893561",
					"functionName": "replace.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "replace function",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "genes",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			]
		},
		{
			"from": "243dc7e9-a44d-4398-bed1-bbd37aac5118",
			"to": "c97252cf-566b-477c-940d-ba9f6c9354e0",
			"id": "7d9d2192-114d-4ffe-899d-fa36a71b5b2b",
			"arrows": "to",
			"label": "gsspinfoTmp.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gsspinfoTmp.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "65199e25-9213-a789-2ab7-a2ee8c440350",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "c97252cf-566b-477c-940d-ba9f6c9354e0",
			"to": "52212f6c-45dc-4eac-82b3-ee5cd8a9df5f",
			"id": "ea221398-9e91-4a99-883c-78e90af18344",
			"arrows": "to",
			"label": "gsspinfo.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gsspinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "61715aed-9746-01de-e63b-0fef86c645fc",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "52212f6c-45dc-4eac-82b3-ee5cd8a9df5f",
			"to": "c23fd36d-3c3e-464d-8c17-58b596b2b4e8",
			"id": "676433d8-7d30-44a0-97b8-77409338bb7b",
			"arrows": "to",
			"label": "gssp.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gssp.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "99455ab7-6496-3320-7ad5-fd4225ef8417",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "64b5e4bf-f89c-4d97-8e24-f7dc8e942659",
			"to": "b0710a39-2902-462f-80a5-a0bc7ba60106",
			"id": "897ac81b-4e93-44dc-8b7f-0908c48564d3",
			"arrows": "to",
			"label": "fossilinfo.csv\n",
			"resources": [
				{
					"urlReturnFileName": "fossilinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "8ee3bd9c-4d95-d7e9-4a1c-49ca38613263",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "1a0154cb-60e8-45a0-89d5-19e5719a5edb",
			"to": "b0710a39-2902-462f-80a5-a0bc7ba60106",
			"id": "653c3265-a9dc-4515-a9c6-a3f6eaca68d5",
			"arrows": "to",
			"label": "Split and add new column function\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Split and add new column function",
					"libraryId": "fb2a7de2-d8f5-4d42-a5e6-91ee1be0c409",
					"organization": "University of Idaho",
					"id": "40fc7357-43c0-4322-8b35-7ed3805d0b78",
					"functionName": "splitadd.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "splite an attribute and add new column",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "genes",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			]
		},
		{
			"from": "b0710a39-2902-462f-80a5-a0bc7ba60106",
			"to": "10a611ff-db6a-4fc5-bb4f-4867eb109533",
			"id": "3c3562c3-c940-4268-8ad4-54712cd4962f",
			"arrows": "to",
			"label": "gplateinfo.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gplateinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "79aa5779-e7a1-7007-f9df-5e01a8494add",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "1a0154cb-60e8-45a0-89d5-19e5719a5edb",
			"to": "10a611ff-db6a-4fc5-bb4f-4867eb109533",
			"id": "1f8a6cfa-4457-444d-82ae-2c5589f6ab97",
			"arrows": "to",
			"label": "Select and merge function\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Select and merge function",
					"libraryId": "5fa9d88a-701a-4a52-9ca1-1732ee037a17",
					"organization": "University of Idaho",
					"id": "065c2c7b-162c-49ec-b61e-f86da670adf7",
					"functionName": "selectandmerge.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Select and merge function",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			]
		},
		{
			"from": "10a611ff-db6a-4fc5-bb4f-4867eb109533",
			"to": "fda87bab-9f6d-4968-b599-a78789e2e4de",
			"id": "3b9c7db2-fc9a-4888-964a-98ee4e1d46b8",
			"arrows": "to",
			"label": "gplate.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gplate.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "99dd2802-58df-e9ae-a84e-2e261c737392",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "fda87bab-9f6d-4968-b599-a78789e2e4de",
			"to": "5573cf7f-3ed9-4539-8d02-d48b010df954",
			"id": "228da1be-a70f-4b5d-82b4-ca38c7b52394",
			"arrows": "to",
			"label": "gplateinput.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gplateinput.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "a39224d5-ebf1-6298-7625-507d3d05fc0c",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "5573cf7f-3ed9-4539-8d02-d48b010df954",
			"to": "551f2fe5-a65a-4d43-86da-c759195a569f",
			"id": "cfa21275-3b17-4057-94df-c3c6e00e6f50",
			"arrows": "to",
			"label": "gsspCoord.xml\n",
			"resources": [
				{
					"urlReturnFileName": "gsspCoord.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"jsUrlReturnFileSchema": {},
					"id": "13f0b927-a60e-8e42-bae5-45a7175e04bf",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "018e6a51-ad99-494e-a747-415ef972ef8d",
			"to": "581cc5fb-113e-4a75-8f40-c361acd0e6ea",
			"id": "6e9fd64f-91ca-4200-92e4-6eb2d59261c2",
			"arrows": "to",
			"label": "title.csv\n",
			"resources": [
				{
					"urlReturnFileName": "title.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ab1b3f34-c230-f7f9-b986-36458f83b45f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "ed5ffe1d-0f04-4d21-b301-116b3aa6da48",
			"to": "7e371656-1f4b-4227-9ac7-e617ca777700",
			"id": "f9f4d3a5-51fd-428e-9a00-d121e3a2afab",
			"arrows": "to",
			"label": "titledLieral.csv\n",
			"resources": [
				{
					"urlReturnFileName": "titledLieral.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0ef16b6f-3850-fcac-9d87-b06b6d8e2ff3",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "c23fd36d-3c3e-464d-8c17-58b596b2b4e8",
			"to": "7e371656-1f4b-4227-9ac7-e617ca777700",
			"id": "0e006e1e-9b16-43f0-a62a-8034ec51aebf",
			"arrows": "to",
			"label": "gsspDetail.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gsspDetail.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "141ad46b-a988-aadc-bf4e-23fd35a1136f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "362135ad-7d23-4772-ad6f-0ab2569a6621",
			"to": "f1e8db27-f9fb-4be5-8840-87763968f1e6",
			"id": "25b10d74-d5aa-4f3d-8735-0d55279c74f4",
			"arrows": "to",
			"label": "add wiki function\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "add wiki function",
					"libraryId": "422d7bee-2137-416b-9ced-50b00212e836",
					"organization": "University of Idaho",
					"id": "4a90b1b9-02ca-4b23-83d3-82d75bfb6b41",
					"functionName": "addwiki.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "add wiki url for gssp names",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			]
		},
		{
			"from": "7e371656-1f4b-4227-9ac7-e617ca777700",
			"to": "f1e8db27-f9fb-4be5-8840-87763968f1e6",
			"id": "31afa60e-0088-40f4-8882-a31a7e715211",
			"arrows": "to",
			"label": "gsspmerged.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gsspmerged.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "d54fa108-fe3b-3caa-8955-466416871fc4",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "f1e8db27-f9fb-4be5-8840-87763968f1e6",
			"to": "64b5e4bf-f89c-4d97-8e24-f7dc8e942659",
			"id": "8d800114-14e3-4476-a896-a2da3dc65b04",
			"arrows": "to",
			"label": "gssptable.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gssptable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "cece4d1d-f08e-a26f-80df-b3b5c446df7b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "551f2fe5-a65a-4d43-86da-c759195a569f",
			"to": "bb278f1e-fdc2-40fb-8b04-4114edfe4e1d",
			"id": "50b62e2b-0e2e-44cd-adbb-2481daf5d981",
			"arrows": "to",
			"label": "gsspCoord.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gsspCoord.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "501afed3-d065-ea3e-78a6-03f5aea932f7",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "bb278f1e-fdc2-40fb-8b04-4114edfe4e1d",
			"to": "bc19e5a2-5dd0-4858-98e7-33d96713dce3",
			"id": "7aae4015-d13f-4ec4-9eaf-de142aa896fb",
			"arrows": "to",
			"label": "comTable.csv\n",
			"resources": [
				{
					"urlReturnFileName": "comTable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "10bf2cb0-bf60-ab81-2136-30ec47f45ff3",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "64b5e4bf-f89c-4d97-8e24-f7dc8e942659",
			"to": "105f3f15-1d67-4256-bfd3-2e4a9d294260",
			"id": "62a73cd3-4217-43c2-bc9c-7a83be07b96e",
			"arrows": "to",
			"label": "fossilinfo.csv\n",
			"resources": [
				{
					"urlReturnFileName": "fossilinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "8ee3bd9c-4d95-d7e9-4a1c-49ca38613263",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "1a0154cb-60e8-45a0-89d5-19e5719a5edb",
			"to": "105f3f15-1d67-4256-bfd3-2e4a9d294260",
			"id": "58320b61-8ece-42f1-908c-30ad7a6f01cd",
			"arrows": "to",
			"label": "Split and add new column function\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Split and add new column function",
					"libraryId": "fb2a7de2-d8f5-4d42-a5e6-91ee1be0c409",
					"organization": "University of Idaho",
					"id": "40fc7357-43c0-4322-8b35-7ed3805d0b78",
					"functionName": "splitadd.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "splite an attribute and add new column",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "sparqlQuery.csv",
							"attributeType": "input",
							"description": "output file",
							"from": "default"
						},
						{
							"label": "inputFile",
							"name": "-inputFile",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "title.csv",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "attribute",
							"name": "-attribute",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "genes",
							"attributeType": "input",
							"description": "Input File Name",
							"from": "default"
						},
						{
							"label": "actionInput",
							"name": "-actionInput",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncib-geneid",
							"attributeType": "input",
							"description": "Input",
							"from": "default"
						},
						{
							"label": "name",
							"name": "-name",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbigeneid",
							"attributeType": "input",
							"description": "attribute new name",
							"from": "default"
						}
					],
					"type": "function"
				}
			]
		},
		{
			"from": "105f3f15-1d67-4256-bfd3-2e4a9d294260",
			"to": "bb278f1e-fdc2-40fb-8b04-4114edfe4e1d",
			"id": "d036be8c-3e0c-4980-88e3-460508d13d62",
			"arrows": "to",
			"label": "fossiltable.csv\n",
			"resources": [
				{
					"urlReturnFileName": "fossiltable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "80fdd384-ced7-4db2-6b13-7a6d72b3d004",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		}
	]
}