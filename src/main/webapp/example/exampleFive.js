var exampleFive ={
	"nodes": [
		{
			"id": "56e28015-ee35-4be8-be2e-c34eacbab586",
			"x": -393.9913459340836,
			"y": -66.12210021734153,
			"label": "RCSB PDB Chemical Structure search\n",
			"timestamp": 1477005506121,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "3ef6f1fa-1143-4218-895f-e5555710843d",
					"resourceType": "HTTP",
					"organization": "Protein Data Bank",
					"resourceName": "RCSB PDB Chemical Structure search",
					"description": "This query performs chemical structure searches using SMILES and SMARTS linear notations.",
					"url": "http://www.rcsb.org/pdb/rest/smilesQuery",
					"urlExample": "/pdb/rest/smilesQuery?smiles=NC(=O)C1=CC=CC=C1&search_type=exact",
					"method": "GET",
					"attributes": [
						{
							"label": "smiles",
							"name": "smiles",
							"value": "",
							"required": true,
							"shown": true,
							"example": "NC(=O)C1=CC=CC=C1",
							"attributeType": "input",
							"description": "chemical structure"
						},
						{
							"label": "search_type",
							"name": "search_type",
							"value": "",
							"required": true,
							"shown": true,
							"example": "exact",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "exact",
									"value": "exact"
								},
								{
									"label": "substructure",
									"value": "substructure"
								},
								{
									"label": "superstructure",
									"value": "superstructure"
								},
								{
									"label": "similarity",
									"value": "similarity"
								}
							],
							"description": "search types:  exact, substructure, superstructure or similarity"
						},
						{
							"label": "similarity",
							"name": "similarity",
							"value": "",
							"required": false,
							"shown": true,
							"example": "0.7",
							"attributeType": "input",
							"description": "Specify a similarity threshold to change the degree of similarity in the [0...1] range: 0 dissimilar ... 1 identical."
						}
					],
					"outAttributes": [
						{
							"label": "chemicalName",
							"name": "chemicalName",
							"type": "string"
						},
						{
							"label": "formula",
							"name": "formula",
							"type": "string"
						},
						{
							"label": "InChIKey",
							"name": "InChIKey",
							"type": "string"
						},
						{
							"label": "InChI",
							"name": "InChI",
							"type": "string"
						},
						{
							"label": "smiles",
							"name": "smiles",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<smilesQueryResult>\t\t\t\t<ligandInfo>\t\t\t\t\t<ligand>\t\t\t\t\t\t<chemicalName></chemicalName>\t\t\t\t\t\t<formula></formula>\t\t\t\t\t\t<InChIKey></InChIKey>\t\t\t\t\t\t<InChI></InChI>\t\t\t\t\t\t<smiles></smiles>\t\t\t\t\t</ligand>\t\t\t\t</ligandInfo>\t\t\t</smilesQueryResult>",
					"jsUrlReturnFileSchema": {
						"text": "smilesQueryResult",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j5_1",
						"children": [
							{
								"text": "ligandInfo",
								"a_attr": {
									"style": ""
								},
								"id": "j5_2",
								"children": [
									{
										"text": "ligand",
										"a_attr": {
											"style": ""
										},
										"id": "j5_3",
										"children": [
											{
												"text": "InChIKey",
												"a_attr": {
													"style": ""
												},
												"id": "j5_4",
												"children": []
											},
											{
												"text": "chemicalName",
												"a_attr": {
													"style": ""
												},
												"id": "j5_5",
												"children": []
											},
											{
												"text": "smiles",
												"a_attr": {
													"style": ""
												},
												"id": "j5_6",
												"children": []
											},
											{
												"text": "InChI",
												"a_attr": {
													"style": ""
												},
												"id": "j5_7",
												"children": []
											},
											{
												"text": "formula",
												"a_attr": {
													"style": ""
												},
												"id": "j5_8",
												"children": []
											}
										]
									}
								]
							}
						]
					},
					"fileName": "RCSB PDB Chemical Structure search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "RCSB PDB Chemical Structure search"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "3ef6f1fa-1143-4218-895f-e5555710843d",
					"resourceType": "HTTP",
					"organization": "Protein Data Bank",
					"resourceName": "RCSB PDB Chemical Structure search",
					"description": "This query performs chemical structure searches using SMILES and SMARTS linear notations.",
					"url": "http://www.rcsb.org/pdb/rest/smilesQuery",
					"urlExample": "/pdb/rest/smilesQuery?smiles=NC(=O)C1=CC=CC=C1&search_type=exact",
					"method": "GET",
					"attributes": [
						{
							"label": "smiles",
							"name": "smiles",
							"value": "",
							"required": true,
							"shown": true,
							"example": "NC(=O)C1=CC=CC=C1",
							"attributeType": "input",
							"description": "chemical structure"
						},
						{
							"label": "search_type",
							"name": "search_type",
							"value": "",
							"required": true,
							"shown": true,
							"example": "exact",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "exact",
									"value": "exact"
								},
								{
									"label": "substructure",
									"value": "substructure"
								},
								{
									"label": "superstructure",
									"value": "superstructure"
								},
								{
									"label": "similarity",
									"value": "similarity"
								}
							],
							"description": "search types:  exact, substructure, superstructure or similarity"
						},
						{
							"label": "similarity",
							"name": "similarity",
							"value": "",
							"required": false,
							"shown": true,
							"example": "0.7",
							"attributeType": "input",
							"description": "Specify a similarity threshold to change the degree of similarity in the [0...1] range: 0 dissimilar ... 1 identical."
						}
					],
					"outAttributes": [
						{
							"label": "chemicalName",
							"name": "chemicalName",
							"type": "string"
						},
						{
							"label": "formula",
							"name": "formula",
							"type": "string"
						},
						{
							"label": "InChIKey",
							"name": "InChIKey",
							"type": "string"
						},
						{
							"label": "InChI",
							"name": "InChI",
							"type": "string"
						},
						{
							"label": "smiles",
							"name": "smiles",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<smilesQueryResult>\t\t\t\t<ligandInfo>\t\t\t\t\t<ligand>\t\t\t\t\t\t<chemicalName></chemicalName>\t\t\t\t\t\t<formula></formula>\t\t\t\t\t\t<InChIKey></InChIKey>\t\t\t\t\t\t<InChI></InChI>\t\t\t\t\t\t<smiles></smiles>\t\t\t\t\t</ligand>\t\t\t\t</ligandInfo>\t\t\t</smilesQueryResult>",
					"jsUrlReturnFileSchema": {
						"text": "smilesQueryResult",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j5_1",
						"children": [
							{
								"text": "ligandInfo",
								"a_attr": {
									"style": ""
								},
								"id": "j5_2",
								"children": [
									{
										"text": "ligand",
										"a_attr": {
											"style": ""
										},
										"id": "j5_3",
										"children": [
											{
												"text": "InChIKey",
												"a_attr": {
													"style": ""
												},
												"id": "j5_4",
												"children": []
											},
											{
												"text": "chemicalName",
												"a_attr": {
													"style": ""
												},
												"id": "j5_5",
												"children": []
											},
											{
												"text": "smiles",
												"a_attr": {
													"style": ""
												},
												"id": "j5_6",
												"children": []
											},
											{
												"text": "InChI",
												"a_attr": {
													"style": ""
												},
												"id": "j5_7",
												"children": []
											},
											{
												"text": "formula",
												"a_attr": {
													"style": ""
												},
												"id": "j5_8",
												"children": []
											}
										]
									}
								]
							}
						]
					},
					"fileName": "RCSB PDB Chemical Structure search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "RCSB PDB Chemical Structure search"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "81e391e3-20e7-4fa7-908a-d665bd26259e",
			"x": -492.77121053522643,
			"y": 102.20685272542228,
			"label": "",
			"timestamp": 1477005568011,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "3ef6f1fa-1143-4218-895f-e5555710843d",
					"resourceType": "HTTP",
					"organization": "Protein Data Bank",
					"resourceName": "RCSB PDB Chemical Structure search",
					"description": "This query performs chemical structure searches using SMILES and SMARTS linear notations.",
					"url": "http://www.rcsb.org/pdb/rest/smilesQuery",
					"urlExample": "/pdb/rest/smilesQuery?smiles=NC(=O)C1=CC=CC=C1&search_type=exact",
					"method": "GET",
					"attributes": [
						{
							"label": "smiles",
							"name": "smiles",
							"value": "",
							"required": true,
							"shown": true,
							"example": "NC(=O)C1=CC=CC=C1",
							"attributeType": "input",
							"description": "chemical structure"
						},
						{
							"label": "search_type",
							"name": "search_type",
							"value": "",
							"required": true,
							"shown": true,
							"example": "exact",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "exact",
									"value": "exact"
								},
								{
									"label": "substructure",
									"value": "substructure"
								},
								{
									"label": "superstructure",
									"value": "superstructure"
								},
								{
									"label": "similarity",
									"value": "similarity"
								}
							],
							"description": "search types:  exact, substructure, superstructure or similarity"
						},
						{
							"label": "similarity",
							"name": "similarity",
							"value": "",
							"required": false,
							"shown": true,
							"example": "0.7",
							"attributeType": "input",
							"description": "Specify a similarity threshold to change the degree of similarity in the [0...1] range: 0 dissimilar ... 1 identical."
						}
					],
					"outAttributes": [
						{
							"label": "chemicalName",
							"name": "chemicalName",
							"type": "string"
						},
						{
							"label": "formula",
							"name": "formula",
							"type": "string"
						},
						{
							"label": "InChIKey",
							"name": "InChIKey",
							"type": "string"
						},
						{
							"label": "InChI",
							"name": "InChI",
							"type": "string"
						},
						{
							"label": "smiles",
							"name": "smiles",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<smilesQueryResult>\t\t\t\t<ligandInfo>\t\t\t\t\t<ligand>\t\t\t\t\t\t<chemicalName></chemicalName>\t\t\t\t\t\t<formula></formula>\t\t\t\t\t\t<InChIKey></InChIKey>\t\t\t\t\t\t<InChI></InChI>\t\t\t\t\t\t<smiles></smiles>\t\t\t\t\t</ligand>\t\t\t\t</ligandInfo>\t\t\t</smilesQueryResult>",
					"jsUrlReturnFileSchema": {
						"text": "smilesQueryResult",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j5_1",
						"children": [
							{
								"text": "ligandInfo",
								"a_attr": {
									"style": ""
								},
								"id": "j5_2",
								"children": [
									{
										"text": "ligand",
										"a_attr": {
											"style": ""
										},
										"id": "j5_3",
										"children": [
											{
												"text": "InChIKey",
												"a_attr": {
													"style": ""
												},
												"id": "j5_4",
												"children": []
											},
											{
												"text": "chemicalName",
												"a_attr": {
													"style": ""
												},
												"id": "j5_5",
												"children": []
											},
											{
												"text": "smiles",
												"a_attr": {
													"style": ""
												},
												"id": "j5_6",
												"children": []
											},
											{
												"text": "InChI",
												"a_attr": {
													"style": ""
												},
												"id": "j5_7",
												"children": []
											},
											{
												"text": "formula",
												"a_attr": {
													"style": ""
												},
												"id": "j5_8",
												"children": []
											}
										]
									}
								]
							}
						]
					},
					"fileName": "RCSB PDB Chemical Structure search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "RCSB PDB Chemical Structure search"
				},
				{
					"id": "RCSB PDB Chemical Structure search Input",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "RCSB PDB Chemical Structure search Input.csv",
					"description": "RCSB PDB Chemical Structure search Input",
					"url": "",
					"outAttributes": [
						{
							"label": "smiles",
							"name": "smiles",
							"type": "string"
						},
						{
							"label": "search_type",
							"name": "search_type",
							"type": "string"
						},
						{
							"label": "similarity",
							"name": "similarity",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input>\t\t\t\t\t<smiles></smiles>\t\t\t\t\t<search_type></search_type>\t\t\t\t\t<similarity></similarity>\t\t\t</RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input>",
					"jsUrlReturnFileSchema": {
						"text": "RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "smiles",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "similarity",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "search_type",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							}
						]
					},
					"fileName": "RCSB PDB Chemical Structure search Input.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "RCSB PDB Chemical Structure search Input.csv"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "pdb.xml",
					"urlReturnFileType": "XML",
					"resourceType": "XML",
					"id": "3ef6f1fa-1143-4218-895f-e5555710843d"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "3ef6f1fa-1143-4218-895f-e5555710843d",
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
						"id": "3ef6f1fa-1143-4218-895f-e5555710843d",
						"resourceType": "HTTP",
						"organization": "Protein Data Bank",
						"resourceName": "RCSB PDB Chemical Structure search",
						"description": "This query performs chemical structure searches using SMILES and SMARTS linear notations.",
						"url": "http://www.rcsb.org/pdb/rest/smilesQuery",
						"urlExample": "/pdb/rest/smilesQuery?smiles=NC(=O)C1=CC=CC=C1&search_type=exact",
						"method": "GET",
						"attributes": [
							{
								"label": "smiles",
								"name": "smiles",
								"value": "smiles",
								"required": true,
								"shown": true,
								"example": "NC(=O)C1=CC=CC=C1",
								"attributeType": "input",
								"description": "chemical structure",
								"from": "RCSB PDB Chemical Structure search Input.csv"
							},
							{
								"label": "search_type",
								"name": "search_type",
								"value": "search_type",
								"required": true,
								"shown": true,
								"example": "exact",
								"attributeType": "selection",
								"selectionpair": [
									{
										"label": "exact",
										"value": "exact"
									},
									{
										"label": "substructure",
										"value": "substructure"
									},
									{
										"label": "superstructure",
										"value": "superstructure"
									},
									{
										"label": "similarity",
										"value": "similarity"
									}
								],
								"description": "search types:  exact, substructure, superstructure or similarity",
								"from": "RCSB PDB Chemical Structure search Input.csv"
							},
							{
								"label": "similarity",
								"name": "similarity",
								"value": "",
								"required": false,
								"shown": true,
								"example": "0.7",
								"attributeType": "input",
								"description": "Specify a similarity threshold to change the degree of similarity in the [0...1] range: 0 dissimilar ... 1 identical.",
								"from": "input"
							}
						],
						"outAttributes": [
							{
								"label": "chemicalName",
								"name": "chemicalName",
								"type": "string",
								"selected": "false"
							},
							{
								"label": "formula",
								"name": "formula",
								"type": "string",
								"selected": "false"
							},
							{
								"label": "InChIKey",
								"name": "InChIKey",
								"type": "string",
								"selected": "false"
							},
							{
								"label": "InChI",
								"name": "InChI",
								"type": "string",
								"selected": "false"
							},
							{
								"label": "smiles",
								"name": "smiles",
								"type": "string",
								"selected": "false"
							}
						],
						"methodReturnFileType": "XML",
						"urlReturnFileType": "XML",
						"urlReturnFileSchema": "<smilesQueryResult>\t\t\t\t<ligandInfo>\t\t\t\t\t<ligand>\t\t\t\t\t\t<chemicalName></chemicalName>\t\t\t\t\t\t<formula></formula>\t\t\t\t\t\t<InChIKey></InChIKey>\t\t\t\t\t\t<InChI></InChI>\t\t\t\t\t\t<smiles></smiles>\t\t\t\t\t</ligand>\t\t\t\t</ligandInfo>\t\t\t</smilesQueryResult>",
						"jsUrlReturnFileSchema": {
							"text": "smilesQueryResult",
							"a_attr": {
								"style": "background-color: rgb(205, 165, 10) !important"
							},
							"id": "j5_1",
							"children": [
								{
									"text": "ligandInfo",
									"a_attr": {
										"style": ""
									},
									"id": "j5_2",
									"children": [
										{
											"text": "ligand",
											"a_attr": {
												"style": ""
											},
											"id": "j5_3",
											"children": [
												{
													"text": "InChIKey",
													"a_attr": {
														"style": ""
													},
													"id": "j5_4",
													"children": []
												},
												{
													"text": "chemicalName",
													"a_attr": {
														"style": ""
													},
													"id": "j5_5",
													"children": []
												},
												{
													"text": "smiles",
													"a_attr": {
														"style": ""
													},
													"id": "j5_6",
													"children": []
												},
												{
													"text": "InChI",
													"a_attr": {
														"style": ""
													},
													"id": "j5_7",
													"children": []
												},
												{
													"text": "formula",
													"a_attr": {
														"style": ""
													},
													"id": "j5_8",
													"children": []
												}
											]
										}
									]
								}
							]
						},
						"fileName": "RCSB PDB Chemical Structure search.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "RCSB PDB Chemical Structure search"
					}
				}
			]
		},
		{
			"id": "bf3a9226-ed09-4f1e-9a23-ad2654765ead",
			"x": -518.9781133885908,
			"y": 247.3527762209791,
			"label": "",
			"timestamp": 1477005606596,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "d5c2cf7e-581c-483a-905f-609edb41d7c5",
			"x": -730.712003273269,
			"y": -57.59632485948474,
			"label": "RCSB PDB Chemical Structure search Input.csv\n",
			"timestamp": 1477010879297,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "RCSB PDB Chemical Structure search Input",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "RCSB PDB Chemical Structure search Input.csv",
					"description": "RCSB PDB Chemical Structure search Input",
					"url": "",
					"outAttributes": [
						{
							"label": "smiles",
							"name": "smiles",
							"type": "string"
						},
						{
							"label": "search_type",
							"name": "search_type",
							"type": "string"
						},
						{
							"label": "similarity",
							"name": "similarity",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input>\t\t\t\t\t<smiles></smiles>\t\t\t\t\t<search_type></search_type>\t\t\t\t\t<similarity></similarity>\t\t\t</RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input>",
					"jsUrlReturnFileSchema": {
						"text": "RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "smiles",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "similarity",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "search_type",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							}
						]
					},
					"fileName": "RCSB PDB Chemical Structure search Input.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "RCSB PDB Chemical Structure search Input.csv"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "RCSB PDB Chemical Structure search Input",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "RCSB PDB Chemical Structure search Input.csv",
					"description": "RCSB PDB Chemical Structure search Input",
					"url": "",
					"outAttributes": [
						{
							"label": "smiles",
							"name": "smiles",
							"type": "string"
						},
						{
							"label": "search_type",
							"name": "search_type",
							"type": "string"
						},
						{
							"label": "similarity",
							"name": "similarity",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input>\t\t\t\t\t<smiles></smiles>\t\t\t\t\t<search_type></search_type>\t\t\t\t\t<similarity></similarity>\t\t\t</RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input>",
					"jsUrlReturnFileSchema": {
						"text": "RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "smiles",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "similarity",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "search_type",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							}
						]
					},
					"fileName": "RCSB PDB Chemical Structure search Input.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "RCSB PDB Chemical Structure search Input.csv"
				}
			],
			"font": {
				"align": "left"
			}
		}
	],
	"edges": [
		{
			"from": "56e28015-ee35-4be8-be2e-c34eacbab586",
			"to": "81e391e3-20e7-4fa7-908a-d665bd26259e",
			"id": "4acb9773-f92e-469c-af78-9cdbfeafc9c7",
			"arrows": "to",
			"label": "RCSB PDB Chemical Structure search\n",
			"resources": [
				{
					"id": "3ef6f1fa-1143-4218-895f-e5555710843d",
					"resourceType": "HTTP",
					"organization": "Protein Data Bank",
					"resourceName": "RCSB PDB Chemical Structure search",
					"description": "This query performs chemical structure searches using SMILES and SMARTS linear notations.",
					"url": "http://www.rcsb.org/pdb/rest/smilesQuery",
					"urlExample": "/pdb/rest/smilesQuery?smiles=NC(=O)C1=CC=CC=C1&search_type=exact",
					"method": "GET",
					"attributes": [
						{
							"label": "smiles",
							"name": "smiles",
							"value": "",
							"required": true,
							"shown": true,
							"example": "NC(=O)C1=CC=CC=C1",
							"attributeType": "input",
							"description": "chemical structure"
						},
						{
							"label": "search_type",
							"name": "search_type",
							"value": "",
							"required": true,
							"shown": true,
							"example": "exact",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "exact",
									"value": "exact"
								},
								{
									"label": "substructure",
									"value": "substructure"
								},
								{
									"label": "superstructure",
									"value": "superstructure"
								},
								{
									"label": "similarity",
									"value": "similarity"
								}
							],
							"description": "search types:  exact, substructure, superstructure or similarity"
						},
						{
							"label": "similarity",
							"name": "similarity",
							"value": "",
							"required": false,
							"shown": true,
							"example": "0.7",
							"attributeType": "input",
							"description": "Specify a similarity threshold to change the degree of similarity in the [0...1] range: 0 dissimilar ... 1 identical."
						}
					],
					"outAttributes": [
						{
							"label": "chemicalName",
							"name": "chemicalName",
							"type": "string"
						},
						{
							"label": "formula",
							"name": "formula",
							"type": "string"
						},
						{
							"label": "InChIKey",
							"name": "InChIKey",
							"type": "string"
						},
						{
							"label": "InChI",
							"name": "InChI",
							"type": "string"
						},
						{
							"label": "smiles",
							"name": "smiles",
							"type": "string"
						}
					],
					"methodReturnFileType": "XML",
					"urlReturnFileType": "XML",
					"urlReturnFileSchema": "<smilesQueryResult>\t\t\t\t<ligandInfo>\t\t\t\t\t<ligand>\t\t\t\t\t\t<chemicalName></chemicalName>\t\t\t\t\t\t<formula></formula>\t\t\t\t\t\t<InChIKey></InChIKey>\t\t\t\t\t\t<InChI></InChI>\t\t\t\t\t\t<smiles></smiles>\t\t\t\t\t</ligand>\t\t\t\t</ligandInfo>\t\t\t</smilesQueryResult>",
					"jsUrlReturnFileSchema": {
						"text": "smilesQueryResult",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j5_1",
						"children": [
							{
								"text": "ligandInfo",
								"a_attr": {
									"style": ""
								},
								"id": "j5_2",
								"children": [
									{
										"text": "ligand",
										"a_attr": {
											"style": ""
										},
										"id": "j5_3",
										"children": [
											{
												"text": "InChIKey",
												"a_attr": {
													"style": ""
												},
												"id": "j5_4",
												"children": []
											},
											{
												"text": "chemicalName",
												"a_attr": {
													"style": ""
												},
												"id": "j5_5",
												"children": []
											},
											{
												"text": "smiles",
												"a_attr": {
													"style": ""
												},
												"id": "j5_6",
												"children": []
											},
											{
												"text": "InChI",
												"a_attr": {
													"style": ""
												},
												"id": "j5_7",
												"children": []
											},
											{
												"text": "formula",
												"a_attr": {
													"style": ""
												},
												"id": "j5_8",
												"children": []
											}
										]
									}
								]
							}
						]
					},
					"fileName": "RCSB PDB Chemical Structure search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "RCSB PDB Chemical Structure search"
				}
			],
			"libraries": []
		},
		{
			"from": "81e391e3-20e7-4fa7-908a-d665bd26259e",
			"to": "bf3a9226-ed09-4f1e-9a23-ad2654765ead",
			"id": "f73144bd-c245-462c-bab6-2075b16003ce",
			"arrows": "to",
			"label": "",
			"resources": [],
			"libraries": []
		},
		{
			"from": "d5c2cf7e-581c-483a-905f-609edb41d7c5",
			"to": "81e391e3-20e7-4fa7-908a-d665bd26259e",
			"id": "850f7327-a6a9-4932-b7ef-79c6de586ced",
			"arrows": "to",
			"label": "RCSB PDB Chemical Structure search Input.csv\n",
			"resources": [
				{
					"id": "RCSB PDB Chemical Structure search Input",
					"resourceType": "CSV",
					"organization": "UI database team",
					"resourceName": "RCSB PDB Chemical Structure search Input.csv",
					"description": "RCSB PDB Chemical Structure search Input",
					"url": "",
					"outAttributes": [
						{
							"label": "smiles",
							"name": "smiles",
							"type": "string"
						},
						{
							"label": "search_type",
							"name": "search_type",
							"type": "string"
						},
						{
							"label": "similarity",
							"name": "similarity",
							"type": "string"
						}
					],
					"methodReturnFileType": "CSV",
					"urlReturnFileType": "CSV",
					"urlReturnFileSchema": "<RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input>\t\t\t\t\t<smiles></smiles>\t\t\t\t\t<search_type></search_type>\t\t\t\t\t<similarity></similarity>\t\t\t</RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input>",
					"jsUrlReturnFileSchema": {
						"text": "RCSB&#x20;PDB&#x20;Chemical&#x20;Structure&#x20;search&#x20;Input",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "smiles",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "similarity",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "search_type",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							}
						]
					},
					"fileName": "RCSB PDB Chemical Structure search Input.csv",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "RCSB PDB Chemical Structure search Input.csv"
				}
			],
			"libraries": []
		}
	]
}