function generateUpdateIF() {
    var innerhtml = "";
    if (curData.resourcesIn === undefined) {
        return innerhtml;
    }

    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td width='10%;'><label>IF Name</label></td><td><input id='ifName' class='form-control'></td></tr>";
    innerhtml += "</tbody></table>";

    //conditions
    innerhtml += "<label class='label label-primary'>Conditions:</label><br>";
    innerhtml += "<table id='ifUpdateTable' class='autoIncreaseTable table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><thead>";
    innerhtml += "<thead><th>Attribute</th><th>Group Operator</th><th>Condition</th><th>Value</th><th>Delete</th></thead><tbody>";
    innerhtml += "<tr class='tablerow'><td>";
    innerhtml += genrateResourceAttributeSelcetion(curData.resourcesIn);
    innerhtml += "</td>";
    innerhtml += "<td>";
    innerhtml += generateGroupCondition();
    innerhtml += "</td><td>"
    innerhtml += generateCondition();
    innerhtml += "</td><td><input class='form-control'></td>";
    innerhtml += "<td><span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span></a>" +
            "</td>";
    innerhtml += "</tr>";
    innerhtml += "<tfoot class='addButtonRow'><td colspan='5'><button class='btn btn-info' onclick='ifAddRow()'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Condition</button></td></tfoot>";
    innerhtml += "</table>";

    //which way to go
    innerhtml += "<label class='label label-primary'>Choose next step</label><br>";

    innerhtml += "<table id='ifUpdateNextInfoTable' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr>";
    innerhtml += "<td>Next Node when conditions are True</td>";
    innerhtml += "<td>" + generateIFNextNodesInfo(curData) + "</td>";
    innerhtml += "</tr>";
    innerhtml += "<tr>";
    innerhtml += "<td>Next Node when conditions are False</td>";
    innerhtml += "<td>" + generateIFNextNodesInfo(curData) + "</td>";
    innerhtml += "</tr>";

    innerhtml += "</tbody></table>";
    innerhtml += "<button class='btn btn-info' onclick='updateIF()'>Update IF</button>";
    return innerhtml;

}

function updateIF() {
    curData.resourcesOut = JSON.parse(JSON.stringify(curData.resourcesIn));
    if ($('#ifName').val() !== undefined && $('#ifName').val().length > 0) {
        curData.label = $('#ifName').val();
        data.nodes.update(curData);
    }

    curData.actions = [];
    var action = {
        id: guid(),
        act: 'IF'
    };
    action.conditions = [];
    $('#ifUpdateTable tbody tr').each(function (index) {
        var conditionPair = {};
        if ($(this).find('select').size() === 3) {
            conditionPair.resource = $(this).find('select').eq(0).val().split('@')[0];
            conditionPair.attribute = $(this).find('select').eq(0).val().split('@')[1];
            conditionPair.groupOP = $(this).find('select').eq(1).val();
            conditionPair.condition = $(this).find('select').eq(2).val();
            conditionPair.value = $(this).find('input').val();
            conditionPair.logic = "";
        } else if ($(this).find('select').size() === 1) {
            conditionPair.resource = "";
            conditionPair.attribute = "";
            conditionPair.groupOP = "";
            conditionPair.condition = "";
            conditionPair.value = "";
            conditionPair.logic = $(this).find('select').val();
        }
        action.conditions.push(conditionPair);
    });

    action.trueBranch = {label: $('#ifUpdateNextInfoTable tbody tr select').eq(0).val().split('@')[0],
        id: $('#ifUpdateNextInfoTable tbody tr select').eq(0).val().split('@')[1]};
    action.falseBranch = {label: $('#ifUpdateNextInfoTable tbody tr select').eq(1).val().split('@')[0],
        id: $('#ifUpdateNextInfoTable tbody tr select').eq(1).val().split('@')[1]};

    curData.actions.push(action);
    data.nodes.update(curData);
    updateNodes(curData);
    //update ui
    generateInnerhtml();
    gotoNodeInfo();

}

function removeIFAction(index) {
    if (curData.actions[0].conditions.length === 1) {
        curData.actions = [];
        curData.resourcesOut = [];
    } else {
        if (index === 0) {
            curData.actions[0].conditions.splice(index, 2);
        } else {
            curData.actions[0].conditions.splice(index - 1, 2);
        }
    }
    data.nodes.update(curData);
    updateNodes(curData);

    generateInnerhtml();
}

