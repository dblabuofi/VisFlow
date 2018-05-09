var exampleThirtheen = {
	"nodes": [
		{
			"id": "3f91a440-6089-44d4-ad9a-5693cb66b039",
			"x": -8.6875,
			"y": -186.03125,
			"label": "\ngenes.csv\n",
			"timestamp": 1475770641891,
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
			"id": "875ecfab-eb05-4878-9180-430f3aa1951b",
			"x": -205.302988433317,
			"y": -25.865479823159028,
			"label": "",
			"timestamp": 1477250099250,
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
					"urlReturnFileName": "ncbi-id.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "8890a0c6-7eb7-04cf-2290-853b41b61768"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "8890a0c6-7eb7-04cf-2290-853b41b61768",
					"act": "Code",
					"val": "def addbefore():\n\thandle = open('genes.csv', 'r');\n\ttarget = open('ncbi-id.csv', 'w');\n\tfor line in handle:\n\t\twords = line.split(\",\");\n\t\ttarget.write('ncbi-geneid:' + words[1]);\naddbefore();",
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
		}
	],
	"edges": [
		{
			"from": "3f91a440-6089-44d4-ad9a-5693cb66b039",
			"to": "875ecfab-eb05-4878-9180-430f3aa1951b",
			"id": "4ac1a575-ef1e-4604-b2af-eeb8371e0eaf",
			"arrows": "to",
			"label": "genes.csv\n",
			"resources": [
				{
					"id": "e6a0c516-0f6d-48d4-be78-c4d178d60e83",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "genes.csv",
					"description": "genes id",
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