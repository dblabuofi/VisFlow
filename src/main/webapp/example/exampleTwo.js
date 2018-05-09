var exampleTwo = {
	"nodes": [
		{
			"id": "8b6b131b-3ba3-4708-9acf-ca775b923d4d",
			"x": -30.515625,
			"y": -139.125,
			"label": "capabilities.xml\n",
			"timestamp": 1474515501545,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "17201697-1b9b-49c0-a403-6c2f586e039b",
					"resourceType": "HTTP",
					"organization": "OGC",
					"resourceName": "OGC GetCapabilities",
					"description": "Get Layer information",
					"url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
					"urlExample": "",
					"method": "GET",
					"attributes": [
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "request",
							"name": "request",
							"value": "GetCapabilities",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "version",
							"name": "version",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version number"
						},
						{
							"label": "format",
							"name": "format",
							"value": "text/html",
							"required": true,
							"shown": false,
							"example": "text/html",
							"attributeType": "input",
							"description": "return format"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<WMT_MS_Capabilities>\t\t\t\t<Service></Service>\t\t\t\t<Capability>\t\t\t\t\t<Request></Request>\t\t\t\t\t<Exception></Exception>\t\t\t\t\t<VendorSpecificCapabilities></VendorSpecificCapabilities>\t\t\t\t\t<Layer>\t\t\t\t\t\t<Name></Name>\t\t\t\t\t\t<Title></Title>\t\t\t\t\t\t<Abstract></Abstract>\t\t\t\t\t\t<SRS></SRS>\t\t\t\t\t\t<LatLonBoundingBox></LatLonBoundingBox>\t\t\t\t\t\t<BoundingBox></BoundingBox>\t\t\t\t\t\t<Attribution></Attribution>\t\t\t\t\t\t<AuthorityURL></AuthorityURL>\t\t\t\t\t\t<Style></Style>\t\t\t\t\t</Layer>\t\t\t\t</Capability>\t\t\t</WMT_MS_Capabilities>",
					"jsUrlReturnFileSchema": {
						"text": "WMT_MS_Capabilities",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "Capability",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "Request",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": []
									},
									{
										"text": "VendorSpecificCapabilities",
										"a_attr": {
											"style": "background-color: rgb(205, 165, 10) !important"
										},
										"state": {
											"opened": true
										},
										"children": []
									},
									{
										"text": "Layer",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [
											{
												"text": "LatLonBoundingBox",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "SRS",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Abstract",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "BoundingBox",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Title",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "AuthorityURL",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Style",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Attribution",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Name",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											}
										]
									},
									{
										"text": "Exception",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": []
									}
								]
							},
							{
								"text": "Service",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					},
					"fileName": "OGC GetCapabilities.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "capabilities.xml",
					"defaultAttributes": [
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "request",
							"name": "request",
							"value": "GetCapabilities",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "version",
							"name": "version",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version number"
						},
						{
							"label": "format",
							"name": "format",
							"value": "text/html",
							"required": true,
							"shown": false,
							"example": "text/html",
							"attributeType": "input",
							"description": "return format"
						}
					]
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "17201697-1b9b-49c0-a403-6c2f586e039b",
					"resourceType": "HTTP",
					"organization": "OGC",
					"resourceName": "OGC GetCapabilities",
					"description": "Get Layer information",
					"url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
					"urlExample": "",
					"method": "GET",
					"attributes": [
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "request",
							"name": "request",
							"value": "GetCapabilities",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "version",
							"name": "version",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version number"
						},
						{
							"label": "format",
							"name": "format",
							"value": "text/html",
							"required": true,
							"shown": false,
							"example": "text/html",
							"attributeType": "input",
							"description": "return format"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<WMT_MS_Capabilities>\t\t\t\t<Service></Service>\t\t\t\t<Capability>\t\t\t\t\t<Request></Request>\t\t\t\t\t<Exception></Exception>\t\t\t\t\t<VendorSpecificCapabilities></VendorSpecificCapabilities>\t\t\t\t\t<Layer>\t\t\t\t\t\t<Name></Name>\t\t\t\t\t\t<Title></Title>\t\t\t\t\t\t<Abstract></Abstract>\t\t\t\t\t\t<SRS></SRS>\t\t\t\t\t\t<LatLonBoundingBox></LatLonBoundingBox>\t\t\t\t\t\t<BoundingBox></BoundingBox>\t\t\t\t\t\t<Attribution></Attribution>\t\t\t\t\t\t<AuthorityURL></AuthorityURL>\t\t\t\t\t\t<Style></Style>\t\t\t\t\t</Layer>\t\t\t\t</Capability>\t\t\t</WMT_MS_Capabilities>",
					"jsUrlReturnFileSchema": {
						"text": "WMT_MS_Capabilities",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "Capability",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "Request",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": []
									},
									{
										"text": "VendorSpecificCapabilities",
										"a_attr": {
											"style": "background-color: rgb(205, 165, 10) !important"
										},
										"state": {
											"opened": true
										},
										"children": []
									},
									{
										"text": "Layer",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [
											{
												"text": "LatLonBoundingBox",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "SRS",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Abstract",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "BoundingBox",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Title",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "AuthorityURL",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Style",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Attribution",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Name",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											}
										]
									},
									{
										"text": "Exception",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": []
									}
								]
							},
							{
								"text": "Service",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					},
					"fileName": "OGC GetCapabilities.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "capabilities.xml",
					"defaultAttributes": [
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "request",
							"name": "request",
							"value": "GetCapabilities",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "version",
							"name": "version",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version number"
						},
						{
							"label": "format",
							"name": "format",
							"value": "text/html",
							"required": true,
							"shown": false,
							"example": "text/html",
							"attributeType": "input",
							"description": "return format"
						}
					]
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "834de1c0-760d-439b-9ddd-69d3be9336d8",
			"x": -125.59062500000017,
			"y": -21.148000000000064,
			"label": "",
			"timestamp": 1474515774085,
			"type": "analytics",
			"image": "image/analytics type.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "17201697-1b9b-49c0-a403-6c2f586e039b",
					"resourceType": "HTTP",
					"organization": "OGC",
					"resourceName": "OGC GetCapabilities",
					"description": "Get Layer information",
					"url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
					"urlExample": "",
					"method": "GET",
					"attributes": [
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "request",
							"name": "request",
							"value": "GetCapabilities",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "version",
							"name": "version",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version number"
						},
						{
							"label": "format",
							"name": "format",
							"value": "text/html",
							"required": true,
							"shown": false,
							"example": "text/html",
							"attributeType": "input",
							"description": "return format"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<WMT_MS_Capabilities>\t\t\t\t<Service></Service>\t\t\t\t<Capability>\t\t\t\t\t<Request></Request>\t\t\t\t\t<Exception></Exception>\t\t\t\t\t<VendorSpecificCapabilities></VendorSpecificCapabilities>\t\t\t\t\t<Layer>\t\t\t\t\t\t<Name></Name>\t\t\t\t\t\t<Title></Title>\t\t\t\t\t\t<Abstract></Abstract>\t\t\t\t\t\t<SRS></SRS>\t\t\t\t\t\t<LatLonBoundingBox></LatLonBoundingBox>\t\t\t\t\t\t<BoundingBox></BoundingBox>\t\t\t\t\t\t<Attribution></Attribution>\t\t\t\t\t\t<AuthorityURL></AuthorityURL>\t\t\t\t\t\t<Style></Style>\t\t\t\t\t</Layer>\t\t\t\t</Capability>\t\t\t</WMT_MS_Capabilities>",
					"jsUrlReturnFileSchema": {
						"text": "WMT_MS_Capabilities",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "Capability",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "Request",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": []
									},
									{
										"text": "VendorSpecificCapabilities",
										"a_attr": {
											"style": "background-color: rgb(205, 165, 10) !important"
										},
										"state": {
											"opened": true
										},
										"children": []
									},
									{
										"text": "Layer",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [
											{
												"text": "LatLonBoundingBox",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "SRS",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Abstract",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "BoundingBox",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Title",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "AuthorityURL",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Style",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Attribution",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Name",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											}
										]
									},
									{
										"text": "Exception",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": []
									}
								]
							},
							{
								"text": "Service",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					},
					"fileName": "OGC GetCapabilities.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "capabilities.xml",
					"defaultAttributes": [
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "request",
							"name": "request",
							"value": "GetCapabilities",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "version",
							"name": "version",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version number"
						},
						{
							"label": "format",
							"name": "format",
							"value": "text/html",
							"required": true,
							"shown": false,
							"example": "text/html",
							"attributeType": "input",
							"description": "return format"
						}
					]
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "layers.xml",
					"urlReturnFileType": "xml",
					"id": "91e1972b-8ac1-1998-ceb0-a871013c8988",
					"attributes": []
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"act": "code",
					"val": "xquery version \"3.0\";\n\nlet $filename := \"layers.xml\"\nlet $doc := doc(\"capabilities.xml\")\n\nlet $target-directory := \"C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\\"\nlet $target-path := concat($target-directory, $filename)\n\nlet $name := $doc//Capability/Layer/Layer[3]/Name\nlet $title := $doc//Capability/Layer/Layer[3]/Title\nlet $boudingbox := $doc//Capability/Layer/Layer[3]/BoundingBox[@SRS='EPSG:4326']\n\nlet $source-doc := \n        <returnLayers>\n        <layers>{data($name)}</layers>\n        {$title}\n        <BBOX>{data($boudingbox/@minx)},{data($boudingbox/@miny)},{data($boudingbox/@maxx)},{data($boudingbox/@maxy)}</BBOX>\n        </returnLayers>\n\nreturn \n    file:serialize($source-doc, $target-path, (\"omit-xml-declaration=yes\", \"indent=yes\"))",
					"codeType": "xquery",
					"inputFileNames": [
						"capabilities.xml"
					],
					"codeName": "getLayers.xml",
					"outputFileNames": [
						"layers.xml"
					],
					"outputFileTypes": [
						"xml"
					],
					"outputFileAttributes": [],
					"outputFileAttributeTypes": [],
					"actionOut": [
						{
							"urlReturnFileName": "layers.xml",
							"urlReturnFileType": "xml",
							"id": "91e1972b-8ac1-1998-ceb0-a871013c8988",
							"attributes": []
						}
					]
				}
			]
		},
		{
			"id": "01939b24-9b1c-4593-8cf4-0806679225fa",
			"x": -408.046875,
			"y": -66.578125,
			"label": "",
			"timestamp": 1474560044498,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
					"id": "1b9c52c1-f90f-46d5-9911-ff8810f6d4f6",
					"libraryName": "OGC",
					"libraryType": "web",
					"organization": "OGC",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\Data\\",
					"alias": "",
					"description": "OGC Network&#8482; is a window onto the dynamic, constantly changing geospatial web as described by the OGC&#174; Reference Model (ORM). Multiple communities of interest for research in geospatial interoperability are supported, and persistent demonstration capability is provided. Here you will find the latest information on OGC-compatible software, services, and information models (e.g. GML profiles, SLD examples, etc.).",
					"function": [
						{
							"functionName": "OGC GetMap",
							"description": "The OGC Web Map Service (WMS) specification defines an HTTP interface for requesting georeferenced map images from a server. GeoServer supports WMS 1.1.1, the most widely used version of WMS, as well as WMS 1.3.0."
						},
						{
							"functionName": "OGC GetStyle",
							"description": "Get Styles Information"
						}
					],
					"type": "library"
				}
			],
			"resourcesIn": [],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "5045c928-2bd8-4b08-91cc-0947c5b7b56b",
			"x": -214.078125,
			"y": 77.75,
			"label": "",
			"timestamp": 1474560115103,
			"type": "analytics",
			"image": "image/analytics type.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "layers.xml",
					"urlReturnFileType": "xml",
					"id": "c6dcfa55-65fd-b332-fb0e-b0abc8fe0bea",
					"attributes": []
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "styles.xml",
					"urlReturnFileType": "xml",
					"id": "a45ec642-6ed4-965c-7074-3e1974cf4549",
					"attributes": []
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"id": "1b9c52c1-f90f-46d5-9911-ff8810f6d4f6",
					"libraryName": "OGC",
					"libraryType": "web",
					"organization": "OGC",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\Data\\",
					"alias": "",
					"description": "OGC Network&#8482; is a window onto the dynamic, constantly changing geospatial web as described by the OGC&#174; Reference Model (ORM). Multiple communities of interest for research in geospatial interoperability are supported, and persistent demonstration capability is provided. Here you will find the latest information on OGC-compatible software, services, and information models (e.g. GML profiles, SLD examples, etc.).",
					"function": [
						{
							"functionName": "OGC GetMap",
							"description": "The OGC Web Map Service (WMS) specification defines an HTTP interface for requesting georeferenced map images from a server. GeoServer supports WMS 1.1.1, the most widely used version of WMS, as well as WMS 1.3.0."
						},
						{
							"functionName": "OGC GetStyle",
							"description": "Get Styles Information"
						}
					],
					"type": "library"
				}
			],
			"actions": [
				{
					"act": "web",
					"inputFileNames": [
						"layers.xml"
					],
					"outputFileNames": [
						"styles.xml"
					],
					"outputFileTypes": [
						"xml"
					],
					"webservices": [
						{
							"libraryName": "OGC",
							"libraryId": "1b9c52c1-f90f-46d5-9911-ff8810f6d4f6",
							"organization": "OGC",
							"id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
							"functionName": "OGC GetStyle",
							"functionType": "HTTP",
							"location": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
							"method": "GET",
							"urlFormat": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
							"urlExample": "httphttp://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
							"description": "Get Styles Information",
							"urlReturnFileType": "xml",
							"inputAttributes": [
								{
									"label": "layers",
									"name": "layers",
									"value": "",
									"required": true,
									"shown": true,
									"example": "GBR_BGS_625k_BA",
									"attributeType": "input",
									"description": "structure id"
								},
								{
									"label": "version",
									"name": "version",
									"value": "1.1.1",
									"required": true,
									"shown": false,
									"example": "1.1.1",
									"attributeType": "input",
									"description": "version"
								},
								{
									"label": "REQUEST",
									"name": "REQUEST",
									"value": "GetStyles",
									"required": true,
									"shown": false,
									"example": "GetMap",
									"attributeType": "input",
									"description": "GetStyles"
								},
								{
									"label": "SERVICE",
									"name": "SERVICE",
									"value": "WMS",
									"required": true,
									"shown": false,
									"example": "WMS",
									"attributeType": "input",
									"description": "SERVICE"
								},
								{
									"label": "format",
									"name": "format",
									"value": "text/xml",
									"required": true,
									"shown": false,
									"example": "text/xml",
									"attributeType": "input",
									"description": "format"
								}
							],
							"type": "function"
						}
					],
					"actionOut": [
						{
							"urlReturnFileName": "styles.xml",
							"urlReturnFileType": "xml",
							"id": "a45ec642-6ed4-965c-7074-3e1974cf4549",
							"attributes": []
						}
					]
				}
			]
		},
		{
			"id": "e5c9f09b-df34-4187-b4a1-f8ae3ef14c95",
			"x": -341.546875,
			"y": 148.734375,
			"label": "",
			"timestamp": 1475469445183,
			"type": "adapter",
			"image": "image/adapter type.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "styles.xml",
					"urlReturnFileType": "xml",
					"id": "a45ec642-6ed4-965c-7074-3e1974cf4549",
					"attributes": []
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "rules.xml",
					"urlReturnFileType": "xml",
					"id": "de2ef702-e11e-abdf-0861-4518192fde87",
					"attributes": []
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"act": "code",
					"val": "xquery version \"3.0\";\ndeclare namespace sld = \"http://www.opengis.net/sld\";\nlet $filename := \"rules.xml\"\nlet $doc := doc(\"styles.xml\")\nlet $target-directory := \"C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\\"\nlet $target-path := concat($target-directory, $filename)\nlet $rows := for $rule in $doc//*:Rule\nwhere ($rule//sld:Name = \"JURASSIC\" or $rule//sld:Name = \"TRIASSIC\") \nreturn \n    <SLD_BODY>\n        {$rule}\n    </SLD_BODY>\nlet $source-doc :=\n    <SLDs>\n        {$rows}\n    </SLDs>\nreturn \n    file:serialize($source-doc, $target-path, (\"omit-xml-declaration=yes\", \"indent=yes\"))",
					"codeType": "xquery",
					"codeName": "getRules.xql",
					"inputFileNames": [
						"styles.xml"
					],
					"outputFileNames": [
						"rules.xml"
					],
					"outputFileTypes": [
						"xml"
					],
					"outputFileAttributes": [],
					"outputFileAttributeTypes": [],
					"actionOut": [
						{
							"urlReturnFileName": "rules.xml",
							"urlReturnFileType": "xml",
							"id": "de2ef702-e11e-abdf-0861-4518192fde87",
							"attributes": []
						}
					]
				}
			]
		},
		{
			"id": "9550d4fb-502b-4f08-9f81-a6b6f6b2bb1e",
			"x": -500.046875,
			"y": 164.421875,
			"label": "",
			"timestamp": 1475473531916,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "rules.xml",
					"urlReturnFileType": "xml",
					"id": "cec23a32-f22b-dafb-d456-60ec3ed81b90",
					"attributes": []
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "england.png",
					"urlReturnFileType": "image/png",
					"id": "c67915bd-5a05-6252-e53a-1cad3a9a4cc6",
					"attributes": []
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"id": "1b9c52c1-f90f-46d5-9911-ff8810f6d4f6",
					"libraryName": "OGC",
					"libraryType": "web",
					"organization": "OGC",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\Data\\",
					"alias": "",
					"description": "OGC Network&#8482; is a window onto the dynamic, constantly changing geospatial web as described by the OGC&#174; Reference Model (ORM). Multiple communities of interest for research in geospatial interoperability are supported, and persistent demonstration capability is provided. Here you will find the latest information on OGC-compatible software, services, and information models (e.g. GML profiles, SLD examples, etc.).",
					"function": [
						{
							"functionName": "OGC GetMap",
							"description": "The OGC Web Map Service (WMS) specification defines an HTTP interface for requesting georeferenced map images from a server. GeoServer supports WMS 1.1.1, the most widely used version of WMS, as well as WMS 1.3.0."
						},
						{
							"functionName": "OGC GetStyle",
							"description": "Get Styles Information"
						}
					],
					"type": "library"
				}
			],
			"actions": [
				{
					"act": "web",
					"inputFileNames": [
						"rules.xml"
					],
					"outputFileNames": [
						"england.png"
					],
					"outputFileTypes": [
						"image/png"
					],
					"webservices": [
						{
							"libraryName": "OGC",
							"libraryId": "1b9c52c1-f90f-46d5-9911-ff8810f6d4f6",
							"organization": "OGC",
							"id": "2b63d885-3c58-43eb-b6e6-e26ba49987d0",
							"functionName": "OGC GetMap",
							"functionType": "HTTP",
							"location": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
							"method": "GET",
							"urlFormat": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
							"urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?layers=GBR_BGS_625k_BABBOX=-11.302273,41.489333,10.260227,63.895583",
							"description": "Return England maps",
							"urlReturnFileType": "image/png",
							"inputAttributes": [
								{
									"label": "SLD_BODY",
									"name": "SLD_BODY",
									"value": "",
									"required": true,
									"shown": true,
									"example": "<Rule><Name>JURASSIC</Name><ogc:Filter><ogc:PropertyIsEqualTo><ogc:PropertyName>AGE_ONEGL</ogc:PropertyName><ogc:Literal>JURASSIC</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Filter><PolygonSymbolizer><Fill><CssParameter name=\"fill\">#32f1fe</CssParameter></Fill></PolygonSymbolizer></Rule><Rule><Name>TRIASSIC</Name><ogc:Filter><ogc:PropertyIsEqualTo><ogc:PropertyName>AGE_ONEGL</ogc:PropertyName><ogc:Literal>TRIASSIC</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Filter><PolygonSymbolizer><Fill><CssParameter name=\"fill\">#7f32fe</CssParameter></Fill></PolygonSymbolizer></Rule>",
									"attributeType": "input",
									"description": "sld description"
								},
								{
									"label": "layers",
									"name": "layers",
									"value": "GBR_BGS_625k_BA",
									"required": true,
									"shown": false,
									"example": "GBR_BGS_625k_BA",
									"attributeType": "input",
									"description": "structure id"
								},
								{
									"label": "BBOX",
									"name": "BBOX",
									"value": "-15.2710227365,42.645583275,6.2914772635,65.051833275",
									"required": true,
									"shown": false,
									"example": "-15.2710227365,42.645583275,6.2914772635,65.051833275",
									"attributeType": "input",
									"description": "Boundary BOX"
								},
								{
									"label": "VERSION",
									"name": "VERSION",
									"value": "1.1.1",
									"required": true,
									"shown": false,
									"example": "1.1.1",
									"attributeType": "input",
									"description": "VERSION"
								},
								{
									"label": "REQUEST",
									"name": "REQUEST",
									"value": "GetMap",
									"required": true,
									"shown": false,
									"example": "GetMap",
									"attributeType": "input",
									"description": "GetMap"
								},
								{
									"label": "srs",
									"name": "srs",
									"value": "EPSG:4326",
									"required": true,
									"shown": false,
									"example": "EPSG:4326",
									"attributeType": "input",
									"description": "srs"
								},
								{
									"label": "height",
									"name": "height",
									"value": "800",
									"required": true,
									"shown": false,
									"example": "800",
									"attributeType": "input",
									"description": "height"
								},
								{
									"label": "width",
									"name": "width",
									"value": "600",
									"required": true,
									"shown": false,
									"example": "600",
									"attributeType": "input",
									"description": "width"
								},
								{
									"label": "SERVICE",
									"name": "SERVICE",
									"value": "WMS",
									"required": true,
									"shown": false,
									"example": "WMS",
									"attributeType": "input",
									"description": "SERVICE"
								},
								{
									"label": "format",
									"name": "format",
									"value": "image/png",
									"required": true,
									"shown": false,
									"example": "image/png",
									"attributeType": "input",
									"description": "format"
								},
								{
									"label": "transparent",
									"name": "transparent",
									"value": "true",
									"required": true,
									"shown": false,
									"example": "true",
									"attributeType": "input",
									"description": "transparent"
								}
							],
							"type": "function"
						}
					],
					"actionOut": [
						{
							"urlReturnFileName": "england.png",
							"urlReturnFileType": "image/png",
							"id": "c67915bd-5a05-6252-e53a-1cad3a9a4cc6",
							"attributes": []
						}
					]
				}
			]
		},
		{
			"id": "d6801a3c-94bc-4e4e-b7ca-5f6954f314e0",
			"x": -691.0625,
			"y": 232.703125,
			"label": "",
			"timestamp": 1475510736858,
			"type": "terminal",
			"image": "image/terminal highlight.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "england.png",
					"urlReturnFileType": "image/png",
					"id": "c67915bd-5a05-6252-e53a-1cad3a9a4cc6",
					"attributes": []
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "england.png",
					"urlReturnFileType": "graph",
					"id": "918bf366-f9a4-4d19-74af-bcd75803f58e"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "9784d272-6bf3-ce8d-70f2-14dad97d5c82",
					"act": "print",
					"outputFileNames": [
						"england.png"
					],
					"printType": "graph",
					"resourceid": "c67915bd-5a05-6252-e53a-1cad3a9a4cc6"
				}
			]
		}
	],
	"edges": [
		{
			"from": "8b6b131b-3ba3-4708-9acf-ca775b923d4d",
			"to": "834de1c0-760d-439b-9ddd-69d3be9336d8",
			"id": "022e7b5a-e3c8-4717-9401-5c1ad3d96b0a",
			"arrows": "to",
			"label": "capabilities.xml\n",
			"resources": [
				{
					"id": "17201697-1b9b-49c0-a403-6c2f586e039b",
					"resourceType": "HTTP",
					"organization": "OGC",
					"resourceName": "OGC GetCapabilities",
					"description": "Get Layer information",
					"url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
					"urlExample": "",
					"method": "GET",
					"attributes": [
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "request",
							"name": "request",
							"value": "GetCapabilities",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "version",
							"name": "version",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version number"
						},
						{
							"label": "format",
							"name": "format",
							"value": "text/html",
							"required": true,
							"shown": false,
							"example": "text/html",
							"attributeType": "input",
							"description": "return format"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<WMT_MS_Capabilities>\t\t\t\t<Service></Service>\t\t\t\t<Capability>\t\t\t\t\t<Request></Request>\t\t\t\t\t<Exception></Exception>\t\t\t\t\t<VendorSpecificCapabilities></VendorSpecificCapabilities>\t\t\t\t\t<Layer>\t\t\t\t\t\t<Name></Name>\t\t\t\t\t\t<Title></Title>\t\t\t\t\t\t<Abstract></Abstract>\t\t\t\t\t\t<SRS></SRS>\t\t\t\t\t\t<LatLonBoundingBox></LatLonBoundingBox>\t\t\t\t\t\t<BoundingBox></BoundingBox>\t\t\t\t\t\t<Attribution></Attribution>\t\t\t\t\t\t<AuthorityURL></AuthorityURL>\t\t\t\t\t\t<Style></Style>\t\t\t\t\t</Layer>\t\t\t\t</Capability>\t\t\t</WMT_MS_Capabilities>",
					"jsUrlReturnFileSchema": {
						"text": "WMT_MS_Capabilities",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "Capability",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": [
									{
										"text": "Request",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": []
									},
									{
										"text": "VendorSpecificCapabilities",
										"a_attr": {
											"style": "background-color: rgb(205, 165, 10) !important"
										},
										"state": {
											"opened": true
										},
										"children": []
									},
									{
										"text": "Layer",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": [
											{
												"text": "LatLonBoundingBox",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "SRS",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Abstract",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "BoundingBox",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Title",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "AuthorityURL",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Style",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Attribution",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											},
											{
												"text": "Name",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": []
											}
										]
									},
									{
										"text": "Exception",
										"a_attr": {
											"style": ""
										},
										"state": {
											"opened": true
										},
										"children": []
									}
								]
							},
							{
								"text": "Service",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							}
						]
					},
					"fileName": "OGC GetCapabilities.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "capabilities.xml",
					"defaultAttributes": [
						{
							"label": "SERVICE",
							"name": "SERVICE",
							"value": "WMS",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "request",
							"name": "request",
							"value": "GetCapabilities",
							"required": true,
							"shown": false,
							"example": "WMS",
							"attributeType": "input",
							"description": "server name"
						},
						{
							"label": "version",
							"name": "version",
							"value": "1.1.1",
							"required": true,
							"shown": false,
							"example": "1.1.1",
							"attributeType": "input",
							"description": "version number"
						},
						{
							"label": "format",
							"name": "format",
							"value": "text/html",
							"required": true,
							"shown": false,
							"example": "text/html",
							"attributeType": "input",
							"description": "return format"
						}
					]
				}
			],
			"libraries": []
		},
		{
			"from": "834de1c0-760d-439b-9ddd-69d3be9336d8",
			"to": "5045c928-2bd8-4b08-91cc-0947c5b7b56b",
			"id": "bf8490d7-0414-4fac-bb11-e1f4c11f4d0f",
			"arrows": "to",
			"label": "layers.xml\n",
			"resources": [],
			"libraries": []
		},
		{
			"from": "5045c928-2bd8-4b08-91cc-0947c5b7b56b",
			"to": "e5c9f09b-df34-4187-b4a1-f8ae3ef14c95",
			"id": "74486fdc-f698-469c-bbcb-00418a8d5bfe",
			"arrows": "to",
			"label": "styles.xml\n",
			"resources": [
				{
					"urlReturnFileName": "styles.xml",
					"urlReturnFileType": "xml",
					"id": "a45ec642-6ed4-965c-7074-3e1974cf4549",
					"attributes": []
				}
			],
			"libraries": []
		},
		{
			"from": "01939b24-9b1c-4593-8cf4-0806679225fa",
			"to": "5045c928-2bd8-4b08-91cc-0947c5b7b56b",
			"id": "e1d11665-c909-45d0-bf30-106b3c24ca32",
			"arrows": "to",
			"label": "OGC\n",
			"resources": [],
			"libraries": [
				{
					"id": "1b9c52c1-f90f-46d5-9911-ff8810f6d4f6",
					"libraryName": "OGC",
					"libraryType": "web",
					"organization": "OGC",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\Data\\",
					"alias": "",
					"description": "OGC Network&#8482; is a window onto the dynamic, constantly changing geospatial web as described by the OGC&#174; Reference Model (ORM). Multiple communities of interest for research in geospatial interoperability are supported, and persistent demonstration capability is provided. Here you will find the latest information on OGC-compatible software, services, and information models (e.g. GML profiles, SLD examples, etc.).",
					"function": [
						{
							"functionName": "OGC GetMap",
							"description": "The OGC Web Map Service (WMS) specification defines an HTTP interface for requesting georeferenced map images from a server. GeoServer supports WMS 1.1.1, the most widely used version of WMS, as well as WMS 1.3.0."
						},
						{
							"functionName": "OGC GetStyle",
							"description": "Get Styles Information"
						}
					],
					"type": "library"
				}
			]
		},
		{
			"from": "01939b24-9b1c-4593-8cf4-0806679225fa",
			"to": "9550d4fb-502b-4f08-9f81-a6b6f6b2bb1e",
			"id": "2abd8060-fa8e-42b4-9a79-6666cc830e71",
			"arrows": "to",
			"label": "OGC\n",
			"resources": [],
			"libraries": [
				{
					"id": "1b9c52c1-f90f-46d5-9911-ff8810f6d4f6",
					"libraryName": "OGC",
					"libraryType": "web",
					"organization": "OGC",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\Data\\",
					"alias": "",
					"description": "OGC Network&#8482; is a window onto the dynamic, constantly changing geospatial web as described by the OGC&#174; Reference Model (ORM). Multiple communities of interest for research in geospatial interoperability are supported, and persistent demonstration capability is provided. Here you will find the latest information on OGC-compatible software, services, and information models (e.g. GML profiles, SLD examples, etc.).",
					"function": [
						{
							"functionName": "OGC GetMap",
							"description": "The OGC Web Map Service (WMS) specification defines an HTTP interface for requesting georeferenced map images from a server. GeoServer supports WMS 1.1.1, the most widely used version of WMS, as well as WMS 1.3.0."
						},
						{
							"functionName": "OGC GetStyle",
							"description": "Get Styles Information"
						}
					],
					"type": "library"
				}
			]
		},
		{
			"from": "e5c9f09b-df34-4187-b4a1-f8ae3ef14c95",
			"to": "9550d4fb-502b-4f08-9f81-a6b6f6b2bb1e",
			"id": "1c0194ab-567f-47f0-946a-66a393fe4bb0",
			"arrows": "to",
			"label": "rules.xml\n",
			"resources": [],
			"libraries": []
		},
		{
			"from": "9550d4fb-502b-4f08-9f81-a6b6f6b2bb1e",
			"to": "d6801a3c-94bc-4e4e-b7ca-5f6954f314e0",
			"id": "fecd9826-8392-495d-b72f-d375fb21fd43",
			"arrows": "to",
			"label": "england.png\n",
			"resources": [
				{
					"urlReturnFileName": "england.png",
					"urlReturnFileType": "image/png",
					"id": "c67915bd-5a05-6252-e53a-1cad3a9a4cc6",
					"attributes": []
				}
			],
			"libraries": []
		}
	]
        
}


