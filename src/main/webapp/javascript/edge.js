function generateEdge() {
    gotoNodeInfo();
    $('#infoTab1').text("Edge Info");
//        console.log("generateEdge");
    console.log(curData);
    var innerhtml = "";
    //from node
    var fromNode = data.nodes.get(curData.from);
//        console.log(fromNode);
    if (fromNode.libraries === undefined && fromNode.resourcesOut === undefined) {
        curData.resources = [];
        curData.libraries = [];
        $("#selectedinfo").html(innerhtml);
        $("#updatediv").html(innerhtml);
        data.edges.update(curData);
        return;
    }
    //library or resources
    if (curData.libraries !== undefined && curData.libraries.length > 0) {
        innerhtml += "<label class='label label-primary'>Librarys:</label><br>";
        innerhtml += generateLibraryFunction(curData, 'libraries', 'removeLibraries');
    }
    //resources
    if (curData.resources != undefined && curData.resources.length > 0) {
        innerhtml += "<label class='label label-primary'>Resources:</label><br>";
        innerhtml += generateDataResources(curData, 'resources', 'removeEdgeResources');
    }
//        console.log(innerhtml);
    $("#selectedinfo").html(innerhtml);

    //update
    //**********************************************************************************
    var updateinnerhtml = "";
    if (fromNode.libraries !== undefined && fromNode.libraries.length > 0) {
        //libraries
        updateinnerhtml += "<label class='label label-primary'>Libraries:</label>";
        updateinnerhtml += generateUpdateLibraries(fromNode.libraries);
        updateinnerhtml += "<br><button class='btn btn-primary' id='updatedata' onclick='updaupdateEdgeInfomation()'>Update Libraries</button>";
    }
    if (fromNode.resourcesOut !== undefined && fromNode.resourcesOut.length > 0) {
        //resources
        updateinnerhtml += "<label class='label label-primary'>Resources:</label>";

        updateinnerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
        updateinnerhtml += "<thead><tr><th></th><th><label>Resource name</label></th><th><label>Resource Type</label></th><th>Selected</th><tr></thead>";
        updateinnerhtml += "<tbody>";
        for (var i = 0; i < fromNode.resourcesOut.length; ++i) {
            updateinnerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
            updateinnerhtml += "<td>" + fromNode.resourcesOut[i].urlReturnFileName + "</td>";
            updateinnerhtml += "<td>" + fromNode.resourcesOut[i].urlReturnFileType + "</td>";
            updateinnerhtml += "<td>";
            var ind = myIncludeFieldIndex(curData.resources, fromNode.resourcesOut[i].id, 'id');
            if (ind != -1) {
                updateinnerhtml += "<input checked type='checkbox' id='" + fromNode.resourcesOut[i].resourceName + fromNode.resourcesOut[i].id + "'> select";
            } else {
                updateinnerhtml += "<input type='checkbox' id='" + fromNode.resourcesOut[i].resourceName + fromNode.resourcesOut[i].id + "'> select";
            }
            updateinnerhtml += "</td></tr>";

            updateinnerhtml += "<tr class='hideit select-row'><td colspan=4>";
            if (fromNode.resourcesOut[i].resourceType === "CSV" || fromNode.resourcesOut[i].resourceType === "XML" || fromNode.resourcesOut[i].resourceType === "Other") {
                updateinnerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
                updateinnerhtml += "<tr>";
                updateinnerhtml += "<td>Organization</td>";
                updateinnerhtml += "<td colspan='2'>" + fromNode.resourcesOut[i].organization + "</td>";
                updateinnerhtml += "</tr>";
                updateinnerhtml += "<tr>";
                updateinnerhtml += "<td>description</td>";
                updateinnerhtml += "<td colspan='2'>" + fromNode.resourcesOut[i].description + "</td>";
                updateinnerhtml += "</tr>";
                updateinnerhtml += "</table>";
            } else {//need input
                updateinnerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
                updateinnerhtml += "<tr>";
                updateinnerhtml += "<td>Organization</td>";
                updateinnerhtml += "<td>" + fromNode.resourcesOut[i].organization + "</td>";
                updateinnerhtml += "</tr>";
                updateinnerhtml += "<tr>";
                updateinnerhtml += "<td>description</td>";
                updateinnerhtml += "<td>" + fromNode.resourcesOut[i].description + "</td>";
                updateinnerhtml += "</tr>";
                updateinnerhtml += "<tr>";
                updateinnerhtml += "<td>URL</td>";
                updateinnerhtml += "<td>" + fromNode.resourcesOut[i].url + "</td>";
                updateinnerhtml += "</tr>";
                updateinnerhtml += "<tr>";
                updateinnerhtml += "<td>method</td>";
                updateinnerhtml += "<td>" + fromNode.resourcesOut[i].method + "</td>";
                updateinnerhtml += "</tr>";

                updateinnerhtml += "<tr><td colspan='2'>Params Exmaple</td></tr>";
                if (fromNode.resourcesOut[i].attributes !== undefined && fromNode.resourcesOut[i].attributes.length > 0) {
                    for (var j = 0; j < fromNode.resourcesOut[i].attributes.length; ++j) {
                        if (fromNode.resourcesOut[i].attributes[j].shown === true) {
                            updateinnerhtml += "<tr>";
                            updateinnerhtml += "<td>" + fromNode.resourcesOut[i].attributes[j].name + "</td>";
                            updateinnerhtml += "<td>" + fromNode.resourcesOut[i].attributes[j].example + "</td>";
                            updateinnerhtml += "</tr>";
                        }
                    }
                }
                updateinnerhtml += "</table>";
            }
            updateinnerhtml += "</td></tr>";
        }

        updateinnerhtml += "</tbody></table>";

        updateinnerhtml += "<br><button class='btn btn-primary' id='updatedata' onclick='updaupdateEdgeInfomation()'>Update Resources</button>";
    }
    $("#updatediv").html(updateinnerhtml);
    bindEdgeFunctions();
}

