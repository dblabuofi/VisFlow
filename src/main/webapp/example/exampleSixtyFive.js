var exampleSixtyFive = {
	"nodes": [
		{
			"id": "220974b7-3ce7-423e-b44f-5430cecf8461",
			"x": -304.375,
			"y": -251.03125,
			"label": "GENE-resources",
			"timestamp": 1520708037158,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "0b1e8320-3b3f-4da3-9e2c-68ef4d6f5556",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genesleft.csv",
					"description": "genes id with average and count value",
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "gene",
							"name": "gene",
							"type": "string"
						},
						{
							"label": "average",
							"name": "average",
							"type": "string"
						},
						{
							"label": "count",
							"name": "count",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t\t\t<average></average>\r\n\t\t\t\t\t<count></count>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(215, 160, 23) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "average",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(215, 160, 23) !important"
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							},
							{
								"text": "count",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_4",
								"children": []
							}
						]
					},
					"fileName": "genesleft.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genesleft.csv"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "0b1e8320-3b3f-4da3-9e2c-68ef4d6f5556",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genesleft.csv",
					"description": "genes id with average and count value",
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "gene",
							"name": "gene",
							"type": "string"
						},
						{
							"label": "average",
							"name": "average",
							"type": "string"
						},
						{
							"label": "count",
							"name": "count",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t\t\t<average></average>\r\n\t\t\t\t\t<count></count>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(215, 160, 23) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "average",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(215, 160, 23) !important"
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							},
							{
								"text": "count",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_4",
								"children": []
							}
						]
					},
					"fileName": "genesleft.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genesleft.csv"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "b68ffe50-84f2-4ebe-81c9-abe98a1d12b1",
			"x": -97.375,
			"y": 21.96875,
			"label": "",
			"timestamp": 1520802570957,
			"type": "combine",
			"image": "image/combine.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "genesleft.xml",
					"urlReturnFileType": "XML",
					"outAttributes": [
						{
							"label": "average",
							"name": "average",
							"type": "double ",
							"description": "average"
						},
						{
							"label": "gene",
							"name": "gene",
							"type": "string",
							"description": "gene id"
						},
						{
							"label": "count",
							"name": "count",
							"type": "int",
							"description": "count"
						}
					],
					"resourceType": "XML",
					"id": "23b0dff7-2faa-08d3-be29-73d273dceb8e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "genesright.xml",
					"urlReturnFileType": "XML",
					"outAttributes": [
						{
							"label": "min",
							"name": "min",
							"type": "int",
							"description": "minimum value"
						},
						{
							"label": "geneID",
							"name": "geneID",
							"type": "string ",
							"description": "gene id"
						},
						{
							"label": "max",
							"name": "max",
							"type": "int",
							"description": "maximum value"
						}
					],
					"resourceType": "XML",
					"id": "ec884c0e-4d4b-0299-0d5b-2cb80e1394bd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "merged.xml",
					"urlReturnFileType": "XML",
					"outAttributes": [],
					"resourceType": "XML",
					"id": "11f146ae-a210-cbb1-785c-2e2c32dc007d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "fea405fa-af16-b301-a4f7-9dada49524e7",
					"act": "Combine",
					"matcher": "S-Match",
					"identifier": "Gordian",
					"outputFileNames": [
						"merged.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"outAttributes": [
						[]
					],
					"leftKeys": [
						"gene"
					],
					"rightKeys": [
						"geneID"
					]
				}
			]
		},
		{
			"id": "e613930d-21fd-4fe3-99d6-f1df4e695fd9",
			"x": 87.34781206506807,
			"y": -257.17107143104,
			"label": "GENE-resources",
			"timestamp": 1520802617832,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "4c94a18f-dd2b-4d64-86c3-91695cffa5df",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genesright.csv",
					"description": "genes id with max and min",
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "geneID",
							"name": "geneID",
							"type": "string"
						},
						{
							"label": "max",
							"name": "max",
							"type": "string"
						},
						{
							"label": "min",
							"name": "min",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<geneID></geneID>\r\n\t\t\t\t\t<max></max>\r\n\t\t\t\t\t<min></min>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(108, 146, 60) !important"
						},
						"selected": false,
						"id": "j30_1",
						"children": [
							{
								"text": "min",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j30_2",
								"children": []
							},
							{
								"text": "geneID",
								"a_attr": {
									"style": "background-color: rgb(108, 146, 60) !important"
								},
								"selected": false,
								"id": "j30_3",
								"children": []
							},
							{
								"text": "max",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j30_4",
								"children": []
							}
						]
					},
					"fileName": "genesright.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genesright.csv"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "4c94a18f-dd2b-4d64-86c3-91695cffa5df",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genesright.csv",
					"description": "genes id with max and min",
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "geneID",
							"name": "geneID",
							"type": "string"
						},
						{
							"label": "max",
							"name": "max",
							"type": "string"
						},
						{
							"label": "min",
							"name": "min",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<geneID></geneID>\r\n\t\t\t\t\t<max></max>\r\n\t\t\t\t\t<min></min>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(108, 146, 60) !important"
						},
						"selected": false,
						"id": "j30_1",
						"children": [
							{
								"text": "min",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j30_2",
								"children": []
							},
							{
								"text": "geneID",
								"a_attr": {
									"style": "background-color: rgb(108, 146, 60) !important"
								},
								"selected": false,
								"id": "j30_3",
								"children": []
							},
							{
								"text": "max",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j30_4",
								"children": []
							}
						]
					},
					"fileName": "genesright.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genesright.csv"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "7f74e7e6-ce37-411d-b264-3e0247acf55c",
			"x": -254.45183101732394,
			"y": -110.08082255038212,
			"label": "",
			"timestamp": 1520802634696,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "0b1e8320-3b3f-4da3-9e2c-68ef4d6f5556",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genesleft.csv",
					"description": "genes id with average and count value",
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "gene",
							"name": "gene",
							"type": "string"
						},
						{
							"label": "average",
							"name": "average",
							"type": "string"
						},
						{
							"label": "count",
							"name": "count",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t\t\t<average></average>\r\n\t\t\t\t\t<count></count>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(215, 160, 23) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "average",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(215, 160, 23) !important"
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							},
							{
								"text": "count",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_4",
								"children": []
							}
						]
					},
					"fileName": "genesleft.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genesleft.csv"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "genesleft.xml",
					"urlReturnFileType": "XML",
					"outAttributes": [
						{
							"label": "average",
							"name": "average",
							"type": "double ",
							"description": "average"
						},
						{
							"label": "gene",
							"name": "gene",
							"type": "string",
							"description": "gene id"
						},
						{
							"label": "count",
							"name": "count",
							"type": "int",
							"description": "count"
						}
					],
					"resourceType": "XML",
					"id": "23b0dff7-2faa-08d3-be29-73d273dceb8e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "84394826-2605-2b2b-cee8-5c16051b8e44",
					"act": "Transformer Function",
					"outputFileNames": [
						"genesleft.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"outAttributes": [
						[
							{
								"label": "average",
								"name": "average",
								"type": "double ",
								"description": "average"
							},
							{
								"label": "gene",
								"name": "gene",
								"type": "string",
								"description": "gene id"
							},
							{
								"label": "count",
								"name": "count",
								"type": "int",
								"description": "count"
							}
						]
					],
					"inputFileNames": [
						"genesleft.csv"
					],
					"webservices": [],
					"transformResources": [
						{
							"inputType": "csv",
							"Resource": "genesleft.csv",
							"Type": "XML"
						}
					],
					"updateAttrs": [],
					"newAttrs": []
				}
			]
		},
		{
			"id": "67291ebe-3fa1-46cc-b25e-6a741f5fe357",
			"x": 46.74614970891791,
			"y": -103.58131821554882,
			"label": "",
			"timestamp": 1520802706444,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "4c94a18f-dd2b-4d64-86c3-91695cffa5df",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genesright.csv",
					"description": "genes id with max and min",
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "geneID",
							"name": "geneID",
							"type": "string"
						},
						{
							"label": "max",
							"name": "max",
							"type": "string"
						},
						{
							"label": "min",
							"name": "min",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<geneID></geneID>\r\n\t\t\t\t\t<max></max>\r\n\t\t\t\t\t<min></min>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(108, 146, 60) !important"
						},
						"selected": false,
						"id": "j30_1",
						"children": [
							{
								"text": "min",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j30_2",
								"children": []
							},
							{
								"text": "geneID",
								"a_attr": {
									"style": "background-color: rgb(108, 146, 60) !important"
								},
								"selected": false,
								"id": "j30_3",
								"children": []
							},
							{
								"text": "max",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j30_4",
								"children": []
							}
						]
					},
					"fileName": "genesright.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genesright.csv"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "genesright.xml",
					"urlReturnFileType": "XML",
					"outAttributes": [
						{
							"label": "min",
							"name": "min",
							"type": "int",
							"description": "minimum value"
						},
						{
							"label": "geneID",
							"name": "geneID",
							"type": "string ",
							"description": "gene id"
						},
						{
							"label": "max",
							"name": "max",
							"type": "int",
							"description": "maximum value"
						}
					],
					"resourceType": "XML",
					"id": "ec884c0e-4d4b-0299-0d5b-2cb80e1394bd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "4da7d50c-4ea2-a37b-fc45-81cf56c2be4d",
					"act": "Transformer Function",
					"outputFileNames": [
						"genesright.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"outAttributes": [
						[
							{
								"label": "min",
								"name": "min",
								"type": "int",
								"description": "minimum value"
							},
							{
								"label": "geneID",
								"name": "geneID",
								"type": "string ",
								"description": "gene id"
							},
							{
								"label": "max",
								"name": "max",
								"type": "int",
								"description": "maximum value"
							}
						]
					],
					"inputFileNames": [
						"genesright.csv"
					],
					"webservices": [],
					"transformResources": [
						{
							"inputType": "csv",
							"Resource": "genesright.csv",
							"Type": "XML"
						}
					],
					"updateAttrs": [],
					"newAttrs": []
				}
			]
		},
		{
			"id": "35243f2f-76f1-4cbb-ac68-465fc2df7507",
			"x": -99.98329402515724,
			"y": 133.84081592542677,
			"label": "",
			"timestamp": 1520825700904,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "merged.xml",
					"urlReturnFileType": "XML",
					"outAttributes": [],
					"resourceType": "XML",
					"id": "11f146ae-a210-cbb1-785c-2e2c32dc007d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "a726cdfe-1a0b-0cb1-e2d2-97c89463f5ea",
					"act": "print",
					"outputFileNames": [
						"merged.xml"
					],
					"printType": "table",
					"resourceid": "11f146ae-a210-cbb1-785c-2e2c32dc007d",
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
			"from": "220974b7-3ce7-423e-b44f-5430cecf8461",
			"to": "7f74e7e6-ce37-411d-b264-3e0247acf55c",
			"id": "cd0ac44b-29d2-417f-b88d-64f457c19fac",
			"arrows": "to",
			"label": "genesleft.csv\n",
			"resources": [
				{
					"id": "0b1e8320-3b3f-4da3-9e2c-68ef4d6f5556",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genesleft.csv",
					"description": "genes id with average and count value",
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "gene",
							"name": "gene",
							"type": "string"
						},
						{
							"label": "average",
							"name": "average",
							"type": "string"
						},
						{
							"label": "count",
							"name": "count",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<gene></gene>\r\n\t\t\t\t\t<average></average>\r\n\t\t\t\t\t<count></count>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(215, 160, 23) !important"
						},
						"selected": false,
						"id": "j11_1",
						"children": [
							{
								"text": "average",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_2",
								"children": []
							},
							{
								"text": "gene",
								"a_attr": {
									"style": "background-color: rgb(215, 160, 23) !important"
								},
								"selected": false,
								"id": "j11_3",
								"children": []
							},
							{
								"text": "count",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j11_4",
								"children": []
							}
						]
					},
					"fileName": "genesleft.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genesleft.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "e613930d-21fd-4fe3-99d6-f1df4e695fd9",
			"to": "67291ebe-3fa1-46cc-b25e-6a741f5fe357",
			"id": "1248f908-2c57-4af7-aaf0-047f2757e333",
			"arrows": "to",
			"label": "genesright.csv\n",
			"resources": [
				{
					"id": "4c94a18f-dd2b-4d64-86c3-91695cffa5df",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genesright.csv",
					"description": "genes id with max and min",
					"aggregateName": "GENE-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "geneID",
							"name": "geneID",
							"type": "string"
						},
						{
							"label": "max",
							"name": "max",
							"type": "string"
						},
						{
							"label": "min",
							"name": "min",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\r\n\t\t\t\t\t<geneID></geneID>\r\n\t\t\t\t\t<max></max>\r\n\t\t\t\t\t<min></min>\r\n\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(108, 146, 60) !important"
						},
						"selected": false,
						"id": "j30_1",
						"children": [
							{
								"text": "min",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j30_2",
								"children": []
							},
							{
								"text": "geneID",
								"a_attr": {
									"style": "background-color: rgb(108, 146, 60) !important"
								},
								"selected": false,
								"id": "j30_3",
								"children": []
							},
							{
								"text": "max",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j30_4",
								"children": []
							}
						]
					},
					"fileName": "genesright.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genesright.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "7f74e7e6-ce37-411d-b264-3e0247acf55c",
			"to": "b68ffe50-84f2-4ebe-81c9-abe98a1d12b1",
			"id": "fafe181c-bc1d-43a7-9121-23cb2a611653",
			"arrows": "to",
			"label": "genesleft.xml\n",
			"resources": [
				{
					"urlReturnFileName": "genesleft.xml",
					"urlReturnFileType": "XML",
					"outAttributes": [
						{
							"label": "average",
							"name": "average",
							"type": "double ",
							"description": "average"
						},
						{
							"label": "gene",
							"name": "gene",
							"type": "string",
							"description": "gene id"
						},
						{
							"label": "count",
							"name": "count",
							"type": "int",
							"description": "count"
						}
					],
					"resourceType": "XML",
					"id": "23b0dff7-2faa-08d3-be29-73d273dceb8e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "67291ebe-3fa1-46cc-b25e-6a741f5fe357",
			"to": "b68ffe50-84f2-4ebe-81c9-abe98a1d12b1",
			"id": "af536de0-912d-4060-a997-615da46f9b48",
			"arrows": "to",
			"label": "genesright.xml\n",
			"resources": [
				{
					"urlReturnFileName": "genesright.xml",
					"urlReturnFileType": "XML",
					"outAttributes": [
						{
							"label": "min",
							"name": "min",
							"type": "int",
							"description": "minimum value"
						},
						{
							"label": "geneID",
							"name": "geneID",
							"type": "string ",
							"description": "gene id"
						},
						{
							"label": "max",
							"name": "max",
							"type": "int",
							"description": "maximum value"
						}
					],
					"resourceType": "XML",
					"id": "ec884c0e-4d4b-0299-0d5b-2cb80e1394bd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "b68ffe50-84f2-4ebe-81c9-abe98a1d12b1",
			"to": "35243f2f-76f1-4cbb-ac68-465fc2df7507",
			"id": "ba4cab35-8ef6-4ebf-9f25-89fe3118bc1e",
			"arrows": "to",
			"label": "merged.xml\n",
			"resources": [
				{
					"urlReturnFileName": "merged.xml",
					"urlReturnFileType": "XML",
					"outAttributes": [],
					"resourceType": "XML",
					"id": "11f146ae-a210-cbb1-785c-2e2c32dc007d",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		}
	],
	"globalmatch": []
}