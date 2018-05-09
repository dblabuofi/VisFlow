var nodes = null;
var edges = null;
var network = null;
// randomly create some nodes and edges
var data = getScaleFreeNetwork();
var newdata = null;
var options = null;
var removeNewOne = false;
var curdata = null; //this is global!!

function destroy(network) {
    if (network !== null) {
        network.destroy();
        network = null;
    }
}

function draw() {
    destroy(network);
    nodes = [];
    edges = [];
    // create a network
    var container = document.getElementById('mynetwork');
    options = {
        locale: 'en',
        physics: {
            "enabled": false,
        },
        edges: {
            smooth: {
                type: 'continuous'
            },
            selfReferenceSize: 0
        },
        interaction: {
            navigationButtons: true,
            selectConnectedEdges: false
        }
    };
    network = new vis.Network(container, data, options);

    //click node show information
    //edit edge model will disable this listen
    network.on("click", function (params) {
//        console.log(params);
        removeNewOne = false;
        if (params.edges.length > 0 && params.nodes.length === 0) {
            if ($('#adddelete').is(':focus')) {
                console.log('delete Selected');
                bakdata = deepCopy(data);
                data.edges.remove(params.edges[0]);
                validateNodes();
            } else {
                clearHighlights(data.nodes);
                curData = data.edges.get(params.edges[0]);
                generateEdge();
            }
        } else if (params.nodes.length > 0) {
            //we need update the position
//            var node = data.nodes.get(params.nodes[0]);
//            node.x = params.pointer.canvas.x;
//            node.y = params.pointer.canvas.y;
//            data.nodes.update(node);
            if (isFocused()) {
                if ($('#addarrow').is(':focus')) {
                } else {
                    removeNewOne = true;
                }
            } else {
                if ($('#adddelete').is(':focus')) {
                    console.log('delete Selected');
                    bakdata = deepCopy(data);
                    var cur = params.nodes[0];
                    for (var i = 0; i < params.edges.length; ++i) {
                        data.edges.remove(params.edges[i]);
                    }

                    for (var i = 0; i < params.nodes.length; ++i) {
                        data.nodes.remove(params.nodes[i]);
                    }
                    validateNodes();
                } else {
                    clearHighlights(data.nodes);
                    curData = data.nodes.get(params.nodes[0]);
                    generateInnerhtml();
                    //                console.log(curData);
                    //highlight it
                    if (!curData.image.includes('hightlight')) {
                        curData.image = curData.image.replace(".", " highlight.");
                        data.nodes.update(curData);
                    }
                    if ($('#addselect').is(':focus')) {
                        if ($('#nodeinfobuttonshow').hasClass('hideit')) {
                            nodeinfoclick();
                        }
                    }
                }
            }
        } else {
            clearHighlights(data.nodes);
        }
    });

    network.on('dragEnd', function (params) {
        if (params.nodes.length > 0) {
            var node = data.nodes.get(params.nodes[0]);
            node.x = params.pointer.canvas.x;
            node.y = params.pointer.canvas.y;
            data.nodes.update(node);
        }

    });

}

function generateInnerhtml() {
    gotoNodeInfo();
    $('#infoTab1').text("Node Info");
    console.log(curData);
    var innerhtml = generateNodeShow(curData);
    $("#selectedinfo").html(innerhtml);

    if (procedureShowData.length == 0) {
        var updatehtml = generateUpdatePage(curData);
        $("#updatediv").html(updatehtml);
    } else {
        $("#updatediv").html("");
    }
    bindUpdateFunctions(curData);
}

