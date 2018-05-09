var exampleThirtyFive = {
	"nodes": [
		{
			"id": "7069bc87-b44c-475e-a20d-6fc9dff83582",
			"x": 39.320052851841055,
			"y": -327.3067366613583,
			"label": "genes.csv\nKEGG orthology\n",
			"timestamp": 1518211133345,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "e6a0c516-0f6d-48d4-be78-c4d178d60e83",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genes.csv",
					"description": "genes id",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string"
						},
						{
							"label": "geneid",
							"name": "geneid",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<id></id>\r\n\t\t\t\t\t<geneid></geneid>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"fileName": "genes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genes.csv"
				},
				{
					"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "KEGG orthology",
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
							"style": ""
						},
						"selected": false,
						"id": "j12_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j12_2",
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
							"hsa-id",
							"ko-id"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "e6a0c516-0f6d-48d4-be78-c4d178d60e83",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genes.csv",
					"description": "genes id",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string"
						},
						{
							"label": "geneid",
							"name": "geneid",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<id></id>\r\n\t\t\t\t\t<geneid></geneid>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"fileName": "genes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genes.csv"
				},
				{
					"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "KEGG orthology",
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
							"style": ""
						},
						"selected": false,
						"id": "j12_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j12_2",
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
							"hsa-id",
							"ko-id"
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
			"id": "8286d941-d335-459c-999c-2e4140667f62",
			"x": 52.03125,
			"y": -109.578125,
			"label": "",
			"timestamp": 1518214374969,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "e6a0c516-0f6d-48d4-be78-c4d178d60e83",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genes.csv",
					"description": "genes id",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string"
						},
						{
							"label": "geneid",
							"name": "geneid",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<id></id>\r\n\t\t\t\t\t<geneid></geneid>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j6_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j6_3",
								"children": []
							}
						]
					},
					"fileName": "genes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genes.csv"
				},
				{
					"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "KEGG orthology",
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
							"style": ""
						},
						"selected": false,
						"id": "j12_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j12_2",
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
							"hsa-id",
							"ko-id"
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
							"style": ""
						},
						"selected": false,
						"id": "j12_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j12_2",
								"children": []
							}
						]
					},
					"id": "337f62d7-5a1d-3eda-8206-ce9a44181975",
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
						"url": "http://rest.kegg.jp/link/orthology/hsa:{id}",
						"method": "REST",
						"attributes": [
							{
								"label": "id",
								"name": "id",
								"type": "Integer",
								"value": "genes",
								"required": true,
								"shown": true,
								"example": "218",
								"attributeType": "input",
								"description": "gene id",
								"from": "genes.csv"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<id></id>\r\n\t\t</KEGG&#x20;orthology>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;orthology",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j12_1",
							"children": [
								{
									"text": "id",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"selected": false,
									"id": "j12_2",
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
								"hsa-id",
								"ko-id"
							],
							"resultContainHeaderInfo": "false"
						}
					}
				}
			]
		},
		{
			"id": "978100ed-c923-4706-8b33-a1e9ff4f9242",
			"x": -29.765208927859458,
			"y": 15.700125992534911,
			"label": "",
			"timestamp": 1518215439771,
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
							"style": ""
						},
						"selected": false,
						"id": "j12_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j12_2",
								"children": []
							}
						]
					},
					"id": "337f62d7-5a1d-3eda-8206-ce9a44181975",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "KEGG Genes",
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
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<ko-id></ko-id>\r\n\t\t\t<gene></gene>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
									"style": "background-color: rgb(205, 165, 10) !important"
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
							"ko-id",
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
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j8_3",
								"children": []
							}
						]
					},
					"id": "4e070d11-becc-a1d1-fba1-003b12103481",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
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
						"url": "http://rest.kegg.jp/link/genes/{id}",
						"method": "REST",
						"attributes": [
							{
								"label": "id",
								"name": "id",
								"type": "String",
								"value": "ko-id",
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
						"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<ko-id></ko-id>\r\n\t\t\t<gene></gene>\r\n\t\t</KEGG&#x20;orthology>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;orthology",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j8_1",
							"children": [
								{
									"text": "ko-id",
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
										"style": "background-color: rgb(205, 165, 10) !important"
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
								"ko-id",
								"gene"
							],
							"resultContainHeaderInfo": "false"
						}
					}
				}
			]
		},
		{
			"id": "a3ea24c0-0447-44a0-a011-192b87964798",
			"x": -156.23150524680398,
			"y": -118.52483881223442,
			"label": "KEGG Genes\n",
			"timestamp": 1518215448149,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "KEGG Genes",
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
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<ko-id></ko-id>\r\n\t\t\t<gene></gene>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
									"style": "background-color: rgb(205, 165, 10) !important"
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
							"ko-id",
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
					"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "KEGG Genes",
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
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<ko-id></ko-id>\r\n\t\t\t<gene></gene>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
									"style": "background-color: rgb(205, 165, 10) !important"
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
							"ko-id",
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
			"id": "f412bfba-c890-494c-ba00-d08f6ca1434a",
			"x": -324.24087718894566,
			"y": 2.6657986392017037,
			"label": "",
			"timestamp": 1518216059287,
			"type": "analytics",
			"image": "image/analytics.png",
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
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
					"id": "4e070d11-becc-a1d1-fba1-003b12103481",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "rno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "aedacf9a-59d4-2924-535b-d219d1628922",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "c0df8ed9-9546-9e23-ceed-cfab5d05e601",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "orthologygen.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;orthology",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j8_1",
							"children": [
								{
									"text": "ko-id",
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
						"id": "4e070d11-becc-a1d1-fba1-003b12103481",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
					},
					"outputFileNames": [
						"rno.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "gene",
							"name": "rno"
						}
					],
					"newAttrs": [],
					"afterAction": {
						"action": "filter",
						"input": "gene#^(?!.*(rno)).*$"
					}
				}
			]
		},
		{
			"id": "51cc6aaa-a733-407f-a7ca-9a302d9e7e51",
			"x": 144.35113119328926,
			"y": 94.80533764130045,
			"label": "",
			"timestamp": 1518218028168,
			"type": "analytics",
			"image": "image/analytics.png",
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
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
					"id": "4e070d11-becc-a1d1-fba1-003b12103481",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "mmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "67abdb67-a7fe-5773-bd78-62265e5aeef7",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "2eea3f41-30e4-a8fd-2455-9abd6f9ae0ad",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "orthologygen.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;orthology",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j8_1",
							"children": [
								{
									"text": "ko-id",
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
						"id": "4e070d11-becc-a1d1-fba1-003b12103481",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
					},
					"outputFileNames": [
						"mmu.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "gene",
							"name": "mmu"
						}
					],
					"newAttrs": [],
					"afterAction": {
						"action": "filter",
						"input": "gene#^(?!.*(mmu)).*$"
					}
				}
			]
		},
		{
			"id": "bab63471-7b5b-48a0-bb0e-5abebf0919b3",
			"x": -124.05477898419667,
			"y": 94.37116206260629,
			"label": "",
			"timestamp": 1518218405561,
			"type": "analytics",
			"image": "image/analytics.png",
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
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
					"id": "4e070d11-becc-a1d1-fba1-003b12103481",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "fb60fc02-97d6-a0c7-ab1a-278f9775ce12",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "d94170d7-c8a7-e6fc-6123-027a4c3b5226",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "orthologygen.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;orthology",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j8_1",
							"children": [
								{
									"text": "ko-id",
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
						"id": "4e070d11-becc-a1d1-fba1-003b12103481",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
					},
					"outputFileNames": [
						"hsa.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "gene",
							"name": "hsa"
						}
					],
					"newAttrs": [],
					"afterAction": {
						"action": "filter",
						"input": "gene#^(?!.*(hsa)).*$"
					}
				}
			]
		},
		{
			"id": "e8484eeb-e35d-4314-b90d-24751b5f0b66",
			"x": -308.58386392153517,
			"y": 134.63205332166194,
			"label": "",
			"timestamp": 1518218873368,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "rno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "aedacf9a-59d4-2924-535b-d219d1628922",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "rno.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "rno",
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
					"urlReturnFileName": "hsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "fb60fc02-97d6-a0c7-ab1a-278f9775ce12",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsa.csv",
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
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsarno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "a6b53f38-43a6-a87c-e8c6-01fb3395bd49",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "17db0993-ff00-1894-ded5-5ba64dd6f6d7",
					"act": "MergeTable",
					"outputFileNames": [
						"hsarno.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "selectandappendbyrow",
					"mergeTableSelectInput": "hsa.csv#rno.csv",
					"selectAttrs": [
						{
							"attribute": "rno",
							"name": "rno",
							"resourceName": "rno.csv"
						},
						{
							"attribute": "hsa",
							"name": "hsa",
							"resourceName": "hsa.csv"
						}
					]
				}
			]
		},
		{
			"id": "f1756228-48c4-4569-bce0-98a481a8c372",
			"x": -51.91079637302609,
			"y": 266.9651575796162,
			"label": "",
			"timestamp": 1518219365205,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "fb60fc02-97d6-a0c7-ab1a-278f9775ce12",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsa.csv",
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
							}
						]
					}
				},
				{
					"urlReturnFileName": "mmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "67abdb67-a7fe-5773-bd78-62265e5aeef7",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "mmu.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
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
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsammu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "01de222f-d2bf-9c66-fea5-d0114a89ae9b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "00373f59-9279-9e92-d235-c5dae4961545",
					"act": "MergeTable",
					"outputFileNames": [
						"hsammu.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "selectandappendbyrow",
					"mergeTableSelectInput": "hsa.csv#mmu.csv",
					"selectAttrs": [
						{
							"attribute": "hsa",
							"name": "hsa",
							"resourceName": "hsa.csv"
						},
						{
							"attribute": "mmu",
							"name": "mmu",
							"resourceName": "mmu.csv"
						}
					]
				}
			]
		},
		{
			"id": "97a3a5b0-ac1d-4588-99d4-fbbcd64af948",
			"x": -560.96875,
			"y": -68.578125,
			"label": "",
			"timestamp": 1518219655358,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "e6a0c516-0f6d-48d4-be78-c4d178d60e83",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genes.csv",
					"description": "genes id",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string"
						},
						{
							"label": "geneid",
							"name": "geneid",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<id></id>\r\n\t\t\t\t\t<geneid></geneid>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"fileName": "genes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genes.csv"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "geneshsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "126657cc-ad96-4014-1b13-0e690adb3ff2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "Add Prefix function",
					"libraryId": "31da4686-ec83-44b6-875b-e6c10459a8a3",
					"organization": "University of Idaho",
					"id": "8f0ecb36-d7cc-4192-b819-bb78f245e061",
					"functionName": "addprefix.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "add prefix for an attribute",
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
					"id": "5ebd573e-da14-3917-dffd-c6a3dd64bf9d",
					"act": "Function",
					"inputFileNames": [
						"genes.csv"
					],
					"outputFileNames": [
						"geneshsa.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetFunction": {
						"libraryName": "Add Prefix function",
						"libraryId": "31da4686-ec83-44b6-875b-e6c10459a8a3",
						"organization": "University of Idaho",
						"id": "8f0ecb36-d7cc-4192-b819-bb78f245e061",
						"functionName": "addprefix.py",
						"functionType": "python executable",
						"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
						"description": "add prefix for an attribute",
						"urlReturnFileType": "csv",
						"attributes": [
							{
								"label": "outFile",
								"name": "-outFile",
								"type": "String",
								"value": "geneshsa.csv",
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
								"value": "genes.csv",
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
								"value": "genes",
								"required": true,
								"shown": true,
								"example": "genes",
								"attributeType": "input",
								"description": "Input File Name",
								"from": "input"
							},
							{
								"label": "actionInput",
								"name": "-actionInput",
								"type": "String",
								"value": "hsa:",
								"required": true,
								"shown": true,
								"example": "ncib-geneid",
								"attributeType": "input",
								"description": "Input",
								"from": "input"
							},
							{
								"label": "name",
								"name": "-name",
								"type": "String",
								"value": "hsa",
								"required": true,
								"shown": true,
								"example": "ncbigeneid",
								"attributeType": "input",
								"description": "attribute new name",
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
			"id": "0c06b943-6734-4197-a3f9-716625a9ff4a",
			"x": -508.34206359537046,
			"y": -289.4258937816431,
			"label": "",
			"timestamp": 1518219657545,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Add Prefix function",
					"libraryId": "31da4686-ec83-44b6-875b-e6c10459a8a3",
					"organization": "University of Idaho",
					"id": "8f0ecb36-d7cc-4192-b819-bb78f245e061",
					"functionName": "addprefix.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "add prefix for an attribute",
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
			"id": "1340175f-176e-4116-ae53-a8ff41fde0b1",
			"x": -552.96875,
			"y": 130.421875,
			"label": "",
			"timestamp": 1518220041655,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "geneshsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "126657cc-ad96-4014-1b13-0e690adb3ff2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "geneshsa.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "id",
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
					"urlReturnFileName": "hsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7178fdd8-f51d-3f9e-7c38-4c96fd3c8a45",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "1822e815-272c-2e49-7390-8821b62ac0f8",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "geneshsa.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"id": "126657cc-ad96-4014-1b13-0e690adb3ff2",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"jsUrlReturnFileSchema": {
							"text": "geneshsa.csv",
							"a_attr": {
								"style": ""
							},
							"state": {
								"opened": true
							},
							"children": [
								{
									"text": "id",
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
						"hsaid.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "hsa",
							"name": "hsa"
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
			"id": "3ca0b0f2-6c71-4076-8624-a74492782357",
			"x": -355.0199741195216,
			"y": 244.03843195439003,
			"label": "",
			"timestamp": 1518221550321,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsarno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "a6b53f38-43a6-a87c-e8c6-01fb3395bd49",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsarno.csv",
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
							}
						]
					}
				},
				{
					"urlReturnFileName": "hsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7178fdd8-f51d-3f9e-7c38-4c96fd3c8a45",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsaid.csv",
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
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsarnod.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c3006c98-6c65-c8e4-bc52-2708c7a73b5e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "b484c12c-1593-1df2-39e7-1c507b7d9ce1",
					"act": "MergeTable",
					"outputFileNames": [
						"hsarnod.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "appendwithmapkey",
					"mergeTableSelectInput": "hsaid.csv,hsa#hsarno.csv,hsa#rno",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "db32139a-70e1-4ec7-accf-27714df77c39",
			"x": -240.14905651270854,
			"y": 368.39666619973565,
			"label": "",
			"timestamp": 1518222195582,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsarnod.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c3006c98-6c65-c8e4-bc52-2708c7a73b5e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsarnod.csv",
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
							}
						]
					}
				},
				{
					"urlReturnFileName": "hsammu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "01de222f-d2bf-9c66-fea5-d0114a89ae9b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsammu.csv",
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
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsanodmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0eb20163-0898-6894-8b31-72df856557f5",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "c9c85555-4a07-a19f-8699-980ca3297c6a",
					"act": "MergeTable",
					"outputFileNames": [
						"hsanodmmu.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "appendwithmapkey",
					"mergeTableSelectInput": "hsarnod.csv,hsa#hsammu.csv,hsa#mmu",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "3466f97e-a9d7-488f-9f50-240e135b72f9",
			"x": 265.7066500000001,
			"y": 250.56715500000007,
			"label": "KEGG hsa to pathway id\n",
			"timestamp": 1518222700219,
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
					"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa-id",
							"name": "hsa-id",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa-id",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
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
							"hsa-id",
							"pathway-id"
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
					"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa-id",
							"name": "hsa-id",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa-id",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
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
							"hsa-id",
							"pathway-id"
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
			"id": "5cebf1ce-f018-44f1-b203-36160a7cf7ee",
			"x": -108.5391500640188,
			"y": 536.6858908643914,
			"label": "",
			"timestamp": 1518222737551,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsanodmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0eb20163-0898-6894-8b31-72df856557f5",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsanodmmu.csv",
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
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa-id",
							"name": "hsa-id",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa-id",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
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
							"hsa-id",
							"pathway-id"
						],
						"resultContainHeaderInfo": "false"
					}
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
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "d08eadd9-99c2-bb49-a1ee-99fff4efbbd0",
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
						"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
						"method": "REST",
						"attributes": [
							{
								"label": "hsa-id",
								"name": "hsa-id",
								"type": "string",
								"value": "rno",
								"required": true,
								"shown": true,
								"example": "hsa:217",
								"attributeType": "input",
								"description": "hsa-id",
								"from": "hsanodmmu.csv"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j10_1",
							"children": [
								{
									"text": "pathway-id",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_2",
									"children": []
								},
								{
									"text": "hsa-id",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"selected": false,
									"id": "j10_3",
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
								"hsa-id",
								"pathway-id"
							],
							"resultContainHeaderInfo": "false"
						}
					}
				}
			]
		},
		{
			"id": "a53adb4d-c02c-4685-8361-db272ae05672",
			"x": -320.61197477428595,
			"y": 525.4396047055136,
			"label": "",
			"timestamp": 1518223138074,
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
					"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa-id",
							"name": "hsa-id",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa-id",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
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
							"hsa-id",
							"pathway-id"
						],
						"resultContainHeaderInfo": "false"
					}
				},
				{
					"urlReturnFileName": "hsanodmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0eb20163-0898-6894-8b31-72df856557f5",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsanodmmu.csv",
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
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "7fc6e9ea-e17a-33df-4d58-ba36628b8bfd",
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
						"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
						"method": "REST",
						"attributes": [
							{
								"label": "hsa-id",
								"name": "hsa-id",
								"type": "string",
								"value": "mmu",
								"required": true,
								"shown": true,
								"example": "hsa:217",
								"attributeType": "input",
								"description": "hsa-id",
								"from": "hsanodmmu.csv"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j10_1",
							"children": [
								{
									"text": "pathway-id",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_2",
									"children": []
								},
								{
									"text": "hsa-id",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"selected": false,
									"id": "j10_3",
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
								"hsa-id",
								"pathway-id"
							],
							"resultContainHeaderInfo": "false"
						}
					}
				}
			]
		},
		{
			"id": "7fc97db6-7d49-478c-931b-2e370ab2bc1e",
			"x": -589.4741600000001,
			"y": 535.6274250000001,
			"label": "",
			"timestamp": 1518223380146,
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
					"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa-id",
							"name": "hsa-id",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa-id",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
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
							"hsa-id",
							"pathway-id"
						],
						"resultContainHeaderInfo": "false"
					}
				},
				{
					"urlReturnFileName": "hsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7178fdd8-f51d-3f9e-7c38-4c96fd3c8a45",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsaid.csv",
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
							}
						]
					}
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
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "23d3b0dd-10dc-362f-b56e-4223dcef65a6",
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
						"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
						"method": "REST",
						"attributes": [
							{
								"label": "hsa-id",
								"name": "hsa-id",
								"type": "string",
								"value": "hsa",
								"required": true,
								"shown": true,
								"example": "hsa:217",
								"attributeType": "input",
								"description": "hsa-id",
								"from": "hsaid.csv"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j10_1",
							"children": [
								{
									"text": "pathway-id",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_2",
									"children": []
								},
								{
									"text": "hsa-id",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"selected": false,
									"id": "j10_3",
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
								"hsa-id",
								"pathway-id"
							],
							"resultContainHeaderInfo": "false"
						}
					}
				}
			]
		},
		{
			"id": "78f16e5b-9cf0-4dd2-bf96-db9f1a23ce52",
			"x": -578.8782473806644,
			"y": 644.4386351384001,
			"label": "",
			"timestamp": 1518223594977,
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
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "23d3b0dd-10dc-362f-b56e-4223dcef65a6",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathhsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "4bc299eb-993c-6d9c-ebe0-09e9c465cdce",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "57aebe47-a338-7931-90b3-ccc47e90e8aa",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "hsapath.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j10_1",
							"children": [
								{
									"text": "pathway-id",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_2",
									"children": []
								},
								{
									"text": "hsa-id",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_3",
									"children": []
								}
							]
						},
						"id": "23d3b0dd-10dc-362f-b56e-4223dcef65a6",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
					},
					"outputFileNames": [
						"pathhsa.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "pathway-id",
							"name": "hsa"
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
			"id": "de93411a-5f12-46c3-aa1f-425d2dc298df",
			"x": -332.1308505279507,
			"y": 634.3143593652009,
			"label": "",
			"timestamp": 1518223762241,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "mmupath.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "7fc6e9ea-e17a-33df-4d58-ba36628b8bfd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ee994912-9462-e537-c436-25b98e4ec85f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "be4d08fb-e900-8441-6bba-f6bbe4df1a8d",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "mmupath.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j10_1",
							"children": [
								{
									"text": "pathway-id",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_2",
									"children": []
								},
								{
									"text": "hsa-id",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_3",
									"children": []
								}
							]
						},
						"id": "7fc6e9ea-e17a-33df-4d58-ba36628b8bfd",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
					},
					"outputFileNames": [
						"pathmmu.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "pathway-id",
							"name": "mmu"
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
			"id": "f1cb3912-c201-4f63-8ee3-6673693f684f",
			"x": -120.27454595649154,
			"y": 634.3938488435753,
			"label": "",
			"timestamp": 1518223814770,
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
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "d08eadd9-99c2-bb49-a1ee-99fff4efbbd0",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathrno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "bd263527-6487-44ed-5b0f-43cca75d1759",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "6b99a214-4d3d-ef33-eeb9-355ece5d1eee",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "rnopath.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j10_1",
							"children": [
								{
									"text": "pathway-id",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_2",
									"children": []
								},
								{
									"text": "hsa-id",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_3",
									"children": []
								}
							]
						},
						"id": "d08eadd9-99c2-bb49-a1ee-99fff4efbbd0",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
					},
					"outputFileNames": [
						"pathrno.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "pathway-id",
							"name": "rno"
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
			"id": "863896e6-ae78-4746-91ef-cdeeb80f563c",
			"x": -581.4179598769576,
			"y": 820.8531819016746,
			"label": "",
			"timestamp": 1518224300270,
			"type": "adapter",
			"image": "image/adapter error.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathhsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "4bc299eb-993c-6d9c-ebe0-09e9c465cdce",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathhsa.csv",
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
							}
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
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
					"id": "0dbc4c90-4676-fe61-7555-6b9e55d0c77a",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"pathhsa.csv"
					],
					"outputFileNames": [
						"pathhsaid.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [],
					"newAttrs": [
						{
							"attribute": "id",
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
										"value": "pathhsaid.csv",
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
										"value": "pathsha.csv",
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
										"value": "hsa",
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
										"value": "path:hsa#1",
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
										"value": "id",
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
							"resourceName": "pathhsa.csv"
						}
					]
				}
			]
		},
		{
			"id": "22e11f04-f85a-48b4-8d48-053c7a9c51bf",
			"x": -815.9017726096482,
			"y": 640.0364389845646,
			"label": "",
			"timestamp": 1518224304279,
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
			"id": "9875c554-94f0-49ee-8bc0-f16925af01a7",
			"x": -330.82918768590844,
			"y": 806.1587549239093,
			"label": "",
			"timestamp": 1518224753016,
			"type": "adapter",
			"image": "image/adapter error.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ee994912-9462-e537-c436-25b98e4ec85f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathmmu.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
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
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "mmuid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "211cb878-b719-f2a7-1f88-3f750427ea5a",
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
					"id": "add15c21-85fb-d9ec-4c8b-37bfaaa516f8",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"pathmmu.csv"
					],
					"outputFileNames": [
						"mmuid.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [],
					"newAttrs": [
						{
							"attribute": "id",
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
										"value": "mmuid.csv",
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
										"value": "pathmmu.csv",
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
										"value": "mmu",
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
										"value": "path:mmu#1",
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
										"value": "id",
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
							"resourceName": "pathmmu.csv"
						}
					]
				}
			]
		},
		{
			"id": "ecbe0db9-c496-4577-b272-24c6cdd87034",
			"x": -106.75631125649667,
			"y": 802.8914616797246,
			"label": "",
			"timestamp": 1518225039036,
			"type": "adapter",
			"image": "image/adapter error.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathrno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "bd263527-6487-44ed-5b0f-43cca75d1759",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathrno.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "rno",
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
					"urlReturnFileName": "rnoid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "548f3ec0-a43b-a28d-0199-6a7f3dc619f9",
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
					"id": "f51377bb-dfa4-706a-afe0-fae15b6e9db5",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"pathrno.csv"
					],
					"outputFileNames": [
						"rnoid.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [],
					"newAttrs": [
						{
							"attribute": "id",
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
										"value": "rnoid.csv",
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
										"value": "pathrno.csv",
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
										"value": "rno",
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
										"value": "path:rno#1",
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
										"value": "id",
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
							"resourceName": "pathrno.csv"
						}
					]
				}
			]
		},
		{
			"id": "58b13b32-e189-4b25-b485-116fcc3890e5",
			"x": -404.0641003368484,
			"y": 1190.3723654055634,
			"label": "",
			"timestamp": 1518225422032,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathhsaid.csv",
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
				},
				{
					"urlReturnFileName": "mmuid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "211cb878-b719-f2a7-1f88-3f750427ea5a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "mmuid.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
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
					"urlReturnFileName": "pathsamemmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "f3edb329-729d-2a3a-40ad-f1d962216067",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "173e8a24-db68-bd46-80ab-ee39a2ffb651",
					"act": "MergeTable",
					"outputFileNames": [
						"pathsamemmu.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "appendwithmapkey",
					"mergeTableSelectInput": "pathhsaid.csv,id#mmuid.csv,id#mmu",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "365af46f-da05-4867-ac5e-39e3605662cc",
			"x": -143.43161500088783,
			"y": 1194.3616381402974,
			"label": "",
			"timestamp": 1518225760196,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "rnoid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "548f3ec0-a43b-a28d-0199-6a7f3dc619f9",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "rnoid.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
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
				},
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathhsaid.csv",
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
					"urlReturnFileName": "pathsamerno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "3923df4f-1a51-7eaa-f206-1b812111b5c4",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "eb4b9c14-bfa1-0271-44ca-04215e292f5a",
					"act": "MergeTable",
					"outputFileNames": [
						"pathsamerno.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "appendwithmapkey",
					"mergeTableSelectInput": "pathhsaid.csv,id#rnoid.csv,id#rno",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "bf780e36-94f1-4ce8-8036-ba90cde1a2cc",
			"x": -705.8911618195267,
			"y": 1058.5476457545276,
			"label": "",
			"timestamp": 1518232465204,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathhsaid.csv",
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
				},
				{
					"urlReturnFileName": "mmuid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "211cb878-b719-f2a7-1f88-3f750427ea5a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "mmuid.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
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
					"urlReturnFileName": "hsadiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "36f18b78-0548-5307-e2f6-6b07dab85dc2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "5954e73a-b1f3-1491-3e76-3962494c465e",
					"act": "MergeTable",
					"outputFileNames": [
						"hsadiff.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "differencewithkey",
					"mergeTableSelectInput": "pathhsaid.csv,id#mmuid.csv,id",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "2c5f9cbc-0cbb-4dfc-a148-80644eec35a7",
			"x": -539.5418635039217,
			"y": 1049.2858415700073,
			"label": "",
			"timestamp": 1518233461728,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathhsaid.csv",
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
				},
				{
					"urlReturnFileName": "mmuid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "211cb878-b719-f2a7-1f88-3f750427ea5a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "mmuid.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
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
					"urlReturnFileName": "mmudiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c878c021-81d0-13f7-af64-ee22b770743b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "4cdfd237-7285-e720-e8ea-fd6148e35cce",
					"act": "MergeTable",
					"outputFileNames": [
						"mmudiff.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "differencewithkey",
					"mergeTableSelectInput": "mmuid.csv,id#pathhsaid.csv,id",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "c5468dcf-25c0-4188-8155-ad5bd7d34a8c",
			"x": -637.0109404768702,
			"y": 1189.083252825486,
			"label": "",
			"timestamp": 1518234581820,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsadiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "36f18b78-0548-5307-e2f6-6b07dab85dc2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsadiff.csv",
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
				},
				{
					"urlReturnFileName": "mmudiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c878c021-81d0-13f7-af64-ee22b770743b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "mmudiff.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
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
					"urlReturnFileName": "pathdiffmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "b11de606-50a9-bbd9-d7a6-14ba0968454a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "20b74bc3-ecc6-7c87-ba53-d3626d6ca92b",
					"act": "MergeTable",
					"outputFileNames": [
						"pathdiffmmu.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "selectandaddtabletobottom",
					"mergeTableSelectInput": "hsadiff.csv,id#mmudiff.csv,id",
					"selectAttrs": [
						{
							"attribute": "id",
							"name": "id",
							"resourceName": "hsadiff.csv"
						},
						{
							"attribute": "id",
							"name": "id",
							"resourceName": "mmudiff.csv"
						}
					]
				}
			]
		},
		{
			"id": "75b774d3-6144-47fe-9e09-ea13a5f603c6",
			"x": -2.150550000000296,
			"y": 1078.5589750000004,
			"label": "",
			"timestamp": 1518236087333,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathhsaid.csv",
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
				},
				{
					"urlReturnFileName": "rnoid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "548f3ec0-a43b-a28d-0199-6a7f3dc619f9",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "rnoid.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
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
					"urlReturnFileName": "pathdiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e1699cad-9368-6ec9-e03d-acf98bdb31ed",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "55b4a09c-1bbe-dc42-fe7f-cf5b42c899fb",
					"act": "MergeTable",
					"outputFileNames": [
						"pathdiff.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "differencewithkey",
					"mergeTableSelectInput": "pathhsaid.csv,id#rnoid.csv,id",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "87553ee9-0440-4c7f-95ad-db9741c5e425",
			"x": 429.7589499999998,
			"y": 1046.3487750000004,
			"label": "",
			"timestamp": 1518236091215,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "rnoid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "548f3ec0-a43b-a28d-0199-6a7f3dc619f9",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "rnoid.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
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
				},
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathhsaid.csv",
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
					"urlReturnFileName": "rnodiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ad895436-0f33-1754-4b76-855a0ed3fe68",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "e5eac1f0-a41d-eaf4-0162-d7c01a513098",
					"act": "MergeTable",
					"outputFileNames": [
						"rnodiff.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "differencewithkey",
					"mergeTableSelectInput": "rnoid.csv,id#pathhsaid.csv,id",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "ad7c255f-12b8-4fe9-8a79-70790f7a9149",
			"x": 122.29794999999973,
			"y": 1213.2561750000004,
			"label": "",
			"timestamp": 1518236572851,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathdiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e1699cad-9368-6ec9-e03d-acf98bdb31ed",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathdiff.csv",
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
				},
				{
					"urlReturnFileName": "rnodiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ad895436-0f33-1754-4b76-855a0ed3fe68",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": null
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathdiffrno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "d428f79b-407a-84c7-20f6-759727e69804",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "ec242e00-d0df-39c4-9ffa-b45a90054b55",
					"act": "MergeTable",
					"outputFileNames": [
						"pathdiffrno.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"mergeTableSelect": "selectandaddtabletobottom",
					"mergeTableSelectInput": "pathdiff.csv,id#rnodiff.csv",
					"selectAttrs": []
				}
			]
		},
		{
			"id": "0114549d-ffc2-44f0-8827-2924e8f8b6e1",
			"x": -453.5229103920768,
			"y": 1436.8624107586877,
			"label": "",
			"timestamp": 1518237698214,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathsamerno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "3923df4f-1a51-7eaa-f206-1b812111b5c4",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "pathdiffrno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "d428f79b-407a-84c7-20f6-759727e69804",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "pathsamemmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "f3edb329-729d-2a3a-40ad-f1d962216067",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "pathdiffmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "b11de606-50a9-bbd9-d7a6-14ba0968454a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsanodmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0eb20163-0898-6894-8b31-72df856557f5",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"outputFileNames": [
						"pathsamerno.csv"
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
						"pathdiffrno.csv"
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
						"pathsamemmu.csv"
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
						"pathdiffmmu.csv"
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
					"id": "828f2a66-61bd-df6a-7959-816a90075180",
					"act": "print",
					"outputFileNames": [
						"pathsamerno.csv"
					],
					"printType": "file",
					"resourceid": "3923df4f-1a51-7eaa-f206-1b812111b5c4",
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
					"id": "aea5a534-de61-dac3-bea3-b50d498afa9a",
					"act": "print",
					"outputFileNames": [
						"hsanodmmu.csv"
					],
					"printType": "file",
					"resourceid": "0eb20163-0898-6894-8b31-72df856557f5",
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
			"id": "e91537b7-48fa-4daa-b584-e5830b7442c6",
			"x": -159.0594318181817,
			"y": -363.26525000000004,
			"label": "huamangenes.csv\n",
			"timestamp": 1518284364823,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "32722a16-c545-4e62-9c09-6129a58157fc",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "huamangenes.csv",
					"description": "human genes id",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string"
						},
						{
							"label": "geneid",
							"name": "geneid",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<human&#x20;genes>\r\n\t\t\t\t\t<geneid></geneid>\r\n\t\t\t</human&#x20;genes>",
					"jsUrlReturnFileSchema": {
						"text": "human&#x20;genes",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j15_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j15_2",
								"children": []
							}
						]
					},
					"fileName": "huamangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "huamangenes.csv"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "32722a16-c545-4e62-9c09-6129a58157fc",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "huamangenes.csv",
					"description": "human genes id",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string"
						},
						{
							"label": "geneid",
							"name": "geneid",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<human&#x20;genes>\r\n\t\t\t\t\t<geneid></geneid>\r\n\t\t\t</human&#x20;genes>",
					"jsUrlReturnFileSchema": {
						"text": "human&#x20;genes",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j15_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j15_2",
								"children": []
							}
						]
					},
					"fileName": "huamangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "huamangenes.csv"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "cd77a931-3d4b-4cf4-be61-cbaed4de50ce",
			"x": -311.91693197556197,
			"y": -204.38399314890097,
			"label": "",
			"timestamp": 1518284395493,
			"type": "adapter",
			"image": "image/adapter error.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "32722a16-c545-4e62-9c09-6129a58157fc",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "huamangenes.csv",
					"description": "human genes id",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string"
						},
						{
							"label": "geneid",
							"name": "geneid",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<human&#x20;genes>\r\n\t\t\t\t\t<geneid></geneid>\r\n\t\t\t</human&#x20;genes>",
					"jsUrlReturnFileSchema": {
						"text": "human&#x20;genes",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j15_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j15_2",
								"children": []
							}
						]
					},
					"fileName": "huamangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "huamangenes.csv"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		}
	],
	"edges": [
		{
			"from": "7069bc87-b44c-475e-a20d-6fc9dff83582",
			"to": "8286d941-d335-459c-999c-2e4140667f62",
			"id": "e903c603-1d62-4dc9-af5b-72fe2675d1b5",
			"arrows": "to",
			"label": "genes.csv\nKEGG orthology\n",
			"resources": [
				{
					"id": "e6a0c516-0f6d-48d4-be78-c4d178d60e83",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genes.csv",
					"description": "genes id",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string"
						},
						{
							"label": "geneid",
							"name": "geneid",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<id></id>\r\n\t\t\t\t\t<geneid></geneid>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"fileName": "genes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genes.csv"
				},
				{
					"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "KEGG orthology",
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
							"style": ""
						},
						"selected": false,
						"id": "j12_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j12_2",
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
							"hsa-id",
							"ko-id"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "8286d941-d335-459c-999c-2e4140667f62",
			"to": "978100ed-c923-4706-8b33-a1e9ff4f9242",
			"id": "1da48b23-7146-48c7-bd32-c7e6f45635e2",
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
							"style": ""
						},
						"selected": false,
						"id": "j12_1",
						"children": [
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j12_2",
								"children": []
							}
						]
					},
					"id": "337f62d7-5a1d-3eda-8206-ce9a44181975",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "a3ea24c0-0447-44a0-a011-192b87964798",
			"to": "978100ed-c923-4706-8b33-a1e9ff4f9242",
			"id": "a7b05d0e-b475-4661-9169-d6e78ff46049",
			"arrows": "to",
			"label": "KEGG Genes\n",
			"resources": [
				{
					"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "KEGG Genes",
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
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<ko-id></ko-id>\r\n\t\t\t<gene></gene>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
									"style": "background-color: rgb(205, 165, 10) !important"
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
							"ko-id",
							"gene"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "978100ed-c923-4706-8b33-a1e9ff4f9242",
			"to": "f412bfba-c890-494c-ba00-d08f6ca1434a",
			"id": "fca10506-6b45-45fe-a86a-609e566b5c82",
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
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j8_3",
								"children": []
							}
						]
					},
					"id": "4e070d11-becc-a1d1-fba1-003b12103481",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "978100ed-c923-4706-8b33-a1e9ff4f9242",
			"to": "51cc6aaa-a733-407f-a7ca-9a302d9e7e51",
			"id": "b73f14c9-de12-4479-9e43-680e21de4471",
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
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j8_3",
								"children": []
							}
						]
					},
					"id": "4e070d11-becc-a1d1-fba1-003b12103481",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "978100ed-c923-4706-8b33-a1e9ff4f9242",
			"to": "bab63471-7b5b-48a0-bb0e-5abebf0919b3",
			"id": "064c2325-3594-46d4-87e4-f3969589734d",
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
							"style": ""
						},
						"selected": false,
						"id": "j8_1",
						"children": [
							{
								"text": "ko-id",
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
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j8_3",
								"children": []
							}
						]
					},
					"id": "4e070d11-becc-a1d1-fba1-003b12103481",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "f412bfba-c890-494c-ba00-d08f6ca1434a",
			"to": "e8484eeb-e35d-4314-b90d-24751b5f0b66",
			"id": "1b3f0ee6-6926-4725-8924-f7d1243633b7",
			"arrows": "to",
			"label": "rno.csv\n",
			"resources": [
				{
					"urlReturnFileName": "rno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "aedacf9a-59d4-2924-535b-d219d1628922",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "bab63471-7b5b-48a0-bb0e-5abebf0919b3",
			"to": "e8484eeb-e35d-4314-b90d-24751b5f0b66",
			"id": "6ecc80b1-da0c-46cd-9b79-510c40d47bf4",
			"arrows": "to",
			"label": "hsa.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "fb60fc02-97d6-a0c7-ab1a-278f9775ce12",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "bab63471-7b5b-48a0-bb0e-5abebf0919b3",
			"to": "f1756228-48c4-4569-bce0-98a481a8c372",
			"id": "84136a48-af50-468b-998d-1b94a4987b41",
			"arrows": "to",
			"label": "hsa.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "fb60fc02-97d6-a0c7-ab1a-278f9775ce12",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "51cc6aaa-a733-407f-a7ca-9a302d9e7e51",
			"to": "f1756228-48c4-4569-bce0-98a481a8c372",
			"id": "6a295cfe-6e35-4e16-8ab7-bec644065d21",
			"arrows": "to",
			"label": "mmu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "mmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "67abdb67-a7fe-5773-bd78-62265e5aeef7",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "7069bc87-b44c-475e-a20d-6fc9dff83582",
			"to": "97a3a5b0-ac1d-4588-99d4-fbbcd64af948",
			"id": "775bffe3-1eed-4daf-9a40-74e426f305e7",
			"arrows": "to",
			"label": "genes.csv\n",
			"resources": [
				{
					"id": "e6a0c516-0f6d-48d4-be78-c4d178d60e83",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genes.csv",
					"description": "genes id",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string"
						},
						{
							"label": "geneid",
							"name": "geneid",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<id></id>\r\n\t\t\t\t\t<geneid></geneid>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j13_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j13_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j13_3",
								"children": []
							}
						]
					},
					"fileName": "genes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genes.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "0c06b943-6734-4197-a3f9-716625a9ff4a",
			"to": "97a3a5b0-ac1d-4588-99d4-fbbcd64af948",
			"id": "67b46045-a89f-4613-a8df-777fe9b29aba",
			"arrows": "to",
			"label": "Add Prefix function\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Add Prefix function",
					"libraryId": "31da4686-ec83-44b6-875b-e6c10459a8a3",
					"organization": "University of Idaho",
					"id": "8f0ecb36-d7cc-4192-b819-bb78f245e061",
					"functionName": "addprefix.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "add prefix for an attribute",
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
			"from": "97a3a5b0-ac1d-4588-99d4-fbbcd64af948",
			"to": "1340175f-176e-4116-ae53-a8ff41fde0b1",
			"id": "1e5d0f0a-fb3a-4848-9a46-de2c9382b2ef",
			"arrows": "to",
			"label": "geneshsa.csv\n",
			"resources": [
				{
					"urlReturnFileName": "geneshsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "126657cc-ad96-4014-1b13-0e690adb3ff2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "1340175f-176e-4116-ae53-a8ff41fde0b1",
			"to": "3ca0b0f2-6c71-4076-8624-a74492782357",
			"id": "173ebe3f-ac23-41a3-9c4d-d1d58f9f0670",
			"arrows": "to",
			"label": "hsaid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7178fdd8-f51d-3f9e-7c38-4c96fd3c8a45",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "e8484eeb-e35d-4314-b90d-24751b5f0b66",
			"to": "3ca0b0f2-6c71-4076-8624-a74492782357",
			"id": "772504cc-e6c7-4080-91a9-436c36b60561",
			"arrows": "to",
			"label": "hsarno.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsarno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "a6b53f38-43a6-a87c-e8c6-01fb3395bd49",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "3ca0b0f2-6c71-4076-8624-a74492782357",
			"to": "db32139a-70e1-4ec7-accf-27714df77c39",
			"id": "58e0b504-f239-4418-b830-4ccf576784b0",
			"arrows": "to",
			"label": "hsarnod.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsarnod.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c3006c98-6c65-c8e4-bc52-2708c7a73b5e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "f1756228-48c4-4569-bce0-98a481a8c372",
			"to": "db32139a-70e1-4ec7-accf-27714df77c39",
			"id": "4cfe1590-ec6f-4b11-9e69-2be9a1f9dede",
			"arrows": "to",
			"label": "hsammu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsammu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "01de222f-d2bf-9c66-fea5-d0114a89ae9b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "3466f97e-a9d7-488f-9f50-240e135b72f9",
			"to": "5cebf1ce-f018-44f1-b203-36160a7cf7ee",
			"id": "b3189cef-5cd0-41f8-b4aa-4d8c045d6344",
			"arrows": "to",
			"label": "KEGG hsa to pathway id\n",
			"resources": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa-id",
							"name": "hsa-id",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa-id",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
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
							"hsa-id",
							"pathway-id"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "db32139a-70e1-4ec7-accf-27714df77c39",
			"to": "5cebf1ce-f018-44f1-b203-36160a7cf7ee",
			"id": "186f8229-f79d-496f-86e5-8b88f8baeb73",
			"arrows": "to",
			"label": "hsanodmmu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsanodmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0eb20163-0898-6894-8b31-72df856557f5",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "db32139a-70e1-4ec7-accf-27714df77c39",
			"to": "a53adb4d-c02c-4685-8361-db272ae05672",
			"id": "21b3b4dd-c010-4e96-9734-df2d341d7f05",
			"arrows": "to",
			"label": "hsanodmmu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsanodmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0eb20163-0898-6894-8b31-72df856557f5",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "3466f97e-a9d7-488f-9f50-240e135b72f9",
			"to": "a53adb4d-c02c-4685-8361-db272ae05672",
			"id": "07d64dc2-6fcf-4e42-ac3e-996c4af85719",
			"arrows": "to",
			"label": "KEGG hsa to pathway id\n",
			"resources": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa-id",
							"name": "hsa-id",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa-id",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
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
							"hsa-id",
							"pathway-id"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "3466f97e-a9d7-488f-9f50-240e135b72f9",
			"to": "7fc97db6-7d49-478c-931b-2e370ab2bc1e",
			"id": "80665bac-2faa-4ea9-8def-3a607a240f30",
			"arrows": "to",
			"label": "KEGG hsa to pathway id\n",
			"resources": [
				{
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG hsa to pathway id",
					"description": "convert hsa id to pathway id",
					"url": "http://rest.kegg.jp/link/pathway/{hsa-id}",
					"method": "REST",
					"attributes": [
						{
							"label": "hsa-id",
							"name": "hsa-id",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa:217",
							"attributeType": "input",
							"description": "hsa-id",
							"from": "default"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
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
							"hsa-id",
							"pathway-id"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "1340175f-176e-4116-ae53-a8ff41fde0b1",
			"to": "7fc97db6-7d49-478c-931b-2e370ab2bc1e",
			"id": "06a7ebc2-5adf-45c7-8670-6e98ff6045e6",
			"arrows": "to",
			"label": "hsaid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7178fdd8-f51d-3f9e-7c38-4c96fd3c8a45",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "7fc97db6-7d49-478c-931b-2e370ab2bc1e",
			"to": "78f16e5b-9cf0-4dd2-bf96-db9f1a23ce52",
			"id": "448e4757-6acf-4c9f-9099-55331c997c5a",
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
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "23d3b0dd-10dc-362f-b56e-4223dcef65a6",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "a53adb4d-c02c-4685-8361-db272ae05672",
			"to": "de93411a-5f12-46c3-aa1f-425d2dc298df",
			"id": "e0d00cab-4a0f-431b-894a-d9808ed4744c",
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
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "7fc6e9ea-e17a-33df-4d58-ba36628b8bfd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "5cebf1ce-f018-44f1-b203-36160a7cf7ee",
			"to": "f1cb3912-c201-4f63-8ee3-6673693f684f",
			"id": "a91bfb8c-7698-4592-8c67-b0b7c2f7206f",
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
							"style": ""
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "d08eadd9-99c2-bb49-a1ee-99fff4efbbd0",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "22e11f04-f85a-48b4-8d48-053c7a9c51bf",
			"to": "863896e6-ae78-4746-91ef-cdeeb80f563c",
			"id": "45f9c508-6940-464c-8587-6bfefeb854de",
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
			"from": "78f16e5b-9cf0-4dd2-bf96-db9f1a23ce52",
			"to": "863896e6-ae78-4746-91ef-cdeeb80f563c",
			"id": "9c52cbac-d647-4962-a5ba-324f3ef35227",
			"arrows": "to",
			"label": "pathhsa.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathhsa.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "4bc299eb-993c-6d9c-ebe0-09e9c465cdce",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "22e11f04-f85a-48b4-8d48-053c7a9c51bf",
			"to": "9875c554-94f0-49ee-8bc0-f16925af01a7",
			"id": "28a9b27a-a0b4-4bae-8e8e-2cdf6902099d",
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
			"from": "de93411a-5f12-46c3-aa1f-425d2dc298df",
			"to": "9875c554-94f0-49ee-8bc0-f16925af01a7",
			"id": "4c56644b-3a00-4e7d-b175-9883944f883f",
			"arrows": "to",
			"label": "pathmmu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ee994912-9462-e537-c436-25b98e4ec85f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "22e11f04-f85a-48b4-8d48-053c7a9c51bf",
			"to": "ecbe0db9-c496-4577-b272-24c6cdd87034",
			"id": "53ae125b-462c-4335-baf9-a0792947327a",
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
			"from": "f1cb3912-c201-4f63-8ee3-6673693f684f",
			"to": "ecbe0db9-c496-4577-b272-24c6cdd87034",
			"id": "63a09f47-9702-4642-bb87-c39d84e49d00",
			"arrows": "to",
			"label": "pathrno.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathrno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "bd263527-6487-44ed-5b0f-43cca75d1759",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "863896e6-ae78-4746-91ef-cdeeb80f563c",
			"to": "58b13b32-e189-4b25-b485-116fcc3890e5",
			"id": "2d6cb494-8308-469a-9776-855a1c104c58",
			"arrows": "to",
			"label": "pathhsaid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "9875c554-94f0-49ee-8bc0-f16925af01a7",
			"to": "58b13b32-e189-4b25-b485-116fcc3890e5",
			"id": "d1a18034-2272-426f-953e-ca16295f6ca9",
			"arrows": "to",
			"label": "mmuid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "mmuid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "211cb878-b719-f2a7-1f88-3f750427ea5a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "863896e6-ae78-4746-91ef-cdeeb80f563c",
			"to": "365af46f-da05-4867-ac5e-39e3605662cc",
			"id": "87004e08-8353-4547-a390-fc53ae428f03",
			"arrows": "to",
			"label": "pathhsaid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "ecbe0db9-c496-4577-b272-24c6cdd87034",
			"to": "365af46f-da05-4867-ac5e-39e3605662cc",
			"id": "94aae449-ac07-45c6-9de3-c9f96108f488",
			"arrows": "to",
			"label": "rnoid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "rnoid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "548f3ec0-a43b-a28d-0199-6a7f3dc619f9",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "863896e6-ae78-4746-91ef-cdeeb80f563c",
			"to": "bf780e36-94f1-4ce8-8036-ba90cde1a2cc",
			"id": "05fccc2e-6287-47b5-9726-b065f52fc6d0",
			"arrows": "to",
			"label": "pathhsaid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "9875c554-94f0-49ee-8bc0-f16925af01a7",
			"to": "bf780e36-94f1-4ce8-8036-ba90cde1a2cc",
			"id": "53d162ec-de00-481f-a618-f19c532bd533",
			"arrows": "to",
			"label": "mmuid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "mmuid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "211cb878-b719-f2a7-1f88-3f750427ea5a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "863896e6-ae78-4746-91ef-cdeeb80f563c",
			"to": "2c5f9cbc-0cbb-4dfc-a148-80644eec35a7",
			"id": "222e9c4d-f96d-4d2b-8a7a-7e62b3ec8c90",
			"arrows": "to",
			"label": "pathhsaid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "9875c554-94f0-49ee-8bc0-f16925af01a7",
			"to": "2c5f9cbc-0cbb-4dfc-a148-80644eec35a7",
			"id": "e496db55-4c2a-4913-a101-65ffc8730d08",
			"arrows": "to",
			"label": "mmuid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "mmuid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "211cb878-b719-f2a7-1f88-3f750427ea5a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "bf780e36-94f1-4ce8-8036-ba90cde1a2cc",
			"to": "c5468dcf-25c0-4188-8155-ad5bd7d34a8c",
			"id": "801aecc7-15aa-453c-b8f9-c34b36517f95",
			"arrows": "to",
			"label": "hsadiff.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsadiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "36f18b78-0548-5307-e2f6-6b07dab85dc2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "2c5f9cbc-0cbb-4dfc-a148-80644eec35a7",
			"to": "c5468dcf-25c0-4188-8155-ad5bd7d34a8c",
			"id": "62154737-c22b-4fb5-a196-bc9e1776aa3f",
			"arrows": "to",
			"label": "mmudiff.csv\n",
			"resources": [
				{
					"urlReturnFileName": "mmudiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c878c021-81d0-13f7-af64-ee22b770743b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "863896e6-ae78-4746-91ef-cdeeb80f563c",
			"to": "75b774d3-6144-47fe-9e09-ea13a5f603c6",
			"id": "3ed44df6-9c0f-4bd3-83b3-fe9edb72ab26",
			"arrows": "to",
			"label": "pathhsaid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "ecbe0db9-c496-4577-b272-24c6cdd87034",
			"to": "87553ee9-0440-4c7f-95ad-db9741c5e425",
			"id": "07bd14bd-45d9-42b8-8049-0ef5265839ea",
			"arrows": "to",
			"label": "rnoid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "rnoid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "548f3ec0-a43b-a28d-0199-6a7f3dc619f9",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "863896e6-ae78-4746-91ef-cdeeb80f563c",
			"to": "87553ee9-0440-4c7f-95ad-db9741c5e425",
			"id": "90259ebd-b50e-43a5-8424-aeb541d25cb2",
			"arrows": "to",
			"label": "pathhsaid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathhsaid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "dec5a67a-8016-fd94-21ee-f6225297792e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "ecbe0db9-c496-4577-b272-24c6cdd87034",
			"to": "75b774d3-6144-47fe-9e09-ea13a5f603c6",
			"id": "f671734c-24aa-4da3-bd8a-4cec44226e30",
			"arrows": "to",
			"label": "rnoid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "rnoid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "548f3ec0-a43b-a28d-0199-6a7f3dc619f9",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "75b774d3-6144-47fe-9e09-ea13a5f603c6",
			"to": "ad7c255f-12b8-4fe9-8a79-70790f7a9149",
			"id": "524b831c-a77e-41b6-9f4e-e199dfc9b196",
			"arrows": "to",
			"label": "pathdiff.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathdiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e1699cad-9368-6ec9-e03d-acf98bdb31ed",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "87553ee9-0440-4c7f-95ad-db9741c5e425",
			"to": "ad7c255f-12b8-4fe9-8a79-70790f7a9149",
			"id": "8ac5001a-75f4-4fc7-9e2c-e61f56723553",
			"arrows": "to",
			"label": "rnodiff.csv\n",
			"resources": [
				{
					"urlReturnFileName": "rnodiff.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "ad895436-0f33-1754-4b76-855a0ed3fe68",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "58b13b32-e189-4b25-b485-116fcc3890e5",
			"to": "0114549d-ffc2-44f0-8827-2924e8f8b6e1",
			"id": "13e20075-65e1-4097-8122-7e1846cf55e8",
			"arrows": "to",
			"label": "pathsamemmu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathsamemmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "f3edb329-729d-2a3a-40ad-f1d962216067",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "365af46f-da05-4867-ac5e-39e3605662cc",
			"to": "0114549d-ffc2-44f0-8827-2924e8f8b6e1",
			"id": "a0ef9704-cfcd-403e-8c09-fa7f252eaed1",
			"arrows": "to",
			"label": "pathsamerno.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathsamerno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "3923df4f-1a51-7eaa-f206-1b812111b5c4",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "c5468dcf-25c0-4188-8155-ad5bd7d34a8c",
			"to": "0114549d-ffc2-44f0-8827-2924e8f8b6e1",
			"id": "96d1a99f-f663-4c50-a875-8ef84c906886",
			"arrows": "to",
			"label": "pathdiffmmu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathdiffmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "b11de606-50a9-bbd9-d7a6-14ba0968454a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "ad7c255f-12b8-4fe9-8a79-70790f7a9149",
			"to": "0114549d-ffc2-44f0-8827-2924e8f8b6e1",
			"id": "3450ff85-a3d8-456a-91fd-62480ed40679",
			"arrows": "to",
			"label": "pathdiffrno.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathdiffrno.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "d428f79b-407a-84c7-20f6-759727e69804",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "db32139a-70e1-4ec7-accf-27714df77c39",
			"to": "0114549d-ffc2-44f0-8827-2924e8f8b6e1",
			"id": "848028e7-b642-4b20-808e-5eb35cd61d19",
			"arrows": "to",
			"label": "hsanodmmu.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsanodmmu.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "0eb20163-0898-6894-8b31-72df856557f5",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "e91537b7-48fa-4daa-b584-e5830b7442c6",
			"to": "cd77a931-3d4b-4cf4-be61-cbaed4de50ce",
			"id": "bcbb8439-e656-476d-a33c-1ef9714df4ef",
			"arrows": "to",
			"label": "huamangenes.csv\n",
			"resources": [
				{
					"id": "32722a16-c545-4e62-9c09-6129a58157fc",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "huamangenes.csv",
					"description": "human genes id",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string"
						},
						{
							"label": "geneid",
							"name": "geneid",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<human&#x20;genes>\r\n\t\t\t\t\t<geneid></geneid>\r\n\t\t\t</human&#x20;genes>",
					"jsUrlReturnFileSchema": {
						"text": "human&#x20;genes",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j15_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j15_2",
								"children": []
							}
						]
					},
					"fileName": "huamangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "huamangenes.csv"
				}
			],
			"libraries": []
		}
	]
}