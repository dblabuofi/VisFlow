
var bakdata = {};
function deepCopy(data) {
        var nodes = new vis.DataSet();
        var edges = new vis.DataSet();

        data.nodes.forEach(function (n) {
                var tmp = n;
                if (tmp.image.includes('highlight')) {
                        tmp.image = tmp.image.replace(" highlight", "");
                }
                nodes.add(JSON.parse(JSON.stringify(n)));
        });
        data.edges.forEach(function (e) {
                var tmp = e;
                if (tmp.from !== tmp.to) {//avoid loops
                        edges.add(JSON.parse(JSON.stringify(e)));
                }
        });
        var newGraph = {nodes: nodes, edges: edges};
        return newGraph;
}

function restoreCopy(bakdata) {
        var nodes = new vis.DataSet();
        var edges = new vis.DataSet();
        if (bakdata.nodes === undefined)
                return;
        bakdata.nodes.forEach(function (n) {
                nodes.add(JSON.parse(JSON.stringify(n)));
        });
        bakdata.edges.forEach(function (e) {
                edges.add(JSON.parse(JSON.stringify(e)));
        });
        data.nodes.clear();
        nodes.forEach(function (n) {
                data.nodes.add(JSON.parse(JSON.stringify(n)));
        });
        data.edges.clear();
        edges.forEach(function (e) {
                data.edges.add(JSON.parse(JSON.stringify(e)));
        });
}

function deleteSelected() {
        bakdata = deepCopy(data);
        console.log('delete Selected');
        console.log(curData);
        network.deleteSelected();
        //remove edges if it is a node
        if (curData.from === undefined) {
                var needUpdatedNodes = [];
                var edgesResources = [];
                var newEdges = new vis.DataSet();
                var ids = data.edges.getIds();
                for (var i = 0; i < ids.length; ++i) {
                        var edge = data.edges.get(ids[i]);
                        if (edge.from !== curData.id && edge.to !== curData.id) {
                                newEdges.add(JSON.parse(JSON.stringify(edge)));
                        }
                        if (edge.from === curData.id) {
                                needUpdatedNodes.push(data.nodes.get(edge.to));
                                edgesResources = edgesResources.concat(JSON.parse(JSON.stringify(edge.resources)));
                        }
                }
                data.edges.clear();
                newEdges.forEach(function (e) {
                        data.edges.add(e);
                });
                //update resources
                for (var i = 0; i < needUpdatedNodes.length; ++i) {
                        var nodeTo = needUpdatedNodes[i];
                        nodeTo.resourcesIn = removeResources(nodeTo.resourcesIn, edgesResources);
                        data.nodes.update(nodeTo);
                        updateNodes(nodeTo);
                        checkTypeError(nodeTo);
                }
                
        } else {//edge
                var to = data.nodes.get(curData.to);
                updateNodes(to);
                checkTypeError(to);
        }
}

function undeleteSelected() {
        console.log('undelete Selected');
        //restore
        restoreCopy(bakdata);
        validateNodes();
}
