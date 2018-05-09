var exampleFiftheen = {
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
			"id": "70afb129-b75f-44ee-b151-8e1f0f149fbf",
			"x": -266.32041444764354,
			"y": 91.91413162971487,
			"label": "",
			"timestamp": 1477256950098,
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
					"urlReturnFileName": "id.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "e277f0cb-edfa-47de-9156-a1d7d909e984"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "e277f0cb-edfa-47de-9156-a1d7d909e984",
					"act": "Code",
					"val": "xquery version \"3.0\";\n\nlet $filename := \"id.xml\"\nlet $doc := doc(\"genes.xml\")\n\nlet $target-directory := \"C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\\"\nlet $target-path := concat($target-directory, $filename)\n\nlet $name := $doc//*//genes\nlet $source-doc := \n        <returnLayers>\n        \t{$name}\n\t</returnLayers>\n\nreturn \n    file:serialize($source-doc, $target-path, (\"omit-xml-declaration=yes\", \"indent=yes\"))",
					"codeType": "xquery",
					"codeName": "getGene.xql",
					"inputFileNames": [
						"genes.csv"
					],
					"outputFileNames": [
						"id.xml"
					],
					"outputFileTypes": [
						"XML"
					]
				}
			]
		}
	],
	"edges": [
		{
			"from": "82d4c9cd-21f4-47e3-a663-5a16a636c930",
			"to": "70afb129-b75f-44ee-b151-8e1f0f149fbf",
			"id": "e8632226-8391-4fc5-9a9a-b438aa73862c",
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