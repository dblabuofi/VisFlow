var exampleSeven = {
	"nodes": [
		{
			"id": "9abbc867-38aa-488b-8167-904240017ea4",
			"x": -374.57026816771776,
			"y": -163.03300497356946,
			"label": "TAIR Plant Ontology (PO) search\n",
			"timestamp": 1477027495952,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "c9abcf74-a2aa-4f42-ac93-af27640a9a76",
					"resourceType": "HTTP",
					"organization": "The Arabidopsis Information Resource (TAIR)",
					"resourceName": "TAIR Plant Ontology (PO) search",
					"description": "Paste locus identifiers (such as At1g01030) into the textbox and press one of the submit buttons below. The identifiers have to be separated by commas. The PO annotations will return in detail all the PO annotations done to your set of genes.",
					"url": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"postURL": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"urlExample": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"method": "POST",
					"attributes": [
						{
							"label": "loci",
							"name": "loci",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "At1g01030,At1g01040",
							"attributeType": "input",
							"description": "locus identifiers",
							"from": "input"
						},
						{
							"label": "output_type",
							"name": "output_type",
							"type": "string",
							"value": "text",
							"required": true,
							"shown": false,
							"attributeType": "input",
							"description": "return type is txt file",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "Locus",
							"name": "Locus",
							"type": "string"
						},
						{
							"label": "Gene Model(s)",
							"name": "Gene Model(s)",
							"type": "string"
						},
						{
							"label": "PO term",
							"name": "PO term",
							"type": "string"
						},
						{
							"label": "PO ID",
							"name": "PO ID",
							"type": "string"
						},
						{
							"label": "cat",
							"name": "cat",
							"type": "string"
						},
						{
							"label": "code",
							"name": "code",
							"type": "string"
						},
						{
							"label": "Reference",
							"name": "Reference",
							"type": "string"
						},
						{
							"label": "Made by",
							"name": "Made by",
							"type": "string"
						},
						{
							"label": "update date",
							"name": "update date",
							"type": "string"
						},
						{
							"label": "last modified",
							"name": "last modified",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search>\t\t\t\t<Locus></Locus>\t\t\t\t<Gene&#x20;Model(s)></Gene&#x20;Model(s)>\t\t\t\t<PO&#x20;term></PO&#x20;term>\t\t\t\t<PO&#x20;ID></PO&#x20;ID>\t\t\t\t<cat></cat>\t\t\t\t<code></code>\t\t\t\t<Reference></Reference>\t\t\t\t<Made&#x20;by&#x20;date></Made&#x20;by&#x20;date>\t\t\t\t<update&#x20;date></update&#x20;date>\t\t\t\t<last&#x20;modified></last&#x20;modified>\t\t\t</TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search>",
					"jsUrlReturnFileSchema": {
						"text": "TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search",
						"a_attr": {
							"style": ""
						},
						"id": "j4_1",
						"children": [
							{
								"text": "Gene&#x20;Model(s)",
								"a_attr": {
									"style": ""
								},
								"id": "j4_2",
								"children": []
							},
							{
								"text": "update&#x20;date",
								"a_attr": {
									"style": ""
								},
								"id": "j4_3",
								"children": []
							},
							{
								"text": "code",
								"a_attr": {
									"style": ""
								},
								"id": "j4_4",
								"children": []
							},
							{
								"text": "PO&#x20;term",
								"a_attr": {
									"style": ""
								},
								"id": "j4_5",
								"children": []
							},
							{
								"text": "Reference",
								"a_attr": {
									"style": ""
								},
								"id": "j4_6",
								"children": []
							},
							{
								"text": "cat",
								"a_attr": {
									"style": ""
								},
								"id": "j4_7",
								"children": []
							},
							{
								"text": "Made&#x20;by&#x20;date",
								"a_attr": {
									"style": ""
								},
								"id": "j4_8",
								"children": []
							},
							{
								"text": "PO&#x20;ID",
								"a_attr": {
									"style": ""
								},
								"id": "j4_9",
								"children": []
							},
							{
								"text": "Locus",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j4_10",
								"children": []
							},
							{
								"text": "last&#x20;modified",
								"a_attr": {
									"style": ""
								},
								"id": "j4_11",
								"children": []
							}
						]
					},
					"fileName": "TAIR Plant Ontology (PO) search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "TAIR Plant Ontology (PO) search",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"Locus",
							"Gene Model(s)",
							"PO term",
							"PO ID",
							"cat",
							"code",
							"Reference",
							"Made by date",
							"last modified"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "c9abcf74-a2aa-4f42-ac93-af27640a9a76",
					"resourceType": "HTTP",
					"organization": "The Arabidopsis Information Resource (TAIR)",
					"resourceName": "TAIR Plant Ontology (PO) search",
					"description": "Paste locus identifiers (such as At1g01030) into the textbox and press one of the submit buttons below. The identifiers have to be separated by commas. The PO annotations will return in detail all the PO annotations done to your set of genes.",
					"url": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"postURL": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"urlExample": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"method": "POST",
					"attributes": [
						{
							"label": "loci",
							"name": "loci",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "At1g01030,At1g01040",
							"attributeType": "input",
							"description": "locus identifiers",
							"from": "input"
						},
						{
							"label": "output_type",
							"name": "output_type",
							"type": "string",
							"value": "text",
							"required": true,
							"shown": false,
							"attributeType": "input",
							"description": "return type is txt file",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "Locus",
							"name": "Locus",
							"type": "string"
						},
						{
							"label": "Gene Model(s)",
							"name": "Gene Model(s)",
							"type": "string"
						},
						{
							"label": "PO term",
							"name": "PO term",
							"type": "string"
						},
						{
							"label": "PO ID",
							"name": "PO ID",
							"type": "string"
						},
						{
							"label": "cat",
							"name": "cat",
							"type": "string"
						},
						{
							"label": "code",
							"name": "code",
							"type": "string"
						},
						{
							"label": "Reference",
							"name": "Reference",
							"type": "string"
						},
						{
							"label": "Made by",
							"name": "Made by",
							"type": "string"
						},
						{
							"label": "update date",
							"name": "update date",
							"type": "string"
						},
						{
							"label": "last modified",
							"name": "last modified",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search>\t\t\t\t<Locus></Locus>\t\t\t\t<Gene&#x20;Model(s)></Gene&#x20;Model(s)>\t\t\t\t<PO&#x20;term></PO&#x20;term>\t\t\t\t<PO&#x20;ID></PO&#x20;ID>\t\t\t\t<cat></cat>\t\t\t\t<code></code>\t\t\t\t<Reference></Reference>\t\t\t\t<Made&#x20;by&#x20;date></Made&#x20;by&#x20;date>\t\t\t\t<update&#x20;date></update&#x20;date>\t\t\t\t<last&#x20;modified></last&#x20;modified>\t\t\t</TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search>",
					"jsUrlReturnFileSchema": {
						"text": "TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search",
						"a_attr": {
							"style": ""
						},
						"id": "j4_1",
						"children": [
							{
								"text": "Gene&#x20;Model(s)",
								"a_attr": {
									"style": ""
								},
								"id": "j4_2",
								"children": []
							},
							{
								"text": "update&#x20;date",
								"a_attr": {
									"style": ""
								},
								"id": "j4_3",
								"children": []
							},
							{
								"text": "code",
								"a_attr": {
									"style": ""
								},
								"id": "j4_4",
								"children": []
							},
							{
								"text": "PO&#x20;term",
								"a_attr": {
									"style": ""
								},
								"id": "j4_5",
								"children": []
							},
							{
								"text": "Reference",
								"a_attr": {
									"style": ""
								},
								"id": "j4_6",
								"children": []
							},
							{
								"text": "cat",
								"a_attr": {
									"style": ""
								},
								"id": "j4_7",
								"children": []
							},
							{
								"text": "Made&#x20;by&#x20;date",
								"a_attr": {
									"style": ""
								},
								"id": "j4_8",
								"children": []
							},
							{
								"text": "PO&#x20;ID",
								"a_attr": {
									"style": ""
								},
								"id": "j4_9",
								"children": []
							},
							{
								"text": "Locus",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j4_10",
								"children": []
							},
							{
								"text": "last&#x20;modified",
								"a_attr": {
									"style": ""
								},
								"id": "j4_11",
								"children": []
							}
						]
					},
					"fileName": "TAIR Plant Ontology (PO) search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "TAIR Plant Ontology (PO) search",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"Locus",
							"Gene Model(s)",
							"PO term",
							"PO ID",
							"cat",
							"code",
							"Reference",
							"Made by date",
							"last modified"
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
			"id": "4532b6d1-ef75-491e-a949-8ddf23a4eb2d",
			"x": -481.0302827142329,
			"y": 225.35393644691354,
			"label": "",
			"timestamp": 1477028204981,
			"type": "printer",
			"image": "image/printer.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "onto.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c9abcf74-a2aa-4f42-ac93-af27640a9a76"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "9f41e850-cf1d-4c82-87d5-4d86d2154a03",
			"x": -469.6207577151606,
			"y": 44.3197495132048,
			"label": "",
			"timestamp": 1477165442239,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "c9abcf74-a2aa-4f42-ac93-af27640a9a76",
					"resourceType": "HTTP",
					"organization": "The Arabidopsis Information Resource (TAIR)",
					"resourceName": "TAIR Plant Ontology (PO) search",
					"description": "Paste locus identifiers (such as At1g01030) into the textbox and press one of the submit buttons below. The identifiers have to be separated by commas. The PO annotations will return in detail all the PO annotations done to your set of genes.",
					"url": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"postURL": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"urlExample": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"method": "POST",
					"attributes": [
						{
							"label": "loci",
							"name": "loci",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "At1g01030,At1g01040",
							"attributeType": "input",
							"description": "locus identifiers",
							"from": "input"
						},
						{
							"label": "output_type",
							"name": "output_type",
							"type": "string",
							"value": "text",
							"required": true,
							"shown": false,
							"attributeType": "input",
							"description": "return type is txt file",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "Locus",
							"name": "Locus",
							"type": "string"
						},
						{
							"label": "Gene Model(s)",
							"name": "Gene Model(s)",
							"type": "string"
						},
						{
							"label": "PO term",
							"name": "PO term",
							"type": "string"
						},
						{
							"label": "PO ID",
							"name": "PO ID",
							"type": "string"
						},
						{
							"label": "cat",
							"name": "cat",
							"type": "string"
						},
						{
							"label": "code",
							"name": "code",
							"type": "string"
						},
						{
							"label": "Reference",
							"name": "Reference",
							"type": "string"
						},
						{
							"label": "Made by",
							"name": "Made by",
							"type": "string"
						},
						{
							"label": "update date",
							"name": "update date",
							"type": "string"
						},
						{
							"label": "last modified",
							"name": "last modified",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search>\t\t\t\t<Locus></Locus>\t\t\t\t<Gene&#x20;Model(s)></Gene&#x20;Model(s)>\t\t\t\t<PO&#x20;term></PO&#x20;term>\t\t\t\t<PO&#x20;ID></PO&#x20;ID>\t\t\t\t<cat></cat>\t\t\t\t<code></code>\t\t\t\t<Reference></Reference>\t\t\t\t<Made&#x20;by&#x20;date></Made&#x20;by&#x20;date>\t\t\t\t<update&#x20;date></update&#x20;date>\t\t\t\t<last&#x20;modified></last&#x20;modified>\t\t\t</TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search>",
					"jsUrlReturnFileSchema": {
						"text": "TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search",
						"a_attr": {
							"style": ""
						},
						"id": "j4_1",
						"children": [
							{
								"text": "Gene&#x20;Model(s)",
								"a_attr": {
									"style": ""
								},
								"id": "j4_2",
								"children": []
							},
							{
								"text": "update&#x20;date",
								"a_attr": {
									"style": ""
								},
								"id": "j4_3",
								"children": []
							},
							{
								"text": "code",
								"a_attr": {
									"style": ""
								},
								"id": "j4_4",
								"children": []
							},
							{
								"text": "PO&#x20;term",
								"a_attr": {
									"style": ""
								},
								"id": "j4_5",
								"children": []
							},
							{
								"text": "Reference",
								"a_attr": {
									"style": ""
								},
								"id": "j4_6",
								"children": []
							},
							{
								"text": "cat",
								"a_attr": {
									"style": ""
								},
								"id": "j4_7",
								"children": []
							},
							{
								"text": "Made&#x20;by&#x20;date",
								"a_attr": {
									"style": ""
								},
								"id": "j4_8",
								"children": []
							},
							{
								"text": "PO&#x20;ID",
								"a_attr": {
									"style": ""
								},
								"id": "j4_9",
								"children": []
							},
							{
								"text": "Locus",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j4_10",
								"children": []
							},
							{
								"text": "last&#x20;modified",
								"a_attr": {
									"style": ""
								},
								"id": "j4_11",
								"children": []
							}
						]
					},
					"fileName": "TAIR Plant Ontology (PO) search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "TAIR Plant Ontology (PO) search",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"Locus",
							"Gene Model(s)",
							"PO term",
							"PO ID",
							"cat",
							"code",
							"Reference",
							"Made by date",
							"last modified"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "noto.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c9abcf74-a2aa-4f42-ac93-af27640a9a76"
				}
			],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "c9abcf74-a2aa-4f42-ac93-af27640a9a76",
					"act": "Resource",
					"inputFileNames": [],
					"outputFileNames": [
						"noto.csv"
					],
					"outputFileTypes": [
						"CSV"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetResource": {
						"id": "c9abcf74-a2aa-4f42-ac93-af27640a9a76",
						"resourceType": "HTTP",
						"organization": "The Arabidopsis Information Resource (TAIR)",
						"resourceName": "TAIR Plant Ontology (PO) search",
						"description": "Paste locus identifiers (such as At1g01030) into the textbox and press one of the submit buttons below. The identifiers have to be separated by commas. The PO annotations will return in detail all the PO annotations done to your set of genes.",
						"url": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
						"postURL": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
						"urlExample": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
						"method": "POST",
						"attributes": [
							{
								"label": "loci",
								"name": "loci",
								"type": "string",
								"value": "At1g01030,At1g01040",
								"required": true,
								"shown": true,
								"example": "At1g01030,At1g01040",
								"attributeType": "input",
								"description": "locus identifiers",
								"from": "input"
							},
							{
								"label": "output_type",
								"name": "output_type",
								"type": "string",
								"value": "text",
								"required": true,
								"shown": false,
								"attributeType": "input",
								"description": "return type is txt file",
								"from": "input"
							}
						],
						"outAttributes": [
							{
								"label": "Locus",
								"name": "Locus",
								"type": "string"
							},
							{
								"label": "Gene Model(s)",
								"name": "Gene Model(s)",
								"type": "string"
							},
							{
								"label": "PO term",
								"name": "PO term",
								"type": "string"
							},
							{
								"label": "PO ID",
								"name": "PO ID",
								"type": "string"
							},
							{
								"label": "cat",
								"name": "cat",
								"type": "string"
							},
							{
								"label": "code",
								"name": "code",
								"type": "string"
							},
							{
								"label": "Reference",
								"name": "Reference",
								"type": "string"
							},
							{
								"label": "Made by",
								"name": "Made by",
								"type": "string"
							},
							{
								"label": "update date",
								"name": "update date",
								"type": "string"
							},
							{
								"label": "last modified",
								"name": "last modified",
								"type": "string"
							}
						],
						"methodReturnFileType": "TEXT",
						"urlReturnFileType": "TEXT",
						"urlReturnFileSchema": "<TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search>\t\t\t\t<Locus></Locus>\t\t\t\t<Gene&#x20;Model(s)></Gene&#x20;Model(s)>\t\t\t\t<PO&#x20;term></PO&#x20;term>\t\t\t\t<PO&#x20;ID></PO&#x20;ID>\t\t\t\t<cat></cat>\t\t\t\t<code></code>\t\t\t\t<Reference></Reference>\t\t\t\t<Made&#x20;by&#x20;date></Made&#x20;by&#x20;date>\t\t\t\t<update&#x20;date></update&#x20;date>\t\t\t\t<last&#x20;modified></last&#x20;modified>\t\t\t</TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search>",
						"jsUrlReturnFileSchema": {
							"text": "TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search",
							"a_attr": {
								"style": ""
							},
							"id": "j4_1",
							"children": [
								{
									"text": "Gene&#x20;Model(s)",
									"a_attr": {
										"style": ""
									},
									"id": "j4_2",
									"children": []
								},
								{
									"text": "update&#x20;date",
									"a_attr": {
										"style": ""
									},
									"id": "j4_3",
									"children": []
								},
								{
									"text": "code",
									"a_attr": {
										"style": ""
									},
									"id": "j4_4",
									"children": []
								},
								{
									"text": "PO&#x20;term",
									"a_attr": {
										"style": ""
									},
									"id": "j4_5",
									"children": []
								},
								{
									"text": "Reference",
									"a_attr": {
										"style": ""
									},
									"id": "j4_6",
									"children": []
								},
								{
									"text": "cat",
									"a_attr": {
										"style": ""
									},
									"id": "j4_7",
									"children": []
								},
								{
									"text": "Made&#x20;by&#x20;date",
									"a_attr": {
										"style": ""
									},
									"id": "j4_8",
									"children": []
								},
								{
									"text": "PO&#x20;ID",
									"a_attr": {
										"style": ""
									},
									"id": "j4_9",
									"children": []
								},
								{
									"text": "Locus",
									"a_attr": {
										"style": "background-color: rgb(205, 165, 10) !important"
									},
									"id": "j4_10",
									"children": []
								},
								{
									"text": "last&#x20;modified",
									"a_attr": {
										"style": ""
									},
									"id": "j4_11",
									"children": []
								}
							]
						},
						"fileName": "TAIR Plant Ontology (PO) search.xml",
						"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
						"urlReturnFileName": "TAIR Plant Ontology (PO) search",
						"wrapper": {
							"wrapperName": "textTableWrapper",
							"separator": "\\t",
							"headers": [
								"Locus",
								"Gene Model(s)",
								"PO term",
								"PO ID",
								"cat",
								"code",
								"Reference",
								"Made by date",
								"last modified"
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
			"from": "9abbc867-38aa-488b-8167-904240017ea4",
			"to": "9f41e850-cf1d-4c82-87d5-4d86d2154a03",
			"id": "384a5b28-bb2c-4278-997f-35f19a60da46",
			"arrows": "to",
			"label": "TAIR Plant Ontology (PO) search\n",
			"resources": [
				{
					"id": "c9abcf74-a2aa-4f42-ac93-af27640a9a76",
					"resourceType": "HTTP",
					"organization": "The Arabidopsis Information Resource (TAIR)",
					"resourceName": "TAIR Plant Ontology (PO) search",
					"description": "Paste locus identifiers (such as At1g01030) into the textbox and press one of the submit buttons below. The identifiers have to be separated by commas. The PO annotations will return in detail all the PO annotations done to your set of genes.",
					"url": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"postURL": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"urlExample": "http://www.arabidopsis.org/cgi-bin/bulk/po/getpo.pl",
					"method": "POST",
					"attributes": [
						{
							"label": "loci",
							"name": "loci",
							"type": "string",
							"value": "",
							"required": true,
							"shown": true,
							"example": "At1g01030,At1g01040",
							"attributeType": "input",
							"description": "locus identifiers",
							"from": "input"
						},
						{
							"label": "output_type",
							"name": "output_type",
							"type": "string",
							"value": "text",
							"required": true,
							"shown": false,
							"attributeType": "input",
							"description": "return type is txt file",
							"from": "input"
						}
					],
					"outAttributes": [
						{
							"label": "Locus",
							"name": "Locus",
							"type": "string"
						},
						{
							"label": "Gene Model(s)",
							"name": "Gene Model(s)",
							"type": "string"
						},
						{
							"label": "PO term",
							"name": "PO term",
							"type": "string"
						},
						{
							"label": "PO ID",
							"name": "PO ID",
							"type": "string"
						},
						{
							"label": "cat",
							"name": "cat",
							"type": "string"
						},
						{
							"label": "code",
							"name": "code",
							"type": "string"
						},
						{
							"label": "Reference",
							"name": "Reference",
							"type": "string"
						},
						{
							"label": "Made by",
							"name": "Made by",
							"type": "string"
						},
						{
							"label": "update date",
							"name": "update date",
							"type": "string"
						},
						{
							"label": "last modified",
							"name": "last modified",
							"type": "string"
						}
					],
					"methodReturnFileType": "TEXT",
					"urlReturnFileType": "TEXT",
					"urlReturnFileSchema": "<TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search>\t\t\t\t<Locus></Locus>\t\t\t\t<Gene&#x20;Model(s)></Gene&#x20;Model(s)>\t\t\t\t<PO&#x20;term></PO&#x20;term>\t\t\t\t<PO&#x20;ID></PO&#x20;ID>\t\t\t\t<cat></cat>\t\t\t\t<code></code>\t\t\t\t<Reference></Reference>\t\t\t\t<Made&#x20;by&#x20;date></Made&#x20;by&#x20;date>\t\t\t\t<update&#x20;date></update&#x20;date>\t\t\t\t<last&#x20;modified></last&#x20;modified>\t\t\t</TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search>",
					"jsUrlReturnFileSchema": {
						"text": "TAIR&#x20;Plant&#x20;Ontology&#x20;(PO)&#x20;search",
						"a_attr": {
							"style": ""
						},
						"id": "j4_1",
						"children": [
							{
								"text": "Gene&#x20;Model(s)",
								"a_attr": {
									"style": ""
								},
								"id": "j4_2",
								"children": []
							},
							{
								"text": "update&#x20;date",
								"a_attr": {
									"style": ""
								},
								"id": "j4_3",
								"children": []
							},
							{
								"text": "code",
								"a_attr": {
									"style": ""
								},
								"id": "j4_4",
								"children": []
							},
							{
								"text": "PO&#x20;term",
								"a_attr": {
									"style": ""
								},
								"id": "j4_5",
								"children": []
							},
							{
								"text": "Reference",
								"a_attr": {
									"style": ""
								},
								"id": "j4_6",
								"children": []
							},
							{
								"text": "cat",
								"a_attr": {
									"style": ""
								},
								"id": "j4_7",
								"children": []
							},
							{
								"text": "Made&#x20;by&#x20;date",
								"a_attr": {
									"style": ""
								},
								"id": "j4_8",
								"children": []
							},
							{
								"text": "PO&#x20;ID",
								"a_attr": {
									"style": ""
								},
								"id": "j4_9",
								"children": []
							},
							{
								"text": "Locus",
								"a_attr": {
									"style": "background-color: rgb(205, 165, 10) !important"
								},
								"id": "j4_10",
								"children": []
							},
							{
								"text": "last&#x20;modified",
								"a_attr": {
									"style": ""
								},
								"id": "j4_11",
								"children": []
							}
						]
					},
					"fileName": "TAIR Plant Ontology (PO) search.xml",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "TAIR Plant Ontology (PO) search",
					"wrapper": {
						"wrapperName": "textTableWrapper",
						"separator": "\\t",
						"headers": [
							"Locus",
							"Gene Model(s)",
							"PO term",
							"PO ID",
							"cat",
							"code",
							"Reference",
							"Made by date",
							"last modified"
						],
						"resultContainHeaderInfo": "false"
					}
				}
			],
			"libraries": []
		},
		{
			"from": "9f41e850-cf1d-4c82-87d5-4d86d2154a03",
			"to": "4532b6d1-ef75-491e-a949-8ddf23a4eb2d",
			"id": "9054f6b5-0133-4a0b-b464-92c9312f8f82",
			"arrows": "to",
			"label": "noto.csv\n",
			"resources": [
				{
					"urlReturnFileName": "noto.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "c9abcf74-a2aa-4f42-ac93-af27640a9a76"
				}
			],
			"libraries": []
		}
	]
}