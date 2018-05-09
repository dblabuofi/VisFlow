var exampleEightheen = {
	"nodes": [
		{
			"id": "bb46e16e-48e8-4f3c-909e-5921cb438e72",
			"x": -71.5625,
			"y": -104.796875,
			"label": "upstream1000.fa\n",
			"timestamp": 1475808021803,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "1aebfe5e-6853-4b91-b739-ff69b22c0a48",
					"resourceType": "fa",
					"organization": "UI database team",
					"resourceName": "upstream1000.fa",
					"description": "upstream1000",
					"url": "",
					"methodReturnFileType": "fa",
					"urlReturnFileType": "fa",
					"urlReturnFileSchema": "<upstream1000>\r\n\t\t\t</upstream1000>",
					"jsUrlReturnFileSchema": {
						"text": "upstream1000",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j8_1",
						"children": []
					},
					"fileName": "upstream1000.fa",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "upstream1000.fa"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "1aebfe5e-6853-4b91-b739-ff69b22c0a48",
					"resourceType": "fa",
					"organization": "UI database team",
					"resourceName": "upstream1000.fa",
					"description": "upstream1000",
					"url": "",
					"methodReturnFileType": "fa",
					"urlReturnFileType": "fa",
					"urlReturnFileSchema": "<upstream1000>\r\n\t\t\t</upstream1000>",
					"jsUrlReturnFileSchema": {
						"text": "upstream1000",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j8_1",
						"children": []
					},
					"fileName": "upstream1000.fa",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "upstream1000.fa"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "5e00c5af-63e6-49ad-9346-0a975b528882",
			"x": -158.9026464578615,
			"y": 100.20420625020716,
			"label": "",
			"timestamp": 1477287154956,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "1aebfe5e-6853-4b91-b739-ff69b22c0a48",
					"resourceType": "fa",
					"organization": "UI database team",
					"resourceName": "upstream1000.fa",
					"description": "upstream1000",
					"url": "",
					"methodReturnFileType": "fa",
					"urlReturnFileType": "fa",
					"urlReturnFileSchema": "<upstream1000>\r\n\t\t\t</upstream1000>",
					"jsUrlReturnFileSchema": {
						"text": "upstream1000",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j8_1",
						"children": []
					},
					"fileName": "upstream1000.fa",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "upstream1000.fa"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "upstream1000.fa.sa",
					"urlReturnFileType": "SA",
					"resourceType": "SA",
					"id": "772e1c3c-aac5-486e-96bc-785c5b3bd801"
				},
				{
					"urlReturnFileName": "upstream1000.fa.amb",
					"urlReturnFileType": "AMB",
					"resourceType": "AMB",
					"id": "772e1c3c-aac5-486e-96bc-785c5b3bd801"
				},
				{
					"urlReturnFileName": "upstream1000.fa.ann",
					"urlReturnFileType": "ANN",
					"resourceType": "ANN",
					"id": "772e1c3c-aac5-486e-96bc-785c5b3bd801"
				},
				{
					"urlReturnFileName": "upstream1000.fa.pac",
					"urlReturnFileType": "PAC",
					"resourceType": "PAC",
					"id": "772e1c3c-aac5-486e-96bc-785c5b3bd801"
				},
				{
					"urlReturnFileName": "upstream1000.fa.bwt",
					"urlReturnFileType": "BWT",
					"resourceType": "BWT",
					"id": "772e1c3c-aac5-486e-96bc-785c5b3bd801"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
					"id": "6085465b-9188-448d-af95-75091fb88fb6",
					"libraryName": "Burrows-Wheeler Aligner (BWA)",
					"libraryType": "executable",
					"organization": "Wellcome Trust Sanger Institute",
					"location": "C:\\cygwin64\\home\\jupiter\\bwa\\",
					"alias": "bwa",
					"description": "BWA is a software package for mapping low-divergent sequences against a large reference genome, such as the human genome. It consists of three algorithms: BWA-backtrack, BWA-SW and BWA-MEM. The first algorithm is designed for Illumina sequence reads up to 100bp, while the rest two for longer sequences ranged from 70bp to 1Mbp. BWA-MEM and BWA-SW share similar features such as long-read support and split alignment, but BWA-MEM, which is the latest, is generally recommended for high-quality queries as it is faster and more accurate. BWA-MEM also has better performance than BWA-backtrack for 70-100bp Illumina reads.",
					"function": [
						{
							"functionName": "bwa.exe",
							"description": "Burrows-Wheeler Aligner function"
						}
					],
					"type": "library"
				}
			],
			"actions": [
				{
					"id": "772e1c3c-aac5-486e-96bc-785c5b3bd801",
					"act": "Function",
					"inputFileNames": [
						"upstream1000.fa"
					],
					"outputFileNames": [
						"upstream1000.fa.sa",
						"upstream1000.fa.amb",
						"upstream1000.fa.ann",
						"upstream1000.fa.pac",
						"upstream1000.fa.bwt"
					],
					"outputFileTypes": [
						"SA",
						"AMB",
						"ANN",
						"PAC",
						"BWT"
					],
					"resultMethod": "Append",
					"webservices": [],
					"targetFunction": {
						"libraryName": "Burrows-Wheeler Aligner",
						"libraryId": "6085465b-9188-448d-af95-75091fb88fb6",
						"organization": "Wellcome Trust Sanger Institute",
						"id": "772e1c3c-aac5-486e-96bc-785c5b3bd801",
						"functionName": "bwa.exe",
						"functionType": "cmd executable",
						"location": "C:\\cygwin64\\home\\jupiter\\bwa\\",
						"description": "Burrows-Wheeler Aligner function",
						"urlReturnFileType": "",
						"attributes": [
							{
								"label": "index",
								"name": "index",
								"type": "FILE",
								"value": "upstream1000.fa",
								"required": false,
								"shown": true,
								"example": "ref.fa",
								"attributeType": "input",
								"description": "fa type file",
								"from": "input"
							},
							{
								"label": "mem",
								"name": "mem",
								"type": "FILES",
								"value": "",
								"required": false,
								"shown": true,
								"example": "ref.fa",
								"attributeType": "input",
								"description": "fa type file",
								"from": "input"
							},
							{
								"label": "aln",
								"name": "aln",
								"type": "FILES",
								"value": "",
								"required": false,
								"shown": true,
								"example": "ref.fa",
								"attributeType": "input",
								"description": "fa type file",
								"from": "input"
							},
							{
								"label": "samse",
								"name": "samse",
								"type": "FILES",
								"value": "",
								"required": false,
								"shown": true,
								"example": "ref.fa",
								"attributeType": "input",
								"description": "fa type file",
								"from": "input"
							},
							{
								"label": "bwasw",
								"name": "bwasw",
								"type": "FILES",
								"value": "",
								"required": false,
								"shown": true,
								"example": "ref.fa",
								"attributeType": "input",
								"description": "fa type file",
								"from": "input"
							}
						],
						"type": "function",
						"comandLine": ""
					}
				}
			]
		},
		{
			"id": "873dac55-ede3-46ae-91e3-d6de164e022e",
			"x": -310.0837781878378,
			"y": -85.78121479890041,
			"label": "",
			"timestamp": 1477287163986,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
					"id": "6085465b-9188-448d-af95-75091fb88fb6",
					"libraryName": "Burrows-Wheeler Aligner (BWA)",
					"libraryType": "executable",
					"organization": "Wellcome Trust Sanger Institute",
					"location": "C:\\cygwin64\\home\\jupiter\\bwa\\",
					"alias": "bwa",
					"description": "BWA is a software package for mapping low-divergent sequences against a large reference genome, such as the human genome. It consists of three algorithms: BWA-backtrack, BWA-SW and BWA-MEM. The first algorithm is designed for Illumina sequence reads up to 100bp, while the rest two for longer sequences ranged from 70bp to 1Mbp. BWA-MEM and BWA-SW share similar features such as long-read support and split alignment, but BWA-MEM, which is the latest, is generally recommended for high-quality queries as it is faster and more accurate. BWA-MEM also has better performance than BWA-backtrack for 70-100bp Illumina reads.",
					"function": [
						{
							"functionName": "bwa.exe",
							"description": "Burrows-Wheeler Aligner function"
						}
					],
					"type": "library"
				}
			],
			"resourcesIn": [],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "6387b1c8-d479-423d-8535-e5dbbbe799d2",
			"x": 273.625,
			"y": 88.04687499999999,
			"label": "",
			"timestamp": 1478763330074,
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
		}
	],
	"edges": [
		{
			"from": "bb46e16e-48e8-4f3c-909e-5921cb438e72",
			"to": "5e00c5af-63e6-49ad-9346-0a975b528882",
			"id": "3d16797e-1e8a-4394-889f-e2b8ba11414a",
			"arrows": "to",
			"label": "upstream1000.fa\n",
			"resources": [
				{
					"id": "1aebfe5e-6853-4b91-b739-ff69b22c0a48",
					"resourceType": "fa",
					"organization": "UI database team",
					"resourceName": "upstream1000.fa",
					"description": "upstream1000",
					"url": "",
					"methodReturnFileType": "fa",
					"urlReturnFileType": "fa",
					"urlReturnFileSchema": "<upstream1000>\r\n\t\t\t</upstream1000>",
					"jsUrlReturnFileSchema": {
						"text": "upstream1000",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j8_1",
						"children": []
					},
					"fileName": "upstream1000.fa",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "upstream1000.fa"
				}
			],
			"libraries": []
		},
		{
			"from": "873dac55-ede3-46ae-91e3-d6de164e022e",
			"to": "5e00c5af-63e6-49ad-9346-0a975b528882",
			"id": "bb01c6ae-7f7d-4fa1-af8f-416f785526b0",
			"arrows": "to",
			"label": "Burrows-Wheeler Aligner (BWA)\n",
			"resources": [],
			"libraries": [
				{
					"id": "6085465b-9188-448d-af95-75091fb88fb6",
					"libraryName": "Burrows-Wheeler Aligner (BWA)",
					"libraryType": "executable",
					"organization": "Wellcome Trust Sanger Institute",
					"location": "C:\\cygwin64\\home\\jupiter\\bwa\\",
					"alias": "bwa",
					"description": "BWA is a software package for mapping low-divergent sequences against a large reference genome, such as the human genome. It consists of three algorithms: BWA-backtrack, BWA-SW and BWA-MEM. The first algorithm is designed for Illumina sequence reads up to 100bp, while the rest two for longer sequences ranged from 70bp to 1Mbp. BWA-MEM and BWA-SW share similar features such as long-read support and split alignment, but BWA-MEM, which is the latest, is generally recommended for high-quality queries as it is faster and more accurate. BWA-MEM also has better performance than BWA-backtrack for 70-100bp Illumina reads.",
					"function": [
						{
							"functionName": "bwa.exe",
							"description": "Burrows-Wheeler Aligner function"
						}
					],
					"type": "library"
				}
			]
		},
		{
			"from": "5e00c5af-63e6-49ad-9346-0a975b528882",
			"to": "6387b1c8-d479-423d-8535-e5dbbbe799d2",
			"id": "aa48b1ab-a7e6-4f1d-9540-68318a569026",
			"arrows": "to",
			"label": "",
			"resources": [],
			"libraries": []
		}
	]
}