//started from this node, and dispatch to all
function updateNodes(node) {
//        console.log('updateNodes');

    var ids = data.edges.getIds();
    var edgeList = [];
    var nodeList = [];
    for (var i = 0; i < ids.length; ++i) {
        var e = data.edges.get(ids[i]);
        var t = data.nodes.get(e.to);
        if (e.from === node.id) {
            edgeList.push(e);
            nodeList.push(t);
        }
    }
    //update current node
    if (node.type === "data") {
    } else if (node.type === "library") {
    } else if (node.type === 'nested') {
        var subids = data.edges.getIds();
        var wholeResources = [];
        var wholeLibraries = [];
        for (var k = 0; k < subids.length; ++k) {
            var subedge = data.edges.get(subids[k]);
            var subto = data.nodes.get(subedge.to);
            if (subto.id === node.id) {
                if (subedge.resources.length > 0) {
                    wholeResources = wholeResources.concat(subedge.resources);
                }
                if (subedge.libraries.length > 0) {
                    wholeLibraries = wholeLibraries.concat(subedge.libraries);
                }
            }
        }
//        console.log(wholeResources);
        if (wholeResources.length === 0 && wholeLibraries.length === 0) {
        } else {
            for (var j = node.resourcesIn.length - 1; j >= 0; --j) {
                var index = myIncludeFieldIndex(wholeResources, node.resourcesIn[j].id, 'id');
                if (index === -1) {
                    node.resourcesIn.splice(j, 1);
                }
            }
            node.resourcesIn = addresourcesIn(node.resourcesIn, wholeResources);
        }
//        data.nodes.update(node);
    } else if (node.type === "analytics" || node.type === "adapter" || node.type === "terminal"
            || node.type === "printer" || node.type === "combine" || node.type === "fusion" 
            || node.type === "IO") {

        var subids = data.edges.getIds();
        var wholeResources = [];
        var wholeLibraries = [];
        for (var k = 0; k < subids.length; ++k) {
            var subedge = data.edges.get(subids[k]);
            var subto = data.nodes.get(subedge.to);
            if (subto.id === node.id) {
                if (subedge.resources.length > 0) {
                    wholeResources = wholeResources.concat(subedge.resources);
                }
                if (subedge.libraries.length > 0) {
                    wholeLibraries = wholeLibraries.concat(subedge.libraries);
                }
            }
        }
//        console.log(wholeResources);
        if (wholeResources.length === 0 && wholeLibraries.length === 0) {
            node.resourcesIn = [];
            node.resourcesOut = [];
        } else {
            for (var j = node.resourcesIn.length - 1; j >= 0; --j) {
                var index = myIncludeFieldIndex(wholeResources, node.resourcesIn[j].id, 'id');
                if (index === -1) {
                    node.resourcesIn.splice(j, 1);
                }
            }
            node.resourcesIn = addresourcesIn(node.resourcesIn, wholeResources);
        }
        data.nodes.update(node);

    } else if (node.type === "waiton" || node.type === "if"
            || node.type === "connect" || node.type === "repeat") {
        var subids = data.edges.getIds();
        var wholeResources = [];
        for (var k = 0; k < subids.length; ++k) {
            var subedge = data.edges.get(subids[k]);
            var subfrom = data.nodes.get(subedge.from);
            var subto = data.nodes.get(subedge.to);
            if (subto.id === node.id && subedge.resources.length > 0) {
                wholeResources = wholeResources.concat(subedge.resources);
            }
        }
        if (wholeResources.length === 0) {
            node.resourcesIn = [];
            node.resourcesOut = [];
        } else {
            for (var j = node.resourcesIn.length - 1; j >= 0; --j) {
                var index = myIncludeFieldIndex(wholeResources, node.resourcesIn[j].id, 'id');
                if (index === -1) {
                    node.resourcesIn.splice(j, 1);
                }
            }
            node.resourcesIn = addresourcesIn(node.resourcesIn, wholeResources);
            node.resourcesOut = node.resourcesIn;
        }
        data.nodes.update(node);

    }

    checkNextNodeTypeError(node);

    //update edge
    for (var i = 0; i < edgeList.length; ++i) {
        var edge = edgeList[i];
        var to = nodeList[i];
        if (edge.from === node.id) {//from is node
            if (node.type === "data" || node.type === "analytics" || node.type == "nested"
                    || node.type === "adapter" || node.type === "combine" || node.type === "fusion"
                    || node.type === "IO" || node.type === "waiton") {
                if (to.type === 'analytics' || to.type === 'adapter' || to.type == "nested"
                        || to.type === 'terminal' || to.type === 'printer' || to.type === 'IO'
                        || to.type === 'waiton' || to.type === 'if' || to.type === 'repeat'
                        || to.type === 'connect'
                        || to.type === 'combine' || to.type === 'fusion') {
                    updateEdgeInfo(edge, node);
//                    updateNodes(to);
                }
            } else if (node.type === "terminal") {
            } else if (node.type === "printer") {
            } else if (node.type === "library") {
                if (to.type === 'adapter' || to.type === 'analytics' || to.type == "nested") {
                    updateEdgeInfo(edge, node);
//                    updateNodes(to);
                }
            } else if (node.type === "if") {
                node.resourcesOut = node.resourcesIn;
                data.nodes.update(node);
                var subids = data.edges.getIds();
                var subedges = [];
                var subnodes = [];
                for (var k = 0; k < subids.length; ++k) {
                    var subedge = data.edges.get(subids[k]);
                    var subfrom = data.nodes.get(subedge.from);
                    var subto = data.nodes.get(subedge.to);
                    if (subfrom.id === node.id && subedge.resources.length > 0) {
                        subedges.push(subedge);
                        subnodes.push(subto);
                    }
                }
                for (var k = 0; k < subedges.length; ++k) {
                    updateEdgeInfo(subedges[k], node);
//                    updateNodes(subnodes[k]);
                }
            } else if (node.type === "connect") {
                node.resourcesOut = node.resourcesIn;
                data.nodes.update(node);
                updateEdgeInfo(edge, node);
//                updateNodes(to);
            } else if (node.type === "repeat") {
                node.resourcesOut = node.resourcesIn;
                data.nodes.update(node);
                var subids = data.edges.getIds();
                var subedges = [];
                var subnodes = [];
                for (var k = 0; k < subids.length; ++k) {
                    var subedge = data.edges.get(subids[k]);
                    var subfrom = data.nodes.get(subedge.from);
                    var subto = data.nodes.get(subedge.to);
                    if (subfrom.id === node.id && subedge.resources.length > 0) {
                        subedges.push(subedge);
                        subnodes.push(subto);
                    }
                }
                for (var k = 0; k < subedges.length; ++k) {
                    updateEdgeInfo(subedges[k], node);
//                    updateNodes(subnodes[k]);
                }
            }
        }
    }
//    console.log(node.image);
}

