function generateUpdateData() {
    colorFun.reset();
    var innerhtml = "<label class='label label-primary'>Search Resources:</label>";
    innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td width='10%'><label>Match Type:</label></td>";
    innerhtml += "<td><div id='radiogroup'><input type='radio' checked value='active' name='matchtype'><label>Active Matching</label><input type='radio' value='direct'  name='matchtype'><label>Direct Matching</label></div></td>";
    innerhtml += "<tr id='topkrow'><td width='10%'><label>Top-k Matching k:</label></td>";
    innerhtml += "<td><select id='dataupdateselect' class='form-control'><option value='1'>1</option><option value='2'>2</option><option value='3' selected>3</option><option value='4'>4</option><option value='5'>5</option><option value='50'>Return All</option></select></td></tr>";
//        innerhtml += "<tr><td><label class='label label-primary'>Filter:</label></td>";
    innerhtml += "<tr><td><label>Filter:</label></td>";
    innerhtml += "<td>";
//        innerhtml += "<button type='button' class='btn btn-success btn-sm' onclick='queryTreeCreate();'><i class='glyphicon glyphicon-asterisk'></i> Create</button>";
    innerhtml += "<div id='querytree' style='width: 100px;'></div></td></tr>";
    innerhtml += "<tr><td colspan='2'><button class='btn btn-info' onclick='callDataWS()'>Search</button></td><tr>";
    innerhtml += "</tbody></table>";

    innerhtml += "<label class='label label-primary'>Results:</label>";
    innerhtml += "<div id='dataupdateresult'></div>";
    innerhtml += "<img class='hideit' src='image/loading.gif' style='position:relative;left:46%;height:5vh;width:5vh;'/>";
    innerhtml += "<br>";
    innerhtml += "<button class='btn btn-info' id='updatedata' onclick='updatedata()'>Update Resource</button>";
//        innerhtml += "<button class='btn btn-info' id='updatedata' onclick='test()'>Update Resource</button>";
//        $("#updatediv").html(innerhtml);
    return innerhtml;
}

