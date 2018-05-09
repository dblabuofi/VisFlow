var exampleSixtyNine = {
	"nodes": [
		{
			"id": "5e0ad6c5-876f-451f-80d7-4e6b337b9a34",
			"x": 451.47193617186116,
			"y": -495.54560383000165,
			"label": "KEGG-databases",
			"timestamp": 1521060840839,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "22e2aafd-1c89-4dd9-8b84-f818232fd135",
					"resourceType": "REST",
					"organization": "U of Idaho",
					"resourceName": "KEGG Pathway Entry",
					"description": "Get KEGG pathway entry",
					"aggregateName": "KEGG-databases",
					"url": "http://rest.kegg.jp/get/{pathway}",
					"method": "REST",
					"attributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa00010",
							"attributeType": "input",
							"description": "pathway description",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<Pathway&#x20;Entry><description></description></Pathway&#x20;Entry>",
					"jsUrlReturnFileSchema": {
						"text": "Pathway&#x20;Entry",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j18_1",
						"children": [
							{
								"text": "description",
								"a_attr": {
									"style": "background-color: rgb(215, 139, 14) !important"
								},
								"selected": false,
								"id": "j18_2",
								"children": []
							}
						]
					},
					"fileName": "KEGG Pathway Entry",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "KEGG Pathway Entry",
					"suggestOutputFileName": "pathwayDesc.csv"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "22e2aafd-1c89-4dd9-8b84-f818232fd135",
					"resourceType": "REST",
					"organization": "U of Idaho",
					"resourceName": "KEGG Pathway Entry",
					"description": "Get KEGG pathway entry",
					"aggregateName": "KEGG-databases",
					"url": "http://rest.kegg.jp/get/{pathway}",
					"method": "REST",
					"attributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa00010",
							"attributeType": "input",
							"description": "pathway description",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<Pathway&#x20;Entry><description></description></Pathway&#x20;Entry>",
					"jsUrlReturnFileSchema": {
						"text": "Pathway&#x20;Entry",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j18_1",
						"children": [
							{
								"text": "description",
								"a_attr": {
									"style": "background-color: rgb(215, 139, 14) !important"
								},
								"selected": false,
								"id": "j18_2",
								"children": []
							}
						]
					},
					"fileName": "KEGG Pathway Entry",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "KEGG Pathway Entry",
					"suggestOutputFileName": "pathwayDesc.csv"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "1bc33c39-22af-40ee-8564-f468fd3edd48",
			"x": 159.6855825478321,
			"y": -302.15232293965687,
			"label": "getPathwayID",
			"timestamp": 1521064422826,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathwayID",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "a9bea3ca-f206-65be-2663-8c30172170a5",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway id"
						}
					]
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathwayName",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway ids for image"
						}
					],
					"resourceType": "SQL",
					"id": "577caacf-9a29-6909-0d54-e993013eb61b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "d6df30c9-c596-5fa5-c364-889c3b0becb4",
					"act": "Code",
					"outputFileNames": [
						"pathwayName"
					],
					"outputFileTypes": [
						"SQL"
					],
					"outAttributes": [
						[
							{
								"label": "pathway",
								"name": "pathway",
								"type": "string",
								"description": "pathway ids for image"
							}
						]
					],
					"inputFileNames": [
						"pathwayID"
					],
					"val": "drop table if exists pathwayName;\ncreate table pathwayName as \nselect  substring(pathwayID.pathway, 6, 8) pathway\nfrom  pathwayID pathwayID\ngroup by  pathwayID.hsa\n;\n",
					"codeType": "sql",
					"codeName": "rEHJwIN"
				}
			]
		},
		{
			"id": "6e592627-e37c-461a-93ac-9c6c9ac0f554",
			"x": 449.77550388334936,
			"y": -259.74151572686196,
			"label": "retrieveDescription",
			"timestamp": 1521065375979,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathwayName",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway ids for image"
						}
					],
					"resourceType": "SQL",
					"id": "577caacf-9a29-6909-0d54-e993013eb61b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathwayName.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "pathway",
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
					"id": "22e2aafd-1c89-4dd9-8b84-f818232fd135",
					"resourceType": "REST",
					"organization": "U of Idaho",
					"resourceName": "KEGG Pathway Entry",
					"description": "Get KEGG pathway entry",
					"aggregateName": "KEGG-databases",
					"url": "http://rest.kegg.jp/get/{pathway}",
					"method": "REST",
					"attributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa00010",
							"attributeType": "input",
							"description": "pathway description",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "string",
							"description": "description of pathway"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<Pathway&#x20;Entry><description></description></Pathway&#x20;Entry>",
					"jsUrlReturnFileSchema": {
						"text": "Pathway&#x20;Entry",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j18_1",
						"children": [
							{
								"text": "description",
								"a_attr": {
									"style": "background-color: rgb(215, 139, 14) !important"
								},
								"selected": false,
								"id": "j18_2",
								"children": []
							}
						]
					},
					"fileName": "KEGG Pathway Entry",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "KEGG Pathway Entry",
					"suggestOutputFileName": "pathwayDesc.csv"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathwayDesc.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "string",
							"description": "description of pathway"
						}
					],
					"jsUrlReturnFileSchema": {
						"text": "Pathway&#x20;Entry",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j18_1",
						"children": [
							{
								"text": "description",
								"a_attr": {
									"style": "background-color: rgb(215, 139, 14) !important"
								},
								"selected": false,
								"id": "j18_2",
								"children": []
							}
						]
					},
					"id": "975ca860-daec-01f9-a438-78cfac275f1a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "22e2aafd-1c89-4dd9-8b84-f818232fd135",
					"act": "Resource",
					"outputFileNames": [
						"pathwayDesc.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"outAttributes": [
						[
							{
								"label": "description",
								"name": "description",
								"type": "string",
								"description": "description of pathway"
							}
						]
					],
					"inputFileNames": [
						"pathwayName",
						"KEGG Pathway Entry"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "22e2aafd-1c89-4dd9-8b84-f818232fd135",
						"resourceType": "REST",
						"organization": "U of Idaho",
						"resourceName": "KEGG Pathway Entry",
						"description": "Get KEGG pathway entry",
						"aggregateName": "KEGG-databases",
						"url": "http://rest.kegg.jp/get/{pathway}",
						"method": "REST",
						"attributes": [
							{
								"label": "pathway",
								"name": "pathway",
								"type": "String",
								"value": "pathway",
								"required": true,
								"shown": true,
								"example": "hsa00010",
								"attributeType": "input",
								"description": "pathway description",
								"from": "pathwayName"
							}
						],
						"outAttributes": [
							{
								"label": "description",
								"name": "description",
								"type": "string",
								"description": "description of pathway"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<Pathway&#x20;Entry><description></description></Pathway&#x20;Entry>",
						"jsUrlReturnFileSchema": {
							"text": "Pathway&#x20;Entry",
							"a_attr": {
								"style": ""
							},
							"selected": false,
							"id": "j18_1",
							"children": [
								{
									"text": "description",
									"a_attr": {
										"style": "background-color: rgb(215, 139, 14) !important"
									},
									"selected": false,
									"id": "j18_2",
									"children": []
								}
							]
						},
						"fileName": "KEGG Pathway Entry",
						"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
						"urlReturnFileName": "KEGG Pathway Entry",
						"suggestOutputFileName": "pathwayDesc.csv",
						"wrapper": {
							"wrapperName": "textTableWrapper",
							"headers": [
								"description"
							]
						},
						"matcher": "S-Match"
					}
				}
			]
		},
		{
			"id": "02994984-15e3-44db-a94e-8f89ee9609df",
			"x": 324.2395145334763,
			"y": -79.91969314461153,
			"label": "mergeDescription",
			"timestamp": 1521129025090,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathwayDesc.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "",
							"description": ""
						}
					],
					"jsUrlReturnFileSchema": {
						"text": "Pathway&#x20;Entry",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j18_1",
						"children": [
							{
								"text": "description",
								"a_attr": {
									"style": "background-color: rgb(215, 139, 14) !important"
								},
								"selected": false,
								"id": "j18_2",
								"children": []
							}
						]
					},
					"id": "975ca860-daec-01f9-a438-78cfac275f1a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "pathwayName",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway ids for image"
						}
					],
					"resourceType": "SQL",
					"id": "577caacf-9a29-6909-0d54-e993013eb61b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathwayName.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "pathway",
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
					"urlReturnFileName": "pathwayNameDesc",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "string",
							"description": "description"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string ",
							"description": "pathway"
						}
					],
					"resourceType": "SQL",
					"id": "01532687-fefc-2182-0999-01b4036da2d0",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "b26a7774-9742-bd6c-42dd-8d6a0c7e448a",
					"act": "Code",
					"outputFileNames": [
						"pathwayNameDesc"
					],
					"outputFileTypes": [
						"SQL"
					],
					"outAttributes": [
						[
							{
								"label": "description",
								"name": "description",
								"type": "string",
								"description": "description"
							},
							{
								"label": "pathway",
								"name": "pathway",
								"type": "string ",
								"description": "pathway"
							}
						]
					],
					"inputFileNames": [
						"pathwayDesc.csv",
						"pathwayName"
					],
					"val": "drop table if exists pathwayNameDesc;\ncreate table pathwayNameDesc as \nselect   pathwayDesc.description ,  pathwayName.pathway \nfrom   pathwayDesc ,  pathwayName \n;\n",
					"codeType": "sql",
					"codeName": "XDPhGCO"
				}
			]
		},
		{
			"id": "94fe84bb-e8e1-47d4-8694-b20bab0b391e",
			"x": 79.95326498777766,
			"y": 120.25931689978046,
			"label": "combinePathways",
			"timestamp": 1521131266070,
			"type": "combine",
			"image": "image/combine.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathwayNameDesc",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "string",
							"description": "description"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string ",
							"description": "pathway"
						}
					],
					"resourceType": "SQL",
					"id": "01532687-fefc-2182-0999-01b4036da2d0",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "pathwayClean",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "pathway",
							"description": "pathway id"
						}
					],
					"resourceType": "SQL",
					"id": "dde31be2-cd6e-354d-a6ec-e07d42e4c942",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathways",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "string",
							"description": "description"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway ids for image"
						},
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						}
					],
					"resourceType": "SQL",
					"id": "8da3b813-1767-3e1c-c3b5-ca1d4507cd85",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "5e8d4753-2335-3031-1739-0dd79ef85eff",
					"act": "Combine",
					"matcher": "S-Match",
					"identifier": "Gordian",
					"outputFileNames": [
						"pathways"
					],
					"outputFileTypes": [
						"SQL"
					],
					"outAttributes": [
						[
							{
								"label": "description",
								"name": "description",
								"type": "string",
								"description": "description"
							},
							{
								"label": "pathway",
								"name": "pathway",
								"type": "string",
								"description": "pathway ids for image"
							},
							{
								"label": "hsa",
								"name": "hsa",
								"type": "string",
								"description": "hsa id"
							}
						]
					],
					"leftKeys": [
						"pathway"
					],
					"rightKeys": [
						"pathway"
					]
				}
			]
		},
		{
			"id": "1f96f039-9eda-43ad-9423-506d177805ee",
			"x": -113.44001590256714,
			"y": -95.1875837412177,
			"label": "cleanPathway",
			"timestamp": 1521135167592,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathwayID",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "a9bea3ca-f206-65be-2663-8c30172170a5",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway id"
						}
					]
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathwayClean",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "pathway",
							"description": "pathway id"
						}
					],
					"resourceType": "SQL",
					"id": "dde31be2-cd6e-354d-a6ec-e07d42e4c942",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "9673c1c6-e265-e84e-4db2-e61a93cfdf00",
					"act": "Code",
					"outputFileNames": [
						"pathwayClean"
					],
					"outputFileTypes": [
						"SQL"
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
								"label": "pathway",
								"name": "pathway",
								"type": "pathway",
								"description": "pathway id"
							}
						]
					],
					"inputFileNames": [
						"pathwayID"
					],
					"val": "drop table if exists pathwayClean;\ncreate table pathwayClean as \nselect   pathwayID.hsa ,  (substring(pathwayID.pathway, 6, 8)) pathway \nfrom   pathwayID \n;\n",
					"codeType": "sql",
					"codeName": "vglTfDd"
				}
			]
		},
		{
			"id": "ef40a742-d16f-47ba-b6b2-f6a02d9e9221",
			"x": 602.454409849411,
			"y": 121.95574918829224,
			"label": "showPathwayImage",
			"timestamp": 1521135471583,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathways",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "string",
							"description": "description"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway ids for image"
						},
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						}
					],
					"resourceType": "SQL",
					"id": "8da3b813-1767-3e1c-c3b5-ca1d4507cd85",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "a0172a9a-0609-b298-b835-7d9b83167009",
					"act": "print",
					"outputFileNames": [
						"pathways"
					],
					"printType": "table",
					"resourceid": "8da3b813-1767-3e1c-c3b5-ca1d4507cd85",
					"numOfWins": "1",
					"submit": {
						"windowFunction": [
							"PathWay"
						],
						"values": [
							[
								"pathway"
							]
						]
					},
					"colFuns": []
				}
			]
		},
		{
			"id": "7aaf8a37-f27e-4659-86c9-482f6206c9ad",
			"x": -116.83288047959073,
			"y": -451.43836432869495,
			"label": "KEGGEntreztoPathway",
			"timestamp": 1521341624061,
			"type": "nested",
			"image": "image/nested.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathwayID",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "a9bea3ca-f206-65be-2663-8c30172170a5",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway id"
						}
					]
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "87e70d76-b994-d25f-06b8-962883695e84",
					"act": "procedure",
					"outputFileNames": [
						"pathwayID"
					],
					"outputFileTypes": [
						"SQL"
					],
					"outAttributes": [],
					"module": {
						"fileName": "KEGG Entrez to Pathway",
						"startNode": "44d8fe1a-cd97-4608-8df9-09faf25a57a6",
						"endNode": "44d8fe1a-cd97-4608-8df9-09faf25a57a6",
						"description": "KEGG Entrez to Pathway",
						"graph": {
							"nodes": [
								{
									"id": "44d8fe1a-cd97-4608-8df9-09faf25a57a6",
									"x": -182.36805725097656,
									"y": -355.7569580078125,
									"label": "GENE-resources",
									"timestamp": "1521050114901",
									"type": "data",
									"image": "image/data.png",
									"shape": "image",
									"resourcesIn": [],
									"resources": [
										{
											"id": "a9415e2f-25b0-4ea1-9ad2-4ce04a7985a6",
											"resourceType": "CSV",
											"organization": "",
											"resourceName": "entrez.csv",
											"description": "",
											"aggregateName": "GENE-resources",
											"url": "",
											"outAttributes": [
												{
													"label": "entrez",
													"name": "entrez",
													"type": "",
													"description": ""
												}
											],
											"methodReturnFileType": "CSV",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<entrez&#x20;ids><entrez></entrez></entrez&#x20;ids>",
											"jsUrlReturnFileSchema": {
												"text": "entrez&#x20;ids",
												"id": "j5_1",
												"a_attr": {
													"style": "background-color: rgb(141, 102, 162) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "entrez",
														"id": "j5_2",
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
											"fileName": "entrez.csv",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "entrez.csv"
										}
									],
									"resourcesOut": [
										{
											"id": "a9415e2f-25b0-4ea1-9ad2-4ce04a7985a6",
											"resourceType": "CSV",
											"organization": "",
											"resourceName": "entrez.csv",
											"description": "",
											"aggregateName": "GENE-resources",
											"url": "",
											"outAttributes": [
												{
													"label": "entrez",
													"name": "entrez",
													"type": "",
													"description": ""
												}
											],
											"methodReturnFileType": "CSV",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<entrez&#x20;ids><entrez></entrez></entrez&#x20;ids>",
											"jsUrlReturnFileSchema": {
												"text": "entrez&#x20;ids",
												"id": "j5_1",
												"a_attr": {
													"style": "background-color: rgb(141, 102, 162) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "entrez",
														"id": "j5_2",
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
											"fileName": "entrez.csv",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "entrez.csv"
										}
									]
								},
								{
									"id": "a8c62789-dce9-44cd-aec5-421d174b509e",
									"x": -188.6225664790567,
									"y": -31.010434532948636,
									"label": "addPrefix",
									"timestamp": "1521050134674",
									"type": "adapter",
									"image": "image/adapter.png",
									"shape": "image",
									"resourcesIn": [
										{
											"id": "a9415e2f-25b0-4ea1-9ad2-4ce04a7985a6",
											"resourceType": "CSV",
											"organization": "",
											"resourceName": "entrez.csv",
											"description": "",
											"aggregateName": "GENE-resources",
											"url": "",
											"outAttributes": [
												{
													"label": "entrez",
													"name": "entrez",
													"type": "",
													"description": ""
												}
											],
											"methodReturnFileType": "CSV",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<entrez&#x20;ids><entrez></entrez></entrez&#x20;ids>",
											"jsUrlReturnFileSchema": {
												"text": "entrez&#x20;ids",
												"id": "j5_1",
												"a_attr": {
													"style": "background-color: rgb(141, 102, 162) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "entrez",
														"id": "j5_2",
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
											"fileName": "entrez.csv",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "entrez.csv"
										}
									],
									"resources": [],
									"resourcesOut": [
										{
											"id": "72708c1d-b3c2-9e63-e2c0-631b63ee1655",
											"resourceType": "SQL",
											"outAttributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "string",
													"description": "gene id"
												}
											],
											"urlReturnFileType": "SQL",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "entrezTable"
										}
									],
									"actions": [
										{
											"act": "Code",
											"id": "2c8cec2a-84dd-2b80-12d8-1e907593d46d",
											"inputFileNames": [
												"entrez.csv"
											],
											"outputFileNames": [
												"entrezTable"
											],
											"outputFileTypes": [
												"SQL"
											],
											"val": "drop table if exists entrezTable;\ncreate table entrezTable as \nselect  (concat('ncbi-geneid:', entrez.entrez)) gene\nfrom  entrez entrez\n;\n",
											"codeType": "sql",
											"codeName": "LYrQLtb"
										}
									]
								},
								{
									"id": "5e0ad6c5-876f-451f-80d7-4e6b337b9a34",
									"x": 75.63451672024328,
									"y": -342.1130915721245,
									"label": "KEGG-databases",
									"timestamp": "1521060840839",
									"type": "data",
									"image": "image/data.png",
									"shape": "image",
									"resourcesIn": [],
									"resources": [
										{
											"id": "3765531b-1c13-4036-8537-abdfe6987943",
											"resourceType": "REST",
											"organization": "U of Idaho",
											"resourceName": "KEGG entrez to hsa",
											"description": "KEGG entrez to hsa",
											"aggregateName": "KEGG-databases",
											"url": "http://rest.kegg.jp/conv/hsa/{gene}",
											"method": "REST",
											"attributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "String",
													"value": "",
													"required": true,
													"shown": true,
													"example": "ncbi-geneid:5211",
													"attributeType": "input",
													"description": "nebi id",
													"from": "default"
												}
											],
											"outAttributes": [
												{
													"label": "ncbi",
													"name": "ncbi",
													"type": "string",
													"description": "ncbi id"
												},
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<entrez><ncbi></ncbi><hsa></hsa></entrez>",
											"jsUrlReturnFileSchema": {
												"text": "entrez",
												"id": "j12_1",
												"a_attr": {
													"style": "background-color: rgb(138, 93, 52) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j12_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "ncbi",
														"id": "j12_3",
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
											"fileName": "KEGG entrez to hsa",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG entrez to hsa",
											"suggestOutputFileName": "entrezhsa.csv"
										},
										{
											"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
											"resourceType": "REST",
											"organization": "Kanehisa Laboratories",
											"resourceName": "GeneIdToPathwayId",
											"description": "convert hsa id to pathway id",
											"aggregateName": "KEGG-databases",
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
											"outAttributes": [
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												},
												{
													"label": "pathway",
													"name": "pathway",
													"type": "string",
													"description": "pathway id"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
												"id": "j6_1",
												"a_attr": {
													"style": "background-color: rgb(168, 211, 0) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j6_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "pathway",
														"id": "j6_3",
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
											"fileName": "KEGG hsa to pathway id.xml",
											"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
											"urlReturnFileName": "GeneIdToPathwayId",
											"suggestOutputFileName": "keggpathway.csv",
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
									"resourcesOut": [
										{
											"id": "3765531b-1c13-4036-8537-abdfe6987943",
											"resourceType": "REST",
											"organization": "U of Idaho",
											"resourceName": "KEGG entrez to hsa",
											"description": "KEGG entrez to hsa",
											"aggregateName": "KEGG-databases",
											"url": "http://rest.kegg.jp/conv/hsa/{gene}",
											"method": "REST",
											"attributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "String",
													"value": "",
													"required": true,
													"shown": true,
													"example": "ncbi-geneid:5211",
													"attributeType": "input",
													"description": "nebi id",
													"from": "default"
												}
											],
											"outAttributes": [
												{
													"label": "ncbi",
													"name": "ncbi",
													"type": "string",
													"description": "ncbi id"
												},
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<entrez><ncbi></ncbi><hsa></hsa></entrez>",
											"jsUrlReturnFileSchema": {
												"text": "entrez",
												"id": "j12_1",
												"a_attr": {
													"style": "background-color: rgb(138, 93, 52) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j12_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "ncbi",
														"id": "j12_3",
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
											"fileName": "KEGG entrez to hsa",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG entrez to hsa",
											"suggestOutputFileName": "entrezhsa.csv"
										},
										{
											"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
											"resourceType": "REST",
											"organization": "Kanehisa Laboratories",
											"resourceName": "GeneIdToPathwayId",
											"description": "convert hsa id to pathway id",
											"aggregateName": "KEGG-databases",
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
											"outAttributes": [
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												},
												{
													"label": "pathway",
													"name": "pathway",
													"type": "string",
													"description": "pathway id"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
												"id": "j6_1",
												"a_attr": {
													"style": "background-color: rgb(168, 211, 0) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j6_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "pathway",
														"id": "j6_3",
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
											"fileName": "KEGG hsa to pathway id.xml",
											"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
											"urlReturnFileName": "GeneIdToPathwayId",
											"suggestOutputFileName": "keggpathway.csv",
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
									]
								},
								{
									"id": "f597bbf0-71f2-4279-8d63-333aca388823",
									"x": 9.712489675453444,
									"y": -28.016035199902312,
									"label": "retrieveKEGGIDs",
									"timestamp": "1521061474509",
									"type": "adapter",
									"image": "image/adapter.png",
									"shape": "image",
									"resourcesIn": [
										{
											"id": "3765531b-1c13-4036-8537-abdfe6987943",
											"resourceType": "REST",
											"organization": "U of Idaho",
											"resourceName": "KEGG entrez to hsa",
											"description": "KEGG entrez to hsa",
											"aggregateName": "KEGG-databases",
											"url": "http://rest.kegg.jp/conv/hsa/{gene}",
											"method": "REST",
											"attributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "String",
													"value": "",
													"required": true,
													"shown": true,
													"example": "ncbi-geneid:5211",
													"attributeType": "input",
													"description": "nebi id",
													"from": "default"
												}
											],
											"outAttributes": [
												{
													"label": "ncbi",
													"name": "ncbi",
													"type": "string",
													"description": "ncbi id"
												},
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<entrez><ncbi></ncbi><hsa></hsa></entrez>",
											"jsUrlReturnFileSchema": {
												"text": "entrez",
												"id": "j12_1",
												"a_attr": {
													"style": "background-color: rgb(138, 93, 52) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j12_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "ncbi",
														"id": "j12_3",
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
											"fileName": "KEGG entrez to hsa",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG entrez to hsa",
											"suggestOutputFileName": "entrezhsa.csv"
										},
										{
											"id": "72708c1d-b3c2-9e63-e2c0-631b63ee1655",
											"resourceType": "SQL",
											"outAttributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "string",
													"description": "gene id"
												}
											],
											"urlReturnFileType": "SQL",
											"jsUrlReturnFileSchema": {
												"text": "entrezTable.csv",
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
											},
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "entrezTable"
										}
									],
									"resources": [],
									"resourcesOut": [
										{
											"id": "5c62286d-da6b-f48b-7ea6-025443a5568f",
											"resourceType": "CSV",
											"outAttributes": [
												{
													"label": "ncbi",
													"name": "ncbi",
													"type": "string",
													"description": "ncbi id"
												},
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												}
											],
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "entrez",
												"id": "j12_1",
												"a_attr": {
													"style": "background-color: rgb(138, 93, 52) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j12_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "ncbi",
														"id": "j12_3",
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
											"urlReturnFileName": "entrezhsa.csv"
										}
									],
									"actions": [
										{
											"act": "Resource",
											"id": "3765531b-1c13-4036-8537-abdfe6987943",
											"inputFileNames": [
												"KEGG entrez to hsa",
												"entrezTable"
											],
											"outputFileNames": [
												"entrezhsa.csv"
											],
											"outputFileTypes": [
												"CSV"
											],
											"resultMethod": "Append",
											"targetResource": {
												"id": "3765531b-1c13-4036-8537-abdfe6987943",
												"resourceType": "REST",
												"organization": "U of Idaho",
												"resourceName": "KEGG entrez to hsa",
												"description": "KEGG entrez to hsa",
												"aggregateName": "KEGG-databases",
												"url": "http://rest.kegg.jp/conv/hsa/{gene}",
												"method": "REST",
												"attributes": [
													{
														"label": "gene",
														"name": "gene",
														"type": "String",
														"value": "gene",
														"required": true,
														"shown": true,
														"example": "ncbi-geneid:5211",
														"attributeType": "input",
														"description": "nebi id",
														"from": "entrezTable"
													}
												],
												"outAttributes": [
													{
														"label": "ncbi",
														"name": "ncbi",
														"type": "string",
														"description": "ncbi id"
													},
													{
														"label": "hsa",
														"name": "hsa",
														"type": "string",
														"description": "hsa id"
													}
												],
												"methodReturnFileType": "TEXT",
												"urlReturnFileType": "CSV",
												"urlReturnFileSchema": "<entrez><ncbi></ncbi><hsa></hsa></entrez>",
												"jsUrlReturnFileSchema": {
													"text": "entrez",
													"id": "j12_1",
													"a_attr": {
														"style": "background-color: rgb(138, 93, 52) !important"
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "hsa",
															"id": "j12_2",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": []
														},
														{
															"text": "ncbi",
															"id": "j12_3",
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
												"fileName": "KEGG entrez to hsa",
												"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
												"urlReturnFileName": "KEGG entrez to hsa",
												"suggestOutputFileName": "entrezhsa.csv",
												"wrapper": {
													"wrapperName": "textTableWrapper",
													"headers": [
														"ncbi",
														"hsa"
													]
												},
												"matcher": "S-Match"
											},
											"webservices": []
										}
									]
								},
								{
									"id": "12b2e8ce-39a5-4e82-bdf7-0c62e6a7b31d",
									"x": 259.41330639975644,
									"y": -32.21160309294545,
									"label": "retrievePathwayIDs",
									"timestamp": "1521063030734",
									"type": "adapter",
									"image": "image/adapter.png",
									"shape": "image",
									"resourcesIn": [
										{
											"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
											"resourceType": "REST",
											"organization": "Kanehisa Laboratories",
											"resourceName": "GeneIdToPathwayId",
											"description": "convert hsa id to pathway id",
											"aggregateName": "KEGG-databases",
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
											"outAttributes": [
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												},
												{
													"label": "pathway",
													"name": "pathway",
													"type": "string",
													"description": "pathway id"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
												"id": "j6_1",
												"a_attr": {
													"style": "background-color: rgb(168, 211, 0) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j6_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "pathway",
														"id": "j6_3",
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
											"fileName": "KEGG hsa to pathway id.xml",
											"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
											"urlReturnFileName": "GeneIdToPathwayId",
											"suggestOutputFileName": "keggpathway.csv",
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
											"id": "5c62286d-da6b-f48b-7ea6-025443a5568f",
											"resourceType": "CSV",
											"outAttributes": [
												{
													"label": "ncbi",
													"name": "ncbi",
													"type": "string",
													"description": "ncbi id"
												},
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												}
											],
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "entrez",
												"id": "j12_1",
												"a_attr": {
													"style": "background-color: rgb(138, 93, 52) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j12_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "ncbi",
														"id": "j12_3",
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
											"urlReturnFileName": "entrezhsa.csv"
										}
									],
									"resources": [],
									"resourcesOut": [
										{
											"id": "6d3be6b7-3735-8a65-25e9-d531e07d06d3",
											"resourceType": "SQL",
											"outAttributes": [
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												},
												{
													"label": "pathway",
													"name": "pathway",
													"type": "string",
													"description": "pathway id"
												}
											],
											"urlReturnFileType": "SQL",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
												"id": "j6_1",
												"a_attr": {
													"style": "background-color: rgb(168, 211, 0) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j6_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "pathway",
														"id": "j6_3",
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
											"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
											"urlReturnFileName": "pathwayID"
										}
									],
									"actions": [
										{
											"act": "Resource",
											"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
											"inputFileNames": [
												"GeneIdToPathwayId",
												"entrezhsa.csv"
											],
											"outputFileNames": [
												"pathwayID"
											],
											"outputFileTypes": [
												"SQL"
											],
											"resultMethod": "Append",
											"targetResource": {
												"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
												"resourceType": "REST",
												"organization": "Kanehisa Laboratories",
												"resourceName": "GeneIdToPathwayId",
												"description": "convert hsa id to pathway id",
												"aggregateName": "KEGG-databases",
												"url": "http://rest.kegg.jp/link/pathway/{hsa}",
												"method": "REST",
												"attributes": [
													{
														"label": "hsa",
														"name": "hsa",
														"type": "string",
														"value": "hsa",
														"required": true,
														"shown": true,
														"example": "hsa:217",
														"attributeType": "input",
														"description": "hsa",
														"from": "entrezhsa.csv"
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
														"label": "pathway",
														"name": "pathway",
														"type": "string",
														"description": "pathway id"
													}
												],
												"methodReturnFileType": "TEXT",
												"urlReturnFileType": "CSV",
												"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
												"jsUrlReturnFileSchema": {
													"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
													"id": "j6_1",
													"a_attr": {
														"style": "background-color: rgb(168, 211, 0) !important"
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "hsa",
															"id": "j6_2",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": []
														},
														{
															"text": "pathway",
															"id": "j6_3",
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
												"fileName": "KEGG hsa to pathway id.xml",
												"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
												"urlReturnFileName": "GeneIdToPathwayId",
												"suggestOutputFileName": "keggpathway.csv",
												"wrapper": {
													"wrapperName": "textTableWrapper",
													"headers": [
														"hsa",
														"pathway"
													]
												},
												"matcher": "S-Match"
											},
											"webservices": []
										}
									]
								}
							],
							"edges": [
								{
									"from": "44d8fe1a-cd97-4608-8df9-09faf25a57a6",
									"to": "a8c62789-dce9-44cd-aec5-421d174b509e",
									"id": "a02a704c-c09d-4141-b6d9-9cac414559ed",
									"resources": [
										{
											"id": "a9415e2f-25b0-4ea1-9ad2-4ce04a7985a6",
											"resourceType": "CSV",
											"organization": "",
											"resourceName": "entrez.csv",
											"description": "",
											"aggregateName": "GENE-resources",
											"url": "",
											"outAttributes": [
												{
													"label": "entrez",
													"name": "entrez",
													"type": "",
													"description": ""
												}
											],
											"methodReturnFileType": "CSV",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<entrez&#x20;ids><entrez></entrez></entrez&#x20;ids>",
											"jsUrlReturnFileSchema": {
												"text": "entrez&#x20;ids",
												"id": "j5_1",
												"a_attr": {
													"style": "background-color: rgb(141, 102, 162) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "entrez",
														"id": "j5_2",
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
											"fileName": "entrez.csv",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "entrez.csv"
										}
									],
									"libraries": [],
									"label": "entrez.csv\n"
								},
								{
									"from": "5e0ad6c5-876f-451f-80d7-4e6b337b9a34",
									"to": "f597bbf0-71f2-4279-8d63-333aca388823",
									"id": "5b37692a-c9e4-4a39-80a2-fb650433de5b",
									"resources": [
										{
											"id": "3765531b-1c13-4036-8537-abdfe6987943",
											"resourceType": "REST",
											"organization": "U of Idaho",
											"resourceName": "KEGG entrez to hsa",
											"description": "KEGG entrez to hsa",
											"aggregateName": "KEGG-databases",
											"url": "http://rest.kegg.jp/conv/hsa/{gene}",
											"method": "REST",
											"attributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "String",
													"value": "",
													"required": true,
													"shown": true,
													"example": "ncbi-geneid:5211",
													"attributeType": "input",
													"description": "nebi id",
													"from": "default"
												}
											],
											"outAttributes": [
												{
													"label": "ncbi",
													"name": "ncbi",
													"type": "string",
													"description": "ncbi id"
												},
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<entrez><ncbi></ncbi><hsa></hsa></entrez>",
											"jsUrlReturnFileSchema": {
												"text": "entrez",
												"id": "j12_1",
												"a_attr": {
													"style": "background-color: rgb(138, 93, 52) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j12_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "ncbi",
														"id": "j12_3",
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
											"fileName": "KEGG entrez to hsa",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "KEGG entrez to hsa",
											"suggestOutputFileName": "entrezhsa.csv"
										}
									],
									"libraries": [],
									"label": "KEGG entrez to hsa\n"
								},
								{
									"from": "a8c62789-dce9-44cd-aec5-421d174b509e",
									"to": "f597bbf0-71f2-4279-8d63-333aca388823",
									"id": "ddd5359d-af69-45f0-82a6-7a8b59025d7b",
									"resources": [
										{
											"id": "72708c1d-b3c2-9e63-e2c0-631b63ee1655",
											"resourceType": "SQL",
											"outAttributes": [
												{
													"label": "gene",
													"name": "gene",
													"type": "string",
													"description": "gene id"
												}
											],
											"urlReturnFileType": "SQL",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "entrezTable"
										}
									],
									"libraries": [],
									"label": "entrezTable\n"
								},
								{
									"from": "5e0ad6c5-876f-451f-80d7-4e6b337b9a34",
									"to": "12b2e8ce-39a5-4e82-bdf7-0c62e6a7b31d",
									"id": "3a10c6ab-5139-4885-b15f-1558848cf090",
									"resources": [
										{
											"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
											"resourceType": "REST",
											"organization": "Kanehisa Laboratories",
											"resourceName": "GeneIdToPathwayId",
											"description": "convert hsa id to pathway id",
											"aggregateName": "KEGG-databases",
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
											"outAttributes": [
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												},
												{
													"label": "pathway",
													"name": "pathway",
													"type": "string",
													"description": "pathway id"
												}
											],
											"methodReturnFileType": "TEXT",
											"urlReturnFileType": "CSV",
											"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<pathway></pathway>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
												"id": "j6_1",
												"a_attr": {
													"style": "background-color: rgb(168, 211, 0) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j6_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "pathway",
														"id": "j6_3",
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
											"fileName": "KEGG hsa to pathway id.xml",
											"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
											"urlReturnFileName": "GeneIdToPathwayId",
											"suggestOutputFileName": "keggpathway.csv",
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
									"label": "GeneIdToPathwayId\n"
								},
								{
									"from": "f597bbf0-71f2-4279-8d63-333aca388823",
									"to": "12b2e8ce-39a5-4e82-bdf7-0c62e6a7b31d",
									"id": "ceec66f6-896a-4e58-9e32-37134701711d",
									"resources": [
										{
											"id": "5c62286d-da6b-f48b-7ea6-025443a5568f",
											"resourceType": "CSV",
											"outAttributes": [
												{
													"label": "ncbi",
													"name": "ncbi",
													"type": "string",
													"description": "ncbi id"
												},
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "hsa id"
												}
											],
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "entrez",
												"id": "j12_1",
												"a_attr": {
													"style": "background-color: rgb(138, 93, 52) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "hsa",
														"id": "j12_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "ncbi",
														"id": "j12_3",
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
											"urlReturnFileName": "entrezhsa.csv"
										}
									],
									"libraries": [],
									"label": "entrezhsa.csv\n"
								}
							],
							"globalmatch": []
						}
					},
					"inputReplace": [],
					"outputReplace": [
						{
							"oldFile": "pathwayID",
							"newFile": "pathwayID"
						}
					]
				}
			]
		}
	],
	"edges": [
		{
			"from": "5e0ad6c5-876f-451f-80d7-4e6b337b9a34",
			"to": "6e592627-e37c-461a-93ac-9c6c9ac0f554",
			"id": "e4287e45-bb16-4df7-9183-f71b8077c417",
			"arrows": "to",
			"label": "KEGG Pathway Entry\n",
			"resources": [
				{
					"id": "22e2aafd-1c89-4dd9-8b84-f818232fd135",
					"resourceType": "REST",
					"organization": "U of Idaho",
					"resourceName": "KEGG Pathway Entry",
					"description": "Get KEGG pathway entry",
					"aggregateName": "KEGG-databases",
					"url": "http://rest.kegg.jp/get/{pathway}",
					"method": "REST",
					"attributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "hsa00010",
							"attributeType": "input",
							"description": "pathway description",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<Pathway&#x20;Entry><description></description></Pathway&#x20;Entry>",
					"jsUrlReturnFileSchema": {
						"text": "Pathway&#x20;Entry",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j18_1",
						"children": [
							{
								"text": "description",
								"a_attr": {
									"style": "background-color: rgb(215, 139, 14) !important"
								},
								"selected": false,
								"id": "j18_2",
								"children": []
							}
						]
					},
					"fileName": "KEGG Pathway Entry",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "KEGG Pathway Entry",
					"suggestOutputFileName": "pathwayDesc.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "1bc33c39-22af-40ee-8564-f468fd3edd48",
			"to": "6e592627-e37c-461a-93ac-9c6c9ac0f554",
			"id": "f0202aa0-453d-482c-936d-d81a23a3719d",
			"arrows": "to",
			"label": "pathwayName\n",
			"resources": [
				{
					"urlReturnFileName": "pathwayName",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway ids for image"
						}
					],
					"resourceType": "SQL",
					"id": "577caacf-9a29-6909-0d54-e993013eb61b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "1bc33c39-22af-40ee-8564-f468fd3edd48",
			"to": "02994984-15e3-44db-a94e-8f89ee9609df",
			"id": "253d23e7-b3d5-4797-a41a-cf32f5b54713",
			"arrows": "to",
			"label": "pathwayName\n",
			"resources": [
				{
					"urlReturnFileName": "pathwayName",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway ids for image"
						}
					],
					"resourceType": "SQL",
					"id": "577caacf-9a29-6909-0d54-e993013eb61b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "6e592627-e37c-461a-93ac-9c6c9ac0f554",
			"to": "02994984-15e3-44db-a94e-8f89ee9609df",
			"id": "53f031ed-5770-4671-8b48-ba8ac7dd675d",
			"arrows": "to",
			"label": "pathwayDesc.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathwayDesc.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "",
							"description": ""
						}
					],
					"jsUrlReturnFileSchema": {
						"text": "Pathway&#x20;Entry",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j18_1",
						"children": [
							{
								"text": "description",
								"a_attr": {
									"style": "background-color: rgb(215, 139, 14) !important"
								},
								"selected": false,
								"id": "j18_2",
								"children": []
							}
						]
					},
					"id": "975ca860-daec-01f9-a438-78cfac275f1a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "02994984-15e3-44db-a94e-8f89ee9609df",
			"to": "94fe84bb-e8e1-47d4-8694-b20bab0b391e",
			"id": "95f5fa6e-f4b3-460d-90f4-404f93aee051",
			"arrows": "to",
			"label": "pathwayNameDesc\n",
			"resources": [
				{
					"urlReturnFileName": "pathwayNameDesc",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "string",
							"description": "description"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string ",
							"description": "pathway"
						}
					],
					"resourceType": "SQL",
					"id": "01532687-fefc-2182-0999-01b4036da2d0",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "1f96f039-9eda-43ad-9423-506d177805ee",
			"to": "94fe84bb-e8e1-47d4-8694-b20bab0b391e",
			"id": "e1606468-9ca1-4130-a5dc-13fd3e892302",
			"arrows": "to",
			"label": "pathwayClean\n",
			"resources": [
				{
					"urlReturnFileName": "pathwayClean",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "pathway",
							"description": "pathway id"
						}
					],
					"resourceType": "SQL",
					"id": "dde31be2-cd6e-354d-a6ec-e07d42e4c942",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "94fe84bb-e8e1-47d4-8694-b20bab0b391e",
			"to": "ef40a742-d16f-47ba-b6b2-f6a02d9e9221",
			"id": "58f005e0-7fe2-4b20-be58-4887d9a5a490",
			"arrows": "to",
			"label": "pathways\n",
			"resources": [
				{
					"urlReturnFileName": "pathways",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "description",
							"name": "description",
							"type": "string",
							"description": "description"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway ids for image"
						},
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						}
					],
					"resourceType": "SQL",
					"id": "8da3b813-1767-3e1c-c3b5-ca1d4507cd85",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "7aaf8a37-f27e-4659-86c9-482f6206c9ad",
			"to": "1f96f039-9eda-43ad-9423-506d177805ee",
			"id": "757346a8-65b8-4481-868a-57bb350a5a86",
			"arrows": "to",
			"label": "pathwayID\n",
			"resources": [
				{
					"urlReturnFileName": "pathwayID",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "a9bea3ca-f206-65be-2663-8c30172170a5",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway id"
						}
					]
				}
			],
			"libraries": []
		},
		{
			"from": "7aaf8a37-f27e-4659-86c9-482f6206c9ad",
			"to": "1bc33c39-22af-40ee-8564-f468fd3edd48",
			"id": "304ca7b7-2509-4178-b348-a5b6e7a7b352",
			"arrows": "to",
			"label": "pathwayID\n",
			"resources": [
				{
					"urlReturnFileName": "pathwayID",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "a9bea3ca-f206-65be-2663-8c30172170a5",
					"outAttributes": [
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string",
							"description": "hsa id"
						},
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway id"
						}
					]
				}
			],
			"libraries": []
		}
	],
	"globalmatch": []
}