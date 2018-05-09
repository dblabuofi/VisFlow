function generateUpdateTerminal() {
    var innerhtml = "<table class='table table-bordered table-hover table-sm wholewidth' ><tbody>";
    innerhtml += "<tr><td width='10%'><label>Terminal Name: </label></td><td><input id='terminalName' class='form-control'></td></tr>";
    innerhtml += "</tbody></table>";
    if (curData.resourcesIn != undefined) {
        innerhtml += "<label class='label label-primary'>Resources:</label><br>";

        innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' >";
        innerhtml += "<thead><th><label>Resource Name</label></th><th style='display:none;'>Print Type</th></thead>";
        innerhtml += "<tbody>";
        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            if (curData.resourcesIn[i].resourceType == 'CSV' || curData.resourcesIn[i].resourceType == 'SQL' || curData.resourcesIn[i].resourceType == 'XML' || curData.resourcesIn[i].resourceType == 'Other') {
                innerhtml += "<tr><td>" + curData.resourcesIn[i].urlReturnFileName + "</td>";
                innerhtml += "<td style='display:none;'>";
                innerhtml += "<select id='terminalupdateprinttype" + i + "' class='form-control' onchange='terminalPrintTypeChange(" + i + ")'>";
                innerhtml += "<option val='table' selected>table</option>";
//            innerhtml += "<option val='file' >file</option>";
                innerhtml += "</select></td></tr>";
                //table function

                innerhtml += "<tr id='teminalParTr" + i + "'><td colspan='2'>";
                innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' >";
                innerhtml += "<tbody>";

                //window function
                innerhtml += "<tr id='terminalNumOfTablesRow" + i + "'>";
                innerhtml += "<td width='20%'>";
                innerhtml += "Number of Windows";
                innerhtml += "</td>";
                innerhtml += "<td colspan='4'>";
                innerhtml += "<select id='terminalNumOfTables" + i + "' class='form-control' onchange='terminalNumOfWindowsChange(" + i + ")'>";
                innerhtml += "<option val='zero' >0</option>";
                innerhtml += "<option val='one' >1</option>";
                innerhtml += "<option val='two' selected>2</option>";
                innerhtml += "</select>";
                innerhtml += "</td>";
                innerhtml += "</tr>";

                innerhtml += "<tr id='terminalFirWindowRow" + i + "'>";
                innerhtml += "<td>";
                innerhtml += "First Window";
                innerhtml += "</td>";
                innerhtml += "<td colspan='4'>";
                innerhtml += "<select id='firstWindow" + i + "' class='form-control'  onchange='terminalWindowChange(" + JSON.stringify('firstWindow') + "," + i + ")'>";
                innerhtml += "<option val='pathway' >PathWay</option>";
                innerhtml += "<option val='googleMap' >Google Map</option>";
                innerhtml += "<option val='Gplates' >Gplates</option>";
                innerhtml += "<option val='ShowColor' >Show Color</option>";
                innerhtml += "<option val='ShowCube' >Show Cube</option>";
                innerhtml += "</select>";
                innerhtml += "</td>";
                innerhtml += "</tr>";

                innerhtml += "<tr  id='termianlFirShowColor" + i + "' style='display:none;'>";
                innerhtml += "<td>";
                innerhtml += "ShowColor Paramters";
                innerhtml += "</td>";
                innerhtml += "<td colspan='4'>";
                innerhtml += "ID:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "</tr>";

                innerhtml += "<tr  id='termianlFirPathWay" + i + "'>";
                innerhtml += "<td>";
                innerhtml += "PathWay Paramters";
                innerhtml += "</td>";
                innerhtml += "<td colspan='4'>";
                innerhtml += "ID:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "</tr>";


                innerhtml += "<tr id='termianlFirMap" + i + "' style='display:none;'>";
                innerhtml += "<td>";
                innerhtml += "Google Map Paramters";
                innerhtml += "</td>";
                innerhtml += "<td>";
                innerhtml += "lat:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "<td>";
                innerhtml += "lng:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "</tr>";

                innerhtml += "<tr id='termianlFirGplates" + i + "' style='display:none;'>";
                innerhtml += "<td>";
                innerhtml += "Gplates Paramters";
                innerhtml += "</td>";
                innerhtml += "<td>";
                innerhtml += "lat:<input class='form-control'> min_ma:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "<td>";
                innerhtml += "lng:<input class='form-control'> max_ma:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "</tr>";
                //second window
                innerhtml += "<tr id='terminalSecondWindow" + i + "' >";
                innerhtml += "<td>";
                innerhtml += "Second Window";
                innerhtml += "</td>";
                innerhtml += "<td  colspan='4'>";
                innerhtml += "<select id='secondWindow" + i + "' class='form-control' onchange='terminalWindowChange(" + JSON.stringify('secondWindow') + "," + i + ")'>";
                innerhtml += "<option val='pathway' selected>PathWay</option>";
                innerhtml += "<option val='googleMap' >Google Map</option>";
                innerhtml += "<option val='Gplates' >Gplates</option>";
                innerhtml += "<option val='ShowColor' >Show Color</option>";
                innerhtml += "<option val='ShowCube' >Show Cube</option>";
                innerhtml += "</select>";
                innerhtml += "</td>";
                innerhtml += "</tr>";

                innerhtml += "<tr  id='termianlSecShowColor" + i + "' style='display:none;'>";
                innerhtml += "<td>";
                innerhtml += "ShowColor Paramters";
                innerhtml += "</td>";
                innerhtml += "<td colspan='4'>";
                innerhtml += "ID:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "</tr>";

                innerhtml += "<tr id='termianlSecPathWay" + i + "'>";
                innerhtml += "<td>";
                innerhtml += "PathWay Paramters";
                innerhtml += "</td>";
                innerhtml += "<td colspan='4'>";
                innerhtml += "ID:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "</tr>";

                innerhtml += "<tr id='termianlSecMap" + i + "' style='display:none;'>";
                innerhtml += "<td>";
                innerhtml += "Google Map Paramters";
                innerhtml += "</td>";
                innerhtml += "<td>";
                innerhtml += "lat:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "<td>";
                innerhtml += "lng:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "</tr>";

                innerhtml += "<tr id='termianlSecGplates" + i + "' style='display:none;'>";
                innerhtml += "<td>";
                innerhtml += "Gplates Paramters";
                innerhtml += "</td>";
                innerhtml += "<td>";
                innerhtml += "lat:<input class='form-control'> min_ma:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "<td>";
                innerhtml += "lng:<input class='form-control'> max_ma:<input class='form-control'>";
                innerhtml += "</td>";
                innerhtml += "</tr>";

                innerhtml += "</tbody>";
                innerhtml += "</table>";
                innerhtml += "</td><tr>";

                //col function
                innerhtml += "<tr id='teminalColFunction" + i + "'><td colspan='2'>";
                innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' id='terminalColFunctionTable" + i + "'>";
                innerhtml += "<thead><th><label>Function Name</label></th><th>Paramter</th><th>Remove</th></thead>";
                innerhtml += "<tbody>";


                innerhtml += "</tbody>";
                innerhtml += "<tfoot class='addButtonRow'><td colspan='3'><button class='btn btn-info' onclick='colPrinterRulesAddRow(" + JSON.stringify(i) + ")'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Rules</button></td></tfoot>";
                innerhtml += "</table>";
                innerhtml += "</td><tr>";
            }

        }
        innerhtml += "</tbody></table>";
    }
    innerhtml += "<button class='btn btn-info' id='updateterminal' onclick='updateterminal()'>Update Terminal</button>";

    return innerhtml;

}

