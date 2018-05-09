var exampleThirtyOne = {
	"nodes": [
		{
			"id": "37824052-de88-47bb-9025-49a69d43baee",
			"x": "567.46875",
			"y": "-289.53125",
			"label": "genes.csv\n",
			"timestamp": "1477363395179",
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
							"label": "genes",
							"name": "genes",
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
								"text": "genes",
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
							"label": "genes",
							"name": "genes",
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
								"text": "genes",
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
			"id": "710a8aa9-38f7-4069-b909-96dd1d0afbd3",
			"x": 140.46875,
			"y": -286.53125,
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
			"x": 279.46875,
			"y": 38.46875,
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
					"id": "268815fe-7353-8340-7f2a-da1df30c7a7b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "ncbi-id.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "ncbigeneid",
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
								"value": "ncbi",
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
					},
					"afterAction": {
						"action": "none"
					}
				}
			]
		},
		{
			"id": "d6a5c349-d0a0-47d0-8627-ffb70b76a32a",
			"x": -53.53125,
			"y": 42.46875,
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
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "ncbipairs.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "ncbi-geneid",
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
			"x": -323.53125,
			"y": 42.46875,
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
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathwaypairs.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "hsa-id",
								"a_attr": {
									"style": ""
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "pathway-id",
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
					"urlReturnFileName": "pathwaywhole.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "d2a6f478-1faa-be8d-d0be-15d13e68e5db",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "02a4c471-292d-d55b-9efb-caa8c3fb1fc0",
					"act": "ExtractFunction",
					"targetResource": {
						"urlReturnFileName": "pathwaypairs.csv",
						"urlReturnFileType": "CSV",
						"resourceType": "CSV",
						"id": "cf54b311-e213-4d72-8f2d-3dd1b19e17ab",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"jsUrlReturnFileSchema": {
							"text": "pathwaypairs.csv",
							"a_attr": {
								"style": ""
							},
							"state": {
								"opened": true
							},
							"children": [
								{
									"text": "hsa-id",
									"a_attr": {
										"style": ""
									},
									"state": {
										"opened": true
									},
									"children": []
								},
								{
									"text": "pathway-id",
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
						"pathwaywhole.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "pathway-id",
							"action": "splitselect",
							"input": ":#1",
							"name": "pathway-id"
						}
					],
					"afterAction": {
						"action": "none"
					}
				}
			]
		},
		{
			"id": "e8cfab8a-40a7-46e8-a5f1-01b088c57632",
			"x": -553.53125,
			"y": -272.53125,
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
					"id": "09d88522-096b-6e97-b45a-2165759f4473",
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
		},
		{
			"id": "85e0ca74-a62f-4765-8c47-af43040419bb",
			"x": 571.46875,
			"y": -128.53125,
			"label": "",
			"timestamp": 1516510702293,
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
							"label": "gene",
							"name": "gene",
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
						"id": "j5_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
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
					"urlReturnFileName": "geneid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "388de94a-71c5-6475-5e9f-5a116492a67f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "be432285-0753-5002-a3c4-a50d068a8689",
					"act": "ExtractFunction",
					"targetResource": {
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
								"label": "gene",
								"name": "gene",
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
							"id": "j5_1",
							"children": [
								{
									"text": "gene",
									"a_attr": {
										"style": ""
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
					},
					"outputFileNames": [
						"geneid.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"selectAttrs": [
						{
							"attribute": "gene",
							"name": "genes"
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
			"id": "d6facbad-4f93-4f18-a53d-6418cc938d20",
			"x": 574.46875,
			"y": 32.46875,
			"label": "",
			"timestamp": 1516511453968,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "geneid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "388de94a-71c5-6475-5e9f-5a116492a67f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "geneid.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "genes",
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
					"urlReturnFileName": "ncbi-id.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "268815fe-7353-8340-7f2a-da1df30c7a7b",
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
					"id": "745bc629-4f68-e983-940d-42f7bf3f754a",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"geneid.csv"
					],
					"outputFileNames": [
						"ncbi-id.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [
						{
							"attribute": "genes",
							"name": "genes",
							"action": {
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
										"value": "ncbi-id.csv",
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
										"value": "genes.csv",
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
										"value": "genes",
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
										"value": "ncbi-geneid:",
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
										"value": "ncbi",
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
						}
					],
					"newAttrs": []
				}
			]
		},
		{
			"id": "4cdbcdec-41cb-4ba6-84b1-0206b917a2ca",
			"x": 13.46875,
			"y": 333.46875,
			"label": "",
			"timestamp": 1516512681980,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Split function",
					"libraryId": "82bc6259-8720-4be6-9a62-36912b838167",
					"organization": "University of Idaho",
					"id": "800ddc78-bae7-409c-b1dc-ab5b4cc28d53",
					"functionName": "splitselect.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "splite an attribute",
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
				},
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
			"id": "1b35bee8-4da4-4a0c-999a-d5ccf043c68c",
			"x": -540.7662499999999,
			"y": 49.29537500000011,
			"label": "",
			"timestamp": 1516902073007,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pathwaywhole.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "d2a6f478-1faa-be8d-d0be-15d13e68e5db",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "pathwaywhole.csv",
						"a_attr": {
							"style": ""
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "pathway-id",
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
					"urlReturnFileName": "pathway.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "09d88522-096b-6e97-b45a-2165759f4473",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"libraryName": "Split function",
					"libraryId": "82bc6259-8720-4be6-9a62-36912b838167",
					"organization": "University of Idaho",
					"id": "800ddc78-bae7-409c-b1dc-ab5b4cc28d53",
					"functionName": "splitselect.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "splite an attribute",
					"urlReturnFileType": "csv",
					"attributes": [
						{
							"label": "outFile",
							"name": "-outFile",
							"type": "String",
							"value": "pathway.csv",
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
							"value": "pathwaywhole.csv",
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
							"value": "pathway-id",
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
							"value": ":#1",
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
							"value": "pathway-id",
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
					"id": "1c52877b-44b5-ea6b-b87d-64113f098c5d",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [],
					"inputFileNames": [
						"pathwaywhole.csv"
					],
					"outputFileNames": [
						"pathway.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"updateAttrs": [
						{
							"attribute": "pathway-id",
							"name": "pathway-id",
							"action": {
								"libraryName": "Split function",
								"libraryId": "82bc6259-8720-4be6-9a62-36912b838167",
								"organization": "University of Idaho",
								"id": "800ddc78-bae7-409c-b1dc-ab5b4cc28d53",
								"functionName": "splitselect.py",
								"functionType": "python executable",
								"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
								"description": "splite an attribute",
								"urlReturnFileType": "csv",
								"attributes": [
									{
										"label": "outFile",
										"name": "-outFile",
										"type": "String",
										"value": "pathway.csv",
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
										"value": "pathwaywhole.csv",
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
										"value": "pathway-id",
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
										"value": ":#1",
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
										"value": "pathway-id",
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
						}
					],
					"newAttrs": []
				}
			]
		}
	],
	"edges": [
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
			"from": "37824052-de88-47bb-9025-49a69d43baee",
			"to": "85e0ca74-a62f-4765-8c47-af43040419bb",
			"id": "b8f3357a-b7b7-4379-b429-03b6fa8bc8ef",
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
							"label": "genes",
							"name": "genes",
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
								"text": "genes",
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
			"from": "85e0ca74-a62f-4765-8c47-af43040419bb",
			"to": "d6facbad-4f93-4f18-a53d-6418cc938d20",
			"id": "c7df6e6b-e7db-4d12-96f1-c985b5a7bf64",
			"arrows": "to",
			"label": "geneid.csv\n",
			"resources": [
				{
					"urlReturnFileName": "geneid.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "388de94a-71c5-6475-5e9f-5a116492a67f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "4cdbcdec-41cb-4ba6-84b1-0206b917a2ca",
			"to": "d6facbad-4f93-4f18-a53d-6418cc938d20",
			"id": "d5194f71-a0b0-440e-a84d-f26ff601c01a",
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
			"from": "d6facbad-4f93-4f18-a53d-6418cc938d20",
			"to": "b3ebc851-03af-4e13-b9e5-a2988fcf0124",
			"id": "f8f058a4-4fd0-4cf2-b247-0967b3d09e1e",
			"arrows": "to",
			"label": "ncbi-id.csv\n",
			"resources": [
				{
					"urlReturnFileName": "ncbi-id.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "268815fe-7353-8340-7f2a-da1df30c7a7b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "406b72f7-0e43-44c0-bd86-b6c544e72683",
			"to": "1b35bee8-4da4-4a0c-999a-d5ccf043c68c",
			"id": "412d2aa1-1cfe-420e-aeff-25dcf63ca08d",
			"arrows": "to",
			"label": "pathwaywhole.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathwaywhole.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "d2a6f478-1faa-be8d-d0be-15d13e68e5db",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "4cdbcdec-41cb-4ba6-84b1-0206b917a2ca",
			"to": "1b35bee8-4da4-4a0c-999a-d5ccf043c68c",
			"id": "8b189161-270d-4451-87ef-51320ebfb77d",
			"arrows": "to",
			"label": "Split function\n",
			"resources": [],
			"libraries": [
				{
					"libraryName": "Split function",
					"libraryId": "82bc6259-8720-4be6-9a62-36912b838167",
					"organization": "University of Idaho",
					"id": "800ddc78-bae7-409c-b1dc-ab5b4cc28d53",
					"functionName": "splitselect.py",
					"functionType": "python executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"description": "splite an attribute",
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
			"from": "1b35bee8-4da4-4a0c-999a-d5ccf043c68c",
			"to": "e8cfab8a-40a7-46e8-a5f1-01b088c57632",
			"id": "9d132f95-3c62-4871-aba7-ae1ac32fff82",
			"arrows": "to",
			"label": "pathway.csv\n",
			"resources": [
				{
					"urlReturnFileName": "pathway.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "09d88522-096b-6e97-b45a-2165759f4473",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		}
	]
}