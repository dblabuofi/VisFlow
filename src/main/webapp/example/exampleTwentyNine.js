var exampleTwentyNine = {
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
								"value": "357",
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
			"x": 177.3125,
			"y": -182.03125,
			"label": "PBDB Fossil Collection\n",
			"timestamp": 1486324903919,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "f9b5133c-ec2f-4b25-b412-1234b753a1f5",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Collection",
					"description": "Get Styles Information",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan",
					"method": "GET",
					"attributes": [
						{
							"label": "interval",
							"name": "interval",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Kinderhookian",
							"attributeType": "input",
							"description": "Geo Term",
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
									"style": ""
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
									"style": "background-color: rgb(205, 165, 10) !important"
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
					"fileName": "PBDB fossil collection.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Collection"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "f9b5133c-ec2f-4b25-b412-1234b753a1f5",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Collection",
					"description": "Get Styles Information",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan",
					"method": "GET",
					"attributes": [
						{
							"label": "interval",
							"name": "interval",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Kinderhookian",
							"attributeType": "input",
							"description": "Geo Term",
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
									"style": ""
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
									"style": "background-color: rgb(205, 165, 10) !important"
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
					"fileName": "PBDB fossil collection.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Collection"
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
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				},
				{
					"id": "f9b5133c-ec2f-4b25-b412-1234b753a1f5",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Collection",
					"description": "Get Styles Information",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan",
					"method": "GET",
					"attributes": [
						{
							"label": "interval",
							"name": "interval",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Kinderhookian",
							"attributeType": "input",
							"description": "Geo Term",
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
									"style": ""
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
									"style": "background-color: rgb(205, 165, 10) !important"
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
					"fileName": "PBDB fossil collection.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Collection"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "af78b247-5485-15fd-e187-15ef2d249b5c",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "f9b5133c-ec2f-4b25-b412-1234b753a1f5",
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
						"id": "f9b5133c-ec2f-4b25-b412-1234b753a1f5",
						"resourceType": "HTTP",
						"organization": "PBDB",
						"resourceName": "PBDB Fossil Collection",
						"description": "Get Styles Information",
						"url": "https://paleobiodb.org/data1.2/occs/list.txt",
						"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan",
						"method": "GET",
						"attributes": [
							{
								"label": "interval",
								"name": "interval",
								"type": "string",
								"value": "name",
								"required": true,
								"shown": true,
								"example": "Kinderhookian",
								"attributeType": "input",
								"description": "Geo Term",
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
										"style": ""
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
										"style": "background-color: rgb(205, 165, 10) !important"
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
						"fileName": "PBDB fossil collection.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "PBDB Fossil Collection"
					}
				}
			]
		},
		{
			"id": "8fc2528c-1475-4dad-af4d-8a9f1a0fbb59",
			"x": -202.21256409703557,
			"y": 164.6123105833708,
			"label": "",
			"timestamp": 1486340620210,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "af78b247-5485-15fd-e187-15ef2d249b5c",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gplatIntputs.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "95aa3f21-25b3-caa6-9344-1c24cdada597",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "a7f878f1-9c27-15ed-4adc-4d24bf3189d8",
					"act": "Code",
					"val": "import csv;\nfrom collections import defaultdict;\n\ndef f7(seq):\n    seen = set()\n    seen_add = seen.add\n    return [x for x in seq if not (x in seen or seen_add(x))]\n\n\ncolumns = defaultdict(list) \n\nwith open('fossilRecords.csv') as f:\n    reader = csv.DictReader(f) # read rows into a dictionary format\n    for row in reader: # read a row as {column1: value1, column2: value2,...}\n        for (k,v) in row.items(): # go over each column name and value \n            columns[k].append(v) \n\nf.close();\n\t\t\t\n# outputFile = open(\"locations.csv\", \"w\");\nlocationTuples = list();\n\nlngs = columns['lng'];\nlats = columns['lat'];\nbases = columns['max_ma'];\ntops = columns['min_ma'];\n\nindex = 0;\nfor lng in lngs:\n\tlocationTuples.append((bases[index], tops[index], lngs[index], lats[index]));\n\tindex = index + 1;\n\nlocationTuples = f7(locationTuples);\n\nprint locationTuples;\n\ntarget = open('gplatIntputs.xml', 'w');\ntarget.write(\"<gplatInputs>\\n\");\n\nfor tuple in locationTuples:\n\tage = (float(tuple[0]) + float(tuple[1])) / 2.0;\n\ttarget.write(\"<row>\");\n\ttarget.write(\"<coordinates>\");\n\ttarget.write(tuple[2] + \",\" + tuple[3]);\n\ttarget.write(\"</coordinates>\");\n\ttarget.write(\"<age>\");\n\ttarget.write(str(age));\n\ttarget.write(\"</age>\");\n\ttarget.write(\"</row>\\n\");\n\ntarget.write(\"</gplatInputs>\\n\");\ntarget.close();\n\n\n",
					"codeType": "python",
					"codeName": "generateGPlateInputs.py",
					"inputFileNames": [
						"fossilRecords.csv"
					],
					"outputFileNames": [
						"gplatIntputs.xml"
					],
					"outputFileTypes": [
						"XML"
					]
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
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
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
					"jsUrlReturnFileSchema": {
						"text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
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
			"font": {
				"align": "left"
			}
		},
		{
			"id": "735eb32d-51d7-490c-a652-a07440f94f63",
			"x": -375.11363142784586,
			"y": 319.9674685406716,
			"label": "",
			"timestamp": 1486372331023,
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
					"jsUrlReturnFileSchema": {
						"text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
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
			"resourcesOut": [
				{
					"urlReturnFileName": "oldCoordinats.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "bcc3816c-f592-10af-f24e-56d0e6b6943d",
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
								"value": "coordinates",
								"required": true,
								"shown": true,
								"example": "95,54",
								"attributeType": "input",
								"description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
								"from": "gplatIntputs.xml"
							},
							{
								"label": "time",
								"name": "time",
								"value": "age",
								"required": true,
								"shown": true,
								"example": "140",
								"attributeType": "input",
								"description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
								"from": "gplatIntputs.xml"
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
							"selected": false,
							"id": "j7_1",
							"children": [
								{
									"text": "coordinates",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_2",
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
				}
			]
		},
		{
			"id": "da3bf498-0b12-4d5a-9322-374b758914ed",
			"x": 112.25237163494134,
			"y": 327.24158798936986,
			"label": "",
			"timestamp": 1486378315967,
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
					"id": "bcc3816c-f592-10af-f24e-56d0e6b6943d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "af78b247-5485-15fd-e187-15ef2d249b5c",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "fossilResultTable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "69cadc90-1b94-8584-6f5d-a75072470697",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "167c9dad-ed88-a3b7-193d-e68c7aa35643",
					"act": "Code",
					"val": "import csv;\nimport xml.etree.ElementTree\nimport codecs\nfrom collections import defaultdict;\n\n\ndef f7(seq):\n    seen = set()\n    seen_add = seen.add\n    return [x for x in seq if not (x in seen or seen_add(x))]\n\nfossilRecrods = defaultdict(list) \nwith open('fossilRecords.csv') as f:\n    reader = csv.DictReader(f) # read rows into a dictionary format\n    for row in reader: # read a row as {column1: value1, column2: value2,...}\n        for (k,v) in row.items(): # go over each column name and value \n            fossilRecrods[k].append(v) \nf.close();\n\nlocationTuples = list();\n\nlngs = fossilRecrods['lng'];\nlats = fossilRecrods['lat'];\n\nindex = 0;\nfor lng in lngs:\n\tlocationTuples.append((lngs[index], lats[index]));\n\tindex = index + 1;\n\t\nlocationTuples = f7(locationTuples);\nprint len(locationTuples);\n\t\ne = xml.etree.ElementTree.parse('oldCoordinats.xml').getroot();\nlongList = list();\nlatList = list();\nfor feature in e.findall('coordinates'):\n\tlong = feature.find('array[1]').text;\n\tlat = feature.find('array[2]').text;\n\tlongList.append(long);\n\tlatList.append(lat);\n\t\n#generate one to one mapping\nlocationCoord = dict();\n\n# print len(countries_loc)\n# print len(longList_co)\n# print len(longList)\n\nindex = 0;\nfor l in longList:\n\tlocationCoord[(locationTuples[index][0], locationTuples[index][1])] = (longList[index], latList[index]);\n\tindex = index + 1;\n\t\n# while index < len(countries_loc):\n\t# locationCoord[(countries_loc[index], states_loc[index], county_loc[index])] = (age, \"\", \"\", \"\", \"\");\n\t# index = index + 1;\n\t\nprint locationCoord;\n\n\ntarget = open('fossilResultTable.csv', 'w');\t\n\nfossils = open('fossilRecords.csv', 'r');\nattrs = next(fossils);\ntarget.write(attrs.strip() + \",oldlat,oldlng\\n\");\n\nindex = 0;\nfor line in fossils:\n\tappendLine = locationCoord[(lngs[index], lats[index])]; \n\ttarget.write(line.replace('\"','').strip() + \",\" + appendLine[0] + \",\" + appendLine[1] + \"\\n\");\n\tindex = index + 1;\n\t\nfossils.close();\ntarget.close();",
					"codeType": "python",
					"codeName": "combineTogether.py",
					"inputFileNames": [
						"fossilRecords.csv",
						"oldCoordinats.xml"
					],
					"outputFileNames": [
						"fossilResultTable.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
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
					"id": "69cadc90-1b94-8584-6f5d-a75072470697",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "1da13324-ca49-6411-467f-35e01ac2985f",
					"act": "print",
					"outputFileNames": [
						"fossilResultTable.csv"
					],
					"printType": "table",
					"resourceid": "394ce331-2ce7-7794-a4d9-2b857765720d"
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
			"label": "PBDB Fossil Collection\n",
			"resources": [
				{
					"id": "f9b5133c-ec2f-4b25-b412-1234b753a1f5",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Collection",
					"description": "Get Styles Information",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan",
					"method": "GET",
					"attributes": [
						{
							"label": "interval",
							"name": "interval",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Kinderhookian",
							"attributeType": "input",
							"description": "Geo Term",
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
									"style": ""
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
									"style": "background-color: rgb(205, 165, 10) !important"
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
					"fileName": "PBDB fossil collection.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Collection"
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
			"from": "35954ad3-4271-4641-80b7-19cc58975a4f",
			"to": "8fc2528c-1475-4dad-af4d-8a9f1a0fbb59",
			"id": "7dc35492-396c-4b3f-8e52-ac63f05cce44",
			"arrows": "to",
			"label": "fossilRecords.csv\n",
			"resources": [
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "af78b247-5485-15fd-e187-15ef2d249b5c",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "4723c917-2fe4-4699-9a92-2b71bf320b46",
			"to": "735eb32d-51d7-490c-a652-a07440f94f63",
			"id": "61221f70-2cc7-461d-802a-f2c5cf148baa",
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
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "coordinates",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
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
			"from": "735eb32d-51d7-490c-a652-a07440f94f63",
			"to": "da3bf498-0b12-4d5a-9322-374b758914ed",
			"id": "4c4bd6c7-5420-4deb-8fe4-1f1791fd8625",
			"arrows": "to",
			"label": "oldCoordinats.xml\n",
			"resources": [
				{
					"urlReturnFileName": "oldCoordinats.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "bcc3816c-f592-10af-f24e-56d0e6b6943d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "35954ad3-4271-4641-80b7-19cc58975a4f",
			"to": "da3bf498-0b12-4d5a-9322-374b758914ed",
			"id": "b136ca88-584a-4ba2-bd90-56ccc1288c40",
			"arrows": "to",
			"label": "fossilRecords.csv\n",
			"resources": [
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "af78b247-5485-15fd-e187-15ef2d249b5c",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "da3bf498-0b12-4d5a-9322-374b758914ed",
			"to": "d4aa8007-e494-4bcd-a71b-a60e0b03a98b",
			"id": "f4f708a1-f95d-4ec3-b2aa-1b96d4ba7d1f",
			"arrows": "to",
			"label": "fossilResultTable.csv\n",
			"resources": [
				{
					"urlReturnFileName": "fossilResultTable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "69cadc90-1b94-8584-6f5d-a75072470697",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "8fc2528c-1475-4dad-af4d-8a9f1a0fbb59",
			"to": "735eb32d-51d7-490c-a652-a07440f94f63",
			"id": "32dc167d-f0a4-4d45-94cd-7e8e5e682b6e",
			"arrows": "to",
			"label": "",
			"resources": [],
			"libraries": []
		}
	]
}