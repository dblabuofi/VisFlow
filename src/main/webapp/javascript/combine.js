function generateUpdateCombine(iconName) {
    var innerhtml = "";
    if (curData.resourcesIn === undefined) {
        return innerhtml;
    }

    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td width='10%;'><label>" + iconName + " Name</label></td><td><input id='combineName' class='form-control'></td></tr>";

    innerhtml += "<tr><td width='20%;'><label>Matcher</label></td><td>";
    innerhtml += "</select><select class='form-control' id='combineupdatematcher' >" +
            "<option value='ontobuilder' >ontobuilder</option>" +
            "<option value='PruSM' >PruSM</option>" +
            "<option value='S-Match' selected>S-Match</option>" +
            "<option value='Cupid' >Cupid</option>" +
            "</select>";

    innerhtml += "</td></tr>";
    innerhtml += "<tr><td><label>Key Identifier</label></td><td>";
    innerhtml += "</select><select class='form-control' id='combineupdateidentifier' >" +
            "<option value='Gordian' selected>Gordian</option>" +
            "<option value='Twiner' >Twiner</option>" +
            "</select>";

    innerhtml += "</td></tr>";
    innerhtml += "<tr><td><label>Output File Names</label></td><td>";
    innerhtml += generateOutPutFileInputs();
    innerhtml += "</td></tr>";
    innerhtml += "</tbody></table>";

    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    innerhtml += "<thead><tr><td><label>Input File</label></td><td><label>Attribute</label></td></tr></thead>";
    innerhtml += "<tbody>";
    for (var i = 0; i < curData.resourcesIn.length; ++i) {
        innerhtml += "<tr><td>" + curData.resourcesIn[i].urlReturnFileName + "</td><td>";
        var outAttrs = [];
        curData.resourcesIn[i].outAttributes.forEach(function (data) {
            outAttrs.push(data.name);
        });
        innerhtml += outAttrs.join(",");
        innerhtml += "</td></tr>";
    }
    innerhtml += "</tbody></table>";

    innerhtml += "<button class='btn btn-info' id='generateMergeKeys' onclick='generateMergeKeys()'>Generate Keypairs</button></br>";
    innerhtml += "<div id='combineKeyPairsDiv'></div>";
    innerhtml += "<button class='btn btn-info' id='updateCombine' onclick='updateCombine()'>Update Combine</button>";

//    console.log(innerhtml);
    return innerhtml;
}

function generateMergeKeys() {
    if (curData.resourcesIn.length < 2) {
        alert("not enough resources");
        return;
    }
    var url = baseurl;
    
    if (curData.resourcesIn[0].resourceType == 'XML') {
        url += 'recommend/keyPairsXML?';
        var leftAttrs = [], rightAttrs = [];
        curData.resourcesIn[0].outAttributes.forEach(function (data) {
            leftAttrs.push(data.name);
        });
        curData.resourcesIn[1].outAttributes.forEach(function (data) {
            rightAttrs.push(data.name);
        });
        url += "&leftAttrs=" + leftAttrs.join(",");
        url += "&rightAttrs=" + rightAttrs.join(",");
    } else {
        url += 'recommend/keyPairs?';
    }
    
    url += "&location=" + encodeURI(curData.resourcesIn[0].location) + "&file1=" + encodeURI(curData.resourcesIn[0].urlReturnFileName) + "&file2=" + encodeURI(curData.resourcesIn[1].urlReturnFileName);
    url += "&globalmatch=" + encodeURI(JSON.stringify(data.globalmatch));
    console.log(url);
    $.ajax({
        type: "GET",
        url: url,
        success: function (data1) {//this is a two dimanional array
            var data = JSON.parse(data1);
            console.log(data);
            var html = "";
            html += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
            if (data1 != "{}") {
                for (var i = 0; i < data[0].length; ++i) {
                    html += "<tr><td>group " + i + "</td><td>";
                    for (var j = 0; j < data[0][i].length; ++j) {
                        html += "<div class='row'><div class='col-md-5'><input class='form-control' value='" + data[0][i][j] + "'></div><div class='col-md-2'>matches</div><div class='col-md-5'><input  class='form-control' value='" + data[1][i][j] + "'></div></div>";
                    }
                    html += "</td>"
                    html += "<td>select:<input type='checkbox'></td>";
                    html += "</tr>"
                }
            }
            html += "<tr><td>Custom Keypair</td><td>";
            html += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
            html += "</tbody>";
            html += "<tfoot ><td colspan='500'><span class='combineAddNewKeyPair'><button class='btn btn-info'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Key Pair</button></span></td></tfoot>";
            html += "</table>"
            html += "</td>";
            html += "<td>select:<input type='checkbox'></td>";
            html += "</tr>";
            html += "</tbody>";
            html += "</table>"
            $("#combineKeyPairsDiv").html(html);
            bindCombineFunctions();
        },
        error: function (request, status, error) {
            alert(request.responseText);
        },
        failure: function (errMsg) {
            alert(errMsg);
        },
        complete: function (data) {
        }
    });
}

