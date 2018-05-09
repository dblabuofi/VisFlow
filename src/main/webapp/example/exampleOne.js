var exampleOne = {
    "nodes": [
        {
            "id": "f44067b0-0fa3-47ae-87c3-91ae433eb790",
            "x": 619.4062500000002,
            "y": -210.87500000000006,
            "label": "OGC GetCapabilities\n",
            "timestamp": 1477384800012,
            "type": "data",
            "image": "image/data.png",
            "shape": "image",
            "resources": [
                {
                    "id": "17201697-1b9b-49c0-a403-6c2f586e039b",
                    "resourceType": "HTTP",
                    "organization": "OGC",
                    "resourceName": "OGC GetCapabilities",
                    "description": "Get Layer information",
                    "url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
                    "urlExample": "",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "SERVICE",
                            "name": "SERVICE",
                            "type": "string",
                            "value": "WMS",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "server name",
                            "from": "default"
                        },
                        {
                            "label": "request",
                            "name": "request",
                            "type": "string",
                            "value": "GetCapabilities",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "server name",
                            "from": "default"
                        },
                        {
                            "label": "version",
                            "name": "version",
                            "type": "string",
                            "value": "1.1.1",
                            "required": true,
                            "shown": false,
                            "example": "1.1.1",
                            "attributeType": "input",
                            "description": "version number",
                            "from": "default"
                        },
                        {
                            "label": "format",
                            "name": "format",
                            "type": "string",
                            "value": "text/html",
                            "required": true,
                            "shown": false,
                            "example": "text/html",
                            "attributeType": "input",
                            "description": "return format",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "Service",
                            "name": "Service",
                            "type": "string"
                        },
                        {
                            "label": "Request",
                            "name": "Request",
                            "type": "string"
                        },
                        {
                            "label": "Exception",
                            "name": "Exception",
                            "type": "string"
                        },
                        {
                            "label": "VendorSpecificCapabilities",
                            "name": "VendorSpecificCapabilities",
                            "type": "string"
                        },
                        {
                            "label": "Name",
                            "name": "Name",
                            "type": "string"
                        },
                        {
                            "label": "Title",
                            "name": "Title",
                            "type": "string"
                        },
                        {
                            "label": "Abstract",
                            "name": "Abstract",
                            "type": "string"
                        },
                        {
                            "label": "SRS",
                            "name": "SRS",
                            "type": "string"
                        },
                        {
                            "label": "LatLonBoundingBox",
                            "name": "LatLonBoundingBox",
                            "type": "string"
                        },
                        {
                            "label": "BoundingBox",
                            "name": "BoundingBox",
                            "type": "string"
                        },
                        {
                            "label": "Attribution",
                            "name": "Attribution",
                            "type": "string"
                        },
                        {
                            "label": "AuthorityURL",
                            "name": "AuthorityURL",
                            "type": "string"
                        },
                        {
                            "label": "Style",
                            "name": "Style",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "XML",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<WMT_MS_Capabilities>\r\n\t\t\t\t<Service></Service>\r\n\t\t\t\t<Capability>\r\n\t\t\t\t\t<Request></Request>\r\n\t\t\t\t\t<Exception></Exception>\r\n\t\t\t\t\t<VendorSpecificCapabilities></VendorSpecificCapabilities>\r\n\t\t\t\t\t<Layer>\r\n\t\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t\t<Title></Title>\r\n\t\t\t\t\t\t<Abstract></Abstract>\r\n\t\t\t\t\t\t<SRS></SRS>\r\n\t\t\t\t\t\t<LatLonBoundingBox></LatLonBoundingBox>\r\n\t\t\t\t\t\t<BoundingBox></BoundingBox>\r\n\t\t\t\t\t\t<Attribution></Attribution>\r\n\t\t\t\t\t\t<AuthorityURL></AuthorityURL>\r\n\t\t\t\t\t\t<Style></Style>\r\n\t\t\t\t\t</Layer>\r\n\t\t\t\t</Capability>\r\n\t\t\t</WMT_MS_Capabilities>",
                    "jsUrlReturnFileSchema": {
                        "text": "WMT_MS_Capabilities",
                        "a_attr": {
                            "style": ""
                        },
                        "id": "j4_1",
                        "children": [
                            {
                                "text": "Capability",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j4_2",
                                "children": [
                                    {
                                        "text": "Request",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_3",
                                        "children": []
                                    },
                                    {
                                        "text": "VendorSpecificCapabilities",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_4",
                                        "children": []
                                    },
                                    {
                                        "text": "Layer",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_5",
                                        "children": [
                                            {
                                                "text": "LatLonBoundingBox",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_6",
                                                "children": []
                                            },
                                            {
                                                "text": "SRS",
                                                "a_attr": {
                                                    "style": "background-color: rgb(205, 165, 10) !important"
                                                },
                                                "id": "j4_7",
                                                "children": []
                                            },
                                            {
                                                "text": "Abstract",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_8",
                                                "children": []
                                            },
                                            {
                                                "text": "BoundingBox",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_9",
                                                "children": []
                                            },
                                            {
                                                "text": "Title",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_10",
                                                "children": []
                                            },
                                            {
                                                "text": "AuthorityURL",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_11",
                                                "children": []
                                            },
                                            {
                                                "text": "Style",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_12",
                                                "children": []
                                            },
                                            {
                                                "text": "Attribution",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_13",
                                                "children": []
                                            },
                                            {
                                                "text": "Name",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_14",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "text": "Exception",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_15",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "text": "Service",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j4_16",
                                "children": []
                            }
                        ]
                    },
                    "fileName": "OGC GetCapabilities.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "OGC GetCapabilities"
                }
            ],
            "libraries": [],
            "resourcesIn": [],
            "resourcesOut": [
                {
                    "id": "17201697-1b9b-49c0-a403-6c2f586e039b",
                    "resourceType": "HTTP",
                    "organization": "OGC",
                    "resourceName": "OGC GetCapabilities",
                    "description": "Get Layer information",
                    "url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
                    "urlExample": "",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "SERVICE",
                            "name": "SERVICE",
                            "type": "string",
                            "value": "WMS",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "server name",
                            "from": "default"
                        },
                        {
                            "label": "request",
                            "name": "request",
                            "type": "string",
                            "value": "GetCapabilities",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "server name",
                            "from": "default"
                        },
                        {
                            "label": "version",
                            "name": "version",
                            "type": "string",
                            "value": "1.1.1",
                            "required": true,
                            "shown": false,
                            "example": "1.1.1",
                            "attributeType": "input",
                            "description": "version number",
                            "from": "default"
                        },
                        {
                            "label": "format",
                            "name": "format",
                            "type": "string",
                            "value": "text/html",
                            "required": true,
                            "shown": false,
                            "example": "text/html",
                            "attributeType": "input",
                            "description": "return format",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "Service",
                            "name": "Service",
                            "type": "string"
                        },
                        {
                            "label": "Request",
                            "name": "Request",
                            "type": "string"
                        },
                        {
                            "label": "Exception",
                            "name": "Exception",
                            "type": "string"
                        },
                        {
                            "label": "VendorSpecificCapabilities",
                            "name": "VendorSpecificCapabilities",
                            "type": "string"
                        },
                        {
                            "label": "Name",
                            "name": "Name",
                            "type": "string"
                        },
                        {
                            "label": "Title",
                            "name": "Title",
                            "type": "string"
                        },
                        {
                            "label": "Abstract",
                            "name": "Abstract",
                            "type": "string"
                        },
                        {
                            "label": "SRS",
                            "name": "SRS",
                            "type": "string"
                        },
                        {
                            "label": "LatLonBoundingBox",
                            "name": "LatLonBoundingBox",
                            "type": "string"
                        },
                        {
                            "label": "BoundingBox",
                            "name": "BoundingBox",
                            "type": "string"
                        },
                        {
                            "label": "Attribution",
                            "name": "Attribution",
                            "type": "string"
                        },
                        {
                            "label": "AuthorityURL",
                            "name": "AuthorityURL",
                            "type": "string"
                        },
                        {
                            "label": "Style",
                            "name": "Style",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "XML",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<WMT_MS_Capabilities>\r\n\t\t\t\t<Service></Service>\r\n\t\t\t\t<Capability>\r\n\t\t\t\t\t<Request></Request>\r\n\t\t\t\t\t<Exception></Exception>\r\n\t\t\t\t\t<VendorSpecificCapabilities></VendorSpecificCapabilities>\r\n\t\t\t\t\t<Layer>\r\n\t\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t\t<Title></Title>\r\n\t\t\t\t\t\t<Abstract></Abstract>\r\n\t\t\t\t\t\t<SRS></SRS>\r\n\t\t\t\t\t\t<LatLonBoundingBox></LatLonBoundingBox>\r\n\t\t\t\t\t\t<BoundingBox></BoundingBox>\r\n\t\t\t\t\t\t<Attribution></Attribution>\r\n\t\t\t\t\t\t<AuthorityURL></AuthorityURL>\r\n\t\t\t\t\t\t<Style></Style>\r\n\t\t\t\t\t</Layer>\r\n\t\t\t\t</Capability>\r\n\t\t\t</WMT_MS_Capabilities>",
                    "jsUrlReturnFileSchema": {
                        "text": "WMT_MS_Capabilities",
                        "a_attr": {
                            "style": ""
                        },
                        "id": "j4_1",
                        "children": [
                            {
                                "text": "Capability",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j4_2",
                                "children": [
                                    {
                                        "text": "Request",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_3",
                                        "children": []
                                    },
                                    {
                                        "text": "VendorSpecificCapabilities",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_4",
                                        "children": []
                                    },
                                    {
                                        "text": "Layer",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_5",
                                        "children": [
                                            {
                                                "text": "LatLonBoundingBox",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_6",
                                                "children": []
                                            },
                                            {
                                                "text": "SRS",
                                                "a_attr": {
                                                    "style": "background-color: rgb(205, 165, 10) !important"
                                                },
                                                "id": "j4_7",
                                                "children": []
                                            },
                                            {
                                                "text": "Abstract",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_8",
                                                "children": []
                                            },
                                            {
                                                "text": "BoundingBox",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_9",
                                                "children": []
                                            },
                                            {
                                                "text": "Title",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_10",
                                                "children": []
                                            },
                                            {
                                                "text": "AuthorityURL",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_11",
                                                "children": []
                                            },
                                            {
                                                "text": "Style",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_12",
                                                "children": []
                                            },
                                            {
                                                "text": "Attribution",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_13",
                                                "children": []
                                            },
                                            {
                                                "text": "Name",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_14",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "text": "Exception",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_15",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "text": "Service",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j4_16",
                                "children": []
                            }
                        ]
                    },
                    "fileName": "OGC GetCapabilities.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "OGC GetCapabilities"
                }
            ],
            "font": {
                "align": "left"
            }
        },
        {
            "id": "69478a0b-1892-4a89-8d2c-0ba3afffa9a1",
            "x": 497.40625000000017,
            "y": -92.87500000000003,
            "label": "",
            "timestamp": 1477385746480,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "id": "17201697-1b9b-49c0-a403-6c2f586e039b",
                    "resourceType": "HTTP",
                    "organization": "OGC",
                    "resourceName": "OGC GetCapabilities",
                    "description": "Get Layer information",
                    "url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
                    "urlExample": "",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "SERVICE",
                            "name": "SERVICE",
                            "type": "string",
                            "value": "WMS",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "server name",
                            "from": "default"
                        },
                        {
                            "label": "request",
                            "name": "request",
                            "type": "string",
                            "value": "GetCapabilities",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "server name",
                            "from": "default"
                        },
                        {
                            "label": "version",
                            "name": "version",
                            "type": "string",
                            "value": "1.1.1",
                            "required": true,
                            "shown": false,
                            "example": "1.1.1",
                            "attributeType": "input",
                            "description": "version number",
                            "from": "default"
                        },
                        {
                            "label": "format",
                            "name": "format",
                            "type": "string",
                            "value": "text/html",
                            "required": true,
                            "shown": false,
                            "example": "text/html",
                            "attributeType": "input",
                            "description": "return format",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "Service",
                            "name": "Service",
                            "type": "string"
                        },
                        {
                            "label": "Request",
                            "name": "Request",
                            "type": "string"
                        },
                        {
                            "label": "Exception",
                            "name": "Exception",
                            "type": "string"
                        },
                        {
                            "label": "VendorSpecificCapabilities",
                            "name": "VendorSpecificCapabilities",
                            "type": "string"
                        },
                        {
                            "label": "Name",
                            "name": "Name",
                            "type": "string"
                        },
                        {
                            "label": "Title",
                            "name": "Title",
                            "type": "string"
                        },
                        {
                            "label": "Abstract",
                            "name": "Abstract",
                            "type": "string"
                        },
                        {
                            "label": "SRS",
                            "name": "SRS",
                            "type": "string"
                        },
                        {
                            "label": "LatLonBoundingBox",
                            "name": "LatLonBoundingBox",
                            "type": "string"
                        },
                        {
                            "label": "BoundingBox",
                            "name": "BoundingBox",
                            "type": "string"
                        },
                        {
                            "label": "Attribution",
                            "name": "Attribution",
                            "type": "string"
                        },
                        {
                            "label": "AuthorityURL",
                            "name": "AuthorityURL",
                            "type": "string"
                        },
                        {
                            "label": "Style",
                            "name": "Style",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "XML",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<WMT_MS_Capabilities>\r\n\t\t\t\t<Service></Service>\r\n\t\t\t\t<Capability>\r\n\t\t\t\t\t<Request></Request>\r\n\t\t\t\t\t<Exception></Exception>\r\n\t\t\t\t\t<VendorSpecificCapabilities></VendorSpecificCapabilities>\r\n\t\t\t\t\t<Layer>\r\n\t\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t\t<Title></Title>\r\n\t\t\t\t\t\t<Abstract></Abstract>\r\n\t\t\t\t\t\t<SRS></SRS>\r\n\t\t\t\t\t\t<LatLonBoundingBox></LatLonBoundingBox>\r\n\t\t\t\t\t\t<BoundingBox></BoundingBox>\r\n\t\t\t\t\t\t<Attribution></Attribution>\r\n\t\t\t\t\t\t<AuthorityURL></AuthorityURL>\r\n\t\t\t\t\t\t<Style></Style>\r\n\t\t\t\t\t</Layer>\r\n\t\t\t\t</Capability>\r\n\t\t\t</WMT_MS_Capabilities>",
                    "jsUrlReturnFileSchema": {
                        "text": "WMT_MS_Capabilities",
                        "a_attr": {
                            "style": ""
                        },
                        "id": "j4_1",
                        "children": [
                            {
                                "text": "Capability",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j4_2",
                                "children": [
                                    {
                                        "text": "Request",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_3",
                                        "children": []
                                    },
                                    {
                                        "text": "VendorSpecificCapabilities",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_4",
                                        "children": []
                                    },
                                    {
                                        "text": "Layer",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_5",
                                        "children": [
                                            {
                                                "text": "LatLonBoundingBox",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_6",
                                                "children": []
                                            },
                                            {
                                                "text": "SRS",
                                                "a_attr": {
                                                    "style": "background-color: rgb(205, 165, 10) !important"
                                                },
                                                "id": "j4_7",
                                                "children": []
                                            },
                                            {
                                                "text": "Abstract",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_8",
                                                "children": []
                                            },
                                            {
                                                "text": "BoundingBox",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_9",
                                                "children": []
                                            },
                                            {
                                                "text": "Title",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_10",
                                                "children": []
                                            },
                                            {
                                                "text": "AuthorityURL",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_11",
                                                "children": []
                                            },
                                            {
                                                "text": "Style",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_12",
                                                "children": []
                                            },
                                            {
                                                "text": "Attribution",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_13",
                                                "children": []
                                            },
                                            {
                                                "text": "Name",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_14",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "text": "Exception",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_15",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "text": "Service",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j4_16",
                                "children": []
                            }
                        ]
                    },
                    "fileName": "OGC GetCapabilities.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "OGC GetCapabilities"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "capabilities.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "17201697-1b9b-49c0-a403-6c2f586e039b",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "17201697-1b9b-49c0-a403-6c2f586e039b",
                    "act": "Resource",
                    "inputFileNames": [],
                    "outputFileNames": [
                        "capabilities.xml"
                    ],
                    "outputFileTypes": [
                        "XML"
                    ],
                    "resultMethod": "Append",
                    "webservices": [],
                    "targetResource": {
                        "id": "17201697-1b9b-49c0-a403-6c2f586e039b",
                        "resourceType": "HTTP",
                        "organization": "OGC",
                        "resourceName": "OGC GetCapabilities",
                        "description": "Get Layer information",
                        "url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
                        "urlExample": "",
                        "method": "GET",
                        "attributes": [
                            {
                                "label": "SERVICE",
                                "name": "SERVICE",
                                "type": "string",
                                "value": "WMS",
                                "required": true,
                                "shown": false,
                                "example": "WMS",
                                "attributeType": "input",
                                "description": "server name",
                                "from": "default"
                            },
                            {
                                "label": "request",
                                "name": "request",
                                "type": "string",
                                "value": "GetCapabilities",
                                "required": true,
                                "shown": false,
                                "example": "WMS",
                                "attributeType": "input",
                                "description": "server name",
                                "from": "default"
                            },
                            {
                                "label": "version",
                                "name": "version",
                                "type": "string",
                                "value": "1.1.1",
                                "required": true,
                                "shown": false,
                                "example": "1.1.1",
                                "attributeType": "input",
                                "description": "version number",
                                "from": "default"
                            },
                            {
                                "label": "format",
                                "name": "format",
                                "type": "string",
                                "value": "text/html",
                                "required": true,
                                "shown": false,
                                "example": "text/html",
                                "attributeType": "input",
                                "description": "return format",
                                "from": "default"
                            }
                        ],
                        "outAttributes": [
                            {
                                "label": "Service",
                                "name": "Service",
                                "type": "string"
                            },
                            {
                                "label": "Request",
                                "name": "Request",
                                "type": "string"
                            },
                            {
                                "label": "Exception",
                                "name": "Exception",
                                "type": "string"
                            },
                            {
                                "label": "VendorSpecificCapabilities",
                                "name": "VendorSpecificCapabilities",
                                "type": "string"
                            },
                            {
                                "label": "Name",
                                "name": "Name",
                                "type": "string"
                            },
                            {
                                "label": "Title",
                                "name": "Title",
                                "type": "string"
                            },
                            {
                                "label": "Abstract",
                                "name": "Abstract",
                                "type": "string"
                            },
                            {
                                "label": "SRS",
                                "name": "SRS",
                                "type": "string"
                            },
                            {
                                "label": "LatLonBoundingBox",
                                "name": "LatLonBoundingBox",
                                "type": "string"
                            },
                            {
                                "label": "BoundingBox",
                                "name": "BoundingBox",
                                "type": "string"
                            },
                            {
                                "label": "Attribution",
                                "name": "Attribution",
                                "type": "string"
                            },
                            {
                                "label": "AuthorityURL",
                                "name": "AuthorityURL",
                                "type": "string"
                            },
                            {
                                "label": "Style",
                                "name": "Style",
                                "type": "string"
                            }
                        ],
                        "methodReturnFileType": "XML",
                        "urlReturnFileType": "XML",
                        "urlReturnFileSchema": "<WMT_MS_Capabilities>\r\n\t\t\t\t<Service></Service>\r\n\t\t\t\t<Capability>\r\n\t\t\t\t\t<Request></Request>\r\n\t\t\t\t\t<Exception></Exception>\r\n\t\t\t\t\t<VendorSpecificCapabilities></VendorSpecificCapabilities>\r\n\t\t\t\t\t<Layer>\r\n\t\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t\t<Title></Title>\r\n\t\t\t\t\t\t<Abstract></Abstract>\r\n\t\t\t\t\t\t<SRS></SRS>\r\n\t\t\t\t\t\t<LatLonBoundingBox></LatLonBoundingBox>\r\n\t\t\t\t\t\t<BoundingBox></BoundingBox>\r\n\t\t\t\t\t\t<Attribution></Attribution>\r\n\t\t\t\t\t\t<AuthorityURL></AuthorityURL>\r\n\t\t\t\t\t\t<Style></Style>\r\n\t\t\t\t\t</Layer>\r\n\t\t\t\t</Capability>\r\n\t\t\t</WMT_MS_Capabilities>",
                        "jsUrlReturnFileSchema": {
                            "text": "WMT_MS_Capabilities",
                            "a_attr": {
                                "style": ""
                            },
                            "id": "j4_1",
                            "children": [
                                {
                                    "text": "Capability",
                                    "a_attr": {
                                        "style": ""
                                    },
                                    "id": "j4_2",
                                    "children": [
                                        {
                                            "text": "Request",
                                            "a_attr": {
                                                "style": ""
                                            },
                                            "id": "j4_3",
                                            "children": []
                                        },
                                        {
                                            "text": "VendorSpecificCapabilities",
                                            "a_attr": {
                                                "style": ""
                                            },
                                            "id": "j4_4",
                                            "children": []
                                        },
                                        {
                                            "text": "Layer",
                                            "a_attr": {
                                                "style": ""
                                            },
                                            "id": "j4_5",
                                            "children": [
                                                {
                                                    "text": "LatLonBoundingBox",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j4_6",
                                                    "children": []
                                                },
                                                {
                                                    "text": "SRS",
                                                    "a_attr": {
                                                        "style": "background-color: rgb(205, 165, 10) !important"
                                                    },
                                                    "id": "j4_7",
                                                    "children": []
                                                },
                                                {
                                                    "text": "Abstract",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j4_8",
                                                    "children": []
                                                },
                                                {
                                                    "text": "BoundingBox",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j4_9",
                                                    "children": []
                                                },
                                                {
                                                    "text": "Title",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j4_10",
                                                    "children": []
                                                },
                                                {
                                                    "text": "AuthorityURL",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j4_11",
                                                    "children": []
                                                },
                                                {
                                                    "text": "Style",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j4_12",
                                                    "children": []
                                                },
                                                {
                                                    "text": "Attribution",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j4_13",
                                                    "children": []
                                                },
                                                {
                                                    "text": "Name",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j4_14",
                                                    "children": []
                                                }
                                            ]
                                        },
                                        {
                                            "text": "Exception",
                                            "a_attr": {
                                                "style": ""
                                            },
                                            "id": "j4_15",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "text": "Service",
                                    "a_attr": {
                                        "style": ""
                                    },
                                    "id": "j4_16",
                                    "children": []
                                }
                            ]
                        },
                        "fileName": "OGC GetCapabilities.xml",
                        "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                        "urlReturnFileName": "OGC GetCapabilities"
                    }
                }
            ]
        },
        {
            "id": "ed56bcf7-025d-4eec-baa4-65f62c803ad4",
            "x": 407.4062500000001,
            "y": -221.87500000000009,
            "label": "OGC GetStyle\n",
            "timestamp": 1477386170408,
            "type": "data",
            "image": "image/data.png",
            "shape": "image",
            "resources": [
                {
                    "id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
                    "resourceType": "HTTP",
                    "organization": "OGC",
                    "resourceName": "OGC GetStyle",
                    "description": "Get Styles Information",
                    "url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
                    "urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "layers",
                            "name": "layers",
                            "type": "string",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "GBR_BGS_625k_BA",
                            "attributeType": "input",
                            "description": "structure id",
                            "from": "input"
                        },
                        {
                            "label": "version",
                            "name": "version",
                            "type": "string",
                            "value": "1.1.1",
                            "required": true,
                            "shown": false,
                            "example": "1.1.1",
                            "attributeType": "input",
                            "description": "version",
                            "from": "default"
                        },
                        {
                            "label": "REQUEST",
                            "name": "REQUEST",
                            "type": "string",
                            "value": "GetStyles",
                            "required": true,
                            "shown": false,
                            "example": "GetMap",
                            "attributeType": "input",
                            "description": "GetStyles",
                            "from": "default"
                        },
                        {
                            "label": "SERVICE",
                            "name": "SERVICE",
                            "type": "string",
                            "value": "WMS",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "SERVICE",
                            "from": "default"
                        },
                        {
                            "label": "format",
                            "name": "format",
                            "type": "string",
                            "value": "text/xml",
                            "required": true,
                            "shown": false,
                            "example": "text/xml",
                            "attributeType": "input",
                            "description": "format",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "Name",
                            "name": "Name",
                            "type": "string"
                        },
                        {
                            "label": "ogc:PropertyName",
                            "name": "ogc:PropertyName",
                            "type": "string"
                        },
                        {
                            "label": "ogc:Literal",
                            "name": "ogc:Literal",
                            "type": "string"
                        },
                        {
                            "label": "CssParameter",
                            "name": "CssParameter",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "XML",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<StyledLayerDescriptor>\r\n\t\t\t\t<NamedLayer>\r\n\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t<UserStyle>\r\n\t\t\t\t\t\t<Rule>\r\n\t\t\t\t\t\t\t<ogc:Filter>\r\n\t\t\t\t\t\t\t\t<ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t\t\t<ogc:PropertyName></ogc:PropertyName>\r\n\t\t\t\t\t\t\t\t\t<ogc:Literal></ogc:Literal>\r\n\t\t\t\t\t\t\t\t</ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t</ogc:Filter>\r\n\t\t\t\t\t\t\t<PolygonSymbolizer>\r\n\t\t\t\t\t\t\t\t<Fill>\r\n\t\t\t\t\t\t\t\t\t<CssParameter></CssParameter>\r\n\t\t\t\t\t\t\t\t</Fill>\r\n\t\t\t\t\t\t\t</PolygonSymbolizer>\r\n\t\t\t\t\t\t</Rule>\r\n\t\t\t\t\t</UserStyle>\r\n\t\t\t\t</NamedLayer>\r\n\t\t\t</StyledLayerDescriptor>",
                    "jsUrlReturnFileSchema": {
                        "text": "StyledLayerDescriptor",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j5_1",
                        "children": [
                            {
                                "text": "NamedLayer",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j5_2",
                                "children": [
                                    {
                                        "text": "UserStyle",
                                        "a_attr": {
                                            "style": "background-color: rgb(205, 165, 10) !important"
                                        },
                                        "id": "j5_3",
                                        "children": [
                                            {
                                                "text": "Rule",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j5_4",
                                                "children": [
                                                    {
                                                        "text": "PolygonSymbolizer",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j5_5",
                                                        "children": [
                                                            {
                                                                "text": "Fill",
                                                                "a_attr": {
                                                                    "style": ""
                                                                },
                                                                "id": "j5_6",
                                                                "children": [
                                                                    {
                                                                        "text": "CssParameter",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_7",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "ogc:Filter",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j5_8",
                                                        "children": [
                                                            {
                                                                "text": "ogc:PropertyIsEqualTo",
                                                                "a_attr": {
                                                                    "style": ""
                                                                },
                                                                "id": "j5_9",
                                                                "children": [
                                                                    {
                                                                        "text": "ogc:PropertyName",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_10",
                                                                        "children": []
                                                                    },
                                                                    {
                                                                        "text": "ogc:Literal",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_11",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "Name",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j5_12",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    "fileName": "OGC GetStyle.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "OGC GetStyle"
                }
            ],
            "libraries": [],
            "resourcesIn": [],
            "resourcesOut": [
                {
                    "id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
                    "resourceType": "HTTP",
                    "organization": "OGC",
                    "resourceName": "OGC GetStyle",
                    "description": "Get Styles Information",
                    "url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
                    "urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "layers",
                            "name": "layers",
                            "type": "string",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "GBR_BGS_625k_BA",
                            "attributeType": "input",
                            "description": "structure id",
                            "from": "input"
                        },
                        {
                            "label": "version",
                            "name": "version",
                            "type": "string",
                            "value": "1.1.1",
                            "required": true,
                            "shown": false,
                            "example": "1.1.1",
                            "attributeType": "input",
                            "description": "version",
                            "from": "default"
                        },
                        {
                            "label": "REQUEST",
                            "name": "REQUEST",
                            "type": "string",
                            "value": "GetStyles",
                            "required": true,
                            "shown": false,
                            "example": "GetMap",
                            "attributeType": "input",
                            "description": "GetStyles",
                            "from": "default"
                        },
                        {
                            "label": "SERVICE",
                            "name": "SERVICE",
                            "type": "string",
                            "value": "WMS",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "SERVICE",
                            "from": "default"
                        },
                        {
                            "label": "format",
                            "name": "format",
                            "type": "string",
                            "value": "text/xml",
                            "required": true,
                            "shown": false,
                            "example": "text/xml",
                            "attributeType": "input",
                            "description": "format",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "Name",
                            "name": "Name",
                            "type": "string"
                        },
                        {
                            "label": "ogc:PropertyName",
                            "name": "ogc:PropertyName",
                            "type": "string"
                        },
                        {
                            "label": "ogc:Literal",
                            "name": "ogc:Literal",
                            "type": "string"
                        },
                        {
                            "label": "CssParameter",
                            "name": "CssParameter",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "XML",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<StyledLayerDescriptor>\r\n\t\t\t\t<NamedLayer>\r\n\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t<UserStyle>\r\n\t\t\t\t\t\t<Rule>\r\n\t\t\t\t\t\t\t<ogc:Filter>\r\n\t\t\t\t\t\t\t\t<ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t\t\t<ogc:PropertyName></ogc:PropertyName>\r\n\t\t\t\t\t\t\t\t\t<ogc:Literal></ogc:Literal>\r\n\t\t\t\t\t\t\t\t</ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t</ogc:Filter>\r\n\t\t\t\t\t\t\t<PolygonSymbolizer>\r\n\t\t\t\t\t\t\t\t<Fill>\r\n\t\t\t\t\t\t\t\t\t<CssParameter></CssParameter>\r\n\t\t\t\t\t\t\t\t</Fill>\r\n\t\t\t\t\t\t\t</PolygonSymbolizer>\r\n\t\t\t\t\t\t</Rule>\r\n\t\t\t\t\t</UserStyle>\r\n\t\t\t\t</NamedLayer>\r\n\t\t\t</StyledLayerDescriptor>",
                    "jsUrlReturnFileSchema": {
                        "text": "StyledLayerDescriptor",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j5_1",
                        "children": [
                            {
                                "text": "NamedLayer",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j5_2",
                                "children": [
                                    {
                                        "text": "UserStyle",
                                        "a_attr": {
                                            "style": "background-color: rgb(205, 165, 10) !important"
                                        },
                                        "id": "j5_3",
                                        "children": [
                                            {
                                                "text": "Rule",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j5_4",
                                                "children": [
                                                    {
                                                        "text": "PolygonSymbolizer",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j5_5",
                                                        "children": [
                                                            {
                                                                "text": "Fill",
                                                                "a_attr": {
                                                                    "style": ""
                                                                },
                                                                "id": "j5_6",
                                                                "children": [
                                                                    {
                                                                        "text": "CssParameter",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_7",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "ogc:Filter",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j5_8",
                                                        "children": [
                                                            {
                                                                "text": "ogc:PropertyIsEqualTo",
                                                                "a_attr": {
                                                                    "style": ""
                                                                },
                                                                "id": "j5_9",
                                                                "children": [
                                                                    {
                                                                        "text": "ogc:PropertyName",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_10",
                                                                        "children": []
                                                                    },
                                                                    {
                                                                        "text": "ogc:Literal",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_11",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "Name",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j5_12",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    "fileName": "OGC GetStyle.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "OGC GetStyle"
                }
            ],
            "font": {
                "align": "left"
            }
        },
        {
            "id": "837fecb6-8188-4621-b26a-7d5067ef0f69",
            "x": 411.4062500000001,
            "y": -17.875000000000007,
            "label": "",
            "timestamp": 1477386259576,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "capabilities.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "17201697-1b9b-49c0-a403-6c2f586e039b",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "layers.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "d079b9ee-6a01-2c1a-9882-4c770294e220",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "090f04f8-7aa4-dbce-5f4d-c59b6e17583d",
                    "act": "Code",
                    "val": "xquery version \"3.0\";\n\nlet $filename := \"layers.xml\"\nlet $doc := doc(\"capabilities.xml\")\n\nlet $target-directory := \"C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\\"\nlet $target-path := concat($target-directory, $filename)\n\nlet $name := $doc//Capability/Layer/Layer[3]/Name\nlet $title := $doc//Capability/Layer/Layer[3]/Title\nlet $boudingbox := $doc//Capability/Layer/Layer[3]/BoundingBox[@SRS='EPSG:4326']\n\nlet $source-doc := \n        <British>\n        <layers>{data($name)}</layers>\n        {$title}\n        <BBOX>{data($boudingbox/@minx)},{data($boudingbox/@miny)},{data($boudingbox/@maxx)},{data($boudingbox/@maxy)}</BBOX>\n        </British>\n\nreturn \n    file:serialize($source-doc, $target-path, (\"omit-xml-declaration=yes\", \"indent=yes\"))",
                    "codeType": "xquery",
                    "codeName": "getLayers.xql",
                    "inputFileNames": [
                        "capabilities.xml"
                    ],
                    "outputFileNames": [
                        "layers.xml"
                    ],
                    "outputFileTypes": [
                        "XML"
                    ]
                }
            ]
        },
        {
            "id": "50d00d2b-c1c2-44a2-ba66-136ffcae1cc3",
            "x": 276.4062500000001,
            "y": -105.87500000000003,
            "label": "",
            "timestamp": 1477387155271,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
                    "resourceType": "HTTP",
                    "organization": "OGC",
                    "resourceName": "OGC GetStyle",
                    "description": "Get Styles Information",
                    "url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
                    "urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "layers",
                            "name": "layers",
                            "type": "string",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "GBR_BGS_625k_BA",
                            "attributeType": "input",
                            "description": "structure id",
                            "from": "input"
                        },
                        {
                            "label": "version",
                            "name": "version",
                            "type": "string",
                            "value": "1.1.1",
                            "required": true,
                            "shown": false,
                            "example": "1.1.1",
                            "attributeType": "input",
                            "description": "version",
                            "from": "default"
                        },
                        {
                            "label": "REQUEST",
                            "name": "REQUEST",
                            "type": "string",
                            "value": "GetStyles",
                            "required": true,
                            "shown": false,
                            "example": "GetMap",
                            "attributeType": "input",
                            "description": "GetStyles",
                            "from": "default"
                        },
                        {
                            "label": "SERVICE",
                            "name": "SERVICE",
                            "type": "string",
                            "value": "WMS",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "SERVICE",
                            "from": "default"
                        },
                        {
                            "label": "format",
                            "name": "format",
                            "type": "string",
                            "value": "text/xml",
                            "required": true,
                            "shown": false,
                            "example": "text/xml",
                            "attributeType": "input",
                            "description": "format",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "Name",
                            "name": "Name",
                            "type": "string"
                        },
                        {
                            "label": "ogc:PropertyName",
                            "name": "ogc:PropertyName",
                            "type": "string"
                        },
                        {
                            "label": "ogc:Literal",
                            "name": "ogc:Literal",
                            "type": "string"
                        },
                        {
                            "label": "CssParameter",
                            "name": "CssParameter",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "XML",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<StyledLayerDescriptor>\r\n\t\t\t\t<NamedLayer>\r\n\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t<UserStyle>\r\n\t\t\t\t\t\t<Rule>\r\n\t\t\t\t\t\t\t<ogc:Filter>\r\n\t\t\t\t\t\t\t\t<ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t\t\t<ogc:PropertyName></ogc:PropertyName>\r\n\t\t\t\t\t\t\t\t\t<ogc:Literal></ogc:Literal>\r\n\t\t\t\t\t\t\t\t</ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t</ogc:Filter>\r\n\t\t\t\t\t\t\t<PolygonSymbolizer>\r\n\t\t\t\t\t\t\t\t<Fill>\r\n\t\t\t\t\t\t\t\t\t<CssParameter></CssParameter>\r\n\t\t\t\t\t\t\t\t</Fill>\r\n\t\t\t\t\t\t\t</PolygonSymbolizer>\r\n\t\t\t\t\t\t</Rule>\r\n\t\t\t\t\t</UserStyle>\r\n\t\t\t\t</NamedLayer>\r\n\t\t\t</StyledLayerDescriptor>",
                    "jsUrlReturnFileSchema": {
                        "text": "StyledLayerDescriptor",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j5_1",
                        "children": [
                            {
                                "text": "NamedLayer",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j5_2",
                                "children": [
                                    {
                                        "text": "UserStyle",
                                        "a_attr": {
                                            "style": "background-color: rgb(205, 165, 10) !important"
                                        },
                                        "id": "j5_3",
                                        "children": [
                                            {
                                                "text": "Rule",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j5_4",
                                                "children": [
                                                    {
                                                        "text": "PolygonSymbolizer",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j5_5",
                                                        "children": [
                                                            {
                                                                "text": "Fill",
                                                                "a_attr": {
                                                                    "style": ""
                                                                },
                                                                "id": "j5_6",
                                                                "children": [
                                                                    {
                                                                        "text": "CssParameter",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_7",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "ogc:Filter",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j5_8",
                                                        "children": [
                                                            {
                                                                "text": "ogc:PropertyIsEqualTo",
                                                                "a_attr": {
                                                                    "style": ""
                                                                },
                                                                "id": "j5_9",
                                                                "children": [
                                                                    {
                                                                        "text": "ogc:PropertyName",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_10",
                                                                        "children": []
                                                                    },
                                                                    {
                                                                        "text": "ogc:Literal",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_11",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "Name",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j5_12",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    "fileName": "OGC GetStyle.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "OGC GetStyle"
                },
                {
                    "urlReturnFileName": "layers.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "d079b9ee-6a01-2c1a-9882-4c770294e220",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "styles.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
                    "act": "Resource",
                    "inputFileNames": [],
                    "outputFileNames": [
                        "styles.xml"
                    ],
                    "outputFileTypes": [
                        "XML"
                    ],
                    "resultMethod": "Append",
                    "webservices": [],
                    "targetResource": {
                        "id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
                        "resourceType": "HTTP",
                        "organization": "OGC",
                        "resourceName": "OGC GetStyle",
                        "description": "Get Styles Information",
                        "url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
                        "urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
                        "method": "GET",
                        "attributes": [
                            {
                                "label": "layers",
                                "name": "layers",
                                "type": "string",
                                "value": "layers",
                                "required": true,
                                "shown": true,
                                "example": "GBR_BGS_625k_BA",
                                "attributeType": "input",
                                "description": "structure id",
                                "from": "layers.xml"
                            },
                            {
                                "label": "version",
                                "name": "version",
                                "type": "string",
                                "value": "1.1.1",
                                "required": true,
                                "shown": false,
                                "example": "1.1.1",
                                "attributeType": "input",
                                "description": "version",
                                "from": "default"
                            },
                            {
                                "label": "REQUEST",
                                "name": "REQUEST",
                                "type": "string",
                                "value": "GetStyles",
                                "required": true,
                                "shown": false,
                                "example": "GetMap",
                                "attributeType": "input",
                                "description": "GetStyles",
                                "from": "default"
                            },
                            {
                                "label": "SERVICE",
                                "name": "SERVICE",
                                "type": "string",
                                "value": "WMS",
                                "required": true,
                                "shown": false,
                                "example": "WMS",
                                "attributeType": "input",
                                "description": "SERVICE",
                                "from": "default"
                            },
                            {
                                "label": "format",
                                "name": "format",
                                "type": "string",
                                "value": "text/xml",
                                "required": true,
                                "shown": false,
                                "example": "text/xml",
                                "attributeType": "input",
                                "description": "format",
                                "from": "default"
                            }
                        ],
                        "outAttributes": [
                            {
                                "label": "Name",
                                "name": "Name",
                                "type": "string"
                            },
                            {
                                "label": "ogc:PropertyName",
                                "name": "ogc:PropertyName",
                                "type": "string"
                            },
                            {
                                "label": "ogc:Literal",
                                "name": "ogc:Literal",
                                "type": "string"
                            },
                            {
                                "label": "CssParameter",
                                "name": "CssParameter",
                                "type": "string"
                            }
                        ],
                        "methodReturnFileType": "XML",
                        "urlReturnFileType": "XML",
                        "urlReturnFileSchema": "<StyledLayerDescriptor>\r\n\t\t\t\t<NamedLayer>\r\n\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t<UserStyle>\r\n\t\t\t\t\t\t<Rule>\r\n\t\t\t\t\t\t\t<ogc:Filter>\r\n\t\t\t\t\t\t\t\t<ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t\t\t<ogc:PropertyName></ogc:PropertyName>\r\n\t\t\t\t\t\t\t\t\t<ogc:Literal></ogc:Literal>\r\n\t\t\t\t\t\t\t\t</ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t</ogc:Filter>\r\n\t\t\t\t\t\t\t<PolygonSymbolizer>\r\n\t\t\t\t\t\t\t\t<Fill>\r\n\t\t\t\t\t\t\t\t\t<CssParameter></CssParameter>\r\n\t\t\t\t\t\t\t\t</Fill>\r\n\t\t\t\t\t\t\t</PolygonSymbolizer>\r\n\t\t\t\t\t\t</Rule>\r\n\t\t\t\t\t</UserStyle>\r\n\t\t\t\t</NamedLayer>\r\n\t\t\t</StyledLayerDescriptor>",
                        "jsUrlReturnFileSchema": {
                            "text": "StyledLayerDescriptor",
                            "a_attr": {
                                "style": "background-color: rgb(205, 165, 10) !important"
                            },
                            "id": "j5_1",
                            "children": [
                                {
                                    "text": "NamedLayer",
                                    "a_attr": {
                                        "style": ""
                                    },
                                    "id": "j5_2",
                                    "children": [
                                        {
                                            "text": "UserStyle",
                                            "a_attr": {
                                                "style": "background-color: rgb(205, 165, 10) !important"
                                            },
                                            "id": "j5_3",
                                            "children": [
                                                {
                                                    "text": "Rule",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j5_4",
                                                    "children": [
                                                        {
                                                            "text": "PolygonSymbolizer",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j5_5",
                                                            "children": [
                                                                {
                                                                    "text": "Fill",
                                                                    "a_attr": {
                                                                        "style": ""
                                                                    },
                                                                    "id": "j5_6",
                                                                    "children": [
                                                                        {
                                                                            "text": "CssParameter",
                                                                            "a_attr": {
                                                                                "style": ""
                                                                            },
                                                                            "id": "j5_7",
                                                                            "children": []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "text": "ogc:Filter",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j5_8",
                                                            "children": [
                                                                {
                                                                    "text": "ogc:PropertyIsEqualTo",
                                                                    "a_attr": {
                                                                        "style": ""
                                                                    },
                                                                    "id": "j5_9",
                                                                    "children": [
                                                                        {
                                                                            "text": "ogc:PropertyName",
                                                                            "a_attr": {
                                                                                "style": ""
                                                                            },
                                                                            "id": "j5_10",
                                                                            "children": []
                                                                        },
                                                                        {
                                                                            "text": "ogc:Literal",
                                                                            "a_attr": {
                                                                                "style": ""
                                                                            },
                                                                            "id": "j5_11",
                                                                            "children": []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "text": "Name",
                                            "a_attr": {
                                                "style": ""
                                            },
                                            "id": "j5_12",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        "fileName": "OGC GetStyle.xml",
                        "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                        "urlReturnFileName": "OGC GetStyle"
                    }
                }
            ]
        },
        {
            "id": "4ae5698c-1b27-4463-8d2c-00ea9d336e6b",
            "x": 128.40625000000006,
            "y": -103.87500000000003,
            "label": "",
            "timestamp": 1477387280606,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "styles.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "featuretypes.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "d5332972-4533-5790-7cbd-48bda91f8cfb",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "d5332972-4533-5790-7cbd-48bda91f8cfb",
                    "act": "Code",
                    "val": "\t\nxquery version \"3.0\";\n\ndeclare namespace sld = \"http://www.opengis.net/sld\";\ndeclare namespace gml = \"http://www.w3.org/2001/XMLSchema\";\ndeclare namespace ogc = \"http://www.opengis.net/ogc\";\ndeclare namespace xlink = \"http://www.w3.org/1999/xlink\";\ndeclare namespace xsi = \"http://www.w3.org/2001/XMLSchema-instance\";\ndeclare namespace schemaLocation = \"http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd\";\n\nlet $filename := \"featuretypes.xml\"\nlet $doc := doc(\"styles.xml\")\n\nlet $target-directory := \"C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\\"\nlet $target-path := concat($target-directory, $filename)\n\nlet $rows := for $rule in $doc//sld:Rule\nwhere (exists($rule//sld:Name)) \nreturn <FeatureType>\n        <Literal>{$rule//ogc:Literal/text()}</Literal>\n        <CssParameter>{$rule//sld:CssParameter/text()}</CssParameter>\n       </FeatureType>\n\nlet $source-doc :=\n    <FeatureTypes>\n        {$rows}\n    </FeatureTypes>\n\nreturn \n    file:serialize($source-doc, $target-path, (\"omit-xml-declaration=yes\", \"indent=yes\"))",
                    "codeType": "xquery",
                    "codeName": "getFeatures.xql",
                    "inputFileNames": [
                        "styles.xml"
                    ],
                    "outputFileNames": [
                        "featuretypes.xml"
                    ],
                    "outputFileTypes": [
                        "XML"
                    ]
                }
            ]
        },
        {
            "id": "8dc07a5a-ea06-4160-8ca6-43a79e6340f8",
            "x": -71.55243189000043,
            "y": -105.28562701000011,
            "label": "",
            "timestamp": 1477387359489,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "featuretypes.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "d5332972-4533-5790-7cbd-48bda91f8cfb",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "layertable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "7716be38-850e-c8b2-0ed9-a4224ff90530",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "7716be38-850e-c8b2-0ed9-a4224ff90530",
                    "act": "Code",
                    "val": "import xml.etree.ElementTree\n\noutputFile = open('layertable.csv', 'w')\noutputFile.write('FeatureType,wiki,color\\n')\n\ne = xml.etree.ElementTree.parse('featuretypes.xml').getroot()\n\n#print e;\nfor feature in e.findall('FeatureType'):\n\tif (feature.find('Literal').text == None): continue\n\tfeatureType = feature.find('Literal').text.lower().title();\n\twiki = featureType.lower().title()\n\twiki = wiki.replace(' ', '_')\n\twiki = \"https://en.wikipedia.org/wiki/\" + wiki;\n\tcolor = feature.find('CssParameter').text\n\toutputFile.write(featureType + ',' + wiki + ',' + color + '\\n')\n\t\noutputFile.close();",
                    "codeType": "python",
                    "codeName": "changeToTable.py",
                    "inputFileNames": [
                        "featuretypes.xml"
                    ],
                    "outputFileNames": [
                        "layertable.csv"
                    ],
                    "outputFileTypes": [
                        "CSV"
                    ]
                }
            ]
        },
        {
            "id": "5d4f8e0a-1cb4-4b02-97e3-3fc2f47bdacb",
            "x": 549.8716672093462,
            "y": 177.57803762121594,
            "label": "Geotime Spark\n",
            "timestamp": 1478193817141,
            "type": "data",
            "image": "image/data.png",
            "shape": "image",
            "resources": [
                {
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "resourceType": "HTTP",
                    "organization": "geotime.tw.rpi.edu",
                    "resourceName": "Geotime Spark",
                    "description": "Geotime Spark service",
                    "url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
                    "urlExample": "",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "query",
                            "name": "query",
                            "type": "string",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
                            "attributeType": "input",
                            "description": "query",
                            "from": "input"
                        },
                        {
                            "label": "output",
                            "name": "output",
                            "type": "string",
                            "value": "json",
                            "required": true,
                            "shown": false,
                            "example": "",
                            "attributeType": "input",
                            "description": "result type",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "datatype",
                            "name": "datatype",
                            "type": "string"
                        },
                        {
                            "label": "type",
                            "name": "type",
                            "type": "string"
                        },
                        {
                            "label": "value",
                            "name": "value",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "JSON",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<Geotime&#x20;Spark>\r\n\t\t\t\t<head>\r\n\t\t\t\t\t<vars></vars>\r\n\t\t\t\t</head>\r\n\t\t\t\t<results>\r\n\t\t\t\t\t<bindings>\r\n\t\t\t\t\t\t<gsspLabel>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</gsspLabel>\r\n\t\t\t\t\t\t<primaryGuidingCriterion>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</primaryGuidingCriterion>\r\n\t\t\t\t\t\t<coordinates>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</coordinates>\r\n\t\t\t\t\t\t<age>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</age>\r\n\t\t\t\t\t\t<detailedConceptName>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</detailedConceptName>\r\n\t\t\t\t\t</bindings>\r\n\t\t\t\t</results>\r\n\t\t\t</Geotime&#x20;Spark>",
                    "jsUrlReturnFileSchema": {
                        "text": "Geotime&#x20;Spark",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j46_1",
                        "children": [
                            {
                                "text": "head",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j46_2",
                                "children": [
                                    {
                                        "text": "vars",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j46_3",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "text": "results",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j46_4",
                                "children": [
                                    {
                                        "text": "bindings",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j46_5",
                                        "children": [
                                            {
                                                "text": "primaryGuidingCriterion",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_6",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_7",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_8",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_9",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "coordinates",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_10",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_11",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_12",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_13",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "detailedConceptName",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_14",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_15",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_16",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_17",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "gsspLabel",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_18",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_19",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_20",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_21",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "age",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_22",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_23",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_24",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_25",
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "fileName": "Geotime Spark.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "Geotime Spark",
                    "wrapper": {
                        "wrapperName": "jsonTOxmlWrapper"
                    }
                }
            ],
            "libraries": [],
            "resourcesIn": [],
            "resourcesOut": [
                {
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "resourceType": "HTTP",
                    "organization": "geotime.tw.rpi.edu",
                    "resourceName": "Geotime Spark",
                    "description": "Geotime Spark service",
                    "url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
                    "urlExample": "",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "query",
                            "name": "query",
                            "type": "string",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
                            "attributeType": "input",
                            "description": "query",
                            "from": "input"
                        },
                        {
                            "label": "output",
                            "name": "output",
                            "type": "string",
                            "value": "json",
                            "required": true,
                            "shown": false,
                            "example": "",
                            "attributeType": "input",
                            "description": "result type",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "datatype",
                            "name": "datatype",
                            "type": "string"
                        },
                        {
                            "label": "type",
                            "name": "type",
                            "type": "string"
                        },
                        {
                            "label": "value",
                            "name": "value",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "JSON",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<Geotime&#x20;Spark>\r\n\t\t\t\t<head>\r\n\t\t\t\t\t<vars></vars>\r\n\t\t\t\t</head>\r\n\t\t\t\t<results>\r\n\t\t\t\t\t<bindings>\r\n\t\t\t\t\t\t<gsspLabel>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</gsspLabel>\r\n\t\t\t\t\t\t<primaryGuidingCriterion>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</primaryGuidingCriterion>\r\n\t\t\t\t\t\t<coordinates>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</coordinates>\r\n\t\t\t\t\t\t<age>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</age>\r\n\t\t\t\t\t\t<detailedConceptName>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</detailedConceptName>\r\n\t\t\t\t\t</bindings>\r\n\t\t\t\t</results>\r\n\t\t\t</Geotime&#x20;Spark>",
                    "jsUrlReturnFileSchema": {
                        "text": "Geotime&#x20;Spark",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j46_1",
                        "children": [
                            {
                                "text": "head",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j46_2",
                                "children": [
                                    {
                                        "text": "vars",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j46_3",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "text": "results",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j46_4",
                                "children": [
                                    {
                                        "text": "bindings",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j46_5",
                                        "children": [
                                            {
                                                "text": "primaryGuidingCriterion",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_6",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_7",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_8",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_9",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "coordinates",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_10",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_11",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_12",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_13",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "detailedConceptName",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_14",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_15",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_16",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_17",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "gsspLabel",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_18",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_19",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_20",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_21",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "age",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_22",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_23",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_24",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_25",
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "fileName": "Geotime Spark.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "Geotime Spark",
                    "wrapper": {
                        "wrapperName": "jsonTOxmlWrapper"
                    }
                }
            ],
            "font": {
                "align": "left"
            }
        },
        {
            "id": "b49f8344-8bdb-4d89-8cc0-ab3ed48442d6",
            "x": 102.07826171999965,
            "y": 4.037402299999932,
            "label": "",
            "timestamp": 1478251130361,
            "type": "adapter",
            "image": "image/adapter.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "featuretypes.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "d5332972-4533-5790-7cbd-48bda91f8cfb",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "featuretypes.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "0e2992c5-36d7-bf14-6a51-53c325372d9d",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "0e2992c5-36d7-bf14-6a51-53c325372d9d",
                    "act": "Transformer Function",
                    "webservices": [],
                    "transformResources": [
                        {
                            "Resource": "featuretypes.xml",
                            "Type": "CSV"
                        }
                    ],
                    "outputFileNames": [
                        "featuretypes.csv"
                    ],
                    "outputFileTypes": [
                        "CSV"
                    ],
                    "transformResourcesAttributes": []
                }
            ]
        },
        {
            "id": "3c5d973b-7c10-47f7-a527-fad6f2fc5095",
            "x": 68.58316626625832,
            "y": 98.97650560011932,
            "label": "",
            "timestamp": 1478251237831,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "featuretypes.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "0e2992c5-36d7-bf14-6a51-53c325372d9d",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "title.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "7ccebdaa-cba6-8035-c533-bbe8ecde7057",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "7ccebdaa-cba6-8035-c533-bbe8ecde7057",
                    "act": "Code",
                    "val": "def lowerTitle():\n\thandle = open('featuretypes.csv', 'r');\n\ttarget = open('title.csv', 'w');\n\ttarget.write('name\\n');\n\ti = 0;\n\tfor line in handle:\n\t\tif i > 0:\n\t\t\twords = line.split(',');\n\t\t\ttarget.write(words[0].lower().title());\n\t\t\ttarget.write('\\n');\n\t\ti += 1;\nlowerTitle();",
                    "codeType": "python",
                    "codeName": "lowerTitle.py",
                    "inputFileNames": [
                        "featuretypes.csv"
                    ],
                    "outputFileNames": [
                        "title.csv"
                    ],
                    "outputFileTypes": [
                        "CSV"
                    ]
                }
            ]
        },
        {
            "id": "581cc5fb-113e-4a75-8f40-c361acd0e6ea",
            "x": 293.91849935946544,
            "y": 102.18083201255035,
            "label": "",
            "timestamp": 1478251545581,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "title.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "7ccebdaa-cba6-8035-c533-bbe8ecde7057",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "sparkQuery.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "33029995-ad2a-7012-43ef-fcf5d8248512",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "33029995-ad2a-7012-43ef-fcf5d8248512",
                    "act": "Code",
                    "val": "xquery version \"3.0\";\n\n\n(: \ndoc('apps/flowq/index/featuretypes.xml')//Literal\n:)\n\nlet $filename := \"sparkQuery.xml\"\nlet $doc := doc(\"title.xml\")\n\nlet $target-directory := \"C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\\"\nlet $target-path := concat($target-directory, $filename)\n\nlet $names := $doc//name\n\nlet $temp := \"PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> PREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX skos: <http://www.w3.org/2004/02/skos/core#> SELECT ?gsspLabel WHERE { {?chosenConcept skos:prefLabel &#34;\"\nlet $temp1 := \"&#34;@en.} union {?chosenConcept a gts:GeochronologicEra. ?chosenConcept skos:prefLabel ?name. FILTER regex(&#34;\"\nlet $temp2 := \"&#34;, ' ') FILTER regex(?name, &#34;\"\nlet $temp3 := \"&#34;)} ?chosenConcept gtrs:start ?base. ?base gts:stratotype ?gssp. ?gssp rdfs:label ?gsspLabel. }\"\n\nlet $source-content := for $name in $names\n        return \n            <query>\n                 {$temp}{$name/text()} {$temp1} {$name/text()} {$temp2}{$name/text()} {$temp3}\n            </query>\nlet $source-doc := \n    <queries>\n        {$source-content}\n    </queries>\n\nreturn \n    file:serialize($source-doc, $target-path, (\"omit-xml-declaration=yes\", \"indent=yes\"))",
                    "codeType": "xquery",
                    "codeName": "generateSpark.xql",
                    "inputFileNames": [
                        "title.csv"
                    ],
                    "outputFileNames": [
                        "sparkQuery.xml"
                    ],
                    "outputFileTypes": [
                        "XML"
                    ]
                }
            ]
        },
        {
            "id": "7d52b97b-6f30-4234-8a82-93e7f2408d38",
            "x": 185.45290557346542,
            "y": 229.51000732655035,
            "label": "",
            "timestamp": 1478251814416,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "resourceType": "HTTP",
                    "organization": "geotime.tw.rpi.edu",
                    "resourceName": "Geotime Spark",
                    "description": "Geotime Spark service",
                    "url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
                    "urlExample": "",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "query",
                            "name": "query",
                            "type": "string",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
                            "attributeType": "input",
                            "description": "query",
                            "from": "input"
                        },
                        {
                            "label": "output",
                            "name": "output",
                            "type": "string",
                            "value": "json",
                            "required": true,
                            "shown": false,
                            "example": "",
                            "attributeType": "input",
                            "description": "result type",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "datatype",
                            "name": "datatype",
                            "type": "string"
                        },
                        {
                            "label": "type",
                            "name": "type",
                            "type": "string"
                        },
                        {
                            "label": "value",
                            "name": "value",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "JSON",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<Geotime&#x20;Spark>\r\n\t\t\t\t<head>\r\n\t\t\t\t\t<vars></vars>\r\n\t\t\t\t</head>\r\n\t\t\t\t<results>\r\n\t\t\t\t\t<bindings>\r\n\t\t\t\t\t\t<gsspLabel>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</gsspLabel>\r\n\t\t\t\t\t\t<primaryGuidingCriterion>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</primaryGuidingCriterion>\r\n\t\t\t\t\t\t<coordinates>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</coordinates>\r\n\t\t\t\t\t\t<age>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</age>\r\n\t\t\t\t\t\t<detailedConceptName>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</detailedConceptName>\r\n\t\t\t\t\t</bindings>\r\n\t\t\t\t</results>\r\n\t\t\t</Geotime&#x20;Spark>",
                    "jsUrlReturnFileSchema": {
                        "text": "Geotime&#x20;Spark",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j46_1",
                        "children": [
                            {
                                "text": "head",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j46_2",
                                "children": [
                                    {
                                        "text": "vars",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j46_3",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "text": "results",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j46_4",
                                "children": [
                                    {
                                        "text": "bindings",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j46_5",
                                        "children": [
                                            {
                                                "text": "primaryGuidingCriterion",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_6",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_7",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_8",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_9",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "coordinates",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_10",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_11",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_12",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_13",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "detailedConceptName",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_14",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_15",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_16",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_17",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "gsspLabel",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_18",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_19",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_20",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_21",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "age",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_22",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_23",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_24",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_25",
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "fileName": "Geotime Spark.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "Geotime Spark",
                    "wrapper": {
                        "wrapperName": "jsonTOxmlWrapper"
                    }
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "gsspLabel.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "act": "Resource",
                    "inputFileNames": [],
                    "outputFileNames": [
                        "gsspLabel.xml"
                    ],
                    "outputFileTypes": [
                        "XML"
                    ],
                    "resultMethod": "Append",
                    "webservices": [],
                    "targetResource": {
                        "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                        "resourceType": "HTTP",
                        "organization": "geotime.tw.rpi.edu",
                        "resourceName": "Geotime Spark",
                        "description": "Geotime Spark service",
                        "url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
                        "urlExample": "",
                        "method": "GET",
                        "attributes": [
                            {
                                "label": "query",
                                "name": "query",
                                "type": "string",
                                "value": "query",
                                "required": true,
                                "shown": true,
                                "example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
                                "attributeType": "input",
                                "description": "query",
                                "from": "sparkQuery.xml"
                            },
                            {
                                "label": "output",
                                "name": "output",
                                "type": "string",
                                "value": "json",
                                "required": true,
                                "shown": false,
                                "example": "",
                                "attributeType": "input",
                                "description": "result type",
                                "from": "default"
                            }
                        ],
                        "outAttributes": [
                            {
                                "label": "datatype",
                                "name": "datatype",
                                "type": "string"
                            },
                            {
                                "label": "type",
                                "name": "type",
                                "type": "string"
                            },
                            {
                                "label": "value",
                                "name": "value",
                                "type": "string"
                            }
                        ],
                        "methodReturnFileType": "JSON",
                        "urlReturnFileType": "XML",
                        "urlReturnFileSchema": "<Geotime&#x20;Spark>\r\n\t\t\t\t<head>\r\n\t\t\t\t\t<vars></vars>\r\n\t\t\t\t</head>\r\n\t\t\t\t<results>\r\n\t\t\t\t\t<bindings>\r\n\t\t\t\t\t\t<gsspLabel>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</gsspLabel>\r\n\t\t\t\t\t\t<primaryGuidingCriterion>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</primaryGuidingCriterion>\r\n\t\t\t\t\t\t<coordinates>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</coordinates>\r\n\t\t\t\t\t\t<age>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</age>\r\n\t\t\t\t\t\t<detailedConceptName>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</detailedConceptName>\r\n\t\t\t\t\t</bindings>\r\n\t\t\t\t</results>\r\n\t\t\t</Geotime&#x20;Spark>",
                        "jsUrlReturnFileSchema": {
                            "text": "Geotime&#x20;Spark",
                            "a_attr": {
                                "style": "background-color: rgb(205, 165, 10) !important"
                            },
                            "id": "j46_1",
                            "children": [
                                {
                                    "text": "head",
                                    "a_attr": {
                                        "style": ""
                                    },
                                    "id": "j46_2",
                                    "children": [
                                        {
                                            "text": "vars",
                                            "a_attr": {
                                                "style": ""
                                            },
                                            "id": "j46_3",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "text": "results",
                                    "a_attr": {
                                        "style": ""
                                    },
                                    "id": "j46_4",
                                    "children": [
                                        {
                                            "text": "bindings",
                                            "a_attr": {
                                                "style": ""
                                            },
                                            "id": "j46_5",
                                            "children": [
                                                {
                                                    "text": "primaryGuidingCriterion",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j46_6",
                                                    "children": [
                                                        {
                                                            "text": "datatype",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_7",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "type",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_8",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "value",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_9",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "text": "coordinates",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j46_10",
                                                    "children": [
                                                        {
                                                            "text": "datatype",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_11",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "type",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_12",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "value",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_13",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "text": "detailedConceptName",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j46_14",
                                                    "children": [
                                                        {
                                                            "text": "datatype",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_15",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "type",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_16",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "value",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_17",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "text": "gsspLabel",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j46_18",
                                                    "children": [
                                                        {
                                                            "text": "datatype",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_19",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "type",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_20",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "value",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_21",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "text": "age",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j46_22",
                                                    "children": [
                                                        {
                                                            "text": "datatype",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_23",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "type",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_24",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "value",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j46_25",
                                                            "children": []
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "fileName": "Geotime Spark.xml",
                        "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                        "urlReturnFileName": "Geotime Spark",
                        "wrapper": {
                            "wrapperName": "jsonTOxmlWrapper"
                        }
                    }
                }
            ]
        },
        {
            "id": "8cb77e18-db2e-4aee-8b36-823c6d26a273",
            "x": -12.61470047053461,
            "y": 198.85668734355036,
            "label": "",
            "timestamp": 1478252163565,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "title.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "7ccebdaa-cba6-8035-c533-bbe8ecde7057",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                },
                {
                    "urlReturnFileName": "gsspLabel.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "timeTerms.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "d4abf910-68d4-bb25-5818-cfbad59f155d",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "d4abf910-68d4-bb25-5818-cfbad59f155d",
                    "act": "Code",
                    "val": "import xml.etree.ElementTree\n\ndef maptitleToLabel():\n\thandle = open('title.csv', 'r');\n\ttarget = open('timeTerms.csv', 'w');\n\ttarget.write('\"FeatureType\",\"terms\"\\n');\n\n\te = xml.etree.ElementTree.parse('gsspLabel.xml').getroot();\n\thandle.readline().strip();\n\n\t#print e;\n\tfor feature in e.findall('results'):\n\t\tfirst = handle.readline().strip();\n\t\tif (feature.find('bindings/gsspLabel/value') == None):\n\t\t\ttarget.write(first + ',' + '\"\"' + '\\n')\n\t\telse:\n\t\t\tsecond = feature.find('bindings/gsspLabel/value').text;\n\t\t\ttarget.write(first + ',\"' + second + '\"\\n')\n\ttarget.close();\nmaptitleToLabel();",
                    "codeType": "python",
                    "codeName": "maptitleToLabel.py",
                    "inputFileNames": [
                        "title.csv",
                        "gsspLabel.xml"
                    ],
                    "outputFileNames": [
                        "timeTerms.csv"
                    ],
                    "outputFileTypes": [
                        "CSV"
                    ]
                }
            ]
        },
        {
            "id": "b63c2ca4-d243-454d-8fb2-a1ecf0a43ffe",
            "x": -78.63723581853462,
            "y": -8.642709464449657,
            "label": "",
            "timestamp": 1478256113579,
            "type": "fusion",
            "image": "image/fusion.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "layertable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "7716be38-850e-c8b2-0ed9-a4224ff90530",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                },
                {
                    "urlReturnFileName": "timeTerms.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "d4abf910-68d4-bb25-5818-cfbad59f155d",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "table.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "9eb6b017-90c2-7cfa-876c-05727f5d283d",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "9eb6b017-90c2-7cfa-876c-05727f5d283d",
                    "act": "Combine",
                    "matcher": "S-Match",
                    "identifier": "Gordian",
                    "outputFileNames": [
                        "table.csv"
                    ],
                    "outputFileTypes": [
                        "CSV"
                    ]
                }
            ]
        },
        {
            "id": "d7cd0a5f-cc31-4cb7-8898-7caaa30df6dd",
            "x": 192.52674864646542,
            "y": 319.11201958455035,
            "label": "",
            "timestamp": 1478256730115,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "resourceType": "HTTP",
                    "organization": "geotime.tw.rpi.edu",
                    "resourceName": "Geotime Spark",
                    "description": "Geotime Spark service",
                    "url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
                    "urlExample": "",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "query",
                            "name": "query",
                            "type": "string",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
                            "attributeType": "input",
                            "description": "query",
                            "from": "input"
                        },
                        {
                            "label": "output",
                            "name": "output",
                            "type": "string",
                            "value": "json",
                            "required": true,
                            "shown": false,
                            "example": "",
                            "attributeType": "input",
                            "description": "result type",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "datatype",
                            "name": "datatype",
                            "type": "string"
                        },
                        {
                            "label": "type",
                            "name": "type",
                            "type": "string"
                        },
                        {
                            "label": "value",
                            "name": "value",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "JSON",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<Geotime&#x20;Spark>\r\n\t\t\t\t<head>\r\n\t\t\t\t\t<vars></vars>\r\n\t\t\t\t</head>\r\n\t\t\t\t<results>\r\n\t\t\t\t\t<bindings>\r\n\t\t\t\t\t\t<gsspLabel>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</gsspLabel>\r\n\t\t\t\t\t\t<primaryGuidingCriterion>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</primaryGuidingCriterion>\r\n\t\t\t\t\t\t<coordinates>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</coordinates>\r\n\t\t\t\t\t\t<age>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</age>\r\n\t\t\t\t\t\t<detailedConceptName>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</detailedConceptName>\r\n\t\t\t\t\t</bindings>\r\n\t\t\t\t</results>\r\n\t\t\t</Geotime&#x20;Spark>",
                    "jsUrlReturnFileSchema": {
                        "text": "Geotime&#x20;Spark",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j6_1",
                        "children": [
                            {
                                "text": "head",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j6_2",
                                "children": [
                                    {
                                        "text": "vars",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j6_3",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "text": "results",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j6_4",
                                "children": [
                                    {
                                        "text": "bindings",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j6_5",
                                        "children": [
                                            {
                                                "text": "primaryGuidingCriterion",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j6_6",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_7",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_8",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_9",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "coordinates",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j6_10",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_11",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_12",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_13",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "detailedConceptName",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j6_14",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_15",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_16",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_17",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "gsspLabel",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j6_18",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_19",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_20",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_21",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "age",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j6_22",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_23",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_24",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j6_25",
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "fileName": "Geotime Spark.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "Geotime Spark",
                    "wrapper": {
                        "wrapperName": "jsonTOxmlWrapper"
                    }
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "ageTable.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "act": "Resource",
                    "inputFileNames": [],
                    "outputFileNames": [
                        "ageTable.xml"
                    ],
                    "outputFileTypes": [
                        "XML"
                    ],
                    "resultMethod": "Append",
                    "webservices": [],
                    "targetResource": {
                        "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                        "resourceType": "HTTP",
                        "organization": "geotime.tw.rpi.edu",
                        "resourceName": "Geotime Spark",
                        "description": "Geotime Spark service",
                        "url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
                        "urlExample": "",
                        "method": "GET",
                        "attributes": [
                            {
                                "label": "query",
                                "name": "query",
                                "type": "string",
                                "value": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#>  PREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>  PREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#> PREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#>  PREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#> PREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#> PREFIX skos: <http://www.w3.org/2004/02/skos/core#>   SELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName WHERE  { ?base gts:stratotype ?gssp;       tm:position ?baseTime. ?gssp rdfs:label ?gsspLabel;       gts:primaryGuidingCriterion ?primaryGuidingCriterion;       sam:shape ?gsspLocation. ?gsspLocation gm:position ?gsspPosition. ?gsspPosition gm:coordinates ?coordinates. ?baseTime tm:value ?age. OPTIONAL { ?base gtrs:positionalUncertainty ?baseTimeUncertainty. ?baseTimeUncertainty basic:amount ?ageUncertainty. } { ?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;                        gtrs:start ?base. } UNION { ?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;                        gtrs:start ?base. } UNION { ?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;                        gtrs:start ?base. } UNION { ?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;                        gtrs:start ?base. } ?lowestRankConcept skos:prefLabel ?detailedConceptName FILTER (lang(?detailedConceptName) = \"en\" ) } ORDER BY ?age",
                                "required": true,
                                "shown": true,
                                "example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
                                "attributeType": "input",
                                "description": "query",
                                "from": "input"
                            },
                            {
                                "label": "output",
                                "name": "output",
                                "type": "string",
                                "value": "json",
                                "required": true,
                                "shown": false,
                                "example": "",
                                "attributeType": "input",
                                "description": "result type",
                                "from": "default"
                            }
                        ],
                        "outAttributes": [
                            {
                                "label": "datatype",
                                "name": "datatype",
                                "type": "string"
                            },
                            {
                                "label": "type",
                                "name": "type",
                                "type": "string"
                            },
                            {
                                "label": "value",
                                "name": "value",
                                "type": "string"
                            }
                        ],
                        "methodReturnFileType": "JSON",
                        "urlReturnFileType": "XML",
                        "urlReturnFileSchema": "<Geotime&#x20;Spark>\r\n\t\t\t\t<head>\r\n\t\t\t\t\t<vars></vars>\r\n\t\t\t\t</head>\r\n\t\t\t\t<results>\r\n\t\t\t\t\t<bindings>\r\n\t\t\t\t\t\t<gsspLabel>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</gsspLabel>\r\n\t\t\t\t\t\t<primaryGuidingCriterion>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</primaryGuidingCriterion>\r\n\t\t\t\t\t\t<coordinates>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</coordinates>\r\n\t\t\t\t\t\t<age>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</age>\r\n\t\t\t\t\t\t<detailedConceptName>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</detailedConceptName>\r\n\t\t\t\t\t</bindings>\r\n\t\t\t\t</results>\r\n\t\t\t</Geotime&#x20;Spark>",
                        "jsUrlReturnFileSchema": {
                            "text": "Geotime&#x20;Spark",
                            "a_attr": {
                                "style": "background-color: rgb(205, 165, 10) !important"
                            },
                            "id": "j6_1",
                            "children": [
                                {
                                    "text": "head",
                                    "a_attr": {
                                        "style": ""
                                    },
                                    "id": "j6_2",
                                    "children": [
                                        {
                                            "text": "vars",
                                            "a_attr": {
                                                "style": ""
                                            },
                                            "id": "j6_3",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "text": "results",
                                    "a_attr": {
                                        "style": ""
                                    },
                                    "id": "j6_4",
                                    "children": [
                                        {
                                            "text": "bindings",
                                            "a_attr": {
                                                "style": ""
                                            },
                                            "id": "j6_5",
                                            "children": [
                                                {
                                                    "text": "primaryGuidingCriterion",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j6_6",
                                                    "children": [
                                                        {
                                                            "text": "datatype",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_7",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "type",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_8",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "value",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_9",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "text": "coordinates",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j6_10",
                                                    "children": [
                                                        {
                                                            "text": "datatype",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_11",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "type",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_12",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "value",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_13",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "text": "detailedConceptName",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j6_14",
                                                    "children": [
                                                        {
                                                            "text": "datatype",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_15",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "type",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_16",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "value",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_17",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "text": "gsspLabel",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j6_18",
                                                    "children": [
                                                        {
                                                            "text": "datatype",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_19",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "type",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_20",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "value",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_21",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "text": "age",
                                                    "a_attr": {
                                                        "style": ""
                                                    },
                                                    "id": "j6_22",
                                                    "children": [
                                                        {
                                                            "text": "datatype",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_23",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "type",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_24",
                                                            "children": []
                                                        },
                                                        {
                                                            "text": "value",
                                                            "a_attr": {
                                                                "style": ""
                                                            },
                                                            "id": "j6_25",
                                                            "children": []
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "fileName": "Geotime Spark.xml",
                        "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                        "urlReturnFileName": "Geotime Spark",
                        "wrapper": {
                            "wrapperName": "jsonTOxmlWrapper"
                        }
                    }
                }
            ]
        },
        {
            "id": "25747f2f-1306-4e2a-93ac-1d9a91ffae59",
            "x": 3.890933366465392,
            "y": 316.75407189355036,
            "label": "",
            "timestamp": 1478257344755,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "ageTable.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "gsspWhole.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "3aba769f-915f-7192-4976-a11f0be3caff",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "3aba769f-915f-7192-4976-a11f0be3caff",
                    "act": "Code",
                    "val": "import xml.etree.ElementTree\nimport codecs\n\ndef extractTables():\n\ttarget = codecs.open('ageTable.xml', 'r', \"utf-8\", errors='ignore');\n\tdata = \"<AppendResultSet>\";\n\tdata += target.read();\n\tdata += \"</AppendResultSet>\";\n\ttarget.close();\n\ttarget = open('ageTable1.xml', 'w');\n\ttarget.write(data);\n\ttarget.close();\n\n\ttarget = open('gsspWhole.csv', 'w');\n\ttarget.write('terms,primaryGuidingCriterion,coordinates,detailedConceptName,age\\n');\n\te = xml.etree.ElementTree.parse('ageTable1.xml').getroot();\n\n\t#print e;\n\tfor feature in e.findall('results/bindings'):\n\t\tFeatureType = feature.find('gsspLabel/value').text;\n\t\tprimaryGuidingCriterion = feature.find('primaryGuidingCriterion/value').text.replace(\",\",\"\");\n\t\tcoordinates = feature.find('coordinates/value').text;\n\t\tdetailedConceptName = feature.find('detailedConceptName/value').text;\n\t\tage = feature.find('age/value').text;\n\t\ttarget.write(FeatureType + ',' + primaryGuidingCriterion + ',' + coordinates + ',' + detailedConceptName + ',' + age + '\\n')\n\ttarget.close();\nextractTables();",
                    "codeType": "python",
                    "codeName": "extractTables.py",
                    "inputFileNames": [
                        "ageTable.xml"
                    ],
                    "outputFileNames": [
                        "gsspWhole.csv"
                    ],
                    "outputFileTypes": [
                        "CSV"
                    ]
                }
            ]
        },
        {
            "id": "c67bb6ac-28ee-40c1-a4cd-4dcb61a48371",
            "x": -151.73361423953463,
            "y": 201.21463503455035,
            "label": "",
            "timestamp": 1478266642459,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "gsspWhole.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "3aba769f-915f-7192-4976-a11f0be3caff",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                },
                {
                    "urlReturnFileName": "table.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "9eb6b017-90c2-7cfa-876c-05727f5d283d",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "comTable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "a84df7fa-8257-e3ed-3463-8d77989723fa",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "6774c297-d527-8abd-6435-6e63af58175f",
                    "act": "Code",
                    "val": "import xml.etree.ElementTree\nimport codecs\n\ndef comTable():\n\tfile1 = open(\"table.csv\",\"r\");\n\tfile2 = open(\"gsspWhole.csv\",\"r\");\n\tmyDict = dict();\n\tfor line in file2:\n\t\twords = line.split(\",\");\n\t\tmyDict[words[0].strip()] = line;\t\n\ttarget = open(\"comTable.csv\", \"w\");\n\ttarget.write('\"FeatureType\",\"terms\",\"primaryGuidingCriterion\",\"coordinates\",\"age\",\"picture\",\"wiki\",\"color\"\\n');\n\ti = 0;\n\tfor line in file1:\n\t\tif i > 0:\n\t\t\tline=line.replace('\"','');\n\t\t\twords = line.split(\",\");\n\t\t\tFeatureType = words[0];\n\t\t\tterm = words[1].strip();\n\t\t\tif term == \"\":\n\t\t\t\tprimaryGuidingCriterion = \"\";\n\t\t\t\tcoordinates = \"\";\n\t\t\t\tage = \"\";\n\t\t\telif term != \"No Data Entered\":\n\t\t\t\tw = myDict.get(term).split(\",\");\n\t\t\t\tprimaryGuidingCriterion = w[1];\n\t\t\t\tcoordinates = w[2];\n\t\t\t\tage = w[4].strip();\n\t\t\t\tcptName = w[3];\n\t\t\t\tseeAlso = \"https://engineering.purdue.edu/Stratigraphy/images/combined/full/\" + cptName +\"_GSSP_web_June20121.jpg\";\n\t\t\t\tif cptName == 'Katian': \n\t\t\t\t\tseeAlso = \"https://engineering.purdue.edu/Stratigraphy/images/combined/full/\" + cptName +\"_GSSP_web_July20121.jpg\";\n\t\t\t\tif cptName == 'Rupelian': \n\t\t\t\t\tseeAlso = \"https://engineering.purdue.edu/Stratigraphy/images/combined/full/\" + cptName +\"_GSSP__web_June20121.jpg\";\n\t\t\t\tif cptName == 'Famennian': \n\t\t\t\t\tseeAlso = \"https://engineering.purdue.edu/Stratigraphy/images/combined/full/Famenne_GSSP_web_June20121.jpg\";\n\t\t\t\tif cptName == 'Frasnian': \n\t\t\t\t\tseeAlso = \"https://engineering.purdue.edu/Stratigraphy/images/combined/full/Frasne_GSSP_web_June20121.jpg\";\n\t\t\t\tif cptName == 'Visean': \n\t\t\t\t\tseeAlso = \"https://engineering.purdue.edu/Stratigraphy/images/combined/full/Visean_GSSP_web_Jun20121.jpg\";\n\t\t\t\tif cptName == 'Rhuddanian': \n\t\t\t\t\tseeAlso = \"https://engineering.purdue.edu/Stratigraphy/images/combined/full/Rhudd_GSSP_web_June20121.jpg\";\t\t \n\t\t\t\tif cptName == 'Ladinian': \n\t\t\t\t\tseeAlso = \"https://engineering.purdue.edu/Stratigraphy/images/combined/full/\" + cptName + \"_GSSP_web_JuJune20121.jpg\";\n\t\t\t\tif cptName == 'Piacenzian': \n\t\t\t\t\tseeAlso = \"https://engineering.purdue.edu/Stratigraphy/images/combined/full/Piazencian_GSSP_web_June20121.jpg\";\n\t\t  \n\t\t\twiki = words[2];\n\t\t\tcolor = words[3].strip();\n\t\t\ttarget.write('\"' + FeatureType + '\",\"' + term + '\",\"' + primaryGuidingCriterion + '\",\"' + coordinates + '\",\"' + age + '\",\"' + seeAlso + '\",\"' + wiki + '\",\"' + color + '\"\\n');\n\t\ti = i + 1;\n\ttarget.close();\ncomTable();",
                    "codeType": "python",
                    "codeName": "comTable.py",
                    "inputFileNames": [
                        "table.csv",
                        "gsspWhole.csv"
                    ],
                    "outputFileNames": [
                        "comTable.csv"
                    ],
                    "outputFileTypes": [
                        "CSV"
                    ]
                }
            ]
        },
        {
            "id": "c5edb536-9628-433b-9232-eeb79d892fe5",
            "x": 161.16522529922273,
            "y": 399.495447576273,
            "label": "GPlates Paleo-geographic Coordinates\n",
            "timestamp": 1479096295438,
            "type": "data",
            "image": "image/data.png",
            "shape": "image",
            "resources": [
                {
                    "id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
                    "resourceType": "HTTPS",
                    "organization": "GPlates",
                    "resourceName": "GPlates Paleo-geographic Coordinates",
                    "description": "Reconstruct the geographic locations from present day coordinates back to their paleo-positions. Each location will be assigned a plate id and moved back in time using the chosen reconstruction model.",
                    "url": "https://gws.gplates.org/reconstruct/reconstruct_points/",
                    "urlExample": "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "points",
                            "name": "points",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "95,54",
                            "attributeType": "input",
                            "description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
                            "from": "input"
                        },
                        {
                            "label": "time",
                            "name": "time",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "140",
                            "attributeType": "input",
                            "description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
                            "from": "input"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "coordinates",
                            "name": "coordinates",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "JSON",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
                    "jsUrlReturnFileSchema": {
                        "text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j5_1",
                        "children": [
                            {
                                "text": "coordinates",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j5_2",
                                "children": []
                            }
                        ]
                    },
                    "fileName": "GPlates Paleo-geographic Coordinates.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "GPlates Paleo-geographic Coordinates",
                    "wrapper": {
                        "wrapperName": "jsonTOxmlWrapper"
                    }
                }
            ],
            "libraries": [],
            "resourcesIn": [],
            "resourcesOut": [
                {
                    "id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
                    "resourceType": "HTTPS",
                    "organization": "GPlates",
                    "resourceName": "GPlates Paleo-geographic Coordinates",
                    "description": "Reconstruct the geographic locations from present day coordinates back to their paleo-positions. Each location will be assigned a plate id and moved back in time using the chosen reconstruction model.",
                    "url": "https://gws.gplates.org/reconstruct/reconstruct_points/",
                    "urlExample": "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "points",
                            "name": "points",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "95,54",
                            "attributeType": "input",
                            "description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
                            "from": "input"
                        },
                        {
                            "label": "time",
                            "name": "time",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "140",
                            "attributeType": "input",
                            "description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
                            "from": "input"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "coordinates",
                            "name": "coordinates",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "JSON",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
                    "jsUrlReturnFileSchema": {
                        "text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j5_1",
                        "children": [
                            {
                                "text": "coordinates",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j5_2",
                                "children": []
                            }
                        ]
                    },
                    "fileName": "GPlates Paleo-geographic Coordinates.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "GPlates Paleo-geographic Coordinates",
                    "wrapper": {
                        "wrapperName": "jsonTOxmlWrapper"
                    }
                }
            ],
            "font": {
                "align": "left"
            }
        },
        {
            "id": "9131b640-1d77-4493-937d-01a020ebb032",
            "x": -153.35836697639456,
            "y": 324.4929515726493,
            "label": "",
            "timestamp": 1479113995677,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "comTable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "a84df7fa-8257-e3ed-3463-8d77989723fa",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "gplates.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "92db000c-7d8e-80b7-2879-3e50d67e7cbb",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "f06e5929-bdff-d8ab-df0a-d3de100384e8",
                    "act": "Code",
                    "val": "import xml.etree.ElementTree\nimport codecs\n\ndef gplateInputTables():\n\thandle = open(\"comTable.csv\", \"r\");\n\ttarget = open(\"gplates.xml\", \"w\");\n\ttarget.write('<ResultSets>');\n\t\n\ti = 0;\n\tfor line in handle:\n\t\tif i > 0:\n\t\t\tline=line.replace('\"','');\n\t\t\twords = line.split(\",\");\n\t\t\tif words[3] != \"\":\n\t\t\t\tlong = words[3].split(\" \")[1];\n\t\t\t\tlat = words[3].split(\" \")[0];\n\t\t\t\tage = words[4];\n\t\t\t\ttarget.write('<Row>');\n\t\t\t\ttarget.write('<points>');\n\t\t\t\ttarget.write(long + \",\" + lat);\n\t\t\t\ttarget.write('</points>');\n\t\t\t\ttarget.write('<time>');\n\t\t\t\ttarget.write(age);\n\t\t\t\ttarget.write('</time>');\n\t\t\t\ttarget.write('</Row>');\n\t\ti = i + 1;\n\n\ttarget.write('</ResultSets>');\n\ttarget.close();\ngplateInputTables();",
                    "codeType": "python",
                    "codeName": "gplateInputTables.py",
                    "inputFileNames": [
                        "comTable.csv"
                    ],
                    "outputFileNames": [
                        "gplates.xml"
                    ],
                    "outputFileTypes": [
                        "XML"
                    ]
                }
            ]
        },
        {
            "id": "c1b9a719-ca3a-457c-9e5a-bfa34c770a0d",
            "x": -278.15417849471913,
            "y": 398.6290772270996,
            "label": "",
            "timestamp": 1479114098420,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
                    "resourceType": "HTTPS",
                    "organization": "GPlates",
                    "resourceName": "GPlates Paleo-geographic Coordinates",
                    "description": "Reconstruct the geographic locations from present day coordinates back to their paleo-positions. Each location will be assigned a plate id and moved back in time using the chosen reconstruction model.",
                    "url": "https://gws.gplates.org/reconstruct/reconstruct_points/",
                    "urlExample": "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "points",
                            "name": "points",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "95,54",
                            "attributeType": "input",
                            "description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
                            "from": "input"
                        },
                        {
                            "label": "time",
                            "name": "time",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "140",
                            "attributeType": "input",
                            "description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
                            "from": "input"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "coordinates",
                            "name": "coordinates",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "JSON",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
                    "jsUrlReturnFileSchema": {
                        "text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j5_1",
                        "children": [
                            {
                                "text": "coordinates",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j5_2",
                                "children": []
                            }
                        ]
                    },
                    "fileName": "GPlates Paleo-geographic Coordinates.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "GPlates Paleo-geographic Coordinates",
                    "wrapper": {
                        "wrapperName": "jsonTOxmlWrapper"
                    }
                },
                {
                    "urlReturnFileName": "gplates.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "92db000c-7d8e-80b7-2879-3e50d67e7cbb",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "jsUrlReturnFileSchema": {
                        "text": "ResultSets",
                        "a_attr": {
                            "style": ""
                        },
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {
                                "text": "Row",
                                "a_attr": {
                                    "style": ""
                                },
                                "state": {
                                    "opened": true
                                },
                                "children": [
                                    {
                                        "text": "points",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "state": {
                                            "opened": true
                                        },
                                        "children": []
                                    },
                                    {
                                        "text": "time",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "state": {
                                            "opened": true
                                        },
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "gsspCoord.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "97669900-6e50-52a1-7239-836dfa9f9b26",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
                    "act": "Resource",
                    "inputFileNames": [],
                    "outputFileNames": [
                        "gsspCoord.xml"
                    ],
                    "outputFileTypes": [
                        "XML"
                    ],
                    "resultMethod": "Append",
                    "webservices": [],
                    "targetResource": {
                        "id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
                        "resourceType": "HTTPS",
                        "organization": "GPlates",
                        "resourceName": "GPlates Paleo-geographic Coordinates",
                        "description": "Reconstruct the geographic locations from present day coordinates back to their paleo-positions. Each location will be assigned a plate id and moved back in time using the chosen reconstruction model.",
                        "url": "https://gws.gplates.org/reconstruct/reconstruct_points/",
                        "urlExample": "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140",
                        "method": "GET",
                        "attributes": [
                            {
                                "label": "points",
                                "name": "points",
                                "value": "points",
                                "required": true,
                                "shown": true,
                                "example": "95,54",
                                "attributeType": "input",
                                "description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
                                "from": "gplates.xml"
                            },
                            {
                                "label": "time",
                                "name": "time",
                                "value": "time",
                                "required": true,
                                "shown": true,
                                "example": "140",
                                "attributeType": "input",
                                "description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
                                "from": "gplates.xml"
                            }
                        ],
                        "outAttributes": [
                            {
                                "label": "coordinates",
                                "name": "coordinates",
                                "type": "string"
                            }
                        ],
                        "methodReturnFileType": "JSON",
                        "urlReturnFileType": "XML",
                        "urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
                        "jsUrlReturnFileSchema": {
                            "text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
                            "a_attr": {
                                "style": "background-color: rgb(205, 165, 10) !important"
                            },
                            "id": "j5_1",
                            "children": [
                                {
                                    "text": "coordinates",
                                    "a_attr": {
                                        "style": ""
                                    },
                                    "id": "j5_2",
                                    "children": []
                                }
                            ]
                        },
                        "fileName": "GPlates Paleo-geographic Coordinates.xml",
                        "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                        "urlReturnFileName": "GPlates Paleo-geographic Coordinates",
                        "wrapper": {
                            "wrapperName": "jsonTOxmlWrapper"
                        }
                    }
                }
            ]
        },
        {
            "id": "3e2808fc-bdd7-4871-81f3-6026b6e0b295",
            "x": -332.1875,
            "y": 199.96875,
            "label": "",
            "timestamp": 1479115250481,
            "type": "analytics",
            "image": "image/analytics.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "comTable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "a84df7fa-8257-e3ed-3463-8d77989723fa",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                },
                {
                    "urlReturnFileName": "gsspCoord.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "97669900-6e50-52a1-7239-836dfa9f9b26",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [
                {
                    "urlReturnFileName": "resTable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "3c3bade0-f943-9642-97d1-432242f55dba",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "fa5317d3-e4aa-4fd9-d354-15ba861ec252",
                    "act": "Code",
                    "val": "import xml.etree.ElementTree\nimport codecs\n\ndef combineTables():\n\thandle = open(\"comTable.csv\", \"r\");\n\te = xml.etree.ElementTree.parse('gsspCoord.xml').getroot();\n\ttarget = open(\"resTable.csv\", \"w\");\n\t\n\tlongList = list();\n\tlatList = list();\n\tfor feature in e.findall('coordinates'):\n\t\tlong = feature.find('array[1]').text;\n\t\tlat = feature.find('array[2]').text;\n\t\tlongList.append(long);\n\t\tlatList.append(lat);\n\t\n\ti = 0;\n\tj = 0;\n\tfor line in handle:\n\t\tline=line.replace('\"','');\n\t\tif i == 0:\n\t\t\twords = line.split(\",\");\n\t\t\twords.insert(4, \"Paleo Coordinates\");\n\t\t\ttarget.write(','.join(words));\n\t\telse:\n\t\t\twords = line.split(\",\");\n\t\t\tif words[1] == \"\":\n\t\t\t\twords.insert(4, \"\");\n\t\t\telse:\n\t\t\t\tprint latList[j] + \" \" + longList[j];\n\t\t\t\twords.insert(4, latList[j] + \" \" + longList[j]);\n\t\t\t\tj = j + 1;\n\t\t\ttarget.write(\",\".join(words));\n\t\ti = i + 1;\n\ttarget.close();\ncombineTables();",
                    "codeType": "python",
                    "codeName": "combineTables.py",
                    "inputFileNames": [
                        "comTable.csv",
                        "gsspCoord.xml"
                    ],
                    "outputFileNames": [
                        "resTable.csv"
                    ],
                    "outputFileTypes": [
                        "CSV"
                    ]
                }
            ]
        },
        {
            "id": "bc19e5a2-5dd0-4858-98e7-33d96713dce3",
            "x": -340.1875,
            "y": -111.03125,
            "label": "",
            "timestamp": 1479115311443,
            "type": "terminal",
            "image": "image/terminal.png",
            "shape": "image",
            "resources": [],
            "libraries": [],
            "resourcesIn": [
                {
                    "urlReturnFileName": "resTable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "3c3bade0-f943-9642-97d1-432242f55dba",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "resourcesOut": [],
            "font": {
                "align": "left"
            },
            "actions": [
                {
                    "id": "4e2862aa-fa04-9ce1-6e81-960e6ba88043",
                    "act": "print",
                    "outputFileNames": [
                        "resTable.csv"
                    ],
                    "printType": "table",
                    "resourceid": "3c3bade0-f943-9642-97d1-432242f55dba",
                    "numOfWins": "0",
                    "submit": {
                        "windowFunction": [],
                        "values": []
                    },
                    "colFuns": [
                        {
                            "functionName": "WebSite",
                            "value": "picture"
                        },
                        {
                            "functionName": "WebSite",
                            "value": "wiki"
                        },
                        {
                            "functionName": "ShowColor",
                            "value": "color"
                        }
                    ]
                }
            ]
        }
    ],
    "edges": [
        {
            "from": "f44067b0-0fa3-47ae-87c3-91ae433eb790",
            "to": "69478a0b-1892-4a89-8d2c-0ba3afffa9a1",
            "id": "639488b4-9b79-4109-b6ef-8a212f52ed18",
            "arrows": "to",
            "label": "OGC GetCapabilities\n",
            "resources": [
                {
                    "id": "17201697-1b9b-49c0-a403-6c2f586e039b",
                    "resourceType": "HTTP",
                    "organization": "OGC",
                    "resourceName": "OGC GetCapabilities",
                    "description": "Get Layer information",
                    "url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
                    "urlExample": "",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "SERVICE",
                            "name": "SERVICE",
                            "type": "string",
                            "value": "WMS",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "server name",
                            "from": "default"
                        },
                        {
                            "label": "request",
                            "name": "request",
                            "type": "string",
                            "value": "GetCapabilities",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "server name",
                            "from": "default"
                        },
                        {
                            "label": "version",
                            "name": "version",
                            "type": "string",
                            "value": "1.1.1",
                            "required": true,
                            "shown": false,
                            "example": "1.1.1",
                            "attributeType": "input",
                            "description": "version number",
                            "from": "default"
                        },
                        {
                            "label": "format",
                            "name": "format",
                            "type": "string",
                            "value": "text/html",
                            "required": true,
                            "shown": false,
                            "example": "text/html",
                            "attributeType": "input",
                            "description": "return format",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "Service",
                            "name": "Service",
                            "type": "string"
                        },
                        {
                            "label": "Request",
                            "name": "Request",
                            "type": "string"
                        },
                        {
                            "label": "Exception",
                            "name": "Exception",
                            "type": "string"
                        },
                        {
                            "label": "VendorSpecificCapabilities",
                            "name": "VendorSpecificCapabilities",
                            "type": "string"
                        },
                        {
                            "label": "Name",
                            "name": "Name",
                            "type": "string"
                        },
                        {
                            "label": "Title",
                            "name": "Title",
                            "type": "string"
                        },
                        {
                            "label": "Abstract",
                            "name": "Abstract",
                            "type": "string"
                        },
                        {
                            "label": "SRS",
                            "name": "SRS",
                            "type": "string"
                        },
                        {
                            "label": "LatLonBoundingBox",
                            "name": "LatLonBoundingBox",
                            "type": "string"
                        },
                        {
                            "label": "BoundingBox",
                            "name": "BoundingBox",
                            "type": "string"
                        },
                        {
                            "label": "Attribution",
                            "name": "Attribution",
                            "type": "string"
                        },
                        {
                            "label": "AuthorityURL",
                            "name": "AuthorityURL",
                            "type": "string"
                        },
                        {
                            "label": "Style",
                            "name": "Style",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "XML",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<WMT_MS_Capabilities>\r\n\t\t\t\t<Service></Service>\r\n\t\t\t\t<Capability>\r\n\t\t\t\t\t<Request></Request>\r\n\t\t\t\t\t<Exception></Exception>\r\n\t\t\t\t\t<VendorSpecificCapabilities></VendorSpecificCapabilities>\r\n\t\t\t\t\t<Layer>\r\n\t\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t\t<Title></Title>\r\n\t\t\t\t\t\t<Abstract></Abstract>\r\n\t\t\t\t\t\t<SRS></SRS>\r\n\t\t\t\t\t\t<LatLonBoundingBox></LatLonBoundingBox>\r\n\t\t\t\t\t\t<BoundingBox></BoundingBox>\r\n\t\t\t\t\t\t<Attribution></Attribution>\r\n\t\t\t\t\t\t<AuthorityURL></AuthorityURL>\r\n\t\t\t\t\t\t<Style></Style>\r\n\t\t\t\t\t</Layer>\r\n\t\t\t\t</Capability>\r\n\t\t\t</WMT_MS_Capabilities>",
                    "jsUrlReturnFileSchema": {
                        "text": "WMT_MS_Capabilities",
                        "a_attr": {
                            "style": ""
                        },
                        "id": "j4_1",
                        "children": [
                            {
                                "text": "Capability",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j4_2",
                                "children": [
                                    {
                                        "text": "Request",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_3",
                                        "children": []
                                    },
                                    {
                                        "text": "VendorSpecificCapabilities",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_4",
                                        "children": []
                                    },
                                    {
                                        "text": "Layer",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_5",
                                        "children": [
                                            {
                                                "text": "LatLonBoundingBox",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_6",
                                                "children": []
                                            },
                                            {
                                                "text": "SRS",
                                                "a_attr": {
                                                    "style": "background-color: rgb(205, 165, 10) !important"
                                                },
                                                "id": "j4_7",
                                                "children": []
                                            },
                                            {
                                                "text": "Abstract",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_8",
                                                "children": []
                                            },
                                            {
                                                "text": "BoundingBox",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_9",
                                                "children": []
                                            },
                                            {
                                                "text": "Title",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_10",
                                                "children": []
                                            },
                                            {
                                                "text": "AuthorityURL",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_11",
                                                "children": []
                                            },
                                            {
                                                "text": "Style",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_12",
                                                "children": []
                                            },
                                            {
                                                "text": "Attribution",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_13",
                                                "children": []
                                            },
                                            {
                                                "text": "Name",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j4_14",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "text": "Exception",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j4_15",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "text": "Service",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j4_16",
                                "children": []
                            }
                        ]
                    },
                    "fileName": "OGC GetCapabilities.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "OGC GetCapabilities"
                }
            ],
            "libraries": []
        },
        {
            "from": "69478a0b-1892-4a89-8d2c-0ba3afffa9a1",
            "to": "837fecb6-8188-4621-b26a-7d5067ef0f69",
            "id": "26249aad-fa0a-4301-a4fd-c79bfcd46372",
            "arrows": "to",
            "label": "capabilities.xml\n",
            "resources": [
                {
                    "urlReturnFileName": "capabilities.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "17201697-1b9b-49c0-a403-6c2f586e039b",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "837fecb6-8188-4621-b26a-7d5067ef0f69",
            "to": "50d00d2b-c1c2-44a2-ba66-136ffcae1cc3",
            "id": "733fbdd8-6650-4cef-8876-060b9e3e3e08",
            "arrows": "to",
            "label": "layers.xml\n",
            "resources": [
                {
                    "urlReturnFileName": "layers.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "d079b9ee-6a01-2c1a-9882-4c770294e220",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "ed56bcf7-025d-4eec-baa4-65f62c803ad4",
            "to": "50d00d2b-c1c2-44a2-ba66-136ffcae1cc3",
            "id": "32f70298-8be8-4bcd-a53f-2c32164f65a5",
            "arrows": "to",
            "label": "OGC GetStyle\n",
            "resources": [
                {
                    "id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
                    "resourceType": "HTTP",
                    "organization": "OGC",
                    "resourceName": "OGC GetStyle",
                    "description": "Get Styles Information",
                    "url": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
                    "urlExample": "http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?SERVICE=WMS&request=GetStyles&layers=GBR_BGS_625k_BA&format=text/xml&version=1.1.1",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "layers",
                            "name": "layers",
                            "type": "string",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "GBR_BGS_625k_BA",
                            "attributeType": "input",
                            "description": "structure id",
                            "from": "input"
                        },
                        {
                            "label": "version",
                            "name": "version",
                            "type": "string",
                            "value": "1.1.1",
                            "required": true,
                            "shown": false,
                            "example": "1.1.1",
                            "attributeType": "input",
                            "description": "version",
                            "from": "default"
                        },
                        {
                            "label": "REQUEST",
                            "name": "REQUEST",
                            "type": "string",
                            "value": "GetStyles",
                            "required": true,
                            "shown": false,
                            "example": "GetMap",
                            "attributeType": "input",
                            "description": "GetStyles",
                            "from": "default"
                        },
                        {
                            "label": "SERVICE",
                            "name": "SERVICE",
                            "type": "string",
                            "value": "WMS",
                            "required": true,
                            "shown": false,
                            "example": "WMS",
                            "attributeType": "input",
                            "description": "SERVICE",
                            "from": "default"
                        },
                        {
                            "label": "format",
                            "name": "format",
                            "type": "string",
                            "value": "text/xml",
                            "required": true,
                            "shown": false,
                            "example": "text/xml",
                            "attributeType": "input",
                            "description": "format",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "Name",
                            "name": "Name",
                            "type": "string"
                        },
                        {
                            "label": "ogc:PropertyName",
                            "name": "ogc:PropertyName",
                            "type": "string"
                        },
                        {
                            "label": "ogc:Literal",
                            "name": "ogc:Literal",
                            "type": "string"
                        },
                        {
                            "label": "CssParameter",
                            "name": "CssParameter",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "XML",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<StyledLayerDescriptor>\r\n\t\t\t\t<NamedLayer>\r\n\t\t\t\t\t<Name></Name>\r\n\t\t\t\t\t<UserStyle>\r\n\t\t\t\t\t\t<Rule>\r\n\t\t\t\t\t\t\t<ogc:Filter>\r\n\t\t\t\t\t\t\t\t<ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t\t\t<ogc:PropertyName></ogc:PropertyName>\r\n\t\t\t\t\t\t\t\t\t<ogc:Literal></ogc:Literal>\r\n\t\t\t\t\t\t\t\t</ogc:PropertyIsEqualTo>\r\n\t\t\t\t\t\t\t</ogc:Filter>\r\n\t\t\t\t\t\t\t<PolygonSymbolizer>\r\n\t\t\t\t\t\t\t\t<Fill>\r\n\t\t\t\t\t\t\t\t\t<CssParameter></CssParameter>\r\n\t\t\t\t\t\t\t\t</Fill>\r\n\t\t\t\t\t\t\t</PolygonSymbolizer>\r\n\t\t\t\t\t\t</Rule>\r\n\t\t\t\t\t</UserStyle>\r\n\t\t\t\t</NamedLayer>\r\n\t\t\t</StyledLayerDescriptor>",
                    "jsUrlReturnFileSchema": {
                        "text": "StyledLayerDescriptor",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j5_1",
                        "children": [
                            {
                                "text": "NamedLayer",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j5_2",
                                "children": [
                                    {
                                        "text": "UserStyle",
                                        "a_attr": {
                                            "style": "background-color: rgb(205, 165, 10) !important"
                                        },
                                        "id": "j5_3",
                                        "children": [
                                            {
                                                "text": "Rule",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j5_4",
                                                "children": [
                                                    {
                                                        "text": "PolygonSymbolizer",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j5_5",
                                                        "children": [
                                                            {
                                                                "text": "Fill",
                                                                "a_attr": {
                                                                    "style": ""
                                                                },
                                                                "id": "j5_6",
                                                                "children": [
                                                                    {
                                                                        "text": "CssParameter",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_7",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "ogc:Filter",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j5_8",
                                                        "children": [
                                                            {
                                                                "text": "ogc:PropertyIsEqualTo",
                                                                "a_attr": {
                                                                    "style": ""
                                                                },
                                                                "id": "j5_9",
                                                                "children": [
                                                                    {
                                                                        "text": "ogc:PropertyName",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_10",
                                                                        "children": []
                                                                    },
                                                                    {
                                                                        "text": "ogc:Literal",
                                                                        "a_attr": {
                                                                            "style": ""
                                                                        },
                                                                        "id": "j5_11",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "Name",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j5_12",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    "fileName": "OGC GetStyle.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "OGC GetStyle"
                }
            ],
            "libraries": []
        },
        {
            "from": "50d00d2b-c1c2-44a2-ba66-136ffcae1cc3",
            "to": "4ae5698c-1b27-4463-8d2c-00ea9d336e6b",
            "id": "79d249a1-db8c-4aa5-85bd-bb2834f830a1",
            "arrows": "to",
            "label": "styles.xml\n",
            "resources": [
                {
                    "urlReturnFileName": "styles.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "cb6c3787-32e8-4594-b833-bdbaa287342a",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "4ae5698c-1b27-4463-8d2c-00ea9d336e6b",
            "to": "8dc07a5a-ea06-4160-8ca6-43a79e6340f8",
            "id": "4eeaecf9-6b3b-44fa-b004-a996c74231af",
            "arrows": "to",
            "label": "featuretypes.xml\n",
            "resources": [
                {
                    "urlReturnFileName": "featuretypes.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "d5332972-4533-5790-7cbd-48bda91f8cfb",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "4ae5698c-1b27-4463-8d2c-00ea9d336e6b",
            "to": "b49f8344-8bdb-4d89-8cc0-ab3ed48442d6",
            "id": "0460554a-8a0a-447c-85e4-7877a0a414c8",
            "arrows": "to",
            "label": "featuretypes.xml\n",
            "resources": [
                {
                    "urlReturnFileName": "featuretypes.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "d5332972-4533-5790-7cbd-48bda91f8cfb",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "b49f8344-8bdb-4d89-8cc0-ab3ed48442d6",
            "to": "3c5d973b-7c10-47f7-a527-fad6f2fc5095",
            "id": "94e6a40c-7ed1-45c2-b587-8a3403224192",
            "arrows": "to",
            "label": "featuretypes.csv\n",
            "resources": [
                {
                    "urlReturnFileName": "featuretypes.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "0e2992c5-36d7-bf14-6a51-53c325372d9d",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "3c5d973b-7c10-47f7-a527-fad6f2fc5095",
            "to": "581cc5fb-113e-4a75-8f40-c361acd0e6ea",
            "id": "7528474e-6bab-4ed7-b4df-794debc74217",
            "arrows": "to",
            "label": "title.csv\n",
            "resources": [
                {
                    "urlReturnFileName": "title.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "7ccebdaa-cba6-8035-c533-bbe8ecde7057",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "5d4f8e0a-1cb4-4b02-97e3-3fc2f47bdacb",
            "to": "7d52b97b-6f30-4234-8a82-93e7f2408d38",
            "id": "e2778e09-df65-42dd-b30b-6f67d4ea3675",
            "arrows": "to",
            "label": "Geotime Spark\n",
            "resources": [
                {
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "resourceType": "HTTP",
                    "organization": "geotime.tw.rpi.edu",
                    "resourceName": "Geotime Spark",
                    "description": "Geotime Spark service",
                    "url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
                    "urlExample": "",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "query",
                            "name": "query",
                            "type": "string",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
                            "attributeType": "input",
                            "description": "query",
                            "from": "input"
                        },
                        {
                            "label": "output",
                            "name": "output",
                            "type": "string",
                            "value": "json",
                            "required": true,
                            "shown": false,
                            "example": "",
                            "attributeType": "input",
                            "description": "result type",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "datatype",
                            "name": "datatype",
                            "type": "string"
                        },
                        {
                            "label": "type",
                            "name": "type",
                            "type": "string"
                        },
                        {
                            "label": "value",
                            "name": "value",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "JSON",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<Geotime&#x20;Spark>\r\n\t\t\t\t<head>\r\n\t\t\t\t\t<vars></vars>\r\n\t\t\t\t</head>\r\n\t\t\t\t<results>\r\n\t\t\t\t\t<bindings>\r\n\t\t\t\t\t\t<gsspLabel>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</gsspLabel>\r\n\t\t\t\t\t\t<primaryGuidingCriterion>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</primaryGuidingCriterion>\r\n\t\t\t\t\t\t<coordinates>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</coordinates>\r\n\t\t\t\t\t\t<age>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</age>\r\n\t\t\t\t\t\t<detailedConceptName>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</detailedConceptName>\r\n\t\t\t\t\t</bindings>\r\n\t\t\t\t</results>\r\n\t\t\t</Geotime&#x20;Spark>",
                    "jsUrlReturnFileSchema": {
                        "text": "Geotime&#x20;Spark",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j46_1",
                        "children": [
                            {
                                "text": "head",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j46_2",
                                "children": [
                                    {
                                        "text": "vars",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j46_3",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "text": "results",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j46_4",
                                "children": [
                                    {
                                        "text": "bindings",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j46_5",
                                        "children": [
                                            {
                                                "text": "primaryGuidingCriterion",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_6",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_7",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_8",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_9",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "coordinates",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_10",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_11",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_12",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_13",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "detailedConceptName",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_14",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_15",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_16",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_17",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "gsspLabel",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_18",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_19",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_20",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_21",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "age",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_22",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_23",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_24",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_25",
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "fileName": "Geotime Spark.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "Geotime Spark",
                    "wrapper": {
                        "wrapperName": "jsonTOxmlWrapper"
                    }
                }
            ],
            "libraries": []
        },
        {
            "from": "581cc5fb-113e-4a75-8f40-c361acd0e6ea",
            "to": "7d52b97b-6f30-4234-8a82-93e7f2408d38",
            "id": "1a7cc42d-6cc7-4be1-8ee7-c9c46c59accd",
            "arrows": "to",
            "label": "sparkQuery.xml\n",
            "resources": [],
            "libraries": []
        },
        {
            "from": "3c5d973b-7c10-47f7-a527-fad6f2fc5095",
            "to": "8cb77e18-db2e-4aee-8b36-823c6d26a273",
            "id": "234aa39d-7a8d-4cce-9ea0-8574a6ea2b58",
            "arrows": "to",
            "label": "title.csv\n",
            "resources": [
                {
                    "urlReturnFileName": "title.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "7ccebdaa-cba6-8035-c533-bbe8ecde7057",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "7d52b97b-6f30-4234-8a82-93e7f2408d38",
            "to": "8cb77e18-db2e-4aee-8b36-823c6d26a273",
            "id": "24c770fc-6dd9-4ba0-9201-2fd6bcc6fa2a",
            "arrows": "to",
            "label": "gsspLabel.xml\n",
            "resources": [
                {
                    "urlReturnFileName": "gsspLabel.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "8dc07a5a-ea06-4160-8ca6-43a79e6340f8",
            "to": "b63c2ca4-d243-454d-8fb2-a1ecf0a43ffe",
            "id": "ee0e6738-1b4c-4b56-9df5-d4a748bb6ccc",
            "arrows": "to",
            "label": "layertable.csv\n",
            "resources": [
                {
                    "urlReturnFileName": "layertable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "7716be38-850e-c8b2-0ed9-a4224ff90530",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "8cb77e18-db2e-4aee-8b36-823c6d26a273",
            "to": "b63c2ca4-d243-454d-8fb2-a1ecf0a43ffe",
            "id": "ff1ecf1d-7690-442c-abfc-e92dfd6a8780",
            "arrows": "to",
            "label": "timeTerms.csv\n",
            "resources": [
                {
                    "urlReturnFileName": "timeTerms.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "d4abf910-68d4-bb25-5818-cfbad59f155d",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "5d4f8e0a-1cb4-4b02-97e3-3fc2f47bdacb",
            "to": "d7cd0a5f-cc31-4cb7-8898-7caaa30df6dd",
            "id": "db297429-b298-48db-b770-5c84f6c93f25",
            "arrows": "to",
            "label": "Geotime Spark\n",
            "resources": [
                {
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "resourceType": "HTTP",
                    "organization": "geotime.tw.rpi.edu",
                    "resourceName": "Geotime Spark",
                    "description": "Geotime Spark service",
                    "url": "http://geotime.tw.rpi.edu/fuseki/ds/query",
                    "urlExample": "",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "query",
                            "name": "query",
                            "type": "string",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "PREFIX gts: <http://resource.geosciml.org/ontology/timescale/gts-30#> \r\nPREFIX gtrs: <http://resource.geosciml.org/ontology/timescale/gtrs-30#>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \r\nPREFIX sam: <http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#>\r\nPREFIX gm: <http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#> \r\nPREFIX tm: <http://def.seegrid.csiro.au/isotc211/iso19108/2006/temporal#>\r\nPREFIX basic: <http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\n \r\nSELECT ?gsspLabel ?primaryGuidingCriterion ?coordinates ?age ?ageUncertainty ?detailedConceptName\r\nWHERE \r\n{\r\n?base gts:stratotype ?gssp;\r\n      tm:position ?baseTime.\r\n?gssp rdfs:label ?gsspLabel;\r\n      gts:primaryGuidingCriterion ?primaryGuidingCriterion;\r\n      sam:shape ?gsspLocation.\r\n?gsspLocation gm:position ?gsspPosition.\r\n?gsspPosition gm:coordinates ?coordinates.\r\n?baseTime tm:value ?age.\r\nOPTIONAL\r\n{\r\n?base gtrs:positionalUncertainty ?baseTimeUncertainty.\r\n?baseTimeUncertainty basic:amount ?ageUncertainty.\r\n}\r\n{\r\n?lowestRankConcept gts:rank <http://resource.geosciml.org/ontology/timescale/rank/Age>;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Ediacaran Period\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Holocene Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\nUNION\r\n{\r\n?lowestRankConcept rdfs:label \"Pridoli Epoch\"@en;\r\n                       gtrs:start ?base.\r\n}\r\n?lowestRankConcept skos:prefLabel ?detailedConceptName\r\nFILTER (lang(?detailedConceptName) = \"en\" )\r\n}\r\nORDER BY ?age",
                            "attributeType": "input",
                            "description": "query",
                            "from": "input"
                        },
                        {
                            "label": "output",
                            "name": "output",
                            "type": "string",
                            "value": "json",
                            "required": true,
                            "shown": false,
                            "example": "",
                            "attributeType": "input",
                            "description": "result type",
                            "from": "default"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "datatype",
                            "name": "datatype",
                            "type": "string"
                        },
                        {
                            "label": "type",
                            "name": "type",
                            "type": "string"
                        },
                        {
                            "label": "value",
                            "name": "value",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "JSON",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<Geotime&#x20;Spark>\r\n\t\t\t\t<head>\r\n\t\t\t\t\t<vars></vars>\r\n\t\t\t\t</head>\r\n\t\t\t\t<results>\r\n\t\t\t\t\t<bindings>\r\n\t\t\t\t\t\t<gsspLabel>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</gsspLabel>\r\n\t\t\t\t\t\t<primaryGuidingCriterion>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</primaryGuidingCriterion>\r\n\t\t\t\t\t\t<coordinates>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</coordinates>\r\n\t\t\t\t\t\t<age>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</age>\r\n\t\t\t\t\t\t<detailedConceptName>\r\n\t\t\t\t\t\t\t<datatype></datatype>\r\n\t\t\t\t\t\t\t<type></type>\r\n\t\t\t\t\t\t\t<value></value>\r\n\t\t\t\t\t\t</detailedConceptName>\r\n\t\t\t\t\t</bindings>\r\n\t\t\t\t</results>\r\n\t\t\t</Geotime&#x20;Spark>",
                    "jsUrlReturnFileSchema": {
                        "text": "Geotime&#x20;Spark",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j46_1",
                        "children": [
                            {
                                "text": "head",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j46_2",
                                "children": [
                                    {
                                        "text": "vars",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j46_3",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "text": "results",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j46_4",
                                "children": [
                                    {
                                        "text": "bindings",
                                        "a_attr": {
                                            "style": ""
                                        },
                                        "id": "j46_5",
                                        "children": [
                                            {
                                                "text": "primaryGuidingCriterion",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_6",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_7",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_8",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_9",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "coordinates",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_10",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_11",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_12",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_13",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "detailedConceptName",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_14",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_15",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_16",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_17",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "gsspLabel",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_18",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_19",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_20",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_21",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "age",
                                                "a_attr": {
                                                    "style": ""
                                                },
                                                "id": "j46_22",
                                                "children": [
                                                    {
                                                        "text": "datatype",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_23",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "type",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_24",
                                                        "children": []
                                                    },
                                                    {
                                                        "text": "value",
                                                        "a_attr": {
                                                            "style": ""
                                                        },
                                                        "id": "j46_25",
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "fileName": "Geotime Spark.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "Geotime Spark",
                    "wrapper": {
                        "wrapperName": "jsonTOxmlWrapper"
                    }
                }
            ],
            "libraries": []
        },
        {
            "from": "d7cd0a5f-cc31-4cb7-8898-7caaa30df6dd",
            "to": "25747f2f-1306-4e2a-93ac-1d9a91ffae59",
            "id": "da1be00a-0fd9-4757-8e12-3a4136fcbd55",
            "arrows": "to",
            "label": "ageTable.xml\n",
            "resources": [
                {
                    "urlReturnFileName": "ageTable.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "cc0c88bc-f91d-456d-bf3f-adc43a9d037c",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "25747f2f-1306-4e2a-93ac-1d9a91ffae59",
            "to": "c67bb6ac-28ee-40c1-a4cd-4dcb61a48371",
            "id": "6a928d54-9942-40dd-ad16-e3c352b85d62",
            "arrows": "to",
            "label": "gsspWhole.csv\n",
            "resources": [
                {
                    "urlReturnFileName": "gsspWhole.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "3aba769f-915f-7192-4976-a11f0be3caff",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "b63c2ca4-d243-454d-8fb2-a1ecf0a43ffe",
            "to": "c67bb6ac-28ee-40c1-a4cd-4dcb61a48371",
            "id": "7aa09c1b-8e62-4e8a-96c3-b612fce48f58",
            "arrows": "to",
            "label": "table.csv\n",
            "resources": [
                {
                    "urlReturnFileName": "table.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "9eb6b017-90c2-7cfa-876c-05727f5d283d",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "c67bb6ac-28ee-40c1-a4cd-4dcb61a48371",
            "to": "9131b640-1d77-4493-937d-01a020ebb032",
            "id": "e92f9705-62d3-4f2c-834b-9920397d5280",
            "arrows": "to",
            "label": "comTable.csv\n",
            "resources": [
                {
                    "urlReturnFileName": "comTable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "a84df7fa-8257-e3ed-3463-8d77989723fa",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "c5edb536-9628-433b-9232-eeb79d892fe5",
            "to": "c1b9a719-ca3a-457c-9e5a-bfa34c770a0d",
            "id": "a38ccc75-2d5f-43a2-a8a7-3d3ce6b64895",
            "arrows": "to",
            "label": "GPlates Paleo-geographic Coordinates\n",
            "resources": [
                {
                    "id": "26db8e15-1050-4e16-87ce-5b2b52846ced",
                    "resourceType": "HTTPS",
                    "organization": "GPlates",
                    "resourceName": "GPlates Paleo-geographic Coordinates",
                    "description": "Reconstruct the geographic locations from present day coordinates back to their paleo-positions. Each location will be assigned a plate id and moved back in time using the chosen reconstruction model.",
                    "url": "https://gws.gplates.org/reconstruct/reconstruct_points/",
                    "urlExample": "https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140",
                    "method": "GET",
                    "attributes": [
                        {
                            "label": "points",
                            "name": "points",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "95,54",
                            "attributeType": "input",
                            "description": "The present-day coordinates of locations in longitude and latitude separated by ','.",
                            "from": "input"
                        },
                        {
                            "label": "time",
                            "name": "time",
                            "value": "",
                            "required": true,
                            "shown": true,
                            "example": "140",
                            "attributeType": "input",
                            "description": "The geological age in million years(Ma) to which the coordinates will be reconstructed. The valid input value depends on the chosen reconstruction model.",
                            "from": "input"
                        }
                    ],
                    "outAttributes": [
                        {
                            "label": "coordinates",
                            "name": "coordinates",
                            "type": "string"
                        }
                    ],
                    "methodReturnFileType": "JSON",
                    "urlReturnFileType": "XML",
                    "urlReturnFileSchema": "<GPlates&#x20;Paleo-geographic&#x20;Coordinates>\r\n\t\t\t\t<coordinates>\r\n\t\t\t\t</coordinates>\r\n\t\t\t</GPlates&#x20;Paleo-geographic&#x20;Coordinates>",
                    "jsUrlReturnFileSchema": {
                        "text": "GPlates&#x20;Paleo-geographic&#x20;Coordinates",
                        "a_attr": {
                            "style": "background-color: rgb(205, 165, 10) !important"
                        },
                        "id": "j5_1",
                        "children": [
                            {
                                "text": "coordinates",
                                "a_attr": {
                                    "style": ""
                                },
                                "id": "j5_2",
                                "children": []
                            }
                        ]
                    },
                    "fileName": "GPlates Paleo-geographic Coordinates.xml",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/",
                    "urlReturnFileName": "GPlates Paleo-geographic Coordinates",
                    "wrapper": {
                        "wrapperName": "jsonTOxmlWrapper"
                    }
                }
            ],
            "libraries": []
        },
        {
            "from": "9131b640-1d77-4493-937d-01a020ebb032",
            "to": "c1b9a719-ca3a-457c-9e5a-bfa34c770a0d",
            "id": "782d7ef7-62cb-4f46-b1de-f176c0e87494",
            "arrows": "to",
            "label": "gplates.xml\n",
            "resources": [
                {
                    "urlReturnFileName": "gplates.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "92db000c-7d8e-80b7-2879-3e50d67e7cbb",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "c1b9a719-ca3a-457c-9e5a-bfa34c770a0d",
            "to": "3e2808fc-bdd7-4871-81f3-6026b6e0b295",
            "id": "925d5b46-17db-4950-b9d6-421e9eb9afa2",
            "arrows": "to",
            "label": "gsspCoord.xml\n",
            "resources": [
                {
                    "urlReturnFileName": "gsspCoord.xml",
                    "urlReturnFileType": "XML",
                    "resourceType": "XML",
                    "id": "97669900-6e50-52a1-7239-836dfa9f9b26",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "c67bb6ac-28ee-40c1-a4cd-4dcb61a48371",
            "to": "3e2808fc-bdd7-4871-81f3-6026b6e0b295",
            "id": "3db45662-2ad8-4d27-9ec1-7aebc6ff4be9",
            "arrows": "to",
            "label": "comTable.csv\n",
            "resources": [
                {
                    "urlReturnFileName": "comTable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "a84df7fa-8257-e3ed-3463-8d77989723fa",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        },
        {
            "from": "3e2808fc-bdd7-4871-81f3-6026b6e0b295",
            "to": "bc19e5a2-5dd0-4858-98e7-33d96713dce3",
            "id": "98ee85c0-1d8a-4b14-8f6c-78227112fecb",
            "arrows": "to",
            "label": "resTable.csv\n",
            "resources": [
                {
                    "urlReturnFileName": "resTable.csv",
                    "urlReturnFileType": "CSV",
                    "resourceType": "CSV",
                    "id": "3c3bade0-f943-9642-97d1-432242f55dba",
                    "location": "C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"
                }
            ],
            "libraries": []
        }
    ]
}