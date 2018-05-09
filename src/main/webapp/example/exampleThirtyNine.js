var exampleThirtyNine = {
	"nodes": [
		{
			"id": "08e6377d-9979-4839-8499-1cd53ab3db81",
			"x": -61.6875,
			"y": -54.65625,
			"label": "humangenes.csv\nKEGG orthology\nKEGG Genes\n",
			"timestamp": 1518479209609,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
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
						"id": "j16_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j16_2",
								"children": []
							}
						]
					},
					"fileName": "humangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "humangenes.csv"
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
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<id></id>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j6_2",
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
						"id": "j5_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
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
			"resourcesIn": [],
			"resourcesOut": [
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
						"id": "j16_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j16_2",
								"children": []
							}
						]
					},
					"fileName": "humangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "humangenes.csv"
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
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<id></id>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j6_2",
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
						"id": "j5_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
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
			"font": {
				"align": "left"
			}
		},
		{
			"id": "8806e435-9c49-4a51-8161-c1cc62120b72",
			"x": -225.3986286197218,
			"y": 105.06332859292807,
			"label": "",
			"timestamp": 1518479239724,
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
						"id": "j16_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j16_2",
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
					"id": "e88374c4-df86-3090-6ad5-50949adbe678",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "ade8e68b-2a34-dc55-e423-422f84cd53be",
					"act": "Code",
					"val": "SET SQL_SAFE_UPDATES = 0;\nupdate humangenes set gene = concat('hsa:', gene);\nSET SQL_SAFE_UPDATES = 1;",
					"codeType": "sql",
					"codeName": "addprefix.sql",
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
			"id": "2da6797c-2f59-438b-aebf-54163566bcfd",
			"x": 268.1648661879185,
			"y": -8.138763454224677,
			"label": "",
			"timestamp": 1518490933002,
			"type": "analytics",
			"image": "image/analytics.png",
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
						"id": "j16_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j16_2",
								"children": []
							}
						]
					},
					"fileName": "humangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "humangenes.csv"
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
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<id></id>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j6_2",
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
						"id": "j6_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j6_2",
								"children": []
							}
						]
					},
					"id": "f29a816d-30f3-934b-7c44-e5c1779d027e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
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
						"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<id></id>\r\n\t\t</KEGG&#x20;orthology>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;orthology",
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"selected": false,
							"id": "j6_1",
							"children": [
								{
									"text": "id",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j6_2",
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
			"id": "f5ed9b04-5e34-4176-8a2d-18ccb1b136d1",
			"x": 157.02321823232845,
			"y": 126.5387628919609,
			"label": "",
			"timestamp": 1518491243041,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
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
						"id": "j5_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
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
					"urlReturnFileName": "orthology.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j6_2",
								"children": []
							}
						]
					},
					"id": "f29a816d-30f3-934b-7c44-e5c1779d027e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
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
						"id": "j5_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
								"children": []
							}
						]
					},
					"id": "65441e53-10dd-69dc-0961-f0a6b42616a9",
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
							"id": "j5_1",
							"children": [
								{
									"text": "ko",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_2",
									"children": []
								},
								{
									"text": "gene",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j5_3",
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
			"id": "c368ca1d-3db6-4324-9853-1746cd2c38e2",
			"x": -276.2788779354686,
			"y": 269.1894198556171,
			"label": "",
			"timestamp": 1518501679028,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsagenes.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e88374c4-df86-3090-6ad5-50949adbe678",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsarnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "aa8298aa-3e60-d34e-b144-3e0ac5e1c4fd",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathrnommures.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c518cb14-c8dc-22b7-b098-46b2c89669ad",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "4ee0f20d-0264-25b2-fbbb-e97bfaded303",
					"act": "Code",
					"val": "\t\ndrop table if exists pathrnommures;\ncreate table pathrnommures as\nselect r.gene, q.rno, q.mmu, (@n :=@n + 1) as id\nfrom \n\thumangenes r \n    join\n    hsarnommu q\n    on r.gene = q.hsa\ncross join (select @n := 0) m",
					"codeType": "sql",
					"codeName": "generatepathrnommu.sql",
					"inputFileNames": [
						"hsagenes.csv",
						"hsarnommu.csv"
					],
					"outputFileNames": [
						"pathrnommures.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
		},
		{
			"id": "8eee004d-38a0-4706-a5a9-a149ced07382",
			"x": 269.4541977007773,
			"y": 299.84387143782385,
			"label": "KEGG hsa to pathway id\n",
			"timestamp": 1518503797336,
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
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
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
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
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
			"id": "4c197ba5-f4b0-41c2-aeb6-f252ce2bad2a",
			"x": -251.59125500000002,
			"y": 548.3976140000001,
			"label": "",
			"timestamp": 1518503815977,
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
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
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
					"urlReturnFileName": "pathrnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7469337b-3b45-6880-6266-a6bd0b493813",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsapath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "8034a81b-690b-a326-e93d-145e8cbe2ddb",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
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
						"hsapath.csv"
					],
					"outputFileTypes": [
						"CSV"
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
								"from": "pathrnommu.csv"
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
							"id": "j13_1",
							"children": [
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j13_2",
									"children": []
								},
								{
									"text": "pathway",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j13_3",
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
			"id": "9e0e9e67-4c67-4eeb-a2a7-edbd9d551744",
			"x": 191.29899500000005,
			"y": 592.686639,
			"label": "",
			"timestamp": 1518503818644,
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
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
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
					"urlReturnFileName": "pathrnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7469337b-3b45-6880-6266-a6bd0b493813",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "mmupath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "25fe1dce-3bec-d888-935b-111d0860e9cd",
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
						"mmupath.csv"
					],
					"outputFileTypes": [
						"CSV"
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
								"value": "mmu",
								"required": true,
								"shown": true,
								"example": "hsa:217",
								"attributeType": "input",
								"description": "hsa",
								"from": "pathrnommu.csv"
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
							"id": "j13_1",
							"children": [
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j13_2",
									"children": []
								},
								{
									"text": "pathway",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j13_3",
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
			"id": "51d6bac9-0542-4956-ae94-d461d2552ad8",
			"x": 604.0727080000001,
			"y": 537.7682480000001,
			"label": "",
			"timestamp": 1518503819572,
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
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
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
					"urlReturnFileName": "pathrnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7469337b-3b45-6880-6266-a6bd0b493813",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "rnopath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "521d1b7a-4898-b8d8-e829-fa6ab5a85a3e",
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
						"rnopath.csv"
					],
					"outputFileTypes": [
						"CSV"
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
								"value": "rno",
								"required": true,
								"shown": true,
								"example": "hsa:217",
								"attributeType": "input",
								"description": "hsa",
								"from": "pathrnommu.csv"
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
							"id": "j13_1",
							"children": [
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j13_2",
									"children": []
								},
								{
									"text": "pathway",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j13_3",
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
			"id": "a9d429df-fb32-4a43-b717-b7f6f0b4b09d",
			"x": -215.06158559231176,
			"y": 810.1088926691605,
			"label": "",
			"timestamp": 1518504749007,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsapath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "8034a81b-690b-a326-e93d-145e8cbe2ddb",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				},
				{
					"urlReturnFileName": "mmupath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "25fe1dce-3bec-d888-935b-111d0860e9cd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsasamemmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "84e53b93-dbb5-baf6-ff95-c5931c80d769",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				},
				{
					"urlReturnFileName": "hsadiffmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "522f19cf-f6ed-af7b-45ce-073064888559",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "38ba2663-c5de-07e0-fa73-4417e6873acf",
					"act": "Code",
					"val": "drop table if exists hsadict;\ncreate table hsadict as\nSELECT DISTINCT pathway, substring(h.pathway, 9, 6) as id\nFROM hsapath h;\n\ndrop table if exists mmudict;\ncreate table mmudict as\nSELECT DISTINCT pathway, substring(m.pathway, 9, 6) as id\nFROM mmupath m;\n\ndrop table if exists hsasamemmu;\ncreate table hsasamemmu as\nselect h.pathway\nfrom hsadict h \njoin mmudict m on h.id = m.id;\n\ndrop table if exists hsadiffmmu;\ncreate table hsadiffmmu as\nselect h.pathway \nfrom hsadict h \nwhere not exists (select id from mmudict where h.id = id)\nunion\nselect m.pathway \nfrom mmudict m \nwhere not exists (select id from hsadict where m.id = id);",
					"codeType": "sql",
					"codeName": "generateDiffandSame.sql",
					"inputFileNames": [
						"hsapath.csv",
						"mmupath.csv"
					],
					"outputFileNames": [
						"hsasamemmu.csv",
						"hsadiffmmu.csv"
					],
					"outputFileTypes": [
						"CSV",
						"CSV"
					]
				}
			]
		},
		{
			"id": "e887dc3a-65c8-4360-b15c-873c4620d6d7",
			"x": 443.82206361629187,
			"y": 777.3292619513468,
			"label": "",
			"timestamp": 1518507666378,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "rnopath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "521d1b7a-4898-b8d8-e829-fa6ab5a85a3e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsapath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "8034a81b-690b-a326-e93d-145e8cbe2ddb",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsasamerno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "91bc9879-7139-b242-4ee4-bf6b3e62933d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffrno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "354f25ce-257a-5990-f5f7-42a8e321c8db",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "ad56e75c-b129-228d-1275-5cc7f1e20da6",
					"act": "Code",
					"val": "drop table if exists hsadict;\ncreate table hsadict as\nSELECT DISTINCT pathway, substring(h.pathway, 9, 6) as id\nFROM hsapath h;\n\ndrop table if exists rnodict;\ncreate table rnodict as\nSELECT DISTINCT pathway, substring(r.pathway, 9, 6) as id\nFROM rnopath r;\n\ndrop table if exists hsasamerno;\ncreate table hsasamerno as\nselect h.pathway\nfrom hsadict h \njoin rnodict r on h.id = r.id;\n\ndrop table if exists hsadiffrno;\ncreate table hsadiffrno as\nselect h.pathway \nfrom hsadict h \nwhere not exists (select id from rnodict where h.id = id)\nunion\nselect r.pathway \nfrom rnodict r \nwhere not exists (select id from hsadict where r.id = id);",
					"codeType": "sql",
					"codeName": "generatehsatorno.sql",
					"inputFileNames": [
						"hsapath.csv",
						"rnopath.csv"
					],
					"outputFileNames": [
						"hsasamerno.csv",
						"hsadiffrno.csv"
					],
					"outputFileTypes": [
						"CSV",
						"CSV"
					]
				}
			]
		},
		{
			"id": "8fdf9dbf-9351-4409-b76a-65646ed9670e",
			"x": 163.32160324060058,
			"y": 874.2600654885335,
			"label": "",
			"timestamp": 1518507910802,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsasamemmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "84e53b93-dbb5-baf6-ff95-c5931c80d769",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				},
				{
					"urlReturnFileName": "hsadiffmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "522f19cf-f6ed-af7b-45ce-073064888559",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				},
				{
					"urlReturnFileName": "hsasamerno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "91bc9879-7139-b242-4ee4-bf6b3e62933d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffrno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "354f25ce-257a-5990-f5f7-42a8e321c8db",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "pathrnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7469337b-3b45-6880-6266-a6bd0b493813",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"outputFileNames": [
						"hsasamemmu.csv"
					],
					"printType": "file",
					"numOfWins": "2",
					"submit": {
						"windowFunction": [
							"PathWay",
							"PathWay"
						],
						"values": [
							[
								""
							],
							[
								""
							]
						]
					},
					"colFuns": []
				},
				{
					"outputFileNames": [
						"hsadiffmmu.csv"
					],
					"printType": "file",
					"numOfWins": "2",
					"submit": {
						"windowFunction": [
							"PathWay",
							"PathWay"
						],
						"values": [
							[
								""
							],
							[
								""
							]
						]
					},
					"colFuns": []
				},
				{
					"outputFileNames": [
						"hsasamerno.csv"
					],
					"printType": "file",
					"numOfWins": "2",
					"submit": {
						"windowFunction": [
							"PathWay",
							"PathWay"
						],
						"values": [
							[
								""
							],
							[
								""
							]
						]
					},
					"colFuns": []
				},
				{
					"outputFileNames": [
						"hsadiffrno.csv"
					],
					"printType": "file",
					"numOfWins": "2",
					"submit": {
						"windowFunction": [
							"PathWay",
							"PathWay"
						],
						"values": [
							[
								""
							],
							[
								""
							]
						]
					},
					"colFuns": []
				},
				{
					"id": "d0f6fb51-deea-a42c-7322-c55afd8d2fed",
					"act": "print",
					"outputFileNames": [
						"pathrnommu.csv"
					],
					"printType": "file",
					"resourceid": "89edfc0d-39cd-6ead-4050-8786cc2ff36b",
					"numOfWins": "2",
					"submit": {
						"windowFunction": [
							"PathWay",
							"PathWay"
						],
						"values": [
							[
								""
							],
							[
								""
							]
						]
					},
					"colFuns": []
				}
			]
		},
		{
			"id": "c10fc732-59b2-4f02-81e9-4c7afcb1dae8",
			"x": -24.827225295634705,
			"y": 256.21908026951644,
			"label": "",
			"timestamp": 1518509724128,
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
						"id": "j5_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
								"children": []
							}
						]
					},
					"id": "65441e53-10dd-69dc-0961-f0a6b42616a9",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsarnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "aa8298aa-3e60-d34e-b144-3e0ac5e1c4fd",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "f51bd1eb-ebf3-5ea9-abea-397184b5a1af",
					"act": "Code",
					"val": "drop table if exists hsarnommu;\ncreate table hsarnommu as\nselect h.hsa, r.rno, q.mmu\nfrom (select (@nh := @nh + 1) as id, o1.gene as hsa \n      from orthologygen o1 cross join\n           (select @nh := 0) m\n      where gene like 'hsa%'\n     ) h join  \n     (select (@nr := @nr + 1) as id, o2.gene as rno \n      from orthologygen o2 cross join\n           (select @nr := 0) m\n      where gene like 'rno%'\n     ) r\n     on r.id = h.id\n     join  \n     (select (@nq := @nq + 1) as id, o3.gene as mmu \n      from orthologygen o3 cross join\n           (select @nq := 0) m\n      where gene like 'mmu%'\n     ) q\n     on h.id = q.id",
					"codeType": "sql",
					"codeName": "createhsarnommutable.sql",
					"inputFileNames": [
						"orthologygen.csv"
					],
					"outputFileNames": [
						"hsarnommu.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
		},
		{
			"id": "4d7362f7-6ad7-47f8-81b4-3ae76b2344d6",
			"x": -261.6512558289857,
			"y": 399.2618250889825,
			"label": "",
			"timestamp": 1518510283973,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathrnommures.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c518cb14-c8dc-22b7-b098-46b2c89669ad",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathrnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7469337b-3b45-6880-6266-a6bd0b493813",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "47d6295d-3c90-e4f4-f8d1-65c10ed164a1",
					"act": "Code",
					"val": "SET SQL_SAFE_UPDATES = 0;\nDelete p1 from pathrnommures p1, pathrnommures p2\nwhere p1.gene = p2.gene and p1.id > p2.id; \nSET SQL_SAFE_UPDATES = 1;\ndrop table if exists pathrnommu;\ncreate table pathrnommu\nselect * from pathrnommures;",
					"codeType": "sql",
					"codeName": "generatethepathrnoresult.sql",
					"inputFileNames": [
						"pathrnommures.csv"
					],
					"outputFileNames": [
						"pathrnommu.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
		}
	],
	"edges": [
		{
			"from": "08e6377d-9979-4839-8499-1cd53ab3db81",
			"to": "8806e435-9c49-4a51-8161-c1cc62120b72",
			"id": "6ab9ff24-07db-4ca1-8df3-ab618c768ca2",
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
						"id": "j16_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j16_2",
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
			"from": "08e6377d-9979-4839-8499-1cd53ab3db81",
			"to": "2da6797c-2f59-438b-aebf-54163566bcfd",
			"id": "649ba846-d6a3-444d-b71d-8bcaca90bd4e",
			"arrows": "to",
			"label": "humangenes.csv\nKEGG orthology\n",
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
						"id": "j16_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j16_2",
								"children": []
							}
						]
					},
					"fileName": "humangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "humangenes.csv"
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
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<id></id>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j6_2",
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
			],
			"libraries": []
		},
		{
			"from": "08e6377d-9979-4839-8499-1cd53ab3db81",
			"to": "f5ed9b04-5e34-4176-8a2d-18ccb1b136d1",
			"id": "9b81de69-aee6-4fbc-b67b-77688e00b369",
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
						"id": "j5_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
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
			"from": "2da6797c-2f59-438b-aebf-54163566bcfd",
			"to": "f5ed9b04-5e34-4176-8a2d-18ccb1b136d1",
			"id": "cebc6a1d-2a2e-4b61-859d-14fba26ccac8",
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
						"id": "j6_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j6_2",
								"children": []
							}
						]
					},
					"id": "f29a816d-30f3-934b-7c44-e5c1779d027e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "8806e435-9c49-4a51-8161-c1cc62120b72",
			"to": "c368ca1d-3db6-4324-9853-1746cd2c38e2",
			"id": "b4cd8ee7-22a4-49d3-b27a-3f524590d2e0",
			"arrows": "to",
			"label": "hsagenes.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsagenes.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e88374c4-df86-3090-6ad5-50949adbe678",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "8eee004d-38a0-4706-a5a9-a149ced07382",
			"to": "4c197ba5-f4b0-41c2-aeb6-f252ce2bad2a",
			"id": "3a3930cd-745d-4bb1-9b0d-efb8f027b7e3",
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
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
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
			"from": "8eee004d-38a0-4706-a5a9-a149ced07382",
			"to": "9e0e9e67-4c67-4eeb-a2a7-edbd9d551744",
			"id": "056a0fb3-802a-4252-a3f0-1e3faaf5832e",
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
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
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
			"from": "8eee004d-38a0-4706-a5a9-a149ced07382",
			"to": "51d6bac9-0542-4956-ae94-d461d2552ad8",
			"id": "eea09401-2827-4d58-8ecf-96a9a6b0f55d",
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
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
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
			"from": "4c197ba5-f4b0-41c2-aeb6-f252ce2bad2a",
			"to": "a9d429df-fb32-4a43-b717-b7f6f0b4b09d",
			"id": "9e425143-ba53-43fd-a0ba-9a03d65cbca4",
			"arrows": "to",
			"label": "hsapath.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsapath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "8034a81b-690b-a326-e93d-145e8cbe2ddb",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "9e0e9e67-4c67-4eeb-a2a7-edbd9d551744",
			"to": "a9d429df-fb32-4a43-b717-b7f6f0b4b09d",
			"id": "ab7d25c4-8ab7-4819-8082-3b4edacea57c",
			"arrows": "to",
			"label": "mmupath.csv\n",
			"resources": [
				{
					"urlReturnFileName": "mmupath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "25fe1dce-3bec-d888-935b-111d0860e9cd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "51d6bac9-0542-4956-ae94-d461d2552ad8",
			"to": "e887dc3a-65c8-4360-b15c-873c4620d6d7",
			"id": "54001ed7-603b-4c37-8431-9a88adbcb9c6",
			"arrows": "to",
			"label": "rnopath.csv\n",
			"resources": [
				{
					"urlReturnFileName": "rnopath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "521d1b7a-4898-b8d8-e829-fa6ab5a85a3e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "4c197ba5-f4b0-41c2-aeb6-f252ce2bad2a",
			"to": "e887dc3a-65c8-4360-b15c-873c4620d6d7",
			"id": "30c56504-8507-4bf0-ba08-4cc10df81bed",
			"arrows": "to",
			"label": "hsapath.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsapath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"id": "8034a81b-690b-a326-e93d-145e8cbe2ddb",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "a9d429df-fb32-4a43-b717-b7f6f0b4b09d",
			"to": "8fdf9dbf-9351-4409-b76a-65646ed9670e",
			"id": "675c3abb-edad-4049-9133-dce5cace40f0",
			"arrows": "to",
			"label": "hsasamemmu.csv\nhsadiffmmu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsasamemmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "84e53b93-dbb5-baf6-ff95-c5931c80d769",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				},
				{
					"urlReturnFileName": "hsadiffmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "522f19cf-f6ed-af7b-45ce-073064888559",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "e887dc3a-65c8-4360-b15c-873c4620d6d7",
			"to": "8fdf9dbf-9351-4409-b76a-65646ed9670e",
			"id": "ef4f9e52-b9f3-4ed8-962d-1c148019867d",
			"arrows": "to",
			"label": "hsasamerno.csv\nhsadiffrno.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsasamerno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "91bc9879-7139-b242-4ee4-bf6b3e62933d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffrno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "354f25ce-257a-5990-f5f7-42a8e321c8db",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "f5ed9b04-5e34-4176-8a2d-18ccb1b136d1",
			"to": "c10fc732-59b2-4f02-81e9-4c7afcb1dae8",
			"id": "d7705274-642e-4983-b182-1d1881b7caf5",
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
						"id": "j5_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
								"children": []
							}
						]
					},
					"id": "65441e53-10dd-69dc-0961-f0a6b42616a9",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "c10fc732-59b2-4f02-81e9-4c7afcb1dae8",
			"to": "c368ca1d-3db6-4324-9853-1746cd2c38e2",
			"id": "20c9a657-bfef-445a-99b1-f4839e2211bc",
			"arrows": "to",
			"label": "hsarnommu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsarnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "aa8298aa-3e60-d34e-b144-3e0ac5e1c4fd",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "c368ca1d-3db6-4324-9853-1746cd2c38e2",
			"to": "4d7362f7-6ad7-47f8-81b4-3ae76b2344d6",
			"id": "2f97e3c5-049d-444f-9d84-ad852efdf617",
			"arrows": "to",
			"label": "pathrnommures.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommures.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c518cb14-c8dc-22b7-b098-46b2c89669ad",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "4d7362f7-6ad7-47f8-81b4-3ae76b2344d6",
			"to": "4c197ba5-f4b0-41c2-aeb6-f252ce2bad2a",
			"id": "ddce08fb-7bed-4ea4-9046-c32572ab714b",
			"arrows": "to",
			"label": "pathrnommu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7469337b-3b45-6880-6266-a6bd0b493813",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "4d7362f7-6ad7-47f8-81b4-3ae76b2344d6",
			"to": "9e0e9e67-4c67-4eeb-a2a7-edbd9d551744",
			"id": "6fae633e-0e26-428f-b15d-31f7d4a2c093",
			"arrows": "to",
			"label": "pathrnommu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7469337b-3b45-6880-6266-a6bd0b493813",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "4d7362f7-6ad7-47f8-81b4-3ae76b2344d6",
			"to": "51d6bac9-0542-4956-ae94-d461d2552ad8",
			"id": "1d269f93-1b8e-440f-996d-6b895f0cf2c0",
			"arrows": "to",
			"label": "pathrnommu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7469337b-3b45-6880-6266-a6bd0b493813",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "4d7362f7-6ad7-47f8-81b4-3ae76b2344d6",
			"to": "8fdf9dbf-9351-4409-b76a-65646ed9670e",
			"id": "5a1ec88a-1f93-4d19-95c9-5c996e551c6b",
			"arrows": "to",
			"label": "pathrnommu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7469337b-3b45-6880-6266-a6bd0b493813",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		}
	]
}