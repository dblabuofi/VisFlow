//helper functions uuid
function guid() {
        function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
}

String.prototype.allTrim = String.prototype.allTrim ||
        function () {
//            return this.replace(/\s+/g, ' ')
//                    .replace(/^\s+|\s+$/, '');
                return this.replace(/\s+/g, ' ')
                        .trim();
        };

String.prototype.getFileType = function () {
        var type = this.replace(/.*\./, '').toUpperCase()
                .trim();
        switch (type) {
                case "XML":
                case "CSV":
                        break;
                case "":
                        type = "Other";
                        break;
                default:
                        type = "SQL";
        }

        return type;
};
        
Array.prototype.clean = function (deleteValue) {
        for (var i = 0; i < this.length; i++) {
                if (this[i] == deleteValue) {
                        this.splice(i, 1);
                        i--;
                }
        }
        return this;
};
function findNodes(nodes) {
        var i = 0;
        for (; i < nodes.length; ++i) {
                if (nodes[i].id === curData.id) {
                        return i;
                }
        }
        return -1;
}
function myInclude(attributes, attr) {
        for (var i = 0; i < attributes.length; ++i) {
                if (attributes[i] == attr) {
                        return true;
                }
        }
        return false;
}
//use myIncludeFieldIndex
function isInclude(resources, id) {
        for (var i = 0; i < resources.length; ++i) {
                if (resources[i].id == id) {
                        return i;
                }
        }
        return -1;
}
//use myIncludeFieldIndex
function myIncludeName(attributes, attr) {
        for (var i = 0; i < attributes.length; ++i) {
                if (attributes[i].name == attr) {
                        return true;
                }
        }
        return false;
}
//use myIncludeFieldIndex
function myResourceName(attributes, attr) {
        for (var i = 0; i < attributes.length; ++i) {
                if (attributes[i].resourceName == attr) {
                        return i;
                }
        }
        return -1;
}
//use myIncludeFieldIndex
function myIncludeNameIndex(attributes, attr) {
        for (var i = 0; i < attributes.length; ++i) {
                if (attributes[i].name == attr) {
                        return i;
                }
        }
        return -1;
}
//use myIncludeFieldIndex
function myIncludelibraryNameIndex(attributes, attr) {
        for (var i = 0; i < attributes.length; ++i) {
                if (attributes[i].libraryName == attr) {
                        return i;
                }
        }
        return -1;
}
//use myIncludeFieldIndex
function myIncludeActionIndex(actions, attr) {
           for (var i = 0; i < actions.length; ++i) {
                if (actions[i].resourceName == attr) {
                        return i;
                }
        }
        return -1;
}

function myIncludeFieldIndex(array, value, attr) {
        if (array === undefined) return -1;
         for (var i = 0; i < array.length; ++i) {
                if (array[i][attr] == value) {
                        return i;
                }
        }
        return -1;
}

function myWebFieldIndex(webservices, value, attr) {
        for (var i = 0; i < webservices.length; ++i) {
                for (var j = 0; j < webservices[i].attributes.length; ++j) {
                        if (webservices[i].attributes[j][attr] == value) {
                                return j;
                        }
                }
        }
        return -1;
}


function addresourcesIn(resourcesIn, resources) {
        for (var i = 0; i < resources.length; ++i) {
                var index = myIncludeFieldIndex(resourcesIn, resources[i].id, 'id');
                if (index === -1) {
                        resourcesIn.push(resources[i]);
                }
        }
        return resourcesIn;
}

function removeResources(resourcesIn, resources) {
        for (var i = 0; i < resources.length; ++i) {
                var index = myIncludeFieldIndex(resourcesIn, resources[i].id, 'id');
                if (index !== -1) {
                        resourcesIn = resourcesIn.splice(i, 1);
                }
        }
        return resourcesIn;
}

function random_rgba() {
    var o, r, s, r1, g1, b1; 
    o = Math.round, r = Math.random, s = 255;
    do {
        r1 = o(r()*s), g1 = o(r()*s), b1 = o(r()*s);
    } while (0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1 < 80);
    
    return { r: r1, g:g1, b:b1 };
}

function assignColor() {
        var color = {
                r: 205,
                g: 145,
                b: 0};
        function generateColor() {
                return random_rgba();
        }
        function reset() {
                color = {
                        r: 205,
                        g: 145,
                        b: 0};
        }
        return {generateColor:generateColor, reset : reset};
}
var colorFun = assignColor();
//uploaded files generalIO
var mySubGraphInterval = null;
var numberofIOs = 0;
var uploadedIOids = [];
var uploadFileGeneralIOids = [];
var uploadFileGeneralResourceOuts = [];

function generateUploadGeneralIO() {
    uploadFileGeneralIOids = [];
        uploadFileGeneralResourceOuts = [];
        data.nodes.forEach(function (node) {
            console.log(node);
            if (node.type == 'IO') {
                uploadFileGeneralIOids.push(node.id);
                uploadFileGeneralResourceOuts.push(node.resourcesOut);
            } else if (node.type == 'nested') {
                var localNodes = getScaleFreeNetwork();
                if (node.action != undefined) {
                    localNodes.nodes.add(node.action[0].module.graph.nodes);
                    localNodes.nodes.forEach(function (node2) {//current one level
                        if (node2.type == 'IO') {
                            uploadFileGeneralIOids.push(node2.id);
                            uploadFileGeneralResourceOuts.push(node2.resourcesOut);
                        }
                    });
                }
            }
        });
        uploadedIOids = [];
        numberofIOs = uploadFileGeneralIOids.length;
        mySubGraphInterval = setInterval(function () {
            getStatusforSubGraph();
        }, 500);
}

function makeFileName(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}