function generateUpdatePage(curData) {
//    console.log(curData);
    var innerhtml = "";
    if (curData.type === "data") {
        innerhtml += generateUpdateData();
    } else if (curData.type === "combine") {
        innerhtml += generateUpdateCombine('Combine');
    } else if (curData.type === "fusion") {
        innerhtml += generateUpdateCombine('Fusion');
    } else if (curData.type === "analytics") {
        innerhtml += generateUpdateAnalytics();
    } else if (curData.type === "adapter") {
        innerhtml += generateUpdateAdapter();
    } else if (curData.type === "terminal") {
        innerhtml += generateUpdateTerminal();
    } else if (curData.type === "library") {
        innerhtml += generateUpdateLibrary();
    } else if (curData.type === "printer") {
    } else if (curData.type === "IO") {
        innerhtml += generateUpdateIO();
    } else if (curData.type === "waiton") {
        innerhtml += generateUpdateWaiton();
    } else if (curData.type === "if") {
        innerhtml += generateUpdateIF();
    } else if (curData.type === "repeat") {
        innerhtml += generateUpdateRepeat();
    } else if (curData.type === "connect") {
        innerhtml += generateUpdateConnect();
    } else if (curData.type === "nested") {
        innerhtml += generateUpdateNested();
    } else {
    }
    return innerhtml;
}
function bindUpdateFunctions(curData) {
    //we bind our output function
    //binding function and call functions
    if (curData.type === "data") {
        $('#querytree').jstree({
            "core": {
                "animation": 0,
                "dblclick_toggle": false,
                "check_callback": function (op, node, par, pos, more) {
                    if (op === "delete_node") {
                        if (node.parent === '#') {
                            return false;
                        }
                    }
                    return true;
                },
                "themes": {
                    "icons": false},
                'data': [
                    {"text": " "}
                ]
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
                "contextmenu", "dnd", "search",
                "state", "types", "wholerow"
            ]
        });
        $('#querytree').bind("dblclick.jstree", function (event) {
            var node = $("#querytree").jstree("get_selected");
            $('#querytree').jstree("edit", node, node.text, editCallBack);
        });


        bindDataFunctions();
    } else if (curData.type === "analytics") {
        analyticsSelectChange();
        bindAnalyticsFunctions();
    } else if (curData.type === "adapter") {
        adapterSelectChange();
        bindAdapterFunctions();
    } else if (curData.type === "terminal") {
        if (curData.resourcesIn != undefined) {
            recommendShowFunctions(curData.resourcesIn);
        }
        bindTerminalFunctions();
    } else if (curData.type === "library") {
        $('#querytree').jstree({
            "core": {
                "animation": 0,
                "dblclick_toggle": false,
//                         "check_callback": true,
                "check_callback": function (op, node, par, pos, more) {
                    if (op === "delete_node") {
                        if (node.parent === '#') {
                            return false;
                        }
                    }
                    return true;
                },
                "themes": {
                    "icons": false},
                'data': [
                    {"text": " "}
                ]
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
                "contextmenu", "dnd", "search",
                "state", "types", "wholerow"
            ]
        });

        $('#querytree').bind("dblclick.jstree", function (event) {
            var node = $("#querytree").jstree("get_selected");
            $('#querytree').jstree("edit", node, node.text, editCallBack);
        });
        bindLibraryFunctions();
    } else if (curData.type === "printer") {
        bindPrinterFunctions();
    } else if (curData.type === "combine") {
        bindCombineFunctions();
    } else if (curData.type === "fusion") {
        bindFusionFunctions();
    } else if (curData.type === "IO") {
        bindIOFunctions();
    } else if (curData.type === "waiton") {
        bindWaitOnFunctions();
    } else if (curData.type === "if") {
        $("[id='ifUpdateCondition']").chained("[id='ifUpdateGroupCondition']");
        bindIFFunctions();
    } else if (curData.type === "repeat") {
        $("[id='repeatUpdateRepeatCondition']").chained("[id='repeatUpdateRepeatResource']");
        bindRepeatFunctions();
    } else if (curData.type === "connect") {
        bindConnectFunctions();
    } else if (curData.type === "nested") {
//      bindUpdateFunctions();
        bindProcedureFunctions();
    } else {
    }


}

