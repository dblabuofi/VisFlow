var exampleSeventy = {
	"nodes": [
		{
			"id": "5eb7523f-ae8d-404a-8827-7d848311f58c",
			"x": -507.40632614141043,
			"y": -405.0227112642565,
			"label": "CSV-resources",
			"timestamp": 1523471125809,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "d484634c-550b-4059-bc79-e18bee5dce0d",
					"resourceType": "CSV",
					"organization": "u of idaho",
					"resourceName": "elements.csv",
					"description": "mineral elements",
					"aggregateName": "CSV-resources",
					"url": "",
					"attributes": [
						{
							"label": "",
							"name": "",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "input",
							"description": "",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "focus",
							"name": "focus",
							"type": "string",
							"description": "element"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<mineral&#x20;elements><focus></focus></mineral&#x20;elements>",
					"jsUrlReturnFileSchema": {
						"text": "mineral&#x20;elements",
						"a_attr": {
							"style": "background-color: rgb(143, 240, 149) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "focus",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							}
						]
					},
					"fileName": "elements.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "elements.csv"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "d484634c-550b-4059-bc79-e18bee5dce0d",
					"resourceType": "CSV",
					"organization": "u of idaho",
					"resourceName": "elements.csv",
					"description": "mineral elements",
					"aggregateName": "CSV-resources",
					"url": "",
					"attributes": [
						{
							"label": "",
							"name": "",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "input",
							"description": "",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "focus",
							"name": "focus",
							"type": "string",
							"description": "element"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<mineral&#x20;elements><focus></focus></mineral&#x20;elements>",
					"jsUrlReturnFileSchema": {
						"text": "mineral&#x20;elements",
						"a_attr": {
							"style": "background-color: rgb(143, 240, 149) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "focus",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							}
						]
					},
					"fileName": "elements.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "elements.csv"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "75a26f2e-1d86-47e1-9a47-9c7ac8b0c109",
			"x": -883.1789336810559,
			"y": -429.6827886340457,
			"label": "Mineral-database",
			"timestamp": 1523471127043,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "53730fd6-c0b1-4bd0-b8c8-f60592960d7d",
					"resourceType": "HTTP",
					"organization": "u of Arizona",
					"resourceName": "Mineral Evolution database",
					"description": "Mineral Evolution database",
					"aggregateName": "Mineral-database",
					"url": "http://rruff.info/mineral_list/element_match.php",
					"method": "GET",
					"attributes": [
						{
							"label": "focus",
							"name": "focus",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "H",
							"attributeType": "input",
							"description": "mineral element",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "mineral-database",
							"name": "mineral-database",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<mineral-database></mineral-database>",
					"jsUrlReturnFileSchema": {
						"text": "mineral-database",
						"a_attr": {
							"style": "background-color: rgb(22, 197, 171) !important"
						},
						"selected": false,
						"id": "j4_1",
						"children": []
					},
					"fileName": "Mineral Evolution database.xml",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "Mineral Evolution database",
					"suggestOutputFileName": "mineral.csv"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "53730fd6-c0b1-4bd0-b8c8-f60592960d7d",
					"resourceType": "HTTP",
					"organization": "u of Arizona",
					"resourceName": "Mineral Evolution database",
					"description": "Mineral Evolution database",
					"aggregateName": "Mineral-database",
					"url": "http://rruff.info/mineral_list/element_match.php",
					"method": "GET",
					"attributes": [
						{
							"label": "focus",
							"name": "focus",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "H",
							"attributeType": "input",
							"description": "mineral element",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "mineral-database",
							"name": "mineral-database",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<mineral-database></mineral-database>",
					"jsUrlReturnFileSchema": {
						"text": "mineral-database",
						"a_attr": {
							"style": "background-color: rgb(22, 197, 171) !important"
						},
						"selected": false,
						"id": "j4_1",
						"children": []
					},
					"fileName": "Mineral Evolution database.xml",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "Mineral Evolution database",
					"suggestOutputFileName": "mineral.csv"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "a0425694-2148-4808-9c11-48c9bbc340a8",
			"x": -651.3782478098498,
			"y": -105.31546573368256,
			"label": "",
			"timestamp": 1523471187566,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "d484634c-550b-4059-bc79-e18bee5dce0d",
					"resourceType": "CSV",
					"organization": "u of idaho",
					"resourceName": "elements.csv",
					"description": "mineral elements",
					"aggregateName": "CSV-resources",
					"url": "",
					"attributes": [
						{
							"label": "",
							"name": "",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "input",
							"description": "",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "focus",
							"name": "focus",
							"type": "string",
							"description": "element"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<mineral&#x20;elements><focus></focus></mineral&#x20;elements>",
					"jsUrlReturnFileSchema": {
						"text": "mineral&#x20;elements",
						"a_attr": {
							"style": "background-color: rgb(143, 240, 149) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "focus",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							}
						]
					},
					"fileName": "elements.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "elements.csv"
				},
				{
					"id": "53730fd6-c0b1-4bd0-b8c8-f60592960d7d",
					"resourceType": "HTTP",
					"organization": "u of Arizona",
					"resourceName": "Mineral Evolution database",
					"description": "Mineral Evolution database",
					"aggregateName": "Mineral-database",
					"url": "http://rruff.info/mineral_list/element_match.php",
					"method": "GET",
					"attributes": [
						{
							"label": "focus",
							"name": "focus",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "H",
							"attributeType": "input",
							"description": "mineral element",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "mineral-database",
							"name": "mineral-database",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<mineral-database></mineral-database>",
					"jsUrlReturnFileSchema": {
						"text": "mineral-database",
						"a_attr": {
							"style": "background-color: rgb(22, 197, 171) !important"
						},
						"selected": false,
						"id": "j4_1",
						"children": []
					},
					"fileName": "Mineral Evolution database.xml",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "Mineral Evolution database",
					"suggestOutputFileName": "mineral.csv"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "mineral.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"outAttributes": [
						{
							"label": "mineral-database",
							"name": "mineral-database",
							"type": "",
							"description": ""
						}
					],
					"jsUrlReturnFileSchema": {
						"text": "mineral-database",
						"a_attr": {
							"style": "background-color: rgb(22, 197, 171) !important"
						},
						"selected": false,
						"id": "j4_1",
						"children": []
					},
					"id": "c214c954-0ea9-2fab-96eb-3ee293a3859d",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "53730fd6-c0b1-4bd0-b8c8-f60592960d7d",
					"act": "Resource",
					"outputFileNames": [
						"mineral.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"outAttributes": [
						[
							{
								"label": "mineral-database",
								"name": "mineral-database",
								"type": "",
								"description": ""
							}
						]
					],
					"inputFileNames": [
						"elements.csv",
						"Mineral Evolution database"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "53730fd6-c0b1-4bd0-b8c8-f60592960d7d",
						"resourceType": "HTTP",
						"organization": "u of Arizona",
						"resourceName": "Mineral Evolution database",
						"description": "Mineral Evolution database",
						"aggregateName": "Mineral-database",
						"url": "http://rruff.info/mineral_list/element_match.php",
						"method": "GET",
						"attributes": [
							{
								"label": "focus",
								"name": "focus",
								"type": "String",
								"value": "focus",
								"required": true,
								"shown": true,
								"example": "H",
								"attributeType": "input",
								"description": "mineral element",
								"from": "elements.csv"
							}
						],
						"outAttributes": [
							{
								"label": "mineral-database",
								"name": "mineral-database",
								"type": "",
								"description": ""
							}
						],
						"methodReturnFileType": "HTML",
						"urlReturnFileType": "CSV",
						"urlReturnFileSchema": "<mineral-database></mineral-database>",
						"jsUrlReturnFileSchema": {
							"text": "mineral-database",
							"a_attr": {
								"style": "background-color: rgb(22, 197, 171) !important"
							},
							"selected": false,
							"id": "j4_1",
							"children": []
						},
						"fileName": "Mineral Evolution database.xml",
						"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
						"urlReturnFileName": "Mineral Evolution database",
						"suggestOutputFileName": "mineral.csv",
						"wrapper": {
							"wrapperName": "HTMLWrapper",
							"tableIndex": 2,
                            "headers": [
								"mineral-database"
							]
						},
						"matcher": "S-Match"
					}
				}
			]
		},
		{
			"id": "1a38a3a9-4d28-4a8a-9b5b-69d69791b857",
			"x": -452.4811339345686,
			"y": -106.37426337767907,
			"label": "",
			"timestamp": 1523560312918,
			"type": "adapter",
			"image": "image/adapter.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "d484634c-550b-4059-bc79-e18bee5dce0d",
					"resourceType": "CSV",
					"organization": "u of idaho",
					"resourceName": "elements.csv",
					"description": "mineral elements",
					"aggregateName": "CSV-resources",
					"url": "",
					"attributes": [
						{
							"label": "",
							"name": "",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "input",
							"description": "",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "focus",
							"name": "focus",
							"type": "string",
							"description": "element"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<mineral&#x20;elements><focus></focus></mineral&#x20;elements>",
					"jsUrlReturnFileSchema": {
						"text": "mineral&#x20;elements",
						"a_attr": {
							"style": "background-color: rgb(143, 240, 149) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "focus",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							}
						]
					},
					"fileName": "elements.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "elements.csv"
				},
				{
					"urlReturnFileName": "mineral.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"outAttributes": [
						{
							"label": "mineral-database",
							"name": "mineral-database",
							"type": "",
							"description": ""
						}
					],
					"jsUrlReturnFileSchema": {
						"text": "mineral-database",
						"a_attr": {
							"style": "background-color: rgb(22, 197, 171) !important"
						},
						"selected": false,
						"id": "j4_1",
						"children": []
					},
					"id": "c214c954-0ea9-2fab-96eb-3ee293a3859d",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "cubeRes.csv",
					"urlReturnFileType": "CSV",
					"outAttributes": [],
					"resourceType": "CSV",
					"id": "6854f054-f500-1477-2771-790b00d155a8",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "ba559759-9f56-a75a-231c-2f657a637cd7",
					"act": "Code",
					"outputFileNames": [
						"cubeRes.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"outAttributes": [
						[]
					],
					"inputFileNames": [
						"elements.csv",
						"mineral.csv"
					],
//					"val": "drop table if exists cubeRes;\ncreate table cubeRes as\nselect f2.focus, column0, H,Li,Be,B,C,N,O,F,Na,Mg,Al,Si,P,S,Cl,K,Ca,Sc,Ti,V,Cr,Mn,Fe,Co,Ni,Cu,Zn,Ga,Ge,`As`,Se,Br,Rb,Sr,Y,Zr,Nb,Mo,Ru,Rh,Pd,Ag,Cd,`In`,Sn,Sb,Te,I,Cs,Ba,La,Ce,Nd,Sm,Gd,Dy,Er,Yb,Hf,Ta,W,Re,Os,Ir,Pt,Au,Hg,Tl,Pb,Bi,Th,U\nfrom\n(\nselect @ln := @ln + 1 ln, floor(@ln / 72) gp, m.*\nfrom mineral m\njoin (SELECT @ln:=-1) t1\n) f1\njoin\n(\nselect focus, @rn := @rn + 1 rn\nfrom elements\njoin (SELECT @rn:=-1) t2\n) f2\non f1.gp = f2.rn and column0 in (select * from elements)\norder by focus, column0",
//					"val": "drop table if exists cubeRes;\ncreate table cubeRes as\nselect f2.focus, column0, H,Na,K,Mg,Ca,Ba,Ti,V,Mn,Fe,Ni,Cu,Ag,Zn,B,Al,C,Si,Pb,Sm,U,F,Cl,O,S,Se,P,`As`,Sb,Bi\nfrom\n(\nselect @ln := @ln + 1 ln, floor(@ln / 72) gp, m.*\nfrom mineral m\njoin (SELECT @ln:=-1) t1\n) f1\njoin\n(\nselect focus, @rn := @rn + 1 rn\nfrom elements\njoin (SELECT @rn:=-1) t2\n) f2\non f1.gp = f2.rn and column0 in (select * from elements)\norder by focus, column0",
//					"val": "drop table if exists cubeRes;\ncreate table cubeRes as\nselect f2.focus, column0, H,Na,K,Mg,Ca,Ba,Ti,V,Mn,Fe,Ni,Cu,Ag,Zn,B,Al,C,Si,Pb,Sm,U,F,Cl,O,S,Se,P,`As`\nfrom\n(\nselect @ln := @ln + 1 ln, floor(@ln / 72) gp, m.*\nfrom mineral m\njoin (SELECT @ln:=-1) t1\n) f1\njoin\n(\nselect focus, @rn := @rn + 1 rn\nfrom elements\njoin (SELECT @rn:=-1) t2\n) f2\non f1.gp = f2.rn and column0 in (select * from elements)\norder by focus, column0",
//					"val": "drop table if exists cubeRes;\ncreate table cubeRes as\nselect f2.focus, column0, H,Na,K,Mg,Ca,Ba,Ti,V,Mn,Fe,Ni,Cu,Ag,Zn,B,Al,C,Si,Pb,Sm,U,F,Cl,O,S\nfrom\n(\nselect @ln := @ln + 1 ln, floor(@ln / 72) gp, m.*\nfrom mineral m\njoin (SELECT @ln:=-1) t1\n) f1\njoin\n(\nselect focus, @rn := @rn + 1 rn\nfrom elements\njoin (SELECT @rn:=-1) t2\n) f2\non f1.gp = f2.rn and column0 in (select * from elements)\norder by focus, column0",
					"val": "drop table if exists cubeRes;\ncreate table cubeRes as\nselect f2.focus, column0, H,Na,K,Mg,Ca,Ba,Ti,V,Mn,Fe,Ni,Cu,Ag,Zn,B,Al,C,Si,Pb,Sm\nfrom\n(\nselect @ln := @ln + 1 ln, floor(@ln / 72) gp, m.*\nfrom mineral m\njoin (SELECT @ln:=-1) t1\n) f1\njoin\n(\nselect focus, @rn := @rn + 1 rn\nfrom elements\njoin (SELECT @rn:=-1) t2\n) f2\non f1.gp = f2.rn and column0 in (select * from elements)\norder by focus, column0",
//					"val": "drop table if exists cubeRes;\ncreate table cubeRes as\nselect f2.focus, column0, H,Li,Be\nfrom\n(\nselect @ln := @ln + 1 ln, floor(@ln / 72) gp, m.*\nfrom mineral m\njoin (SELECT @ln:=-1) t1\n) f1\njoin\n(\nselect focus, @rn := @rn + 1 rn\nfrom elements\njoin (SELECT @rn:=-1) t2\n) f2\non f1.gp = f2.rn and column0 in (select * from elements)\norder by focus, column0",
					"codeType": "sql",
					"codeName": "OgLwXDS"
				}
			]
		},
		{
			"id": "a697feac-d0be-4688-a1bc-19079508e2cb",
			"x": -182.08944880149562,
			"y": -95.65499685715321,
			"label": "",
			"timestamp": 1523563315386,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "cubeRes.csv",
					"urlReturnFileType": "CSV",
					"outAttributes": [],
					"resourceType": "CSV",
					"id": "6854f054-f500-1477-2771-790b00d155a8",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "a7d6f4f8-c4b6-0528-f0f1-8ce965f33a7a",
					"act": "print",
					"outputFileNames": [
						"cubeRes.csv"
					],
					"printType": "table",
					"resourceid": "6854f054-f500-1477-2771-790b00d155a8",
					"numOfWins": "1",
					"submit": {
						"windowFunction": [
							"ShowCube"
						],
						"values": [
							[]
						]
					},
					"colFuns": []
				}
			]
		}
	],
	"edges": [
		{
			"from": "5eb7523f-ae8d-404a-8827-7d848311f58c",
			"to": "a0425694-2148-4808-9c11-48c9bbc340a8",
			"id": "6fd526ed-e8de-4ce1-8a0e-191cecebab7a",
			"arrows": "to",
			"label": "elements.csv\n",
			"resources": [
				{
					"id": "d484634c-550b-4059-bc79-e18bee5dce0d",
					"resourceType": "CSV",
					"organization": "u of idaho",
					"resourceName": "elements.csv",
					"description": "mineral elements",
					"aggregateName": "CSV-resources",
					"url": "",
					"attributes": [
						{
							"label": "",
							"name": "",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "input",
							"description": "",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "focus",
							"name": "focus",
							"type": "string",
							"description": "element"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<mineral&#x20;elements><focus></focus></mineral&#x20;elements>",
					"jsUrlReturnFileSchema": {
						"text": "mineral&#x20;elements",
						"a_attr": {
							"style": "background-color: rgb(143, 240, 149) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "focus",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							}
						]
					},
					"fileName": "elements.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "elements.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "75a26f2e-1d86-47e1-9a47-9c7ac8b0c109",
			"to": "a0425694-2148-4808-9c11-48c9bbc340a8",
			"id": "cc1ac22c-5b0f-4d62-9a1b-a417af77b2e1",
			"arrows": "to",
			"label": "Mineral Evolution database\n",
			"resources": [
				{
					"id": "53730fd6-c0b1-4bd0-b8c8-f60592960d7d",
					"resourceType": "HTTP",
					"organization": "u of Arizona",
					"resourceName": "Mineral Evolution database",
					"description": "Mineral Evolution database",
					"aggregateName": "Mineral-database",
					"url": "http://rruff.info/mineral_list/element_match.php",
					"method": "GET",
					"attributes": [
						{
							"label": "focus",
							"name": "focus",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "H",
							"attributeType": "input",
							"description": "mineral element",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "mineral-database",
							"name": "mineral-database",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<mineral-database></mineral-database>",
					"jsUrlReturnFileSchema": {
						"text": "mineral-database",
						"a_attr": {
							"style": "background-color: rgb(22, 197, 171) !important"
						},
						"selected": false,
						"id": "j4_1",
						"children": []
					},
					"fileName": "Mineral Evolution database.xml",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "Mineral Evolution database",
					"suggestOutputFileName": "mineral.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "5eb7523f-ae8d-404a-8827-7d848311f58c",
			"to": "1a38a3a9-4d28-4a8a-9b5b-69d69791b857",
			"id": "23e075da-3b54-42e1-834a-502cb5d2438c",
			"arrows": "to",
			"label": "elements.csv\n",
			"resources": [
				{
					"id": "d484634c-550b-4059-bc79-e18bee5dce0d",
					"resourceType": "CSV",
					"organization": "u of idaho",
					"resourceName": "elements.csv",
					"description": "mineral elements",
					"aggregateName": "CSV-resources",
					"url": "",
					"attributes": [
						{
							"label": "",
							"name": "",
							"type": "String",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "input",
							"description": "",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "focus",
							"name": "focus",
							"type": "string",
							"description": "element"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<mineral&#x20;elements><focus></focus></mineral&#x20;elements>",
					"jsUrlReturnFileSchema": {
						"text": "mineral&#x20;elements",
						"a_attr": {
							"style": "background-color: rgb(143, 240, 149) !important"
						},
						"selected": false,
						"id": "j5_1",
						"children": [
							{
								"text": "focus",
								"a_attr": {
									"style": ""
								},
								"selected": false,
								"id": "j5_2",
								"children": []
							}
						]
					},
					"fileName": "elements.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "elements.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "a0425694-2148-4808-9c11-48c9bbc340a8",
			"to": "1a38a3a9-4d28-4a8a-9b5b-69d69791b857",
			"id": "c4ad7987-0067-4bee-8c23-54b7be9af75c",
			"arrows": "to",
			"label": "mineral.csv\n",
			"resources": [
				{
					"urlReturnFileName": "mineral.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"outAttributes": [
						{
							"label": "mineral-database",
							"name": "mineral-database",
							"type": "",
							"description": ""
						}
					],
					"jsUrlReturnFileSchema": {
						"text": "mineral-database",
						"a_attr": {
							"style": "background-color: rgb(22, 197, 171) !important"
						},
						"selected": false,
						"id": "j4_1",
						"children": []
					},
					"id": "c214c954-0ea9-2fab-96eb-3ee293a3859d",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		},
		{
			"from": "1a38a3a9-4d28-4a8a-9b5b-69d69791b857",
			"to": "a697feac-d0be-4688-a1bc-19079508e2cb",
			"id": "7d7f577f-6a48-4361-84a3-a0141488c711",
			"arrows": "to",
			"label": "cubeRes.csv\n",
			"resources": [
				{
					"urlReturnFileName": "cubeRes.csv",
					"urlReturnFileType": "CSV",
					"outAttributes": [],
					"resourceType": "CSV",
					"id": "6854f054-f500-1477-2771-790b00d155a8",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		}
	],
	"globalmatch": []
}