function colPrinterRulesAddRow(index) {
    $("[id='terminalColFunctionTable" + index + "']").append(
            "<tr>"
            + "<td>"
            + "<select class='form-control'>"
            + "<option val='webSite'>WebSite</option>"
            + "<option val='ShowColor'>ShowColor</option>"
            + "</select>"
            + "</td>"
            + "<td colspan=''>"
            + "<input class='form-control'>"
            + "</td>"
            + "<td><span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span></a></td>"
            + "</tr>"
            );

    bindTerminalFunctions();
}



function terminalWindowChange(id, index) {
    if (id === 'firstWindow') {
        switch ($("[id='firstWindow" + index + "']").val()) {
            case 'PathWay':
                $("[id='termianlFirPathWay" + index + "']").show();
                $("[id='termianlFirMap" + index + "']").hide();
                $("[id='termianlFirGplates" + index + "']").hide();
                $("[id='termianlFirShowColor" + index + "']").hide();
                break;
            case 'Google Map':
                $("[id='termianlFirPathWay" + index + "']").hide();
                $("[id='termianlFirMap" + index + "']").show();
                $("[id='termianlFirGplates" + index + "']").hide();
                $("[id='termianlFirShowColor" + index + "']").hide();
                break;
            case 'Gplates':
                $("[id='termianlFirPathWay" + index + "']").hide();
                $("[id='termianlFirMap" + index + "']").hide();
                $("[id='termianlFirGplates" + index + "']").show();
                $("[id='termianlFirShowColor" + index + "']").hide();
                break;
            case 'Show Color':
                $("[id='termianlFirPathWay" + index + "']").hide();
                $("[id='termianlFirMap" + index + "']").hide();
                $("[id='termianlFirGplates" + index + "']").hide();
                $("[id='termianlFirShowColor" + index + "']").show();
                break;
            default:
                 $("[id='termianlFirPathWay" + index + "']").hide();
                $("[id='termianlFirMap" + index + "']").hide();
                $("[id='termianlFirGplates" + index + "']").hide();
                $("[id='termianlFirShowColor" + index + "']").hide();
        }
    } else {
        switch ($("[id='secondWindow" + index + "']").val()) {
            case 'PathWay':
                $("[id='termianlSecPathWay" + index + "']").show();
                $("[id='termianlSecMap" + index + "']").hide();
                $("[id='termianlSecGplates" + index + "']").hide();
                $("[id='termianlSecShowColor" + index + "']").hide();
                break;
            case 'Google Map':
                $("[id='termianlSecPathWay" + index + "']").hide();
                $("[id='termianlSecMap" + index + "']").show();
                $("[id='termianlSecGplates" + index + "']").hide();
                $("[id='termianlSecShowColor" + index + "']").hide();
                break;
            case 'Gplates':
                $("[id='termianlSecPathWay" + index + "']").hide();
                $("[id='termianlSecMap" + index + "']").hide();
                $("[id='termianlSecGplates" + index + "']").show();
                $("[id='termianlSecShowColor" + index + "']").hide();
                break;
            case 'Show Color':
                $("[id='termianlSecPathWay" + index + "']").hide();
                $("[id='termianlSecMap" + index + "']").hide();
                $("[id='termianlSecGplates" + index + "']").hide();
                $("[id='termianlSecShowColor" + index + "']").show();
                break;
            default:
                $("[id='termianlSecPathWay" + index + "']").hide();
                $("[id='termianlSecMap" + index + "']").hide();
                $("[id='termianlSecGplates" + index + "']").hide();
                $("[id='termianlSecShowColor" + index + "']").hide();
        }
    }
}

