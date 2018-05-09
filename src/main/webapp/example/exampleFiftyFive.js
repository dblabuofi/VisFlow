var exampleFiftyFive = {
	"nodes": [
		{
			"id": "b1a59c5c-7c95-4f3b-96b1-672d39e7f608",
			"x": 334.3618250440192,
			"y": 59.74820732789205,
			"label": "",
			"timestamp": 1519972108120,
			"type": "nested",
			"image": "image/nested.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "8adcf69c-1bf5-82d2-e15a-6b20598ba206"
				},
				{
					"urlReturnFileName": "orthology.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e6c5de8d-81af-c9c8-3b14-bd06863c3f53"
				},
				{
					"urlReturnFileName": "orthologygen.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0842e533-30f2-2614-5382-cf3011787eb4"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "bafd277e-0e0f-ea16-8a1c-133398869e98",
					"act": "procedure",
					"outputFileNames": [
						"pathrnommu",
						"orthology.csv",
						"orthologygen.csv"
					],
					"outputFileTypes": [
						"SQL",
						"CSV",
						"CSV"
					],
					"outAttributes": [],
					"module": {
						"fileName": "kegg orthology",
						"startNode": "f4072fd6-5ccf-4a47-ade0-39b9daaa5e46",
						"endNode": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
						"description": "kegg orthology",
						"graph": {
							"nodes": [
								{
									"id": "ac52be6f-f354-4498-9562-fe2f23011101",
									"x": 79.26803477932366,
									"y": -261.82671705214244,
									"label": "KEGG Genes\nKEGG orthology\nhumangenes.csv\n",
									"timestamp": "1518677863684",
									"type": "data",
									"image": "image/data.png",
									"shape": "image",
									"resourcesIn": [],
									"resources": [
										{
											"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
											"resourceType": "REST",
											"organization": "KEGG",
											"resourceName": "KEGG Genes",
											"description": "KEGG link genes",
											"url": "http://rest.kegg.jp/link/genes/{id}",
											"method": "REST",
											"attributes": [
												{
													"label": "id",
													"name": "id",
													"type": "String",
													"value": "",
													"required": true,
													"shown": true,
													"example": "ko:K00128",
													"attributeType": "input",
													"description": "gene id",
													"from": "default"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<ko></ko>\r\n\t\t\t<gene></gene>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"fileName": "KEGG genes.xml",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG Genes",
											"wrapper": {
												"wrapperName": "textTableWrapper",
												"separator": "\\t",
												"headers": [
													"ko",
													"gene"
												],
												"resultContainHeaderInfo": "false"
											}
										},
										{
											"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
											"resourceType": "REST",
											"organization": "KEGG",
											"resourceName": "KEGG orthology",
											"description": "KEGG orthology change",
											"url": "http://rest.kegg.jp/link/orthology/hsa:{id}",
											"method": "REST",
											"attributes": [
												{
													"label": "id",
													"name": "id",
													"type": "Integer",
													"value": "",
													"required": true,
													"shown": true,
													"example": "218",
													"attributeType": "input",
													"description": "gene id",
													"from": "default"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "hsa",
														"id": "j9_3",
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
											"fileName": "KEGG orthology.xml",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG orthology",
											"wrapper": {
												"wrapperName": "textTableWrapper",
												"separator": "\\t",
												"headers": [
													"hsa",
													"ko"
												],
												"resultContainHeaderInfo": "false"
											}
										},
										{
											"id": "32722a16-c545-4e62-9c09-6129a58157fc",
											"resourceType": "CSV",
											"organization": "UI database team",
											"resourceName": "humangenes.csv",
											"description": "human genes id",
											"url": "",
											"outAttributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "string"
												}
											],
											"methodReturnFileType": "CSV",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<human&#x20;genes>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t</human&#x20;genes>",
											"jsUrlReturnFileSchema": {
												"text": "human&#x20;genes",
												"id": "j23_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "gene",
														"id": "j23_2",
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
											"fileName": "humangenes.csv",
											"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
											"urlReturnFileName": "humangenes.csv"
										}
									],
									"resourcesOut": [
										{
											"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
											"resourceType": "REST",
											"organization": "KEGG",
											"resourceName": "KEGG Genes",
											"description": "KEGG link genes",
											"url": "http://rest.kegg.jp/link/genes/{id}",
											"method": "REST",
											"attributes": [
												{
													"label": "id",
													"name": "id",
													"type": "String",
													"value": "",
													"required": true,
													"shown": true,
													"example": "ko:K00128",
													"attributeType": "input",
													"description": "gene id",
													"from": "default"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<ko></ko>\r\n\t\t\t<gene></gene>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"fileName": "KEGG genes.xml",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG Genes",
											"wrapper": {
												"wrapperName": "textTableWrapper",
												"separator": "\\t",
												"headers": [
													"ko",
													"gene"
												],
												"resultContainHeaderInfo": "false"
											}
										},
										{
											"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
											"resourceType": "REST",
											"organization": "KEGG",
											"resourceName": "KEGG orthology",
											"description": "KEGG orthology change",
											"url": "http://rest.kegg.jp/link/orthology/hsa:{id}",
											"method": "REST",
											"attributes": [
												{
													"label": "id",
													"name": "id",
													"type": "Integer",
													"value": "",
													"required": true,
													"shown": true,
													"example": "218",
													"attributeType": "input",
													"description": "gene id",
													"from": "default"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "hsa",
														"id": "j9_3",
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
											"fileName": "KEGG orthology.xml",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG orthology",
											"wrapper": {
												"wrapperName": "textTableWrapper",
												"separator": "\\t",
												"headers": [
													"hsa",
													"ko"
												],
												"resultContainHeaderInfo": "false"
											}
										},
										{
											"id": "32722a16-c545-4e62-9c09-6129a58157fc",
											"resourceType": "CSV",
											"organization": "UI database team",
											"resourceName": "humangenes.csv",
											"description": "human genes id",
											"url": "",
											"outAttributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "string"
												}
											],
											"methodReturnFileType": "CSV",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<human&#x20;genes>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t</human&#x20;genes>",
											"jsUrlReturnFileSchema": {
												"text": "human&#x20;genes",
												"id": "j23_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "gene",
														"id": "j23_2",
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
											"fileName": "humangenes.csv",
											"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
											"urlReturnFileName": "humangenes.csv"
										}
									]
								},
								{
									"id": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
									"x": 87.22570291750547,
									"y": -36.33635189362837,
									"label": "generate-rno-mmu",
									"timestamp": "1518997856390",
									"type": "adapter",
									"image": "image/adapter.png",
									"shape": "image",
									"resourcesIn": [
										{
											"id": "cc355a4c-daf4-012d-0ffc-b778d518e420",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthologygen.csv"
										},
										{
											"id": "8c54fb49-39d6-e852-f6b0-3cd0efd6e35d",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "hsa",
														"id": "j9_3",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthology.csv"
										}
									],
									"resources": [],
									"resourcesOut": [
										{
											"id": "85c6829e-2deb-dd31-1858-516e09d81577",
											"resourceType": "SQL",
											"urlReturnFileType": "SQL",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "pathrnommu"
										}
									],
									"actions": [
										{
											"act": "Code",
											"id": "eeccfc47-ff35-7070-4277-353b95239186",
											"inputFileNames": [
												"orthologygen.csv",
												"orthology.csv"
											],
											"outputFileNames": [
												"pathrnommu"
											],
											"outputFileTypes": [
												"SQL"
											],
											"val": "drop table if exists pathrnommu;\ncreate table pathrnommu as \nselect m1.hsa, m1.gene mmu, m2.gene rno\nfrom\n(\nselect o1.hsa, o1.ko, g1.gene\nfrom orthology o1, orthologygen g1\nwhere o1.ko = g1.ko and g1.gene like 'mmu%' group by o1.hsa\n) m1\njoin \n(\nselect o1.hsa, o1.ko, g1.gene\nfrom orthology o1, orthologygen g1\nwhere o1.ko = g1.ko and g1.gene like 'rno%' group by o1.hsa\n) m2 \non m1.hsa = m2.hsa",
											"codeType": "sql",
											"codeName": "generate rno and mmu"
										}
									]
								},
								{
									"id": "f4072fd6-5ccf-4a47-ade0-39b9daaa5e46",
									"x": 619.809225,
									"y": -232.72279000000015,
									"label": "retrive-orthology",
									"timestamp": "1519196860787",
									"type": "adapter",
									"image": "image/adapter.png",
									"shape": "image",
									"resourcesIn": [
										{
											"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
											"resourceType": "REST",
											"organization": "KEGG",
											"resourceName": "KEGG orthology",
											"description": "KEGG orthology change",
											"url": "http://rest.kegg.jp/link/orthology/hsa:{id}",
											"method": "REST",
											"attributes": [
												{
													"label": "id",
													"name": "id",
													"type": "Integer",
													"value": "",
													"required": true,
													"shown": true,
													"example": "218",
													"attributeType": "input",
													"description": "gene id",
													"from": "default"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "hsa",
														"id": "j9_3",
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
											"fileName": "KEGG orthology.xml",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG orthology",
											"wrapper": {
												"wrapperName": "textTableWrapper",
												"separator": "\\t",
												"headers": [
													"hsa",
													"ko"
												],
												"resultContainHeaderInfo": "false"
											}
										},
										{
											"id": "32722a16-c545-4e62-9c09-6129a58157fc",
											"resourceType": "CSV",
											"organization": "UI database team",
											"resourceName": "humangenes.csv",
											"description": "human genes id",
											"url": "",
											"outAttributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "string"
												}
											],
											"methodReturnFileType": "CSV",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<human&#x20;genes>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t</human&#x20;genes>",
											"jsUrlReturnFileSchema": {
												"text": "human&#x20;genes",
												"id": "j23_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "gene",
														"id": "j23_2",
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
											"fileName": "humangenes.csv",
											"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
											"urlReturnFileName": "humangenes.csv"
										}
									],
									"resources": [],
									"resourcesOut": [
										{
											"id": "8c54fb49-39d6-e852-f6b0-3cd0efd6e35d",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "hsa",
														"id": "j9_3",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthology.csv"
										}
									],
									"actions": [
										{
											"act": "Resource",
											"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
											"inputFileNames": [],
											"outputFileNames": [
												"orthology.csv"
											],
											"outputFileTypes": [
												"CSV"
											],
											"resultMethod": "Append",
											"targetResource": {
												"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
												"resourceType": "REST",
												"organization": "KEGG",
												"resourceName": "KEGG orthology",
												"description": "KEGG orthology change",
												"url": "http://rest.kegg.jp/link/orthology/hsa:{id}",
												"method": "REST",
												"attributes": [
													{
														"label": "id",
														"name": "id",
														"type": "Integer",
														"value": "gene",
														"required": true,
														"shown": true,
														"example": "218",
														"attributeType": "input",
														"description": "gene id",
														"from": "humangenes.csv"
													}
												],
												"methodReturnFileType": "TEXT",
												"urlReturnFileType": "CSV",
												"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
												"jsUrlReturnFileSchema": {
													"text": "KEGG&#x20;orthology",
													"id": "j9_1",
													"a_attr": {
														"style": "background-color: rgb(205, 165, 10) !important"
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "ko",
															"id": "j9_2",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": []
														},
														{
															"text": "hsa",
															"id": "j9_3",
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
												"fileName": "KEGG orthology.xml",
												"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
												"urlReturnFileName": "KEGG orthology",
												"wrapper": {
													"wrapperName": "textTableWrapper",
													"separator": "\\t",
													"headers": [
														"hsa",
														"ko"
													],
													"resultContainHeaderInfo": "false"
												}
											},
											"webservices": []
										}
									]
								},
								{
									"id": "cea9a0c1-4663-464c-815d-6317205fdd38",
									"x": 296.35411347793564,
									"y": -169.4337569369677,
									"label": "retrive-pathways",
									"timestamp": "1519197029874",
									"type": "adapter",
									"image": "image/adapter.png",
									"shape": "image",
									"resourcesIn": [
										{
											"id": "8c54fb49-39d6-e852-f6b0-3cd0efd6e35d",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "hsa",
														"id": "j9_3",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthology.csv"
										},
										{
											"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
											"resourceType": "REST",
											"organization": "KEGG",
											"resourceName": "KEGG Genes",
											"description": "KEGG link genes",
											"url": "http://rest.kegg.jp/link/genes/{id}",
											"method": "REST",
											"attributes": [
												{
													"label": "id",
													"name": "id",
													"type": "String",
													"value": "",
													"required": true,
													"shown": true,
													"example": "ko:K00128",
													"attributeType": "input",
													"description": "gene id",
													"from": "default"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<ko></ko>\r\n\t\t\t<gene></gene>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"fileName": "KEGG genes.xml",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG Genes",
											"wrapper": {
												"wrapperName": "textTableWrapper",
												"separator": "\\t",
												"headers": [
													"ko",
													"gene"
												],
												"resultContainHeaderInfo": "false"
											}
										}
									],
									"resources": [],
									"resourcesOut": [
										{
											"id": "cc355a4c-daf4-012d-0ffc-b778d518e420",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthologygen.csv"
										}
									],
									"actions": [
										{
											"act": "Resource",
											"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
											"inputFileNames": [],
											"outputFileNames": [
												"orthologygen.csv"
											],
											"outputFileTypes": [
												"CSV"
											],
											"resultMethod": "Append",
											"targetResource": {
												"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
												"resourceType": "REST",
												"organization": "KEGG",
												"resourceName": "KEGG Genes",
												"description": "KEGG link genes",
												"url": "http://rest.kegg.jp/link/genes/{id}",
												"method": "REST",
												"attributes": [
													{
														"label": "id",
														"name": "id",
														"type": "String",
														"value": "ko",
														"required": true,
														"shown": true,
														"example": "ko:K00128",
														"attributeType": "input",
														"description": "gene id",
														"from": "orthology.csv"
													}
												],
												"methodReturnFileType": "TEXT",
												"urlReturnFileType": "CSV",
												"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<ko></ko>\r\n\t\t\t<gene></gene>\r\n\t\t</KEGG&#x20;orthology>",
												"jsUrlReturnFileSchema": {
													"text": "KEGG&#x20;orthology",
													"id": "j8_1",
													"a_attr": {
														"style": "background-color: rgb(205, 165, 10) !important"
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "ko",
															"id": "j8_2",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": []
														},
														{
															"text": "gene",
															"id": "j8_3",
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
												"fileName": "KEGG genes.xml",
												"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
												"urlReturnFileName": "KEGG Genes",
												"wrapper": {
													"wrapperName": "textTableWrapper",
													"separator": "\\t",
													"headers": [
														"ko",
														"gene"
													],
													"resultContainHeaderInfo": "false"
												}
											},
											"webservices": []
										}
									]
								},
								{
									"id": "89b5dc34-d030-43d2-ae14-5c85d1d27d6d",
									"x": -165.53125,
									"y": 71.46875,
									"label": "show-pathway-rno-mmu",
									"timestamp": "1519336412765",
									"type": "terminal",
									"image": "image/terminal.png",
									"shape": "image",
									"resourcesIn": [
										{
											"id": "85c6829e-2deb-dd31-1858-516e09d81577",
											"resourceType": "SQL",
											"outAttributes": [
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "human pathway for images"
												},
												{
													"label": "mmu",
													"name": "mmu",
													"type": "string",
													"description": "mice orthology"
												},
												{
													"label": "rno",
													"name": "rno",
													"type": "string",
													"description": "rat orthology"
												}
											],
											"urlReturnFileType": "SQL",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "pathrnommu"
										}
									],
									"resources": [],
									"resourcesOut": [],
									"actions": [
										{
											"act": "print",
											"id": "64a96004-21bc-9d10-83a5-81ee21698a8c",
											"outputFileNames": [
												"pathrnommu"
											],
											"printType": "table",
											"numOfWins": 0,
											"submit": {
												"values": [],
												"windowFunction": []
											},
											"colFuns": []
										}
									]
								}
							],
							"edges": [
								{
									"from": "ac52be6f-f354-4498-9562-fe2f23011101",
									"to": "f4072fd6-5ccf-4a47-ade0-39b9daaa5e46",
									"id": "2cc90d0d-167a-4e48-a210-19d09777ba6e",
									"resources": [
										{
											"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
											"resourceType": "REST",
											"organization": "KEGG",
											"resourceName": "KEGG orthology",
											"description": "KEGG orthology change",
											"url": "http://rest.kegg.jp/link/orthology/hsa:{id}",
											"method": "REST",
											"attributes": [
												{
													"label": "id",
													"name": "id",
													"type": "Integer",
													"value": "",
													"required": true,
													"shown": true,
													"example": "218",
													"attributeType": "input",
													"description": "gene id",
													"from": "default"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "hsa",
														"id": "j9_3",
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
											"fileName": "KEGG orthology.xml",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG orthology",
											"wrapper": {
												"wrapperName": "textTableWrapper",
												"separator": "\\t",
												"headers": [
													"hsa",
													"ko"
												],
												"resultContainHeaderInfo": "false"
											}
										},
										{
											"id": "32722a16-c545-4e62-9c09-6129a58157fc",
											"resourceType": "CSV",
											"organization": "UI database team",
											"resourceName": "humangenes.csv",
											"description": "human genes id",
											"url": "",
											"outAttributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "string"
												}
											],
											"methodReturnFileType": "CSV",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<human&#x20;genes>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t</human&#x20;genes>",
											"jsUrlReturnFileSchema": {
												"text": "human&#x20;genes",
												"id": "j23_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "gene",
														"id": "j23_2",
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
											"fileName": "humangenes.csv",
											"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
											"urlReturnFileName": "humangenes.csv"
										}
									],
									"libraries": [],
									"label": "KEGG orthology\nhumangenes.csv\n"
								},
								{
									"from": "ac52be6f-f354-4498-9562-fe2f23011101",
									"to": "cea9a0c1-4663-464c-815d-6317205fdd38",
									"id": "d63f59ab-1b62-44ea-8dc4-1f0ff117c113",
									"resources": [
										{
											"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
											"resourceType": "REST",
											"organization": "KEGG",
											"resourceName": "KEGG Genes",
											"description": "KEGG link genes",
											"url": "http://rest.kegg.jp/link/genes/{id}",
											"method": "REST",
											"attributes": [
												{
													"label": "id",
													"name": "id",
													"type": "String",
													"value": "",
													"required": true,
													"shown": true,
													"example": "ko:K00128",
													"attributeType": "input",
													"description": "gene id",
													"from": "default"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<ko></ko>\r\n\t\t\t<gene></gene>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"fileName": "KEGG genes.xml",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG Genes",
											"wrapper": {
												"wrapperName": "textTableWrapper",
												"separator": "\\t",
												"headers": [
													"ko",
													"gene"
												],
												"resultContainHeaderInfo": "false"
											}
										}
									],
									"libraries": [],
									"label": "KEGG Genes\n"
								},
								{
									"from": "f4072fd6-5ccf-4a47-ade0-39b9daaa5e46",
									"to": "cea9a0c1-4663-464c-815d-6317205fdd38",
									"id": "280904c5-9301-479e-a67c-0dc3d3dd439c",
									"resources": [
										{
											"id": "8c54fb49-39d6-e852-f6b0-3cd0efd6e35d",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "hsa",
														"id": "j9_3",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthology.csv"
										}
									],
									"libraries": [],
									"label": "orthology.csv\n"
								},
								{
									"from": "cea9a0c1-4663-464c-815d-6317205fdd38",
									"to": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
									"id": "67f38b27-fb2a-401f-a7e4-1b1f44e82853",
									"resources": [
										{
											"id": "cc355a4c-daf4-012d-0ffc-b778d518e420",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthologygen.csv"
										}
									],
									"libraries": [],
									"label": "orthologygen.csv\n"
								},
								{
									"from": "f4072fd6-5ccf-4a47-ade0-39b9daaa5e46",
									"to": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
									"id": "52c81b05-67a5-42d7-b29c-c60078bd0f9d",
									"resources": [
										{
											"id": "8c54fb49-39d6-e852-f6b0-3cd0efd6e35d",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "hsa",
														"id": "j9_3",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthology.csv"
										}
									],
									"libraries": [],
									"label": "orthology.csv\n"
								},
								{
									"from": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
									"to": "89b5dc34-d030-43d2-ae14-5c85d1d27d6d",
									"id": "a3a78942-0e41-444f-8985-16d61eb4ff7c",
									"resources": [
										{
											"id": "85c6829e-2deb-dd31-1858-516e09d81577",
											"resourceType": "SQL",
											"urlReturnFileType": "SQL",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "pathrnommu"
										}
									],
									"libraries": [],
									"label": "pathrnommu\n"
								}
							]
						}
					},
					"inputReplace": [],
					"outputReplace": [
						{
							"oldFile": "pathrnommu",
							"newFile": "pathrnommu"
						},
						{
							"oldFile": "orthology.csv",
							"newFile": "orthology.csv"
						},
						{
							"oldFile": "orthologygen.csv",
							"newFile": "orthologygen.csv"
						}
					]
				}
			]
		},
		{
			"id": "68768e96-0d89-48ef-beb5-0e3dec047d1b",
			"x": 331.2756002675801,
			"y": 186.25578388005889,
			"label": "",
			"timestamp": 1519972129637,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "8adcf69c-1bf5-82d2-e15a-6b20598ba206"
				},
				{
					"urlReturnFileName": "orthology.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e6c5de8d-81af-c9c8-3b14-bd06863c3f53"
				},
				{
					"urlReturnFileName": "orthologygen.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0842e533-30f2-2614-5382-cf3011787eb4"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "e8f6e9ca-24b1-40ca-704b-983160654b95",
					"act": "print",
					"outputFileNames": [
						"pathrnommu"
					],
					"printType": "table",
					"resourceid": "8adcf69c-1bf5-82d2-e15a-6b20598ba206",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				},
				{
					"id": "b9a60107-f84b-8119-1413-6f81de1aa6ac",
					"act": "print",
					"outputFileNames": [
						"orthology.csv"
					],
					"printType": "table",
					"resourceid": "e6c5de8d-81af-c9c8-3b14-bd06863c3f53",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				},
				{
					"id": "1afeef6b-8cf9-8c5e-6d5d-e64dae2fffd4",
					"act": "print",
					"outputFileNames": [
						"orthologygen.csv"
					],
					"printType": "table",
					"resourceid": "0842e533-30f2-2614-5382-cf3011787eb4",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				}
			]
		}
	],
	"edges": [
		{
			"from": "b1a59c5c-7c95-4f3b-96b1-672d39e7f608",
			"to": "68768e96-0d89-48ef-beb5-0e3dec047d1b",
			"id": "b6bef0d5-b350-4c22-99df-5c46af1f56b0",
			"arrows": "to",
			"label": "pathrnommu\northology.csv\northologygen.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "8adcf69c-1bf5-82d2-e15a-6b20598ba206"
				},
				{
					"urlReturnFileName": "orthology.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e6c5de8d-81af-c9c8-3b14-bd06863c3f53"
				},
				{
					"urlReturnFileName": "orthologygen.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0842e533-30f2-2614-5382-cf3011787eb4"
				}
			],
			"libraries": []
		}
	]
}