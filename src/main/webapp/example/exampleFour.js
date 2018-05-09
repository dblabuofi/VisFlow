var exampleFour = {
	"nodes": [
		{
			"id": "37824052-de88-47bb-9025-49a69d43baee",
			"x": 132.15625,
			"y": -159.234375,
			"label": "genes.csv\n",
			"timestamp": 1477363395179,
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
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j5_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
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
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j5_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
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
			"id": "4c7615dc-c8e8-4b23-84cb-c8ac4067598d",
			"x": 149.15625,
			"y": 99.765625,
			"label": "",
			"timestamp": 1477363437264,
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
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j5_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
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
					"urlReturnFileName": "ncbi-id.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7ccb1108-f49f-fbd6-3f5e-d66923fbb39a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "7ccb1108-f49f-fbd6-3f5e-d66923fbb39a",
					"act": "Code",
					"val": "def addbefore():\n\thandle = open('genes.csv', 'r');\n\ttarget = open('ncbi-id.csv', 'w');\n\ttarget.write('ncbigeneid\\n');\n\ti = 0;\n\tfor line in handle:\n\t\tif i > 0:\n\t\t\twords = line.split(',');\n\t\t\ttarget.write('ncbi-geneid:' + words[1]);\n\t\ti += 1;\naddbefore();",
					"codeType": "python",
					"codeName": "addbefore.py",
					"inputFileNames": [
						"genes.csv"
					],
					"outputFileNames": [
						"ncbi-id.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
		},
		{
			"id": "710a8aa9-38f7-4069-b909-96dd1d0afbd3",
			"x": -193.84375,
			"y": -150.234375,
			"label": "KEGG ncbi-geneid to hsa\nKEGG hsa to pathway id\n",
			"timestamp": 1477364578304,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "32436d64-d5d4-4eea-9272-7fbe554a0cc5",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG ncbi-geneid to hsa",
					"description": "convert ncbi-geneid to hsa id",
					"url": "http://rest.kegg.jp/conv/hsa/{ncbi-geneid}",
					"urlExample": "http://rest.kegg.jp/conv/hsa/ncbi-geneid:217",
					"method": "REST",
					"attributes": [
						{
							"label": "ncbi-geneid",
							"name": "ncbi-geneid",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbi-geneid:217",
							"attributeType": "input",
							"description": "ncbi-geneid",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "ncbi-geneid",
							"name": "ncbi-geneid",
							"type": "string"
						},
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa>\r\n\t\t\t<ncbi-geneid></ncbi-geneid>\r\n\t\t\t<hsa></hsa>\r\n\t\t</KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j12_1",
						"children": [
							{
								"text": "ncbi-geneid",
								"a_attr": {
									"style": ""
								},
								"id": "j12_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"id": "j12_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG ncbi-geneid to hsa.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG ncbi-geneid to hsa",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"ncbi-geneid",
							"hsa"
						],
						"resultContainHeaderInfo": "false"
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
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j11_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": ""
								},
								"id": "j11_3",
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
					"id": "32436d64-d5d4-4eea-9272-7fbe554a0cc5",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG ncbi-geneid to hsa",
					"description": "convert ncbi-geneid to hsa id",
					"url": "http://rest.kegg.jp/conv/hsa/{ncbi-geneid}",
					"urlExample": "http://rest.kegg.jp/conv/hsa/ncbi-geneid:217",
					"method": "REST",
					"attributes": [
						{
							"label": "ncbi-geneid",
							"name": "ncbi-geneid",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbi-geneid:217",
							"attributeType": "input",
							"description": "ncbi-geneid",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "ncbi-geneid",
							"name": "ncbi-geneid",
							"type": "string"
						},
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa>\r\n\t\t\t<ncbi-geneid></ncbi-geneid>\r\n\t\t\t<hsa></hsa>\r\n\t\t</KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j12_1",
						"children": [
							{
								"text": "ncbi-geneid",
								"a_attr": {
									"style": ""
								},
								"id": "j12_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"id": "j12_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG ncbi-geneid to hsa.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG ncbi-geneid to hsa",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"ncbi-geneid",
							"hsa"
						],
						"resultContainHeaderInfo": "false"
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
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j11_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": ""
								},
								"id": "j11_3",
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
			"id": "b3ebc851-03af-4e13-b9e5-a2988fcf0124",
			"x": -44.84375,
			"y": 100.765625,
			"label": "",
			"timestamp": 1477366489881,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "32436d64-d5d4-4eea-9272-7fbe554a0cc5",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG ncbi-geneid to hsa",
					"description": "convert ncbi-geneid to hsa id",
					"url": "http://rest.kegg.jp/conv/hsa/{ncbi-geneid}",
					"urlExample": "http://rest.kegg.jp/conv/hsa/ncbi-geneid:217",
					"method": "REST",
					"attributes": [
						{
							"label": "ncbi-geneid",
							"name": "ncbi-geneid",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbi-geneid:217",
							"attributeType": "input",
							"description": "ncbi-geneid",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "ncbi-geneid",
							"name": "ncbi-geneid",
							"type": "string"
						},
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa>\r\n\t\t\t<ncbi-geneid></ncbi-geneid>\r\n\t\t\t<hsa></hsa>\r\n\t\t</KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j8_1",
						"children": [
							{
								"text": "ncbi-geneid",
								"a_attr": {
									"style": ""
								},
								"id": "j8_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"id": "j8_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG ncbi-geneid to hsa.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG ncbi-geneid to hsa",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"ncbi-geneid",
							"hsa"
						],
						"resultContainHeaderInfo": "false"
					}
				},
				{
					"urlReturnFileName": "ncbi-id.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7ccb1108-f49f-fbd6-3f5e-d66923fbb39a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "ncbipairs.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "32436d64-d5d4-4eea-9272-7fbe554a0cc5",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "32436d64-d5d4-4eea-9272-7fbe554a0cc5",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"ncbipairs.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "32436d64-d5d4-4eea-9272-7fbe554a0cc5",
						"resourceType": "REST",
						"organization": "Kanehisa Laboratories",
						"resourceName": "KEGG ncbi-geneid to hsa",
						"description": "convert ncbi-geneid to hsa id",
						"url": "http://rest.kegg.jp/conv/hsa/{ncbi-geneid}",
						"urlExample": "http://rest.kegg.jp/conv/hsa/ncbi-geneid:217",
						"method": "REST",
						"attributes": [
							{
								"label": "ncbi-geneid",
								"name": "ncbi-geneid",
								"value": "ncbigeneid",
								"required": true,
								"shown": true,
								"example": "ncbi-geneid:217",
								"attributeType": "input",
								"description": "ncbi-geneid",
								"from": "ncbi-id.csv"
							}
						],
						"outAttributes": [
							{
								"label": "ncbi-geneid",
								"name": "ncbi-geneid",
								"type": "string"
							},
							{
								"label": "hsa",
								"name": "hsa",
								"type": "string"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "TEXT",
						"urlReturnFileSchema": "<KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa>\r\n\t\t\t<ncbi-geneid></ncbi-geneid>\r\n\t\t\t<hsa></hsa>\r\n\t\t</KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa",
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"id": "j8_1",
							"children": [
								{
									"text": "ncbi-geneid",
									"a_attr": {
										"style": ""
									},
									"id": "j8_2",
									"children": []
								},
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"id": "j8_3",
									"children": []
								}
							]
						},
						"fileName": "KEGG ncbi-geneid to hsa.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "KEGG ncbi-geneid to hsa",
						"wrapper": {
							"wrapperName": "textTableWrapper",
							"separator": "\\t",
							"headers": [
								"ncbi-geneid",
								"hsa"
							],
							"resultContainHeaderInfo": "false"
						}
					}
				}
			]
		},
		{
			"id": "d6a5c349-d0a0-47d0-8627-ffb70b76a32a",
			"x": -294.0625,
			"y": 105.7421875,
			"label": "",
			"timestamp": 1477369034940,
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
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j11_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": ""
								},
								"id": "j11_3",
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
					"urlReturnFileName": "ncbipairs.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "32436d64-d5d4-4eea-9272-7fbe554a0cc5",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathwaypairs.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
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
						"pathwaypairs.csv"
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
								"from": "ncbipairs.csv"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "TEXT",
						"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
						"jsUrlReturnFileSchema": {
							"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"id": "j11_1",
							"children": [
								{
									"text": "pathway-id",
									"a_attr": {
										"style": ""
									},
									"id": "j11_2",
									"children": []
								},
								{
									"text": "hsa-id",
									"a_attr": {
										"style": ""
									},
									"id": "j11_3",
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
			"id": "406b72f7-0e43-44c0-bd86-b6c544e72683",
			"x": -508.21320383827407,
			"y": 102.68414837903396,
			"label": "",
			"timestamp": 1477369700334,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathwaypairs.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pathway.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "f3dfad49-7ab4-d2d0-e78c-b0a13a61b215",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "f3dfad49-7ab4-d2d0-e78c-b0a13a61b215",
					"act": "Code",
					"val": "def extractPathway():\n\thandle = open('pathwaypairs.csv', 'r');\n\ttarget = open('pathway.csv', 'w');\n\ttarget.write('pathway-id\\n');\n\ti = 0;\n\tfor line in handle:\n\t\tif i > 0:\n\t\t\tline=line.replace('\"','');\n\t\t\tword = line.split(\":\");\n\t\t\ttarget.write(word[2]);\n\t\ti += 1;\nextractPathway();",
					"codeType": "python",
					"codeName": "extract.py",
					"inputFileNames": [
						"pathwaypairs.csv"
					],
					"outputFileNames": [
						"pathway.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
		},
		{
			"id": "e8cfab8a-40a7-46e8-a5f1-01b088c57632",
			"x": -493.96746510617237,
			"y": -124.08581820292346,
			"label": "",
			"timestamp": 1477375485650,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathway.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "f3dfad49-7ab4-d2d0-e78c-b0a13a61b215",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "6a5494d0-10e6-a907-2ad3-c15d732f6842",
					"act": "print",
					"outputFileNames": [
						"pathway.csv"
					],
					"printType": "table",
					"resourceid": "f3dfad49-7ab4-d2d0-e78c-b0a13a61b215",
					"numOfWins": "1",
					"submit": {
						"windowFunction": [
							"PathWay"
						],
						"values": [
							[
								"pathway-id"
							]
						]
					}
				}
			]
		}
	],
	"edges": [
		{
			"from": "37824052-de88-47bb-9025-49a69d43baee",
			"to": "4c7615dc-c8e8-4b23-84cb-c8ac4067598d",
			"id": "362eb5c1-7218-4458-b55d-5a47e2af721b",
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
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j5_1",
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": []
							},
							{
								"text": "id",
								"a_attr": {
									"style": ""
								},
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
			"from": "710a8aa9-38f7-4069-b909-96dd1d0afbd3",
			"to": "b3ebc851-03af-4e13-b9e5-a2988fcf0124",
			"id": "2af262f9-fe71-4127-b0da-e437b4aed823",
			"arrows": "to",
			"label": "KEGG ncbi-geneid to hsa\n",
			"resources": [
				{
					"id": "32436d64-d5d4-4eea-9272-7fbe554a0cc5",
					"resourceType": "REST",
					"organization": "Kanehisa Laboratories",
					"resourceName": "KEGG ncbi-geneid to hsa",
					"description": "convert ncbi-geneid to hsa id",
					"url": "http://rest.kegg.jp/conv/hsa/{ncbi-geneid}",
					"urlExample": "http://rest.kegg.jp/conv/hsa/ncbi-geneid:217",
					"method": "REST",
					"attributes": [
						{
							"label": "ncbi-geneid",
							"name": "ncbi-geneid",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ncbi-geneid:217",
							"attributeType": "input",
							"description": "ncbi-geneid",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "ncbi-geneid",
							"name": "ncbi-geneid",
							"type": "string"
						},
						{
							"label": "hsa",
							"name": "hsa",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa>\r\n\t\t\t<ncbi-geneid></ncbi-geneid>\r\n\t\t\t<hsa></hsa>\r\n\t\t</KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;ncbi-geneid&#x20;to&#x20;hsa",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j8_1",
						"children": [
							{
								"text": "ncbi-geneid",
								"a_attr": {
									"style": ""
								},
								"id": "j8_2",
								"children": []
							},
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"id": "j8_3",
								"children": []
							}
						]
					},
					"fileName": "KEGG ncbi-geneid to hsa.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "KEGG ncbi-geneid to hsa",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"ncbi-geneid",
							"hsa"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "4c7615dc-c8e8-4b23-84cb-c8ac4067598d",
			"to": "b3ebc851-03af-4e13-b9e5-a2988fcf0124",
			"id": "11319288-94bd-494a-b0a6-05abf1cc7e40",
			"arrows": "to",
			"label": "ncbi-id.csv\n",
			"resources": [
				{
					"urlReturnFileName": "ncbi-id.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "7ccb1108-f49f-fbd6-3f5e-d66923fbb39a",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "710a8aa9-38f7-4069-b909-96dd1d0afbd3",
			"to": "d6a5c349-d0a0-47d0-8627-ffb70b76a32a",
			"id": "22b33870-8309-4be4-9e33-e5767414e355",
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
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>\r\n\t\t\t<hsa-id></hsa-id>\r\n\t\t\t<pathway-id></pathway-id>\r\n\t\t</KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j11_1",
						"children": [
							{
								"text": "pathway-id",
								"a_attr": {
									"style": ""
								},
								"id": "j11_2",
								"children": []
							},
							{
								"text": "hsa-id",
								"a_attr": {
									"style": ""
								},
								"id": "j11_3",
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
			"from": "b3ebc851-03af-4e13-b9e5-a2988fcf0124",
			"to": "d6a5c349-d0a0-47d0-8627-ffb70b76a32a",
			"id": "cb06c25a-538e-460d-b9aa-60e5a097f7fb",
			"arrows": "to",
			"label": "ncbipairs.csv\n",
			"resources": [
				{
					"urlReturnFileName": "ncbipairs.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "32436d64-d5d4-4eea-9272-7fbe554a0cc5",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "d6a5c349-d0a0-47d0-8627-ffb70b76a32a",
			"to": "406b72f7-0e43-44c0-bd86-b6c544e72683",
			"id": "a4228423-c565-45da-9429-5fc0e1b5005b",
			"arrows": "to",
			"label": "pathwaypairs.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathwaypairs.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "406b72f7-0e43-44c0-bd86-b6c544e72683",
			"to": "e8cfab8a-40a7-46e8-a5f1-01b088c57632",
			"id": "d4037098-4bff-4904-bbd7-a07613fb59fc",
			"arrows": "to",
			"label": "pathway.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathway.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "f3dfad49-7ab4-d2d0-e78c-b0a13a61b215",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		}
	]
}