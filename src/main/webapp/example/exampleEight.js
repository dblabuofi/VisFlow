var exampleEight = {
	"nodes": [
		{
			"id": "449149bc-90b0-41b5-87b6-f3b7d527b968",
			"x": -346.72220408594944,
			"y": -77.92135055599543,
			"label": "NCBI Proteinclusters Genome Groups\n",
			"timestamp": 1477170836691,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "e787e336-32c1-46aa-9e67-44be4ebe6580",
					"resourceType": "REST",
					"organization": "NCBI",
					"resourceName": "NCBI Proteinclusters Genome Groups",
					"description": "Protein Clusters is a collection of related protein sequences (clusters) consisting of Reference Sequence proteins that are encoded by complete prokaryotic genomes as well those encoded eukaryotic organelle plasmids and genomes.",
					"url": "http://www.ncbi.nlm.nih.gov/proteinclusters/{proteinclusterID}",
					"urlExample": "http://www.ncbi.nlm.nih.gov/proteinclusters/122903",
					"method": "REST",
					"attributes": [
						{
							"label": "proteinclusterID",
							"name": "proteinclusterID",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "122903",
							"attributeType": "input",
							"description": "protein cluster id"
						}
					],
					"outAttributes": [
						{
							"label": "Clade ID",
							"name": "Clade ID",
							"type": "string"
						},
						{
							"label": "Name",
							"name": "Name",
							"type": "string"
						},
						{
							"label": "Proteins in Cluster",
							"name": "Proteins in Cluster",
							"type": "string"
						},
						{
							"label": "Total Annotated Genomes",
							"name": "Total Annotated Genomes",
							"type": "string"
						},
						{
							"label": "Proteins per Genome(median) significance",
							"name": "Proteins per Genome(median) significance",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups>\r\n\t\t\t\t<Clade&#x20;ID></Clade&#x20;ID>\r\n\t\t\t\t<Name></Name>\r\n\t\t\t\t<Proteins&#x20;in&#x20;Cluster></Proteins&#x20;in&#x20;Cluster>\r\n\t\t\t\t<Total&#x20;Annotated&#x20;Genomes></Total&#x20;Annotated&#x20;Genomes>\r\n\t\t\t\t<Proteins&#x20;per&#x20;Genome(median)&#x20;significance></Proteins&#x20;per&#x20;Genome(median)&#x20;significance>\r\n\t\t\t</NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups>",
					"jsUrlReturnFileSchema": {
						"text": "NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups",
						"a_attr": {
							"style": ""
						},
						"id": "j5_1",
						"children": [
							{
								"text": "Clade&#x20;ID",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": []
							},
							{
								"text": "Total&#x20;Annotated&#x20;Genomes",
								"a_attr": {
									"style": ""
								},
								"id": "j5_3",
								"children": []
							},
							{
								"text": "Proteins&#x20;in&#x20;Cluster",
								"a_attr": {
									"style": ""
								},
								"id": "j5_4",
								"children": []
							},
							{
								"text": "Proteins&#x20;per&#x20;Genome(median)&#x20;significance",
								"a_attr": {
									"style": ""
								},
								"id": "j5_5",
								"children": []
							},
							{
								"text": "Name",
								"a_attr": {
									"style": ""
								},
								"id": "j5_6",
								"children": []
							}
						]
					},
					"fileName": "NCBI Proteinclusters Genome Groups.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "NCBI Proteinclusters Genome Groups",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"Clade ID",
							"Name",
							"Proteins in Cluster",
							"Total Annotated Genomes",
							"Proteins per Genome(median) significance"
						]
					}
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "e787e336-32c1-46aa-9e67-44be4ebe6580",
					"resourceType": "REST",
					"organization": "NCBI",
					"resourceName": "NCBI Proteinclusters Genome Groups",
					"description": "Protein Clusters is a collection of related protein sequences (clusters) consisting of Reference Sequence proteins that are encoded by complete prokaryotic genomes as well those encoded eukaryotic organelle plasmids and genomes.",
					"url": "http://www.ncbi.nlm.nih.gov/proteinclusters/{proteinclusterID}",
					"urlExample": "http://www.ncbi.nlm.nih.gov/proteinclusters/122903",
					"method": "REST",
					"attributes": [
						{
							"label": "proteinclusterID",
							"name": "proteinclusterID",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "122903",
							"attributeType": "input",
							"description": "protein cluster id"
						}
					],
					"outAttributes": [
						{
							"label": "Clade ID",
							"name": "Clade ID",
							"type": "string"
						},
						{
							"label": "Name",
							"name": "Name",
							"type": "string"
						},
						{
							"label": "Proteins in Cluster",
							"name": "Proteins in Cluster",
							"type": "string"
						},
						{
							"label": "Total Annotated Genomes",
							"name": "Total Annotated Genomes",
							"type": "string"
						},
						{
							"label": "Proteins per Genome(median) significance",
							"name": "Proteins per Genome(median) significance",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups>\r\n\t\t\t\t<Clade&#x20;ID></Clade&#x20;ID>\r\n\t\t\t\t<Name></Name>\r\n\t\t\t\t<Proteins&#x20;in&#x20;Cluster></Proteins&#x20;in&#x20;Cluster>\r\n\t\t\t\t<Total&#x20;Annotated&#x20;Genomes></Total&#x20;Annotated&#x20;Genomes>\r\n\t\t\t\t<Proteins&#x20;per&#x20;Genome(median)&#x20;significance></Proteins&#x20;per&#x20;Genome(median)&#x20;significance>\r\n\t\t\t</NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups>",
					"jsUrlReturnFileSchema": {
						"text": "NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups",
						"a_attr": {
							"style": ""
						},
						"id": "j5_1",
						"children": [
							{
								"text": "Clade&#x20;ID",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": []
							},
							{
								"text": "Total&#x20;Annotated&#x20;Genomes",
								"a_attr": {
									"style": ""
								},
								"id": "j5_3",
								"children": []
							},
							{
								"text": "Proteins&#x20;in&#x20;Cluster",
								"a_attr": {
									"style": ""
								},
								"id": "j5_4",
								"children": []
							},
							{
								"text": "Proteins&#x20;per&#x20;Genome(median)&#x20;significance",
								"a_attr": {
									"style": ""
								},
								"id": "j5_5",
								"children": []
							},
							{
								"text": "Name",
								"a_attr": {
									"style": ""
								},
								"id": "j5_6",
								"children": []
							}
						]
					},
					"fileName": "NCBI Proteinclusters Genome Groups.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "NCBI Proteinclusters Genome Groups",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"Clade ID",
							"Name",
							"Proteins in Cluster",
							"Total Annotated Genomes",
							"Proteins per Genome(median) significance"
						]
					}
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "f73a2bcd-fe6a-450a-bb1b-0b8ed32df40c",
			"x": -482.14948899877515,
			"y": 332.7230127935329,
			"label": "",
			"timestamp": 1477170881384,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "median.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e787e336-32c1-46aa-9e67-44be4ebe6580"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "5b727b32-5b20-4f9e-aabf-c738c2b20e5c",
			"x": -464.6211098935346,
			"y": 137.29123456454764,
			"label": "",
			"timestamp": 1477171974795,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "e787e336-32c1-46aa-9e67-44be4ebe6580",
					"resourceType": "REST",
					"organization": "NCBI",
					"resourceName": "NCBI Proteinclusters Genome Groups",
					"description": "Protein Clusters is a collection of related protein sequences (clusters) consisting of Reference Sequence proteins that are encoded by complete prokaryotic genomes as well those encoded eukaryotic organelle plasmids and genomes.",
					"url": "http://www.ncbi.nlm.nih.gov/proteinclusters/{proteinclusterID}",
					"urlExample": "http://www.ncbi.nlm.nih.gov/proteinclusters/122903",
					"method": "REST",
					"attributes": [
						{
							"label": "proteinclusterID",
							"name": "proteinclusterID",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "122903",
							"attributeType": "input",
							"description": "protein cluster id"
						}
					],
					"outAttributes": [
						{
							"label": "Clade ID",
							"name": "Clade ID",
							"type": "string"
						},
						{
							"label": "Name",
							"name": "Name",
							"type": "string"
						},
						{
							"label": "Proteins in Cluster",
							"name": "Proteins in Cluster",
							"type": "string"
						},
						{
							"label": "Total Annotated Genomes",
							"name": "Total Annotated Genomes",
							"type": "string"
						},
						{
							"label": "Proteins per Genome(median) significance",
							"name": "Proteins per Genome(median) significance",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups>\r\n\t\t\t\t<Clade&#x20;ID></Clade&#x20;ID>\r\n\t\t\t\t<Name></Name>\r\n\t\t\t\t<Proteins&#x20;in&#x20;Cluster></Proteins&#x20;in&#x20;Cluster>\r\n\t\t\t\t<Total&#x20;Annotated&#x20;Genomes></Total&#x20;Annotated&#x20;Genomes>\r\n\t\t\t\t<Proteins&#x20;per&#x20;Genome(median)&#x20;significance></Proteins&#x20;per&#x20;Genome(median)&#x20;significance>\r\n\t\t\t</NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups>",
					"jsUrlReturnFileSchema": {
						"text": "NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups",
						"a_attr": {
							"style": ""
						},
						"id": "j5_1",
						"children": [
							{
								"text": "Clade&#x20;ID",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": []
							},
							{
								"text": "Total&#x20;Annotated&#x20;Genomes",
								"a_attr": {
									"style": ""
								},
								"id": "j5_3",
								"children": []
							},
							{
								"text": "Proteins&#x20;in&#x20;Cluster",
								"a_attr": {
									"style": ""
								},
								"id": "j5_4",
								"children": []
							},
							{
								"text": "Proteins&#x20;per&#x20;Genome(median)&#x20;significance",
								"a_attr": {
									"style": ""
								},
								"id": "j5_5",
								"children": []
							},
							{
								"text": "Name",
								"a_attr": {
									"style": ""
								},
								"id": "j5_6",
								"children": []
							}
						]
					},
					"fileName": "NCBI Proteinclusters Genome Groups.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "NCBI Proteinclusters Genome Groups",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"Clade ID",
							"Name",
							"Proteins in Cluster",
							"Total Annotated Genomes",
							"Proteins per Genome(median) significance"
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "clade.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e787e336-32c1-46aa-9e67-44be4ebe6580"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "e787e336-32c1-46aa-9e67-44be4ebe6580",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"clade.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "e787e336-32c1-46aa-9e67-44be4ebe6580",
						"resourceType": "REST",
						"organization": "NCBI",
						"resourceName": "NCBI Proteinclusters Genome Groups",
						"description": "Protein Clusters is a collection of related protein sequences (clusters) consisting of Reference Sequence proteins that are encoded by complete prokaryotic genomes as well those encoded eukaryotic organelle plasmids and genomes.",
						"url": "http://www.ncbi.nlm.nih.gov/proteinclusters/{proteinclusterID}",
						"urlExample": "http://www.ncbi.nlm.nih.gov/proteinclusters/122903",
						"method": "REST",
						"attributes": [
							{
								"label": "proteinclusterID",
								"name": "proteinclusterID",
								"type": "string",
								"value": "122903",
								"required": true,
								"shown": true,
								"example": "122903",
								"attributeType": "input",
								"description": "protein cluster id",
								"from": "input"
							}
						],
						"outAttributes": [
							{
								"label": "Clade ID",
								"name": "Clade ID",
								"type": "string"
							},
							{
								"label": "Name",
								"name": "Name",
								"type": "string"
							},
							{
								"label": "Proteins in Cluster",
								"name": "Proteins in Cluster",
								"type": "string"
							},
							{
								"label": "Total Annotated Genomes",
								"name": "Total Annotated Genomes",
								"type": "string"
							},
							{
								"label": "Proteins per Genome(median) significance",
								"name": "Proteins per Genome(median) significance",
								"type": "string"
							}
						],
						"methodReturnFileType": "HTML",
						"urlReturnFileType": "TEXT",
						"urlReturnFileSchema": "<NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups>\r\n\t\t\t\t<Clade&#x20;ID></Clade&#x20;ID>\r\n\t\t\t\t<Name></Name>\r\n\t\t\t\t<Proteins&#x20;in&#x20;Cluster></Proteins&#x20;in&#x20;Cluster>\r\n\t\t\t\t<Total&#x20;Annotated&#x20;Genomes></Total&#x20;Annotated&#x20;Genomes>\r\n\t\t\t\t<Proteins&#x20;per&#x20;Genome(median)&#x20;significance></Proteins&#x20;per&#x20;Genome(median)&#x20;significance>\r\n\t\t\t</NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups>",
						"jsUrlReturnFileSchema": {
							"text": "NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups",
							"a_attr": {
								"style": ""
							},
							"id": "j5_1",
							"children": [
								{
									"text": "Clade&#x20;ID",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"id": "j5_2",
									"children": []
								},
								{
									"text": "Total&#x20;Annotated&#x20;Genomes",
									"a_attr": {
										"style": ""
									},
									"id": "j5_3",
									"children": []
								},
								{
									"text": "Proteins&#x20;in&#x20;Cluster",
									"a_attr": {
										"style": ""
									},
									"id": "j5_4",
									"children": []
								},
								{
									"text": "Proteins&#x20;per&#x20;Genome(median)&#x20;significance",
									"a_attr": {
										"style": ""
									},
									"id": "j5_5",
									"children": []
								},
								{
									"text": "Name",
									"a_attr": {
										"style": ""
									},
									"id": "j5_6",
									"children": []
								}
							]
						},
						"fileName": "NCBI Proteinclusters Genome Groups.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "NCBI Proteinclusters Genome Groups",
						"wrapper": {
							"wrapperName": "myTableExactor",
							"headers": [
								"Clade ID",
								"Name",
								"Proteins in Cluster",
								"Total Annotated Genomes",
								"Proteins per Genome(median) significance"
							]
						}
					}
				}
			]
		}
	],
	"edges": [
		{
			"from": "449149bc-90b0-41b5-87b6-f3b7d527b968",
			"to": "5b727b32-5b20-4f9e-aabf-c738c2b20e5c",
			"id": "df5d06ed-358e-4fa9-beb0-08e3c39292c8",
			"arrows": "to",
			"label": "NCBI Proteinclusters Genome Groups\n",
			"resources": [
				{
					"id": "e787e336-32c1-46aa-9e67-44be4ebe6580",
					"resourceType": "REST",
					"organization": "NCBI",
					"resourceName": "NCBI Proteinclusters Genome Groups",
					"description": "Protein Clusters is a collection of related protein sequences (clusters) consisting of Reference Sequence proteins that are encoded by complete prokaryotic genomes as well those encoded eukaryotic organelle plasmids and genomes.",
					"url": "http://www.ncbi.nlm.nih.gov/proteinclusters/{proteinclusterID}",
					"urlExample": "http://www.ncbi.nlm.nih.gov/proteinclusters/122903",
					"method": "REST",
					"attributes": [
						{
							"label": "proteinclusterID",
							"name": "proteinclusterID",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "122903",
							"attributeType": "input",
							"description": "protein cluster id"
						}
					],
					"outAttributes": [
						{
							"label": "Clade ID",
							"name": "Clade ID",
							"type": "string"
						},
						{
							"label": "Name",
							"name": "Name",
							"type": "string"
						},
						{
							"label": "Proteins in Cluster",
							"name": "Proteins in Cluster",
							"type": "string"
						},
						{
							"label": "Total Annotated Genomes",
							"name": "Total Annotated Genomes",
							"type": "string"
						},
						{
							"label": "Proteins per Genome(median) significance",
							"name": "Proteins per Genome(median) significance",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups>\r\n\t\t\t\t<Clade&#x20;ID></Clade&#x20;ID>\r\n\t\t\t\t<Name></Name>\r\n\t\t\t\t<Proteins&#x20;in&#x20;Cluster></Proteins&#x20;in&#x20;Cluster>\r\n\t\t\t\t<Total&#x20;Annotated&#x20;Genomes></Total&#x20;Annotated&#x20;Genomes>\r\n\t\t\t\t<Proteins&#x20;per&#x20;Genome(median)&#x20;significance></Proteins&#x20;per&#x20;Genome(median)&#x20;significance>\r\n\t\t\t</NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups>",
					"jsUrlReturnFileSchema": {
						"text": "NCBI&#x20;Portein&#x20;Cluster&#x20;Genome&#x20;Groups",
						"a_attr": {
							"style": ""
						},
						"id": "j5_1",
						"children": [
							{
								"text": "Clade&#x20;ID",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j5_2",
								"children": []
							},
							{
								"text": "Total&#x20;Annotated&#x20;Genomes",
								"a_attr": {
									"style": ""
								},
								"id": "j5_3",
								"children": []
							},
							{
								"text": "Proteins&#x20;in&#x20;Cluster",
								"a_attr": {
									"style": ""
								},
								"id": "j5_4",
								"children": []
							},
							{
								"text": "Proteins&#x20;per&#x20;Genome(median)&#x20;significance",
								"a_attr": {
									"style": ""
								},
								"id": "j5_5",
								"children": []
							},
							{
								"text": "Name",
								"a_attr": {
									"style": ""
								},
								"id": "j5_6",
								"children": []
							}
						]
					},
					"fileName": "NCBI Proteinclusters Genome Groups.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "NCBI Proteinclusters Genome Groups",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"Clade ID",
							"Name",
							"Proteins in Cluster",
							"Total Annotated Genomes",
							"Proteins per Genome(median) significance"
						]
					}
				}
			],
			"libraries": []
		},
		{
			"from": "5b727b32-5b20-4f9e-aabf-c738c2b20e5c",
			"to": "f73a2bcd-fe6a-450a-bb1b-0b8ed32df40c",
			"id": "7bba37b9-fa44-4b7c-9bb1-d396e9496f65",
			"arrows": "to",
			"label": "clade.csv\n",
			"resources": [
				{
					"urlReturnFileName": "clade.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "e787e336-32c1-46aa-9e67-44be4ebe6580"
				}
			],
			"libraries": []
		}
	]
}