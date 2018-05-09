var exampleTwentyEight = {
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
			"label": "PBDB Fossil Record\n",
			"timestamp": 1486324903919,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "7b72525d-add8-4d54-9545-42e19a84d3f5",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Record",
					"description": "Get Styles Information",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan&show=loc",
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
							"value": "loc",
							"required": true,
							"shown": false,
							"example": "loc",
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
							"label": "reid_no",
							"name": "reid_no",
							"type": "string"
						},
						{
							"label": "flags",
							"name": "flags",
							"type": "string"
						},
						{
							"label": "collection_no",
							"name": "collection_no",
							"type": "string"
						},
						{
							"label": "identified_name",
							"name": "identified_name",
							"type": "string"
						},
						{
							"label": "identified_rank",
							"name": "identified_rank",
							"type": "string"
						},
						{
							"label": "identified_no",
							"name": "identified_no",
							"type": "string"
						},
						{
							"label": "difference",
							"name": "difference",
							"type": "string"
						},
						{
							"label": "accepted_name",
							"name": "accepted_name",
							"type": "string"
						},
						{
							"label": "accepted_rank",
							"name": "accepted_rank",
							"type": "string"
						},
						{
							"label": "accepted_no",
							"name": "accepted_no",
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
							"label": "cc",
							"name": "cc",
							"type": "string"
						},
						{
							"label": "state",
							"name": "state",
							"type": "string"
						},
						{
							"label": "county",
							"name": "county",
							"type": "string"
						},
						{
							"label": "latlng_basis",
							"name": "latlng_basis",
							"type": "string"
						},
						{
							"label": "latlng_precision",
							"name": "latlng_precision",
							"type": "string"
						},
						{
							"label": "geogscale",
							"name": "geogscale",
							"type": "string"
						},
						{
							"label": "geogcomments",
							"name": "geogcomments",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<FossilRecord>\r\n\t\t\t\t<occurrence_no></occurrence_no>\r\n\t\t\t\t<record_type></record_type>\r\n\t\t\t\t<reid_no></reid_no>\r\n\t\t\t\t<flags></flags>\r\n\t\t\t\t<collection_no></collection_no>\r\n\t\t\t\t<identified_name></identified_name>\r\n\t\t\t\t<identified_rank></identified_rank>\r\n\t\t\t\t<identified_no></identified_no>\r\n\t\t\t\t<difference></difference>\r\n\t\t\t\t<accepted_name></accepted_name>\r\n\t\t\t\t<accepted_rank></accepted_rank>\r\n\t\t\t\t<accepted_no></accepted_no>\r\n\t\t\t\t<early_interval></early_interval>\r\n\t\t\t\t<late_interval></late_interval>\r\n\t\t\t\t<max_ma></max_ma>\r\n\t\t\t\t<min_ma></min_ma>\r\n\t\t\t\t<reference_no></reference_no>\r\n\t\t\t\t<cc></cc>\r\n\t\t\t\t<state></state>\r\n\t\t\t\t<county></county>\r\n\t\t\t\t<latlng_basis></latlng_basis>\r\n\t\t\t\t<latlng_precision></latlng_precision>\r\n\t\t\t\t<geogscale></geogscale>\r\n\t\t\t\t<geogcomments></geogcomments>\r\n\t\t\t</FossilRecord>",
					"jsUrlReturnFileSchema": {
						"text": "FossilRecord",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "cc",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
								"children": []
							},
							{
								"text": "identified_rank",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_4",
								"children": []
							},
							{
								"text": "accepted_rank",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_5",
								"children": []
							},
							{
								"text": "latlng_precision",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_6",
								"children": []
							},
							{
								"text": "reid_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_7",
								"children": []
							},
							{
								"text": "geogcomments",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_8",
								"children": []
							},
							{
								"text": "accepted_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_9",
								"children": []
							},
							{
								"text": "flags",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_10",
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_11",
								"children": []
							},
							{
								"text": "county",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_12",
								"children": []
							},
							{
								"text": "identified_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_13",
								"children": []
							},
							{
								"text": "geogscale",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_14",
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_15",
								"children": []
							},
							{
								"text": "collection_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_16",
								"children": []
							},
							{
								"text": "latlng_basis",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_17",
								"children": []
							},
							{
								"text": "difference",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_18",
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_19",
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_20",
								"children": []
							},
							{
								"text": "state",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_21",
								"children": []
							},
							{
								"text": "reference_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_22",
								"children": []
							},
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_23",
								"children": []
							},
							{
								"text": "identified_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_24",
								"children": []
							},
							{
								"text": "accepted_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_25",
								"children": []
							}
						]
					},
					"fileName": "PBDB fossil record.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Record"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "7b72525d-add8-4d54-9545-42e19a84d3f5",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Record",
					"description": "Get Styles Information",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan&show=loc",
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
							"value": "loc",
							"required": true,
							"shown": false,
							"example": "loc",
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
							"label": "reid_no",
							"name": "reid_no",
							"type": "string"
						},
						{
							"label": "flags",
							"name": "flags",
							"type": "string"
						},
						{
							"label": "collection_no",
							"name": "collection_no",
							"type": "string"
						},
						{
							"label": "identified_name",
							"name": "identified_name",
							"type": "string"
						},
						{
							"label": "identified_rank",
							"name": "identified_rank",
							"type": "string"
						},
						{
							"label": "identified_no",
							"name": "identified_no",
							"type": "string"
						},
						{
							"label": "difference",
							"name": "difference",
							"type": "string"
						},
						{
							"label": "accepted_name",
							"name": "accepted_name",
							"type": "string"
						},
						{
							"label": "accepted_rank",
							"name": "accepted_rank",
							"type": "string"
						},
						{
							"label": "accepted_no",
							"name": "accepted_no",
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
							"label": "cc",
							"name": "cc",
							"type": "string"
						},
						{
							"label": "state",
							"name": "state",
							"type": "string"
						},
						{
							"label": "county",
							"name": "county",
							"type": "string"
						},
						{
							"label": "latlng_basis",
							"name": "latlng_basis",
							"type": "string"
						},
						{
							"label": "latlng_precision",
							"name": "latlng_precision",
							"type": "string"
						},
						{
							"label": "geogscale",
							"name": "geogscale",
							"type": "string"
						},
						{
							"label": "geogcomments",
							"name": "geogcomments",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<FossilRecord>\r\n\t\t\t\t<occurrence_no></occurrence_no>\r\n\t\t\t\t<record_type></record_type>\r\n\t\t\t\t<reid_no></reid_no>\r\n\t\t\t\t<flags></flags>\r\n\t\t\t\t<collection_no></collection_no>\r\n\t\t\t\t<identified_name></identified_name>\r\n\t\t\t\t<identified_rank></identified_rank>\r\n\t\t\t\t<identified_no></identified_no>\r\n\t\t\t\t<difference></difference>\r\n\t\t\t\t<accepted_name></accepted_name>\r\n\t\t\t\t<accepted_rank></accepted_rank>\r\n\t\t\t\t<accepted_no></accepted_no>\r\n\t\t\t\t<early_interval></early_interval>\r\n\t\t\t\t<late_interval></late_interval>\r\n\t\t\t\t<max_ma></max_ma>\r\n\t\t\t\t<min_ma></min_ma>\r\n\t\t\t\t<reference_no></reference_no>\r\n\t\t\t\t<cc></cc>\r\n\t\t\t\t<state></state>\r\n\t\t\t\t<county></county>\r\n\t\t\t\t<latlng_basis></latlng_basis>\r\n\t\t\t\t<latlng_precision></latlng_precision>\r\n\t\t\t\t<geogscale></geogscale>\r\n\t\t\t\t<geogcomments></geogcomments>\r\n\t\t\t</FossilRecord>",
					"jsUrlReturnFileSchema": {
						"text": "FossilRecord",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "cc",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
								"children": []
							},
							{
								"text": "identified_rank",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_4",
								"children": []
							},
							{
								"text": "accepted_rank",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_5",
								"children": []
							},
							{
								"text": "latlng_precision",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_6",
								"children": []
							},
							{
								"text": "reid_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_7",
								"children": []
							},
							{
								"text": "geogcomments",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_8",
								"children": []
							},
							{
								"text": "accepted_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_9",
								"children": []
							},
							{
								"text": "flags",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_10",
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_11",
								"children": []
							},
							{
								"text": "county",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_12",
								"children": []
							},
							{
								"text": "identified_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_13",
								"children": []
							},
							{
								"text": "geogscale",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_14",
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_15",
								"children": []
							},
							{
								"text": "collection_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_16",
								"children": []
							},
							{
								"text": "latlng_basis",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_17",
								"children": []
							},
							{
								"text": "difference",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_18",
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_19",
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_20",
								"children": []
							},
							{
								"text": "state",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_21",
								"children": []
							},
							{
								"text": "reference_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_22",
								"children": []
							},
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_23",
								"children": []
							},
							{
								"text": "identified_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_24",
								"children": []
							},
							{
								"text": "accepted_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_25",
								"children": []
							}
						]
					},
					"fileName": "PBDB fossil record.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Record"
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
					"id": "7b72525d-add8-4d54-9545-42e19a84d3f5",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Record",
					"description": "Get Styles Information",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan&show=loc",
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
							"value": "loc",
							"required": true,
							"shown": false,
							"example": "loc",
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
							"label": "reid_no",
							"name": "reid_no",
							"type": "string"
						},
						{
							"label": "flags",
							"name": "flags",
							"type": "string"
						},
						{
							"label": "collection_no",
							"name": "collection_no",
							"type": "string"
						},
						{
							"label": "identified_name",
							"name": "identified_name",
							"type": "string"
						},
						{
							"label": "identified_rank",
							"name": "identified_rank",
							"type": "string"
						},
						{
							"label": "identified_no",
							"name": "identified_no",
							"type": "string"
						},
						{
							"label": "difference",
							"name": "difference",
							"type": "string"
						},
						{
							"label": "accepted_name",
							"name": "accepted_name",
							"type": "string"
						},
						{
							"label": "accepted_rank",
							"name": "accepted_rank",
							"type": "string"
						},
						{
							"label": "accepted_no",
							"name": "accepted_no",
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
							"label": "cc",
							"name": "cc",
							"type": "string"
						},
						{
							"label": "state",
							"name": "state",
							"type": "string"
						},
						{
							"label": "county",
							"name": "county",
							"type": "string"
						},
						{
							"label": "latlng_basis",
							"name": "latlng_basis",
							"type": "string"
						},
						{
							"label": "latlng_precision",
							"name": "latlng_precision",
							"type": "string"
						},
						{
							"label": "geogscale",
							"name": "geogscale",
							"type": "string"
						},
						{
							"label": "geogcomments",
							"name": "geogcomments",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<FossilRecord>\r\n\t\t\t\t<occurrence_no></occurrence_no>\r\n\t\t\t\t<record_type></record_type>\r\n\t\t\t\t<reid_no></reid_no>\r\n\t\t\t\t<flags></flags>\r\n\t\t\t\t<collection_no></collection_no>\r\n\t\t\t\t<identified_name></identified_name>\r\n\t\t\t\t<identified_rank></identified_rank>\r\n\t\t\t\t<identified_no></identified_no>\r\n\t\t\t\t<difference></difference>\r\n\t\t\t\t<accepted_name></accepted_name>\r\n\t\t\t\t<accepted_rank></accepted_rank>\r\n\t\t\t\t<accepted_no></accepted_no>\r\n\t\t\t\t<early_interval></early_interval>\r\n\t\t\t\t<late_interval></late_interval>\r\n\t\t\t\t<max_ma></max_ma>\r\n\t\t\t\t<min_ma></min_ma>\r\n\t\t\t\t<reference_no></reference_no>\r\n\t\t\t\t<cc></cc>\r\n\t\t\t\t<state></state>\r\n\t\t\t\t<county></county>\r\n\t\t\t\t<latlng_basis></latlng_basis>\r\n\t\t\t\t<latlng_precision></latlng_precision>\r\n\t\t\t\t<geogscale></geogscale>\r\n\t\t\t\t<geogcomments></geogcomments>\r\n\t\t\t</FossilRecord>",
					"jsUrlReturnFileSchema": {
						"text": "FossilRecord",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "cc",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
								"children": []
							},
							{
								"text": "identified_rank",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_4",
								"children": []
							},
							{
								"text": "accepted_rank",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_5",
								"children": []
							},
							{
								"text": "latlng_precision",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_6",
								"children": []
							},
							{
								"text": "reid_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_7",
								"children": []
							},
							{
								"text": "geogcomments",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_8",
								"children": []
							},
							{
								"text": "accepted_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_9",
								"children": []
							},
							{
								"text": "flags",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_10",
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_11",
								"children": []
							},
							{
								"text": "county",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_12",
								"children": []
							},
							{
								"text": "identified_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_13",
								"children": []
							},
							{
								"text": "geogscale",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_14",
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_15",
								"children": []
							},
							{
								"text": "collection_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_16",
								"children": []
							},
							{
								"text": "latlng_basis",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_17",
								"children": []
							},
							{
								"text": "difference",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_18",
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_19",
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_20",
								"children": []
							},
							{
								"text": "state",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_21",
								"children": []
							},
							{
								"text": "reference_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_22",
								"children": []
							},
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_23",
								"children": []
							},
							{
								"text": "identified_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_24",
								"children": []
							},
							{
								"text": "accepted_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_25",
								"children": []
							}
						]
					},
					"fileName": "PBDB fossil record.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Record"
				},
				{
					"urlReturnFileName": "geoTerm.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "312dd25d-199c-36ff-4948-e0eacd21a6e8",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ced50239-0c93-32ab-acdd-9547862495fc",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "7b72525d-add8-4d54-9545-42e19a84d3f5",
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
						"id": "7b72525d-add8-4d54-9545-42e19a84d3f5",
						"resourceType": "HTTP",
						"organization": "PBDB",
						"resourceName": "PBDB Fossil Record",
						"description": "Get Styles Information",
						"url": "https://paleobiodb.org/data1.2/occs/list.txt",
						"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan&show=loc",
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
								"value": "loc",
								"required": true,
								"shown": false,
								"example": "loc",
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
								"label": "reid_no",
								"name": "reid_no",
								"type": "string"
							},
							{
								"label": "flags",
								"name": "flags",
								"type": "string"
							},
							{
								"label": "collection_no",
								"name": "collection_no",
								"type": "string"
							},
							{
								"label": "identified_name",
								"name": "identified_name",
								"type": "string"
							},
							{
								"label": "identified_rank",
								"name": "identified_rank",
								"type": "string"
							},
							{
								"label": "identified_no",
								"name": "identified_no",
								"type": "string"
							},
							{
								"label": "difference",
								"name": "difference",
								"type": "string"
							},
							{
								"label": "accepted_name",
								"name": "accepted_name",
								"type": "string"
							},
							{
								"label": "accepted_rank",
								"name": "accepted_rank",
								"type": "string"
							},
							{
								"label": "accepted_no",
								"name": "accepted_no",
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
								"label": "cc",
								"name": "cc",
								"type": "string"
							},
							{
								"label": "state",
								"name": "state",
								"type": "string"
							},
							{
								"label": "county",
								"name": "county",
								"type": "string"
							},
							{
								"label": "latlng_basis",
								"name": "latlng_basis",
								"type": "string"
							},
							{
								"label": "latlng_precision",
								"name": "latlng_precision",
								"type": "string"
							},
							{
								"label": "geogscale",
								"name": "geogscale",
								"type": "string"
							},
							{
								"label": "geogcomments",
								"name": "geogcomments",
								"type": "string"
							}
						],
						"methodReturnFileType": "CSV",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<FossilRecord>\r\n\t\t\t\t<occurrence_no></occurrence_no>\r\n\t\t\t\t<record_type></record_type>\r\n\t\t\t\t<reid_no></reid_no>\r\n\t\t\t\t<flags></flags>\r\n\t\t\t\t<collection_no></collection_no>\r\n\t\t\t\t<identified_name></identified_name>\r\n\t\t\t\t<identified_rank></identified_rank>\r\n\t\t\t\t<identified_no></identified_no>\r\n\t\t\t\t<difference></difference>\r\n\t\t\t\t<accepted_name></accepted_name>\r\n\t\t\t\t<accepted_rank></accepted_rank>\r\n\t\t\t\t<accepted_no></accepted_no>\r\n\t\t\t\t<early_interval></early_interval>\r\n\t\t\t\t<late_interval></late_interval>\r\n\t\t\t\t<max_ma></max_ma>\r\n\t\t\t\t<min_ma></min_ma>\r\n\t\t\t\t<reference_no></reference_no>\r\n\t\t\t\t<cc></cc>\r\n\t\t\t\t<state></state>\r\n\t\t\t\t<county></county>\r\n\t\t\t\t<latlng_basis></latlng_basis>\r\n\t\t\t\t<latlng_precision></latlng_precision>\r\n\t\t\t\t<geogscale></geogscale>\r\n\t\t\t\t<geogcomments></geogcomments>\r\n\t\t\t</FossilRecord>",
						"jsUrlReturnFileSchema": {
							"text": "FossilRecord",
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"selected": false,
							"id": "j5_1",
							"children": [
								{
									"text": "max_ma",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_2",
									"children": []
								},
								{
									"text": "cc",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_3",
									"children": []
								},
								{
									"text": "identified_rank",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_4",
									"children": []
								},
								{
									"text": "accepted_rank",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_5",
									"children": []
								},
								{
									"text": "latlng_precision",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_6",
									"children": []
								},
								{
									"text": "reid_no",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_7",
									"children": []
								},
								{
									"text": "geogcomments",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_8",
									"children": []
								},
								{
									"text": "accepted_name",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_9",
									"children": []
								},
								{
									"text": "flags",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_10",
									"children": []
								},
								{
									"text": "late_interval",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_11",
									"children": []
								},
								{
									"text": "county",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_12",
									"children": []
								},
								{
									"text": "identified_no",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_13",
									"children": []
								},
								{
									"text": "geogscale",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_14",
									"children": []
								},
								{
									"text": "record_type",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_15",
									"children": []
								},
								{
									"text": "collection_no",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_16",
									"children": []
								},
								{
									"text": "latlng_basis",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_17",
									"children": []
								},
								{
									"text": "difference",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_18",
									"children": []
								},
								{
									"text": "early_interval",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_19",
									"children": []
								},
								{
									"text": "min_ma",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_20",
									"children": []
								},
								{
									"text": "state",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_21",
									"children": []
								},
								{
									"text": "reference_no",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_22",
									"children": []
								},
								{
									"text": "occurrence_no",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_23",
									"children": []
								},
								{
									"text": "identified_name",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_24",
									"children": []
								},
								{
									"text": "accepted_no",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_25",
									"children": []
								}
							]
						},
						"fileName": "PBDB fossil record.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "PBDB Fossil Record"
					}
				}
			]
		},
		{
			"id": "8fc2528c-1475-4dad-af4d-8a9f1a0fbb59",
			"x": -176.32782173397948,
			"y": 72.05567212561913,
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
					"id": "ced50239-0c93-32ab-acdd-9547862495fc",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "locations.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "219fdebb-231a-7700-281c-125b38469c0d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "b44522d5-8b3c-fa9c-7836-066cdad2c290",
					"act": "Code",
					"val": "import csv;\nfrom collections import defaultdict;\n\ncolumns = defaultdict(list) \n\nwith open('fossilRecords.csv') as f:\n    reader = csv.DictReader(f) # read rows into a dictionary format\n    for row in reader: # read a row as {column1: value1, column2: value2,...}\n        for (k,v) in row.items(): # go over each column name and value \n            columns[k].append(v) \n\nf.close();\n\t\t\t\noutputFile = open(\"locations.csv\", \"w\");\nlocationTuples = set();\n\ncountries = columns['cc'];\nstates = columns['state'];\ncounties = columns['county'];\nbases = columns['max_ma'];\ntops = columns['min_ma'];\n\nindex = 0;\nfor county in countries:\n\tlocationTuples.add((bases[index], tops[index], countries[index].replace('\\\"',''), states[index].replace('\\\"',''),counties[index].replace('\\\"','')));\n\tindex = index + 1;\n\nprint locationTuples;\n\noutputFile.write(\"country,state,county,age\\n\");\n\nfor tuple in locationTuples:\n\tage = (float(tuple[0]) + float(tuple[1])) / 2.0;\n\toutputFile.writelines(tuple[2] + \",\" + tuple[3] + \",\" + tuple[4]+ \",\" + str(age) + \"\\n\");\n\noutputFile.close();\n",
					"codeType": "python",
					"codeName": "getLocation.py",
					"inputFileNames": [
						"fossilRecords.csv"
					],
					"outputFileNames": [
						"locations.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
		},
		{
			"id": "4f550b8f-e953-40e6-80d8-ac82aa17a39a",
			"x": -393.0357142857143,
			"y": 68.30269607843137,
			"label": "",
			"timestamp": 1486356384431,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "locations.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "219fdebb-231a-7700-281c-125b38469c0d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "geoCode.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "5f82d50c-6d10-1976-3c4c-21ccea83caa8",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "ba4ddd76-ba4e-228f-1724-9ef2bb839ed0",
					"act": "Code",
					"val": "import csv;\nfrom collections import defaultdict;\n\ncolumns = defaultdict(list) \n\nwith open('locations.csv') as f:\n    reader = csv.DictReader(f) \n    for row in reader: \n        for (k,v) in row.items():  \n            columns[k].append(v) \nf.close();\n\noutputFile = open(\"geoCode.csv\", \"w\");\n\noutputFile.write(\"address\\n\");\n\ncountries = columns['country'];\nstates = columns['state'];\ncounties = columns['county'];\n\nindex = 0;\nfor country in countries:\n\toutputFile.write('\"' + counties[index] + ',+' + states[index] + ',+' + countries[index] + '\"\\n');\n\tindex = index + 1;\noutputFile.close();",
					"codeType": "python",
					"codeName": "perGoogleGeo.py",
					"inputFileNames": [
						"locations.csv"
					],
					"outputFileNames": [
						"geoCode.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
		},
		{
			"id": "af3c3b59-e308-4c18-b243-85d266503192",
			"x": -499.0273182596824,
			"y": -77.11773739491328,
			"label": "Google Geocoding\n",
			"timestamp": 1486360345554,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "b661ff11-f7af-42b8-ae44-c12d85d50207",
					"resourceType": "HTTPS",
					"organization": "Google",
					"resourceName": "Google Geocoding",
					"description": "Google Geocoding API",
					"url": "https://maps.googleapis.com/maps/api/geocode/json",
					"urlExample": "https://maps.googleapis.com/maps/api/geocode/json?address=,+Wexford,+IE",
					"method": "GET",
					"attributes": [
						{
							"label": "address",
							"name": "address",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": ",+Wexford,+IE",
							"attributeType": "input",
							"description": "",
							"from": "input"
						},
						{
							"label": "key",
							"name": "key",
							"type": "string",
							"value": "AIzaSyANITdt97MIEEKObYI1fagCZDTXfPqY16Q",
							"required": true,
							"shown": false,
							"description": "KEY",
							"from": "default"
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
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "JSON",
					"urlReturnFileSchema": "<Google&#x20;Geocoding>\r\n\t\t\t\t<lat></lat>\r\n\t\t\t\t<lng></lng>\r\n\t\t\t</Google&#x20;Geocoding>",
					"jsUrlReturnFileSchema": {
						"text": "Google&#x20;Geocoding",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							}
						]
					},
					"fileName": "Google Geocoding.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Google Geocoding"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "b661ff11-f7af-42b8-ae44-c12d85d50207",
					"resourceType": "HTTPS",
					"organization": "Google",
					"resourceName": "Google Geocoding",
					"description": "Google Geocoding API",
					"url": "https://maps.googleapis.com/maps/api/geocode/json",
					"urlExample": "https://maps.googleapis.com/maps/api/geocode/json?address=,+Wexford,+IE",
					"method": "GET",
					"attributes": [
						{
							"label": "address",
							"name": "address",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": ",+Wexford,+IE",
							"attributeType": "input",
							"description": "",
							"from": "input"
						},
						{
							"label": "key",
							"name": "key",
							"type": "string",
							"value": "AIzaSyANITdt97MIEEKObYI1fagCZDTXfPqY16Q",
							"required": true,
							"shown": false,
							"description": "KEY",
							"from": "default"
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
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "JSON",
					"urlReturnFileSchema": "<Google&#x20;Geocoding>\r\n\t\t\t\t<lat></lat>\r\n\t\t\t\t<lng></lng>\r\n\t\t\t</Google&#x20;Geocoding>",
					"jsUrlReturnFileSchema": {
						"text": "Google&#x20;Geocoding",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							}
						]
					},
					"fileName": "Google Geocoding.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Google Geocoding"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "6c0e85e8-db1e-4d98-8156-3686fe1af84b",
			"x": -573.1673001126126,
			"y": 75.38555743243238,
			"label": "",
			"timestamp": 1486363807425,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "b661ff11-f7af-42b8-ae44-c12d85d50207",
					"resourceType": "HTTPS",
					"organization": "Google",
					"resourceName": "Google Geocoding",
					"description": "Google Geocoding API",
					"url": "https://maps.googleapis.com/maps/api/geocode/json",
					"urlExample": "https://maps.googleapis.com/maps/api/geocode/json?address=,+Wexford,+IE",
					"method": "GET",
					"attributes": [
						{
							"label": "address",
							"name": "address",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": ",+Wexford,+IE",
							"attributeType": "input",
							"description": "",
							"from": "input"
						},
						{
							"label": "key",
							"name": "key",
							"type": "string",
							"value": "AIzaSyANITdt97MIEEKObYI1fagCZDTXfPqY16Q",
							"required": true,
							"shown": false,
							"description": "KEY",
							"from": "default"
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
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "JSON",
					"urlReturnFileSchema": "<Google&#x20;Geocoding>\r\n\t\t\t\t<lat></lat>\r\n\t\t\t\t<lng></lng>\r\n\t\t\t</Google&#x20;Geocoding>",
					"jsUrlReturnFileSchema": {
						"text": "Google&#x20;Geocoding",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							}
						]
					},
					"fileName": "Google Geocoding.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Google Geocoding"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "geoCoordinats.json",
					"urlReturnFileType": "Other",
					"resourceType": "Other",
					"id": "d0099397-f068-cdfc-7068-55077c36a834",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "b661ff11-f7af-42b8-ae44-c12d85d50207",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"geoCoordinats.json"
					],
					"outputFileTypes": [
						"Other"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "b661ff11-f7af-42b8-ae44-c12d85d50207",
						"resourceType": "HTTPS",
						"organization": "Google",
						"resourceName": "Google Geocoding",
						"description": "Google Geocoding API",
						"url": "https://maps.googleapis.com/maps/api/geocode/json",
						"urlExample": "https://maps.googleapis.com/maps/api/geocode/json?address=,+Wexford,+IE",
						"method": "GET",
						"attributes": [
							{
								"label": "address",
								"name": "address",
								"type": "string",
								"value": "address",
								"required": true,
								"shown": true,
								"example": ",+Wexford,+IE",
								"attributeType": "input",
								"description": "",
								"from": "geoCode.csv"
							},
							{
								"label": "key",
								"name": "key",
								"type": "string",
								"value": "AIzaSyANITdt97MIEEKObYI1fagCZDTXfPqY16Q",
								"required": true,
								"shown": false,
								"description": "KEY",
								"from": "default"
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
						"methodReturnFileType": "HTML",
						"urlReturnFileType": "JSON",
						"urlReturnFileSchema": "<Google&#x20;Geocoding>\r\n\t\t\t\t<lat></lat>\r\n\t\t\t\t<lng></lng>\r\n\t\t\t</Google&#x20;Geocoding>",
						"jsUrlReturnFileSchema": {
							"text": "Google&#x20;Geocoding",
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"selected": false,
							"id": "j11_1",
							"children": [
								{
									"text": "lng",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j11_2",
									"children": []
								},
								{
									"text": "lat",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j11_3",
									"children": []
								}
							]
						},
						"fileName": "Google Geocoding.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "Google Geocoding"
					}
				}
			]
		},
		{
			"id": "268005fd-6cfd-4f68-aaf2-bbd8c0498920",
			"x": -581.698623770878,
			"y": 560.013410347716,
			"label": "",
			"timestamp": 1486367659951,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "geoCoordinats.json",
					"urlReturnFileType": "Other",
					"resourceType": "Other",
					"id": "d0099397-f068-cdfc-7068-55077c36a834",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "coordinats.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e8c81204-59b9-968d-31e0-05c093fbfe8d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "c964b792-24ad-05cc-5176-cbeef214eb3c",
					"act": "Code",
					"val": "file = open('geoCoordinats.json','r');\n\ntarget = open('coordinats.csv', 'w');\ntarget.write('lat,lng\\n');\n\nlat = list();\nlng = list();\n\n#0 read result, 1 read location\nstate = 0;\n\nfor line in file:\n\tif '\"results\"' in line:\n\t\tstate = 1;\n\telif '\"location\" :' in line and state == 1:\n\t\tstate = 0;\n\t\tprint line;\n\t\tlatLine = next(file);\n\t\tlngLine = next(file);\n\t\twords = latLine.split(':');\n\t\tlat.append(words[1].strip());\n\t\twords = lngLine.split(':');\n\t\tlng.append(words[1].strip());\n\t\nindex = 0;\nprint len(lat);\nprint len(lng);\n\nfor l in lat:\n\ttarget.write(lat[index] + lng[index] + \"\\n\");\n\tindex = index + 1;\n\t\ntarget.close();\n\n",
					"codeType": "python",
					"codeName": "extractCoordinats.py",
					"inputFileNames": [
						"geoCoordinats.json"
					],
					"outputFileNames": [
						"coordinats.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
		},
		{
			"id": "8d313333-d976-49f8-a1fa-4489c0184ef6",
			"x": -474.04165593014295,
			"y": 197.76226180253985,
			"label": "",
			"timestamp": 1486371920851,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "locations.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "219fdebb-231a-7700-281c-125b38469c0d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gplatIntputs.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "b23f96f3-62c1-ccba-095a-48e4ed87e571",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "924d852e-2d45-b2ff-c1fd-322b9ba93c2b",
					"act": "Code",
					"val": "import re;\n\ncoordinats = open('coordinats.csv', 'r');\nlocations = open('locations.csv', 'r');\n\nnext(coordinats);\nlocations.readline();\nlocLine = locations.readline();\nprint locLine;\n# age = filter(str.isdigit, locLine);\nage = re.findall('[-+]?\\d+[\\.]?\\d*[eE]?[-+]?\\d*', locLine)[0];\nprint age;\n\ntarget = open('gplatIntputs.xml', 'w');\ntarget.write(\"<gplatInputs>\\n\");\n\nfor co in coordinats:\n\twords = co.split(\",\");\n\ttarget.write(\"<row>\");\n\ttarget.write(\"<coordinates>\");\n\ttarget.write(words[1].strip() + \",\" + words[0].strip());\n\ttarget.write(\"</coordinates>\");\n\ttarget.write(\"<age>\");\n\ttarget.write(age);\n\ttarget.write(\"</age>\");\n\ttarget.write(\"</row>\\n\");\n\ntarget.write(\"</gplatInputs>\\n\");\ntarget.close();",
					"codeType": "python",
					"codeName": "generateGPlateInputs.py",
					"inputFileNames": [
						"coordinats.csv",
						"locations.csv"
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
			"x": -178.7124063129913,
			"y": 187.5784945743622,
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
					"urlReturnFileName": "gplatIntputs.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "b23f96f3-62c1-ccba-095a-48e4ed87e571",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
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
					"urlReturnFileName": "locations.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "219fdebb-231a-7700-281c-125b38469c0d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "fossilRecords.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ced50239-0c93-32ab-acdd-9547862495fc",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "fossilResultTable.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "394ce331-2ce7-7794-a4d9-2b857765720d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "c93b5265-d947-8bb9-16ca-ed661737badd",
					"act": "Code",
					"val": "import csv;\nimport xml.etree.ElementTree\nimport codecs\nfrom collections import defaultdict;\n\nfossilRecrods = defaultdict(list) \nwith open('fossilRecords.csv') as f:\n    reader = csv.DictReader(f) # read rows into a dictionary format\n    for row in reader: # read a row as {column1: value1, column2: value2,...}\n        for (k,v) in row.items(): # go over each column name and value \n            fossilRecrods[k].append(v) \nf.close();\n\nlocations = defaultdict(list) \nwith open('locations.csv') as f:\n    reader = csv.DictReader(f) # read rows into a dictionary format\n    for row in reader: # read a row as {column1: value1, column2: value2,...}\n        for (k,v) in row.items(): # go over each column name and value \n            locations[k].append(v) \nf.close();\n\ncoordinats = defaultdict(list) \nwith open('coordinats.csv') as f:\n    reader = csv.DictReader(f) # read rows into a dictionary format\n    for row in reader: # read a row as {column1: value1, column2: value2,...}\n        for (k,v) in row.items(): # go over each column name and value \n            coordinats[k].append(v) \nf.close();\n\ne = xml.etree.ElementTree.parse('oldCoordinats.xml').getroot();\nlongList = list();\nlatList = list();\nfor feature in e.findall('coordinates'):\n\tlong = feature.find('array[1]').text;\n\tlat = feature.find('array[2]').text;\n\tlongList.append(long);\n\tlatList.append(lat);\n\n#generate one to one mapping\nlocationCoord = dict();\ncountries_loc = locations['country'];\nstates_loc = locations['state'];\ncounty_loc = locations['county'];\nage = locations['age'][0];\n\nlongList_co = coordinats['lng'];\nlatList_co = coordinats['lat'];\n\nprint len(countries_loc)\nprint len(longList_co)\nprint len(longList)\n\nindex = 0;\nfor l in longList:\n\tlocationCoord[(countries_loc[index], states_loc[index], county_loc[index])] = (age, latList_co[index], longList_co[index], latList[index], longList[index]);\n\tindex = index + 1;\n\t\nwhile index < len(countries_loc):\n\tlocationCoord[(countries_loc[index], states_loc[index], county_loc[index])] = (age, \"\", \"\", \"\", \"\");\n\tindex = index + 1;\nprint locationCoord;\ntarget = open('fossilResultTable.csv', 'w');\t\nfossils = open('fossilRecords.csv', 'r');\nattrs = next(fossils);\ntarget.write(attrs.strip() + \",age,lat,lng,oldlat,oldlng\\n\");\n\ncountries = fossilRecrods['cc'];\nstates = fossilRecrods['state'];\ncounties = fossilRecrods['county'];\nprint len(countries)\nprint len(states)\nprint len(counties)\nindex = 0;\nfor line in fossils:\n\tappendLine = locationCoord[(countries[index], states[index], counties[index])]; \n\ttarget.write(line.strip() + \",\" + appendLine[0] + \",\" + appendLine[1] + \",\" + appendLine[2] + \",\" + appendLine[3] + \",\" + appendLine[4] + \"\\n\");\n\tindex = index + 1;\n\t\nfossils.close();\ntarget.close();\n",
					"codeType": "python",
					"codeName": "combineTogether.py",
					"inputFileNames": [
						"coordinats.csv",
						"fossilRecords.csv",
						"locations.csv",
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
					"id": "394ce331-2ce7-7794-a4d9-2b857765720d",
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
			"label": "PBDB Fossil Record\n",
			"resources": [
				{
					"id": "7b72525d-add8-4d54-9545-42e19a84d3f5",
					"resourceType": "HTTP",
					"organization": "PBDB",
					"resourceName": "PBDB Fossil Record",
					"description": "Get Styles Information",
					"url": "https://paleobiodb.org/data1.2/occs/list.txt",
					"urlExample": "https://paleobiodb.org/data1.2/occs/list.txt?interval=Cayugan&show=loc",
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
							"value": "loc",
							"required": true,
							"shown": false,
							"example": "loc",
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
							"label": "reid_no",
							"name": "reid_no",
							"type": "string"
						},
						{
							"label": "flags",
							"name": "flags",
							"type": "string"
						},
						{
							"label": "collection_no",
							"name": "collection_no",
							"type": "string"
						},
						{
							"label": "identified_name",
							"name": "identified_name",
							"type": "string"
						},
						{
							"label": "identified_rank",
							"name": "identified_rank",
							"type": "string"
						},
						{
							"label": "identified_no",
							"name": "identified_no",
							"type": "string"
						},
						{
							"label": "difference",
							"name": "difference",
							"type": "string"
						},
						{
							"label": "accepted_name",
							"name": "accepted_name",
							"type": "string"
						},
						{
							"label": "accepted_rank",
							"name": "accepted_rank",
							"type": "string"
						},
						{
							"label": "accepted_no",
							"name": "accepted_no",
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
							"label": "cc",
							"name": "cc",
							"type": "string"
						},
						{
							"label": "state",
							"name": "state",
							"type": "string"
						},
						{
							"label": "county",
							"name": "county",
							"type": "string"
						},
						{
							"label": "latlng_basis",
							"name": "latlng_basis",
							"type": "string"
						},
						{
							"label": "latlng_precision",
							"name": "latlng_precision",
							"type": "string"
						},
						{
							"label": "geogscale",
							"name": "geogscale",
							"type": "string"
						},
						{
							"label": "geogcomments",
							"name": "geogcomments",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<FossilRecord>\r\n\t\t\t\t<occurrence_no></occurrence_no>\r\n\t\t\t\t<record_type></record_type>\r\n\t\t\t\t<reid_no></reid_no>\r\n\t\t\t\t<flags></flags>\r\n\t\t\t\t<collection_no></collection_no>\r\n\t\t\t\t<identified_name></identified_name>\r\n\t\t\t\t<identified_rank></identified_rank>\r\n\t\t\t\t<identified_no></identified_no>\r\n\t\t\t\t<difference></difference>\r\n\t\t\t\t<accepted_name></accepted_name>\r\n\t\t\t\t<accepted_rank></accepted_rank>\r\n\t\t\t\t<accepted_no></accepted_no>\r\n\t\t\t\t<early_interval></early_interval>\r\n\t\t\t\t<late_interval></late_interval>\r\n\t\t\t\t<max_ma></max_ma>\r\n\t\t\t\t<min_ma></min_ma>\r\n\t\t\t\t<reference_no></reference_no>\r\n\t\t\t\t<cc></cc>\r\n\t\t\t\t<state></state>\r\n\t\t\t\t<county></county>\r\n\t\t\t\t<latlng_basis></latlng_basis>\r\n\t\t\t\t<latlng_precision></latlng_precision>\r\n\t\t\t\t<geogscale></geogscale>\r\n\t\t\t\t<geogcomments></geogcomments>\r\n\t\t\t</FossilRecord>",
					"jsUrlReturnFileSchema": {
						"text": "FossilRecord",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "max_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "cc",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
								"children": []
							},
							{
								"text": "identified_rank",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_4",
								"children": []
							},
							{
								"text": "accepted_rank",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_5",
								"children": []
							},
							{
								"text": "latlng_precision",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_6",
								"children": []
							},
							{
								"text": "reid_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_7",
								"children": []
							},
							{
								"text": "geogcomments",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_8",
								"children": []
							},
							{
								"text": "accepted_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_9",
								"children": []
							},
							{
								"text": "flags",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_10",
								"children": []
							},
							{
								"text": "late_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_11",
								"children": []
							},
							{
								"text": "county",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_12",
								"children": []
							},
							{
								"text": "identified_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_13",
								"children": []
							},
							{
								"text": "geogscale",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_14",
								"children": []
							},
							{
								"text": "record_type",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_15",
								"children": []
							},
							{
								"text": "collection_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_16",
								"children": []
							},
							{
								"text": "latlng_basis",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_17",
								"children": []
							},
							{
								"text": "difference",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_18",
								"children": []
							},
							{
								"text": "early_interval",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_19",
								"children": []
							},
							{
								"text": "min_ma",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_20",
								"children": []
							},
							{
								"text": "state",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_21",
								"children": []
							},
							{
								"text": "reference_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_22",
								"children": []
							},
							{
								"text": "occurrence_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_23",
								"children": []
							},
							{
								"text": "identified_name",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_24",
								"children": []
							},
							{
								"text": "accepted_no",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_25",
								"children": []
							}
						]
					},
					"fileName": "PBDB fossil record.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PBDB Fossil Record"
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
					"id": "ced50239-0c93-32ab-acdd-9547862495fc",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "8fc2528c-1475-4dad-af4d-8a9f1a0fbb59",
			"to": "4f550b8f-e953-40e6-80d8-ac82aa17a39a",
			"id": "e68d9d49-382a-4e4d-ab95-31008208e0e6",
			"arrows": "to",
			"label": "locations.csv\n",
			"resources": [
				{
					"urlReturnFileName": "locations.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "219fdebb-231a-7700-281c-125b38469c0d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "4f550b8f-e953-40e6-80d8-ac82aa17a39a",
			"to": "6c0e85e8-db1e-4d98-8156-3686fe1af84b",
			"id": "93ef31cb-16bc-42f9-b302-2bf41ac51291",
			"arrows": "to",
			"label": "",
			"resources": [],
			"libraries": []
		},
		{
			"from": "af3c3b59-e308-4c18-b243-85d266503192",
			"to": "6c0e85e8-db1e-4d98-8156-3686fe1af84b",
			"id": "323c8e9a-e0d3-405a-b878-44d56f253987",
			"arrows": "to",
			"label": "Google Geocoding\n",
			"resources": [
				{
					"id": "b661ff11-f7af-42b8-ae44-c12d85d50207",
					"resourceType": "HTTPS",
					"organization": "Google",
					"resourceName": "Google Geocoding",
					"description": "Google Geocoding API",
					"url": "https://maps.googleapis.com/maps/api/geocode/json",
					"urlExample": "https://maps.googleapis.com/maps/api/geocode/json?address=,+Wexford,+IE",
					"method": "GET",
					"attributes": [
						{
							"label": "address",
							"name": "address",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": ",+Wexford,+IE",
							"attributeType": "input",
							"description": "",
							"from": "input"
						},
						{
							"label": "key",
							"name": "key",
							"type": "string",
							"value": "AIzaSyANITdt97MIEEKObYI1fagCZDTXfPqY16Q",
							"required": true,
							"shown": false,
							"description": "KEY",
							"from": "default"
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
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "JSON",
					"urlReturnFileSchema": "<Google&#x20;Geocoding>\r\n\t\t\t\t<lat></lat>\r\n\t\t\t\t<lng></lng>\r\n\t\t\t</Google&#x20;Geocoding>",
					"jsUrlReturnFileSchema": {
						"text": "Google&#x20;Geocoding",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "lng",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "lat",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							}
						]
					},
					"fileName": "Google Geocoding.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Google Geocoding"
				}
			],
			"libraries": []
		},
		{
			"from": "6c0e85e8-db1e-4d98-8156-3686fe1af84b",
			"to": "268005fd-6cfd-4f68-aaf2-bbd8c0498920",
			"id": "992f392e-5266-451c-b357-06f7ef47ecef",
			"arrows": "to",
			"label": "geoCoordinats.json\n",
			"resources": [
				{
					"urlReturnFileName": "geoCoordinats.json",
					"urlReturnFileType": "Other",
					"resourceType": "Other",
					"id": "d0099397-f068-cdfc-7068-55077c36a834",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "268005fd-6cfd-4f68-aaf2-bbd8c0498920",
			"to": "8d313333-d976-49f8-a1fa-4489c0184ef6",
			"id": "2bddf1a3-8484-406e-a406-ae593ace47b9",
			"arrows": "to",
			"label": "",
			"resources": [],
			"libraries": []
		},
		{
			"from": "8fc2528c-1475-4dad-af4d-8a9f1a0fbb59",
			"to": "8d313333-d976-49f8-a1fa-4489c0184ef6",
			"id": "c172b980-f3fc-4563-8adf-812654437d8b",
			"arrows": "to",
			"label": "locations.csv\n",
			"resources": [
				{
					"urlReturnFileName": "locations.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "219fdebb-231a-7700-281c-125b38469c0d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
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
			"from": "8d313333-d976-49f8-a1fa-4489c0184ef6",
			"to": "735eb32d-51d7-490c-a652-a07440f94f63",
			"id": "ec511088-21a9-4df7-bb41-5ea0517bc823",
			"arrows": "to",
			"label": "gplatIntputs.xml\n",
			"resources": [
				{
					"urlReturnFileName": "gplatIntputs.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "b23f96f3-62c1-ccba-095a-48e4ed87e571",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
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
			"from": "268005fd-6cfd-4f68-aaf2-bbd8c0498920",
			"to": "da3bf498-0b12-4d5a-9322-374b758914ed",
			"id": "d63129f4-f493-48f5-9da4-c6a62fb07ebf",
			"arrows": "to",
			"label": "",
			"resources": [],
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
					"id": "ced50239-0c93-32ab-acdd-9547862495fc",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "8fc2528c-1475-4dad-af4d-8a9f1a0fbb59",
			"to": "da3bf498-0b12-4d5a-9322-374b758914ed",
			"id": "1c9bc3e9-729b-4b11-8455-8422442456aa",
			"arrows": "to",
			"label": "locations.csv\n",
			"resources": [
				{
					"urlReturnFileName": "locations.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "219fdebb-231a-7700-281c-125b38469c0d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
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
					"id": "394ce331-2ce7-7794-a4d9-2b857765720d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		}
	]
}