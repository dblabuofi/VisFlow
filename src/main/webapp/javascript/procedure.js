/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function generateUpdateNested() {
    var innerhtml = "";
    if (curData.resourcesIn === undefined) {
        $("#updatediv").html(innerhtml);
        return;
    }
    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td width='10%;'><label>Procedure Name</label></td><td><input id='procedureName' class='form-control'></td></tr>";
    innerhtml += "<tr><td width='10%;'><label>Module Name</label></td><td><input id='moduleNameSearch' class='form-control'></td></tr>";
    innerhtml += "<tr><td width='10%;' colspan='30'><button class='btn btn-info' onclick='moduleNameSearchSubmit()'>Search</button></td></tr>";

//    innerhtml += "<tr><td><label>Output FileName:</label></td><td><input id='combineoutputfilename' class='form-control'></td></tr>";
    innerhtml += "</tbody></table>";
    innerhtml += "<img id='nestedImageUpdate' class='hideit' src='image/loading.gif' style='position:relative;left:46%;height:5vh;width:5vh;'/>";
    innerhtml += "<div id='updateNestedModules'></div>";
    innerhtml += "<button class='btn btn-info' onclick='updateNested()'>Update Procedure</button>";
    return innerhtml;

}

var procedureModules = [];
var seaerchModuleKeyWords = "";

function moduleNameSearchSubmit() {
    var module = seaerchModuleKeyWords = $('#moduleNameSearch').val();
    generateUpdateNestedModules(module);
    $('#nestedImageUpdate').show();
}

function generateUpdateNestedModules(module) {
    var url = baseurl + "module/getModules?module=";
    url += module;
    $.ajax({
        url: url,
        type: "get"
    }).then(function (response) {
        $('#nestedImageUpdate').hide();
        var modules = [];
        procedureModules = modules = JSON.parse(response);
        console.log(modules);
        var innerhtml = generateModuleSelect(modules);
        $("#updateNestedModules").html(innerhtml);
        bindProcedureFunctions();
    });
}

function generateModuleSelect(modules) {
    var innerhtml = "";
    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    innerhtml += "<thead><tr><th></th>";
    innerhtml += "<th>Module Name</th><th>Description</th>";
    innerhtml += "<th>select</th><th>show</th><tr></thead>";
    innerhtml += "<tbody>";
    innerhtml += "</tr>";
    for (var i = 0; i < modules.length; ++i) {
        innerhtml += '<tr><td width="1%"  class="collapsecolumn"><span class="glyphicon glyphicon-chevron-right"></span></td><td>';
        innerhtml += modules[i].fileName + '</td><td>' + modules[i].description + '</td><td><input type="checkbox"></td>';
        innerhtml += "<td><button class='btn btn-warning' id='showmoduleincanvas" + i + "' onclick='showmoduleincanvas(" + i + ")'><span>Show</span></button></td>";
        innerhtml += "</tr>";
        innerhtml += "<tr style='display:none;'><td colspan='300'>";
        innerhtml += generateUpdateModule(modules[i]);
        innerhtml += "</td>";
        innerhtml += "</tr>";
    }
    innerhtml += "</tbody></table>";
    return innerhtml;
}


var procedureShowData = [];
var procedureShowCurData = [];

var procedureShowModuleFlag = false;
function procedureShowModule() {
    console.log(procedureModules);
    procedureModules.push(curData.actions[0].module);
    procedureShowModuleFlag = true;
    var index = procedureModules.length - 1;
    var module = procedureModules[index];
    if ($('[id="procedureShowModule"]').find("span").html() == 'Show') {//show function
        $('[id="procedureShowModule"]').find("span").html("Hide");
        $('#procedureBackButton').show();
        var bakData = {nodes: [], edges: []};
        bakData.nodes = JSON.stringify(data.nodes.get());
        bakData.edges = JSON.stringify(data.edges.get());
        procedureShowData.push(bakData);
        procedureShowCurData.push(curData);
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(module.graph.nodes);
        data.edges.add(module.graph.edges);
        curData = {"type": ""};
    }
    generateInnerhtml();
}

