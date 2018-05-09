var exampleSix ={
	"nodes": [
		{
			"id": "32471aba-aabb-465d-adc1-da16b62a33fe",
			"x": -339.23348253458477,
			"y": -111.46611509385102,
			"label": "PDB File Description Service\n",
			"timestamp": 1476910751920,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "5a3b7f94-6285-4cfd-a055-694d78cbd908",
					"resourceType": "HTTP",
					"organization": "Protein Data Bank",
					"resourceName": "PDB File Description Service",
					"description": "Access general information about a PDB entry",
					"url": "http://www.rcsb.org/pdb/rest/describePDB",
					"urlExample": "http://www.rcsb.org/pdb/rest/describePDB?structureId=4hhb,1hhb,4hhc",
					"method": "GET",
					"attributes": [
						{
							"label": "structureId",
							"name": "structureId",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "4hhb,1hhb,4hhc",
							"attributeType": "input",
							"description": "structure id"
						}
					],
					"outAttributes": [
						{
							"name": "relatedPDB",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<PDBdescription>\t\t\t\t<PDB>\t\t\t\t\t<relatedPDB>\t\t\t\t\t</relatedPDB>\t\t\t\t</PDB>\t\t\t</PDBdescription>",
					"jsUrlReturnFileSchema": {
						"text": "PDBdescription",
						"a_attr": {
							"style": ""
						},
						"id": "j5_1",
						"children": [
							{
								"text": "PDB",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": [
									{
										"text": "relatedPDB",
										"a_attr": {
											"style": ""
										},
										"id": "j5_3",
										"children": []
									}
								]
							}
						]
					},
					"fileName": "RCSB PDB File Description Service.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PDB File Description Service"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "5a3b7f94-6285-4cfd-a055-694d78cbd908",
					"resourceType": "HTTP",
					"organization": "Protein Data Bank",
					"resourceName": "PDB File Description Service",
					"description": "Access general information about a PDB entry",
					"url": "http://www.rcsb.org/pdb/rest/describePDB",
					"urlExample": "http://www.rcsb.org/pdb/rest/describePDB?structureId=4hhb,1hhb,4hhc",
					"method": "GET",
					"attributes": [
						{
							"label": "structureId",
							"name": "structureId",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "4hhb,1hhb,4hhc",
							"attributeType": "input",
							"description": "structure id"
						}
					],
					"outAttributes": [
						{
							"name": "relatedPDB",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<PDBdescription>\t\t\t\t<PDB>\t\t\t\t\t<relatedPDB>\t\t\t\t\t</relatedPDB>\t\t\t\t</PDB>\t\t\t</PDBdescription>",
					"jsUrlReturnFileSchema": {
						"text": "PDBdescription",
						"a_attr": {
							"style": ""
						},
						"id": "j5_1",
						"children": [
							{
								"text": "PDB",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": [
									{
										"text": "relatedPDB",
										"a_attr": {
											"style": ""
										},
										"id": "j5_3",
										"children": []
									}
								]
							}
						]
					},
					"fileName": "RCSB PDB File Description Service.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PDB File Description Service"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "857a8125-c83d-4d8f-8ede-785f3eb17c5b",
			"x": -423.73163213671927,
			"y": 34.742569073914005,
			"label": "",
			"timestamp": 1476910753588,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "5a3b7f94-6285-4cfd-a055-694d78cbd908",
					"resourceType": "HTTP",
					"organization": "Protein Data Bank",
					"resourceName": "PDB File Description Service",
					"description": "Access general information about a PDB entry",
					"url": "http://www.rcsb.org/pdb/rest/describePDB",
					"urlExample": "http://www.rcsb.org/pdb/rest/describePDB?structureId=4hhb,1hhb,4hhc",
					"method": "GET",
					"attributes": [
						{
							"label": "structureId",
							"name": "structureId",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "4hhb,1hhb,4hhc",
							"attributeType": "input",
							"description": "structure id"
						}
					],
					"outAttributes": [
						{
							"name": "relatedPDB",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<PDBdescription>\t\t\t\t<PDB>\t\t\t\t\t<relatedPDB>\t\t\t\t\t</relatedPDB>\t\t\t\t</PDB>\t\t\t</PDBdescription>",
					"jsUrlReturnFileSchema": {
						"text": "PDBdescription",
						"a_attr": {
							"style": ""
						},
						"id": "j8_1",
						"children": [
							{
								"text": "PDB",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j8_2",
								"children": [
									{
										"text": "relatedPDB",
										"a_attr": {
											"style": ""
										},
										"id": "j8_3",
										"children": []
									}
								]
							}
						]
					},
					"fileName": "RCSB PDB File Description Service.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PDB File Description Service"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pdb.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "5a3b7f94-6285-4cfd-a055-694d78cbd908"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "5a3b7f94-6285-4cfd-a055-694d78cbd908",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"pdb.xml"
					],
					"outputFileTypes": [
						"XML"
					],
					"resultMethod": "Append", 
					"webservices": [],
					"targetResource": {
						"id": "5a3b7f94-6285-4cfd-a055-694d78cbd908",
						"resourceType": "HTTP",
						"organization": "Protein Data Bank",
						"resourceName": "PDB File Description Service",
						"description": "Access general information about a PDB entry",
						"url": "http://www.rcsb.org/pdb/rest/describePDB",
						"urlExample": "http://www.rcsb.org/pdb/rest/describePDB?structureId=4hhb,1hhb,4hhc",
						"method": "GET",
						"attributes": [
							{
								"label": "structureId",
								"name": "structureId",
								"type": "string",
								"value": "4hhb,1hhb,4hhc",
								"required": true,
								"shown": true,
								"example": "4hhb,1hhb,4hhc",
								"attributeType": "input",
								"description": "structure id",
								"from": "input"
							}
						],
						"outAttributes": [
							{
								"name": "relatedPDB",
								"type": "string",
								"selected": "true"
							}
						],
						"methodReturnFileType": "XML",
						"urlReturnFileType": "XML",
						"urlReturnFileSchema": "<PDBdescription>\t\t\t\t<PDB>\t\t\t\t\t<relatedPDB>\t\t\t\t\t</relatedPDB>\t\t\t\t</PDB>\t\t\t</PDBdescription>",
						"jsUrlReturnFileSchema": {
							"text": "PDBdescription",
							"a_attr": {
								"style": ""
							},
							"id": "j8_1",
							"children": [
								{
									"text": "PDB",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"id": "j8_2",
									"children": [
										{
											"text": "relatedPDB",
											"a_attr": {
												"style": ""
											},
											"id": "j8_3",
											"children": []
										}
									]
								}
							]
						},
						"fileName": "RCSB PDB File Description Service.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "PDB File Description Service"
					}
				}
			]
		},
		{
			"id": "5230a05d-764a-46f2-819c-191c2d204e26",
			"x": -475.61572165181167,
			"y": 142.71756617289017,
			"label": "",
			"timestamp": 1476910756892,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "pdb.xml",
					"urlReturnFileType": "xml",
					"id": "5a3b7f94-6285-4cfd-a055-694d78cbd908"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		}
	],
	"edges": [
		{
			"from": "32471aba-aabb-465d-adc1-da16b62a33fe",
			"to": "857a8125-c83d-4d8f-8ede-785f3eb17c5b",
			"id": "92f9e357-5dc5-4796-9187-20d8300ec9b0",
			"arrows": "to",
			"label": "PDB File Description Service\n",
			"resources": [
				{
					"id": "5a3b7f94-6285-4cfd-a055-694d78cbd908",
					"resourceType": "HTTP",
					"organization": "Protein Data Bank",
					"resourceName": "PDB File Description Service",
					"description": "Access general information about a PDB entry",
					"url": "http://www.rcsb.org/pdb/rest/describePDB",
					"urlExample": "http://www.rcsb.org/pdb/rest/describePDB?structureId=4hhb,1hhb,4hhc",
					"method": "GET",
					"attributes": [
						{
							"label": "structureId",
							"name": "structureId",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "4hhb,1hhb,4hhc",
							"attributeType": "input",
							"description": "structure id"
						}
					],
					"outAttributes": [
						{
							"name": "relatedPDB",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<PDBdescription>\t\t\t\t<PDB>\t\t\t\t\t<relatedPDB>\t\t\t\t\t</relatedPDB>\t\t\t\t</PDB>\t\t\t</PDBdescription>",
					"jsUrlReturnFileSchema": {
						"text": "PDBdescription",
						"a_attr": {
							"style": ""
						},
						"id": "j5_1",
						"children": [
							{
								"text": "PDB",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": [
									{
										"text": "relatedPDB",
										"a_attr": {
											"style": ""
										},
										"id": "j5_3",
										"children": []
									}
								]
							}
						]
					},
					"fileName": "RCSB PDB File Description Service.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "PDB File Description Service"
				}
			],
			"libraries": []
		},
		{
			"from": "857a8125-c83d-4d8f-8ede-785f3eb17c5b",
			"to": "5230a05d-764a-46f2-819c-191c2d204e26",
			"id": "25a1629c-ae76-4819-9851-c263e2531ebd",
			"arrows": "to",
			"label": "pdb.xml\n",
			"resources": [],
			"libraries": []
		}
	]
}