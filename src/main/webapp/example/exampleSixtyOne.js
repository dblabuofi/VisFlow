var exampleSixtyOne = {
	"nodes": [
		{
			"id": "0f17397d-583e-4126-a817-d9912810b8c8",
			"x": -199.98349890544358,
			"y": -239.21770332409713,
			"label": "GENE-resources",
			"timestamp": 1520486191092,
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
							"style": "background-color: rgb(136, 147, 199) !important"
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(136, 147, 199) !important"
								},
								"selected": false,
								"id": "j6_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
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
							"style": "background-color: rgb(136, 147, 199) !important"
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(136, 147, 199) !important"
								},
								"selected": false,
								"id": "j6_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
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
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "a7bfea70-4b03-4ab5-88d9-17cc9eefe8c0",
			"x": 63.152269893053514,
			"y": -205.0307727321664,
			"label": "KEGG-databases",
			"timestamp": 1520486212581,
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
							"style": "background-color: rgb(245, 207, 9) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
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
							"style": "background-color: rgb(245, 207, 9) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
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
			"id": "0d3c253b-2932-4ad0-9cbe-8a418b500c4b",
			"x": -113.99818862876934,
			"y": -73.46288833291784,
			"label": "",
			"timestamp": 1520486239922,
			"type": "adapter",
			"image": "image/adapter.png",
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
							"style": "background-color: rgb(136, 147, 199) !important"
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(136, 147, 199) !important"
								},
								"selected": false,
								"id": "j6_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
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
							"style": "background-color: rgb(245, 207, 9) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
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
							"style": "background-color: rgb(245, 207, 9) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							}
						]
					},
					"id": "1415a97c-d73d-23b7-8eab-686da017db33",
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
						"genes.csv",
						"GeneIdToOrthologyId"
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
								"style": "background-color: rgb(245, 207, 9) !important"
							},
							"selected": false,
							"id": "j11_1",
							"children": [
								{
									"text": "ko",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j11_2",
									"children": []
								},
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j11_3",
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
			"id": "222380dc-521b-496a-a832-1a91de440e18",
			"x": 88.75,
			"y": 17.515625,
			"label": "",
			"timestamp": 1520486566689,
			"type": "repeat",
			"image": "image/repeat.png",
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
							"style": "background-color: rgb(245, 207, 9) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							}
						]
					},
					"id": "1415a97c-d73d-23b7-8eab-686da017db33",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
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
							"style": "background-color: rgb(245, 207, 9) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							}
						]
					},
					"id": "1415a97c-d73d-23b7-8eab-686da017db33",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "ca6587af-fae7-c70b-73c3-27b8a4fddfc6",
					"act": "Repeat",
                    "conditionType": "count",
					"repeatTimes": "3",
					"repeatNode": {
						"label": "",
						"id": "0d3c253b-2932-4ad0-9cbe-8a418b500c4b"
					}
				}
			]
		},
		{
			"id": "4a4754e6-6c7c-4308-a595-e7590a50c0aa",
			"x": 88.4779999999997,
			"y": 185.57262500000002,
			"label": "",
			"timestamp": 1520489774003,
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
							"style": "background-color: rgb(245, 207, 9) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							}
						]
					},
					"id": "1415a97c-d73d-23b7-8eab-686da017db33",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "75cffa4a-008c-dded-f795-705f557ecb35",
					"act": "print",
					"outputFileNames": [
						"keggorthology.csv"
					],
					"printType": "table",
					"resourceid": "1415a97c-d73d-23b7-8eab-686da017db33",
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
			"from": "0f17397d-583e-4126-a817-d9912810b8c8",
			"to": "0d3c253b-2932-4ad0-9cbe-8a418b500c4b",
			"id": "40531aee-dd12-46bb-86c7-7abfe7a01d8a",
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
							"style": "background-color: rgb(136, 147, 199) !important"
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(136, 147, 199) !important"
								},
								"selected": false,
								"id": "j6_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
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
				}
			],
			"libraries": []
		},
		{
			"from": "a7bfea70-4b03-4ab5-88d9-17cc9eefe8c0",
			"to": "0d3c253b-2932-4ad0-9cbe-8a418b500c4b",
			"id": "654466e3-26e8-4f87-beb1-396a4fd95dea",
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
							"style": "background-color: rgb(245, 207, 9) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
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
			"from": "0d3c253b-2932-4ad0-9cbe-8a418b500c4b",
			"to": "222380dc-521b-496a-a832-1a91de440e18",
			"id": "f05ec121-fc1d-4052-b14d-d916aa69f018",
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
							"style": "background-color: rgb(245, 207, 9) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							}
						]
					},
					"id": "1415a97c-d73d-23b7-8eab-686da017db33",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "222380dc-521b-496a-a832-1a91de440e18",
			"to": "0d3c253b-2932-4ad0-9cbe-8a418b500c4b",
			"id": "92aca776-f577-4806-accb-804b1935da93",
			"arrows": "to",
			"label": "",
			"resources": [],
			"libraries": []
		},
		{
			"from": "222380dc-521b-496a-a832-1a91de440e18",
			"to": "4a4754e6-6c7c-4308-a595-e7590a50c0aa",
			"id": "baab28c4-0a09-46ab-816f-73ae33a05edf",
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
							"style": "background-color: rgb(245, 207, 9) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							}
						]
					},
					"id": "1415a97c-d73d-23b7-8eab-686da017db33",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		}
	],
	"globalmatch": []
}