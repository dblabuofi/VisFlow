var exampleFiftyNine = {
	"nodes": [
		{
			"id": "26a9b24d-fb7a-4fe5-9408-67f7768b3a0b",
			"x": -317.996563861818,
			"y": -265.0045827570872,
			"label": "GENE-resources",
			"timestamp": 1520284494823,
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
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string",
							"description": "id"
						},
						{
							"label": "gene",
							"name": "gene",
							"type": "string",
							"description": "gene id"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<id></id>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(168, 239, 187) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(168, 239, 187) !important"
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
								"children": []
							}
						]
					},
					"fileName": "genes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genes.csv"
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
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string",
							"description": "id"
						},
						{
							"label": "gene",
							"name": "gene",
							"type": "string",
							"description": "gene id"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<id></id>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(168, 239, 187) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(168, 239, 187) !important"
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
								"children": []
							}
						]
					},
					"fileName": "genes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genes.csv"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "b1621665-c52a-44f4-9434-92efd9b2aaf8",
			"x": -132.94827914324262,
			"y": -60.16503764080317,
			"label": "",
			"timestamp": 1520284513931,
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
					"resourceName": "GeneIdToOrthologyId",
					"description": "KEGG orthology change",
					"aggregateName": "KEGG-databases",
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
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "ko",
							"name": "ko",
							"type": "string",
							"description": "ko id"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(72, 210, 194) !important"
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG orthology.xml",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "GeneIdToOrthologyId",
					"suggestOutputFileName": "keggorthology.csv",
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
					"id": "e6a0c516-0f6d-48d4-be78-c4d178d60e83",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genes.csv",
					"description": "genes id",
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string",
							"description": "id"
						},
						{
							"label": "gene",
							"name": "gene",
							"type": "string",
							"description": "gene id"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<id></id>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(168, 239, 187) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(168, 239, 187) !important"
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
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
					"urlReturnFileName": "keggorthology.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "ko",
							"name": "ko",
							"type": "string",
							"description": "ko id"
						}
					],
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(72, 210, 194) !important"
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "88d91384-9117-9af0-ace8-51cbbc0fe47b",
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
					"outputFileNames": [
						"keggorthology.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"outAttributes": [
						[
							{
								"label": "hsa",
								"name": "hsa",
								"type": "string",
								"description": "hsa id"
							},
							{
								"label": "ko",
								"name": "ko",
								"type": "string",
								"description": "ko id"
							}
						]
					],
					"inputFileNames": [
						"GeneIdToOrthologyId",
						"genes.csv"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
						"resourceType": "REST",
						"organization": "KEGG",
						"resourceName": "GeneIdToOrthologyId",
						"description": "KEGG orthology change",
						"aggregateName": "KEGG-databases",
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
								"from": "genes.csv"
							}
						],
						"outAttributes": [
							{
								"label": "hsa",
								"name": "hsa",
								"type": "string",
								"description": "hsa id"
							},
							{
								"label": "ko",
								"name": "ko",
								"type": "string",
								"description": "ko id"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;orthology",
							"a_attr": {
								"style": "background-color: rgb(72, 210, 194) !important"
							},
							"selected": false,
							"id": "j10_1",
							"children": [
								{
									"text": "ko",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_2",
									"children": []
								},
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j10_3",
									"children": []
								}
							]
						},
						"fileName": "KEGG orthology.xml",
						"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
						"urlReturnFileName": "GeneIdToOrthologyId",
						"suggestOutputFileName": "keggorthology.csv",
						"wrapper": {
							"wrapperName": "textTableWrapper",
							"headers": [
								"hsa",
								"ko"
							]
						},
						"matcher": "S-Match"
					}
				}
			]
		},
		{
			"id": "8cb2182e-d93e-430f-90a2-542f9a7e2f34",
			"x": -0.3468344785949895,
			"y": -263.02545671731633,
			"label": "KEGG-databases",
			"timestamp": 1520284517063,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "GeneIdToOrthologyId",
					"description": "KEGG orthology change",
					"aggregateName": "KEGG-databases",
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
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "ko",
							"name": "ko",
							"type": "string",
							"description": "ko id"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(72, 210, 194) !important"
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG orthology.xml",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "GeneIdToOrthologyId",
					"suggestOutputFileName": "keggorthology.csv",
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
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "GeneIdToOrthologyId",
					"description": "KEGG orthology change",
					"aggregateName": "KEGG-databases",
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
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "ko",
							"name": "ko",
							"type": "string",
							"description": "ko id"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(72, 210, 194) !important"
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG orthology.xml",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "GeneIdToOrthologyId",
					"suggestOutputFileName": "keggorthology.csv",
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
			"font": {
				"align": "left"
			}
		},
		{
			"id": "98686cde-f889-4fa8-9ac4-c086f63a30cc",
			"x": -146.078125,
			"y": 48.3125,
			"label": "",
			"timestamp": 1520287906012,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "keggorthology.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "ko",
							"name": "ko",
							"type": "string",
							"description": "ko id"
						}
					],
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(72, 210, 194) !important"
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "88d91384-9117-9af0-ace8-51cbbc0fe47b",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "1430de6a-f793-91c0-590d-28fda50551f7",
					"act": "print",
					"outputFileNames": [
						"keggorthology.csv"
					],
					"printType": "table",
					"resourceid": "88d91384-9117-9af0-ace8-51cbbc0fe47b",
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
			"from": "8cb2182e-d93e-430f-90a2-542f9a7e2f34",
			"to": "b1621665-c52a-44f4-9434-92efd9b2aaf8",
			"id": "b0961005-fcb2-4278-8dd4-951401879832",
			"arrows": "to",
			"label": "GeneIdToOrthologyId\n",
			"resources": [
				{
					"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
					"resourceType": "REST",
					"organization": "KEGG",
					"resourceName": "GeneIdToOrthologyId",
					"description": "KEGG orthology change",
					"aggregateName": "KEGG-databases",
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
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "ko",
							"name": "ko",
							"type": "string",
							"description": "ko id"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(72, 210, 194) !important"
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG orthology.xml",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "GeneIdToOrthologyId",
					"suggestOutputFileName": "keggorthology.csv",
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
			"from": "26a9b24d-fb7a-4fe5-9408-67f7768b3a0b",
			"to": "b1621665-c52a-44f4-9434-92efd9b2aaf8",
			"id": "4b6d17fb-2eb5-4c09-978c-ce80b42aacbe",
			"arrows": "to",
			"label": "genes.csv\n",
			"resources": [
				{
					"id": "e6a0c516-0f6d-48d4-be78-c4d178d60e83",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genes.csv",
					"description": "genes id",
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "id",
							"name": "id",
							"type": "string",
							"description": "id"
						},
						{
							"label": "gene",
							"name": "gene",
							"type": "string",
							"description": "gene id"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<id></id>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(168, 239, 187) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(168, 239, 187) !important"
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_3",
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
			"from": "b1621665-c52a-44f4-9434-92efd9b2aaf8",
			"to": "98686cde-f889-4fa8-9ac4-c086f63a30cc",
			"id": "0915b5b1-6599-4195-bfdb-dda85324f929",
			"arrows": "to",
			"label": "keggorthology.csv\n",
			"resources": [
				{
					"urlReturnFileName": "keggorthology.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "ko",
							"name": "ko",
							"type": "string",
							"description": "ko id"
						}
					],
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(72, 210, 194) !important"
						},
						"selected": false,
						"id": "j10_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j10_3",
								"children": []
							}
						]
					},
					"id": "88d91384-9117-9af0-ace8-51cbbc0fe47b",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		}
	],
	"globalmatch": []
}