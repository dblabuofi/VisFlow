var exampleSixtyTwo = {
	"nodes": [
		{
			"id": "0f17397d-583e-4126-a817-d9912810b8c8",
			"x": -199.98349890544358,
			"y": -239.21770332409713,
			"label": "CSV-resources",
			"timestamp": 1520486191092,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "dd376291-1e16-4430-97a8-7e6bbef8bf58",
					"resourceType": "CSV",
					"organization": "",
					"resourceName": "nums.csv",
					"description": "",
					"aggregateName": "CSV-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "num",
							"name": "num",
							"type": "",
							"description": ""
						},
						{
							"label": "id",
							"name": "id",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<nums><num></num><id></id></nums>",
					"jsUrlReturnFileSchema": {
						"text": "nums",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "num",
								"a_attr": {
									"style": "background-color: rgb(229, 185, 64) !important"
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
					"fileName": "nums.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "nums.csv"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "dd376291-1e16-4430-97a8-7e6bbef8bf58",
					"resourceType": "CSV",
					"organization": "",
					"resourceName": "nums.csv",
					"description": "",
					"aggregateName": "CSV-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "num",
							"name": "num",
							"type": "",
							"description": ""
						},
						{
							"label": "id",
							"name": "id",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<nums><num></num><id></id></nums>",
					"jsUrlReturnFileSchema": {
						"text": "nums",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "num",
								"a_attr": {
									"style": "background-color: rgb(229, 185, 64) !important"
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
					"fileName": "nums.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "nums.csv"
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
					"id": "dd376291-1e16-4430-97a8-7e6bbef8bf58",
					"resourceType": "CSV",
					"organization": "",
					"resourceName": "nums.csv",
					"description": "",
					"aggregateName": "CSV-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "num",
							"name": "num",
							"type": "",
							"description": ""
						},
						{
							"label": "id",
							"name": "id",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<nums><num></num><id></id></nums>",
					"jsUrlReturnFileSchema": {
						"text": "nums",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "num",
								"a_attr": {
									"style": "background-color: rgb(229, 185, 64) !important"
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
					"fileName": "nums.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "nums.csv"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "output",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "num",
							"name": "num",
							"type": "int",
							"description": "numbers"
						},
						{
							"label": "id",
							"name": "id",
							"type": "int",
							"description": "numbers"
						}
					],
					"resourceType": "SQL",
					"id": "65fd9eb8-6019-aff1-7682-ff86ce770825",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "58768acc-13d8-1e30-d3ac-bf3047003080",
					"act": "Code",
					"outputFileNames": [
						"output"
					],
					"outputFileTypes": [
						"SQL"
					],
					"outAttributes": [
						[
							{
								"label": "num",
								"name": "num",
								"type": "int",
								"description": "numbers"
							},
							{
								"label": "id",
								"name": "id",
								"type": "int",
								"description": "numbers"
							}
						]
					],
					"inputFileNames": [
						"nums.csv"
					],
					"val": "SET SQL_SAFE_UPDATES = 0;\nupdate   nums \nset  nums.num = RAND()*100 + 10\n;\ndrop table if exists output;\ncreate table output\nselect * from nums;\nSET SQL_SAFE_UPDATES = 1;\n",
					"codeType": "sql",
					"codeName": "xGFTXcy"
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
			"image": "image/repeat highlight.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "output",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "num",
							"name": "num",
							"type": "int",
							"description": "numbers"
						},
						{
							"label": "id",
							"name": "id",
							"type": "int",
							"description": "numbers"
						}
					],
					"resourceType": "SQL",
					"id": "65fd9eb8-6019-aff1-7682-ff86ce770825",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "output",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "num",
							"name": "num",
							"type": "int",
							"description": "numbers"
						},
						{
							"label": "id",
							"name": "id",
							"type": "int",
							"description": "numbers"
						}
					],
					"resourceType": "SQL",
					"id": "65fd9eb8-6019-aff1-7682-ff86ce770825",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "7a2c2a64-5877-d55a-8959-2f755540fbb6",
					"act": "Repeat",
					"conditionType": "condition",
					"repeatTimes": 1,
					"conditions": [
						{
							"resource": "output",
							"attribute": "num",
							"groupOP": "max",
							"condition": "greaterorequal",
							"value": "40",
							"logic": ""
						}
					],
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
					"urlReturnFileName": "output",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "num",
							"name": "num",
							"type": "int",
							"description": "numbers"
						},
						{
							"label": "id",
							"name": "id",
							"type": "int",
							"description": "numbers"
						}
					],
					"resourceType": "SQL",
					"id": "65fd9eb8-6019-aff1-7682-ff86ce770825",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "c3ea80a6-4bf4-ad11-ea00-dd7d6da72f64",
					"act": "print",
					"outputFileNames": [
						"output"
					],
					"printType": "table",
					"resourceid": "f29f8574-803c-f0c1-e97f-89134693c518",
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
			"label": "nums.csv\n",
			"resources": [
				{
					"id": "dd376291-1e16-4430-97a8-7e6bbef8bf58",
					"resourceType": "CSV",
					"organization": "",
					"resourceName": "nums.csv",
					"description": "",
					"aggregateName": "CSV-resources",
					"url": "",
					"outAttributes": [
						{
							"label": "num",
							"name": "num",
							"type": "",
							"description": ""
						},
						{
							"label": "id",
							"name": "id",
							"type": "",
							"description": ""
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<nums><num></num><id></id></nums>",
					"jsUrlReturnFileSchema": {
						"text": "nums",
						"a_attr": {
							"style": ""
						},
						"selected": false,
						"id": "j6_1",
						"children": [
							{
								"text": "num",
								"a_attr": {
									"style": "background-color: rgb(229, 185, 64) !important"
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
					"fileName": "nums.csv",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "nums.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "0d3c253b-2932-4ad0-9cbe-8a418b500c4b",
			"to": "222380dc-521b-496a-a832-1a91de440e18",
			"id": "f05ec121-fc1d-4052-b14d-d916aa69f018",
			"arrows": "to",
			"label": "output\n",
			"resources": [
				{
					"urlReturnFileName": "output",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "num",
							"name": "num",
							"type": "int",
							"description": "numbers"
						},
						{
							"label": "id",
							"name": "id",
							"type": "int",
							"description": "numbers"
						}
					],
					"resourceType": "SQL",
					"id": "65fd9eb8-6019-aff1-7682-ff86ce770825",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
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
			"label": "output\n",
			"resources": [
				{
					"urlReturnFileName": "output",
					"urlReturnFileType": "SQL",
					"outAttributes": [
						{
							"label": "num",
							"name": "num",
							"type": "int",
							"description": "numbers"
						},
						{
							"label": "id",
							"name": "id",
							"type": "int",
							"description": "numbers"
						}
					],
					"resourceType": "SQL",
					"id": "65fd9eb8-6019-aff1-7682-ff86ce770825",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"
				}
			],
			"libraries": []
		}
	],
	"globalmatch": []
}