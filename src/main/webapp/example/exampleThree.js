var exampleThree = {
	"nodes": [
		{
			"id": "1ae19e70-6ab8-4a86-93aa-623561cc6909",
			"x": -303.59375,
			"y": -37.875,
			"label": "",
			"timestamp": 1478668567710,
			"type": "library",
			"image": "image/library.png",
			"shape": "image",
			"resources": [],
			"libraries": [
				{
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
							"value": "",
							"required": false,
							"shown": true,
							"example": "ref.fa",
							"attributeType": "input",
							"description": "fa type file",
							"from": "default"
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
							"from": "default"
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
							"from": "default"
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
							"from": "default"
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
							"from": "default"
						}
					],
					"type": "function"
				},
				{
					"libraryName": "GenomeAnalysisTK.jar",
					"libraryId": "69044887-348f-4a40-ae4c-67d2e25b66a3",
					"organization": "GATK",
					"id": "1a20b90f-7843-415d-826c-0a25402a24a0",
					"functionName": "GenomeAnalysisTK.jar",
					"functionType": "executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\librarys\\",
					"description": "GenomeAnalysisToolkit",
					"type": "function",
					"urlReturnFileType": ""
				}
			],
			"resourcesIn": [],
			"resourcesOut": [],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "d1187b6d-b832-46a0-acbd-735954fb51db",
			"x": 75.11454199735451,
			"y": -35.52794312169313,
			"label": "P1.R2.fastq.gz\nP1.R1.fastq.gz\ngenome.fa\n",
			"timestamp": 1478671529191,
			"type": "data",
			"image": "image/data.png",
			"shape": "image",
			"resources": [
				{
					"id": "7aa2c13a-f2d3-49e9-83ed-f1ab9607ed15",
					"resourceType": "Other",
					"organization": "UI database team",
					"resourceName": "P1.R2.fastq.gz",
					"description": "DNA",
					"url": "",
					"methodReturnFileType": "gz",
					"urlReturnFileType": "gz",
					"urlReturnFileSchema": "<P1.R2.fastq.gz>\r\n\t\t\t</P1.R2.fastq.gz>",
					"jsUrlReturnFileSchema": {
						"text": "P1.R2.fastq.gz",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j9_1",
						"children": []
					},
					"fileName": "P1.R2.fastq.gz",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "P1.R2.fastq.gz"
				},
				{
					"id": "fe2c9141-81d4-481c-a116-910278415887",
					"resourceType": "Other",
					"organization": "UI database team",
					"resourceName": "P1.R1.fastq.gz",
					"description": "DNA",
					"url": "",
					"methodReturnFileType": "gz",
					"urlReturnFileType": "gz",
					"urlReturnFileSchema": "<P1.R1.fastq.gz>\r\n\t\t\t</P1.R1.fastq.gz>",
					"jsUrlReturnFileSchema": {
						"text": "P1.R1.fastq.gz",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j10_1",
						"children": []
					},
					"fileName": "P1.R1.fastq.gz",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "P1.R1.fastq.gz"
				},
				{
					"id": "e2ee71a7-8bd3-49a5-86a0-fd9b2fad4f60",
					"resourceType": "fa",
					"organization": "UCSC",
					"resourceName": "genome.fa",
					"description": "Human Reference Genome In Fasta Format",
					"url": "",
					"methodReturnFileType": "fa",
					"urlReturnFileType": "fa",
					"urlReturnFileSchema": "<genome.fa>\r\n\t\t\t</genome.fa>",
					"jsUrlReturnFileSchema": {
						"text": "genome.fa",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j13_1",
						"children": []
					},
					"fileName": "genome.fa",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "genome.fa"
				}
			],
			"libraries": [],
			"resourcesIn": [],
			"resourcesOut": [
				{
					"id": "7aa2c13a-f2d3-49e9-83ed-f1ab9607ed15",
					"resourceType": "Other",
					"organization": "UI database team",
					"resourceName": "P1.R2.fastq.gz",
					"description": "DNA",
					"url": "",
					"methodReturnFileType": "gz",
					"urlReturnFileType": "gz",
					"urlReturnFileSchema": "<P1.R2.fastq.gz>\r\n\t\t\t</P1.R2.fastq.gz>",
					"jsUrlReturnFileSchema": {
						"text": "P1.R2.fastq.gz",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j9_1",
						"children": []
					},
					"fileName": "P1.R2.fastq.gz",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "P1.R2.fastq.gz"
				},
				{
					"id": "fe2c9141-81d4-481c-a116-910278415887",
					"resourceType": "Other",
					"organization": "UI database team",
					"resourceName": "P1.R1.fastq.gz",
					"description": "DNA",
					"url": "",
					"methodReturnFileType": "gz",
					"urlReturnFileType": "gz",
					"urlReturnFileSchema": "<P1.R1.fastq.gz>\r\n\t\t\t</P1.R1.fastq.gz>",
					"jsUrlReturnFileSchema": {
						"text": "P1.R1.fastq.gz",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j10_1",
						"children": []
					},
					"fileName": "P1.R1.fastq.gz",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "P1.R1.fastq.gz"
				},
				{
					"id": "e2ee71a7-8bd3-49a5-86a0-fd9b2fad4f60",
					"resourceType": "fa",
					"organization": "UCSC",
					"resourceName": "genome.fa",
					"description": "Human Reference Genome In Fasta Format",
					"url": "",
					"methodReturnFileType": "fa",
					"urlReturnFileType": "fa",
					"urlReturnFileSchema": "<genome.fa>\r\n\t\t\t</genome.fa>",
					"jsUrlReturnFileSchema": {
						"text": "genome.fa",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j13_1",
						"children": []
					},
					"fileName": "genome.fa",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "genome.fa"
				}
			],
			"font": {
				"align": "left"
			}
		},
		{
			"id": "877fa044-0f7c-449d-a7a2-e5ff8a69b52e",
			"x": -140.1294137477866,
			"y": 116.15683438859959,
			"label": "",
			"timestamp": 1478675078786,
			"type": "analytics",
			"image": "image/analytics.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"id": "7aa2c13a-f2d3-49e9-83ed-f1ab9607ed15",
					"resourceType": "Other",
					"organization": "UI database team",
					"resourceName": "P1.R2.fastq.gz",
					"description": "DNA",
					"url": "",
					"methodReturnFileType": "gz",
					"urlReturnFileType": "gz",
					"urlReturnFileSchema": "<P1.R2.fastq.gz>\r\n\t\t\t</P1.R2.fastq.gz>",
					"jsUrlReturnFileSchema": {
						"text": "P1.R2.fastq.gz",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j9_1",
						"children": []
					},
					"fileName": "P1.R2.fastq.gz",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "P1.R2.fastq.gz"
				},
				{
					"id": "fe2c9141-81d4-481c-a116-910278415887",
					"resourceType": "Other",
					"organization": "UI database team",
					"resourceName": "P1.R1.fastq.gz",
					"description": "DNA",
					"url": "",
					"methodReturnFileType": "gz",
					"urlReturnFileType": "gz",
					"urlReturnFileSchema": "<P1.R1.fastq.gz>\r\n\t\t\t</P1.R1.fastq.gz>",
					"jsUrlReturnFileSchema": {
						"text": "P1.R1.fastq.gz",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j10_1",
						"children": []
					},
					"fileName": "P1.R1.fastq.gz",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "P1.R1.fastq.gz"
				},
				{
					"id": "e2ee71a7-8bd3-49a5-86a0-fd9b2fad4f60",
					"resourceType": "fa",
					"organization": "UCSC",
					"resourceName": "genome.fa",
					"description": "Human Reference Genome In Fasta Format",
					"url": "",
					"methodReturnFileType": "fa",
					"urlReturnFileType": "fa",
					"urlReturnFileSchema": "<genome.fa>\r\n\t\t\t</genome.fa>",
					"jsUrlReturnFileSchema": {
						"text": "genome.fa",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j13_1",
						"children": []
					},
					"fileName": "genome.fa",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "genome.fa"
				}
			],
			"resourcesOut": [
				{
					"urlReturnFileName": "bam.BaseRecalibrator.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "3ec20f3f-606c-3b2b-5ab1-ec0c8e79acb2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "bam.PrintReads.bam",
					"urlReturnFileType": "Other",
					"resourceType": "Other",
					"id": "7cbcc25c-e861-6ee1-3620-c98f7a026a07",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"font": {
				"align": "left"
			},
			"librariesIn": [
				{
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
							"value": "",
							"required": false,
							"shown": true,
							"example": "ref.fa",
							"attributeType": "input",
							"description": "fa type file",
							"from": "default"
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
							"from": "default"
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
							"from": "default"
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
							"from": "default"
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
							"from": "default"
						}
					],
					"type": "function"
				},
				{
					"libraryName": "GenomeAnalysisTK.jar",
					"libraryId": "69044887-348f-4a40-ae4c-67d2e25b66a3",
					"organization": "GATK",
					"id": "1a20b90f-7843-415d-826c-0a25402a24a0",
					"functionName": "GenomeAnalysisTK.jar",
					"functionType": "executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\librarys\\",
					"description": "GenomeAnalysisToolkit",
					"type": "function",
					"urlReturnFileType": ""
				}
			],
			"actions": [
				{
					"id": "00c79e47-235b-f542-6eea-d19212047a48",
					"act": "Code",
					"val": "./bwa mem genome.fa P1.R1.fastq.gz P1.R2.fastq.gz > bam.mem\njava -jar picard.jar SortSam I=bam.mem O=Sorted_bam SO=coordinate\njava -jar picard.jar MarkDuplicates INPUT=Sorted_bam OUTPUT=bam.MarkDuplicates METRICS_FILE=bam.MarkDuplicates.metrics\njava -jar picard.jar AddOrReplaceReadGroups I=bam.MarkDuplicates O=Validated_bam.bam RGID=bam.AddOrReplaceReadGroups RGSM=P1 RGCN=@HWI-ST932 RGPL=ILLUMINA RGPU=C5JGVACXX-.2 RGLB=Nextera\njava -jar picard.jar BuildBamIndex INPUT=Validated_bam.bam OUTPUT=Validated_bam.bai\njava -jar picard.jar ValidateSamFile INPUT=Validated_bam.bam OUTPUT=Validated_bam.val VALIDATE_INDEX=true MODE=SUMMARY\njava -jar picard.jar BuildBamIndex INPUT=Validated_bam.bam OUTPUT=Validated_bam.bai\njava -jar GenomeAnalysisTK.jar -T RealignerTargetCreator -R genome.fa -I Validated_bam.bam -o bam.AddOrReplaceReadGroups.intervals -known dbsnp.vcf\njava -jar GenomeAnalysisTK.jar -T IndelRealigner -R genome.fa -I Validated_bam.bam -targetIntervals bam.AddOrReplaceReadGroups.intervals -o bam.IndelRealigner.bam -known dbsnp.vcf -LOD 0.4 -model USE_READS -compress 0 --disable_bam_indexing\njava -jar picard.jar BuildBamIndex INPUT=bam.IndelRealigner.bam OUTPUT=bam.IndelRealigner.bai\njava -jar GenomeAnalysisTK.jar -T BaseRecalibrator -R genome.fa -I bam.IndelRealigner.bam -o bam.BaseRecalibrator.csv -knownSites dbsnp.vcf -l INFO\njava -jar GenomeAnalysisTK.jar -T PrintReads -R genome.fa -I bam.IndelRealigner.bam -BQSR bam.BaseRecalibrator.csv -o bam.PrintReads.bam",
					"codeType": "bash",
					"codeName": "analysis.bat",
					"inputFileNames": [
						"P1.R2.fastq.gz",
						"P1.R1.fastq.gz"
					],
					"outputFileNames": [
						"bam.BaseRecalibrator.csv",
						"bam.PrintReads.bam"
					],
					"outputFileTypes": [
						"CSV",
						"Other"
					]
				}
			]
		},
		{
			"id": "46c30020-5fc6-4c53-a88b-4fba4311c4fd",
			"x": -144.51655805704567,
			"y": 260.3218521853926,
			"label": "",
			"timestamp": 1478675358310,
			"type": "terminal",
			"image": "image/terminal.png",
			"shape": "image",
			"resources": [],
			"libraries": [],
			"resourcesIn": [
				{
					"urlReturnFileName": "bam.BaseRecalibrator.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "3ec20f3f-606c-3b2b-5ab1-ec0c8e79acb2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "bam.PrintReads.bam",
					"urlReturnFileType": "Other",
					"resourceType": "Other",
					"id": "7cbcc25c-e861-6ee1-3620-c98f7a026a07",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"resourcesOut": [],
			"font": {
				"align": "left"
			},
			"actions": [
				{
					"id": "b89505fa-511c-c591-9a3c-08e45a094545",
					"act": "print",
					"outputFileNames": [
						"bam.BaseRecalibrator.csv"
					],
					"printType": "file",
					"resourceid": "3ec20f3f-606c-3b2b-5ab1-ec0c8e79acb2",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				},
				{
					"id": "acdca620-18e7-2a90-814f-66bf72eac68a",
					"act": "print",
					"outputFileNames": [
						"bam.PrintReads.bam"
					],
					"printType": "file",
					"resourceid": "7cbcc25c-e861-6ee1-3620-c98f7a026a07",
					"numOfWins": "0",
					"submit": {
						"windowFunction": [],
						"values": []
					},
					"colFuns": []
				}
			]
		}
	],
	"edges": [
		{
			"from": "1ae19e70-6ab8-4a86-93aa-623561cc6909",
			"to": "877fa044-0f7c-449d-a7a2-e5ff8a69b52e",
			"id": "0e3b653e-ebc1-40a3-a32a-dd8f5e72aa65",
			"arrows": "to",
			"label": "Burrows-Wheeler Aligner\nGenomeAnalysisTK.jar\n",
			"resources": [],
			"libraries": [
				{
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
							"value": "",
							"required": false,
							"shown": true,
							"example": "ref.fa",
							"attributeType": "input",
							"description": "fa type file",
							"from": "default"
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
							"from": "default"
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
							"from": "default"
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
							"from": "default"
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
							"from": "default"
						}
					],
					"type": "function"
				},
				{
					"libraryName": "GenomeAnalysisTK.jar",
					"libraryId": "69044887-348f-4a40-ae4c-67d2e25b66a3",
					"organization": "GATK",
					"id": "1a20b90f-7843-415d-826c-0a25402a24a0",
					"functionName": "GenomeAnalysisTK.jar",
					"functionType": "executable",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\librarys\\",
					"description": "GenomeAnalysisToolkit",
					"type": "function",
					"urlReturnFileType": ""
				}
			]
		},
		{
			"from": "d1187b6d-b832-46a0-acbd-735954fb51db",
			"to": "877fa044-0f7c-449d-a7a2-e5ff8a69b52e",
			"id": "f89fc535-8864-4193-9d58-ac78c919ae46",
			"arrows": "to",
			"label": "P1.R2.fastq.gz\nP1.R1.fastq.gz\ngenome.fa\n",
			"resources": [
				{
					"id": "7aa2c13a-f2d3-49e9-83ed-f1ab9607ed15",
					"resourceType": "Other",
					"organization": "UI database team",
					"resourceName": "P1.R2.fastq.gz",
					"description": "DNA",
					"url": "",
					"methodReturnFileType": "gz",
					"urlReturnFileType": "gz",
					"urlReturnFileSchema": "<P1.R2.fastq.gz>\r\n\t\t\t</P1.R2.fastq.gz>",
					"jsUrlReturnFileSchema": {
						"text": "P1.R2.fastq.gz",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j9_1",
						"children": []
					},
					"fileName": "P1.R2.fastq.gz",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "P1.R2.fastq.gz"
				},
				{
					"id": "fe2c9141-81d4-481c-a116-910278415887",
					"resourceType": "Other",
					"organization": "UI database team",
					"resourceName": "P1.R1.fastq.gz",
					"description": "DNA",
					"url": "",
					"methodReturnFileType": "gz",
					"urlReturnFileType": "gz",
					"urlReturnFileSchema": "<P1.R1.fastq.gz>\r\n\t\t\t</P1.R1.fastq.gz>",
					"jsUrlReturnFileSchema": {
						"text": "P1.R1.fastq.gz",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j10_1",
						"children": []
					},
					"fileName": "P1.R1.fastq.gz",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
					"urlReturnFileName": "P1.R1.fastq.gz"
				},
				{
					"id": "e2ee71a7-8bd3-49a5-86a0-fd9b2fad4f60",
					"resourceType": "fa",
					"organization": "UCSC",
					"resourceName": "genome.fa",
					"description": "Human Reference Genome In Fasta Format",
					"url": "",
					"methodReturnFileType": "fa",
					"urlReturnFileType": "fa",
					"urlReturnFileSchema": "<genome.fa>\r\n\t\t\t</genome.fa>",
					"jsUrlReturnFileSchema": {
						"text": "genome.fa",
						"a_attr": {
							"style": "background-color: rgb(205, 165, 10) !important"
						},
						"id": "j13_1",
						"children": []
					},
					"fileName": "genome.fa",
					"location": "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\",
					"urlReturnFileName": "genome.fa"
				}
			],
			"libraries": []
		},
		{
			"from": "877fa044-0f7c-449d-a7a2-e5ff8a69b52e",
			"to": "46c30020-5fc6-4c53-a88b-4fba4311c4fd",
			"id": "9fa0ab90-dec7-47bf-b2bf-c0ea71a554bf",
			"arrows": "to",
			"label": "bam.BaseRecalibrator.csv\nbam.PrintReads.bam\n",
			"resources": [
				{
					"urlReturnFileName": "bam.BaseRecalibrator.csv",
					"urlReturnFileType": "CSV",
					"resourceType": "CSV",
					"id": "3ec20f3f-606c-3b2b-5ab1-ec0c8e79acb2",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				},
				{
					"urlReturnFileName": "bam.PrintReads.bam",
					"urlReturnFileType": "Other",
					"resourceType": "Other",
					"id": "7cbcc25c-e861-6ee1-3620-c98f7a026a07",
					"location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
				}
			],
			"libraries": []
		}
	]
}