function clearHighlights(nodes) {
    nodes.forEach(function (n) {
        if (n.image !== undefined && n.image.includes('highlight')) {
            n.image = n.image.replace(" highlight", "");
            data.nodes.update(n);
        }
    });
}

function cancelEdit(callback) {
    clearPopUp();
    callback(null);
}

function addEdge() {
    console.log('add edge');
    network.addEdgeMode();
}

function editEdge() {
    console.log('edit edge');

//    disableDrag();
//    options.interaction.dragView = false;
//    options.interaction.dragNodes = false;
//    network.setOptions(options);
    network.editEdgeMode();
}

function addNetworkNode(type) {
    disableDrag();
    clearHighlights(data.nodes);

    newdata = {};
    newdata.type = type;
    if (type === 'arrow') {
        addEdge();
        return;
    }
    console.log('add node');
    newdata.image = "image/" + type + " error.png";
    newdata.shape = 'image';
    newdata.resources = [];
    newdata.libraries = [];
    newdata.resourcesIn = [];
    newdata.resourcesOut = [];
    if (type === "data") {
    } else if (type === "table") {
    } else if (type === "slice") {
    } else if (type === "join") {
    } else if (type === "if") {
    } else {
    }

    network.addNodeMode();
}


function clearblur() {
    $('#adddatainput').blur();
    $('#addanalyticsinput').blur();
    $('#addadapterinput').blur();
    $('#addterminalinput').blur();
    $('#addprinterinput').blur();
    $('#addcombineinput').blur();
    $('#addfusioninput').blur();
    $('#addioinput').blur();
    $('#addwaitoninput').blur();
    $('#addprocedureinput').blur();
    $('#addlibraryinput').blur();
    $('#addifinput').blur();
    $('#addarrowinput').blur();
    $('#addconnectinput').blur();
    $('#addselectinput').blur();
    $('#adddeleteinput').blur();
    $('#addundeleteinput').blur();

}

function isFocused() {
    var res = false;
    if ($('#adddata').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addanalytics').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addadapter').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addterminal').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addprinter').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addcombine').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addfusion').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addio').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addwaiton').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addprocedure').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addlibrary').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addif').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addrepeat').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addarrow').is(':focus')) {
        res = true;
        return res;
    }
    if ($('#addconnect').is(':focus')) {
        res = true;
        return res;
    }
    return res;
}

function disableDrag() {
    options.interaction.dragNodes = false;
    options.interaction.dragView = false;
    network.setOptions(options);
}

function allowDrag() {
    options.interaction.dragNodes = true;
    options.interaction.dragView = true;
    network.setOptions(options);
}

function hideAlert() {
    $('#alertdiv').addClass('hideit');
}

function showErrorMessage(message) {
    $('#errorMessage').html(message);
    $('#alertdiv').removeClass('hideit');
    setTimeout(function () {
        $('#alertdiv').addClass('hideit');
    }, 3000);
}

function saveFun() {
    console.log(JSON.stringify({nodes: data.nodes.get(), edges: data.edges.get(), globalmatch: data.globalmatch}));
}

//we need add the arrow
var arrSize = data.edges.length;
setInterval(function () {
    if (arrSize + 1 === data.edges.length) {
        if (data.edges.length > 0) {
            var ids = data.edges.getIds();
            for (var i = 0; i < ids.length; ++i) {
                var e = data.edges.get(ids[i]);
                if (e.from === e.to) {
                    data.edges.remove(e.id);
                    return;
                }
            }

            var edge = data.edges.get(ids[ids.length - 1]);//get newest one
            if (validateEdge(data.edges, edge)) {
                edge.arrows = 'to';
                if (edge.label === undefined)
                    edge.label = "";
                if (edge.resources === undefined)
                    edge.resources = [];
                if (edge.libraries === undefined)
                    edge.libraries = [];
                data.edges.update(edge);
                var from = data.nodes.get(edge.from);
                var to = data.nodes.get(edge.to);
//                                updateEdgeInfo(edge, from);
//                                updateNodes(to);
            } else {
                data.edges.remove(edge.id);
            }
        }
        validateNodes();
    }
    arrSize = data.edges.length;
}, 50)

