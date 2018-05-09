var exampleFortyThree = {
	"nodes": [
		{
			"id": "84fc9938-c155-4fa5-abce-a5731df568f1",
			"x": -221.1875,
			"y": -193.125,
			"label": "myHumanHsa.csv\n",
			"timestamp": 1519068598697,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "77ee6da4-0e98-4742-8009-f4fa441ffda5",
					"resourceType": "CSV",
					"organization": "",
					"resourceName": "myHumanHsa.csv",
					"description": "",
					"outAttributes": [
						{
							"label": "gene",
							"name": "gene",
							"type": "int",
							"description": "human gene number"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<human&#x20;hsa><&#x20;gene></&#x20;gene></human&#x20;hsa>",
					"jsUrlReturnFileSchema": {
						"text": "human&#x20;hsa",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j16_1",
						"children": [
							{
								"text": "&#x20;gene",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j16_2",
								"children": []
							}
						]
					},
					"fileName": "myHumanHsa.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "myHumanHsa.csv"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "77ee6da4-0e98-4742-8009-f4fa441ffda5",
					"resourceType": "CSV",
					"organization": "",
					"resourceName": "myHumanHsa.csv",
					"description": "",
					"outAttributes": [
						{
							"label": "gene",
							"name": "gene",
							"type": "int",
							"description": "human gene number"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<human&#x20;hsa><&#x20;gene></&#x20;gene></human&#x20;hsa>",
					"jsUrlReturnFileSchema": {
						"text": "human&#x20;hsa",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j16_1",
						"children": [
							{
								"text": "&#x20;gene",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j16_2",
								"children": []
							}
						]
					},
					"fileName": "myHumanHsa.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "myHumanHsa.csv"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "6379265c-85a0-42d4-b208-34dd76db7bfc",
			"x": -116.92597987288136,
			"y": 2.8403072033898304,
			"label": "KEGG Orthology Procedure Call",
			"timestamp": 1519068616459,
			"type": "nested",
			"image": "image/nested.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "77ee6da4-0e98-4742-8009-f4fa441ffda5",
					"resourceType": "CSV",
					"organization": "",
					"resourceName": "myHumanHsa.csv",
					"description": "",
					"outAttributes": [
						{
							"label": "gene",
							"name": "gene",
							"type": "int",
							"description": "human gene number"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<human&#x20;hsa><&#x20;gene></&#x20;gene></human&#x20;hsa>",
					"jsUrlReturnFileSchema": {
						"text": "human&#x20;hsa",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j16_1",
						"children": [
							{
								"text": "&#x20;gene",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j16_2",
								"children": []
							}
						]
					},
					"fileName": "myHumanHsa.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "myHumanHsa.csv"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "myHuman.csv",
					"urlReturnFileType": "CSV",
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
					"resourceType": "CSV",
					"id": "4b63b622-bd5b-1794-a084-c1073a47cdd1",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "968d2906-0289-54f6-c264-7a5a25d28753",
					"act": "procedure",
					"outputFileNames": [
						"myHuman.csv"
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
					"module": {
						"fileName": "kegg orthology",
						"startNode": "f2109746-e145-448d-90e6-a38047280581",
						"endNode": "f2109746-e145-448d-90e6-a38047280581",
						"description": "get orthology",
						"graph": {
							"nodes": [
								{
									"id": "ac52be6f-f354-4498-9562-fe2f23011101",
									"x": 79.26803477932366,
									"y": -261.82671705214244,
									"label": "humangenes.csv\nKEGG orthology\n",
									"timestamp": "1518677863684",
									"type": "data",
									"image": "image/data.png",
									"shape": "image",
									"resourcesIn": [],
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
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "gene",
														"id": "j8_2",
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
												"id": "j9_1",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": "background-color: rgb(205, 165, 10) !important"
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
										}
									],
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
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "gene",
														"id": "j8_2",
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
												"id": "j9_1",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": "background-color: rgb(205, 165, 10) !important"
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
										}
									]
								},
								{
									"id": "f2109746-e145-448d-90e6-a38047280581",
									"x": 97.703125,
									"y": -76.578125,
									"label": "",
									"timestamp": "1519064601562",
									"type": "analytics",
									"image": "image/analytics error.png",
									"shape": "image",
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
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "gene",
														"id": "j8_2",
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
												"id": "j9_1",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": "background-color: rgb(205, 165, 10) !important"
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
										}
									],
									"resources": [],
									"resourcesOut": [
										{
											"id": "81e2b8af-3379-ceb7-d22a-a1fa7cf6f975",
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
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": ""
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
														"a_attr": {
															"style": "background-color: rgb(205, 165, 10) !important"
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
											"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
											"urlReturnFileName": "humanhsa.csv"
										}
									],
									"actions": [
										{
											"act": "Resource",
											"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
											"inputFileNames": [],
											"outputFileNames": [
												"humanhsa.csv"
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
													"id": "j9_1",
													"a_attr": {
														"style": ""
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "ko",
															"id": "j9_2",
															"a_attr": {
																"style": "background-color: rgb(205, 165, 10) !important"
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
								}
							],
							"edges": [
								{
									"from": "ac52be6f-f354-4498-9562-fe2f23011101",
									"to": "f2109746-e145-448d-90e6-a38047280581",
									"id": "ba355acb-39a4-40de-a11b-ecfeaddfd38c"
								}
							]
						}
					},
					"inputReplace": [
						{
							"oldFile": "humangenes.csv",
							"newFile": "myHumanHsa.csv"
						}
					],
					"outputReplace": [
						{
							"oldFile": "humanhsa.csv",
							"newFile": "myHuman.csv"
						}
					]
				}
			]
		},
		{
			"id": "4299205c-4d4c-484e-86e6-f537d3535785",
			"x": -127.59712667829235,
			"y": 151.43331930307153,
			"label": "Print Orthology",
			"timestamp": 1519628113699,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "myHuman.csv",
					"urlReturnFileType": "CSV",
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
					"resourceType": "CSV",
					"id": "4b63b622-bd5b-1794-a084-c1073a47cdd1",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "a3e1c2a8-7baa-3358-3ca3-2fee2c1ac0f6",
					"act": "print",
					"outputFileNames": [
						"myHuman.csv"
					],
					"printType": "table",
					"resourceid": "4b63b622-bd5b-1794-a084-c1073a47cdd1",
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
			"from": "84fc9938-c155-4fa5-abce-a5731df568f1",
			"to": "6379265c-85a0-42d4-b208-34dd76db7bfc",
			"id": "b07d819b-56d3-4bb0-a3d5-f8847a0a418b",
			"arrows": "to",
			"label": "myHumanHsa.csv\n",
			"resources": [
				{
					"id": "77ee6da4-0e98-4742-8009-f4fa441ffda5",
					"resourceType": "CSV",
					"organization": "",
					"resourceName": "myHumanHsa.csv",
					"description": "",
					"outAttributes": [
						{
							"label": "gene",
							"name": "gene",
							"type": "int",
							"description": "human gene number"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<human&#x20;hsa><&#x20;gene></&#x20;gene></human&#x20;hsa>",
					"jsUrlReturnFileSchema": {
						"text": "human&#x20;hsa",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j16_1",
						"children": [
							{
								"text": "&#x20;gene",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"selected": false,
								"id": "j16_2",
								"children": []
							}
						]
					},
					"fileName": "myHumanHsa.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "myHumanHsa.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "6379265c-85a0-42d4-b208-34dd76db7bfc",
			"to": "4299205c-4d4c-484e-86e6-f537d3535785",
			"id": "3c899c84-954f-468d-a69a-8f769cf63b79",
			"arrows": "to",
			"label": "myHuman.csv\n",
			"resources": [
				{
					"urlReturnFileName": "myHuman.csv",
					"urlReturnFileType": "CSV",
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
					"resourceType": "CSV",
					"id": "4b63b622-bd5b-1794-a084-c1073a47cdd1",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		}
	]
}