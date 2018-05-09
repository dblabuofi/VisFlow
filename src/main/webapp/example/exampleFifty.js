var exampleFifty = {
	"nodes": [
		{
			"id": "ac52be6f-f354-4498-9562-fe2f23011101",
			"x": 129.7479797128548,
			"y": -237.09992204259228,
			"label": "KEGG Genes\nKEGG orthology\nhumangenes.csv\n",
			"timestamp": 1518677863684,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
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
						"id": "j8_1",
						"children": [
							{
								"text": "ko",
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
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
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
				},
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
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
								"children": []
							}
						]
					},
					"fileName": "humangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "humangenes.csv"
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
						"id": "j8_1",
						"children": [
							{
								"text": "ko",
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
					"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;orthology",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j9_1",
						"children": [
							{
								"text": "ko",
								"a_attr": {
									"style": ""
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
				},
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
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
								"children": []
							}
						]
					},
					"fileName": "humangenes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "humangenes.csv"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "8cb3d5cc-1b9c-4eb0-8e92-256e7c867dda",
			"x": -136.5903010033445,
			"y": -131.59796544035675,
			"label": "Add prefix",
			"timestamp": 1518997201692,
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
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
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
					"id": "5ee1a0b5-8299-4a69-231c-c5fd4ce16ed2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "cc724168-79c8-594f-31ab-4e5d08ddc66f",
					"act": "Code",
					"val": "SET SQL_SAFE_UPDATES = 0;\nupdate  humangenes humangenes\nset  humangenes.gene = concat('hsa:',humangenes.gene)\n;\ndrop table if exists hsagenes;\ncreate table hsagenes\nselect * from humangenes;\nSET SQL_SAFE_UPDATES = 1;\n",
					"codeType": "sql",
					"codeName": "addprefix",
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
			"id": "fe719230-985c-445e-a9ad-eea9c7f4d848",
			"x": 779.4937100000003,
			"y": -217.23326499999993,
			"label": "KEGG hsa to pathway id\n",
			"timestamp": 1519006465301,
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
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
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
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
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
			"id": "fe6ee40e-662c-40a2-8a71-5ef641296a17",
			"x": 98.49671968310308,
			"y": 337.14198100409556,
			"label": "Genearate hsa differences between rno and mmu",
			"timestamp": 1519008024078,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsapath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "bf7921c8-cd2d-afa2-27f2-6b28a87dad8f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "mmupath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "9d63ff2b-53a4-c828-ae0a-d0347305707e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "rnopath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "7fa9ec84-98de-2741-f9e0-e25039e06ac8",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsasamemmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "64060b89-418b-b166-536b-9b100ff220c1",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffmmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "2db45751-9981-a81a-5523-8535912df57f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsasamerno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "580dfe60-9d5b-53a7-53ad-76b4df246ffd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffrno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "8771faab-6510-e32a-4868-80ffcb8146fe",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "1ee224ff-6ee3-99eb-a931-e74595334933",
					"act": "Code",
					"val": "drop table if exists hsawhole;\ncreate table hsawhole as \nselect   hsapath.pathway , (substring(hsapath.pathway, 9, 6)) geneid, (@nh := @nh + 1) id\nfrom  hsapath hsapath\n inner join\n  (select (@nh := 0)) m\n;\ndelete  h1\nfrom  hsawhole h1, hsawhole h2\nwhere  h1.geneid = h2.geneid and h1.id > h2.id ;\ndrop table if exists hsadict;\ncreate table hsadict\nselect * from hsawhole;\n;\ndrop table if exists mmuwhole;\ncreate table mmuwhole as \nselect   mmupath.pathway , (substring(mmupath.pathway, 9, 6)) geneid, (@nm := @nm + 1) id\nfrom  mmupath mmupath\n inner join\n  (select (@nm := 0)) m\n;\ndelete  m1\nfrom  mmuwhole m1, mmuwhole m2\nwhere  m1.geneid = m2.geneid and m1.id > m2.id ;\ndrop table if exists mmudict;\ncreate table mmudict\nselect * from mmuwhole;\n;\ndrop table if exists hsasamemmu;\ncreate table hsasamemmu as \nselect  (substring(hsadict.pathway, 9, 5)) pathway\nfrom  hsadict hsadict, mmudict mmudict\nwhere  mmudict.geneid = hsadict.geneid and hsadict.pathway != '' \n;\ndrop table if exists hsadiffmmu;\ncreate table hsadiffmmu as \nselect substring(hsadict.pathway, 6, 9) diff_mmu\nfrom  hsadict hsadict\nwhere not exists (select geneid from mmudict where hsadict.geneid = geneid) and hsadict.pathway is not null union select mmudict.pathway from mmudict mmudict where not exists (select geneid from hsadict where hsadict.geneid = geneid)\n; \ndrop table if exists rnowhole;\ncreate table rnowhole as \nselect   rnopath.pathway , (substring(rnopath.pathway, 9, 6)) geneid, (@nr := @nr + 1) id\nfrom  rnopath rnopath\n inner join\n  (select (@nr := 0)) m\n;\ndelete  r1\nfrom  rnowhole r1, rnowhole r2\nwhere  r1.geneid = r2.geneid and r1.id > r2.id ;\ndrop table if exists rnodict;\ncreate table rnodict\nselect * from rnowhole;\n;\ndrop table if exists hsasamerno;\ncreate table hsasamerno as \nselect  (substring(hsadict.pathway, 9, 5)) pathway\nfrom  hsadict hsadict, rnodict rnodict\nwhere  rnodict.geneid = hsadict.geneid and hsadict.pathway != '' \n;\ndrop table if exists hsadiffrno;\ncreate table hsadiffrno as \nselect substring(hsadict.pathway, 6, 9) diff_rno\nfrom  hsadict hsadict\nwhere not exists (select geneid from rnodict where hsadict.geneid = geneid) and hsadict.pathway is not null union select rnodict.pathway from rnodict rnodict where not exists (select geneid from hsadict where hsadict.geneid = geneid)\n; \n\n\n\n\n\n\n\n",
					"codeType": "sql",
					"codeName": "comparetables",
					"inputFileNames": [
						"hsapath",
						"mmupath",
						"rnopath"
					],
					"outputFileNames": [
						"hsasamemmu",
						"hsadiffmmu",
						"hsasamerno",
						"hsadiffrno"
					],
					"outputFileTypes": [
						"SQL",
						"SQL",
						"SQL",
						"SQL"
					]
				}
			]
		},
		{
			"id": "34ce00f6-d833-4a5b-9162-97ec72dc560a",
			"x": -117.99958999999973,
			"y": 506.03213500000015,
			"label": "Output sink",
			"timestamp": 1519010789907,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "hsasamemmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "64060b89-418b-b166-536b-9b100ff220c1",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"outAttributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway ids for image"
						}
					]
				},
				{
					"urlReturnFileName": "hsadiffmmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "2db45751-9981-a81a-5523-8535912df57f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"outAttributes": [
						{
							"label": "diff_mmu",
							"name": "diff_mmu",
							"type": "string",
							"description": "pathway ids"
						}
					]
				},
				{
					"urlReturnFileName": "hsasamerno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "580dfe60-9d5b-53a7-53ad-76b4df246ffd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"outAttributes": [
						{
							"label": "pathway",
							"name": "pathway",
							"type": "string",
							"description": "pathway ids for image"
						}
					]
				},
				{
					"urlReturnFileName": "hsadiffrno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "8771faab-6510-e32a-4868-80ffcb8146fe",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"outAttributes": [
						{
							"label": "diff_rno",
							"name": "diff_rno",
							"type": "string",
							"description": "pathway ids"
						}
					]
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "061b602a-7532-0f46-2b62-f9cdef7924aa",
					"act": "print",
					"outputFileNames": [
						"hsasamemmu"
					],
					"printType": "table",
					"resourceid": "64060b89-418b-b166-536b-9b100ff220c1",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				},
				{
					"id": "2dc842a9-b25c-fce7-7347-4332a5b2df38",
					"act": "print",
					"outputFileNames": [
						"hsadiffmmu"
					],
					"printType": "table",
					"resourceid": "2db45751-9981-a81a-5523-8535912df57f",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				},
				{
					"id": "fd7a5e0c-dd09-d598-f923-d3b47647f0a3",
					"act": "print",
					"outputFileNames": [
						"hsasamerno"
					],
					"printType": "table",
					"resourceid": "580dfe60-9d5b-53a7-53ad-76b4df246ffd",
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
				},
				{
					"id": "f6802f8f-4d35-6561-fad7-8980d318b867",
					"act": "print",
					"outputFileNames": [
						"hsadiffrno"
					],
					"printType": "table",
					"resourceid": "8771faab-6510-e32a-4868-80ffcb8146fe",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				}
			]
		},
		{
			"id": "8dc8eeea-fcd1-4df6-892f-71805b2e74e6",
			"x": -139.79413804375378,
			"y": 75.41267825492491,
			"label": "Retrive hsa pathway",
			"timestamp": 1519198094457,
			"type": "adapter",
			"image": "image/adapter.png",
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
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
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
					"urlReturnFileName": "hsagenes.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "5ee1a0b5-8299-4a69-231c-c5fd4ce16ed2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"jsUrlReturnFileSchema": {
						"text": "hsagenes.csv",
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
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "hsapath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "bf7921c8-cd2d-afa2-27f2-6b28a87dad8f",
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
						"hsapath"
					],
					"outputFileTypes": [
						"SQL"
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
								"from": "hsagenes.csv"
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
							"id": "j7_1",
							"children": [
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_2",
									"children": []
								},
								{
									"text": "pathway",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_3",
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
			"id": "a1d405ef-8c6f-44e4-9652-b6204639fde3",
			"x": 328.974762402522,
			"y": 116.42995704397404,
			"label": "Retrieve mmu pathway",
			"timestamp": 1519198388541,
			"type": "adapter",
			"image": "image/adapter.png",
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
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
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
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "e83fe81f-4f65-dddd-e9d7-0dbabb7cec9b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "mmupath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "9d63ff2b-53a4-c828-ae0a-d0347305707e",
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
						"mmupath"
					],
					"outputFileTypes": [
						"SQL"
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
								"from": "pathrnommu"
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
							"id": "j7_1",
							"children": [
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_2",
									"children": []
								},
								{
									"text": "pathway",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_3",
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
			"id": "3a746d59-bf29-4bb9-8ae8-59a21e6cabd0",
			"x": 858.5551100000004,
			"y": 22.87913500000009,
			"label": "Retrieve rno pathway",
			"timestamp": 1519198471157,
			"type": "adapter",
			"image": "image/adapter.png",
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
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
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
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "e83fe81f-4f65-dddd-e9d7-0dbabb7cec9b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "rnopath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "7fa9ec84-98de-2741-f9e0-e25039e06ac8",
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
						"rnopath"
					],
					"outputFileTypes": [
						"SQL"
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
								"from": "pathrnommu"
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
							"id": "j7_1",
							"children": [
								{
									"text": "hsa",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_2",
									"children": []
								},
								{
									"text": "pathway",
									"a_attr": {
										"style": ""
									},
									"selected": false,
									"id": "j7_3",
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
			"id": "f410de21-93e6-4e28-a9c9-724207c9bf3a",
			"x": 434.44776500293403,
			"y": -258.58516331304656,
			"label": "KEGG Orthology Module",
			"timestamp": 1519856578216,
			"type": "nested",
			"image": "image/nested.png",
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
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
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
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "e83fe81f-4f65-dddd-e9d7-0dbabb7cec9b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "7d97f53e-07ac-4df1-a706-577b10b9058d",
					"act": "procedure",
					"outputFileNames": [
						"pathrnommu"
					],
					"outputFileTypes": [
						"SQL"
					],
					"outAttributes": [
						null
					],
					"module": {
						"fileName": "KEGG Orthology",
						"startNode": "f4072fd6-5ccf-4a47-ade0-39b9daaa5e46",
						"endNode": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
						"description": "get KEGG Orthology module",
						"graph": {
							"nodes": [
								{
									"id": "ac52be6f-f354-4498-9562-fe2f23011101",
									"x": 79.26803477932366,
									"y": -261.82671705214244,
									"label": "KEGG Genes\nKEGG orthology\nhumangenes.csv\n",
									"timestamp": "1518677863684",
									"type": "data",
									"image": "image/data.png",
									"shape": "image",
									"resourcesIn": [],
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
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
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
												"id": "j23_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "gene",
														"id": "j23_2",
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
										}
									],
									"resourcesOut": [
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
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
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
												"id": "j23_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "gene",
														"id": "j23_2",
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
										}
									]
								},
								{
									"id": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
									"x": 87.22570291750547,
									"y": -36.33635189362837,
									"label": "Generate rno and mmu for hsa",
									"timestamp": "1518997856390",
									"type": "adapter",
									"image": "image/adapter.png",
									"shape": "image",
									"resourcesIn": [
										{
											"id": "cc355a4c-daf4-012d-0ffc-b778d518e420",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"urlReturnFileName": "orthologygen.csv"
										},
										{
											"id": "8c54fb49-39d6-e852-f6b0-3cd0efd6e35d",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthology.csv"
										}
									],
									"resources": [],
									"resourcesOut": [
										{
											"id": "85c6829e-2deb-dd31-1858-516e09d81577",
											"resourceType": "SQL",
											"urlReturnFileType": "SQL",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "pathrnommu"
										}
									],
									"actions": [
										{
											"act": "Code",
											"id": "eeccfc47-ff35-7070-4277-353b95239186",
											"inputFileNames": [
												"orthologygen.csv",
												"orthology.csv"
											],
											"outputFileNames": [
												"pathrnommu"
											],
											"outputFileTypes": [
												"SQL"
											],
											"val": "drop table if exists pathrnommu;\ncreate table pathrnommu as \nselect m1.hsa, m1.gene mmu, m2.gene rno\nfrom\n(\nselect o1.hsa, o1.ko, g1.gene\nfrom orthology o1, orthologygen g1\nwhere o1.ko = g1.ko and g1.gene like 'mmu%' group by o1.hsa\n) m1\njoin \n(\nselect o1.hsa, o1.ko, g1.gene\nfrom orthology o1, orthologygen g1\nwhere o1.ko = g1.ko and g1.gene like 'rno%' group by o1.hsa\n) m2 \non m1.hsa = m2.hsa",
											"codeType": "sql",
											"codeName": "generate rno and mmu"
										}
									]
								},
								{
									"id": "f4072fd6-5ccf-4a47-ade0-39b9daaa5e46",
									"x": 619.809225,
									"y": -232.72279000000015,
									"label": "Retrive orthology",
									"timestamp": "1519196860787",
									"type": "adapter",
									"image": "image/adapter.png",
									"shape": "image",
									"resourcesIn": [
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
											"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
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
												"id": "j23_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "gene",
														"id": "j23_2",
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
										}
									],
									"resources": [],
									"resourcesOut": [
										{
											"id": "8c54fb49-39d6-e852-f6b0-3cd0efd6e35d",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthology.csv"
										}
									],
									"actions": [
										{
											"act": "Resource",
											"id": "eeb4486a-f059-45d9-99a7-9b5b7343e10d",
											"inputFileNames": [],
											"outputFileNames": [
												"orthology.csv"
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
												"methodReturnFileType": "TEXT",
												"urlReturnFileType": "CSV",
												"urlReturnFileSchema": "<KEGG&#x20;orthology>\r\n\t\t\t<hsa></hsa>\r\n\t\t\t<ko></ko>\r\n\t\t</KEGG&#x20;orthology>",
												"jsUrlReturnFileSchema": {
													"text": "KEGG&#x20;orthology",
													"id": "j9_1",
													"a_attr": {
														"style": "background-color: rgb(205, 165, 10) !important"
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "ko",
															"id": "j9_2",
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
								},
								{
									"id": "cea9a0c1-4663-464c-815d-6317205fdd38",
									"x": 296.35411347793564,
									"y": -169.4337569369677,
									"label": "Retrive pathways",
									"timestamp": "1519197029874",
									"type": "adapter",
									"image": "image/adapter.png",
									"shape": "image",
									"resourcesIn": [
										{
											"id": "8c54fb49-39d6-e852-f6b0-3cd0efd6e35d",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j9_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j9_2",
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
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "orthology.csv"
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
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
									"resources": [],
									"resourcesOut": [
										{
											"id": "cc355a4c-daf4-012d-0ffc-b778d518e420",
											"resourceType": "CSV",
											"urlReturnFileType": "CSV",
											"jsUrlReturnFileSchema": {
												"text": "KEGG&#x20;orthology",
												"id": "j8_1",
												"a_attr": {
													"style": "background-color: rgb(205, 165, 10) !important"
												},
												"state": {
													"opened": true
												},
												"children": [
													{
														"text": "ko",
														"id": "j8_2",
														"a_attr": {
															"style": ""
														},
														"state": {
															"opened": true
														},
														"children": []
													},
													{
														"text": "gene",
														"id": "j8_3",
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
											"urlReturnFileName": "orthologygen.csv"
										}
									],
									"actions": [
										{
											"act": "Resource",
											"id": "3254f8db-faee-4f8e-84d2-a6d17a7c88ca",
											"inputFileNames": [],
											"outputFileNames": [
												"orthologygen.csv"
											],
											"outputFileTypes": [
												"CSV"
											],
											"resultMethod": "Append",
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
													"id": "j8_1",
													"a_attr": {
														"style": "background-color: rgb(205, 165, 10) !important"
													},
													"state": {
														"opened": true
													},
													"children": [
														{
															"text": "ko",
															"id": "j8_2",
															"a_attr": {
																"style": ""
															},
															"state": {
																"opened": true
															},
															"children": []
														},
														{
															"text": "gene",
															"id": "j8_3",
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
											"webservices": []
										}
									]
								},
								{
									"id": "89b5dc34-d030-43d2-ae14-5c85d1d27d6d",
									"x": -165.53125,
									"y": 71.46875,
									"label": "Show path, rno and mmu",
									"timestamp": "1519336412765",
									"type": "terminal",
									"image": "image/terminal.png",
									"shape": "image",
									"resourcesIn": [
										{
											"id": "85c6829e-2deb-dd31-1858-516e09d81577",
											"resourceType": "SQL",
											"outAttributes": [
												{
													"label": "hsa",
													"name": "hsa",
													"type": "string",
													"description": "human pathway for images"
												},
												{
													"label": "mmu",
													"name": "mmu",
													"type": "string",
													"description": "mice orthology"
												},
												{
													"label": "rno",
													"name": "rno",
													"type": "string",
													"description": "rat orthology"
												}
											],
											"urlReturnFileType": "SQL",
											"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
											"urlReturnFileName": "pathrnommu"
										}
									],
									"resources": [],
									"resourcesOut": [],
									"actions": [
										{
											"act": "print",
											"id": "64a96004-21bc-9d10-83a5-81ee21698a8c",
											"outputFileNames": [
												"pathrnommu"
											],
											"printType": "table",
											"numOfWins": 0,
											"submit": {
												"values": [],
												"windowFunction": []
											},
											"colFuns": []
										}
									]
								}
							],
							"edges": [
								{
									"from": "ac52be6f-f354-4498-9562-fe2f23011101",
									"to": "f4072fd6-5ccf-4a47-ade0-39b9daaa5e46",
									"id": "2cc90d0d-167a-4e48-a210-19d09777ba6e"
								},
								{
									"from": "ac52be6f-f354-4498-9562-fe2f23011101",
									"to": "cea9a0c1-4663-464c-815d-6317205fdd38",
									"id": "d63f59ab-1b62-44ea-8dc4-1f0ff117c113"
								},
								{
									"from": "f4072fd6-5ccf-4a47-ade0-39b9daaa5e46",
									"to": "cea9a0c1-4663-464c-815d-6317205fdd38",
									"id": "280904c5-9301-479e-a67c-0dc3d3dd439c"
								},
								{
									"from": "cea9a0c1-4663-464c-815d-6317205fdd38",
									"to": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
									"id": "67f38b27-fb2a-401f-a7e4-1b1f44e82853"
								},
								{
									"from": "f4072fd6-5ccf-4a47-ade0-39b9daaa5e46",
									"to": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
									"id": "52c81b05-67a5-42d7-b29c-c60078bd0f9d"
								},
								{
									"from": "7f0eacd9-b060-41bf-b81a-fbd3a908f2c3",
									"to": "89b5dc34-d030-43d2-ae14-5c85d1d27d6d",
									"id": "a3a78942-0e41-444f-8985-16d61eb4ff7c"
								}
							]
						}
					},
					"inputReplace": [
						{
							"oldFile": "humangenes.csv",
							"newFile": "humangenes.csv"
						}
					],
					"outputReplace": [
						{
							"oldFile": "pathrnommu",
							"newFile": "pathrnommu"
						}
					]
				}
			]
		}
	],
	"edges": [
		{
			"from": "ac52be6f-f354-4498-9562-fe2f23011101",
			"to": "8cb3d5cc-1b9c-4eb0-8e92-256e7c867dda",
			"id": "d2b693de-29c3-422a-ba86-425ff3c9385a",
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
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
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
			"from": "fe6ee40e-662c-40a2-8a71-5ef641296a17",
			"to": "34ce00f6-d833-4a5b-9162-97ec72dc560a",
			"id": "ee3c5aa2-8702-4556-9430-d927b82d2093",
			"arrows": "to",
			"label": "hsasamemmu\nhsadiffmmu\nhsasamerno\nhsadiffrno\n",
			"resources": [
				{
					"urlReturnFileName": "hsasamemmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "64060b89-418b-b166-536b-9b100ff220c1",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffmmu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "2db45751-9981-a81a-5523-8535912df57f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsasamerno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "580dfe60-9d5b-53a7-53ad-76b4df246ffd",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "hsadiffrno",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "8771faab-6510-e32a-4868-80ffcb8146fe",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "fe719230-985c-445e-a9ad-eea9c7f4d848",
			"to": "8dc8eeea-fcd1-4df6-892f-71805b2e74e6",
			"id": "cba71d1e-b264-4a7a-8361-eec85fc7d950",
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
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
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
			"from": "8dc8eeea-fcd1-4df6-892f-71805b2e74e6",
			"to": "fe6ee40e-662c-40a2-8a71-5ef641296a17",
			"id": "129bcdcc-e3dd-472f-a013-68f9cb06d909",
			"arrows": "to",
			"label": "hsapath\n",
			"resources": [
				{
					"urlReturnFileName": "hsapath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "bf7921c8-cd2d-afa2-27f2-6b28a87dad8f",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "fe719230-985c-445e-a9ad-eea9c7f4d848",
			"to": "a1d405ef-8c6f-44e4-9652-b6204639fde3",
			"id": "bd12a372-20c8-4b0c-bc9f-5a3ad9794e2d",
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
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
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
			"from": "a1d405ef-8c6f-44e4-9652-b6204639fde3",
			"to": "fe6ee40e-662c-40a2-8a71-5ef641296a17",
			"id": "c1e368e9-f95a-48a7-8703-c11330419cd8",
			"arrows": "to",
			"label": "mmupath\n",
			"resources": [
				{
					"urlReturnFileName": "mmupath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "9d63ff2b-53a4-c828-ae0a-d0347305707e",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "fe719230-985c-445e-a9ad-eea9c7f4d848",
			"to": "3a746d59-bf29-4bb9-8ae8-59a21e6cabd0",
			"id": "fecb4fdd-8038-4a88-bbf7-b9512df7d08d",
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
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
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
			"from": "3a746d59-bf29-4bb9-8ae8-59a21e6cabd0",
			"to": "fe6ee40e-662c-40a2-8a71-5ef641296a17",
			"id": "29ead00d-d0fb-4eca-a4ff-e004e9d1ac35",
			"arrows": "to",
			"label": "rnopath\n",
			"resources": [
				{
					"urlReturnFileName": "rnopath",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"jsUrlReturnFileSchema": {
						"text": "KEGG&#x20;hsa&#x20;to&#x20;pathway&#x20;id",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"selected": false,
						"id": "j7_1",
						"children": [
							{
								"text": "hsa",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_2",
								"children": []
							},
							{
								"text": "pathway",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j7_3",
								"children": []
							}
						]
					},
					"id": "7fa9ec84-98de-2741-f9e0-e25039e06ac8",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "8cb3d5cc-1b9c-4eb0-8e92-256e7c867dda",
			"to": "8dc8eeea-fcd1-4df6-892f-71805b2e74e6",
			"id": "f3cb3d33-c433-4917-aadd-4a53424b1cb3",
			"arrows": "to",
			"label": "hsagenes.csv\n",
			"resources": [
				{
					"urlReturnFileName": "hsagenes.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "5ee1a0b5-8299-4a69-231c-c5fd4ce16ed2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "ac52be6f-f354-4498-9562-fe2f23011101",
			"to": "f410de21-93e6-4e28-a9c9-724207c9bf3a",
			"id": "d4b7a53f-1b8d-4a0c-bc51-fd4a50ad5bec",
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
						"id": "j23_1",
						"children": [
							{
								"text": "gene",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j23_2",
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
			"from": "f410de21-93e6-4e28-a9c9-724207c9bf3a",
			"to": "3a746d59-bf29-4bb9-8ae8-59a21e6cabd0",
			"id": "034e397b-18d2-44bf-8df1-7239e704a9c2",
			"arrows": "to",
			"label": "pathrnommu\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "e83fe81f-4f65-dddd-e9d7-0dbabb7cec9b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		},
		{
			"from": "f410de21-93e6-4e28-a9c9-724207c9bf3a",
			"to": "a1d405ef-8c6f-44e4-9652-b6204639fde3",
			"id": "6369840e-08fd-431c-a985-9daf98e0e815",
			"arrows": "to",
			"label": "pathrnommu\n",
			"resources": [
				{
					"urlReturnFileName": "pathrnommu",
					"urlReturnFileType": "SQL",
					"resourceType": "SQL",
					"id": "e83fe81f-4f65-dddd-e9d7-0dbabb7cec9b",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		}
	]
}