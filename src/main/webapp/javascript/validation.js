function validateNodes() {
//    console.log('validte nodes function');
    var e = [];
    //build graph
    var graph = {};
    var indegree = {};
    //init
    var nodeids = data.nodes.getIds();
    for (var i = 0; i < nodeids.length; ++i) {
        if (graph[data.nodes.get(nodeids[i]).id] === undefined)
            graph[data.nodes.get(nodeids[i]).id] = [];
        if (indegree[data.nodes.get(nodeids[i]).id] === undefined)
            indegree[data.nodes.get(nodeids[i]).id] = [];
    }

    //indegree
    var ids = data.edges.getIds();
    for (var i = 0; i < ids.length; ++i) {
        graph[data.edges.get(ids[i]).from].push(data.edges.get(ids[i]).to);
        indegree[data.edges.get(ids[i]).to].push(data.edges.get(ids[i]).from);
    }
//    console.log(graph);
//    console.log(data.edges);
    //check graph one by one
//    console.log(graph);
    for (var property in graph) {
        if (graph.hasOwnProperty(property)) {
            var from = data.nodes.get(property);
            var nodeflag = true;
            //validate in out edges
            if (!validateinout(from, graph, indegree)) {
                nodeflag = false;
                if (!from.image.includes('error')) {
                    from.image = 'image/' + from.type + " error.png";
                    data.nodes.update(from);
                }
            }
            //all good
//            console.log('nodeflag ' + nodeflag);
            if (nodeflag === true && from.image.includes('error')) {
                from.image = from.image.replace(" error", "");
                data.nodes.update(from);
            }
        }
    }
    return true;
}

function validateFromNode(from, to) {
    if (from.type == 'data' && to.type == 'data') {
        return false;
    }
    if (from.type == 'library') {
        if (to.type != 'adapter' && to.type != 'analytics') {
            return false;
        }
    }

    return true;
}

function validateinout(from, graph, indegree) {
    var inNum = indegree[from.id].length;
    var outNum = graph[from.id].length;
//    console.log(from);
//     console.log(inNum);
//        console.log(outNum);
    if (from.type == 'data') {
        if (inNum === 0 && outNum === 0) {
            return false;
        }
    } else if (from.type == 'combine') {
        if (inNum < 2 || outNum != 1) {
            return false;
        }
    } else if (from.type == 'fusion') {
        if (inNum < 2 || outNum != 1) {
            return false;
        }
    } else if (from.type == 'adapter') {
        if (inNum == 0 || outNum === 0) {
            console.log(from.type);
            return false;
        }
    } else if (from.type == 'analytics') {
        if (inNum < 1 || outNum < 1) {
            return false;
        }
    } else if (from.type == 'library') {

        if (inNum > 0 || outNum === 0) {
            return false;
        }
    } else if (from.type == 'terminal') {
        if (inNum === 0 && outNum === 0) {
            return false;
        }
    } else if (from.type == 'printer') {
        if (inNum === 0 || outNum > 0) {
            return false;
        }
    } else if (from.type == 'IO') {
        if (inNum === 0 && outNum === 0) {
            return false;
        }
    } else if (from.type == 'if') {
        if (inNum !== 1 || outNum !== 2) {
            return false;
        }
    } else if (from.type == 'waiton') {
        if (inNum === 0 || outNum === 0) {
            return false;
        }
    } else if (from.type == 'connect') {
        if (inNum === 0 && outNum === 0) {
            return false;
        }
    }
    return true;
}

function inoutCheck(inNum, outNum, type) {
//    console.log(from);
//     console.log(inNum);
//        console.log(outNum);
    if (type == 'data') {
        if (inNum === 0 && outNum === 0) {
            return "Data Icon need in or out edge";
        }
    } else if (type == 'combine') {
        if (inNum < 2 || outNum != 1) {
            return "Combine Icon needs two in and one out edges";
        }
    } else if (type == 'fusion') {
        if (inNum < 2 || outNum != 1) {
            return "Fusion Icon needs two in and one out edges";
        }
    } else if (type == 'adapter') {
        if (inNum != 1 || outNum === 0) {
            return "Adapter Icon needs one in and one out edges";
        }
    } else if (type == 'analytics') {
        if (inNum < 1 || outNum < 1) {
            return "Analytics Icon needs at least one in and at least one out edges";
        }
    } else if (type == 'library') {
        if (inNum > 0 || outNum === 0) {
            return "Library Icon needs at least one out edges";
        }
    } else if (type == 'terminal') {
        if (inNum === 0 || outNum > 0) {
            return "Terminal Icon needs at least one in edges";
        }
    } else if (type == 'printer') {
        if (inNum === 0 || outNum > 0) {
            return "Printer Icon needs at least one in edges";
        }
    } else if (type == 'IO') {
        if (inNum === 0 && outNum === 0) {
            return "IO Icon needs at least one in edges";
        }
    } else if (type == 'if') {
        if (inNum !== 1 || outNum !== 2) {
            return "If Icon needs one in and two out edges";
        }
    } else if (type == 'waiton') {
        if (inNum === 0 || outNum === 0) {
            return "Waiton Icon needs at least one in and out edges";
        }
    } else if (type == 'connect') {
        if (inNum === 0 && outNum === 0) {
            return  "Connect Icon needs at least one in and out edges";
        }
    } else if (type == 'nested') {
        if (outNum === 0) {
            return  "Procedure Icon needs at least one out edges";
        }
    }
    return true;
}