function generateIFNextNodesInfo(curNode) {
    var nodeToArr = [];
    data.edges.forEach(function (e) {
        var fromNode = data.nodes.get(e.from);
        var nodeTo = data.nodes.get(e.to);
        if (fromNode.id === curNode.id) {
            nodeToArr.push(nodeTo);
        }
    });

    var innerhtml = "";
    innerhtml += "<select class='form-control' id='ifUpdateResourceNodeLabelId'>";
    for (var i = 0; i < nodeToArr.length; ++i) {
        innerhtml += "<option value='" + nodeToArr[i].label.trim() + "@" + nodeToArr[i].id + "'>" + nodeToArr[i].type + " " + nodeToArr[i].id + "</option>";
    }
    innerhtml += "</select>";
    return innerhtml;
}
function genrateResourceAttributeSelcetion(resources) {
    var innerhtml = "";
    innerhtml += "<select class='form-control' id=''>";

    for (var i = 0; i < resources.length; ++i) {
        if (resources[i].outAttributes === undefined) {
            innerhtml += "<option value='" + resources[i].urlReturnFileName + "'>" + resources[i].urlReturnFileName + "</option>";
        } else {
            for (var j = 0; j < resources[i].outAttributes.length; ++j) {
                innerhtml += "<option value='" + resources[i].urlReturnFileName + "@" + resources[i].outAttributes[j].name + "'>Name:" + resources[i].urlReturnFileName + " Attr:" + resources[i].outAttributes[j].name + "</option>";
            }
        }
    }

    innerhtml += "</select>";
    return innerhtml;
}

function generateGroupCondition() {
    var innerhtml = "";
    innerhtml += "<select class='form-control' id='ifUpdateGroupCondition'>" +
            "<option value='max' selected>Maximum value</option>" +
            "<option value='min'>Minimum value</option>" +
            "<option value='avg'>average value</option>" +
            "<option value='con'>contains</option>" +
            "<option value='num'>number of rows</option>" +
            "</select>";
    return innerhtml;
}

function generateCondition(index) {
    var innerhtml = "";
    innerhtml += "<select class='form-control' id='ifUpdateCondition'>" +
            "<option value='equal' selected class='max min avg num con'>=</option>" +
            "<option value='lessthan' class='max min avg num'><</option>" +
            "<option value='greaterthan' class='max min avg num'>></option>" +
            "<option value='lessorequal' class='max min avg num'><=</option>" +
            "<option value='greaterorequal' class='max min avg num'>>=</option>" +
            "<option value='notequal' class='max min avg num'>!=</option>" +
            "</select>";
    return innerhtml;
}


function generateLogicCondition() {
    var innerhtml = "";
    innerhtml += "<select class='form-control' id=''>" +
            "<option value='and' selected>AND</option>" +
            "<option value='or'>OR</option>" +
            "</select>";
    return innerhtml;
}

function ifAddRow() {
//        $('.addButtonRow').remove();

    if ($('.autoIncreaseTable tbody tr').size() === 0) {
        $('.autoIncreaseTable').append("<tr class='tablerow'><td>"
                + genrateResourceAttributeSelcetion(curData.resourcesIn)
                + "</td><td>"
                + generateGroupCondition()
                + "</td><td>"
                + generateCondition()
                + "</td><td><input class='form-control'></td>"
                + "<td><span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span></a></td>"
                + "</tr>");
//                        + "<tr class='addButtonRow'><td><button onclick='ifAddRow()'>Add Row</button></td></tr>");
    } else {
        $('.autoIncreaseTable').append(
                "<tr class='tablerowRelation'><td>"
                + generateLogicCondition()
                + "</td></tr>"
                + "<td>"
                + genrateResourceAttributeSelcetion(curData.resourcesIn)
                + "</td><td>"
                + generateGroupCondition()
                + "</td><td>"
                + generateCondition()
                + "</td><td><input class='form-control'></td>"
                + "<td><span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span></a></td>"
                + "</tr>");
//                        + "<tr class='addButtonRow'><td><button onclick='ifAddRow()'>Add Row</button></td></tr>");
    }
    $("[id='ifUpdateCondition']").chained("[id='ifUpdateGroupCondition']");
    bindIFFunctions();
}

function bindIFFunctions() {




    $(".tableRemoveSpan").unbind('click');
    $('.tableRemoveSpan').click(function () {
        if ($('.autoIncreaseTable tbody tr').size() === 1) {
            $(this).closest('tr').remove();
        } else if ($('.autoIncreaseTable tbody tr').first().is($(this).closest('tr'))) {
            $(this).closest('tr').next().remove();
            $(this).closest('tr').remove();
        } else {
            $(this).closest('tr').prev().remove();
            $(this).closest('tr').remove();
        }
    });

    $(".collapsecolumn").unbind('click');
    $(".collapsecolumn").on('click', function (event) {
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

            console.log($partent.text());
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                console.log($(this).index());
                var index = parseInt($(this).parent().index() / 2);
                curData.stop = "input";
                curData.resourcesIn[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceInShowIF' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowIF" + index).html("");
            }
        } else if ($partent.text().indexOf("Out") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                $('#resourceOutShowIF' + index).hide();
                $('#resourceOutShowIF' + index).next().show();

                //mark stop
                curData.stop = "output";
                curData.resourcesOut[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceOutShowIF' + index);
                curData.stop = undefined;
                curData.resourcesOut[index].isReturn = undefined;
                data.nodes.update(curData);

            } else {
                $("#resourceOutShowIF" + index).html("");
            }
        }

    });

}