function showmoduleincanvas(index) {
    var module = procedureModules[index];
    console.log(module);
    if ($('[id="showmoduleincanvas' + index + '"]').find("span").html() == 'Show') {//show function
        for (var i = 0; i < procedureModules.length; ++i) {
            $('[id="showmoduleincanvas' + i + '"]').find("span").html("Show");
        }
        $('[id="showmoduleincanvas' + index + '"]').find("span").html("Hide");
        $('#procedureBackButton').show();

        var bakData = {nodes: [], edges: []};
        bakData.nodes = JSON.stringify(data.nodes.get());
        bakData.edges = JSON.stringify(data.edges.get());
        procedureShowData.push(bakData);
        procedureShowCurData.push(curData);
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(module.graph.nodes);
        data.edges.add(module.graph.edges);
        curData = {"type": ""};
    } else {//hide function
        $('[id="showmoduleincanvas' + index + '"]').find("span").html("Show");
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(procedureShowData[procedureShowData.length - 1].nodes));
        data.edges.add(JSON.parse(procedureShowData[procedureShowData.length - 1].edges));
        procedureShowData.pop();
        curData = data.nodes.get(procedureShowCurData[procedureShowCurData.length - 1].id);
        procedureShowCurData.pop();
    }
//    console.log(curData);
    generateInnerhtml();
    if (procedureShowData.length == 0) {
        $('#procedureBackButton').hide();
        procedureShowData = [];
        procedureShowCurData = [];
        setTimeout(function () {//how dirty am I...
            curData.image = "image/nested highlight.png";
            data.nodes.update(curData);
            gotoNodeupdate();
        }, 0);
    }
}

function procedureBackButton() {
//    console.log(procedureShowModuleFlag);
    if (procedureShowData.length > 0) {
        data.nodes.clear();
        data.edges.clear();
        console.log(procedureShowData);
        data.nodes.add(JSON.parse(procedureShowData[procedureShowData.length - 1].nodes));
        data.edges.add(JSON.parse(procedureShowData[procedureShowData.length - 1].edges));
        procedureShowData.pop();
        curData = data.nodes.get(procedureShowCurData[procedureShowCurData.length - 1].id);
        console.log(curData);
        procedureShowCurData.pop();
    }
    generateInnerhtml();
    if (procedureShowData.length == 0) {
        $('#procedureBackButton').hide();
        procedureShowData = [];
        procedureShowCurData = [];
        setTimeout(function () {
            curData.image = "image/nested highlight.png";
            data.nodes.update(curData);
            if (!procedureShowModuleFlag) {
                gotoNodeupdate();

                var innerhtml = generateModuleSelect(procedureModules);
                $("#updateNestedModules").html(innerhtml);
                $('#moduleNameSearch').val(seaerchModuleKeyWords);
                bindProcedureFunctions();

            }
            if (procedureShowModuleFlag == true) {
                procedureShowModuleFlag = false;
            }

        }, 0);
    }
}


function generateUpdateModule(module) {
    var localNodes = getScaleFreeNetwork();
    localNodes.nodes.add(module.graph.nodes);
    var startNode = localNodes.nodes.get(module.startNode);
    var endNode = localNodes.nodes.get(module.endNode);
    var innerhtml = "";
    //input node
    var resourcesIn = [];
    var resourcesOut = [];
    localNodes.nodes.forEach(function (data) {
//        console.log(data);
        if (data.type === 'data') {
            resourcesIn = resourcesIn.concat(data.resources);
        } else if (data.type == 'adapter' || data.type == 'analytics' || data.type == 'combine'
                && data.type == 'fusion' || data.type == 'IO') {
            resourcesOut = resourcesOut.concat(data.resourcesOut);
        }
    });
//    console.log(resourcesIn);
    console.log(resourcesOut);
    innerhtml += '<div class="inputfiles" ><label class="btn-warning">Input Files</label>';
    for (var i = 0; i < resourcesIn.length; ++i) {
        if (resourcesIn[i].resourceType == "CSV" || resourcesIn[i].resourceType == "XML" || resourcesIn[i].resourceType == "SQL" || resourcesIn[i].resourceType == "Other") {
            innerhtml += "<div class='row'>";
            innerhtml += '<div class="col-md-2"><label>' + resourcesIn[i].urlReturnFileName + '</label></div>';
            innerhtml += '<div class="col-md-1"><label>Replace File</label></div>';
            innerhtml += '<div class="col-md-8"><input class="form-control"></div>';
            innerhtml += '<div class="col-md-1">select<input type="checkbox"></div>';
            innerhtml += "</div>";
        }
    }
    innerhtml += "</div>";
    innerhtml += '<div class="outputfiles"><label class="btn-warning">Output Files</label>';
    for (var i = 0; i < resourcesOut.length; ++i) {
        if (resourcesOut[i].resourceType == "CSV" || resourcesOut[i].resourceType == "XML" || resourcesOut[i].resourceType == "SQL" || resourcesOut[i].resourceType == "Other") {
            innerhtml += "<div class='row'>";
            innerhtml += '<div class="col-md-2"><label>' + resourcesOut[i].urlReturnFileName + '</label></div>';
            innerhtml += '<div class="col-md-1"><label>Replace File</label></div>';
            innerhtml += '<div class="col-md-8"><input class="form-control"></div>';
            innerhtml += '<div class="col-md-1">select<input type="checkbox"></div>';
            innerhtml += "</div>";
        }
    }
    innerhtml += "</div>";
    return innerhtml;
}