function updateEdgeInfo(edge, from) {
//        console.log("updateEdgeInfo");
//        console.log(edge);
//        console.log(from);
    if (from.type === "library") {
        if (from.libraries === undefined || from.libraries.length === 0) {
            edge.label = "";
            edge.libraries = [];
        } else {
            //remove
            if (edge.libraries !== undefined) {
                for (var i = edge.libraries.length - 1; i >= 0; --i) {
                    var index = myIncludeFieldIndex(from.libraries, edge.libraries[i].id, 'id');
                    if (index === -1) {
                        edge.label = edge.label.replace(edge.libraries[i].libraryName + "\n", "");
                        edge.libraries.splice(i, 1);
                    }
                }
            }
        }
    } else {
        if (from.resourcesOut === undefined || from.resourcesOut.length === 0) {
            edge.label = "";
            edge.resources = [];
        } else {
            if (edge.resources !== undefined) {
                for (var i = edge.resources.length - 1; i >= 0; --i) {
                    var index = myIncludeFieldIndex(from.resourcesOut, edge.resources[i].id, 'id');
                    if (index === -1) {
                        edge.label = edge.label.replace(edge.resources[i].urlReturnFileName + "\n", "");
                        edge.resources.splice(i, 1);
                    }
                }
            }
        }
    }
    data.edges.update(edge);
}