var arrSizeNode = data.nodes.length;
setInterval(function () {
    if (arrSizeNode + 1 === data.nodes.length) {
        if (data.nodes.length > 0) {
            var ids = data.nodes.getIds();
            for (var i = 0; i < ids.length; ++i) {
                var node = data.nodes.get(ids[i]);
                if (removeNewOne === true) {
                    if (node.image === undefined) {
                        data.nodes.remove(node.id);
                        break;
                    }
                } else {
                    if (node.image === undefined) {
                        node.label = "";
                        node.type = newdata.type;
                        node.image = newdata.image;
                        node.shape = newdata.shape;
                        node.resources = newdata.resources;
                        node.libraries = newdata.libraries;
                        node.resourcesIn = newdata.resourcesIn;
                        node.resourcesOut = newdata.resourcesOut;
                        node.font = {align: 'left'};
                        data.nodes.update(node);
                        break;
                    }
                }
            }
            validateNodes();
        }
    }
    arrSizeNode = data.nodes.length;
}, 50)

//delete event
$('html').keyup(function (e) {
//        console.log(e);
//        console.log(document.activeElement);
//        console.log(document.activeElement.tagName);
//        console.log(document.activeElement.tagName.toLowerCase());
    var focusedElement = document.activeElement;
    if (e.keyCode == 46 && focusedElement.tagName.toLowerCase() !== "textarea" && focusedElement.tagName.toLowerCase() !== "input") {
        deleteSelected();
    }
})

$('addwaiton').hover(
        function () {
            $('.tooltip').css('top', parseInt($('.tooltip').css('top')) + 20 + 'px');
        });

