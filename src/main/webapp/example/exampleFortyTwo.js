var exampleFortyTwo = {
	"nodes": [
		{
			"id": "ac52be6f-f354-4498-9562-fe2f23011101",
			"x": 79.26803477932366,
			"y": -261.82671705214244,
			"label": "KEGG Genes\nKEGG orthology\nhumangenes.csv\n",
			"timestamp": 1518677863684,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_3",
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_3",
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
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
			"resourcesIn": [],
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_3",
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_3",
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
								"children": []
							}
						]
					},
					"fileName": "humangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "humangenes.csv"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "8cee6a23-97b8-42b8-8a66-6c654b86431a",
			"x": 441.1444211709466,
			"y": -224.63978393449918,
			"label": "",
			"timestamp": 1518996861218,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_3",
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
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
					"urlReturnFileName": "orthology.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_3",
								"children": []
							}
						]
					},
					"id": "5b23e1da-cc92-e215-44f2-146c9d1e5f76",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"orthology.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
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
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"selected": false,
							"id": "j9_1",
							"children": [
								{
									"text": "ko",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j9_2",
									"children": []
								},
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j9_3",
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
					}
				}
			]
		},
		{
			"id": "e39dd2f5-98af-4fd3-8806-b7f64f876c24",
			"x": 269.35516383526846,
			"y": -2.1947199485569513,
			"label": "",
			"timestamp": 1518996862340,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "orthology.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_3",
								"children": []
							}
						]
					},
					"id": "5b23e1da-cc92-e215-44f2-146c9d1e5f76",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_3",
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
			"resourcesOut": [
				{
					"urlReturnFileName": "orthologygen.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_3",
								"children": []
							}
						]
					},
					"id": "9f6c4358-a736-1251-cdc1-63fe3ef420b4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"orthologygen.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
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
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"selected": false,
							"id": "j8_1",
							"children": [
								{
									"text": "ko",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j8_2",
									"children": []
								},
								{
									"text": "gene",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j8_3",
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
				}
			]
		},
		{
			"id": "8cb3d5cc-1b9c-4eb0-8e92-256e7c867dda",
			"x": -136.5903010033445,
			"y": -131.59796544035675,
			"label": "",
			"timestamp": 1518997201692,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
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
					"urlReturnFileName": "hsagenes.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "5ee1a0b5-8299-4a69-231c-c5fd4ce16ed2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "cc724168-79c8-594f-31ab-4e5d08ddc66f",
					"act": "Code",
					"val": "SET SQL_SAFE_UPDATES = 0;\nupdate  (humangenes) humangenes\nset  humangenes.gene = concat(\"hsa:\",humangenes.gene)\nwhere  humangenes.gene = concat(\"hsa:\",humangenes.gene);\ncreate table hsagenes\nselect * from humangenes;\nSET SQL_SAFE_UPDATES = 1;\n",
					"codeType": "sql",
					"codeName": "addprefix",
					"inputFileNames": [
						"humangenes.csv"
					],
					"outputFileNames": [
						"hsagenes.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
		},
		{
			"id": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
			"x": 65.859375,
			"y": 9.859375,
			"label": "",
			"timestamp": 1518997856390,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "orthologygen.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_3",
								"children": []
							}
						]
					},
					"id": "9f6c4358-a736-1251-cdc1-63fe3ef420b4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsarnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "2c1786c4-0659-931d-8676-4b9709cd1cc7",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "79b9e2a3-a1bf-8e52-ee26-e9966789c1b8",
					"act": "Code",
					"val": "drop table if exists hsatable1;\ncreate table hsatable1 as \nselect  (orthologygen.gene) hsa\nfrom  orthologygen orthologygen\nwhere  orthologygen.gene like 'hsa%'\n;\ndrop table if exists hsatable;\ncreate table hsatable as \nselect  (hsatable1.hsa) hsa, (@nh := @nh + 1) id\nfrom  hsatable1 \n inner join\n  (select @nh := 0) n\n;\ndrop table if exists rnotable1;\ncreate table rnotable1 as \nselect  (orthologygen.gene) rno\nfrom  orthologygen orthologygen\nwhere  orthologygen.gene like 'rno%'\n;\ndrop table if exists rnotable;\ncreate table rnotable as \nselect  (rnotable1.rno) rno, (@nr := @nr + 1) id\nfrom  rnotable1 rnotable1\n inner join\n  (select @nr := 0) m\n;\ndrop table if exists mmutable1;\ncreate table mmutable1 as \nselect  (orthologygen.gene) mmu\nfrom  orthologygen orthologygen\nwhere  orthologygen.gene like 'mmu%'\n;\ndrop table if exists mmutable;\ncreate table mmutable as \nselect  (mmutable1.mmu) mmu, (@nm:=@nm + 1) id\nfrom  mmutable1 mmutable1\n inner join\n  (select @nm := 0) u\n;\ndrop table if exists hsarnommu;\ncreate table hsarnommu as\nselect  (hsatable.hsa) hsa, (rnotable.rno) rno, (mmutable.mmu) mmu\nfrom  hsatable hsatable\n inner join\n  rnotable rnotable\n on  hsatable.id = rnotable.id\n inner join\n  mmutable mmutable\n on  hsatable.id = mmutable.id\n;\n",
					"codeType": "sql",
					"codeName": "extracthsarnommu",
					"inputFileNames": [
						"orthologygen.csv"
					],
					"outputFileNames": [
						"hsarnommu"
					],
					"outputFileTypes": [
						"SQL"
					]
				}
			]
		},
		{
			"id": "fe69c1c3-d9b5-4c6a-8e59-27c63e7a7e6b",
			"x": -154.15625,
			"y": 7.765625,
			"label": "",
			"timestamp": 1519003331804,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsarnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "2c1786c4-0659-931d-8676-4b9709cd1cc7",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"jsUrlReturnFileSchema": {
						"text": "hsarnommu.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "rno",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "mmu",
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
					"urlReturnFileName": "hsagenes.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "5ee1a0b5-8299-4a69-231c-c5fd4ce16ed2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsagenes.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "gene",
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
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "facc4b70-40b7-fab4-5d68-02441997b4a4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "d865de4e-db20-736c-33b5-f6cabe3df16d",
					"act": "Code",
					"val": "SET SQL_SAFE_UPDATES = 0;\ndrop table if exists pathrnommu1;\ncreate table pathrnommu1 as \nselect  (hsarnommu.hsa) gene, (hsarnommu.rno) rno, (hsarnommu.mmu) mmu, (@n :=@n + 1) id\nfrom  hsarnommu hsarnommu, hsagenes hsagenes\n inner join\n  (select @n := 0)  m\nwhere  hsarnommu.hsa = hsagenes.gene \n;\ndelete  p1\nfrom  pathrnommu1 p1, pathrnommu1 p2\nwhere  p1.gene = p2.gene and p1.id > p2.id ;\ndrop table if exists pathrnommu;\ncreate table pathrnommu\nselect * from pathrnommu1;\nSET SQL_SAFE_UPDATES = 1;\n",
					"codeType": "sql",
					"codeName": "",
					"inputFileNames": [
						"hsagenes.csv",
						"hsarnommu"
					],
					"outputFileNames": [
						"pathrnommu"
					],
					"outputFileTypes": [
						"SQL"
					]
				}
			]
		},
		{
			"id": "fe719230-985c-445e-a9ad-eea9c7f4d848",
			"x": 501.8843627626664,
			"y": -12.482528442876458,
			"label": "KEGG hsa to pathway id\n",
			"timestamp": 1519006465301,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG hsa to pathway id.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG hsa to pathway id",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"hsa",
							"pathway"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG hsa to pathway id.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG hsa to pathway id",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"hsa",
							"pathway"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "f0b5b947-5afc-4c1f-b95d-1c6ee5953389",
			"x": -260.984375,
			"y": 109.53125,
			"label": "",
			"timestamp": 1519006480087,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG hsa to pathway id.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG hsa to pathway id",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"hsa",
							"pathway"
						],
						"resultContainHeaderInfo": "false"
					}
				},
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "facc4b70-40b7-fab4-5d68-02441997b4a4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"jsUrlReturnFileSchema": {
						"text": "pathrnommu.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "rno",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "mmu",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "id",
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
					"urlReturnFileName": "hsapath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "1b662509-7d79-c39e-f201-c6f915c2aef7",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"hsapath"
					],
					"outputFileTypes": [
						"SQL"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
						"resourceType": "REST",
						"organization": "Kanehisa Laboratories",
						"resourceName": "KEGG hsa to pathway id",
						"description": "convert hsa id to pathway id",
						"url": "http://rest.kegg.jp/link/pathway/{hsa}",
						"method": "REST",
						"attributes": [
							{
								"label": "hsa",
								"name": "hsa",
								"type": "string",
								"value": "gene",
								"required": true,
								"shown": true,
								"example": "hsa:217",
								"attributeType": "input",
								"description": "hsa",
								"from": "pathrnommu"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"selected": false,
							"id": "j7_1",
							"children": [
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_2",
									"children": []
								},
								{
									"text": "pathway",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_3",
									"children": []
								}
							]
						},
						"fileName": "KEGG hsa to pathway id.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "KEGG hsa to pathway id",
						"wrapper": {
							"wrapperName": "textTableWrapper",
							"separator": "\\t",
							"headers": [
								"hsa",
								"pathway"
							],
							"resultContainHeaderInfo": "false"
						}
					}
				}
			]
		},
		{
			"id": "cb04a493-d8c7-4009-953a-756fa06d46b7",
			"x": 117.75303581328197,
			"y": 147.57219111936706,
			"label": "",
			"timestamp": 1519006481697,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG hsa to pathway id.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG hsa to pathway id",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"hsa",
							"pathway"
						],
						"resultContainHeaderInfo": "false"
					}
				},
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "facc4b70-40b7-fab4-5d68-02441997b4a4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"jsUrlReturnFileSchema": {
						"text": "pathrnommu.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "rno",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "mmu",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "id",
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
					"urlReturnFileName": "mmupath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "ac834d2d-396a-e6f4-4218-baa069945481",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"mmupath"
					],
					"outputFileTypes": [
						"SQL"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
						"resourceType": "REST",
						"organization": "Kanehisa Laboratories",
						"resourceName": "KEGG hsa to pathway id",
						"description": "convert hsa id to pathway id",
						"url": "http://rest.kegg.jp/link/pathway/{hsa}",
						"method": "REST",
						"attributes": [
							{
								"label": "hsa",
								"name": "hsa",
								"type": "string",
								"value": "gene",
								"required": true,
								"shown": true,
								"example": "hsa:217",
								"attributeType": "input",
								"description": "hsa",
								"from": "pathrnommu"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"selected": false,
							"id": "j7_1",
							"children": [
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_2",
									"children": []
								},
								{
									"text": "pathway",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_3",
									"children": []
								}
							]
						},
						"fileName": "KEGG hsa to pathway id.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "KEGG hsa to pathway id",
						"wrapper": {
							"wrapperName": "textTableWrapper",
							"separator": "\\t",
							"headers": [
								"hsa",
								"pathway"
							],
							"resultContainHeaderInfo": "false"
						}
					}
				}
			]
		},
		{
			"id": "6fa56334-7f97-42ab-b184-26badee81018",
			"x": 549.015625,
			"y": 200.53125,
			"label": "",
			"timestamp": 1519006482497,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG hsa to pathway id.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG hsa to pathway id",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"hsa",
							"pathway"
						],
						"resultContainHeaderInfo": "false"
					}
				},
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "facc4b70-40b7-fab4-5d68-02441997b4a4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"jsUrlReturnFileSchema": {
						"text": "pathrnommu.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "rno",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "mmu",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "id",
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
					"urlReturnFileName": "rnopath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "1e4f1a76-16ab-492f-9998-51826e2b8c0f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"rnopath"
					],
					"outputFileTypes": [
						"SQL"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
						"resourceType": "REST",
						"organization": "Kanehisa Laboratories",
						"resourceName": "KEGG hsa to pathway id",
						"description": "convert hsa id to pathway id",
						"url": "http://rest.kegg.jp/link/pathway/{hsa}",
						"method": "REST",
						"attributes": [
							{
								"label": "hsa",
								"name": "hsa",
								"type": "string",
								"value": "gene",
								"required": true,
								"shown": true,
								"example": "hsa:217",
								"attributeType": "input",
								"description": "hsa",
								"from": "pathrnommu"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"selected": false,
							"id": "j7_1",
							"children": [
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_2",
									"children": []
								},
								{
									"text": "pathway",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_3",
									"children": []
								}
							]
						},
						"fileName": "KEGG hsa to pathway id.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "KEGG hsa to pathway id",
						"wrapper": {
							"wrapperName": "textTableWrapper",
							"separator": "\\t",
							"headers": [
								"hsa",
								"pathway"
							],
							"resultContainHeaderInfo": "false"
						}
					}
				}
			]
		},
		{
			"id": "fe6ee40e-662c-40a2-8a71-5ef641296a17",
			"x": 99.515625,
			"y": 293.13125,
			"label": "",
			"timestamp": 1519008024078,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "mmupath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "ac834d2d-396a-e6f4-4218-baa069945481",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "rnopath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "1e4f1a76-16ab-492f-9998-51826e2b8c0f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsapath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "1b662509-7d79-c39e-f201-c6f915c2aef7",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsasamemmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "64060b89-418b-b166-536b-9b100ff220c1",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffmmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "2db45751-9981-a81a-5523-8535912df57f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsasamerno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "580dfe60-9d5b-53a7-53ad-76b4df246ffd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffrno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "8771faab-6510-e32a-4868-80ffcb8146fe",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "1ee224ff-6ee3-99eb-a931-e74595334933",
					"act": "Code",
					"val": "drop table if exists hsawhole;\ncreate table hsawhole as \nselect   hsapath.pathway , (substring(hsapath.pathway, 9, 6)) geneid, (@nh := @nh + 1) id\nfrom  hsapath hsapath\n inner join\n  (select (@nh := 0)) m\n;\ndelete  h1\nfrom  hsawhole h1, hsawhole h2\nwhere  h1.geneid = h2.geneid and h1.id > h2.id ;\ndrop table if exists hsadict;\ncreate table hsadict\nselect * from hsawhole;\n;\ndrop table if exists mmuwhole;\ncreate table mmuwhole as \nselect   mmupath.pathway , (substring(mmupath.pathway, 9, 6)) geneid, (@nm := @nm + 1) id\nfrom  mmupath mmupath\n inner join\n  (select (@nm := 0)) m\n;\ndelete  m1\nfrom  mmuwhole m1, mmuwhole m2\nwhere  m1.geneid = m2.geneid and m1.id > m2.id ;\ndrop table if exists mmudict;\ncreate table mmudict\nselect * from mmuwhole;\n;\ndrop table if exists hsasamemmu;\ncreate table hsasamemmu as \nselect  (hsadict.pathway) pathway\nfrom  hsadict hsadict, mmudict mmudict\nwhere  mmudict.geneid = hsadict.geneid \n;\ndrop table if exists hsadiffmmu;\ncreate table hsadiffmmu as \nselect hsadict.pathway\nfrom  hsadict hsadict\nwhere not exists (select geneid from mmudict where hsadict.geneid = geneid) union select mmudict.pathway from mmudict mmudict where not exists (select geneid from hsadict where hsadict.geneid = geneid)\n; \ndrop table if exists rnowhole;\ncreate table rnowhole as \nselect   rnopath.pathway , (substring(rnopath.pathway, 9, 6)) geneid, (@nr := @nr + 1) id\nfrom  rnopath rnopath\n inner join\n  (select (@nr := 0)) m\n;\ndelete  r1\nfrom  rnowhole r1, rnowhole r2\nwhere  r1.geneid = r2.geneid and r1.id > r2.id ;\ndrop table if exists rnodict;\ncreate table rnodict\nselect * from rnowhole;\n;\ndrop table if exists hsasamerno;\ncreate table hsasamerno as \nselect  (hsadict.pathway) pathway\nfrom  hsadict hsadict, rnodict rnodict\nwhere  rnodict.geneid = hsadict.geneid \n;\ndrop table if exists hsadiffrno;\ncreate table hsadiffrno as \nselect hsadict.pathway\nfrom  hsadict hsadict\nwhere not exists (select geneid from rnodict where hsadict.geneid = geneid) union select rnodict.pathway from rnodict rnodict where not exists (select geneid from hsadict where hsadict.geneid = geneid)\n; \n\n\n\n\n\n\n\n",
					"codeType": "sql",
					"codeName": "comparetables",
					"inputFileNames": [
						"hsapath",
						"mmupath",
						"rnopath"
					],
					"outputFileNames": [
						"hsasamemmu",
						"hsadiffmmu",
						"hsasamerno",
						"hsadiffrno"
					],
					"outputFileTypes": [
						"SQL",
						"SQL",
						"SQL",
						"SQL"
					]
				}
			]
		},
		{
			"id": "34ce00f6-d833-4a5b-9162-97ec72dc560a",
			"x": 72.59342784551109,
			"y": 531.7734273648515,
			"label": "",
			"timestamp": 1519010789907,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsasamemmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "64060b89-418b-b166-536b-9b100ff220c1",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffmmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "2db45751-9981-a81a-5523-8535912df57f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsasamerno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "580dfe60-9d5b-53a7-53ad-76b4df246ffd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffrno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "8771faab-6510-e32a-4868-80ffcb8146fe",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "facc4b70-40b7-fab4-5d68-02441997b4a4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "e497b9fc-4636-2e51-aed3-afe3ebba5c87",
					"act": "print",
					"outputFileNames": [
						"hsasamemmu"
					],
					"printType": "table",
					"resourceid": "64060b89-418b-b166-536b-9b100ff220c1",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				},
				{
					"id": "ba606363-1fd5-343a-5e40-dc214cb13d97",
					"act": "print",
					"outputFileNames": [
						"hsadiffmmu"
					],
					"printType": "table",
					"resourceid": "2db45751-9981-a81a-5523-8535912df57f",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				},
				{
					"id": "ebee98b8-919e-9860-6e0f-5ea1937b2d0e",
					"act": "print",
					"outputFileNames": [
						"hsasamerno"
					],
					"printType": "table",
					"resourceid": "580dfe60-9d5b-53a7-53ad-76b4df246ffd",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				},
				{
					"id": "1f77a7fa-d383-18d2-4767-a99ba84361fa",
					"act": "print",
					"outputFileNames": [
						"hsadiffrno"
					],
					"printType": "table",
					"resourceid": "8771faab-6510-e32a-4868-80ffcb8146fe",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				},
				{
					"id": "cc455c82-4cf3-5259-a9d3-32052c95e1b4",
					"act": "print",
					"outputFileNames": [
						"pathrnommu"
					],
					"printType": "table",
					"resourceid": "facc4b70-40b7-fab4-5d68-02441997b4a4",
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
			"from": "ac52be6f-f354-4498-9562-fe2f23011101",
			"to": "8cee6a23-97b8-42b8-8a66-6c654b86431a",
			"id": "de5491a7-42a4-4544-b83a-3459c8999de8",
			"arrows": "to",
			"label": "KEGG orthology\nhumangenes.csv\n",
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_3",
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
								"children": []
							}
						]
					},
					"fileName": "humangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "humangenes.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "8cee6a23-97b8-42b8-8a66-6c654b86431a",
			"to": "e39dd2f5-98af-4fd3-8806-b7f64f876c24",
			"id": "3bd180f6-3079-42c2-863e-4bab158e2dbb",
			"arrows": "to",
			"label": "orthology.csv\n",
			"resources": [
				{
					"urlReturnFileName": "orthology.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j9_3",
								"children": []
							}
						]
					},
					"id": "5b23e1da-cc92-e215-44f2-146c9d1e5f76",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "ac52be6f-f354-4498-9562-fe2f23011101",
			"to": "e39dd2f5-98af-4fd3-8806-b7f64f876c24",
			"id": "a4e1e077-1b01-468d-b908-5ee013b38cab",
			"arrows": "to",
			"label": "KEGG Genes\n",
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_3",
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
			"libraries": []
		},
		{
			"from": "ac52be6f-f354-4498-9562-fe2f23011101",
			"to": "8cb3d5cc-1b9c-4eb0-8e92-256e7c867dda",
			"id": "d2b693de-29c3-422a-ba86-425ff3c9385a",
			"arrows": "to",
			"label": "humangenes.csv\n",
			"resources": [
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
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
								"children": []
							}
						]
					},
					"fileName": "humangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "humangenes.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "e39dd2f5-98af-4fd3-8806-b7f64f876c24",
			"to": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
			"id": "e946846b-3e2d-41df-ad83-f13fbf45f8ec",
			"arrows": "to",
			"label": "orthologygen.csv\n",
			"resources": [
				{
					"urlReturnFileName": "orthologygen.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_3",
								"children": []
							}
						]
					},
					"id": "9f6c4358-a736-1251-cdc1-63fe3ef420b4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "8cb3d5cc-1b9c-4eb0-8e92-256e7c867dda",
			"to": "fe69c1c3-d9b5-4c6a-8e59-27c63e7a7e6b",
			"id": "c5a0e49f-5bbc-435e-9345-e058789612c3",
			"arrows": "to",
			"label": "hsagenes.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsagenes.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "5ee1a0b5-8299-4a69-231c-c5fd4ce16ed2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
			"to": "fe69c1c3-d9b5-4c6a-8e59-27c63e7a7e6b",
			"id": "747507fb-1038-454f-8af8-b3f4c48ed050",
			"arrows": "to",
			"label": "hsarnommu\n",
			"resources": [
				{
					"urlReturnFileName": "hsarnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "2c1786c4-0659-931d-8676-4b9709cd1cc7",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "fe719230-985c-445e-a9ad-eea9c7f4d848",
			"to": "f0b5b947-5afc-4c1f-b95d-1c6ee5953389",
			"id": "6446f4e7-b3be-4709-a454-0ffdb0ef220e",
			"arrows": "to",
			"label": "KEGG hsa to pathway id\n",
			"resources": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG hsa to pathway id.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG hsa to pathway id",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"hsa",
							"pathway"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "fe719230-985c-445e-a9ad-eea9c7f4d848",
			"to": "cb04a493-d8c7-4009-953a-756fa06d46b7",
			"id": "b704ca62-ed55-4e54-b8d2-f9797deb0c6a",
			"arrows": "to",
			"label": "KEGG hsa to pathway id\n",
			"resources": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG hsa to pathway id.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG hsa to pathway id",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"hsa",
							"pathway"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "fe719230-985c-445e-a9ad-eea9c7f4d848",
			"to": "6fa56334-7f97-42ab-b184-26badee81018",
			"id": "ca059dd8-7df9-4435-8b1f-317ec2365da1",
			"arrows": "to",
			"label": "KEGG hsa to pathway id\n",
			"resources": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG hsa to pathway id.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG hsa to pathway id",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"hsa",
							"pathway"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "fe69c1c3-d9b5-4c6a-8e59-27c63e7a7e6b",
			"to": "6fa56334-7f97-42ab-b184-26badee81018",
			"id": "051c298e-c000-409b-ab26-79b4e9b623a8",
			"arrows": "to",
			"label": "pathrnommu\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "facc4b70-40b7-fab4-5d68-02441997b4a4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "fe69c1c3-d9b5-4c6a-8e59-27c63e7a7e6b",
			"to": "cb04a493-d8c7-4009-953a-756fa06d46b7",
			"id": "a2f6d388-7c92-4df3-aa7e-09663b959caf",
			"arrows": "to",
			"label": "pathrnommu\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "facc4b70-40b7-fab4-5d68-02441997b4a4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "fe69c1c3-d9b5-4c6a-8e59-27c63e7a7e6b",
			"to": "f0b5b947-5afc-4c1f-b95d-1c6ee5953389",
			"id": "39007a5f-ca5f-4089-93a6-2844bb31b6f9",
			"arrows": "to",
			"label": "pathrnommu\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "facc4b70-40b7-fab4-5d68-02441997b4a4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "f0b5b947-5afc-4c1f-b95d-1c6ee5953389",
			"to": "fe6ee40e-662c-40a2-8a71-5ef641296a17",
			"id": "75921d1c-2c26-4618-a6b1-8dca611f4e69",
			"arrows": "to",
			"label": "hsapath\n",
			"resources": [
				{
					"urlReturnFileName": "hsapath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "1b662509-7d79-c39e-f201-c6f915c2aef7",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "cb04a493-d8c7-4009-953a-756fa06d46b7",
			"to": "fe6ee40e-662c-40a2-8a71-5ef641296a17",
			"id": "e89eb119-4f3a-4e15-a22a-c0ad3d7cb6c7",
			"arrows": "to",
			"label": "mmupath\n",
			"resources": [
				{
					"urlReturnFileName": "mmupath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "ac834d2d-396a-e6f4-4218-baa069945481",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "6fa56334-7f97-42ab-b184-26badee81018",
			"to": "fe6ee40e-662c-40a2-8a71-5ef641296a17",
			"id": "c6213a6d-586d-42c4-a8c7-d2c9862ae179",
			"arrows": "to",
			"label": "rnopath\n",
			"resources": [
				{
					"urlReturnFileName": "rnopath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "1e4f1a76-16ab-492f-9998-51826e2b8c0f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "fe69c1c3-d9b5-4c6a-8e59-27c63e7a7e6b",
			"to": "34ce00f6-d833-4a5b-9162-97ec72dc560a",
			"id": "e681df79-f136-43a4-a890-fd102ce06eac",
			"arrows": "to",
			"label": "pathrnommu\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "facc4b70-40b7-fab4-5d68-02441997b4a4",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "fe6ee40e-662c-40a2-8a71-5ef641296a17",
			"to": "34ce00f6-d833-4a5b-9162-97ec72dc560a",
			"id": "ee3c5aa2-8702-4556-9430-d927b82d2093",
			"arrows": "to",
			"label": "hsasamemmu\nhsadiffmmu\nhsasamerno\nhsadiffrno\n",
			"resources": [
				{
					"urlReturnFileName": "hsasamemmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "64060b89-418b-b166-536b-9b100ff220c1",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffmmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "2db45751-9981-a81a-5523-8535912df57f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsasamerno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "580dfe60-9d5b-53a7-53ad-76b4df246ffd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffrno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "8771faab-6510-e32a-4868-80ffcb8146fe",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		}
	]
}