function validateEdge(edges, curEdge) {
    var e = [];
    var ids = edges.getIds();
    for (var i = 0; i < ids.length; ++i) {
        for (var j = 0; j < e.length; ++j) {
            if (e[j].from === edges.get(ids[i]).from && e[j].to === edges.get(ids[i]).to) {
                return false;
            }
        }
        e.push({from: edges.get(ids[i]).from, to: edges.get(ids[i]).to});
    }
//    console.log(e);
//    console.log(e.length);
    //check if we have cycle
    var node = data.nodes.get(e[e.length - 1].from);
    if (node.type !== "repeat" && isCyclic(e)) {
        if (e[e.length - 1].from != e[e.length - 1].to) {
            $('#errorMessage').html("Loop detected");
            $('#alertdiv').removeClass('hideit');
            setTimeout(function () {
                $('#alertdiv').addClass('hideit');
            }, 3000);
            return false;
        }
    }
    var edge = {from: data.nodes.get(e[e.length - 1].from), to: data.nodes.get(e[e.length - 1].to)};

    //to
    if (edge.to.type == 'data') {
        if (edge.from.type == 'data') {
            showErrorMessage("data item can't connect to another data item");
            return false;
        }
    } else if (edge.to.type == 'combine') {
    } else if (edge.to.type == 'fusion') {
    } else if (edge.to.type == 'adapter') {
    } else if (edge.to.type == 'analytics') {
    } else if (edge.to.type == 'library') {
        showErrorMessage("can't connect to library");
        return false;
    } else if (edge.to.type == 'terminal') {
    } else if (edge.to.type == 'printer') {
    } else if (edge.to.type == 'IO') {
    } else if (edge.to.type == 'if') {
    } else if (edge.to.type == 'waiton') {
    } else if (edge.to.type == 'connect') {
    } else if (edge.to.type == 'nested') {
    }

    //from
    if (edge.from.type == 'data') {
    } else if (edge.from.type == 'combine') {
    } else if (edge.from.type == 'fusion') {
    } else if (edge.from.type == 'adapter') {
    } else if (edge.from.type == 'analytics') {
    } else if (edge.from.type == 'library') {
        if (edge.to.type != 'adapter' && edge.to.type != 'analytics') {
            showErrorMessage("library can only connect to adapter or fusion");
            return false;
        }
    } else if (edge.from.type == 'terminal') {
        showErrorMessage("terminal can't connect to others");
        return false;
    } else if (edge.from.type == 'printer') {
        showErrorMessage("terminal can't connect to others");
        return false;
    } else if (edge.from.type == 'IO') {
    } else if (edge.from.type == 'if') {
    } else if (edge.from.type == 'waiton') {
    } else if (edge.from.type == 'connect') {
    } else if (edge.from.type == 'nested') {

    }

    //check number of edges
//        var ids = data.edges.getIds();
//        var inNumFrom = 0;
//        var outNumFrom = 0;
//        var inNumTo = 0;
//        var outNumTo = 0;
//        for (var i = 0; i < ids.length; ++i) {
//                var edge = data.edges.get(ids[i]);
//                var from = data.nodes.get(edge.from);
//                var to = data.nodes.get(edge.to);
//                if (from.id === curEdge.from) {
//                        outNumFrom++;
//                }
//                if (to.id === curEdge.from) {
//                        inNumFrom++;
//                }
//                if (from.id === curEdge.to) {
//                        outNumTo++;
//                }
//                if (to.id === curEdge.to) {
//                        inNumTo++;
//                }
//        }
//        console.log(inNumFrom + " " + outNumFrom + " " + inNumTo + " " + outNumTo);
//        var resString = inoutCheck(inNumFrom, outNumFrom, data.nodes.get(curEdge.from).type);
//        console.log(resString);
//        if (resString !== true) {
//                showErrorMessage(resString);
//                return false;
//        }
//        resString = inoutCheck(inNumTo, outNumTo, data.nodes.get(curEdge.to).type);
//        console.log(resString);
//        if (resString !== true) {
//                showErrorMessage(resString);
//                return false;
//        }

    return true;
}