$(function () {
    var lastType = null;
    $("body").click(function (e) {
//        console.log(e);
//        console.log(e.target);
        if (e.target.tagName != 'CANVAS') {
            clearblur();
        }
        if (e.target.id == "adddatainput" || e.target.id == "adddatainput") {
            if (lastType == null) {
                addNetworkNode('data');
                $('#adddata').focus();
                lastType = 'data';
            } else if (lastType != "data") {
                addNetworkNode('data');
                $('#adddata').focus();
                lastType = 'data';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addanalyticsinput" || e.target.id == "addanalytics") {
            if (lastType == null) {
                addNetworkNode('analytics');
                $('#addanalytics').focus();
                lastType = 'analytics';
            } else if (lastType != "analytics") {
                addNetworkNode('analytics');
                $('#addanalytics').focus();
                lastType = 'analytics';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addadapterinput" || e.target.id == "addadapter") {
            if (lastType == null) {
                addNetworkNode('adapter');
                $('#addadapter').focus();
                lastType = 'adapter';
            } else if (lastType != "adapter") {
                addNetworkNode('adapter');
                $('#addadapter').focus();
                lastType = 'adapter';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addterminalinput" || e.target.id == "addterminal") {
            if (lastType == null) {
                addNetworkNode('terminal');
                $('#addterminal').focus();
                lastType = 'terminal';
            } else if (lastType != "terminal") {
                addNetworkNode('terminal');
                $('#addterminal').focus();
                lastType = 'terminal';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addprinterinput" || e.target.id == "addprinter") {
            if (lastType == null) {
                addNetworkNode('printer');
                $('#addprinter').focus();
                lastType = 'printer';
            } else if (lastType != "printer") {
                addNetworkNode('printer');
                $('#addprinter').focus();
                lastType = 'printer';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addcombineinput" || e.target.id == "addcombine") {
            if (lastType == null) {
                addNetworkNode('combine');
                $('#addcombine').focus();
                lastType = 'combine';
            } else if (lastType != "combine") {
                addNetworkNode('combine');
                $('#addcombine').focus();
                lastType = 'combine';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addfusioninput" || e.target.id == "addfusion") {
            if (lastType == null) {
                addNetworkNode('fusion');
                $('#addfusion').focus();
                lastType = 'fusion';
            } else if (lastType != "fusion") {
                addNetworkNode('fusion');
                $('#addfusion').focus();
                lastType = 'fusion';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addioinput" || e.target.id == "addio") {
            if (lastType == null) {
                addNetworkNode('IO');
                $('#addio').focus();
                lastType = 'IO';
            } else if (lastType != "IO") {
                addNetworkNode('IO');
                $('#addio').focus();
                lastType = 'IO';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addwaitoninput" || e.target.id == "addwaiton") {
//            console.log(lastType + " " + e.target.id);
            if (lastType == null) {
                addNetworkNode('waiton');
                $('#addwaiton').focus();
                lastType = 'waiton';
            } else if (lastType != "waiton") {
                addNetworkNode('waiton');
                $('#addwaiton').focus();
                lastType = 'waiton';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addprocedureinput" || e.target.id == "addprocedure") {
//            console.log(lastType + " " + e.target.id);
            if (lastType == null) {
                addNetworkNode('nested');
                $('#addprocedure').focus();
                lastType = 'nested';
            } else if (lastType != "nested") {
                addNetworkNode('nested');
                $('#addprocedure').focus();
                lastType = 'nested';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addlibraryinput" || e.target.id == "addlibrary") {
            if (lastType == null) {
                addNetworkNode('library');
                $('#addlibrary').focus();
                lastType = 'library';
            } else if (lastType != "library") {
                addNetworkNode('library');
                $('#addlibrary').focus();
                lastType = 'library';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addifinput" || e.target.id == "addif") {
            if (lastType == null) {
                addNetworkNode('if');
                $('#addif').focus();
                lastType = 'if';
            } else if (lastType != "if") {
                addNetworkNode('if');
                $('#addif').focus();
                lastType = 'if';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addrepeatinput" || e.target.id == "addrepeat") {
            if (lastType == null) {
                addNetworkNode('repeat');
                $('#addrepeat').focus();
                lastType = 'repeat';
            } else if (lastType != "repeat") {
                addNetworkNode('repeat');
                $('#addrepeat').focus();
                lastType = 'repeat';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.tagName == "CANVAS") {
            if (isFocused()) {
                addNetworkNode(newdata.type);
            } else {
//                if (clickparams.edges.length === 0) {
//                    network.disableEditMode();
//                }
            }
        } else if (e.target.id == "addarrowinput" || e.target.id == "addarrow") {
            if (lastType == null) {
                addNetworkNode('arrow');
                $('#addarrow').focus();
                lastType = 'arrow';
            } else if (lastType != "arrow") {
                addNetworkNode('arrow');
                $('#addarrow').focus();
                lastType = 'arrow';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addconnectinput" || e.target.id == "addconnect") {
            if (lastType == null) {
                addNetworkNode('connect');
                $('#addconnect').focus();
                lastType = 'arrow';
            } else if (lastType != "connect") {
                addNetworkNode('connect');
                $('#addconnect').focus();
                lastType = 'connect';
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
            }
        } else if (e.target.id == "addselectinput" || e.target.id == "addselect") {
            if (lastType == null || lastType != "select") {
                network.disableEditMode();
                $('#addselect').focus();
                lastType = 'select';
                disableDrag();
            } else if (lastType == 'select') {
                lastType = null;
                allowDrag();
            }
        } else if (e.target.id == "adddeleteinput" || e.target.id == "adddelete") {
            if (lastType == null || lastType != "delete") {
                network.disableEditMode();
                $('#adddelete').focus();
                lastType = 'delete';
                disableDrag();
            } else if (lastType == 'delete') {
                lastType = null;
                allowDrag();
            }
        } else {
            if ('nodeinfobuttonshow' == e.target.id || $.contains($('#nodeinfobuttonshow')[0], e.target)) {
            } else {
                lastType = null;
                network.disableEditMode();
                allowDrag();
                clearHighlights(data.nodes);
            }
        }
    });


});

//buttons
function nodeinfoclick() {
    var infoshow = $('#nodeinfobuttonshow');
    var mynetworkwrapper = $('#mynetworkwrapper');

    if (infoshow.hasClass("hideit")) {
//        console.log('nodeinfobuttonshow show');
        infoshow.removeClass('hideit');
//                console.log( $('#containerfornetwork').offset().left);
//                console.log($('#containerfornetwork').width());
//                console.log($('#nodeinfobuttonshow').width());
//                var left = $('#containerfornetwork').width() + $('#containerfornetwork').offset().left - $('#nodeinfobuttonshow').width();
        var left = $('#containerfornetwork').width() - $('#nodeinfobuttonshow').outerWidth();
        left = left / $('#containerfornetwork').width() * 100;
//        console.log(left);
        $('#nodeinfobuttonshow').css('left', left + "%");
        mynetworkwrapper.css('width', left + "%");
    } else {
        infoshow.addClass('hideit').css('margin-right', '0px');
        mynetworkwrapper.css('width', '100%');
    }
    return false;
}

$('document').ready(function () {
    
    localStorage.removeItem('exampleWorkflow');
    
    $('#mynetworkwrapper').resizable({
        handles: 'e',
        containment: '#containerfornetwork',
        resize: function (event, ui) {
            var currentWidth = ui.size.width;
            currentWidth = currentWidth + 0.1;
            $(this).width(currentWidth);

            currentWidth = $('#containerfornetwork').width() - currentWidth;
            var p = currentWidth / $('#containerfornetwork').width() * 100;
            $('#nodeinfobuttonshow').css('width', p + '%');
            $('#nodeinfobuttonshow').css('left', 100 - p + '%');
        },
        stop: function (event, ui) {
            var currentWidth = ui.element.width();
            var p = currentWidth / $('#containerfornetwork').width() * 100;
            $('#mynetworkwrapper').css('width', p + '%');


            currentWidth = $('#containerfornetwork').width() - currentWidth;
            p = currentWidth / $('#containerfornetwork').width() * 100;
            $('#nodeinfobuttonshow').css('width', p + '%');
            $('#nodeinfobuttonshow').css('left', 100 - p + '%');
        }
    });

    localStorage.removeItem('user');

    $('[data-toggle="tooltip"]').tooltip();

    $("#resultPage").load("pages/resultPage.html", function (data) {
        $('#imageshow').draggable({
            containment: $("body")
        });
        $('[data-toggle="tooltip"]').tooltip();
//                $('#pathimage').resizable({
//                        resize: function (event, ui) {
//                        }
//                });

        $('#verticalpannel2').resizable({
            handles: 'w',
            maxWidth: 1820,
            minWidth: 100,
            resize: function (event, ui) {
                var currentWidth = ui.size.width;
                currentWidth = currentWidth + 0.1;
                if (currentWidth > $('#horizontalpannel').width()) {
                    console.log(currentWidth);
                    currentWidth = $('#horizontalpannel').width();
                    $(this).width(currentWidth);
                } else {
                    $(this).width(currentWidth);
                }
//                                console.log(currentWidth);
                var newWidth = $('#horizontalpannel').width() - currentWidth;
                $('#mynetworkresult').width(newWidth);
                $('#bottomOutput').width(newWidth);
            },
            stop: function (event, ui) {
                var currentWidth = ui.element.width();
                currentWidth = currentWidth;
                var p = currentWidth / $('#horizontalpannel').width() * 100;
                $(this).css('width', p + '%');
                var left = 100 - p;
                $(this).css('left', left + "%");
                var restleft = $('#mynetworkresult').width() / $('#horizontalpannel').width() * 100;
                $('#mynetworkresult').css('width', restleft + '%');
                $('#bottomOutput').css('width', restleft + '%');
            }
        });

        $('#bottomOutput').resizable({
            handles: 'n',
            maxHeight: 800,
            minHeight: 100,
            resize: function (event, ui) {
                var currentHeight = ui.size.height;
                currentHeight = currentHeight;
                $(this).height(currentHeight);
                var newHeight = $('#horizontalpannel').height() - currentHeight - 5;
                $('#mynetworkresult').height(newHeight);
            },
            stop: function (event, ui) {
                var currentHeight = ui.element.height();
                var p = currentHeight / $('#horizontalpannel').height() * 100;
                console.log(p);
                $(this).css('height', p + '%');
                var top = 100 - p;
                var restheight = $('#mynetworkresult').height() / $('#horizontalpannel').height() * 100;
                $('#mynetworkresult').css('height', restheight + '%');
                $(this).css('top', top + "%");
            }
        });
    });

    $("#examplePage").load("pages/examplePage.html", function (data) {
        $("#exampleTabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
        $("#exampleTabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
    });
    $("#registerPage").load("pages/registerPage.html", function (data) {
        initialRegisterPage();
    });
    $("#resourcesPage").load("pages/resourcesPage.html", function (data) {
        initialResourcesPage();
    });
    $("#testPage").load("pages/testPage.html", function (data) {
        initialTestPage();
    });

    //tab click event
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if (target === '#home') {
            nodeinfoclick();
            nodeinfoclick();
        } else if (target === '#menu2') {
            var username = localStorage.getItem("user");
            console.log(username);
            if (username == null) {
                alert("You currently signed out, uploaded items will be visible for all users");
            }

        } else if (target === '#menu3') {

            $('#myjstreeResource').jstree('destroy');
            var username = localStorage.getItem("user");
            console.log(username);
            console.log(baseurl + "resource/resource?username=" + username);
            $('#myjstreeResource').jstree({
                'core': {
                    'data': {
                        "url": baseurl + "resource/resource?username=" + username,
                        "dataType": "json", // needed only if you do not supply JSON headers
                        "success": function (node) {
                            resourcePage_resources = node;
                        }
                    }
                },
                'search': {
                    'show_only_matches': true
                },
                "types": {
                    "default": {
                        "icon": "image/resources.png"
                    }
                },
                "plugins": ["search",
                    "changed",
                    "types"]
            });
            $('#myjstreeResource').on("changed.jstree", function (e, data) {
                if (data && data.changed.selected && data.changed.selected.length) {
                    var d = searchItem(resourcePage_resources, data.changed.selected[0]);
                    var innerhtml = getResroucesResrouces(d);
                    $('#resourceView').html(innerhtml);

                    $('#resourcePreview').accordion({
                        collapsible: true,
                        active: false,
                        activate: function (event, ui) {
                            resourcePreviewClick();
                        }
                    });
                }
            });
            //functions
            $('#myjstreeFunctions').jstree('destroy');
            $('#myjstreeFunctions').jstree({
                'core': {
                    'data': {
                        "url": baseurl + "resource/functions?username=" + username,
                        "dataType": "json", // needed only if you do not supply JSON headers
                        "success": function (node) {
                            resourcePage_Libraries = node;
                        }
                    }
                },
                'search': {
                    'show_only_matches': true
                },
                "types": {
                    "library": {
                        "icon": "image/library-icon.png"
                    },
                    "function": {
                        "icon": "image/function-icon.png"
                    }
                },
                "plugins": ["search",
                    "changed",
                    "types"]
            });
            $('#myjstreeFunctions').on("changed.jstree", function (e, data) {
                if (data && data.changed.selected && data.changed.selected.length) {
                    var d = searchItem(resourcePage_Libraries, data.changed.selected[0]);
                    console.log(d);
                    var innerhtml = "";
                    if (d.function !== undefined) {
                        innerhtml = getResroucesLibrary(d);
                    } else {
                        innerhtml = getResroucesFunction(d);
                    }
                    $('#resourceView').html(innerhtml);
                }
            });


        } else if (target === '#menu4') {
            google.maps.event.trigger(map, 'resize');
        }
    });

    $("#openFile").on("shown.bs.modal", function () {
        $("#uploadFiles").unbind('change');
        document.getElementById('uploadFiles').addEventListener('change', upLoad, false);
    });

    $("#myModal").unbind('click');
    $("#myModal").click(function () {
        $("#modalData").val(JSON.stringify({nodes: data.nodes.get(), edges: data.edges.get(), globalmatch: data.globalmatch}));
    });

    $('input[type=radio][name=wftype]').change(function () {
        if (this.value == 'module') {
            $('#modalworkflowselectstartandend').show();
            //update select

            var edges = data.edges.get();
            var myMapOut = new Map();

            for (var i = 0; i < edges.length; ++i) {
                if (!myMapOut.has(edges[i].from)) {
                    myMapOut.set(edges[i].from, 0);
                }
                if (!myMapOut.has(edges[i].to)) {
                    myMapOut.set(edges[i].to, 0);
                }
                myMapOut.set(edges[i].from, myMapOut.get(edges[i].from) + 1);
            }
            var inNodes = [], outNodes = [];
            myMapOut.forEach(function (value, key) {
                inNodes.push(key);
            });
            myMapOut.forEach(function (value, key) {
                outNodes.push(key);
            });
            inNodes.forEach(function (value, index) {
                inNodes[index] = data.nodes.get(value).type + ":" + data.nodes.get(value).id;
            });
            outNodes.forEach(function (value, index) {
                outNodes[index] = data.nodes.get(value).type + ":" + data.nodes.get(value).id;
            });
            //update select
            var inHtml = "";
            for (var i = 0; i < inNodes.length; ++i) {
                inHtml += "<option value='" + inNodes[i] + "'>" + inNodes[i] + "</option>";
            }
            $('modalStartNode option').remove();
            $("#modalStartNode").append(inHtml);
            var outHtml = "";
            for (var i = 0; i < outNodes.length; ++i) {
                outHtml += "<option value='" + outNodes[i] + "'>" + outNodes[i] + "</option>";
            }
            $('modalEndNode option').remove();
            $("#modalEndNode").append(outHtml);
        } else if (this.value == 'workflow') {
            $('#modalworkflowselectstartandend').hide();
        }
    });

//    $('#myD3Visual').ready(function() {
//        setTimeout(function(){
//            initialCube();
//        }, 1000);
//        
//    });



});

//for test
setTimeout(function () {
//    newdata = {};
//    var node = {};
//    newdata.type = node.type = 'data';
//    newdata.shape = node.shape = 'image';
//    newdata.image = node.image = 'image/data error.png';
//    newdata.resources  = [];
//    data.nodes.add(node);
//    newdata = {};
//    var node2 = {};
//    newdata.type = node2.type = 'combine';
//    newdata.shape = node2.shape = 'image';
//    newdata.image = node2.image = 'image/combine error.png';
//    data.nodes.add(node2);
//     newdata = {};
//    var node3 = {};
//    newdata.type = node3.type = 'analytics';
//    newdata.shape = node3.shape = 'image';
//    newdata.image = node3.image = 'image/analytics error.png';
//    data.nodes.add(node3);
//     newdata = {};
//    var node4 = {};
//    newdata.type = node4.type = 'terminal';
//    newdata.shape = node4.shape = 'image';
//    newdata.image = node4.image = 'image/terminal error.png';
//    data.nodes.add(node4);

}, 500)

