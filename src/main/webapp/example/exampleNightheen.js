var exampleNightheen = {
	"nodes": [
		{
			"id": "82d4c9cd-21f4-47e3-a663-5a16a636c930",
			"x": -136.84375,
			"y": -70.921875,
			"label": "genes.csv\n",
			"timestamp": 1475828548456,
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
					"outAttributes": [
						{
							"label": "id",
							"name": "id"
						},
						{
							"label": "geneid",
							"name": "geneid"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\t\t\t\t\t<id></id>\t\t\t\t\t<geneid></geneid>\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "id",
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
					"outAttributes": [
						{
							"label": "id",
							"name": "id"
						},
						{
							"label": "geneid",
							"name": "geneid"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\t\t\t\t\t<id></id>\t\t\t\t\t<geneid></geneid>\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "id",
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
			"id": "00560572-23f7-4f2b-89f4-d5500dec8800",
			"x": -241.16156739388302,
			"y": 73.23430020973007,
			"label": "",
			"timestamp": 1477322439812,
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
					"outAttributes": [
						{
							"label": "id",
							"name": "id"
						},
						{
							"label": "geneid",
							"name": "geneid"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\t\t\t\t\t<id></id>\t\t\t\t\t<geneid></geneid>\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "id",
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
					"fileName": "genes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genes.csv"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "genes.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "edeb3022-5418-c90e-fce6-d3a0f449bd71"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "edeb3022-5418-c90e-fce6-d3a0f449bd71",
					"act": "Transformer Function",
					"webservices": [],
					"transformResources": [
						{
							"Resource": "genes.csv",
							"Type": "XML"
						}
					],
					"outputFileNames": [
						"genes.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"transformResourcesAttributes": [
						{
							"Resource": "genes.csv",
							"Attribute": "id",
							"Type": "Boolean"
						}
					]
				}
			]
		},
		{
			"id": "1ea5fb31-9daa-43df-8bf2-0a18e89a3d7d",
			"x": -209.01179411007377,
			"y": 206.59184542022896,
			"label": "",
			"timestamp": 1478760939847,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "genes.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "edeb3022-5418-c90e-fce6-d3a0f449bd71"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "genes.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "edeb3022-5418-c90e-fce6-d3a0f449bd71"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "86997737-8190-92aa-1626-4db36ef89897",
					"act": "print",
					"outputFileNames": [
						"genes.xml"
					],
					"printType": "file",
					"resourceid": "edeb3022-5418-c90e-fce6-d3a0f449bd71"
				}
			]
		}
	],
	"edges": [
		{
			"from": "82d4c9cd-21f4-47e3-a663-5a16a636c930",
			"to": "00560572-23f7-4f2b-89f4-d5500dec8800",
			"id": "daa18af9-409b-4ec7-9665-5dea5c653905",
			"arrows": "to",
			"label": "genes.csv\n",
			"resources": [
				{
					"id": "e6a0c516-0f6d-48d4-be78-c4d178d60e83",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genes.csv",
					"description": "genes id",
					"outAttributes": [
						{
							"label": "id",
							"name": "id"
						},
						{
							"label": "geneid",
							"name": "geneid"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<genes>\t\t\t\t\t<id></id>\t\t\t\t\t<geneid></geneid>\t\t\t</genes>",
					"jsUrlReturnFileSchema": {
						"text": "genes",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"state": {
							"opened": true
						},
						"children": [
							{
								"text": "geneid",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"state": {
									"opened": true
								},
								"children": []
							},
							{
								"text": "id",
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
					"fileName": "genes.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "genes.csv"
				}
			],
			"libraries": []
		},
		{
			"from": "00560572-23f7-4f2b-89f4-d5500dec8800",
			"to": "1ea5fb31-9daa-43df-8bf2-0a18e89a3d7d",
			"id": "7024a391-d092-4e77-8fd6-c6a9f07dfcd7",
			"arrows": "to",
			"label": "genes.xml\n",
			"resources": [
				{
					"urlReturnFileName": "genes.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "edeb3022-5418-c90e-fce6-d3a0f449bd71"
				}
			],
			"libraries": []
		}
	]
}