function editCallBack(node, status, cancelled) {
    var parent = $("#querytree").jstree("get_parent", node);
    var color = colorFun.generateColor();
    var backgroundString = "background-color: rgb(" + color.r + ", " + color.g + ", " + color.b + ") !important";

    if (node.a_attr.style === undefined) {
        node.a_attr.style = backgroundString;
    }

    if (parent === "#" && node.text != " ") {
        var children = $('#querytree').jstree("get_children_dom", node);
        var flag = true;
        for (var i = 0; i < children.length; ++i) {
            var text = $(children[i]).find(".jstree-anchor").text();
            if (text === " ") {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            $('#querytree').jstree("create_node", node, " ", "last", function (newNode) {
//                                console.log('node called');
                $('#querytree').jstree("open_node", node);
                setTimeout(function () {
                    $('#querytree').jstree("edit", newNode, newNode.text, editCallBack);
                }, 100);
            });
        }
    } else if (node.text != " ") {
        var children = $('#querytree').jstree("get_children_dom", parent);
        var flag = true;
        for (var i = 0; i < children.length; ++i) {
            var text = $(children[i]).find(".jstree-anchor").text();
            if (text === " ") {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            $('#querytree').jstree("create_node", parent, " ", "last", function (newNode) {
//                                console.log('I am called');
                setTimeout(function () {
                    $('#querytree').jstree("edit", newNode, newNode.text, editCallBack);
                }, 100);
            });
        }
    }
}

function returnQueryTree(id) {
    var v = $('#' + id).jstree(true).get_json('#');
    var queryTree = generateQueryTree(v[0]);
    return queryTree;
}

function generateQueryTree(cur) {
    var node = {};
//        console.log(cur);
    if (cur === undefined || cur == null)
        return node;
    node.text = cur.text;
    node.a_attr = {};
    node.a_attr.style = cur.a_attr.style;
    node.selected = cur.state.selected;
    node.id = cur.id;
    node.children = [];
    if (cur.children !== undefined) {
        for (var i = 0; i < cur.children.length; ++i) {
            if (cur.children[i].text !== " ") {
                node.children.push(generateQueryTree(cur.children[i]));
            }
        }
    }
    return node;
}

var resources = null;

function bindDataFunctions() {
    $("#radiogroup input").change(function () {
        if ($(this).val() === 'direct') {
            $('#topkrow').hide();
        } else {
            $('#topkrow').show();
        }
    });

    $(".collapsecolumn").unbind('click');
    $(".collapsecolumn").on('click', function (event) {
        $parent = $(this).parent();
        $parent.next().slideToggle();
        $glyphicon = $(this).find("span.glyphicon").first();
        $glyphicon.toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
    });

}


function callDataWS() {
    var queryTree = returnQueryTree('querytree');

    if (queryTree === undefined || queryTree === null) {
        resources = [];
        generateResourcesTable();
        return;
    }
    //uploading icon
    $('#dataupdateresult').html("");
    $('#dataupdateresult').next().show();
    
    var username = localStorage.getItem("user");
    
    var url = baseurl + "recommend/resourceWS?queryTree=" + encodeURI(JSON.stringify(queryTree))
            + "&matchType=" + $("input[name='matchtype']:radio:checked").val()
            + "&topk=" + $("#dataupdateselect option:selected").val()
            + "&username=" + username;
//    console.log(url);
    $.ajax({
        url: url,
        type: "get"
    }).then(function (data) {
        $('#dataupdateresult').next().hide();
        resources = JSON.parse(data);
        console.log(resources);
        generateResourcesTable(resources);
    });
}

//function test() {
//         var url = "http://localhost:8084/AutoInterfaceWS/recommend/resourceWS?queryTree={\"text\":\"pdb\",\"a_attr\":{\"style\":\"background-color: rgb(205, 165, 10) !important\"},\"id\":\"j4_1\",\"children\":[]}&matchType=active&topk=3";
//        console.log(url);
//        $.ajax({
//                url: url,
//                type: "get"
//        }).then(function (data) {
//                $('#dataupdateresult').next().hide();
//                resources = JSON.parse(data);
//                console.log(resources);
//                generateResourcesTable(resources);
//        });
//}
var dataJSTreeSelectedOldResource = null;
function generateResourcesTable(resources) {
//        console.log("generateResourcesTable");
    if (resources === undefined || resources === null || resources.length === 0) {
        $('#dataupdateresult').html("");
        return;
    }
    var innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;table-layout:auto;'>";
    innerhtml += "<thead><tr><th></th><th><label>Resource name</label></th><th><label>Description</label></th><th><label>Aggregate Name</label></th><th width='30%'><label>URL</label></th><th><label>Return Schema</label></th><th><label>Return File Type</label></th><th><label>Params</label></th><th>Selected</th><tr></thead>";
    innerhtml += "<tbody>";
    for (var i = 0; i < resources.length; ++i) {
        var ind = myIncludeFieldIndex(curData.resources, resources[i].id, "id");
        if (ind !== -1) {//selected
            continue;
        }
        innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
        innerhtml += "<td>" + resources[i].resourceName + "</td>";
        innerhtml += "<td>" + resources[i].description + "</td>";
        innerhtml += "<td>" + resources[i].aggregateName + "</td>";
        innerhtml += "<td>" + resources[i].url + "</td>";
        innerhtml += "<td width ='100%'><div id='returnTargetTree" + i + "' style='width: 100px;'></div></td></td>";
        innerhtml += "<td>" + resources[i].urlReturnFileType + "</td>";
        innerhtml += "<td>";
        if (resources[i].attributes !== undefined) {
            for (var j = 0; j < resources[i].attributes.length; ++j) {
                if (resources[i].attributes[j].shown === true) {
                    innerhtml += "<span class='badge alert-info' title='" + resources[i].attributes[j].description + "'>" + resources[i].attributes[j].name + "</span>&nbsp;";
                }
            }
        }
        innerhtml += "</td>";

        innerhtml += "<td>";
        innerhtml += "<input type='checkbox' id='" + resources[i].resourceName + "'> select";
        innerhtml += "</td></tr>";
        //update information
        innerhtml += "<tr class='hideit select-row'><td colspan=8>";

        innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
        innerhtml += "<thead><th>Param</th><th>Example</th></thead>";
        innerhtml += "<tbody>";
        if (resources[i].attributes !== undefined) {
            for (var j = 0; j < resources[i].attributes.length; ++j) {
                if (resources[i].attributes[j].shown === true) {
                    innerhtml += "<tr>";
                    if (resources[i].attributes[j].required === true) {
                        innerhtml += "<td>" + resources[i].attributes[j].name + "*</td>";
                    } else {
                        innerhtml += "<td>" + resources[i].attributes[j].name + "</td>";
                    }
                    innerhtml += "<td>" + resources[i].attributes[j].example + "</td>";
                    innerhtml += "</tr>";
                }
            }
        }
        innerhtml += "</tobdy></table>";
        innerhtml += "</td></tr>";

    }
    innerhtml += "<tbody></table>";
    $('#dataupdateresult').html(innerhtml);
//    console.log(resources);
//        console.log(JSON.stringify(Array.from(resources[0].jsUrlReturnFileSchema)));
    //assign value
    for (var i = 0; i < resources.length; ++i) {
        var receiveddata = '[' + JSON.stringify(resources[i].jsUrlReturnFileSchema) + ']';
        $("[id='returnTargetTree" + i + "']").jstree({
            "core": {
                "animation": 0,
                "dblclick_toggle": false,
                "check_callback": true,
                "themes": {
                    "icons": false},
                'data': eval(receiveddata)
            },
            "types": {
                "#": {
                    "max_children": 10,
                    "max_depth": 10,
                    "valid_children": ["root"]
                },
                "root": {
                    "icon": "/static/3.3.2/assets/images/tree_icon.png",
                    "valid_children": ["default"]
                },
                "default": {
                    "valid_children": ["default", "file"]
                },
                "file": {
                    "icon": "glyphicon glyphicon-file",
                    "valid_children": []
                }
            },
            "plugins": [
                "wholerow"
            ]
        });
//        if (ind !== -1 && (resources[i].resourceType == 'CSV'
//                || resources[i].resourceType == 'XML'
//                || resources[i].resourceType == 'SQL')
//                ) {//not selected
//            $("[id='returnTargetTree" + i + "']").bind("dblclick.jstree", function (event) {
//                var node = $(this).jstree("get_selected");
//                $(this).jstree("edit", node, node.text, null);
//            });
//        }

        $("[id='" + resources[i].resourceName + "']").change(function () {
            var jstree = $(this).parent().parent().find("[id^='returnTargetTree']");
            var name = $(this).closest("tr").find("td").eq(1).text();
            var k = 0;
            for (; k < resources.length; ++k) {
                if (resources[k].resourceName == name) {
                    break;
                }
            }
            dataJSTreeSelectedOldResource = {
                "resourceName": name,
                "oldAttr": "",
                "newAttr": ""
            };
            if (resources[k].resourceType == 'CSV'
                    || resources[k].resourceType == 'XML'
                    || resources[k].resourceType == 'SQL'
                    ) {
                jstree.unbind("dblclick.jstree");
                if ($(this).is(':checked')) {
                    jstree.bind("dblclick.jstree", function (event, a, b) {
                        if (event.target.text != undefined) {
                            dataJSTreeSelectedOldResource.oldAttr = event.target.text;
                        } else {
                            dataJSTreeSelectedOldResource.oldAttr = $(event.target).parent().find("a").text();
                        }

                        var node = $(this).jstree("get_selected");
//                        console.log("double click");
                        $(this).jstree("edit", node, node.text, updateMatching);
                    });
                }
            }
        });
    }

    bindDataFunctions();
}

function updateMatching(node, status, cancelled) {
    dataJSTreeSelectedOldResource.newAttr = node.text;
//    console.log(node.text);
//    console.log(dataJSTreeSelectedOldResource);
    if (dataJSTreeSelectedOldResource.oldAttr == dataJSTreeSelectedOldResource.newAttr)
        return;
    if (data.globalmatch == undefined) {
        data.globalmatch = [];
    }

    var index = myIncludeFieldIndex(data.globalmatch, dataJSTreeSelectedOldResource.resourceName, 'resourceName');
    if (index == -1) {
        var element = {
            resourceName: dataJSTreeSelectedOldResource.resourceName,
            mapped: []
        };
        element.mapped.push({
            oldAttr: dataJSTreeSelectedOldResource.oldAttr,
            newAttr: dataJSTreeSelectedOldResource.newAttr
        });
        data.globalmatch.push(element);
    } else {
        var element = data.globalmatch[index];
        var index3 = myIncludeFieldIndex(element.mapped, dataJSTreeSelectedOldResource.oldAttr, 'oldAttr');
        //old old
        if (index3 != -1) {
            element.mapped[index3].newAttr = dataJSTreeSelectedOldResource.newAttr;
            return ;
        }
        
        var index2 = myIncludeFieldIndex(element.mapped, dataJSTreeSelectedOldResource.oldAttr, 'newAttr');
        if (index2 == -1) {
            element.mapped.push({
                oldAttr: dataJSTreeSelectedOldResource.oldAttr,
                newAttr: dataJSTreeSelectedOldResource.newAttr
            });
        } else {
            if (element.mapped[index2].oldAttr == dataJSTreeSelectedOldResource.newAttr) {
                element.mapped.splice(index2);
                if (element.mapped.length == 0) {
                    data.globalmatch.splice(index);
                }
            } else {
                element.mapped[index2].newAttr = dataJSTreeSelectedOldResource.newAttr;
            }
        }
    }
    console.log(data.globalmatch);
}






function removeResource(index) {
//        console.log('remove ' + index);
//        var pattern = curData.resources[index].urlReturnFileName + "\\r?";
//        var regex = new RegExp(pattern, "gi");
//        curData.label = curData.label.replace(regex, "");
    var resourceName = curData.resources[index].resourceName;
    curData.resources.splice(index, 1);
    if (curData.resources.length == 0) {
        curData.label = "";
    }
    curData.resourcesOut = curData.resources;
    data.nodes.update(curData);
    updateNodes(curData);
    
    var i = 0;
    while (i < data.globalmatch.length) {
        if (data.globalmatch[i++].resourceName == resourceName) {
            data.globalmatch.splice(index, 1);
            break;
        }
    }
    
    //init.js
    generateInnerhtml(curData);
}

function updatedata() {
    console.log("updatedata");
    curData.label = "";
    //update resources
    if (resources !== undefined) {
        for (var i = 0; i < resources.length; ++i) {
            if ($("[id='" + resources[i].resourceName + "']").is(':checked')) {
                if (curData.label.length > 0 && curData.label != resources[i].aggregateName) {
                    alert("data icon requires all resources from the the aggregate resources");
                    return;
                }
                curData.label = resources[i].aggregateName;
                var queryTree = returnQueryTree('returnTargetTree' + i);
//                console.log(queryTree);
                //copy all
                var newRes = JSON.parse(JSON.stringify(resources[i]));
                newRes.jsUrlReturnFileSchema = queryTree;
                newRes.urlReturnFileName = newRes.resourceName;
                //change outattribute names
                var index = myIncludeFieldIndex(data.globalmatch, resources[i].resourceName, "resourceName");
//                console.log(index);
                if (index != -1) {
                    for (var j = 0; j < newRes.outAttributes.length; ++j) {
//                        console.log(data.globalmatch[index].mapped);
                        var index2 = myIncludeFieldIndex(data.globalmatch[index].mapped, newRes.outAttributes[j].name, "oldAttr");
//                        console.log(newRes.outAttributes[j]);
//                        console.log(index2);
                        if (index2 != -1) {
                            newRes.outAttributes[j].name = data.globalmatch[index].mapped[index2].newAttr;
                        }
                    }
                }
                curData.resources.push(newRes);
            }
        }
    }
    curData.resourcesOut = curData.resources;
    data.nodes.update(curData);
    //we need update the edges
    updateNodes(curData);
    console.log(data.globalmatch);
    generateInnerhtml();
    gotoNodeInfo();


}

function gotoNodeInfo() {
    $("#nodeinfopanel li").removeClass("active");
    $("#nodeinfopanel li:first").addClass("active");
    $("#nodeinfo").addClass("active").addClass("in");
    $("#nodeupdate").removeClass("active").removeClass("in");
}

function gotoNodeupdate() {
    $("#nodeinfopanel li").removeClass("active");
    $("#nodeinfopanel li:last").addClass("active");
    $("#nodeinfo").removeClass("active").removeClass("in");
    $("#nodeupdate").addClass("active").addClass("in");
}