function isCyclic(e) {
    var indegree = {};
    for (var i = 0; i < e.length; ++i) {
        if (indegree[e[i].from] === undefined) {
            indegree[e[i].from] = 0;
        }
        if (indegree[e[i].to] === undefined) {
            indegree[e[i].to] = 1;
        } else {
            ++indegree[e[i].to];
        }
    }
    var queue = [];
    var sorted = [];
    for (var property in indegree) {
        if (indegree.hasOwnProperty(property)) {
            if (indegree[property] === 0) {
                queue.push(property);
            }
        }
    }
    while (queue.length > 0) {
        var cur = queue.shift();
        sorted.push(cur);
        for (var i = 0; i < e.length; ++i) {
            if (e[i].from == cur) {
                --indegree[e[i].to];
                if (indegree[e[i].to] == 0)
                    queue.push(e[i].to);
            }
        }
    }
    if (sorted.length != Object.keys(indegree).length)
        return true;
    else
        return false;
}


function checkNextNodeTypeError(node) {
    console.log("checkNextNodeTypeError");
    console.log(node);
    var f = checkTypeError(node);
//        console.log(f);
    if (f === true) {
//                console.log(node.image);
        if (node.image.includes(' type')) {
            node.image = node.image.replace(" type", "");
            data.nodes.update(node);
        }
    } else {
//        console.log(node.image);
        if (!node.image.includes('type')) {
            if (node.image.includes('highlight')) {
                node.image = 'image/' + node.type + " type highlight.png";
            } else {
                node.image = 'image/' + node.type + " type.png";
            }
            data.nodes.update(node);
        }
    }
//    console.log(node.image);
}

