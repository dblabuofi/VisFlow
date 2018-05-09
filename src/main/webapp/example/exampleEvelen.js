var exampleEvelen = {
	"nodes": [
		{
			"id": "5fd8d5ea-28f7-47be-a2ab-4a8ca1111d9e",
			"x": -381.265625,
			"y": -140.5625,
			"label": "\n\nTreefam sequence search\n",
			"timestamp": 1474432045313,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "22f040a4-170c-48f0-b16e-e54b12facb81",
					"resourceType": "REST",
					"organization": "EMBL-EBI",
					"resourceName": "Treefam sequence search",
					"description": "TreeFam is a database composed of phylogenetic trees inferred from animal genomes. It provides orthology/parology predictions as well the evolutionary history of genes.",
					"url": "http://www.treefam.org/sequence/{sequence}",
					"urlExample": "http://www.treefam.org/sequence/ENSP00000428984",
					"method": "REST",
					"attributes": [
						{
							"label": "sequence",
							"name": "sequence",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ENSP00000428984",
							"attributeType": "input",
							"description": "Treefam sequence ID",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "Species",
							"name": "Species",
							"type": "string"
						},
						{
							"label": "ID",
							"name": "ID",
							"type": "string"
						},
						{
							"label": "Species",
							"name": "Species",
							"type": "string"
						},
						{
							"label": "Type",
							"name": "Type",
							"type": "string"
						},
						{
							"label": "Taxonomic level",
							"name": "Taxonomic level",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<Treefam&#x20;sequence&#x20;info>\r\n\t\t\t\t\t<Species></Species>\r\n\t\t\t\t\t<ID></ID>\r\n\t\t\t\t\t<Species></Species>\r\n\t\t\t\t\t<ID></ID>\r\n\t\t\t\t\t<Taxonomic&#x20;level></Taxonomic&#x20;level>\r\n\t\t\t</Treefam&#x20;sequence&#x20;info>",
					"jsUrlReturnFileSchema": {
						"text": "Treefam&#x20;sequence&#x20;info",
						"a_attr": {
							"style": ""
						},
						"id": "j4_1",
						"children": [
							{
								"text": "Taxonomic&#x20;level",
								"a_attr": {
									"style": ""
								},
								"id": "j4_2",
								"children": []
							},
							{
								"text": "ID",
								"a_attr": {
									"style": ""
								},
								"id": "j4_3",
								"children": []
							},
							{
								"text": "Species",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j4_4",
								"children": []
							}
						]
					},
					"fileName": "Treefam sequence search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Treefam sequence search",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"Species",
							"ID",
							"Species",
							"ID",
							"Type",
							"Taxonomic level"
						]
					},
					"matcher": ""
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "22f040a4-170c-48f0-b16e-e54b12facb81",
					"resourceType": "REST",
					"organization": "EMBL-EBI",
					"resourceName": "Treefam sequence search",
					"description": "TreeFam is a database composed of phylogenetic trees inferred from animal genomes. It provides orthology/parology predictions as well the evolutionary history of genes.",
					"url": "http://www.treefam.org/sequence/{sequence}",
					"urlExample": "http://www.treefam.org/sequence/ENSP00000428984",
					"method": "REST",
					"attributes": [
						{
							"label": "sequence",
							"name": "sequence",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ENSP00000428984",
							"attributeType": "input",
							"description": "Treefam sequence ID",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "Species",
							"name": "Species",
							"type": "string"
						},
						{
							"label": "ID",
							"name": "ID",
							"type": "string"
						},
						{
							"label": "Species",
							"name": "Species",
							"type": "string"
						},
						{
							"label": "Type",
							"name": "Type",
							"type": "string"
						},
						{
							"label": "Taxonomic level",
							"name": "Taxonomic level",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<Treefam&#x20;sequence&#x20;info>\r\n\t\t\t\t\t<Species></Species>\r\n\t\t\t\t\t<ID></ID>\r\n\t\t\t\t\t<Species></Species>\r\n\t\t\t\t\t<ID></ID>\r\n\t\t\t\t\t<Taxonomic&#x20;level></Taxonomic&#x20;level>\r\n\t\t\t</Treefam&#x20;sequence&#x20;info>",
					"jsUrlReturnFileSchema": {
						"text": "Treefam&#x20;sequence&#x20;info",
						"a_attr": {
							"style": ""
						},
						"id": "j4_1",
						"children": [
							{
								"text": "Taxonomic&#x20;level",
								"a_attr": {
									"style": ""
								},
								"id": "j4_2",
								"children": []
							},
							{
								"text": "ID",
								"a_attr": {
									"style": ""
								},
								"id": "j4_3",
								"children": []
							},
							{
								"text": "Species",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j4_4",
								"children": []
							}
						]
					},
					"fileName": "Treefam sequence search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Treefam sequence search",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"Species",
							"ID",
							"Species",
							"ID",
							"Type",
							"Taxonomic level"
						]
					},
					"matcher": ""
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "39217e60-a39d-41cf-b7f9-d71b9c92f1e2",
			"x": -484.7394914755419,
			"y": 248.2694698935774,
			"label": "",
			"timestamp": 1477181948834,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "treeform.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "22f040a4-170c-48f0-b16e-e54b12facb81"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "de59d28c-5512-4e8e-9257-76da3d607c44",
			"x": -461.56399486158597,
			"y": 70.11390444827504,
			"label": "",
			"timestamp": 1477182402168,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "22f040a4-170c-48f0-b16e-e54b12facb81",
					"resourceType": "REST",
					"organization": "EMBL-EBI",
					"resourceName": "Treefam sequence search",
					"description": "TreeFam is a database composed of phylogenetic trees inferred from animal genomes. It provides orthology/parology predictions as well the evolutionary history of genes.",
					"url": "http://www.treefam.org/sequence/{sequence}",
					"urlExample": "http://www.treefam.org/sequence/ENSP00000428984",
					"method": "REST",
					"attributes": [
						{
							"label": "sequence",
							"name": "sequence",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ENSP00000428984",
							"attributeType": "input",
							"description": "Treefam sequence ID",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "Species",
							"name": "Species",
							"type": "string"
						},
						{
							"label": "ID",
							"name": "ID",
							"type": "string"
						},
						{
							"label": "Species",
							"name": "Species",
							"type": "string"
						},
						{
							"label": "Type",
							"name": "Type",
							"type": "string"
						},
						{
							"label": "Taxonomic level",
							"name": "Taxonomic level",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<Treefam&#x20;sequence&#x20;info>\r\n\t\t\t\t\t<Species></Species>\r\n\t\t\t\t\t<ID></ID>\r\n\t\t\t\t\t<Species></Species>\r\n\t\t\t\t\t<ID></ID>\r\n\t\t\t\t\t<Taxonomic&#x20;level></Taxonomic&#x20;level>\r\n\t\t\t</Treefam&#x20;sequence&#x20;info>",
					"jsUrlReturnFileSchema": {
						"text": "Treefam&#x20;sequence&#x20;info",
						"a_attr": {
							"style": ""
						},
						"id": "j4_1",
						"children": [
							{
								"text": "Taxonomic&#x20;level",
								"a_attr": {
									"style": ""
								},
								"id": "j4_2",
								"children": []
							},
							{
								"text": "ID",
								"a_attr": {
									"style": ""
								},
								"id": "j4_3",
								"children": []
							},
							{
								"text": "Species",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j4_4",
								"children": []
							}
						]
					},
					"fileName": "Treefam sequence search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Treefam sequence search",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"Species",
							"ID",
							"Species",
							"ID",
							"Type",
							"Taxonomic level"
						]
					},
					"matcher": ""
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "treefarm.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "22f040a4-170c-48f0-b16e-e54b12facb81"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "22f040a4-170c-48f0-b16e-e54b12facb81",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"treefarm.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "22f040a4-170c-48f0-b16e-e54b12facb81",
						"resourceType": "REST",
						"organization": "EMBL-EBI",
						"resourceName": "Treefam sequence search",
						"description": "TreeFam is a database composed of phylogenetic trees inferred from animal genomes. It provides orthology/parology predictions as well the evolutionary history of genes.",
						"url": "http://www.treefam.org/sequence/{sequence}",
						"urlExample": "http://www.treefam.org/sequence/ENSP00000428984",
						"method": "REST",
						"attributes": [
							{
								"label": "sequence",
								"name": "sequence",
								"type": "string",
								"value": "ENSP00000428984",
								"required": true,
								"shown": true,
								"example": "ENSP00000428984",
								"attributeType": "input",
								"description": "Treefam sequence ID",
								"from": "input"
							}
						],
						"outAttributes": [
							{
								"label": "Species",
								"name": "Species",
								"type": "string"
							},
							{
								"label": "ID",
								"name": "ID",
								"type": "string"
							},
							{
								"label": "Species",
								"name": "Species",
								"type": "string"
							},
							{
								"label": "Type",
								"name": "Type",
								"type": "string"
							},
							{
								"label": "Taxonomic level",
								"name": "Taxonomic level",
								"type": "string"
							}
						],
						"methodReturnFileType": "HTML",
						"urlReturnFileType": "TEXT",
						"urlReturnFileSchema": "<Treefam&#x20;sequence&#x20;info>\r\n\t\t\t\t\t<Species></Species>\r\n\t\t\t\t\t<ID></ID>\r\n\t\t\t\t\t<Species></Species>\r\n\t\t\t\t\t<ID></ID>\r\n\t\t\t\t\t<Taxonomic&#x20;level></Taxonomic&#x20;level>\r\n\t\t\t</Treefam&#x20;sequence&#x20;info>",
						"jsUrlReturnFileSchema": {
							"text": "Treefam&#x20;sequence&#x20;info",
							"a_attr": {
								"style": ""
							},
							"id": "j4_1",
							"children": [
								{
									"text": "Taxonomic&#x20;level",
									"a_attr": {
										"style": ""
									},
									"id": "j4_2",
									"children": []
								},
								{
									"text": "ID",
									"a_attr": {
										"style": ""
									},
									"id": "j4_3",
									"children": []
								},
								{
									"text": "Species",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"id": "j4_4",
									"children": []
								}
							]
						},
						"fileName": "Treefam sequence search.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "Treefam sequence search",
						"wrapper": {
							"wrapperName": "myTableExactor",
							"headers": [
								"Species",
								"ID",
								"Species",
								"ID",
								"Type",
								"Taxonomic level"
							]
						},
						"matcher": ""
					}
				}
			]
		}
	],
	"edges": [
		{
			"from": "5fd8d5ea-28f7-47be-a2ab-4a8ca1111d9e",
			"to": "de59d28c-5512-4e8e-9257-76da3d607c44",
			"id": "6887fe99-0261-4465-b805-de398291c94e",
			"arrows": "to",
			"label": "Treefam sequence search\n",
			"resources": [
				{
					"id": "22f040a4-170c-48f0-b16e-e54b12facb81",
					"resourceType": "REST",
					"organization": "EMBL-EBI",
					"resourceName": "Treefam sequence search",
					"description": "TreeFam is a database composed of phylogenetic trees inferred from animal genomes. It provides orthology/parology predictions as well the evolutionary history of genes.",
					"url": "http://www.treefam.org/sequence/{sequence}",
					"urlExample": "http://www.treefam.org/sequence/ENSP00000428984",
					"method": "REST",
					"attributes": [
						{
							"label": "sequence",
							"name": "sequence",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ENSP00000428984",
							"attributeType": "input",
							"description": "Treefam sequence ID",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "Species",
							"name": "Species",
							"type": "string"
						},
						{
							"label": "ID",
							"name": "ID",
							"type": "string"
						},
						{
							"label": "Species",
							"name": "Species",
							"type": "string"
						},
						{
							"label": "Type",
							"name": "Type",
							"type": "string"
						},
						{
							"label": "Taxonomic level",
							"name": "Taxonomic level",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<Treefam&#x20;sequence&#x20;info>\r\n\t\t\t\t\t<Species></Species>\r\n\t\t\t\t\t<ID></ID>\r\n\t\t\t\t\t<Species></Species>\r\n\t\t\t\t\t<ID></ID>\r\n\t\t\t\t\t<Taxonomic&#x20;level></Taxonomic&#x20;level>\r\n\t\t\t</Treefam&#x20;sequence&#x20;info>",
					"jsUrlReturnFileSchema": {
						"text": "Treefam&#x20;sequence&#x20;info",
						"a_attr": {
							"style": ""
						},
						"id": "j4_1",
						"children": [
							{
								"text": "Taxonomic&#x20;level",
								"a_attr": {
									"style": ""
								},
								"id": "j4_2",
								"children": []
							},
							{
								"text": "ID",
								"a_attr": {
									"style": ""
								},
								"id": "j4_3",
								"children": []
							},
							{
								"text": "Species",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j4_4",
								"children": []
							}
						]
					},
					"fileName": "Treefam sequence search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "Treefam sequence search",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"Species",
							"ID",
							"Species",
							"ID",
							"Type",
							"Taxonomic level"
						]
					},
					"matcher": ""
				}
			],
			"libraries": []
		},
		{
			"from": "de59d28c-5512-4e8e-9257-76da3d607c44",
			"to": "39217e60-a39d-41cf-b7f9-d71b9c92f1e2",
			"id": "d9078c82-294b-473b-8c80-9ed9c0363103",
			"arrows": "to",
			"label": "treefarm.csv\n",
			"resources": [
				{
					"urlReturnFileName": "treefarm.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "22f040a4-170c-48f0-b16e-e54b12facb81"
				}
			],
			"libraries": []
		}
	]
}