var exampleFourtheen = {
	"nodes": [
		{
			"id": "b6118f3d-5f21-45ea-b5c8-422c59442516",
			"x": -286.5292613636364,
			"y": -111.93835227272724,
			"label": "genes.csv\n",
			"timestamp": 1475780811494,
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
			"id": "701de797-3fe1-4104-9ec5-816870989eb7",
			"x": -202.66452441476886,
			"y": 34.60338419155905,
			"label": "",
			"timestamp": 1477251219633,
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
					"urlReturnFileName": "ncbi.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "927aa775-a80d-118d-1766-86b081edbf47"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "927aa775-a80d-118d-1766-86b081edbf47",
					"act": "Code",
					"val": "data = read.csv(\"genes.csv\", header=TRUE);\nlist = data[,2];\n\nlist <- sapply(list, function(x) paste('ncbi-id:', x, sep=\"\"));\n\nwrite.table(list, file='ncbi.csv', row.names = FALSE,\n            col.names = FALSE);",
					"codeType": "r",
					"codeName": "rscirpt.R",
					"inputFileNames": [
						"genes.csv"
					],
					"outputFileNames": [
						"ncbi.csv"
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
			"from": "b6118f3d-5f21-45ea-b5c8-422c59442516",
			"to": "701de797-3fe1-4104-9ec5-816870989eb7",
			"id": "b91fd8ca-137f-4191-ac3c-79318db3f897",
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