function checkTypeError(node) {//true good false bad
    if (node.type == "data") {
        return node.resources.length == 0 ? false : true;
    } else if (node.type == "library") {
        return node.libraries.length == 0 ? false : true;
    }

    if (node.actions == undefined || node.actions.length == 0) {
        if (node.type != 'procedure' && node.resourcesIn.length == 0) {
            return false;
        }
    }

    //get all edges to this node
    var inputResources = [];
    var libraries = [];
    var ids = data.edges.getIds();
    for (var i = 0; i < ids.length; ++i) {
        var edge = data.edges.get(ids[i]);
        if (edge.to === node.id) {
            inputResources = inputResources.concat(edge.resources);
            libraries = libraries.concat(edge.libraries);
        }
    }

//        console.log(node);
//        console.log(edges);
    //waiton printer no actions
    if ((node.type == "printer" || node.type == "waiton") && node.actions == undefined) return true;
    if (node.actions == undefined) return false;
    //now we exam one by one
    for (var i = 0; i < node.actions.length; ++i) {
        if (node.actions[i].act === "Code") {//code
            var flag = true;
            for (var m = 0; m < node.actions[i].inputFileNames.length; ++m) {
                var included = false;
                for (var k = 0; k < inputResources.length; ++k) {
                    if (inputResources[k].urlReturnFileName === node.actions[i].inputFileNames[m]) {
                        included = true;
                        break;
                    }
                }
//                                console.log(included);
                flag = flag && included;
            }
//                        console.log(flag);
            return flag;
        } else if (node.actions[i].act === "Resource") {//web service
            var targetResource = node.actions[i].targetResource;
            //no web service
            if (myIncludeFieldIndex(inputResources, targetResource.urlReturnFileName, "urlReturnFileName") == -1) {
                return false;
            }
            
            var flag = true;
            for (var i = 0; i < targetResource.attributes.length; ++i) {
                if (targetResource.attributes[i].from !== "input") {
                    var resourceName = targetResource.attributes[i].from;
                    var index = myIncludeFieldIndex(inputResources, resourceName, "urlReturnFileName");
                    if (index === -1) {
                        flag = flag && false;
                    }
                }
            }
//                        console.log(flag);
            return flag;
        } else if (node.actions[i].act === "Function") {//web service
            var targetFunction = node.actions[i].targetFunction;
            var flag = true;
            for (var k = 0; k < targetFunction.attributes.length; ++k) {
//                                console.log(targetFunction.attributes[k].from);
                if (targetFunction.attributes[k].from !== "input") {
                    var resourceName = targetFunction.attributes[k].from;
//                                        console.log(resourceName);
                    var index = myIncludeFieldIndex(inputResources, resourceName, "urlReturnFileName");
                    if (index === -1) {
                        flag = flag && false;
                    }
                } else if (targetFunction.attributes[k].from === "input") {
                    if (targetFunction.attributes[k].type.includes("FILE") && targetFunction.attributes[k].value.length > 0) {
                        var resourceName = targetFunction.attributes[k].value;
                        var index = myIncludeFieldIndex(inputResources, resourceName, "urlReturnFileName");
                        if (index === -1) {
                            flag = flag && false;
                        }
                    }
                }
//                                console.log(flag);
            }
            return flag;
        } else if (node.actions[i].act === "Transformer Function") {//
            var transformResources = node.actions[i].transformResources;
//                        console.log(inputResources);
//                        console.log(transformResources);
            var flag = true;
            for (var k = 0; k < transformResources.length; ++k) {
                var resourceName = transformResources[k].Resource;
                var index = myIncludeFieldIndex(inputResources, resourceName, "urlReturnFileName");
                if (index === -1) {
                    flag = flag && false;
                }
            }
            var updateAttrs = node.actions[i].updateAttrs;
            console.log(libraries);
            console.log(updateAttrs);
            for (var k = 0; k < updateAttrs.length; ++k) {
                var libraryName = updateAttrs[k].action.libraryName;
                var index = myIncludeFieldIndex(libraries, libraryName, "libraryName");
                if (index === -1) {
                    flag = flag && false;
                }
            }
            return flag;

        } else if (node.actions[i].act === "IF") {//web service
            var flag = true;
//                        console.log(inputResources);
            for (var k = 0; k < node.actions[i].conditions.length; ++k) {
                var condition = node.actions[i].conditions[k];
                if (condition.logic === "") {
                    var resourceName = condition.resource;
//                                        console.log(resourceName);
                    var index = myIncludeFieldIndex(inputResources, resourceName, "urlReturnFileName");
                    if (index === -1) {
                        flag = flag && false;
                    }
//                                        console.log(flag);
                }
            }
            return flag;

        } else if (node.actions[i].act === "Combine" || node.actions[i].act === "Fusion") {//
            if (node.resourcesIn.length != 2) return false;
            
            for (var k = 0; k < node.actions[i].leftKeys.length; ++k) {
                if (myIncludeFieldIndex(node.resourcesIn[0].outAttributes, node.actions[i].leftKeys[k], "name") == -1
                        && myIncludeFieldIndex(node.resourcesIn[1].outAttributes, node.actions[i].leftKeys[k], "name") == -1) {
                    return false;
                }
            }
            for (var k = 0; k < node.actions[i].rightKeys.length; ++k) {
                if (myIncludeFieldIndex(node.resourcesIn[1].outAttributes, node.actions[i].rightKeys[k], "name") == -1
                        && myIncludeFieldIndex(node.resourcesIn[0].outAttributes, node.actions[i].rightKeys[k], "name") == -1) {
                    return false;
                }
            }
            
            return true;
            
        } else if (node.actions[i].act === "Repeat") {//
            if (node.actions[i].conditionType == 'count') {
                return true;
            } else {
                var flag = true;
                for (var k = 0; k < node.actions[i].conditions.length; ++k) {
                    var condition = node.actions[i].conditions[k];
                    if (condition.logic === "") {
                        var resourceName = condition.resource;
                        var index = myIncludeFieldIndex(inputResources, resourceName, "urlReturnFileName");
                        if (index === -1) {
                            flag = flag && false;
                        }
                    }
                }
                return flag;
            }
            
        } else if (node.actions[i].act === "procedure") {//
            console.log(node.actions[i].outputFileNames);
            return node.actions[i].outputFileNames.length == 0 ? false : true;
        } else if (node.actions[i].act === "print") {//
            var flag = true;
            var resourceName = node.actions[i].outputFileNames[0];
            var index = myIncludeFieldIndex(inputResources, resourceName, "urlReturnFileName");
            if (index === -1) {
                flag = flag && false;
            }
            return flag;
        } else {//terminal
            return true;
        }
    }
    return true;
}

