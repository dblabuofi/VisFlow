function generateUpdateRepeat() {
    var innerhtml = "";
    if (curData.resourcesIn === undefined) {
        return innerhtml;
    }
    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td width='10%;'><label>Repeat Name</label></td><td><input id='ifName' class='form-control'></td></tr>";
    innerhtml += "</tbody></table>";
    //conditions number of times
    innerhtml += "<label class='label label-primary'>Conditions:</label><br>";
    innerhtml += "Repeat Time<input type='radio' name='repeatCon' value='count' checked/> Condition <input type='radio' name='repeatCon' value='condition' /><br>";
    innerhtml += "<table id='repeatConditionRepeatTimes' class='autoIncreaseTable table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><thead>";
    innerhtml += "<tr>";
    innerhtml += "<td width='10%'><label>Repeat Times</label></td>";
    innerhtml += "<td><input id='repeatUpdateTimes' class='form-control'></td>";
    innerhtml += "</tr>";
    innerhtml += "</tbody></table>";
    //conditions 

    innerhtml += "<table id='ifUpdateTable' class='autoIncreaseTable table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;display:none;'><thead>";
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



    //repeat icon
    innerhtml += "<label class='label label-primary'>Choose Repeat Node</label><br>";

    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr>";
    innerhtml += "<td>Repeat Node</td>";
    innerhtml += "<td>" + generateIFNextNodesInfo(curData) + "</td>";
    innerhtml += "</tr>";

    innerhtml += "</tbody></table>";



    innerhtml += "<button class='btn btn-info' onclick='updateRepeat()'>Update Repeat</button>";

    return innerhtml;

}

function updateRepeat() {
    curData.resourcesOut = JSON.parse(JSON.stringify(curData.resourcesIn));
    if ($('#repeatName').val() !== undefined && $('#repeatName').val().length > 0) {
        curData.label = $('#ifName').val();
        data.nodes.update(curData);
    }
    curData.actions = [];
    var action = {
        id: guid(),
        act: 'Repeat'
    };
    action.conditionType = $('input[name=repeatCon]:checked').val();
    if ($('input[name=repeatCon]:checked').val() == 'count') {
        action.repeatTimes = $('#repeatUpdateTimes').val();
    } else {
        action.repeatTimes = 1;//used as the finish flag too  
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
    }
    action.repeatNode = {
        label: $("#ifUpdateResourceNodeLabelId").val().split('@')[0],
        id: $("#ifUpdateResourceNodeLabelId").val().split('@')[1]
    };

    curData.actions.push(action);
    data.nodes.update(curData);
    updateNodes(curData);
    //update ui
    generateInnerhtml();
    gotoNodeInfo();
}

function removeRepeatAction(index) {
    curData.actions.splice(index, 1);
    curData.resourcesOut = [];
    data.nodes.update(curData);
    updateNodes(curData);

    generateInnerhtml();
}
//function generateUpdateRepeat() {
//        var innerhtml = "";
//        if (curData.resourcesIn === undefined) {
//                $("#updatediv").html(innerhtml);
//                return;
//        }
//        
//         //conditions
//        innerhtml += "<label class='label label-primary'>Conditions:</label><br>";
//        innerhtml += "<table class='autoIncreaseTable table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><thead>";
//        innerhtml += "<thead><th>Attribute</th><th>Group Operator</th><th>Condition</th><th>Value</th><th>Delete</th></thead><tbody>";
//        innerhtml += "<tr class='tablerow'><td>";
//        innerhtml += generatUpdateRepeatResources(curData.resourcesIn);
//        innerhtml += "</td>";
//        innerhtml += "<td>";
//        innerhtml += generateRepeatCondition();
//        innerhtml += "</td><td>"
////        innerhtml += generateGroupCondition(globalIFcount);
//        innerhtml += "</td><td><input class='form-control'></td>";
//        innerhtml += "<td><span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span></a>" +
//                "</td>";
//        innerhtml += "</tr>";
//        innerhtml += "<tfoot style='border:none;' class='addButtonRow'><td><button class='btn btn-info' onclick='ifAddRow()'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Condition</button></td></tfoot>";
//        innerhtml += "</table>";
//
//        //which way to go
//        innerhtml += "<label class='label label-primary'>Choose next step</label><br>";
//
//        innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
//        innerhtml += "<tr>";
//        innerhtml += "<td>Repeat Node</td>";
//        innerhtml += "<td>" + generateIFNextNodesInfo(curData) + "</td>";
//        innerhtml += "</tr>";
//        
//        innerhtml += "</tbody></table>";
//        innerhtml += "<button class='btn btn-info' onclick='updateIF()'>Update Repeat</button>";
//        
//        $("#updatediv").html(innerhtml);
//        $("[id='repeatUpdateRepeatCondition']").chained("[id='repeatUpdateRepeatResource']");
//}

function generatUpdateRepeatResources(resources, index) {
    var innerhtml = "";
    innerhtml += "<select class='form-control' id='repeatUpdateRepeatResource" + index + "'>";
    innerhtml += "<option value='repeattime' selected>Repeat Times</option>";
    for (var i = 0; i < resources.length; ++i) {
        innerhtml += "<option value=''>" + resources[i].urlReturnFileName + "</option>";
    }
    return innerhtml;
}

function generateRepeatCondition(index) {
    var innerhtml = "";
    innerhtml += "<select class='form-control' id='repeatUpdateRepeatCondition" + index + "'>" +
            "<option value='equals' selected class='repeattime'>equals</option>" +
            "<option value='min'></option>" +
            "<option value='avg'>average value</option>" +
            "<option value='con'>contains</option>" +
            "</select>";
    return innerhtml;
}


function bindRepeatFunctions() {
    $('input[name=repeatCon]').change(function () {
        if ($('input[name=repeatCon]:checked').val() == 'count') {
            $('#repeatConditionRepeatTimes').show();
            $('#ifUpdateTable').hide();
        } else {
            $('#repeatConditionRepeatTimes').hide();
            $('#ifUpdateTable').show();
        }
    });


    $(".collapserow").unbind('click');
    $(".collapserow").on('click', function (event) {
        $(this).parent().next().slideToggle();
        $glyphicon = $(this).find("span.glyphicon");
        $glyphicon.toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
        $partent = $(this).parent().parent().parent().prev().prev();
        generateUploadGeneralIO();
        if ($partent.text().indexOf("In") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                $('#resourceInShowRepeat' + index).hide();
                $('#resourceInShowRepeat' + index).next().show();
                curData.stop = "input";
                curData.resourcesIn[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceInShowRepeat' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowRepeat" + index).html("");
            }
        } else if ($partent.text().indexOf("Out") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                console.log(index);
                $('#resourceOutShowRepeat' + index).hide();
                $('#resourceOutShowRepeat' + index).next().show();

                //mark stop
                curData.stop = "output";
                curData.resourcesOut[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceOutShowRepeat' + index);
                curData.stop = undefined;
                curData.resourcesOut[index].isReturn = undefined;
                data.nodes.update(curData);

            } else {
                $("#resourceOutShowRepeat" + index).html("");
            }
        }

    });








}