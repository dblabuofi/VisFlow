var exampleSixtheen = {
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
			"id": "f5bde46e-954f-41e3-8864-4a3c1176e3e6",
			"x": -260.7110761603216,
			"y": 63.32775005597144,
			"label": "",
			"timestamp": 1477258368404,
			"type": "analytics",
			"image": "image/analytics error.png",
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
					"urlReturnFileName": "genebak.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "317485d9-aa86-b601-2d03-24ccfeaa6f78"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "317485d9-aa86-b601-2d03-24ccfeaa6f78",
					"act": "Code",
					"val": "select * from genes\ninto outfile 'genebak.csv'\nfields terminated by ','",
					"codeType": "sql",
					"codeName": "genes.sql",
					"inputFileNames": [
						"genes.csv"
					],
					"outputFileNames": [
						"genebak.csv"
					],
					"outputFileTypes": [
						"CSV"
					]
				}
			]
		}
	],
	"edges": [
		{
			"from": "82d4c9cd-21f4-47e3-a663-5a16a636c930",
			"to": "f5bde46e-954f-41e3-8864-4a3c1176e3e6",
			"id": "19b31f4b-68fe-42c7-ba47-7fca6a89a933",
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
		}
	]
}