function terminalPrintTypeChange(index) {
    console.log($("[id='terminalupdateprinttype" + index + "']").val())
    if ($("[id='terminalupdateprinttype" + index + "']").val() == 'table') {
        $("[id='teminalParTr" + index + "']").show();
    } else {
        $("[id='teminalParTr" + index + "']").hide();
    }
}
function terminalNumOfWindowsChange(index) {
    if ($("[id='terminalNumOfTables" + index + "']").val() == 2) {

        $("[id='terminalFirWindowRow" + index + "']").show();
        switch ($("[id='firstWindow" + index + "']").val()) {
            case 'PathWay':
                $("[id='termianlFirPathWay" + index + "']").show();
                $("[id='termianlFirMap" + index + "']").hide();
                $("[id='termianlFirGplates" + index + "']").hide();
                $("[id='termianlFirShowColor" + index + "']").hide();
                break;
            case 'Google Map':
                $("[id='termianlFirPathWay" + index + "']").hide();
                $("[id='termianlFirMap" + index + "']").show();
                $("[id='termianlFirGplates" + index + "']").hide();
                $("[id='termianlFirShowColor" + index + "']").hide();
                break;
            case 'Gplates':
                $("[id='termianlFirPathWay" + index + "']").hide();
                $("[id='termianlFirMap" + index + "']").hide();
                $("[id='termianlFirGplates" + index + "']").show();
                $("[id='termianlFirShowColor" + index + "']").hide();
                break;
            case 'Show Color':
                $("[id='termianlFirPathWay" + index + "']").hide();
                $("[id='termianlFirMap" + index + "']").hide();
                $("[id='termianlFirGplates" + index + "']").hide();
                $("[id='termianlFirShowColor" + index + "']").show();
                break;
        }

        $("[id='terminalSecondWindow" + index + "']").show();
        switch ($("[id='secondWindow" + index + "']").val()) {
            case 'PathWay':
                $("[id='termianlSecPathWay" + index + "']").show();
                $("[id='termianlSecMap" + index + "']").hide();
                $("[id='termianlSecGplates" + index + "']").hide();
                $("[id='termianlSecShowColor" + index + "']").hide();
                break;
            case 'Google Map':
                $("[id='termianlSecPathWay" + index + "']").hide();
                $("[id='termianlSecMap" + index + "']").show();
                $("[id='termianlSecGplates" + index + "']").hide();
                $("[id='termianlSecShowColor" + index + "']").hide();
                break;
            case 'Gplates':
                $("[id='termianlSecPathWay" + index + "']").hide();
                $("[id='termianlSecMap" + index + "']").hide();
                $("[id='termianlSecGplates" + index + "']").show();
                $("[id='termianlSecShowColor" + index + "']").hide();
                break;
            case 'Show Color':
                $("[id='termianlSecPathWay" + index + "']").hide();
                $("[id='termianlSecMap" + index + "']").hide();
                $("[id='termianlSecGplates" + index + "']").hide();
                $("[id='termianlSecShowColor" + index + "']").show();
                break;
        }

    } else if ($("[id='terminalNumOfTables" + index + "']").val() == 1) {

        $("[id='terminalFirWindowRow" + index + "']").show();
        switch ($("[id='firstWindow" + index + "']").val()) {
            case 'PathWay':
                $("[id='termianlFirPathWay" + index + "']").show();
                $("[id='termianlFirMap" + index + "']").hide();
                $("[id='termianlFirGplates" + index + "']").hide();
                $("[id='termianlFirShowColor" + index + "']").hide();
                break;
            case 'Google Map':
                $("[id='termianlFirPathWay" + index + "']").hide();
                $("[id='termianlFirMap" + index + "']").show();
                $("[id='termianlFirGplates" + index + "']").hide();
                $("[id='termianlFirShowColor" + index + "']").hide();
                break;
            case 'Gplates':
                $("[id='termianlFirPathWay" + index + "']").hide();
                $("[id='termianlFirMap" + index + "']").hide();
                $("[id='termianlFirGplates" + index + "']").show();
                $("[id='termianlFirShowColor" + index + "']").hide();
                break;
            case 'Show Color':
                $("[id='termianlFirPathWay" + index + "']").hide();
                $("[id='termianlFirMap" + index + "']").hide();
                $("[id='termianlFirGplates" + index + "']").hide();
                $("[id='termianlFirShowColor" + index + "']").show();
                break;
        }

        $("[id='terminalSecondWindow" + index + "']").hide();
        $("[id='termianlSecPathWay" + index + "']").hide();
        $("[id='termianlSecMap" + index + "']").hide();
        $("[id='termianlSecGplates" + index + "']").hide();
        $("[id='termianlSecShowColor" + index + "']").hide();
    } else if ($("[id='terminalNumOfTables" + index + "']").val() == 0) {
        $("[id='terminalFirWindowRow" + index + "']").hide();
        $("[id='termianlFirPathWay" + index + "']").hide();
        $("[id='termianlFirMap" + index + "']").hide();
        $("[id='termianlFirGplates" + index + "']").hide();
        $("[id='termianlFirShowColor" + index + "']").hide();

        $("[id='terminalSecondWindow" + index + "']").hide();
        $("[id='termianlSecPathWay" + index + "']").hide();
        $("[id='termianlSecMap" + index + "']").hide();
        $("[id='termianlSecGplates" + index + "']").hide();
        $("[id='termianlSecShowColor" + index + "']").hide();
    }
}



