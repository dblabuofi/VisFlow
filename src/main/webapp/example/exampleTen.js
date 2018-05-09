var exampleTen = {
	"nodes": [
		{
			"id": "96e0130e-e1a1-42f1-8cd7-b091415677f9",
			"x": 19.734375,
			"y": -48.1875,
			"label": "gConvert\n",
			"timestamp": 1474298311437,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "42d48eee-3098-473b-b079-7f97cca0ea76",
					"resourceType": "HTTP",
					"organization": "g:Profiler",
					"resourceName": "gConvert",
					"description": "g:Convert is a gene ID mapping tool that allows conversion of genes, proteins, microarray probes, standard names, various database identifiers, etc. A mix of IDs of different types may be inserted to g:Convert. The user needs to select a target database; all input IDs will be converted into target database format. Input IDs that have no corresponding entry in target database will be displayed as N/A.",
					"url": "http://biit.cs.ut.ee/gprofiler/gconvert.cgi",
					"urlExample": "http://biit.cs.ut.ee/gprofiler/gconvert.cgi?organism=hsapiens&target=AFFY_HG_U133_PLUS_2&query=POU5F1+SOX2+NANOG",
					"method": "GET",
					"attributes": [
						{
							"label": "Organism",
							"name": "organism",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
								},
								{
									"label": "Saccharomyces cerevisiae",
									"value": "scerevisiae"
								},
								{
									"label": "Mus musculus",
									"value": "mmusculus"
								}
							],
							"description": "This parameter shows to which organism the genes proteins and probes in input query belong.",
							"from": "input"
						},
						{
							"label": "target database",
							"name": "target",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "AFFY_HG_U133_PLUS_2",
									"value": "AFFY_HG_U133_PLUS_2"
								},
								{
									"label": "REFSEQ_MRNA",
									"value": "REFSEQ_MRNA"
								},
								{
									"label": "ARRAYEXPRESS",
									"value": "ARRAYEXPRESS"
								}
							],
							"description": "Given a set of valid IDs for genes, probes or proteins, g:Convert converts the set into target database format.",
							"from": "input"
						},
						{
							"label": "Query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "POU5F1+SOX2+NANOG",
							"attributeType": "input",
							"description": "It contains one or more genes (proteins, transcripts, microarray probeset IDs, etc) or a selected organism.",
							"from": "input"
						},
						{
							"label": "Output type",
							"name": "output",
							"type": "string",
							"value": "html",
							"required": true,
							"shown": false,
							"description": "print a nice format to extract data",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "G#",
							"name": "G#",
							"type": "string"
						},
						{
							"label": "Initial alias",
							"name": "Initial alias",
							"type": "string"
						},
						{
							"label": "C#",
							"name": "C#",
							"type": "string"
						},
						{
							"label": "converted alias",
							"name": "converted alias",
							"type": "string"
						},
						{
							"label": "name",
							"name": "name",
							"type": "string"
						},
						{
							"label": "description",
							"name": "description",
							"type": "string"
						},
						{
							"label": "namespace",
							"name": "namespace",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<gProfiler&#x20;gConvert>\r\n\t\t\t\t<G#></G#>\r\n\t\t\t\t<Initial&#x20;alias></Initial&#x20;alias>\r\n\t\t\t\t<C#></C#>\r\n\t\t\t\t<converted&#x20;alias></converted&#x20;alias>\r\n\t\t\t\t<name></name>\r\n\t\t\t\t<description></description>\r\n\t\t\t\t<namespace></namespace>\r\n\t\t\t</gProfiler&#x20;gConvert>",
					"jsUrlReturnFileSchema": {
						"text": "gProfiler&#x20;gConvert",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "C#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "name",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "namespace",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							},
							{
								"text": "description",
								"a_attr": {
									"style": ""
								},
								"id": "j6_5",
								"children": []
							},
							{
								"text": "converted&#x20;alias",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_6",
								"children": []
							},
							{
								"text": "G#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_7",
								"children": []
							},
							{
								"text": "Initial&#x20;alias",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_8",
								"children": []
							}
						]
					},
					"fileName": "gProfiler gConvert.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "gConvert",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"G#",
							"Initial alias",
							"C#",
							"converted alias",
							"name",
							"description",
							"namespace"
						]
					}
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "42d48eee-3098-473b-b079-7f97cca0ea76",
					"resourceType": "HTTP",
					"organization": "g:Profiler",
					"resourceName": "gConvert",
					"description": "g:Convert is a gene ID mapping tool that allows conversion of genes, proteins, microarray probes, standard names, various database identifiers, etc. A mix of IDs of different types may be inserted to g:Convert. The user needs to select a target database; all input IDs will be converted into target database format. Input IDs that have no corresponding entry in target database will be displayed as N/A.",
					"url": "http://biit.cs.ut.ee/gprofiler/gconvert.cgi",
					"urlExample": "http://biit.cs.ut.ee/gprofiler/gconvert.cgi?organism=hsapiens&target=AFFY_HG_U133_PLUS_2&query=POU5F1+SOX2+NANOG",
					"method": "GET",
					"attributes": [
						{
							"label": "Organism",
							"name": "organism",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
								},
								{
									"label": "Saccharomyces cerevisiae",
									"value": "scerevisiae"
								},
								{
									"label": "Mus musculus",
									"value": "mmusculus"
								}
							],
							"description": "This parameter shows to which organism the genes proteins and probes in input query belong.",
							"from": "input"
						},
						{
							"label": "target database",
							"name": "target",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "AFFY_HG_U133_PLUS_2",
									"value": "AFFY_HG_U133_PLUS_2"
								},
								{
									"label": "REFSEQ_MRNA",
									"value": "REFSEQ_MRNA"
								},
								{
									"label": "ARRAYEXPRESS",
									"value": "ARRAYEXPRESS"
								}
							],
							"description": "Given a set of valid IDs for genes, probes or proteins, g:Convert converts the set into target database format.",
							"from": "input"
						},
						{
							"label": "Query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "POU5F1+SOX2+NANOG",
							"attributeType": "input",
							"description": "It contains one or more genes (proteins, transcripts, microarray probeset IDs, etc) or a selected organism.",
							"from": "input"
						},
						{
							"label": "Output type",
							"name": "output",
							"type": "string",
							"value": "html",
							"required": true,
							"shown": false,
							"description": "print a nice format to extract data",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "G#",
							"name": "G#",
							"type": "string"
						},
						{
							"label": "Initial alias",
							"name": "Initial alias",
							"type": "string"
						},
						{
							"label": "C#",
							"name": "C#",
							"type": "string"
						},
						{
							"label": "converted alias",
							"name": "converted alias",
							"type": "string"
						},
						{
							"label": "name",
							"name": "name",
							"type": "string"
						},
						{
							"label": "description",
							"name": "description",
							"type": "string"
						},
						{
							"label": "namespace",
							"name": "namespace",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<gProfiler&#x20;gConvert>\r\n\t\t\t\t<G#></G#>\r\n\t\t\t\t<Initial&#x20;alias></Initial&#x20;alias>\r\n\t\t\t\t<C#></C#>\r\n\t\t\t\t<converted&#x20;alias></converted&#x20;alias>\r\n\t\t\t\t<name></name>\r\n\t\t\t\t<description></description>\r\n\t\t\t\t<namespace></namespace>\r\n\t\t\t</gProfiler&#x20;gConvert>",
					"jsUrlReturnFileSchema": {
						"text": "gProfiler&#x20;gConvert",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "C#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "name",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "namespace",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							},
							{
								"text": "description",
								"a_attr": {
									"style": ""
								},
								"id": "j6_5",
								"children": []
							},
							{
								"text": "converted&#x20;alias",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_6",
								"children": []
							},
							{
								"text": "G#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_7",
								"children": []
							},
							{
								"text": "Initial&#x20;alias",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_8",
								"children": []
							}
						]
					},
					"fileName": "gProfiler gConvert.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "gConvert",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"G#",
							"Initial alias",
							"C#",
							"converted alias",
							"name",
							"description",
							"namespace"
						]
					}
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "f6419396-a757-4509-b032-d1f9e60f3f02",
			"x": -75.18454184014433,
			"y": 119.01668682407288,
			"label": "",
			"timestamp": 1477180476158,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "42d48eee-3098-473b-b079-7f97cca0ea76",
					"resourceType": "HTTP",
					"organization": "g:Profiler",
					"resourceName": "gConvert",
					"description": "g:Convert is a gene ID mapping tool that allows conversion of genes, proteins, microarray probes, standard names, various database identifiers, etc. A mix of IDs of different types may be inserted to g:Convert. The user needs to select a target database; all input IDs will be converted into target database format. Input IDs that have no corresponding entry in target database will be displayed as N/A.",
					"url": "http://biit.cs.ut.ee/gprofiler/gconvert.cgi",
					"urlExample": "http://biit.cs.ut.ee/gprofiler/gconvert.cgi?organism=hsapiens&target=AFFY_HG_U133_PLUS_2&query=POU5F1+SOX2+NANOG",
					"method": "GET",
					"attributes": [
						{
							"label": "Organism",
							"name": "organism",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
								},
								{
									"label": "Saccharomyces cerevisiae",
									"value": "scerevisiae"
								},
								{
									"label": "Mus musculus",
									"value": "mmusculus"
								}
							],
							"description": "This parameter shows to which organism the genes proteins and probes in input query belong.",
							"from": "input"
						},
						{
							"label": "target database",
							"name": "target",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "AFFY_HG_U133_PLUS_2",
									"value": "AFFY_HG_U133_PLUS_2"
								},
								{
									"label": "REFSEQ_MRNA",
									"value": "REFSEQ_MRNA"
								},
								{
									"label": "ARRAYEXPRESS",
									"value": "ARRAYEXPRESS"
								}
							],
							"description": "Given a set of valid IDs for genes, probes or proteins, g:Convert converts the set into target database format.",
							"from": "input"
						},
						{
							"label": "Query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "POU5F1+SOX2+NANOG",
							"attributeType": "input",
							"description": "It contains one or more genes (proteins, transcripts, microarray probeset IDs, etc) or a selected organism.",
							"from": "input"
						},
						{
							"label": "Output type",
							"name": "output",
							"type": "string",
							"value": "html",
							"required": true,
							"shown": false,
							"description": "print a nice format to extract data",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "G#",
							"name": "G#",
							"type": "string"
						},
						{
							"label": "Initial alias",
							"name": "Initial alias",
							"type": "string"
						},
						{
							"label": "C#",
							"name": "C#",
							"type": "string"
						},
						{
							"label": "converted alias",
							"name": "converted alias",
							"type": "string"
						},
						{
							"label": "name",
							"name": "name",
							"type": "string"
						},
						{
							"label": "description",
							"name": "description",
							"type": "string"
						},
						{
							"label": "namespace",
							"name": "namespace",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<gProfiler&#x20;gConvert>\r\n\t\t\t\t<G#></G#>\r\n\t\t\t\t<Initial&#x20;alias></Initial&#x20;alias>\r\n\t\t\t\t<C#></C#>\r\n\t\t\t\t<converted&#x20;alias></converted&#x20;alias>\r\n\t\t\t\t<name></name>\r\n\t\t\t\t<description></description>\r\n\t\t\t\t<namespace></namespace>\r\n\t\t\t</gProfiler&#x20;gConvert>",
					"jsUrlReturnFileSchema": {
						"text": "gProfiler&#x20;gConvert",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "C#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "name",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "namespace",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							},
							{
								"text": "description",
								"a_attr": {
									"style": ""
								},
								"id": "j6_5",
								"children": []
							},
							{
								"text": "converted&#x20;alias",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_6",
								"children": []
							},
							{
								"text": "G#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_7",
								"children": []
							},
							{
								"text": "Initial&#x20;alias",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_8",
								"children": []
							}
						]
					},
					"fileName": "gProfiler gConvert.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "gConvert",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"G#",
							"Initial alias",
							"C#",
							"converted alias",
							"name",
							"description",
							"namespace"
						]
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gconvert.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "42d48eee-3098-473b-b079-7f97cca0ea76"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "42d48eee-3098-473b-b079-7f97cca0ea76",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"gconvert.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "42d48eee-3098-473b-b079-7f97cca0ea76",
						"resourceType": "HTTP",
						"organization": "g:Profiler",
						"resourceName": "gConvert",
						"description": "g:Convert is a gene ID mapping tool that allows conversion of genes, proteins, microarray probes, standard names, various database identifiers, etc. A mix of IDs of different types may be inserted to g:Convert. The user needs to select a target database; all input IDs will be converted into target database format. Input IDs that have no corresponding entry in target database will be displayed as N/A.",
						"url": "http://biit.cs.ut.ee/gprofiler/gconvert.cgi",
						"urlExample": "http://biit.cs.ut.ee/gprofiler/gconvert.cgi?organism=hsapiens&target=AFFY_HG_U133_PLUS_2&query=POU5F1+SOX2+NANOG",
						"method": "GET",
						"attributes": [
							{
								"label": "Organism",
								"name": "organism",
								"type": "string",
								"value": "hsapiens",
								"required": true,
								"shown": true,
								"example": "",
								"attributeType": "selection",
								"selectionpair": [
									{
										"label": "Homo sapiens",
										"value": "hsapiens"
									},
									{
										"label": "Saccharomyces cerevisiae",
										"value": "scerevisiae"
									},
									{
										"label": "Mus musculus",
										"value": "mmusculus"
									}
								],
								"description": "This parameter shows to which organism the genes proteins and probes in input query belong.",
								"from": "input"
							},
							{
								"label": "target database",
								"name": "target",
								"type": "string",
								"value": "AFFY_HG_U133_PLUS_2",
								"required": true,
								"shown": true,
								"example": "",
								"attributeType": "selection",
								"selectionpair": [
									{
										"label": "AFFY_HG_U133_PLUS_2",
										"value": "AFFY_HG_U133_PLUS_2"
									},
									{
										"label": "REFSEQ_MRNA",
										"value": "REFSEQ_MRNA"
									},
									{
										"label": "ARRAYEXPRESS",
										"value": "ARRAYEXPRESS"
									}
								],
								"description": "Given a set of valid IDs for genes, probes or proteins, g:Convert converts the set into target database format.",
								"from": "input"
							},
							{
								"label": "Query",
								"name": "query",
								"type": "string",
								"value": "POU5F1+SOX2+NANOG",
								"required": true,
								"shown": true,
								"example": "POU5F1+SOX2+NANOG",
								"attributeType": "input",
								"description": "It contains one or more genes (proteins, transcripts, microarray probeset IDs, etc) or a selected organism.",
								"from": "input"
							},
							{
								"label": "Output type",
								"name": "output",
								"type": "string",
								"value": "html",
								"required": true,
								"shown": false,
								"description": "print a nice format to extract data",
								"from": "default"
							}
						],
						"outAttributes": [
							{
								"label": "G#",
								"name": "G#",
								"type": "string"
							},
							{
								"label": "Initial alias",
								"name": "Initial alias",
								"type": "string"
							},
							{
								"label": "C#",
								"name": "C#",
								"type": "string"
							},
							{
								"label": "converted alias",
								"name": "converted alias",
								"type": "string"
							},
							{
								"label": "name",
								"name": "name",
								"type": "string"
							},
							{
								"label": "description",
								"name": "description",
								"type": "string"
							},
							{
								"label": "namespace",
								"name": "namespace",
								"type": "string"
							}
						],
						"methodReturnFileType": "HTML",
						"urlReturnFileType": "TEXT",
						"urlReturnFileSchema": "<gProfiler&#x20;gConvert>\r\n\t\t\t\t<G#></G#>\r\n\t\t\t\t<Initial&#x20;alias></Initial&#x20;alias>\r\n\t\t\t\t<C#></C#>\r\n\t\t\t\t<converted&#x20;alias></converted&#x20;alias>\r\n\t\t\t\t<name></name>\r\n\t\t\t\t<description></description>\r\n\t\t\t\t<namespace></namespace>\r\n\t\t\t</gProfiler&#x20;gConvert>",
						"jsUrlReturnFileSchema": {
							"text": "gProfiler&#x20;gConvert",
							"a_attr": {
								"style": ""
							},
							"id": "j6_1",
							"children": [
								{
									"text": "C#",
									"a_attr": {
										"style": ""
									},
									"id": "j6_2",
									"children": []
								},
								{
									"text": "name",
									"a_attr": {
										"style": ""
									},
									"id": "j6_3",
									"children": []
								},
								{
									"text": "namespace",
									"a_attr": {
										"style": ""
									},
									"id": "j6_4",
									"children": []
								},
								{
									"text": "description",
									"a_attr": {
										"style": ""
									},
									"id": "j6_5",
									"children": []
								},
								{
									"text": "converted&#x20;alias",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"id": "j6_6",
									"children": []
								},
								{
									"text": "G#",
									"a_attr": {
										"style": ""
									},
									"id": "j6_7",
									"children": []
								},
								{
									"text": "Initial&#x20;alias",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"id": "j6_8",
									"children": []
								}
							]
						},
						"fileName": "gProfiler gConvert.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "gConvert",
						"wrapper": {
							"wrapperName": "myTableExactor",
							"headers": [
								"G#",
								"Initial alias",
								"C#",
								"converted alias",
								"name",
								"description",
								"namespace"
							]
						}
					}
				}
			]
		},
		{
			"id": "53c960f2-b9bb-4b0b-9c78-722fa2d3e3f7",
			"x": -133.51397089673594,
			"y": 230.37286956847504,
			"label": "",
			"timestamp": 1477180478094,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gconvert.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "42d48eee-3098-473b-b079-7f97cca0ea76"
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
			"from": "96e0130e-e1a1-42f1-8cd7-b091415677f9",
			"to": "f6419396-a757-4509-b032-d1f9e60f3f02",
			"id": "637c81b5-aee7-4d0a-981f-81090b0bc951",
			"arrows": "to",
			"label": "gConvert\n",
			"resources": [
				{
					"id": "42d48eee-3098-473b-b079-7f97cca0ea76",
					"resourceType": "HTTP",
					"organization": "g:Profiler",
					"resourceName": "gConvert",
					"description": "g:Convert is a gene ID mapping tool that allows conversion of genes, proteins, microarray probes, standard names, various database identifiers, etc. A mix of IDs of different types may be inserted to g:Convert. The user needs to select a target database; all input IDs will be converted into target database format. Input IDs that have no corresponding entry in target database will be displayed as N/A.",
					"url": "http://biit.cs.ut.ee/gprofiler/gconvert.cgi",
					"urlExample": "http://biit.cs.ut.ee/gprofiler/gconvert.cgi?organism=hsapiens&target=AFFY_HG_U133_PLUS_2&query=POU5F1+SOX2+NANOG",
					"method": "GET",
					"attributes": [
						{
							"label": "Organism",
							"name": "organism",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
								},
								{
									"label": "Saccharomyces cerevisiae",
									"value": "scerevisiae"
								},
								{
									"label": "Mus musculus",
									"value": "mmusculus"
								}
							],
							"description": "This parameter shows to which organism the genes proteins and probes in input query belong.",
							"from": "input"
						},
						{
							"label": "target database",
							"name": "target",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "AFFY_HG_U133_PLUS_2",
									"value": "AFFY_HG_U133_PLUS_2"
								},
								{
									"label": "REFSEQ_MRNA",
									"value": "REFSEQ_MRNA"
								},
								{
									"label": "ARRAYEXPRESS",
									"value": "ARRAYEXPRESS"
								}
							],
							"description": "Given a set of valid IDs for genes, probes or proteins, g:Convert converts the set into target database format.",
							"from": "input"
						},
						{
							"label": "Query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "POU5F1+SOX2+NANOG",
							"attributeType": "input",
							"description": "It contains one or more genes (proteins, transcripts, microarray probeset IDs, etc) or a selected organism.",
							"from": "input"
						},
						{
							"label": "Output type",
							"name": "output",
							"type": "string",
							"value": "html",
							"required": true,
							"shown": false,
							"description": "print a nice format to extract data",
							"from": "default"
						}
					],
					"outAttributes": [
						{
							"label": "G#",
							"name": "G#",
							"type": "string"
						},
						{
							"label": "Initial alias",
							"name": "Initial alias",
							"type": "string"
						},
						{
							"label": "C#",
							"name": "C#",
							"type": "string"
						},
						{
							"label": "converted alias",
							"name": "converted alias",
							"type": "string"
						},
						{
							"label": "name",
							"name": "name",
							"type": "string"
						},
						{
							"label": "description",
							"name": "description",
							"type": "string"
						},
						{
							"label": "namespace",
							"name": "namespace",
							"type": "string"
						}
					],
					"methodReturnFileType": "HTML",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<gProfiler&#x20;gConvert>\r\n\t\t\t\t<G#></G#>\r\n\t\t\t\t<Initial&#x20;alias></Initial&#x20;alias>\r\n\t\t\t\t<C#></C#>\r\n\t\t\t\t<converted&#x20;alias></converted&#x20;alias>\r\n\t\t\t\t<name></name>\r\n\t\t\t\t<description></description>\r\n\t\t\t\t<namespace></namespace>\r\n\t\t\t</gProfiler&#x20;gConvert>",
					"jsUrlReturnFileSchema": {
						"text": "gProfiler&#x20;gConvert",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "C#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "name",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "namespace",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							},
							{
								"text": "description",
								"a_attr": {
									"style": ""
								},
								"id": "j6_5",
								"children": []
							},
							{
								"text": "converted&#x20;alias",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_6",
								"children": []
							},
							{
								"text": "G#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_7",
								"children": []
							},
							{
								"text": "Initial&#x20;alias",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j6_8",
								"children": []
							}
						]
					},
					"fileName": "gProfiler gConvert.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "gConvert",
					"wrapper": {
						"wrapperName": "myTableExactor",
						"headers": [
							"G#",
							"Initial alias",
							"C#",
							"converted alias",
							"name",
							"description",
							"namespace"
						]
					}
				}
			],
			"libraries": []
		},
		{
			"from": "f6419396-a757-4509-b032-d1f9e60f3f02",
			"to": "53c960f2-b9bb-4b0b-9c78-722fa2d3e3f7",
			"id": "5e8ce31a-d4ef-41d7-aa59-5903dcbae802",
			"arrows": "to",
			"label": "gconvert.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gconvert.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "42d48eee-3098-473b-b079-7f97cca0ea76"
				}
			],
			"libraries": []
		}
	]
}