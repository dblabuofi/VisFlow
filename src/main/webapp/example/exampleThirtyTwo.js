var exampleThirtyTwo = {
	"nodes": [
		{
			"id": "7411df33-c7b3-4404-9191-6d297d39359a",
			"x": -212.55134266263235,
			"y": -295.3383604387292,
			"label": "",
			"timestamp": 1486260017965,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
					"libraryName": "North American Geogocial Knowledge Base",
					"libraryId": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
					"organization": "University of Idaho",
					"id": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
					"functionName": "getGeologicalName.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Parse Geogocial age, get North American Geogocial Term back.",
					"urlReturnFileType": "",
					"attributes": [
						{
							"label": "Age",
							"name": "-age",
							"type": "Integer",
							"value": "",
							"required": true,
							"shown": true,
							"example": "232",
							"attributeType": "input",
							"description": "A Geogocial Age",
							"from": "default"
						},
						{
							"label": "File Name",
							"name": "-fileName",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "geoTerm.csv",
							"attributeType": "input",
							"description": "Output File Name",
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
			"id": "d273278d-d0a4-4fb7-9da6-fe4bf71de8a4",
			"x": -108.8023983315954,
			"y": -177.23070907194995,
			"label": "",
			"timestamp": 1486265566918,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"urlReturnFileName": "geoTerm.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "312dd25d-199c-36ff-4948-e0eacd21a6e8",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "North American Geogocial Knowledge Base",
					"libraryId": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
					"organization": "University of Idaho",
					"id": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
					"functionName": "getGeologicalName.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Parse Geogocial age, get North American Geogocial Term back.",
					"urlReturnFileType": "",
					"attributes": [
						{
							"label": "Age",
							"name": "-age",
							"type": "Integer",
							"value": "",
							"required": true,
							"shown": true,
							"example": "232",
							"attributeType": "input",
							"description": "A Geogocial Age",
							"from": "default"
						},
						{
							"label": "File Name",
							"name": "-fileName",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "geoTerm.csv",
							"attributeType": "input",
							"description": "Output File Name",
							"from": "default"
						}
					],
					"type": "function"
				}
			],
			"actions": [
				{
					"id": "4e9b7961-a956-9e4a-e3f6-1afd9f417a09",
					"act": "Function",
					"inputFileNames": [],
					"outputFileNames": [
						"geoTerm.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetFunction": {
						"libraryName": "North American Geogocial Knowledge Base",
						"libraryId": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
						"organization": "University of Idaho",
						"id": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
						"functionName": "getGeologicalName.py",
						"functionType": "python executable",
						"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
						"description": "Parse Geogocial age, get North American Geogocial Term back.",
						"urlReturnFileType": "",
						"attributes": [
							{
								"label": "Age",
								"name": "-age",
								"type": "Integer",
								"value": "50",
								"required": true,
								"shown": true,
								"example": "232",
								"attributeType": "input",
								"description": "A Geogocial Age",
								"from": "input"
							},
							{
								"label": "File Name",
								"name": "-fileName",
								"type": "String",
								"value": "geoTerm.csv",
								"required": true,
								"shown": true,
								"example": "geoTerm.csv",
								"attributeType": "input",
								"description": "Output File Name",
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
			"id": "49282dba-3366-43c1-8ad8-235e2b85e61f",
			"x": 182.3125,
			"y": -188.53125,
			"label": "PBDB Fossil Collection by year\n",
			"timestamp": 1486324903919,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "210b4d96-a568-4a49-b34e-86a4eee308e4",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Collection by year",
					"description": "Get Styles Information by submitting minmum ma and maximum ma",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan",
					"method": "GET",
					"attributes": [
						{
							"label": "min_ma",
							"name": "min_ma",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "47.4",
							"attributeType": "input",
							"description": "Minimum Ma",
							"from": "input"
						},
						{
							"label": "max_ma",
							"name": "max_ma",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "50.6",
							"attributeType": "input",
							"description": "Minimum Ma",
							"from": "input"
						},
						{
							"label": "show",
							"name": "show",
							"type": "string",
							"value": "coords,paleoloc,loc",
							"required": true,
							"shown": false,
							"example": "paleoloc",
							"attributeType": "input",
							"description": "Show location",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "occurrence_no",
							"name": "occurrence_no",
							"type": "string"
						},
						{
							"label": "record_type",
							"name": "record_type",
							"type": "string"
						},
						{
							"label": "formation",
							"name": "formation",
							"type": "string"
						},
						{
							"label": "lng",
							"name": "lng",
							"type": "string"
						},
						{
							"label": "lat",
							"name": "lat",
							"type": "string"
						},
						{
							"label": "collection_name",
							"name": "collection_name",
							"type": "string"
						},
						{
							"label": "collection_subset",
							"name": "collection_subset",
							"type": "string"
						},
						{
							"label": "collection_aka",
							"name": "collection_aka",
							"type": "string"
						},
						{
							"label": "n_occs",
							"name": "n_occs",
							"type": "string"
						},
						{
							"label": "early_interval",
							"name": "early_interval",
							"type": "string"
						},
						{
							"label": "late_interval",
							"name": "late_interval",
							"type": "string"
						},
						{
							"label": "max_ma",
							"name": "max_ma",
							"type": "string"
						},
						{
							"label": "min_ma",
							"name": "min_ma",
							"type": "string"
						},
						{
							"label": "reference_no",
							"name": "reference_no",
							"type": "string"
						},
						{
							"label": "paleomodel",
							"name": "paleomodel",
							"type": "string"
						},
						{
							"label": "paleolng",
							"name": "paleolng",
							"type": "string"
						},
						{
							"label": "paleolat",
							"name": "paleolat",
							"type": "string"
						},
						{
							"label": "geoplate",
							"name": "geoplate",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<FossilRecord>\r\n\t\t\t\t<occurrence_no></occurrence_no>\r\n\t\t\t\t<record_type></record_type>\r\n\t\t\t\t<formation></formation>\r\n\t\t\t\t<lng></lng>\r\n\t\t\t\t<lat></lat>\r\n\t\t\t\t<collection_name></collection_name>\r\n\t\t\t\t<collection_subset></collection_subset>\r\n\t\t\t\t<collection_aka></collection_aka>\r\n\t\t\t\t<n_occs></n_occs>\r\n\t\t\t\t<early_interval></early_interval>\r\n\t\t\t\t<late_interval></late_interval>\r\n\t\t\t\t<max_ma></max_ma>\r\n\t\t\t\t<min_ma></min_ma>\r\n\t\t\t\t<reference_no></reference_no>\r\n\t\t\t\t<paleomodel></paleomodel>\r\n\t\t\t\t<paleolng></paleolng>\r\n\t\t\t\t<paleolat></paleolat>\r\n\t\t\t\t<geoplate></geoplate>\r\n\t\t\t</FossilRecord>",
					"jsUrlReturnFileSchema": {
						"text": "FossilRecord",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							},
							{
								"text": "paleomodel",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_4",
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_5",
								"children": []
							},
							{
								"text": "formation",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_6",
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_7",
								"children": []
							},
							{
								"text": "paleolng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_8",
								"children": []
							},
							{
								"text": "geoplate",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_9",
								"children": []
							},
							{
								"text": "collection_subset",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_10",
								"children": []
							},
							{
								"text": "paleolat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_11",
								"children": []
							},
							{
								"text": "n_occs",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_12",
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_13",
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_14",
								"children": []
							},
							{
								"text": "collection_aka",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_15",
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_16",
								"children": []
							},
							{
								"text": "collection_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_17",
								"children": []
							},
							{
								"text": "reference_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_18",
								"children": []
							},
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_19",
								"children": []
							}
						]
					},
					"fileName": "PBDB fossil collection by year.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Collection by year"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "210b4d96-a568-4a49-b34e-86a4eee308e4",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Collection by year",
					"description": "Get Styles Information by submitting minmum ma and maximum ma",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan",
					"method": "GET",
					"attributes": [
						{
							"label": "min_ma",
							"name": "min_ma",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "47.4",
							"attributeType": "input",
							"description": "Minimum Ma",
							"from": "input"
						},
						{
							"label": "max_ma",
							"name": "max_ma",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "50.6",
							"attributeType": "input",
							"description": "Minimum Ma",
							"from": "input"
						},
						{
							"label": "show",
							"name": "show",
							"type": "string",
							"value": "coords,paleoloc,loc",
							"required": true,
							"shown": false,
							"example": "paleoloc",
							"attributeType": "input",
							"description": "Show location",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "occurrence_no",
							"name": "occurrence_no",
							"type": "string"
						},
						{
							"label": "record_type",
							"name": "record_type",
							"type": "string"
						},
						{
							"label": "formation",
							"name": "formation",
							"type": "string"
						},
						{
							"label": "lng",
							"name": "lng",
							"type": "string"
						},
						{
							"label": "lat",
							"name": "lat",
							"type": "string"
						},
						{
							"label": "collection_name",
							"name": "collection_name",
							"type": "string"
						},
						{
							"label": "collection_subset",
							"name": "collection_subset",
							"type": "string"
						},
						{
							"label": "collection_aka",
							"name": "collection_aka",
							"type": "string"
						},
						{
							"label": "n_occs",
							"name": "n_occs",
							"type": "string"
						},
						{
							"label": "early_interval",
							"name": "early_interval",
							"type": "string"
						},
						{
							"label": "late_interval",
							"name": "late_interval",
							"type": "string"
						},
						{
							"label": "max_ma",
							"name": "max_ma",
							"type": "string"
						},
						{
							"label": "min_ma",
							"name": "min_ma",
							"type": "string"
						},
						{
							"label": "reference_no",
							"name": "reference_no",
							"type": "string"
						},
						{
							"label": "paleomodel",
							"name": "paleomodel",
							"type": "string"
						},
						{
							"label": "paleolng",
							"name": "paleolng",
							"type": "string"
						},
						{
							"label": "paleolat",
							"name": "paleolat",
							"type": "string"
						},
						{
							"label": "geoplate",
							"name": "geoplate",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<FossilRecord>\r\n\t\t\t\t<occurrence_no></occurrence_no>\r\n\t\t\t\t<record_type></record_type>\r\n\t\t\t\t<formation></formation>\r\n\t\t\t\t<lng></lng>\r\n\t\t\t\t<lat></lat>\r\n\t\t\t\t<collection_name></collection_name>\r\n\t\t\t\t<collection_subset></collection_subset>\r\n\t\t\t\t<collection_aka></collection_aka>\r\n\t\t\t\t<n_occs></n_occs>\r\n\t\t\t\t<early_interval></early_interval>\r\n\t\t\t\t<late_interval></late_interval>\r\n\t\t\t\t<max_ma></max_ma>\r\n\t\t\t\t<min_ma></min_ma>\r\n\t\t\t\t<reference_no></reference_no>\r\n\t\t\t\t<paleomodel></paleomodel>\r\n\t\t\t\t<paleolng></paleolng>\r\n\t\t\t\t<paleolat></paleolat>\r\n\t\t\t\t<geoplate></geoplate>\r\n\t\t\t</FossilRecord>",
					"jsUrlReturnFileSchema": {
						"text": "FossilRecord",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							},
							{
								"text": "paleomodel",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_4",
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_5",
								"children": []
							},
							{
								"text": "formation",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_6",
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_7",
								"children": []
							},
							{
								"text": "paleolng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_8",
								"children": []
							},
							{
								"text": "geoplate",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_9",
								"children": []
							},
							{
								"text": "collection_subset",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_10",
								"children": []
							},
							{
								"text": "paleolat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_11",
								"children": []
							},
							{
								"text": "n_occs",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_12",
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_13",
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_14",
								"children": []
							},
							{
								"text": "collection_aka",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_15",
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_16",
								"children": []
							},
							{
								"text": "collection_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_17",
								"children": []
							},
							{
								"text": "reference_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_18",
								"children": []
							},
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_19",
								"children": []
							}
						]
					},
					"fileName": "PBDB fossil collection by year.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Collection by year"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "35954ad3-4271-4641-80b7-19cc58975a4f",
			"x": -54.12700433132041,
			"y": -11.327193455689146,
			"label": "",
			"timestamp": 1486325156732,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "geoTerm.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "312dd25d-199c-36ff-4948-e0eacd21a6e8",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"jsUrlReturnFileSchema": {
						"text": "geoTerm.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "name",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "base",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "top",
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
					"id": "210b4d96-a568-4a49-b34e-86a4eee308e4",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Collection by year",
					"description": "Get Styles Information by submitting minmum ma and maximum ma",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan",
					"method": "GET",
					"attributes": [
						{
							"label": "min_ma",
							"name": "min_ma",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "47.4",
							"attributeType": "input",
							"description": "Minimum Ma",
							"from": "input"
						},
						{
							"label": "max_ma",
							"name": "max_ma",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "50.6",
							"attributeType": "input",
							"description": "Minimum Ma",
							"from": "input"
						},
						{
							"label": "show",
							"name": "show",
							"type": "string",
							"value": "coords,paleoloc,loc",
							"required": true,
							"shown": false,
							"example": "paleoloc",
							"attributeType": "input",
							"description": "Show location",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "occurrence_no",
							"name": "occurrence_no",
							"type": "string"
						},
						{
							"label": "record_type",
							"name": "record_type",
							"type": "string"
						},
						{
							"label": "formation",
							"name": "formation",
							"type": "string"
						},
						{
							"label": "lng",
							"name": "lng",
							"type": "string"
						},
						{
							"label": "lat",
							"name": "lat",
							"type": "string"
						},
						{
							"label": "collection_name",
							"name": "collection_name",
							"type": "string"
						},
						{
							"label": "collection_subset",
							"name": "collection_subset",
							"type": "string"
						},
						{
							"label": "collection_aka",
							"name": "collection_aka",
							"type": "string"
						},
						{
							"label": "n_occs",
							"name": "n_occs",
							"type": "string"
						},
						{
							"label": "early_interval",
							"name": "early_interval",
							"type": "string"
						},
						{
							"label": "late_interval",
							"name": "late_interval",
							"type": "string"
						},
						{
							"label": "max_ma",
							"name": "max_ma",
							"type": "string"
						},
						{
							"label": "min_ma",
							"name": "min_ma",
							"type": "string"
						},
						{
							"label": "reference_no",
							"name": "reference_no",
							"type": "string"
						},
						{
							"label": "paleomodel",
							"name": "paleomodel",
							"type": "string"
						},
						{
							"label": "paleolng",
							"name": "paleolng",
							"type": "string"
						},
						{
							"label": "paleolat",
							"name": "paleolat",
							"type": "string"
						},
						{
							"label": "geoplate",
							"name": "geoplate",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<FossilRecord>\r\n\t\t\t\t<occurrence_no></occurrence_no>\r\n\t\t\t\t<record_type></record_type>\r\n\t\t\t\t<formation></formation>\r\n\t\t\t\t<lng></lng>\r\n\t\t\t\t<lat></lat>\r\n\t\t\t\t<collection_name></collection_name>\r\n\t\t\t\t<collection_subset></collection_subset>\r\n\t\t\t\t<collection_aka></collection_aka>\r\n\t\t\t\t<n_occs></n_occs>\r\n\t\t\t\t<early_interval></early_interval>\r\n\t\t\t\t<late_interval></late_interval>\r\n\t\t\t\t<max_ma></max_ma>\r\n\t\t\t\t<min_ma></min_ma>\r\n\t\t\t\t<reference_no></reference_no>\r\n\t\t\t\t<paleomodel></paleomodel>\r\n\t\t\t\t<paleolng></paleolng>\r\n\t\t\t\t<paleolat></paleolat>\r\n\t\t\t\t<geoplate></geoplate>\r\n\t\t\t</FossilRecord>",
					"jsUrlReturnFileSchema": {
						"text": "FossilRecord",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							},
							{
								"text": "paleomodel",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_4",
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_5",
								"children": []
							},
							{
								"text": "formation",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_6",
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_7",
								"children": []
							},
							{
								"text": "paleolng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_8",
								"children": []
							},
							{
								"text": "geoplate",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_9",
								"children": []
							},
							{
								"text": "collection_subset",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_10",
								"children": []
							},
							{
								"text": "paleolat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_11",
								"children": []
							},
							{
								"text": "n_occs",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_12",
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_13",
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_14",
								"children": []
							},
							{
								"text": "collection_aka",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_15",
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_16",
								"children": []
							},
							{
								"text": "collection_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_17",
								"children": []
							},
							{
								"text": "reference_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_18",
								"children": []
							},
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_19",
								"children": []
							}
						]
					},
					"fileName": "PBDB fossil collection by year.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Collection by year"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "454f1cdf-bc1f-e16c-9008-ca2ff75d53b4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "210b4d96-a568-4a49-b34e-86a4eee308e4",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"fossilRecords.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "210b4d96-a568-4a49-b34e-86a4eee308e4",
						"resourceType": "HTTP",
						"organization": "PBDB",
						"resourceName": "PBDB Fossil Collection by year",
						"description": "Get Styles Information by submitting minmum ma and maximum ma",
						"url": "https://paleobiodb.org/data1.2/occs/list.txt",
						"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan",
						"method": "GET",
						"attributes": [
							{
								"label": "min_ma",
								"name": "min_ma",
								"type": "string",
								"value": "top",
								"required": true,
								"shown": true,
								"example": "47.4",
								"attributeType": "input",
								"description": "Minimum Ma",
								"from": "geoTerm.csv"
							},
							{
								"label": "max_ma",
								"name": "max_ma",
								"type": "string",
								"value": "base",
								"required": true,
								"shown": true,
								"example": "50.6",
								"attributeType": "input",
								"description": "Minimum Ma",
								"from": "geoTerm.csv"
							},
							{
								"label": "show",
								"name": "show",
								"type": "string",
								"value": "coords,paleoloc,loc",
								"required": true,
								"shown": false,
								"example": "paleoloc",
								"attributeType": "input",
								"description": "Show location",
								"from": "default"
							}
						],
						"outAttributes": [
							{
								"label": "occurrence_no",
								"name": "occurrence_no",
								"type": "string"
							},
							{
								"label": "record_type",
								"name": "record_type",
								"type": "string"
							},
							{
								"label": "formation",
								"name": "formation",
								"type": "string"
							},
							{
								"label": "lng",
								"name": "lng",
								"type": "string"
							},
							{
								"label": "lat",
								"name": "lat",
								"type": "string"
							},
							{
								"label": "collection_name",
								"name": "collection_name",
								"type": "string"
							},
							{
								"label": "collection_subset",
								"name": "collection_subset",
								"type": "string"
							},
							{
								"label": "collection_aka",
								"name": "collection_aka",
								"type": "string"
							},
							{
								"label": "n_occs",
								"name": "n_occs",
								"type": "string"
							},
							{
								"label": "early_interval",
								"name": "early_interval",
								"type": "string"
							},
							{
								"label": "late_interval",
								"name": "late_interval",
								"type": "string"
							},
							{
								"label": "max_ma",
								"name": "max_ma",
								"type": "string"
							},
							{
								"label": "min_ma",
								"name": "min_ma",
								"type": "string"
							},
							{
								"label": "reference_no",
								"name": "reference_no",
								"type": "string"
							},
							{
								"label": "paleomodel",
								"name": "paleomodel",
								"type": "string"
							},
							{
								"label": "paleolng",
								"name": "paleolng",
								"type": "string"
							},
							{
								"label": "paleolat",
								"name": "paleolat",
								"type": "string"
							},
							{
								"label": "geoplate",
								"name": "geoplate",
								"type": "string"
							}
						],
						"methodReturnFileType": "CSV",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<FossilRecord>\r\n\t\t\t\t<occurrence_no></occurrence_no>\r\n\t\t\t\t<record_type></record_type>\r\n\t\t\t\t<formation></formation>\r\n\t\t\t\t<lng></lng>\r\n\t\t\t\t<lat></lat>\r\n\t\t\t\t<collection_name></collection_name>\r\n\t\t\t\t<collection_subset></collection_subset>\r\n\t\t\t\t<collection_aka></collection_aka>\r\n\t\t\t\t<n_occs></n_occs>\r\n\t\t\t\t<early_interval></early_interval>\r\n\t\t\t\t<late_interval></late_interval>\r\n\t\t\t\t<max_ma></max_ma>\r\n\t\t\t\t<min_ma></min_ma>\r\n\t\t\t\t<reference_no></reference_no>\r\n\t\t\t\t<paleomodel></paleomodel>\r\n\t\t\t\t<paleolng></paleolng>\r\n\t\t\t\t<paleolat></paleolat>\r\n\t\t\t\t<geoplate></geoplate>\r\n\t\t\t</FossilRecord>",
						"jsUrlReturnFileSchema": {
							"text": "FossilRecord",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j10_1",
							"children": [
								{
									"text": "max_ma",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_2",
									"children": []
								},
								{
									"text": "lng",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_3",
									"children": []
								},
								{
									"text": "paleomodel",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_4",
									"children": []
								},
								{
									"text": "late_interval",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_5",
									"children": []
								},
								{
									"text": "formation",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_6",
									"children": []
								},
								{
									"text": "record_type",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_7",
									"children": []
								},
								{
									"text": "paleolng",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_8",
									"children": []
								},
								{
									"text": "geoplate",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_9",
									"children": []
								},
								{
									"text": "collection_subset",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_10",
									"children": []
								},
								{
									"text": "paleolat",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_11",
									"children": []
								},
								{
									"text": "n_occs",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_12",
									"children": []
								},
								{
									"text": "early_interval",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_13",
									"children": []
								},
								{
									"text": "min_ma",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"selected": false,
									"id": "j10_14",
									"children": []
								},
								{
									"text": "collection_aka",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_15",
									"children": []
								},
								{
									"text": "lat",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_16",
									"children": []
								},
								{
									"text": "collection_name",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_17",
									"children": []
								},
								{
									"text": "reference_no",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_18",
									"children": []
								},
								{
									"text": "occurrence_no",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_19",
									"children": []
								}
							]
						},
						"fileName": "PBDB fossil collection by year.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "PBDB Fossil Collection by year"
					}
				}
			]
		},
		{
			"id": "4723c917-2fe4-4699-9a92-2b71bf320b46",
			"x": -750.5325326513965,
			"y": 137.05854331933256,
			"label": "GPlates Paleo-geographic Coordinates\n",
			"timestamp": 1486372155562,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
					"resourceType": "HTTPS",
					"organization": "GPlates",
					"resourceName": "GPlates Paleo-geographic Coordinates",
					"description": "Reconstruct the geographic locations from present day coordinates back \r\n\t\tto their paleo-positions. Each location will be assigned a plate id and moved back in time\r\n\t\tusing the chosen reconstruction model.",
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
							"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. \r\n\t\t\tThe valid input value depends on the chosen reconstruction model.",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "lat",
							"name": "lat",
							"type": "string"
						},
						{
							"label": "lng",
							"name": "lng",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"methodReturnFileSchema": "<gplates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t\t<array>lng</array>\r\n\t\t\t\t\t<array>lat</array>\r\n\t\t\t\t</coordinates>\r\n\t\t\t\t<type>type</type>\r\n\t\t\t</gplates>",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
					"jsUrlReturnFileSchema": {
						"text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j17_1",
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j17_2",
								"children": []
							}
						]
					},
					"fileName": "GPlates Paleo-geographic Coordinates.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "GPlates Paleo-geographic Coordinates",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper",
						"attrs": [
							"lat",
							"lng"
						]
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
					"description": "Reconstruct the geographic locations from present day coordinates back \r\n\t\tto their paleo-positions. Each location will be assigned a plate id and moved back in time\r\n\t\tusing the chosen reconstruction model.",
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
							"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. \r\n\t\t\tThe valid input value depends on the chosen reconstruction model.",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "lat",
							"name": "lat",
							"type": "string"
						},
						{
							"label": "lng",
							"name": "lng",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"methodReturnFileSchema": "<gplates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t\t<array>lng</array>\r\n\t\t\t\t\t<array>lat</array>\r\n\t\t\t\t</coordinates>\r\n\t\t\t\t<type>type</type>\r\n\t\t\t</gplates>",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
					"jsUrlReturnFileSchema": {
						"text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j17_1",
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j17_2",
								"children": []
							}
						]
					},
					"fileName": "GPlates Paleo-geographic Coordinates.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "GPlates Paleo-geographic Coordinates",
					"wrapper": {
						"wrapperName": "jsonTOTableWrapper",
						"attrs": [
							"lat",
							"lng"
						]
					}
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "d4aa8007-e494-4bcd-a71b-a60e0b03a98b",
			"x": 118.89804781126155,
			"y": 520.535491693775,
			"label": "",
			"timestamp": 1486378942183,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "fossilResultTable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7ec65e1c-ae18-9158-86ad-67a87d1230be",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "fe5f8e81-fabb-5883-654a-f8100d783733",
					"act": "print",
					"outputFileNames": [
						"fossilResultTable.csv"
					],
					"printType": "table",
					"resourceid": "1c10f9f2-4b17-66dc-4ee1-281882e83b56",
					"numOfWins": "2",
					"submit": {
						"windowFunction": [
							"Google Map",
							"Gplates"
						],
						"values": [
							[
								"lat",
								"lng"
							],
							[
								"lat",
								"lng",
								"min_ma",
								"max_ma"
							]
						]
					},
					"colFuns": []
				}
			]
		},
		{
			"id": "3504ace7-c9e7-40c1-82f7-3c763c6b30b0",
			"x": -506.76142797518435,
			"y": 318.4750900511189,
			"label": "",
			"timestamp": 1515364250178,
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
					"description": "Reconstruct the geographic locations from present day coordinates back \r\n\t\tto their paleo-positions. Each location will be assigned a plate id and moved back in time\r\n\t\tusing the chosen reconstruction model.",
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
							"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. \r\n\t\t\tThe valid input value depends on the chosen reconstruction model.",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "lat",
							"name": "lat",
							"type": "string"
						},
						{
							"label": "lng",
							"name": "lng",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"methodReturnFileSchema": "<gplates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t\t<array>lng</array>\r\n\t\t\t\t\t<array>lat</array>\r\n\t\t\t\t</coordinates>\r\n\t\t\t\t<type>type</type>\r\n\t\t\t</gplates>",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
					"jsUrlReturnFileSchema": {
						"text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j17_1",
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j17_2",
								"children": []
							}
						]
					},
					"fileName": "GPlates Paleo-geographic Coordinates.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "GPlates Paleo-geographic Coordinates",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper",
						"attrs": [
							"lat",
							"lng"
						]
					}
				},
				{
					"urlReturnFileName": "gplateinputclean.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ef3a9cd0-8c47-0ac7-fd19-8d20eb0d2f28",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "oldCoordinats.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "af7ddd51-aef0-61d0-391b-34cd6cd9854d",
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
						"oldCoordinats.xml"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
						"resourceType": "HTTPS",
						"organization": "GPlates",
						"resourceName": "GPlates Paleo-geographic Coordinates",
						"description": "Reconstruct the geographic locations from present day coordinates back \r\n\t\tto their paleo-positions. Each location will be assigned a plate id and moved back in time\r\n\t\tusing the chosen reconstruction model.",
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
								"from": "gplateinputclean.csv"
							},
							{
								"label": "time",
								"name": "time",
								"value": "time",
								"required": true,
								"shown": true,
								"example": "140",
								"attributeType": "input",
								"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. \r\n\t\t\tThe valid input value depends on the chosen reconstruction model.",
								"from": "gplateinputclean.csv"
							}
						],
						"outAttributes": [
							{
								"label": "lat",
								"name": "lat",
								"type": "string"
							},
							{
								"label": "lng",
								"name": "lng",
								"type": "string"
							}
						],
						"methodReturnFileType": "JSON",
						"methodReturnFileSchema": "<gplates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t\t<array>lng</array>\r\n\t\t\t\t\t<array>lat</array>\r\n\t\t\t\t</coordinates>\r\n\t\t\t\t<type>type</type>\r\n\t\t\t</gplates>",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
						"jsUrlReturnFileSchema": {
							"text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"selected": false,
							"id": "j17_1",
							"children": [
								{
									"text": "coordinates",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j17_2",
									"children": []
								}
							]
						},
						"fileName": "GPlates Paleo-geographic Coordinates.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "GPlates Paleo-geographic Coordinates",
						"wrapper": {
							"wrapperName": "jsonTOxmlWrapper",
							"attrs": [
								"lat",
								"lng"
							]
						}
					}
				}
			]
		},
		{
			"id": "5bf038f5-b526-44a6-9196-db3ef173f2a3",
			"x": -242.10790791791996,
			"y": 339.3517187178515,
			"label": "",
			"timestamp": 1516348186922,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "oldCoordinats.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "af7ddd51-aef0-61d0-391b-34cd6cd9854d",
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
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "oldCoord.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "3b4f87ee-13de-86c6-b195-fca8ecbaf5ac",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "f72944d9-c82a-abef-5afa-24ebd204a537",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "oldCoordinats.xml",
						"urlReturnFileType": "XML",
						"resourceType": "XML",
						"id": "af7ddd51-aef0-61d0-391b-34cd6cd9854d",
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
						}
					},
					"outputFileNames": [
						"oldCoord.xml"
					],
					"outputFileTypes": [
						"xml"
					],
					"selectAttrs": [],
					"newAttrs": [],
					"afterAction": {
						"action": "rowReplace",
						"input": "<Con.*>#<coordinates><array></array><array></array></coordinates><type>MultiPoint</type>"
					}
				}
			]
		},
		{
			"id": "5fdc2985-69e8-45f4-aa23-2d0254536935",
			"x": 133.921875,
			"y": 185.3125,
			"label": "",
			"timestamp": 1516399194908,
			"type": "analytics",
			"image": "image/analytics highlight.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "454f1cdf-bc1f-e16c-9008-ca2ff75d53b4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"jsUrlReturnFileSchema": {
						"text": "fossilRecords.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "reid_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "flags",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "collection_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "identified_name",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "identified_rank",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "identified_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "difference",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "accepted_name",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "accepted_rank",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "accepted_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "reference_no",
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
								"text": "paleomodel",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "paleolng",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "paleolat",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "geoplate",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "cc",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "state",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "county",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "latlng_basis",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "latlng_precision",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "geogscale",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "geogcomments",
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
					"urlReturnFileName": "gplateinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "5153f89b-4a11-d58f-1cd1-0973b4ca39fb",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
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
								"text": "oldLat",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "oldLng",
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
					"urlReturnFileName": "fossilResultTable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7ec65e1c-ae18-9158-86ad-67a87d1230be",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "0a6de9fe-c9c9-4b02-beb9-e9dfe1ee820c",
					"act": "MergeTable",
					"outputFileNames": [
						"fossilResultTable.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "appendwithmapkey",
					"mergeTableSelectInput": "fossilRecords.csv,lng,lat#gplateinfo.csv,lng,lat#oldLng,oldLat",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "a0f24df2-db96-4934-8a07-456e3987f88f",
			"x": -270.59375,
			"y": -22.09375,
			"label": "",
			"timestamp": 1516735970050,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "454f1cdf-bc1f-e16c-9008-ca2ff75d53b4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"jsUrlReturnFileSchema": {
						"text": "fossilRecords.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "reid_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "flags",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "collection_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "identified_name",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "identified_rank",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "identified_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "difference",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "accepted_name",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "accepted_rank",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "accepted_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "reference_no",
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
								"text": "paleomodel",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "paleolng",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "paleolat",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "geoplate",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "cc",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "state",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "county",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "latlng_basis",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "latlng_precision",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "geogscale",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "geogcomments",
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
					"urlReturnFileName": "gplatinputwhole.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "3cd59c36-b17e-9a05-c411-c63fc09a2e53",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "calcuate avarage function",
					"libraryId": "d8f4ab76-3b7d-428f-829e-9fee22f147dc",
					"organization": "University of Idaho",
					"id": "de597883-0579-418b-ba0e-d56718be490c",
					"functionName": "calaverage.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "calcuate avarage function",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "gplateinputwhole.csv",
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
							"value": "fossilRecords.csv",
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
							"value": "min_ma,max_ma",
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
							"value": "time",
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
				},
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
					"id": "5ccfdb9f-c5e8-ad02-f83b-898137369697",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"fossilRecords.csv"
					],
					"outputFileNames": [
						"gplatinputwhole.csv"
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
										"value": "gplatinputwhole.csv",
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
										"value": "fossilRecords.csv",
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
							"resourceName": "fossilRecords.csv"
						},
						{
							"attribute": "time",
							"action": {
								"libraryName": "calcuate avarage function",
								"libraryId": "d8f4ab76-3b7d-428f-829e-9fee22f147dc",
								"organization": "University of Idaho",
								"id": "de597883-0579-418b-ba0e-d56718be490c",
								"functionName": "calaverage.py",
								"functionType": "python executable",
								"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
								"description": "calcuate avarage function",
								"urlReturnFileType": "csv",
								"attributes": [
									{
										"label": "outFile",
										"name": "-outFile",
										"type": "String",
										"value": "gplatinputwhole.csv",
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
										"value": "fossilRecords.csv",
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
										"value": "min_ma,max_ma",
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
										"value": "time",
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
							"resourceName": "fossilRecords.csv"
						}
					]
				}
			]
		},
		{
			"id": "48f0b4fd-a85c-4e63-9170-17af79a6793d",
			"x": -565.2765353811355,
			"y": -158.88247734708565,
			"label": "",
			"timestamp": 1516735982037,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
					"libraryName": "calcuate avarage function",
					"libraryId": "d8f4ab76-3b7d-428f-829e-9fee22f147dc",
					"organization": "University of Idaho",
					"id": "de597883-0579-418b-ba0e-d56718be490c",
					"functionName": "calaverage.py",
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
				},
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
			"resourcesIn": [],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "a1713818-81d5-496b-b9e7-011737ec4a62",
			"x": -328.39899058336664,
			"y": 89.15507972328408,
			"label": "",
			"timestamp": 1516771644590,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gplatinputwhole.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "3cd59c36-b17e-9a05-c411-c63fc09a2e53",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"jsUrlReturnFileSchema": {
						"text": "gplatinputwhole.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "reid_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "flags",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "collection_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "identified_name",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "identified_rank",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "identified_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "difference",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "accepted_name",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "accepted_rank",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "accepted_no",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "reference_no",
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
								"text": "paleomodel",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "paleolng",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "paleolat",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "geoplate",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "cc",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "state",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "county",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "latlng_basis",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "latlng_precision",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "geogscale",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "geogcomments",
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
					"urlReturnFileName": "gplateinput.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0ef8281d-dd42-d53f-616c-6232b15491e9",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "8707c716-06f5-e275-e161-767d85f99fe8",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "gplatinputwhole.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"id": "3cd59c36-b17e-9a05-c411-c63fc09a2e53",
						"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
						"jsUrlReturnFileSchema": {
							"text": "gplatinputwhole.csv",
							"a_attr": {
								"style": ""
							},
							"state": {
								"opened": true
							},
							"children": [
								{
									"text": "occurrence_no",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "record_type",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "reid_no",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "flags",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "collection_no",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "identified_name",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "identified_rank",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "identified_no",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "difference",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "accepted_name",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "accepted_rank",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "accepted_no",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "early_interval",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "late_interval",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "max_ma",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "min_ma",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "reference_no",
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
									"text": "paleomodel",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "paleolng",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "paleolat",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "geoplate",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "cc",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "state",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "county",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "latlng_basis",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "latlng_precision",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "geogscale",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "geogcomments",
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
					},
					"outputFileNames": [
						"gplateinput.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "points",
							"name": "points"
						},
						{
							"attribute": "time",
							"name": "time"
						}
					],
					"newAttrs": [],
					"afterAction": {
						"action": "removeDuplicate",
						"input": ""
					}
				}
			]
		},
		{
			"id": "81a6eb19-ef45-499d-a4bd-b149e88c88df",
			"x": -367.1659500000001,
			"y": 167.564975,
			"label": "",
			"timestamp": 1516772393578,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gplateinput.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0ef8281d-dd42-d53f-616c-6232b15491e9",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
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
								"text": "time",
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
					"urlReturnFileName": "gplateinputclean.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ef3a9cd0-8c47-0ac7-fd19-8d20eb0d2f28",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "54d7cbca-0b31-b6f0-fa1e-e03b505ed67f",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "gplateinput.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"id": "0ef8281d-dd42-d53f-616c-6232b15491e9",
						"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
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
									"text": "time",
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
						"gplateinputclean.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "time",
							"name": "time"
						},
						{
							"attribute": "points",
							"name": "points"
						}
					],
					"newAttrs": [],
					"afterAction": {
						"action": "filter",
						"input": "time#error"
					}
				}
			]
		},
		{
			"id": "a4d74924-9b32-4859-a2ba-1e8562ce93e1",
			"x": -162.35163303693557,
			"y": 432.65127479480157,
			"label": "",
			"timestamp": 1516775674502,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "oldCoord.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "3b4f87ee-13de-86c6-b195-fca8ecbaf5ac",
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
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "oldCoord.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "be8da99f-b5f5-04d5-e6a0-332528354eea",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "9c677b9a-ef0a-40d7-1cd9-1c59d2acf249",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "oldCoord.xml",
						"urlReturnFileType": "XML",
						"resourceType": "XML",
						"id": "3b4f87ee-13de-86c6-b195-fca8ecbaf5ac",
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
						}
					},
					"outputFileNames": [
						"oldCoord.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [],
					"newAttrs": [
						{
							"attribute": "oldLat",
							"xpath": "/AppendResultSet/coordinates/array[1]"
						},
						{
							"attribute": "oldLng",
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
			"id": "109cc462-1522-4871-b8f8-2987ad7e2682",
			"x": -204.70015138408303,
			"y": 219.34353373702425,
			"label": "",
			"timestamp": 1516777884851,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gplateinputclean.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ef3a9cd0-8c47-0ac7-fd19-8d20eb0d2f28",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"jsUrlReturnFileSchema": {
						"text": "gplateinputclean.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "time",
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
					"urlReturnFileName": "gplates.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "1cf8e042-b210-c9e1-bcca-daed055e0355",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
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
					"id": "5fc78479-92b7-c836-8186-db7608898ea6",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"gplateinputclean.csv"
					],
					"outputFileNames": [
						"gplates.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [],
					"newAttrs": [
						{
							"attribute": "points",
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
										"value": "gplates.csv",
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
										"value": "gplateinputclean.csv",
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
										"value": "points",
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
										"value": ",#0",
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
							"resourceName": "gplateinputclean.csv"
						},
						{
							"attribute": "time",
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
										"value": "gplates.csv",
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
										"value": "gplateinputclean.csv",
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
										"value": "points",
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
										"value": ",#1",
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
							"resourceName": "gplateinputclean.csv"
						}
					]
				}
			]
		},
		{
			"id": "e331e89a-15c9-46a6-beec-b3d985f6ec7c",
			"x": -88.14553141243304,
			"y": 95.77901327683591,
			"label": "",
			"timestamp": 1516777940305,
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
				}
			],
			"resourcesIn": [],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "5162efb1-9d08-4479-a861-ed3374722e94",
			"x": -36.96467394436378,
			"y": 286.6003418061455,
			"label": "",
			"timestamp": 1516781489208,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gplates.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "1cf8e042-b210-c9e1-bcca-daed055e0355",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"jsUrlReturnFileSchema": {
						"text": "gplates.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "time",
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
				},
				{
					"urlReturnFileName": "oldCoord.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "be8da99f-b5f5-04d5-e6a0-332528354eea",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "oldCoord.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "oldLat",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "oldLng",
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
					"id": "5153f89b-4a11-d58f-1cd1-0973b4ca39fb",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "7ea6ec35-9b0c-5cee-7cdc-bd3f32fc1d0b",
					"act": "MergeTable",
					"outputFileNames": [
						"gplateinfo.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "selectandappendbyrow",
					"mergeTableSelectInput": "gplates.csv#oldCoord.csv",
					"selectAttrs": [
						{
							"attribute": "lng",
							"name": "lng",
							"resourceName": "gplates.csv"
						},
						{
							"attribute": "lat",
							"name": "lat",
							"resourceName": "gplates.csv"
						},
						{
							"attribute": "oldLat",
							"name": "oldLat",
							"resourceName": "oldCoord.csv"
						},
						{
							"attribute": "oldLng",
							"name": "oldLng",
							"resourceName": "oldCoord.csv"
						}
					]
				}
			]
		}
	],
	"edges": [
		{
			"from": "7411df33-c7b3-4404-9191-6d297d39359a",
			"to": "d273278d-d0a4-4fb7-9da6-fe4bf71de8a4",
			"id": "48d5a61f-59a5-42e9-9796-d1fb81d2f038",
			"arrows": "to",
			"label": "North American Geogocial Knowledge Base\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "North American Geogocial Knowledge Base",
					"libraryId": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
					"organization": "University of Idaho",
					"id": "30a4e0bd-9d8d-49e2-9d2c-94de24dbdea1",
					"functionName": "getGeologicalName.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "Parse Geogocial age, get North American Geogocial Term back.",
					"urlReturnFileType": "",
					"attributes": [
						{
							"label": "Age",
							"name": "-age",
							"type": "Integer",
							"value": "",
							"required": true,
							"shown": true,
							"example": "232",
							"attributeType": "input",
							"description": "A Geogocial Age",
							"from": "default"
						},
						{
							"label": "File Name",
							"name": "-fileName",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "geoTerm.csv",
							"attributeType": "input",
							"description": "Output File Name",
							"from": "default"
						}
					],
					"type": "function"
				}
			]
		},
		{
			"from": "49282dba-3366-43c1-8ad8-235e2b85e61f",
			"to": "35954ad3-4271-4641-80b7-19cc58975a4f",
			"id": "212dafe1-01d1-48a9-9586-eb83d34de183",
			"arrows": "to",
			"label": "PBDB Fossil Collection by year\n",
			"resources": [
				{
					"id": "210b4d96-a568-4a49-b34e-86a4eee308e4",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Collection by year",
					"description": "Get Styles Information by submitting minmum ma and maximum ma",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan",
					"method": "GET",
					"attributes": [
						{
							"label": "min_ma",
							"name": "min_ma",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "47.4",
							"attributeType": "input",
							"description": "Minimum Ma",
							"from": "input"
						},
						{
							"label": "max_ma",
							"name": "max_ma",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "50.6",
							"attributeType": "input",
							"description": "Minimum Ma",
							"from": "input"
						},
						{
							"label": "show",
							"name": "show",
							"type": "string",
							"value": "coords,paleoloc,loc",
							"required": true,
							"shown": false,
							"example": "paleoloc",
							"attributeType": "input",
							"description": "Show location",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "occurrence_no",
							"name": "occurrence_no",
							"type": "string"
						},
						{
							"label": "record_type",
							"name": "record_type",
							"type": "string"
						},
						{
							"label": "formation",
							"name": "formation",
							"type": "string"
						},
						{
							"label": "lng",
							"name": "lng",
							"type": "string"
						},
						{
							"label": "lat",
							"name": "lat",
							"type": "string"
						},
						{
							"label": "collection_name",
							"name": "collection_name",
							"type": "string"
						},
						{
							"label": "collection_subset",
							"name": "collection_subset",
							"type": "string"
						},
						{
							"label": "collection_aka",
							"name": "collection_aka",
							"type": "string"
						},
						{
							"label": "n_occs",
							"name": "n_occs",
							"type": "string"
						},
						{
							"label": "early_interval",
							"name": "early_interval",
							"type": "string"
						},
						{
							"label": "late_interval",
							"name": "late_interval",
							"type": "string"
						},
						{
							"label": "max_ma",
							"name": "max_ma",
							"type": "string"
						},
						{
							"label": "min_ma",
							"name": "min_ma",
							"type": "string"
						},
						{
							"label": "reference_no",
							"name": "reference_no",
							"type": "string"
						},
						{
							"label": "paleomodel",
							"name": "paleomodel",
							"type": "string"
						},
						{
							"label": "paleolng",
							"name": "paleolng",
							"type": "string"
						},
						{
							"label": "paleolat",
							"name": "paleolat",
							"type": "string"
						},
						{
							"label": "geoplate",
							"name": "geoplate",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<FossilRecord>\r\n\t\t\t\t<occurrence_no></occurrence_no>\r\n\t\t\t\t<record_type></record_type>\r\n\t\t\t\t<formation></formation>\r\n\t\t\t\t<lng></lng>\r\n\t\t\t\t<lat></lat>\r\n\t\t\t\t<collection_name></collection_name>\r\n\t\t\t\t<collection_subset></collection_subset>\r\n\t\t\t\t<collection_aka></collection_aka>\r\n\t\t\t\t<n_occs></n_occs>\r\n\t\t\t\t<early_interval></early_interval>\r\n\t\t\t\t<late_interval></late_interval>\r\n\t\t\t\t<max_ma></max_ma>\r\n\t\t\t\t<min_ma></min_ma>\r\n\t\t\t\t<reference_no></reference_no>\r\n\t\t\t\t<paleomodel></paleomodel>\r\n\t\t\t\t<paleolng></paleolng>\r\n\t\t\t\t<paleolat></paleolat>\r\n\t\t\t\t<geoplate></geoplate>\r\n\t\t\t</FossilRecord>",
					"jsUrlReturnFileSchema": {
						"text": "FossilRecord",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							},
							{
								"text": "paleomodel",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_4",
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_5",
								"children": []
							},
							{
								"text": "formation",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_6",
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_7",
								"children": []
							},
							{
								"text": "paleolng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_8",
								"children": []
							},
							{
								"text": "geoplate",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_9",
								"children": []
							},
							{
								"text": "collection_subset",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_10",
								"children": []
							},
							{
								"text": "paleolat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_11",
								"children": []
							},
							{
								"text": "n_occs",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_12",
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_13",
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_14",
								"children": []
							},
							{
								"text": "collection_aka",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_15",
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_16",
								"children": []
							},
							{
								"text": "collection_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_17",
								"children": []
							},
							{
								"text": "reference_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_18",
								"children": []
							},
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_19",
								"children": []
							}
						]
					},
					"fileName": "PBDB fossil collection by year.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Collection by year"
				}
			],
			"libraries": []
		},
		{
			"from": "d273278d-d0a4-4fb7-9da6-fe4bf71de8a4",
			"to": "35954ad3-4271-4641-80b7-19cc58975a4f",
			"id": "3e2e4ea9-c95b-4250-a935-9780d45afcad",
			"arrows": "to",
			"label": "geoTerm.csv\n",
			"resources": [
				{
					"urlReturnFileName": "geoTerm.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "312dd25d-199c-36ff-4948-e0eacd21a6e8",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "4723c917-2fe4-4699-9a92-2b71bf320b46",
			"to": "3504ace7-c9e7-40c1-82f7-3c763c6b30b0",
			"id": "638296be-d545-4617-bc2d-ca33453afb79",
			"arrows": "to",
			"label": "GPlates Paleo-geographic Coordinates\n",
			"resources": [
				{
					"id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
					"resourceType": "HTTPS",
					"organization": "GPlates",
					"resourceName": "GPlates Paleo-geographic Coordinates",
					"description": "Reconstruct the geographic locations from present day coordinates back \r\n\t\tto their paleo-positions. Each location will be assigned a plate id and moved back in time\r\n\t\tusing the chosen reconstruction model.",
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
							"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. \r\n\t\t\tThe valid input value depends on the chosen reconstruction model.",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "lat",
							"name": "lat",
							"type": "string"
						},
						{
							"label": "lng",
							"name": "lng",
							"type": "string"
						}
					],
					"methodReturnFileType": "JSON",
					"methodReturnFileSchema": "<gplates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t\t<array>lng</array>\r\n\t\t\t\t\t<array>lat</array>\r\n\t\t\t\t</coordinates>\r\n\t\t\t\t<type>type</type>\r\n\t\t\t</gplates>",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
					"jsUrlReturnFileSchema": {
						"text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j17_1",
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j17_2",
								"children": []
							}
						]
					},
					"fileName": "GPlates Paleo-geographic Coordinates.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "GPlates Paleo-geographic Coordinates",
					"wrapper": {
						"wrapperName": "jsonTOxmlWrapper",
						"attrs": [
							"lat",
							"lng"
						]
					}
				}
			],
			"libraries": []
		},
		{
			"from": "3504ace7-c9e7-40c1-82f7-3c763c6b30b0",
			"to": "5bf038f5-b526-44a6-9196-db3ef173f2a3",
			"id": "c96052ec-997a-41e2-9ceb-c258d850f688",
			"arrows": "to",
			"label": "oldCoordinats.xml\n",
			"resources": [
				{
					"urlReturnFileName": "oldCoordinats.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "af7ddd51-aef0-61d0-391b-34cd6cd9854d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "35954ad3-4271-4641-80b7-19cc58975a4f",
			"to": "5fdc2985-69e8-45f4-aa23-2d0254536935",
			"id": "b52512d4-f464-4a11-81df-953b947aa656",
			"arrows": "to",
			"label": "fossilRecords.csv\n",
			"resources": [
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "454f1cdf-bc1f-e16c-9008-ca2ff75d53b4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "5fdc2985-69e8-45f4-aa23-2d0254536935",
			"to": "d4aa8007-e494-4bcd-a71b-a60e0b03a98b",
			"id": "0e6c928c-823f-4837-a939-2067ad665132",
			"arrows": "to",
			"label": "fossilResultTable.csv\n",
			"resources": [
				{
					"urlReturnFileName": "fossilResultTable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7ec65e1c-ae18-9158-86ad-67a87d1230be",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "48f0b4fd-a85c-4e63-9170-17af79a6793d",
			"to": "a0f24df2-db96-4934-8a07-456e3987f88f",
			"id": "f0bc2c0a-53ea-4444-b82c-95933ac9246b",
			"arrows": "to",
			"label": "calcuate avarage function\nSelect and merge function\nPurdue GSSP Info\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "calcuate avarage function",
					"libraryId": "d8f4ab76-3b7d-428f-829e-9fee22f147dc",
					"organization": "University of Idaho",
					"id": "de597883-0579-418b-ba0e-d56718be490c",
					"functionName": "calaverage.py",
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
				},
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
			"from": "35954ad3-4271-4641-80b7-19cc58975a4f",
			"to": "a0f24df2-db96-4934-8a07-456e3987f88f",
			"id": "8eb43690-8b91-4897-80b9-ab87c25beec3",
			"arrows": "to",
			"label": "fossilRecords.csv\n",
			"resources": [
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "454f1cdf-bc1f-e16c-9008-ca2ff75d53b4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "a0f24df2-db96-4934-8a07-456e3987f88f",
			"to": "a1713818-81d5-496b-b9e7-011737ec4a62",
			"id": "7f311aa9-7f64-4819-8d85-5ebadcc493d9",
			"arrows": "to",
			"label": "gplatinputwhole.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gplatinputwhole.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "3cd59c36-b17e-9a05-c411-c63fc09a2e53",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "a1713818-81d5-496b-b9e7-011737ec4a62",
			"to": "81a6eb19-ef45-499d-a4bd-b149e88c88df",
			"id": "3d36a045-0b2c-428d-8671-1fe3f4886351",
			"arrows": "to",
			"label": "gplateinput.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gplateinput.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0ef8281d-dd42-d53f-616c-6232b15491e9",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "81a6eb19-ef45-499d-a4bd-b149e88c88df",
			"to": "3504ace7-c9e7-40c1-82f7-3c763c6b30b0",
			"id": "b83c826c-1f3a-40de-b472-65254b20180c",
			"arrows": "to",
			"label": "gplateinputclean.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gplateinputclean.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ef3a9cd0-8c47-0ac7-fd19-8d20eb0d2f28",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "5bf038f5-b526-44a6-9196-db3ef173f2a3",
			"to": "a4d74924-9b32-4859-a2ba-1e8562ce93e1",
			"id": "77db679e-5707-41b7-8a71-ba7784bf030f",
			"arrows": "to",
			"label": "oldCoord.xml\n",
			"resources": [
				{
					"urlReturnFileName": "oldCoord.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "3b4f87ee-13de-86c6-b195-fca8ecbaf5ac",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "81a6eb19-ef45-499d-a4bd-b149e88c88df",
			"to": "109cc462-1522-4871-b8f8-2987ad7e2682",
			"id": "e76be3b0-d4ae-442a-90f6-655a1a61a4f5",
			"arrows": "to",
			"label": "gplateinputclean.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gplateinputclean.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ef3a9cd0-8c47-0ac7-fd19-8d20eb0d2f28",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "e331e89a-15c9-46a6-beec-b3d985f6ec7c",
			"to": "109cc462-1522-4871-b8f8-2987ad7e2682",
			"id": "c107ba2a-20a6-4b10-adba-eae37781057f",
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
			"from": "109cc462-1522-4871-b8f8-2987ad7e2682",
			"to": "5162efb1-9d08-4479-a861-ed3374722e94",
			"id": "0d63564b-6a47-40cc-b42b-c2023195f836",
			"arrows": "to",
			"label": "gplates.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gplates.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "1cf8e042-b210-c9e1-bcca-daed055e0355",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "a4d74924-9b32-4859-a2ba-1e8562ce93e1",
			"to": "5162efb1-9d08-4479-a861-ed3374722e94",
			"id": "62fe5988-ff1c-4351-bf54-4a74c335a76d",
			"arrows": "to",
			"label": "oldCoord.csv\n",
			"resources": [
				{
					"urlReturnFileName": "oldCoord.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "be8da99f-b5f5-04d5-e6a0-332528354eea",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "5162efb1-9d08-4479-a861-ed3374722e94",
			"to": "5fdc2985-69e8-45f4-aa23-2d0254536935",
			"id": "cef3b875-2adb-4bd3-a0d7-ebb6f482fe2b",
			"arrows": "to",
			"label": "gplateinfo.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gplateinfo.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "5153f89b-4a11-d58f-1cd1-0973b4ca39fb",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		}
	]
}