function updateCombine() {
    var action = {
        id: guid(),
        act: 'Combine'
    };
    if ($('#combineName').val() !== undefined && $('#combineName').val().length > 0) {
        curData.label = $('#combineName').val();
        data.nodes.update(curData);
    }
    curData.actions = [];
    action.matcher = $('#combineupdatematcher').val();
    action.identifier = $('#combineupdateidentifier').val();
    action.outputFileNames = [];
    action.outputFileTypes = [];
    action.outAttributes = [];
    var outFileTables = $('#outputFileOutAttributesTable').find(">tbody > tr > td > table");
    outFileTables.each(function () {
        var outTable = $(this);
        var fileName = outTable.find("thead th input:first").val();
        var fileType = fileName.getFileType();
        action.outputFileNames.push(fileName);
        action.outputFileTypes.push(fileType);

        var outAttrs = [];
        var trs = outTable.find(">tbody > tr");
        trs.each(function () {
            outAttrs.push({
                label: $(this).find("input").eq(0).val(),
                name: $(this).find("input").eq(0).val(),
                type: $(this).find("input").eq(1).val(),
                description: $(this).find("input").eq(2).val()
            });
        });
        action.outAttributes.push(outAttrs);
    });

    var table = $('#combineKeyPairsDiv').find("> table");
    var trs = table.find(">tbody > tr");
    var leftKeys = [];
    var rightKeys = [];
    for (var i = 0; i < trs.size() - 1; ++i) {
        var inputs = trs.eq(i).find("input");
        if (inputs.last().prop("checked")) {
            for (var j = 0; j < inputs.size() - 1; j += 2) {
                leftKeys.push(inputs.eq(j).val());
                rightKeys.push(inputs.eq(j + 1).val());
            }
        }
    }
    var inputs = trs.last().find("input");
    if (inputs.last().prop("checked")) {
        for (var j = 0; j < inputs.size() - 1; j += 2) {
            leftKeys.push(inputs.eq(j).val());
            rightKeys.push(inputs.eq(j + 1).val());
        }
    }
    if (leftKeys.length == 0) {
        alert("You need select keys");
        return ;
    }
    action.leftKeys = leftKeys;
    action.rightKeys = rightKeys;
    curData.actions.push(action);
    updateAnalyticsOutResources();
    data.nodes.update(curData);
    updateNodes(curData);
    //update ui
    generateInnerhtml();

}

function bindCombineFunctions() {
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
                curData.stop = "input";
                curData.resourcesIn[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceInShowCombine' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowCombine" + index).html("");
            }
        } else if ($partent.text().indexOf("Out") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                $('#resourceOutShowCombine' + index).hide();
                $('#resourceOutShowCombine' + index).next().show();

                //mark stop
                curData.stop = "output";
                curData.resourcesOut[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceOutShowCombine' + index);
                curData.stop = undefined;
                curData.resourcesOut[index].isReturn = undefined;
                data.nodes.update(curData);

            } else {
                $("#resourceOutShowCombine" + index).html("");
            }
        }

    });


    //new output
    $(".outputFileAddNewOutput").unbind("click");
    $(".outputFileAddNewOutput").bind("click", function () {
        var table = $(this).closest("table");
        var html = "<tr><td>";
        html += genereateOutputFileInput();
        html += "</td>";
        html += "<td>";
        html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
        html += "</td>";
        html += "</tr>";
        table.append(html);

        $(".outputFileAddNewAttribute").unbind("click");
        $(".outputFileAddNewAttribute").bind("click", function () {
            var table = $(this).closest("table");
            var html = "<tr>";
            html += "<td>Attribute Name</td>";
            html += "<td><input class='form-control'></td>";
            html += "<td>Attribute Type</td>";
            html += "<td><input class='form-control'></td>";
            html += "<td>Description</td>";
            html += "<td><input class='form-control'></td>";
            html += "<td>";
            html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
            html += "</td>";
            html += "</tr>";
            console.log(table);
            console.log(html);
            table.append(html);
            $(".tableRemoveSpan").unbind('click');
            $('.tableRemoveSpan').click(function () {
                $(this).closest('tr').remove();
            });
        });

        $(".tableRemoveSpan").unbind('click');
        $('.tableRemoveSpan').click(function () {
            $(this).closest('tr').remove();
        });
    });

    //add new key pair
    $(".combineAddNewKeyPair").unbind("click");
    $(".combineAddNewKeyPair").bind("click", function () {
        var table = $(this).closest("table");
        var html = "<tr><td>";
        html += "<div class='row'><div class='col-md-5'><input class='form-control'></div><div class='col-md-2'>matches</div><div class='col-md-5'><input  class='form-control'></div>";
        html += "</td>";
        html += "<td>";
        html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
        html += "</td>";
        html += "</tr>";
        table.append(html);

        $(".tableRemoveSpan").unbind('click');
        $('.tableRemoveSpan').click(function () {
            $(this).closest('tr').remove();
        });
    });



}

function removeCombineAction() {
    curData.actions = [];
    curData.resourcesOut = [];

    data.nodes.update(curData);
    updateNodes(curData);

    generateInnerhtml();

}