function updateterminal() {

    if ($('#terminalName').val() !== undefined && $('#terminalName').val().length > 0) {
        curData.label = $('#terminalName').val();
        data.nodes.update(curData);
    }

    if (curData.resourcesIn !== undefined) {

        if (curData.actions === undefined)
            curData.actions = [];

        for (var i = 0; i < curData.resourcesIn.length; ++i) {

//                        var index = myIncludeActionIndex(curData.actions, curData.resourcesIn[i].urlReturnFileName);
            var index = myIncludeFieldIndex(curData.actions, curData.resourcesIn[i].id, "resourceid");
            if (index === -1) {
                var action = {
                    id: guid(),
                    act: 'print',
                    outputFileNames: [curData.resourcesIn[i].urlReturnFileName],
                    printType: $("[id='terminalupdateprinttype" + i + "']").val(),
                    resourceid: curData.resourcesIn[i].id,
                    numOfWins: $("[id='terminalNumOfTables" + i + "']").val(),
                };
                //table functions
                action.submit = {windowFunction: [], values: []};
                if (action.numOfWins == 1) {
                    switch ($("[id='firstWindow" + i + "']").val()) {
                        case 'PathWay':
                            action.submit.windowFunction.push("PathWay");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirPathWay" + i + "']").find('input').val());
                            action.submit.values.push(valueArr);
                            console.log(action.submit);
                            break;
                        case 'Google Map':
                            action.submit.windowFunction.push("Google Map");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirMap" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlFirMap" + i + "']").find('input').eq(1).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Gplates':
                            action.submit.windowFunction.push("Gplates");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(2).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(1).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(3).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Show Cube':
                            action.submit.windowFunction.push("ShowCube");
                            var valueArr = [];
                            action.submit.values.push(valueArr);
                            break;
                    }
                } else if (action.numOfWins == 2) {
                    switch ($("[id='firstWindow" + i + "']").val()) {
                        case 'PathWay':
                            action.submit.windowFunction.push("PathWay");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirPathWay" + i + "']").find('input').val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Google Map':
                            action.submit.windowFunction.push("Google Map");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirMap" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlFirMap" + i + "']").find('input').eq(1).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Gplates':
                            action.submit.windowFunction.push("Gplates");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(2).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(1).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(3).val());
                            action.submit.values.push(valueArr);
                            break;
                         case 'Show Cube':
                            action.submit.windowFunction.push("ShowCube");
                            var valueArr = [];
                            action.submit.values.push(valueArr);
                            break;
                    }
                    switch ($("[id='secondWindow" + i + "']").val()) {
                        case 'PathWay':
                            action.submit.windowFunction.push("PathWay");
                            var valueArr = [];
                            valueArr.push($("[id='termianlSecPathWay" + i + "']").find('input').val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Google Map':
                            action.submit.windowFunction.push("Google Map");
                            var valueArr = [];
                            valueArr.push($("[id='termianlSecMap" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlSecMap" + i + "']").find('input').eq(1).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Gplates':
                            action.submit.windowFunction.push("Gplates");
                            var valueArr = [];
                            valueArr.push($("[id='termianlSecGplates" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlSecGplates" + i + "']").find('input').eq(2).val());
                            valueArr.push($("[id='termianlSecGplates" + i + "']").find('input').eq(1).val());
                            valueArr.push($("[id='termianlSecGplates" + i + "']").find('input').eq(3).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Show Cube':
                            action.submit.windowFunction.push("ShowCube");
                            var valueArr = [];
                            action.submit.values.push(valueArr);
                            break;
                    }
                }
                //col functions
                action.colFuns = [];

                for (var j = 0; j < $("[id='terminalColFunctionTable" + i + "']").find('tbody tr').length; ++j) {
                    var colFun = {functionName: "", value: ""};
                    var row = $("[id='terminalColFunctionTable" + i + "']").find('tbody tr').eq(j);

                    colFun.functionName = row.find("select").val();
                    colFun.value = row.find("input").val();

                    action.colFuns.push(colFun);
                }


                curData.actions.push(action);
            } else {
                var action = {
                    outputFileNames: [curData.resourcesIn[i].urlReturnFileName],
                    printType: $("[id='terminalupdateprinttype" + i + "']").val(),
                    numOfWins: $("[id='terminalNumOfTables" + i + "']").val(),
                };

                action.submit = {windowFunction: [], values: []};
                if (action.numOfWins == 1) {
                    switch ($("[id='firstWindow" + i + "']").val()) {
                        case 'PathWay':
                            action.submit.windowFunction.push("PathWay");
                            action.submit.values.push($("[id='termianlFirPathWay" + i + "']").find('input').val());
                            break;
                        case 'Google Map':
                            action.submit.windowFunction.push("Google Map");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirMap" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlFirMap" + i + "']").find('input').eq(1).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Gplates':
                            action.submit.windowFunction.push("Gplates");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(2).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(1).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(3).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Show Cube':
                            action.submit.windowFunction.push("ShowCube");
                            var valueArr = [];
                            action.submit.values.push(valueArr);
                            break;
                    }
                } else {
                    switch ($("[id='firstWindow" + i + "']").val()) {
                        case 'PathWay':
                            action.submit.windowFunction.push("PathWay");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirPathWay" + i + "']").find('input').val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Google Map':
                            action.submit.windowFunction.push("Google Map");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirMap" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlFirMap" + i + "']").find('input').eq(1).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Gplates':
                            action.submit.windowFunction.push("Gplates");
                            var valueArr = [];
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(2).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(1).val());
                            valueArr.push($("[id='termianlFirGplates" + i + "']").find('input').eq(3).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Show Cube':
                            action.submit.windowFunction.push("ShowCube");
                            var valueArr = [];
                            action.submit.values.push(valueArr);
                            break;
                    }
                    switch ($("[id='secondWindow" + i + "']").val()) {
                        case 'PathWay':
                            action.submit.windowFunction.push("PathWay");
                            var valueArr = [];
                            valueArr.push($("[id='termianlSecPathWay" + i + "']").find('input').val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Google Map':
                            action.submit.windowFunction.push("Google Map");
                            var valueArr = [];
                            valueArr.push($("[id='termianlSecMap" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlSecMap" + i + "']").find('input').eq(1).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Gplates':
                            action.submit.windowFunction.push("Gplates");
                            var valueArr = [];
                            valueArr.push($("[id='termianlSecGplates" + i + "']").find('input').eq(0).val());
                            valueArr.push($("[id='termianlSecGplates" + i + "']").find('input').eq(2).val());
                            valueArr.push($("[id='termianlSecGplates" + i + "']").find('input').eq(1).val());
                            valueArr.push($("[id='termianlSecGplates" + i + "']").find('input').eq(3).val());
                            action.submit.values.push(valueArr);
                            break;
                        case 'Show Cube':
                            action.submit.windowFunction.push("ShowCube");
                            var valueArr = [];
                            action.submit.values.push(valueArr);
                            break;
                    }
                }

                action.colFuns = [];
                for (var j = 0; j < $("[id='terminalColFunctionTable" + i + "']").find('tbody tr').length; ++j) {
                    var colFun = {functionName: "", value: ""};
                    var row = $("[id='terminalColFunctionTable" + i + "']").find('tbody tr').eq(j);

                    colFun.functionName = row.find("select").val();
                    colFun.value = row.find("input").val();

                    action.colFuns.push(colFun);
                }
                curData.actions[index] = action;
            }
        }
    }

    data.nodes.update(curData);
//        updateTerminalOutResources();
    console.log(curData);
    checkNextNodeTypeError(curData);
    generateInnerhtml();

    gotoNodeInfo();

}

function updateTerminalOutResources() {
    curData.resourcesOut = [];

    if (curData.actions === undefined)
        return;
    //add them all assuming one action
    for (var i = 0; i < curData.actions.length; ++i) {
        if (curData.actions[i].act === 'print') {
            curData.actions[i].actionOut = [];
            for (var j = 0; j < curData.actions[i].outputFileNames.length; j++) {
                var newRes = {
                    urlReturnFileName: curData.actions[i].outputFileNames[j],
                    urlReturnFileType: curData.actions[i].outputFileTypes[j],
                    id: guid()
                };
                curData.actions[i].actionOut.push(newRes);
                curData.resourcesOut.push(newRes);
            }
            //code        
        }
    }
//         console.log(curData);
    data.nodes.update(curData);
}

function removeTerminalAction(index) {
    curData.actions.splice(index, 1);
    data.nodes.update(curData);
    checkNextNodeTypeError(curData);
    generateInnerhtml();
}

function bindTerminalFunctions() {
//        console.log('bindTerminalFunctions');

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
                $('#resourceInShowTerminal' + index).hide();
                $('#resourceInShowTerminal' + index).next().show();
                curData.stop = "input";
                curData.resourcesIn[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceInShowTerminal' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowTerminal" + index).html("");
            }
        }

    });


    $(".tableRemoveSpan").unbind('click');
    $('.tableRemoveSpan').click(function () {
        console.log('remove')
        $(this).closest('tr').remove();
    });


}

function recommendShowFunctions(resources) {
    for (var i = 0; i < curData.resourcesIn.length; ++i) {
        $("[id='terminalNumOfTables" + i + "']").val(0);
        $("[id='terminalNumOfTables" + i + "']").trigger("change");
        if (curData.resourcesIn[i].outAttributes == undefined)
            return;
        for (var j = 0; j < curData.resourcesIn[i].outAttributes.length; ++j) {
            if (curData.resourcesIn[i].resourceType == 'XML' || curData.resourcesIn[i].resourceType == 'Other')
                continue;
            var attribute = curData.resourcesIn[i].outAttributes[j];
            if (attribute.description == undefined)
                continue;
            if (attribute.description.indexOf("pathway") != -1 && attribute.description.indexOf("image") != -1) {
                $("[id='terminalNumOfTables" + i + "']").val(1);
                $("[id='terminalNumOfTables" + i + "']").trigger("change");
                $("[id='firstWindow" + i + "']").val('PathWay');
                $("[id='firstWindow" + i + "']").trigger("change");
                $("[id='termianlFirPathWay" + i + "']").find("input").eq(0).val(attribute.name);
            } else if (attribute.description.indexOf("longtitude") != -1 || attribute.description.indexOf("latitude") != -1) {
                $("[id='terminalNumOfTables" + i + "']").val(1);
                $("[id='terminalNumOfTables" + i + "']").trigger("change");
                $("[id='firstWindow" + i + "']").val('Google Map');
                $("[id='firstWindow" + i + "']").trigger("change");
                var lng = "", lat = "";
                if (attribute.description.indexOf("longtitude") != -1) {
                    lng = attribute.name;
                    for (var k = 0; k < curData.resourcesIn[i].outAttributes.length; ++k) {
                        var description = curData.resourcesIn[i].outAttributes[k].description;
                        if (description.indexOf("latitude") != -1) {
                            lat = curData.resourcesIn[i].outAttributes[k].name;
                            break;
                        }
                    }
                } else {
                    lat = attribute.name;
                    for (var k = 0; k < curData.resourcesIn[i].outAttributes.length; ++k) {
                        var description = curData.resourcesIn[i].outAttributes[k].description;
                        if (description.indexOf("longtitude") != -1) {
                            lng = curData.resourcesIn[i].outAttributes[k].name;
                            break;
                        }
                    }
                }
                $("[id='termianlFirMap" + i + "']").find("input").eq(0).val(lat);
                $("[id='termianlFirMap" + i + "']").find("input").eq(1).val(lng);
            } else if (attribute.description.indexOf("website") != -1) {
                colPrinterRulesAddRow(i);
                $("[id='terminalColFunctionTable" + i + "']").find("tbody tr").last().find("select").val("WebSite");
                $("[id='terminalColFunctionTable" + i + "']").find("tbody tr").last().find("input").val(attribute.name);
            } else if (attribute.description.indexOf("color") != -1) {
                colPrinterRulesAddRow(i);
                $("[id='terminalColFunctionTable" + i + "']").find("tbody tr").last().find("select").val("ShowColor");
                $("[id='terminalColFunctionTable" + i + "']").find("tbody tr").last().find("input").val(attribute.name);
            }
        }
    }

}
