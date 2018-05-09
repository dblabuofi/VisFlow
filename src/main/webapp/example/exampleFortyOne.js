var exampleFortyOne = {
	"nodes": [
		{
			"id": "ac52be6f-f354-4498-9562-fe2f23011101",
			"x": 79.26803477932366,
			"y": -261.82671705214244,
			"label": "humangenes.csv\nKEGG orthology\n",
			"timestamp": 1518677863684,
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
						"id": "j8_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
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
							"style": ""
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
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
						"id": "j8_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
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
							"style": ""
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
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
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "f2109746-e145-448d-90e6-a38047280581",
			"x": 97.703125,
			"y": -76.578125,
			"label": "KEGG Orhology Call",
			"timestamp": 1519064601562,
			"type": "analytics",
			"image": "image/analytics error.png",
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
						"id": "j8_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
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
							"style": ""
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
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
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "humanhsa.csv",
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
							"style": ""
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
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
					"id": "81e2b8af-3379-ceb7-d22a-a1fa7cf6f975",
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
						"humanhsa.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"outAttributes": [
						[]
					],
					"inputFileNames": [],
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
								"style": ""
							},
							"selected": false,
							"id": "j9_1",
							"children": [
								{
									"text": "ko",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
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
		}
	],
	"edges": [
		{
			"from": "ac52be6f-f354-4498-9562-fe2f23011101",
			"to": "f2109746-e145-448d-90e6-a38047280581",
			"id": "ba355acb-39a4-40de-a11b-ecfeaddfd38c",
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
						"id": "j8_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j8_2",
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
							"style": ""
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
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
			],
			"libraries": []
		}
	]
}