var exampleNine ={
	"nodes": [
		{
			"id": "d7b104ba-e0ec-4558-b6d7-0c904326b145",
			"x": -130.921875,
			"y": -21.546875,
			"label": "gOrth\n",
			"timestamp": 1474235172051,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "76b00934-4f17-4997-9fb0-582ebf8f2aea",
					"resourceType": "HTTP",
					"organization": "g:Profiler",
					"resourceName": "gOrth",
					"description": "g:Orth is a tool for mapping orthologous genes in related organisms. Ortholog genes are similar in sequence and are likely conserved through evolution since a common ancestor. Orhologous genes may also carry out similar function and are therefore relevant in functional analysis.",
					"url": "http://biit.cs.ut.ee/gprofiler/gorth.cgi",
					"urlExample": "http://biit.cs.ut.ee/gprofiler/gorth.cgi?organism=scerevisiae&target=hsapiens&query=ABF1+ACA1",
					"method": "GET",
					"attributes": [
						{
							"label": "Organism",
							"name": "organism",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Saccharomyces cerevisiae",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Saccharomyces cerevisiae",
									"value": "scerevisiae"
								},
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
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
							"label": "target organism",
							"name": "target",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Homo sapiens",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
								},
								{
									"label": "Mus musculus",
									"value": "mmusculus"
								},
								{
									"label": "Rattus norvegicus",
									"value": "rnorvegicus"
								}
							],
							"description": "For every gene, protein or probe ID in input, g:Orth seeks for corresponding orthologs in given target organism.",
							"from": "input"
						},
						{
							"label": "Query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ABF1+ACA1+ACE2+ADA2+ADR1+AFT2",
							"attributeType": "input",
							"description": "It contains one or more genes (proteins, transcripts, microarray probeset IDs, etc) or a selected organism.",
							"from": "input"
						},
						{
							"label": "Output type",
							"name": "output",
							"type": "string",
							"value": "mini",
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
							"label": "Initial ENSG",
							"name": "Initial ENSG",
							"type": "string"
						},
						{
							"label": "O#",
							"name": "O#",
							"type": "string"
						},
						{
							"label": "Ortholog ENSG",
							"name": "Ortholog ENSG",
							"type": "string"
						},
						{
							"label": "Ortholog name",
							"name": "Ortholog name",
							"type": "string"
						},
						{
							"label": "Ortholog description",
							"name": "Ortholog description",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<gProfiler&#x20;gOrth>\r\n\t\t\t\t<G#></G#>\r\n\t\t\t\t<Initial&#x20;alias></Initial&#x20;alias>\r\n\t\t\t\t<Initial&#x20;ENSG></Initial&#x20;ENSG>\r\n\t\t\t\t<O#></O#>\r\n\t\t\t\t<Ortholog&#x20;ENSG></Ortholog&#x20;ENSG>\r\n\t\t\t\t<Ortholog&#x20;name></Ortholog&#x20;name>\r\n\t\t\t\t<Ortholog&#x20;description></Ortholog&#x20;description>\r\n\t\t\t</gProfiler&#x20;gOrth>",
					"jsUrlReturnFileSchema": {
						"text": "gProfiler&#x20;gOrth",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "Initial&#x20;ENSG",
								"a_attr": {
									"style": ""
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "Ortholog&#x20;description",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "O#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							},
							{
								"text": "Ortholog&#x20;name",
								"a_attr": {
									"style": ""
								},
								"id": "j6_5",
								"children": []
							},
							{
								"text": "Ortholog&#x20;ENSG",
								"a_attr": {
									"style": ""
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
					"fileName": "gProfiler gOrth.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "gOrth",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"G#",
							"Initial alias",
							"Initial ENSG",
							"O#",
							"Ortholog ENSG",
							"Ortholog name",
							"Ortholog description"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "76b00934-4f17-4997-9fb0-582ebf8f2aea",
					"resourceType": "HTTP",
					"organization": "g:Profiler",
					"resourceName": "gOrth",
					"description": "g:Orth is a tool for mapping orthologous genes in related organisms. Ortholog genes are similar in sequence and are likely conserved through evolution since a common ancestor. Orhologous genes may also carry out similar function and are therefore relevant in functional analysis.",
					"url": "http://biit.cs.ut.ee/gprofiler/gorth.cgi",
					"urlExample": "http://biit.cs.ut.ee/gprofiler/gorth.cgi?organism=scerevisiae&target=hsapiens&query=ABF1+ACA1",
					"method": "GET",
					"attributes": [
						{
							"label": "Organism",
							"name": "organism",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Saccharomyces cerevisiae",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Saccharomyces cerevisiae",
									"value": "scerevisiae"
								},
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
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
							"label": "target organism",
							"name": "target",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Homo sapiens",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
								},
								{
									"label": "Mus musculus",
									"value": "mmusculus"
								},
								{
									"label": "Rattus norvegicus",
									"value": "rnorvegicus"
								}
							],
							"description": "For every gene, protein or probe ID in input, g:Orth seeks for corresponding orthologs in given target organism.",
							"from": "input"
						},
						{
							"label": "Query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ABF1+ACA1+ACE2+ADA2+ADR1+AFT2",
							"attributeType": "input",
							"description": "It contains one or more genes (proteins, transcripts, microarray probeset IDs, etc) or a selected organism.",
							"from": "input"
						},
						{
							"label": "Output type",
							"name": "output",
							"type": "string",
							"value": "mini",
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
							"label": "Initial ENSG",
							"name": "Initial ENSG",
							"type": "string"
						},
						{
							"label": "O#",
							"name": "O#",
							"type": "string"
						},
						{
							"label": "Ortholog ENSG",
							"name": "Ortholog ENSG",
							"type": "string"
						},
						{
							"label": "Ortholog name",
							"name": "Ortholog name",
							"type": "string"
						},
						{
							"label": "Ortholog description",
							"name": "Ortholog description",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<gProfiler&#x20;gOrth>\r\n\t\t\t\t<G#></G#>\r\n\t\t\t\t<Initial&#x20;alias></Initial&#x20;alias>\r\n\t\t\t\t<Initial&#x20;ENSG></Initial&#x20;ENSG>\r\n\t\t\t\t<O#></O#>\r\n\t\t\t\t<Ortholog&#x20;ENSG></Ortholog&#x20;ENSG>\r\n\t\t\t\t<Ortholog&#x20;name></Ortholog&#x20;name>\r\n\t\t\t\t<Ortholog&#x20;description></Ortholog&#x20;description>\r\n\t\t\t</gProfiler&#x20;gOrth>",
					"jsUrlReturnFileSchema": {
						"text": "gProfiler&#x20;gOrth",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "Initial&#x20;ENSG",
								"a_attr": {
									"style": ""
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "Ortholog&#x20;description",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "O#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							},
							{
								"text": "Ortholog&#x20;name",
								"a_attr": {
									"style": ""
								},
								"id": "j6_5",
								"children": []
							},
							{
								"text": "Ortholog&#x20;ENSG",
								"a_attr": {
									"style": ""
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
					"fileName": "gProfiler gOrth.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "gOrth",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"G#",
							"Initial alias",
							"Initial ENSG",
							"O#",
							"Ortholog ENSG",
							"Ortholog name",
							"Ortholog description"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "802b4b2a-7984-4930-a8dc-d3d7544dc13d",
			"x": -274.44774921575214,
			"y": 239.7945428110337,
			"label": "",
			"timestamp": 1477179560754,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "gorth.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "76b00934-4f17-4997-9fb0-582ebf8f2aea"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "273805b4-6068-483b-bca9-27617c374bfe",
			"x": -234.5743200250534,
			"y": 103.12887973839783,
			"label": "",
			"timestamp": 1477179749117,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "76b00934-4f17-4997-9fb0-582ebf8f2aea",
					"resourceType": "HTTP",
					"organization": "g:Profiler",
					"resourceName": "gOrth",
					"description": "g:Orth is a tool for mapping orthologous genes in related organisms. Ortholog genes are similar in sequence and are likely conserved through evolution since a common ancestor. Orhologous genes may also carry out similar function and are therefore relevant in functional analysis.",
					"url": "http://biit.cs.ut.ee/gprofiler/gorth.cgi",
					"urlExample": "http://biit.cs.ut.ee/gprofiler/gorth.cgi?organism=scerevisiae&target=hsapiens&query=ABF1+ACA1",
					"method": "GET",
					"attributes": [
						{
							"label": "Organism",
							"name": "organism",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Saccharomyces cerevisiae",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Saccharomyces cerevisiae",
									"value": "scerevisiae"
								},
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
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
							"label": "target organism",
							"name": "target",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Homo sapiens",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
								},
								{
									"label": "Mus musculus",
									"value": "mmusculus"
								},
								{
									"label": "Rattus norvegicus",
									"value": "rnorvegicus"
								}
							],
							"description": "For every gene, protein or probe ID in input, g:Orth seeks for corresponding orthologs in given target organism.",
							"from": "input"
						},
						{
							"label": "Query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ABF1+ACA1+ACE2+ADA2+ADR1+AFT2",
							"attributeType": "input",
							"description": "It contains one or more genes (proteins, transcripts, microarray probeset IDs, etc) or a selected organism.",
							"from": "input"
						},
						{
							"label": "Output type",
							"name": "output",
							"type": "string",
							"value": "mini",
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
							"label": "Initial ENSG",
							"name": "Initial ENSG",
							"type": "string"
						},
						{
							"label": "O#",
							"name": "O#",
							"type": "string"
						},
						{
							"label": "Ortholog ENSG",
							"name": "Ortholog ENSG",
							"type": "string"
						},
						{
							"label": "Ortholog name",
							"name": "Ortholog name",
							"type": "string"
						},
						{
							"label": "Ortholog description",
							"name": "Ortholog description",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<gProfiler&#x20;gOrth>\r\n\t\t\t\t<G#></G#>\r\n\t\t\t\t<Initial&#x20;alias></Initial&#x20;alias>\r\n\t\t\t\t<Initial&#x20;ENSG></Initial&#x20;ENSG>\r\n\t\t\t\t<O#></O#>\r\n\t\t\t\t<Ortholog&#x20;ENSG></Ortholog&#x20;ENSG>\r\n\t\t\t\t<Ortholog&#x20;name></Ortholog&#x20;name>\r\n\t\t\t\t<Ortholog&#x20;description></Ortholog&#x20;description>\r\n\t\t\t</gProfiler&#x20;gOrth>",
					"jsUrlReturnFileSchema": {
						"text": "gProfiler&#x20;gOrth",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "Initial&#x20;ENSG",
								"a_attr": {
									"style": ""
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "Ortholog&#x20;description",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "O#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							},
							{
								"text": "Ortholog&#x20;name",
								"a_attr": {
									"style": ""
								},
								"id": "j6_5",
								"children": []
							},
							{
								"text": "Ortholog&#x20;ENSG",
								"a_attr": {
									"style": ""
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
					"fileName": "gProfiler gOrth.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "gOrth",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"G#",
							"Initial alias",
							"Initial ENSG",
							"O#",
							"Ortholog ENSG",
							"Ortholog name",
							"Ortholog description"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "gorth.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "76b00934-4f17-4997-9fb0-582ebf8f2aea"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "76b00934-4f17-4997-9fb0-582ebf8f2aea",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"gorth.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "76b00934-4f17-4997-9fb0-582ebf8f2aea",
						"resourceType": "HTTP",
						"organization": "g:Profiler",
						"resourceName": "gOrth",
						"description": "g:Orth is a tool for mapping orthologous genes in related organisms. Ortholog genes are similar in sequence and are likely conserved through evolution since a common ancestor. Orhologous genes may also carry out similar function and are therefore relevant in functional analysis.",
						"url": "http://biit.cs.ut.ee/gprofiler/gorth.cgi",
						"urlExample": "http://biit.cs.ut.ee/gprofiler/gorth.cgi?organism=scerevisiae&target=hsapiens&query=ABF1+ACA1",
						"method": "GET",
						"attributes": [
							{
								"label": "Organism",
								"name": "organism",
								"type": "string",
								"value": "scerevisiae",
								"required": true,
								"shown": true,
								"example": "Saccharomyces cerevisiae",
								"attributeType": "selection",
								"selectionpair": [
									{
										"label": "Saccharomyces cerevisiae",
										"value": "scerevisiae"
									},
									{
										"label": "Homo sapiens",
										"value": "hsapiens"
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
								"label": "target organism",
								"name": "target",
								"type": "string",
								"value": "hsapiens",
								"required": true,
								"shown": true,
								"example": "Homo sapiens",
								"attributeType": "selection",
								"selectionpair": [
									{
										"label": "Homo sapiens",
										"value": "hsapiens"
									},
									{
										"label": "Mus musculus",
										"value": "mmusculus"
									},
									{
										"label": "Rattus norvegicus",
										"value": "rnorvegicus"
									}
								],
								"description": "For every gene, protein or probe ID in input, g:Orth seeks for corresponding orthologs in given target organism.",
								"from": "input"
							},
							{
								"label": "Query",
								"name": "query",
								"type": "string",
								"value": "ABF1+ACA1+ACE2+ADA2+ADR1+AFT2",
								"required": true,
								"shown": true,
								"example": "ABF1+ACA1+ACE2+ADA2+ADR1+AFT2",
								"attributeType": "input",
								"description": "It contains one or more genes (proteins, transcripts, microarray probeset IDs, etc) or a selected organism.",
								"from": "input"
							},
							{
								"label": "Output type",
								"name": "output",
								"type": "string",
								"value": "mini",
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
								"label": "Initial ENSG",
								"name": "Initial ENSG",
								"type": "string"
							},
							{
								"label": "O#",
								"name": "O#",
								"type": "string"
							},
							{
								"label": "Ortholog ENSG",
								"name": "Ortholog ENSG",
								"type": "string"
							},
							{
								"label": "Ortholog name",
								"name": "Ortholog name",
								"type": "string"
							},
							{
								"label": "Ortholog description",
								"name": "Ortholog description",
								"type": "string"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "TEXT",
						"urlReturnFileSchema": "<gProfiler&#x20;gOrth>\r\n\t\t\t\t<G#></G#>\r\n\t\t\t\t<Initial&#x20;alias></Initial&#x20;alias>\r\n\t\t\t\t<Initial&#x20;ENSG></Initial&#x20;ENSG>\r\n\t\t\t\t<O#></O#>\r\n\t\t\t\t<Ortholog&#x20;ENSG></Ortholog&#x20;ENSG>\r\n\t\t\t\t<Ortholog&#x20;name></Ortholog&#x20;name>\r\n\t\t\t\t<Ortholog&#x20;description></Ortholog&#x20;description>\r\n\t\t\t</gProfiler&#x20;gOrth>",
						"jsUrlReturnFileSchema": {
							"text": "gProfiler&#x20;gOrth",
							"a_attr": {
								"style": ""
							},
							"id": "j6_1",
							"children": [
								{
									"text": "Initial&#x20;ENSG",
									"a_attr": {
										"style": ""
									},
									"id": "j6_2",
									"children": []
								},
								{
									"text": "Ortholog&#x20;description",
									"a_attr": {
										"style": ""
									},
									"id": "j6_3",
									"children": []
								},
								{
									"text": "O#",
									"a_attr": {
										"style": ""
									},
									"id": "j6_4",
									"children": []
								},
								{
									"text": "Ortholog&#x20;name",
									"a_attr": {
										"style": ""
									},
									"id": "j6_5",
									"children": []
								},
								{
									"text": "Ortholog&#x20;ENSG",
									"a_attr": {
										"style": ""
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
						"fileName": "gProfiler gOrth.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "gOrth",
						"wrapper": {
							"wrapperName": "textTableWrapper",
							"separator": "\\t",
							"headers": [
								"G#",
								"Initial alias",
								"Initial ENSG",
								"O#",
								"Ortholog ENSG",
								"Ortholog name",
								"Ortholog description"
							],
							"resultContainHeaderInfo": "false"
						}
					}
				}
			]
		}
	],
	"edges": [
		{
			"from": "d7b104ba-e0ec-4558-b6d7-0c904326b145",
			"to": "273805b4-6068-483b-bca9-27617c374bfe",
			"id": "55477536-1268-4023-8ae0-2ae452530d80",
			"arrows": "to",
			"label": "gOrth\n",
			"resources": [
				{
					"id": "76b00934-4f17-4997-9fb0-582ebf8f2aea",
					"resourceType": "HTTP",
					"organization": "g:Profiler",
					"resourceName": "gOrth",
					"description": "g:Orth is a tool for mapping orthologous genes in related organisms. Ortholog genes are similar in sequence and are likely conserved through evolution since a common ancestor. Orhologous genes may also carry out similar function and are therefore relevant in functional analysis.",
					"url": "http://biit.cs.ut.ee/gprofiler/gorth.cgi",
					"urlExample": "http://biit.cs.ut.ee/gprofiler/gorth.cgi?organism=scerevisiae&target=hsapiens&query=ABF1+ACA1",
					"method": "GET",
					"attributes": [
						{
							"label": "Organism",
							"name": "organism",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Saccharomyces cerevisiae",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Saccharomyces cerevisiae",
									"value": "scerevisiae"
								},
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
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
							"label": "target organism",
							"name": "target",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "Homo sapiens",
							"attributeType": "selection",
							"selectionpair": [
								{
									"label": "Homo sapiens",
									"value": "hsapiens"
								},
								{
									"label": "Mus musculus",
									"value": "mmusculus"
								},
								{
									"label": "Rattus norvegicus",
									"value": "rnorvegicus"
								}
							],
							"description": "For every gene, protein or probe ID in input, g:Orth seeks for corresponding orthologs in given target organism.",
							"from": "input"
						},
						{
							"label": "Query",
							"name": "query",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "ABF1+ACA1+ACE2+ADA2+ADR1+AFT2",
							"attributeType": "input",
							"description": "It contains one or more genes (proteins, transcripts, microarray probeset IDs, etc) or a selected organism.",
							"from": "input"
						},
						{
							"label": "Output type",
							"name": "output",
							"type": "string",
							"value": "mini",
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
							"label": "Initial ENSG",
							"name": "Initial ENSG",
							"type": "string"
						},
						{
							"label": "O#",
							"name": "O#",
							"type": "string"
						},
						{
							"label": "Ortholog ENSG",
							"name": "Ortholog ENSG",
							"type": "string"
						},
						{
							"label": "Ortholog name",
							"name": "Ortholog name",
							"type": "string"
						},
						{
							"label": "Ortholog description",
							"name": "Ortholog description",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<gProfiler&#x20;gOrth>\r\n\t\t\t\t<G#></G#>\r\n\t\t\t\t<Initial&#x20;alias></Initial&#x20;alias>\r\n\t\t\t\t<Initial&#x20;ENSG></Initial&#x20;ENSG>\r\n\t\t\t\t<O#></O#>\r\n\t\t\t\t<Ortholog&#x20;ENSG></Ortholog&#x20;ENSG>\r\n\t\t\t\t<Ortholog&#x20;name></Ortholog&#x20;name>\r\n\t\t\t\t<Ortholog&#x20;description></Ortholog&#x20;description>\r\n\t\t\t</gProfiler&#x20;gOrth>",
					"jsUrlReturnFileSchema": {
						"text": "gProfiler&#x20;gOrth",
						"a_attr": {
							"style": ""
						},
						"id": "j6_1",
						"children": [
							{
								"text": "Initial&#x20;ENSG",
								"a_attr": {
									"style": ""
								},
								"id": "j6_2",
								"children": []
							},
							{
								"text": "Ortholog&#x20;description",
								"a_attr": {
									"style": ""
								},
								"id": "j6_3",
								"children": []
							},
							{
								"text": "O#",
								"a_attr": {
									"style": ""
								},
								"id": "j6_4",
								"children": []
							},
							{
								"text": "Ortholog&#x20;name",
								"a_attr": {
									"style": ""
								},
								"id": "j6_5",
								"children": []
							},
							{
								"text": "Ortholog&#x20;ENSG",
								"a_attr": {
									"style": ""
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
					"fileName": "gProfiler gOrth.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "gOrth",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"G#",
							"Initial alias",
							"Initial ENSG",
							"O#",
							"Ortholog ENSG",
							"Ortholog name",
							"Ortholog description"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "273805b4-6068-483b-bca9-27617c374bfe",
			"to": "802b4b2a-7984-4930-a8dc-d3d7544dc13d",
			"id": "b9806ba6-65b5-4a71-b934-aef09b6dbeae",
			"arrows": "to",
			"label": "gorth.csv\n",
			"resources": [
				{
					"urlReturnFileName": "gorth.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "76b00934-4f17-4997-9fb0-582ebf8f2aea"
				}
			],
			"libraries": []
		}
	]
}