function updateNested() {
    curData.actions = [];

    var action = {
        id: guid(),
        act: "procedure"
    };
    action.outputFileNames = [];
    action.outputFileTypes = [];
    action.outAttributes = [];
    var trs = $("#updateNestedModules").find("> table > tbody > tr");
    var inputReplace = [];
    var outputReplace = [];
    console.log(trs);
    for (var i = 0; i < trs.size(); i += 2) {
        if (trs.eq(i).find("input").prop("checked")) {
            var localNodes = getScaleFreeNetwork();
            action.module = procedureModules[i / 2];
            localNodes.nodes.add(action.module.graph.nodes);
            var endNode = localNodes.nodes.get(action.module.endNode);

            var inDivs = trs.eq(i + 1).find(" div.inputfiles > div.row");
            var outDivs = trs.eq(i + 1).find(" div.outputfiles > div.row");
            console.log(inDivs.find("input").last());

            for (var j = 0; j < inDivs.size(); ++j) {
                var inDiv = inDivs.eq(j);
                if (inDiv.find("input").last().prop("checked")) {
                    inputReplace.push({
                        oldFile: inDiv.find("label").eq(0).text(),
                        newFile: inDiv.find("input").eq(0).val()
                    });
                }
            }
            var outResources = [];
            localNodes.nodes.forEach(function (data) {
//        console.log(data);
                if (data.type === 'data') {
                } else if (data.type == 'adapter' || data.type == 'analytics' || data.type == 'combine'
                        && data.type == 'fusion' || data.type == 'IO') {
                    outResources = outResources.concat(data.resourcesOut);
                }
            });

            for (var j = 0; j < outDivs.size(); ++j) {
                var outDiv = outDivs.eq(j);
                if (outDiv.find("input").last().prop("checked")) {
                    outputReplace.push({
                        oldFile: outDiv.find("label").eq(0).text(),
                        newFile: outDiv.find("input").eq(0).val()
                    });
                    action.outputFileNames.push(outDiv.find("input").val());
                    action.outputFileTypes.push(outDiv.find("input").val().getFileType());
                    if (outResources[j].outAttributes != undefined && outResources[j].outAttributes.length != 0) {
                        action.outAttributes.push(outResources[j].outAttributes);
                    }
                }
            }
        }
    }
    action.inputReplace = inputReplace;
    action.outputReplace = outputReplace;


    curData.actions.push(action);
    console.log(action);
    updateAnalyticsOutResources();
    data.nodes.update(curData);
    updateNodes(curData);
    console.log(curData);
    generateInnerhtml();
    gotoNodeInfo();
}


function bindProcedureFunctions() {
    $(".collapsecolumn").unbind('click');
    $(".collapsecolumn").on('click', function () {
        $parent = $(this).parent();
        $parent.next().slideToggle();
        $glyphicon = $(this).find("span.glyphicon").first();
        $glyphicon.toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
    });

    $(".collapserow").unbind('click');
    $(".collapserow").on('click', function (event) {
//                console.log(event);
        $(this).parent().next().slideToggle();
        $glyphicon = $(this).find("span.glyphicon");
        $glyphicon.toggleClass('glyphicon-chevron-right glyphicon-chevron-down');

        $partent = $(this).parent().parent().parent().prev().prev();

        generateUploadGeneralIO();
        if ($partent.text().indexOf("In") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                console.log(index);
                curData.stop = "input";
                curData.resourcesIn[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceInShowProcedure' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowProcedure" + index).html("");
            }
        } else if ($partent.text().indexOf("Out") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                $('#resourceOutShowProcedure' + index).hide();
                $('#resourceOutShowProcedure' + index).next().show();

                //mark stop
                curData.stop = "output";
                curData.resourcesOut[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceOutShowProcedure' + index);
                curData.stop = undefined;
                curData.resourcesOut[index].isReturn = undefined;
                data.nodes.update(curData);

            } else {
                $("#resourceOutShowProcedure" + index).html("");
            }
        }

    });



}