function removeLibraries(index) {
    console.log('removeLibraries');
    curData.label = curData.label.replace(curData.libraries[index].libraryName + "\n", "");
    curData.libraries.splice(index, 1);
    data.edges.update(curData);

    var nodeTo = data.nodes.get(curData.to);
    if (nodeTo.type === 'adapter' || nodeTo.type === 'analytics' || nodeTo.type == "nested" || nodeTo.type === "terminal") {
        nodeTo.librariesIn = JSON.parse(JSON.stringify(curData.libraries));
        console.log(nodeTo);
        checkNextNodeTypeError(nodeTo);
        data.nodes.update(nodeTo);
    }
    generateEdge();

}

function removeEdgeResources(index) {
    console.log('removeEdgeResources');
    curData.label = curData.label.replace(curData.resources[index].urlReturnFileName + "\n", "");
    var resource = curData.resources[index];
    curData.resources.splice(index, 1);
    data.edges.update(curData);

    var nodeTo = data.nodes.get(curData.to);
    if (nodeTo.type === 'adapter' || nodeTo.type === 'analytics' || nodeTo.type == "nested"
            || nodeTo.type === 'data' || nodeTo.type === 'combine' || nodeTo.type === 'fusion'
            || nodeTo.type === "terminal" || nodeTo.type === 'printer' || nodeTo.type === 'IO'
            || nodeTo.type === "if" || nodeTo.type === "repeat" || nodeTo.type === 'waiton' || nodeTo.type === 'connect') {
//                nodeTo.resourcesIn = JSON.parse(JSON.stringify(curData.resources));
        var ind = myIncludeFieldIndex(nodeTo.resourcesIn, resource.id, "id");
        nodeTo.resourcesIn.splice(ind, 1);
        updateNodes(nodeTo);
//                data.nodes.update(nodeTo);
//                checkNextNodeTypeError(nodeTo);
    }

    generateEdge();
}

function updaupdateEdgeInfomation() {
    console.log("updaupdateEdgeInfomation");

    var fromNode = data.nodes.get(curData.from);
    var nodeTo = data.nodes.get(curData.to);
    console.log(curData);
    console.log(fromNode);
    console.log(nodeTo);


    curData.resources = [];
    curData.libraries = [];
    curData.label = "";
    //update cur edge
    if (fromNode.resourcesOut !== undefined) {
        for (var i = 0; i < fromNode.resourcesOut.length; ++i) {
            if ($("[id='" + fromNode.resourcesOut[i].resourceName + fromNode.resourcesOut[i].id + "']").is(':checked')) {
                var ind = myIncludeFieldIndex(curData.resources, fromNode.resourcesOut[i].id, "id");
                if (ind === -1) {//new
                    curData.resources.push(JSON.parse(JSON.stringify(fromNode.resourcesOut[i])));
                    curData.label += fromNode.resourcesOut[i].urlReturnFileName + "\n";
                } else {//old
                    //update label
                    curData.label = curData.label.replace(curData.resources[ind].urlReturnFileName + "\n", "");
                    curData.resources[ind] = JSON.parse(JSON.stringify(fromNode.resourcesOut[i]));
                    curData.label += curData.resources[ind].urlReturnFileName + "\n";
                }
            }
        }
    }
    if (fromNode.libraries !== undefined) {
        for (var i = 0; i < fromNode.libraries.length; ++i) {
            if ($("[id='librarywebservice" + i + "']").is(':checked')) {
                var ind = myIncludeFieldIndex(curData.libraries, fromNode.libraries[i].id, "id");
                if (ind === -1) {//new
                    curData.libraries.push(JSON.parse(JSON.stringify(fromNode.libraries[i])));
                    curData.label += fromNode.libraries[i].libraryName + "\n";
                } else {//old
                    //update label
                    curData.label = curData.label.replace(curData.libraries[ind].libraryName + "\n", "");
                    curData.libraries[ind] = JSON.parse(JSON.stringify(fromNode.libraries[i]));
                    curData.label += curData.libraries[ind].libraryName + "\n";
                }
            }
        }
    }
    data.edges.update(curData);
    //update next node
    if (fromNode.type === 'library') {
        if (nodeTo.type === 'adapter' || nodeTo.type === 'analytics' || nodeTo.type == "nested") {
            nodeTo.librariesIn = JSON.parse(JSON.stringify(curData.libraries));
        }
    } else {
        if (nodeTo.type === 'adapter' || nodeTo.type === 'analytics' || nodeTo.type == "nested"
                || nodeTo.type === 'data' || nodeTo.type === 'combine' || nodeTo.type === 'fusion'
                || nodeTo.type === "terminal" || nodeTo.type === 'printer' || nodeTo.type === 'IO'
                || nodeTo.type === "if" || nodeTo.type === "repeat" || nodeTo.type === 'waiton' || nodeTo.type === 'connect') {
            nodeTo.resourcesIn = addresourcesIn(nodeTo.resourcesIn, JSON.parse(JSON.stringify(curData.resources)));
        }
    }
    data.nodes.update(nodeTo);

//        checkNextNodeTypeError(nodeTo);

    updateNodes(nodeTo);

    generateEdge();
    gotoNodeInfo();
}

function bindEdgeFunctions() {
//        console.log('bindEdgeFunctions');

    $(".collapsecolumn").unbind('click');
    $(".collapsecolumn").on('click', function (event) {
        $parent = $(this).parent();
        $parent.next().slideToggle();
        $glyphicon = $(this).find("span.glyphicon").first();
        $glyphicon.toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
    });

}