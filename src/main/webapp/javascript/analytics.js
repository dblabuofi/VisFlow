function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function generateUpdateAnalytics() {
    colorFun.reset();
//        console.log('generateUpdateAnalytics')
    var innerhtml = "";
    if (curData.resourcesIn === undefined) {
        return innerhtml;
    }
    innerhtml += "<label class='label label-primary'>Resources:</label><br>";
    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td width='10%;'><label>Analytics Name</label></td><td><input id='analyticsName' class='form-control'></td></tr>";
    innerhtml += "<tr><td><label>Analytics Method</label></td><td>";
    innerhtml += "<select class='form-control' id='analyticsUpdateMethod' onchange='analyticsSelectChange()'>" +
            "<option   value='Code' selected>Code</option>" +
            "<option value='Resource' >Resource</option>" +
            "<option value='Function' >Function</option>" +
//            "<option value='ExtractFunction' >Extract Table</option>" +
//            "<option value='MergeTable' >Merge Table</option>" +
//                "<option selected value='Table' >Table</option>" +
            "</select>";

    innerhtml += "</td></tr>";
    innerhtml += "</tbody></table>";
    innerhtml += "<div id='analyticsupdatewebdiv'> </div>";
    innerhtml += "<div id='analyticsExtractwebdiv'> </div>";

    innerhtml += "<button class='btn btn-info' onclick='updateanalytics()'>Update Analytics</button>";
//        innerhtml += "<button class='btn btn-info' onclick='testString()'>Update Analytics</button>";
//    console.log(innerhtml);
    return innerhtml;
}

//function testString() {
//        var str = "http://localhost:8084/AutoInterfaceWS/recommend/functionWS?queryTree={\"text\":\"bwa\",\"a_attr\":{\"style\":\"background-color: rgb(205, 165, 10) !important\"},\"id\":\"j3_1\",\"children\":[]}&matchType=active&topk=3&library=Burrows-Wheeler Aligner";
//        console.log(str);
//        $.ajax({
//                        url: str
//                }).then(function (data) {
//                        $('#analyticsupdatewebservicesshow').next().hide();
//                        data = JSON.parse(data);
//                        functions = data;
////                        console.log(data);
//                        generateFunctionInfo(data, 'analyticsupdatewebservicesshow');
//                });
//
//}

function analyticsSelectChange() {
    var innerhtml = "";
    //we clean it first
    $("#analyticsExtractwebdiv").html(innerhtml);
    if ($('#analyticsUpdateMethod :selected').val() === 'Resource') {//resource 
        innerhtml += generateDataUpdateResources(curData, 'resourcesIn');
        innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";

        innerhtml += "<tr><td><label>Output File Names</label></td><td>";
        innerhtml += generateOutPutFileInputsBasedOnWebService(curData.resourcesIn);
        innerhtml += "</td></tr>";
        innerhtml += "<tr><td><label>Matcher</label></td>";
        innerhtml += "<td><select id='adapterUpdateResourceMatcher' class='form-control'>" +
                "<option value='S-Match' selected>S-Match</option>" +
                "<option value='ontobuilder' >ontobuilder</option>" +
                "<option value='PruSM' >PruSM</option>" +
                "<option value='Cupid' >Cupid</option>" +
                "</select></td></tr>";
        innerhtml += "<tr><td><label>Wrapper</label></td><td>";
        innerhtml += generateWebServiceWrapperRecommandation(curData.resourcesIn);
        innerhtml += "</td></tr>";
        innerhtml += "<tr style='display:none;'><td><label>Method applied for results</label></td>";
        innerhtml += "<td><select id='analyticsUpdateResourceSelect' class='form-control'>" +
                "<option value='Append' selected>Append</option>" +
                "<option value='Remove Duplicated' >Remove Duplicated</option>" +
                "</select></td></tr>";


        innerhtml += "</tbody></table>";

        $("#analyticsupdatewebdiv").html(innerhtml);

    } else if ($('#analyticsUpdateMethod :selected').val() === 'Code') {
        innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
        innerhtml += "<tr><td width='120px'><label>Code Type</label></td>";
        innerhtml += "<td><select id='analyticsupdateCodeType' class='form-control'>" +
                "<option value='xquery' >XQuery</option>" +
                "<option value='sql' selected>SQL</option>" +
                "<option value='python' >Python</option>" +
                "<option value='r'>R</option>" +
                "<option  value='bash' >Windows Bash</option>" +
                "</select></td></tr>";

        innerhtml += "<tr><td><label>Output File Names</label></td><td>";
        innerhtml += generateOutPutFileInputs();
        innerhtml += "</td></tr>";
        innerhtml += "</tbody></table>";
        innerhtml += "<label class='label label-primary'>Code:</label><br>";
        innerhtml += "<textarea  id='analyticsupdateinput' class='wholewidth' style='height: 25vh;'></textarea>";
        $("#analyticsupdatewebdiv").html(innerhtml);

    } else if ($('#analyticsUpdateMethod :selected').val() === 'Function') {
        innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
        innerhtml += "<tr><td width='120px'><label>Output File Names</label></td><td>";
        innerhtml += generateOutPutFileInputs();
        innerhtml += "</td></tr>";
        innerhtml += "</td></tr>";
        innerhtml += "<tr><td><label>Method applied for results</label>";
        innerhtml += "<td><select id='analyticsUpdateResourceSelect' class='form-control'>" +
                "<option value='Append' selected>Append</option>" +
                "<option value='Remove Duplicated' >Remove Duplicated</option>" +
                "<option value='Do Noting' >Do Nothing</option>" +
                "</select></td></tr>";
        innerhtml += "</tbody></table>";

        innerhtml += generateFunctionInfo(curData.librariesIn, null);

        $("#analyticsupdatewebdiv").html(innerhtml);


    } else if ($('#analyticsUpdateMethod :selected').val() === 'ExtractFunction') {
        innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
        innerhtml += "<tr><td><label>Output File Names</label></td><td>";
        innerhtml += generateOutPutFileInputs();
        innerhtml += "</td></tr>";
        innerhtml += "<tr><td>Resource:</td><td colspan='2'><select id='analyticsupdateresourcesselect' class='form-control' onchange='analyticsUpdateExtractFunctionSelectChange()'>";
        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            if (curData.resourcesIn[i].resourceType === "CSV" || curData.resourcesIn[i].resourceType === "XML" || curData.resourcesIn[i].resourceType === "Other") {
                innerhtml += "<option value='" + i + "'>" + curData.resourcesIn[i].urlReturnFileName + "</option>";
            }
        }
        innerhtml += "</select></td></tr>";
        innerhtml += "<tr><td>Support Action:</td><td><select id='analyticsupdateresourcesselect2' class='form-control'>";
        innerhtml += "<option value='none'>none</option>";
        innerhtml += "<option value='filter'>filter</option>";
        innerhtml += "<option value='removeDuplicate'>remove duplicate</option>";
        innerhtml += "<option value='rowReplace'>row Replacement</option>";
        innerhtml += "</select></td><td><input class='form-control' id='analyticsupdateresourcesinput2'></td></tr>";
        innerhtml += "</table>";

        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            if (curData.resourcesIn[i].resourceType === "CSV" || curData.resourcesIn[i].resourceType === "XML" || curData.resourcesIn[i].resourceType === "Other") {
                innerhtml += "<div id='extractTree" + i + "' style='width: 100px;'></div>";
                clearColor(curData.resourcesIn[i].jsUrlReturnFileSchema);
            }
        }

        $("#analyticsupdatewebdiv").html(innerhtml);

        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            if (curData.resourcesIn[i].resourceType === "CSV" || curData.resourcesIn[i].resourceType === "XML" || curData.resourcesIn[i].resourceType === "Other") {
                var schemaData = null;
                var resouceIn = curData.resourcesIn[i];
                //we need generate the schema
                if (curData.resourcesIn[i].jsUrlReturnFileSchema === undefined || curData.resourcesIn[i].jsUrlReturnFileSchema === "" || isEmpty(curData.resourcesIn[i].jsUrlReturnFileSchema)) {
                    //get the file name and submit to the webserver
                    var location = curData.resourcesIn[i].location;
                    var fileName = curData.resourcesIn[i].urlReturnFileName;
                    console.log(location);
                    console.log(fileName);
                    var url = baseurl + "queryTree/schema?location=" + encodeURI(location)
                            + "&fileName=" + fileName + "&index=" + i;
                    ;
                    console.log(url);
                    $.ajax({
                        url: url,
                        type: "get"
                    }).then(function (response) {
                        console.log(response);
                        var index = 0;
                        if (response.indexOf("#") != -1) {
                            index = response.substring(response.lastIndexOf("#") + 1);
                            response = response.substring(0, response.lastIndexOf("#"));
                        }
                        curData.resourcesIn[index].jsUrlReturnFileSchema = JSON.parse(response);
                        schemaData = response;
                        var schema = JSON.parse(schemaData);
                        console.log(schema);
                        innerhtml = "<table id='analyticsAttrsSelectTable" + index + "' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
                        if (schema.xpath === undefined) {
                            innerhtml += "<th>attribute</th><th>name</th><th>select</th>";
                        } else {
                            innerhtml += "<th>attribute</th><th>name</th><th>xPath</th><th>select</th>";
                        }
                        innerhtml += generateSchemaTable(schema, 0, false);
                        innerhtml += "</tbody></table>";
                        if (curData.resourcesIn[index].resourceType === "XML") {
                            innerhtml += "<table id='analyticsAttrsNewTable" + index + "' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'>";
                            innerhtml += "<th>new attribute</th><th>xpath</th><th>delete</th>";
                            innerhtml += "<tfoot class='addButtonRow'><td colspan='5'><button class='btn btn-info' onclick='analyticsNewAttrAddRow(" + index + ")'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New attribute</button></td></tfoot>";
                            innerhtml += "</table>";
                        }
                        $("#analyticsExtractwebdiv").append(innerhtml);
                    });
                } else {
                    schemaData = JSON.stringify(curData.resourcesIn[i].jsUrlReturnFileSchema);
                    var schema = JSON.parse(schemaData);
//                                                console.log(schema);
                    innerhtml = "<table id='analyticsAttrsSelectTable" + i + "' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
                    if (schema.xpath === undefined) {
                        innerhtml += "<th>attribute</th><th>name</th><th>select</th>";
                    } else {
                        innerhtml += "<th>attribute</th><th>name</th><th>xPath</th><th>select</th>";
                    }
                    innerhtml += generateSchemaTable(schema, 0, false);
                    innerhtml += "</tbody></table>";
                    if (curData.resourcesIn[i].resourceType === "XML") {
                        innerhtml += "<table id='analyticsAttrsNewTable" + i + "' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'>";
                        innerhtml += "<th>new attribute</th><th>xpath</th><th>delete</th>";
                        innerhtml += "<tfoot class='addButtonRow'><td colspan='5'><button class='btn btn-info' onclick='analyticsNewAttrAddRow(" + i + ")'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New attribute</button></td></tfoot>";
                        innerhtml += "</table>";
                    }
                    $("#analyticsExtractwebdiv").append(innerhtml);
                }

            }
        }

    } else if ($('#analyticsUpdateMethod :selected').val() === 'MergeTable') {
        innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
        innerhtml += "<tr><td><label>Output File Names</label></td><td>";
        innerhtml += generateOutPutFileInputs();
        innerhtml += "</td></tr>";
        innerhtml += "<tr><td><label>Support Operation</label></td><td>";
        innerhtml += "<select id='analyticsmergetablesupportedselect'  class='form-control'>";
        innerhtml += "<option value='none'>none</option>";
        innerhtml += "<option value='selectandappendbyrow'>select and append to left</option>";
        innerhtml += "<option value='appendwithmapkey'>map with key append to left</option>";
        innerhtml += "<option value='selectandaddtabletobottom'>select and add table to bottom</option>";
        innerhtml += "<option value='differencewithkey'>difference with key</option>";
        innerhtml += "</select>";
        innerhtml += "</td><td><input id='analyticsmergetablesupportedselectinput' class='form-control'></td></tr>";
        innerhtml += "</table>";
        $("#analyticsupdatewebdiv").html(innerhtml);

        innerhtml = "";
//        console.log(curData.resourcesIn);
        for (var i = 0; i < curData.resourcesIn.length; ++i) {
//            console.log(curData.resourcesIn[i]);
            if (curData.resourcesIn[i].resourceType === "CSV" || curData.resourcesIn[i].resourceType === "XML" || curData.resourcesIn[i].resourceType === "Other") {
                var schemaData = null;
                var resouceIn = curData.resourcesIn[i];
                //we need generate the schema
                if (curData.resourcesIn[i].jsUrlReturnFileSchema === undefined || curData.resourcesIn[i].jsUrlReturnFileSchema === "" || isEmpty(curData.resourcesIn[i].jsUrlReturnFileSchema)) {
                    //get the file name and submit to the webserver
                    var location = curData.resourcesIn[i].location;
                    var fileName = curData.resourcesIn[i].urlReturnFileName;
                    var url = baseurl + "queryTree/schema?location=" + encodeURI(location)
                            + "&fileName=" + fileName + "&index=" + i;
//                    console.log(url);
                    $.ajax({
                        url: url,
                        type: "get"
                    }).then(function (response) {
                        var index = 0;
                        if (response.indexOf("#") != -1) {
                            index = response.substring(response.lastIndexOf("#") + 1);
                            response = response.substring(0, response.lastIndexOf("#"));
                        }
                        console.log(response);
                        curData.resourcesIn[index].jsUrlReturnFileSchema = JSON.parse(response);
                        schemaData = response;
                        var schema = JSON.parse(schemaData);
                        var html = $("#analyticsExtractwebdiv").html();
                        html += "<table id='analyticsAttrsMergeTable" + i + "' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
                        if (schema.xpath === undefined) {
                            innerhtml += "<th>attribute</th><th>name</th><th>select</th>";
                        } else {
                            innerhtml += "<th>attribute</th><th>name</th><th>xPath</th><th>select</th>";
                        }
                        html += generateSchemaTable(schema, 0, curData.librariesIn);
                        html += "</tbody></table>";
                        $("#analyticsExtractwebdiv").html(html);
                        data.nodes.update(curData);
                    });
                } else {
                    schemaData = JSON.stringify(curData.resourcesIn[i].jsUrlReturnFileSchema);
                    var schema = JSON.parse(schemaData);
                    innerhtml += "<table id='analyticsAttrsMergeTable" + i + "' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
                    if (schema.xpath === undefined) {
                        innerhtml += "<th>attribute</th><th>name</th><th>select</th>";
                    } else {
                        innerhtml += "<th>attribute</th><th>name</th><th>xPath</th><th>select</th>";
                    }
                    innerhtml += generateSchemaTable(schema, 0, curData.librariesIn);
                    innerhtml += "</tbody></table>";
                }
            }
        }
        $("#analyticsExtractwebdiv").html(innerhtml);
    } else {
        $("#analyticsupdatewebdiv").html("");
    }

    bindAnalyticsFunctions();
    analyticsUpdateExtractFunctionSelectChange();

}

function analyticsNewAttrAddRow(index) {
    $('[id="analyticsAttrsNewTable' + index + '"]').append("<tr class='tablerow'><td>"
            + "<input class='form-control'>"
            + "</td>"
//            + "</td><td>"
//            + generateAnanlyticsSelect()
//            + "</td>"
            + "<td><input class='form-control'></td>"
            + "<td><span class='analyticsNewAttrtableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span></a></td>"
            + "</tr>");

    bindAnalyticsFunctions();
}

function generateAnanlyticsSelect(libraries) {

    var html = "<select class='form-control'><option value='none'>none</option>\n";
    for (var i = 0; i < libraries.length; ++i) {
        html += '<option value="' + i + '">' + libraries[i].libraryName + '</option>';
    }

    html += "</select>";

    return html;
}

function generateSchemaTable(schema, level, csvFile) {
    if (schema === null)
        return "";
    var html = "";
    if (!(level == 0 && csvFile != undefined && csvFile == false)) {
        html += "<tr><td>";
        for (var i = 0; i < level; ++i) {
            html += "&nbsp;&nbsp;";
        }
        html += schema.text + "</td>";
        html += "<td><input class='form-control' /></td>";
        if (schema.xpath != undefined) {
            html += "<td><input class='form-control' value='" + schema.xpath + "'></td>";
        }
        html += "<td><input type='checkbox' /></td>";
    }

    for (var i = 0; i < schema.children.length; ++i) {
        html += generateSchemaTable(schema.children[i], level + 1, csvFile);
    }
    return html;
}

function analyticsUpdateExtractFunctionSelectChange() {
    var index = $("#analyticsupdateresourcesselect").val();
    for (var i = 0; i < curData.resourcesIn.length; ++i) {
        if (curData.resourcesIn[i].resourceType === "CSV" || curData.resourcesIn[i].resourceType === "XML" || curData.resourcesIn[i].resourceType === "Other") {
            $("[id='analyticsAttrsSelectTable" + i + "']").hide();
            $("[id='analyticsAttrsNewTable" + i + "']").hide();
        }
    }
    $("[id='analyticsAttrsNewTable" + index + "']").show();
    $("[id='analyticsAttrsSelectTable" + index + "']").show();


}

function clearColor(schema) {
//    console.log(schema);
    if (schema === undefined || JSON.stringify(schema) == '{}')
        return;
    schema.a_attr.style = "";
    if (schema.children !== undefined) {
        for (var i = 0; i < schema.children.length; ++i) {
            clearColor(schema.children[i]);
        }
    }
}

function analyticsUpdateResourceParamChange(resindex, attrindex) {
//        console.log('analyticsUpdateResourceParamChange');
    console.log($("[id='analyticsupdateResourceParams" + resindex + attrindex + "'] option:selected").val());

    if ($("[id='analyticsupdateResourceParams" + resindex + attrindex + "'] option:selected").val() === 'input') {
        $("[id='analyticsUpdateParamInput" + resindex + attrindex + "']").show();
        $("[id='analyticsUpdateParamResource" + resindex + attrindex + "']").hide();

    } else {
        $("[id='analyticsUpdateParamInput" + resindex + attrindex + "']").hide();
        $("[id='analyticsUpdateParamResource" + resindex + attrindex + "']").show();

//                console.log(resindex);
//                console.log(attrindex);
//                console.log(curData.resourcesIn[resindex].attributes[attrindex]);
//                console.log(curData.resourcesIn[resindex].jsUrlReturnFileSchema);

        var resourceIndex = $("[id='analyticsupdateResourceParams" + resindex + attrindex + "'] option:selected").val();
        var resouceIn = curData.resourcesIn[resourceIndex];

        if (curData.resourcesIn[resourceIndex].jsUrlReturnFileSchema === undefined) {
            //get the file name and submit to the webserver
            var location = curData.resourcesIn[resourceIndex].location;
            var fileName = curData.resourcesIn[resourceIndex].urlReturnFileName;
            console.log(location);
            console.log(fileName);
            var url = baseurl + "queryTree/schema?location=" + encodeURI(location)
                    + "&fileName=" + fileName;
            console.log(url);
            $.ajax({
                url: url,
                type: "get"
            }).success(function (data) {
                console.log(data);
                console.log(resouceIn);
                resouceIn.jsUrlReturnFileSchema = JSON.parse(data);
                var url = baseurl + 'queryTree/matchAttribute';

                $.ajax({
                    type: "POST",
                    url: url,
                    data: JSON.stringify({schema: resouceIn.jsUrlReturnFileSchema, attribute: curData.resourcesIn[resindex].attributes[attrindex], globalmatch: data.globalmatch}),
                    contentType: "application/json; charset=utf-8",
                    success: function (response) {
                        console.log("********************");
                        console.log(response);
                        $("[id='analyticsUpdateParamResource" + resindex + attrindex + "']").find("input").val(response);

                    }
                });
            });
        } else {
            var url = baseurl + 'queryTree/matchAttribute';

            $.ajax({
                type: "POST",
                url: url,
                data: JSON.stringify({schema: resouceIn.jsUrlReturnFileSchema, attribute: curData.resourcesIn[resindex].attributes[attrindex], globalmatch: data.globalmatch}),
                contentType: "application/json; charset=utf-8",
                success: function (response) {
                    console.log("********************");
                    console.log(response);
                    $("[id='analyticsUpdateParamResource" + resindex + attrindex + "']").find("input").val(response);

                }
            });
        }
    }




}

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var functions = [];
function updateanalytics() {
    //one analytics has any one action
    curData.actions = [];
    //update name
    if ($('#analyticsName').val() !== undefined && $('#analyticsName').val().length > 0) {
        curData.label = $('#analyticsName').val();
        data.nodes.update(curData);
    }

    if ($('#analyticsUpdateMethod :selected').val() === 'Resource') {
    } else if ($('#analyticsUpdateMethod :selected').val() === 'Code') {
        if ($('#analyticsupdateinput').val().length === 0) {
            generateInnerhtml();
            return;
        }
    } else if ($('#analyticsUpdateMethod :selected').val() === 'Function') {
    }

    var action = {
        id: guid(),
        act: $('#analyticsUpdateMethod :selected').val()
    };

    action.outputFileNames = [];
    action.outputFileTypes = [];
    action.outAttributes = [];
    action.inputFileNames = [];
    curData.resourcesIn.forEach(function (data) {
        action.inputFileNames.push(data.urlReturnFileName);
    });

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

    //web service
    if ($('#analyticsUpdateMethod :selected').val() === 'Resource') {
        action.resultMethod = $('#analyticsUpdateResourceSelect').val();
        action.webservices = [];
        //assume there are one resource need be called, we just take care of that one
        var targetResource = null;
        var resourceIndex = -1;
        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            if (curData.resourcesIn[i].resourceType !== "CSV"
                    && curData.resourcesIn[i].resourceType !== "XML"
                    && curData.resourcesIn[i].resourceType !== "Other") {
                console.log(curData.resourcesIn[i]);
                targetResource = JSON.parse(JSON.stringify(curData.resourcesIn[i]));
                resourceIndex = i;
                break;
            }
        }
        if (targetResource == null) {
            console.log("updateanalytics targetResource is unknown, need fix");
            return;
        }
        //id should be the resource id
        action.id = targetResource.id;

        for (var i = 0; i < targetResource.attributes.length; ++i) {
            if (targetResource.attributes[i].shown === true) {

                if ($("[id='analyticsupdateResourceParams" + resourceIndex + i + "']").val() === 'input') {//user input
                    targetResource.attributes[i].value = $("[id='" + targetResource.attributes[i].name + "']").val();
                    targetResource.attributes[i].from = 'input';
                } else {
                    targetResource.attributes[i].value = $("[id='" + targetResource.attributes[i].name + "Resource']").val();
                    targetResource.attributes[i].from = $("[id='analyticsupdateResourceParams" + resourceIndex + i + "'] option:selected").text();
                }
            }
        }
        
        targetResource.wrapper = {
            wrapperName:$('#adapterUpdateResourceWrapper').val(),
            headers:[]
        }; 
        targetResource.matcher = $('#adapterUpdateResourceMatcher').val();
        targetResource.wrapper.headers = [];
        for (var i = 0; i < action.outAttributes[0].length; ++i) {
            targetResource.wrapper.headers.push(action.outAttributes[0][i].name);
        }
        console.log(targetResource.wrapper);

        action.targetResource = targetResource;
    } else if ($('#analyticsUpdateMethod :selected').val() === 'Code') {
        if ($('#analyticsupdateinput').val() !== undefined && $('#analyticsupdateinput').val().length > 0) {
            action.val = $('#analyticsupdateinput').val();
            action.codeType = $('#analyticsupdateCodeType :selected').val();
            action.codeName = makeFileName(7);
        }
    } else if ($('#analyticsUpdateMethod :selected').val() === 'Function') {
        action.resultMethod = $('#analyticsUpdateResourceSelect').val();
        action.webservices = [];
        var targetFunction = null;
        var functionIndex = -1;
        //select only one of them
        for (var i = 0; i < curData.librariesIn.length; ++i) {
            if ($("[id='analyticsFunction" + i + "']").is(':checked')) {
                var targetFunction = JSON.parse(JSON.stringify(curData.librariesIn[i]));
                functionIndex = i;
                break;
            }
        }
        //id should be the Function id
        action.id = guid();
        if (targetFunction == null) {
            console.log("updateanalytics target Function is unknown, need fix");
            return;
        }
        //comand line value
        targetFunction.comandLine = $("[id='analyticsFunctioncommand" + functionIndex + "']").val();
        for (var i = 0; i < targetFunction.attributes.length; ++i) {
            if (targetFunction.attributes[i].shown === true) {
                if ($("[id='analyticsupdateResourceParams" + functionIndex + i + "']").val() === 'input') {//user input
                    targetFunction.attributes[i].value = $("[id='" + targetFunction.attributes[i].name + "']").val();
                    targetFunction.attributes[i].from = 'input';
                } else {
//                                        console.log("if equals not ");
//                                        console.log(targetFunction.attributes[i].name);
                    targetFunction.attributes[i].value = $("[id='" + targetFunction.attributes[i].name + "Resource']").val();
                    targetFunction.attributes[i].from = $("[id='analyticsupdateResourceParams" + functionIndex + i + "']").val();
                }
            }
        }
        action.targetFunction = targetFunction;

    } else if ($('#analyticsUpdateMethod :selected').val() === 'ExtractFunction') {
        var index = $("#analyticsupdateresourcesselect").val();
        action.targetResource = curData.resourcesIn[index];
        action.selectAttrs = [];
        action.newAttrs = [];
        action.afterAction = {action: $("#analyticsupdateresourcesselect2").val(), input: $("#analyticsupdateresourcesinput2").val()};
        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            for (var j = 1; j < $("#analyticsAttrsSelectTable" + i + " tbody tr").length; ++j) {
                if (curData.resourcesIn[i].urlReturnFileName.indexOf("xml") != -1) {
                    if ($("#analyticsAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(3).find("input").is(':checked')) {
                        var rACT = {
                            attribute: $("#analyticsAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(0).text().replaceAll("\u00a0", ""),
                            name: $("#analyticsAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(1).find("input").val(),
                            xpath: $("#analyticsAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(2).find("input").val(),
                            resourceName: curData.resourcesIn[i].urlReturnFileName
                        };
                        action.selectAttrs.push(rACT);
                    }
                } else {
                    if ($("#analyticsAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(2).find("input").is(':checked')) {
                        var rACT = {
                            attribute: $("#analyticsAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(0).text().replaceAll("\u00a0", ""),
                            name: $("#analyticsAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(1).find("input").val(),
                        };
                        action.selectAttrs.push(rACT);
                    }
                }
            }
            for (var j = 1; j < $("#analyticsAttrsNewTable" + i + " tr").length - 1; ++j) {
                var rACT = {
                    attribute: $("#analyticsAttrsNewTable" + i + " tr").eq(j).find("td").eq(0).find("input").val(),
                    xpath: $("#analyticsAttrsNewTable" + i + " tr").eq(j).find("td").eq(1).find("input").val(),
                };
                action.newAttrs.push(rACT);
            }
        }



    } else if ($('#analyticsUpdateMethod :selected').val() === 'MergeTable') {
        action.targetResource = curData.resourcesIn[index];
        action.mergeTableSelect = $("#analyticsmergetablesupportedselect").val();
        action.mergeTableSelectInput = $("#analyticsmergetablesupportedselectinput").val();
        action.selectAttrs = [];

        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            for (var j = 1; j < $("#analyticsAttrsMergeTable" + i + " tbody tr").length; ++j) {
                if (curData.resourcesIn[i].urlReturnFileName.indexOf("xml") != -1) {
                    console.log($("#analyticsAttrsMergeTable" + i + " tbody tr").eq(j).find("td").eq(3).find("input").is(':checked'));
                    if ($("#analyticsAttrsMergeTable" + i + " tbody tr").eq(j).find("td").eq(3).find("input").is(':checked')) {
                        var rACT = {
                            attribute: $("#analyticsAttrsMergeTable" + i + " tbody tr").eq(j).find("td").eq(0).text().replaceAll("\u00a0", ""),
                            name: $("#analyticsAttrsMergeTable" + i + " tbody tr").eq(j).find("td").eq(1).find("input").val(),
                            xpath: $("#analyticsAttrsMergeTable" + i + " tbody tr").eq(j).find("td").eq(2).find("input").val(),
                            resourceName: curData.resourcesIn[i].urlReturnFileName
                        };
                        action.selectAttrs.push(rACT);
                    }
                } else {
                    console.log($("#analyticsAttrsMergeTable" + i + " tbody tr").eq(j).find("td").eq(3).find("input").is(':checked'));
                    if ($("#analyticsAttrsMergeTable" + i + " tbody tr").eq(j).find("td").eq(2).find("input").is(':checked')) {
                        var rACT = {
                            attribute: $("#analyticsAttrsMergeTable" + i + " tbody tr").eq(j).find("td").eq(0).text().replaceAll("\u00a0", ""),
                            name: $("#analyticsAttrsMergeTable" + i + " tbody tr").eq(j).find("td").eq(1).find("input").val(),
                            resourceName: curData.resourcesIn[i].urlReturnFileName
                        };
                        action.selectAttrs.push(rACT);
                    }
                }
            }
//            for (var j = 1; j < $("#analyticsAttrsNewTable" + i + " tr").length - 1; ++j) {
//                var rACT = {
//                    attribute: $("#analyticsAttrsNewTable" + i + " tr").eq(j).find("td").eq(0).find("input").val(),
//                    action: $("#analyticsAttrsNewTable" + i + " tr").eq(j).find("td").eq(1).find("select").val(),
//                    input: $("#analyticsAttrsNewTable" + i + " tr").eq(j).find("td").eq(2).find("input").val(),
//                    name: $("#analyticsAttrsNewTable" + i + " tr").eq(j).find("td").eq(0).find("input").val(),
//                };
//                action.newAttrs.push(rACT);
//            }
        }

    }
    curData.actions.push(action);
    console.log(action);
    updateAnalyticsOutResources();
    data.nodes.update(curData);
    updateNodes(curData);
    console.log(curData);
    //update ui 
    generateInnerhtml();
    gotoNodeInfo();
}

function generateQueries(pathes, tree, curPath) {
    if (tree.children.length === 0) {//to the bottom
        if (tree.selected === true) {
            pathes.push(curPath.join("/"));
        }
        return;
    }
    for (var i = 0; i < tree.children.length; ++i) {
        curPath.push(tree.children[i].text);
        generateQueries(pathes, tree.children[i], curPath);
        curPath.pop();
    }
}

//only code and web supported true in action; false not in action
function inActions(actions, action) {
//        console.log(actions);
//        console.log(action);
    if (actions === undefined)
        return -1;
    for (var i = 0; i < actions.length; ++i) {
        if (actions[i].act === 'Code') {
            if (actions[i].act === 'Code') {
                if (actions[i].codeName === action.codeName) {
                    return i;
                }
            }
        } else if (actions[i].act === 'Resource') {
            for (var j = 0; j < actions[i].webservices.length; ++j) {
                if (actions[i].webservices[j].id === action.id) {
                    return i;
                }
            }
        } else if (actions[i].act === 'print') {
            if (actions[i].id === action.id) {
                return i;
            }
        }
    }
    return -1;
}


function removeAnalyticsAction(index) {
//        console.log(index);
    curData.actions.splice(index, 1);
    updateAnalyticsOutResources();
    data.nodes.update(curData);
    updateNodes(curData);

    generateInnerhtml();
}

function updateAnalyticsOutResources() {
//        console.log('updateAnalyticsOutResources');
    curData.resourcesOut = [];

    if (curData.actions === undefined) {
        data.nodes.update(curData);
        return;
    } else if (curData.actions.length === 0) {
        data.nodes.update(curData);
        return;
    } else {
        //add them all assuming one action
        for (var i = 0; i < curData.actions.length; ++i) {
            if (curData.actions[i].act === 'Resource') {
                for (var j = 0; j < curData.actions[i].outputFileNames.length; j++) {
                    var newRes = {
                        urlReturnFileName: curData.actions[i].outputFileNames[j],
                        urlReturnFileType: curData.actions[i].outputFileTypes[j],
                        resourceType: curData.actions[i].outputFileTypes[j],
                        outAttributes: curData.actions[i].targetResource.outAttributes,
                        jsUrlReturnFileSchema: curData.actions[i].targetResource.jsUrlReturnFileSchema
                    };
                    //                                newRes.id = curData.actions[i].id;
                    newRes.id = guid();

                    curData.resourcesOut.push(newRes);
                }
                //code        
            } else if (curData.actions[i].act === 'Code') {
                for (var j = 0; j < curData.actions[i].outputFileNames.length; j++) {
                    var newRes = {
                        urlReturnFileName: curData.actions[i].outputFileNames[j],
                        urlReturnFileType: curData.actions[i].outputFileTypes[j],
                        outAttributes: curData.actions[i].outAttributes[j],
                        resourceType: curData.actions[i].outputFileTypes[j]
                    };
                    newRes.id = guid();

                    curData.resourcesOut.push(newRes);
                }
            } else if (curData.actions[i].act === 'Function') {
                for (var j = 0; j < curData.actions[i].outputFileNames.length; j++) {
                    var newRes = {
                        urlReturnFileName: curData.actions[i].outputFileNames[j],
                        urlReturnFileType: curData.actions[i].outputFileTypes[j],
                        outAttributes: curData.actions[i].targetResource.outAttributes,
                        resourceType: curData.actions[i].outputFileTypes[j]
                    };
                    newRes.id = guid();

                    curData.resourcesOut.push(newRes);
                }
            } else if (curData.actions[i].act === 'ExtractFunction') {
                for (var j = 0; j < curData.actions[i].outputFileNames.length; j++) {
                    var newRes = {
                        urlReturnFileName: curData.actions[i].outputFileNames[j],
                        urlReturnFileType: curData.actions[i].outputFileTypes[j],
                        outAttributes: curData.actions[i].outAttributes[j],
                        resourceType: curData.actions[i].outputFileTypes[j]
                    };
                    newRes.id = guid();
                    curData.resourcesOut.push(newRes);
                }
            } else if (curData.actions[i].act === 'Combine' || curData.actions[i].act === 'Link'
                    || curData.actions[i].act === 'Transformer Function' || curData.actions[i].act === 'MergeTable') {
                for (var j = 0; j < curData.actions[i].outputFileNames.length; j++) {
                    var newRes = {
                        urlReturnFileName: curData.actions[i].outputFileNames[j],
                        urlReturnFileType: curData.actions[i].outputFileTypes[j],
                        outAttributes: curData.actions[i].outAttributes[j],
                        resourceType: curData.actions[i].outputFileTypes[j]
                    };
                    newRes.id = guid();
                    curData.resourcesOut.push(newRes);
                }
            } else if (curData.actions[i].act === 'procedure' || curData.actions[i].act === 'generalIO') {
//                if (curData.actions[i].act === 'procedure') {
//                    if (curData.resourcesIn.length == 0) {//inheritans the graph first node
//                        var module = curData.actions[i].module;
//                        var localNodes = getScaleFreeNetwork();
//                        localNodes.nodes.add(module.graph.nodes);
//                        var startNode = localNodes.nodes.get(module.startNode);
//                        curData.resourcesIn = startNode.resourcesIn;
//                    }
//                }
                for (var j = 0; j < curData.actions[i].outputFileNames.length; j++) {
                    var newRes = {
                        urlReturnFileName: curData.actions[i].outputFileNames[j],
                        urlReturnFileType: curData.actions[i].outputFileTypes[j],
                        resourceType: curData.actions[i].outputFileTypes[j]
                    };
                    if (curData.actions[i].outAttributes != undefined) {
                        if (curData.actions[i].outAttributes[j] != undefined) {
                            newRes.outAttributes = curData.actions[i].outAttributes[j];
                        }
                    } else {
                        newRes.outAttributes = [];
                    }
                    newRes.id = guid();
                    curData.resourcesOut.push(newRes);
                }
            }

        }
        var location = null;
        //update locations
        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            if (curData.resourcesIn[i].location !== undefined && curData.resourcesIn[i].location !== null) {
                location = curData.resourcesIn[i].location;
                break;
            }
        }
        if (location === null && curData.librariesIn != undefined) {
            for (var i = 0; i < curData.librariesIn.length; ++i) {
                if (curData.librariesIn[i].location !== undefined && curData.librariesIn[i].location !== null) {
                    location = curData.librariesIn[i].location;
                    break;
                }
            }
        }

        for (var i = 0; i < curData.resourcesOut.length; ++i) {
            if ((curData.resourcesOut[i].location === undefined || curData.resourcesOut[i].location === null) && location != null) {
                curData.resourcesOut[i].location = location;
            }
        }
    }
//    console.log(curData.resourcesOut);

//         console.log(curData);
    data.nodes.update(curData);
//    console.log(JSON.stringify(curData));
}

function callAnalyticsWS() {
    var queryTree = returnQueryTree('querytree');

    //currently we only allow one libraries running on this
    if (queryTree !== undefined && queryTree !== null) {
        $('#analyticsupdatewebservicesshow').html("");
        $('#analyticsupdatewebservicesshow').next().show();

        var url = baseurl + "recommend/functionWS?queryTree=" + JSON.stringify(queryTree)
                + "&matchType=" + $("input[name='matchtype']:radio:checked").val()
                + "&topk=" + $("#dataupdateselect option:selected").val()
                + "&library=" + curData.librariesIn[0].libraryName;
        console.log(url);
        $.ajax({
            url: url
        }).then(function (data) {
            $('#analyticsupdatewebservicesshow').next().hide();
            data = JSON.parse(data);
            functions = data;
//                        console.log(data);
            generateFunctionInfo(data, 'analyticsupdatewebservicesshow');
        });
    } else {
        var data = [];
        generateFunctionInfo(data, 'analyticsupdatewebservicesshow');
    }

}

function generateFunctionInfo(data, id) {
//        console.log(data);
    if (data === undefined || data.length === 0) {
        $("#" + id).html("");
        return;
    }
    var innerhtml = "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'><thead><th></th><th>Function Name</th><th>Description</th><th>Function Type</th><th>Library Name</th><th>Return File Type</th><th>Input Paramters</th><th>Output Types</th><th>selected</th></thead><tbody>";
    for (var i = 0; i < data.length; ++i) {
//                var index = inActions(curData.actions, data[i]);
        var index = myIncludeFieldIndex(curData.actions, data[i].id, 'id');
        innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
        innerhtml += "<td>" + data[i].functionName + "</td>";
        innerhtml += "<td>" + data[i].description + "</td>";
        innerhtml += "<td>" + data[i].functionType + "</td>";
        innerhtml += "<td>" + data[i].libraryName + "</td>";
        if (data[i].urlReturnFileType === undefined)
            data[i].urlReturnFileType = "";
        innerhtml += "<td>" + data[i].urlReturnFileType + "</td>";
        innerhtml += "<td>";
        if (data[i].attributes !== undefined) {
            for (var j = 0; j < data[i].attributes.length; ++j) {
                if (data[i].attributes[j].shown === true) {
                    innerhtml += "<span class='badge alert-info'>" + data[i].attributes[j].name + "</span>";
                }
            }
        }
        innerhtml += "</td>";
        //output attributes
        innerhtml += "<td>";
        if (data[i].outputAttributes !== undefined) {
            for (var j = 0; j < data[i].outputAttributes.length; ++j) {
                innerhtml += "<span class='badge alert-info'>" + data[i].outputAttributes[j].name + "</span>";
                if (index === -1 || curData.actions === undefined || curData.actions.length == 0) {//default is selected
                    innerhtml += "<input checked type='checkbox' id='" + data[i].outputAttributes[j].name + j + "'> select";
                } else if (index !== -1) {//selected check one by one
                    //assume there is only one webservices
                    var ind = myIncludeFieldIndex(curData.actions[index].webservices[0].outputAttributes, data[i].outputAttributes[j].name, "name");
                    if (ind == -1) {
                        innerhtml += "<input type='checkbox' id='" + data[i].outputAttributes[j].name + j + "'> select";
                    } else {
                        innerhtml += "<input checked type='checkbox' id='" + data[i].outputAttributes[j].name + j + "'> select";
                    }
                }
            }
        }
        innerhtml += "</td>";
        if (index !== -1) {
            innerhtml += "<td><input checked id='analyticsFunction" + i + "' type='checkbox'></td>";
        } else {
            innerhtml += "<td><input id='analyticsFunction" + i + "' type='checkbox'></td>";
        }
        innerhtml += "</tr>";

        innerhtml += "<tr class='hideit select-row'><td colspan=9>";
//        console.log(curData.resourcesIn);
        if (data[i].functionType === "cmd executable" || data[i].functionType === "python executable") {
            //set params
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<tr><td>Parameter</td><td>From</td><td>Value</td><td>Example</td></tr>";
            if (data[i] !== undefined && data[i].attributes !== undefined && data[i].attributes.length > 0) {
                for (var j = 0; j < data[i].attributes.length; ++j) {
                    if (data[i].attributes[j].shown === true) {
                        innerhtml += "<tr>";
                        if (data[i].attributes[j].required === true) {
                            innerhtml += "<td>" + data[i].attributes[j].name + "*</td>";
                        } else {
                            innerhtml += "<td>" + data[i].attributes[j].name + "</td>";
                        }

                        innerhtml += "<td>";
                        innerhtml += "<select class='form-control' id='analyticsupdateResourceParams" + i + j + "' onchange='analyticsUpdateResourceParamChange(" + i + ", " + j + ")'>" +
                                "<option value='input' selected>Input</option>";
                        for (var k = 0; k < curData.resourcesIn.length; ++k) {
                            console.log(curData.resourcesIn[k]);
                            if (curData.resourcesIn[k].resourceType === 'CSV' || curData.resourcesIn[k].resourceType === 'XML'
                                    || curData.resourcesIn[k].resourceType === 'SQL' || curData.resourcesIn[k].resourceType === 'Other') {
                                innerhtml += "<option value='" + curData.resourcesIn[k].urlReturnFileName + "' >" + curData.resourcesIn[k].urlReturnFileName + "</option>";
                            }
                        }
                        innerhtml += "</select>";
                        innerhtml += "</td>";

                        innerhtml += "<td id='analyticsUpdateParamInput" + i + j + "'>";
                        if (data[i].attributes[j].attributeType === "selection") {
                            innerhtml += "<select  class='form-control'  id='" + data[i].attributes[j].name + "'>";
                            for (var k = 0; k < data[i].attributes[j].selectionpair.length; ++k) {
                                innerhtml += "<option value='" + data[i].attributes[j].selectionpair[k].value + "'>" + data[i].attributes[j].selectionpair[k].label + "</option>";
                            }
                            innerhtml += "</select>";
                        } else if (data[i].attributes[j].attributeType === "input") {
                            innerhtml += "<input class='form-control' id='" + data[i].attributes[j].name + "'>";
                        }
                        innerhtml += "</td>";

                        innerhtml += "<td id='analyticsUpdateParamResource" + i + j + "' style='display:none;'><input class='form-control' placeholder='Attribute Name' id='" + data[i].attributes[j].name + "Resource'></td>";

                        innerhtml += "<td>" + data[i].attributes[j].example + "</td>";
                        innerhtml += "</tr>";
                    }
                }
            }

            innerhtml += "</table>";
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<tr><td><label>Command</label></td><td><input id='analyticsFunctioncommand" + i + "' class='form-control'></td></tr>";
            innerhtml += "</table>";
        }

        innerhtml += "</td></tr>";

    }
    innerhtml += "</tbody></table>";
    if (id !== null) {
        $("#" + id).html(innerhtml);
    }
    bindAnalyticsFunctions();
    return innerhtml;
}


function bindAnalyticsFunctions() {
    $(".analyticsNewAttrtableRemoveSpan").unbind('click');
    $('.analyticsNewAttrtableRemoveSpan').click(function () {
        $(this).closest('tr').remove();
    });

    $("#radiogroup input").change(function () {
        if ($(this).val() === 'direct') {
            $('#topkrow').hide();
        } else {
            $('#topkrow').show();
        }
    });

    $(".collapsecolumn").unbind('click');
    $(".collapsecolumn").on('click', function (event) {
//                console.log(event);
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
                runsubGraph('resourceInShowAnalytics' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowAnalytics" + index).html("");
            }
        } else if ($partent.text().indexOf("Out") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                $('#resourceOutShowAnalytics' + index).hide();
                $('#resourceOutShowAnalytics' + index).next().show();

                //mark stop
                curData.stop = "output";
                curData.resourcesOut[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceOutShowAnalytics' + index);
                curData.stop = undefined;
                curData.resourcesOut[index].isReturn = undefined;
                data.nodes.update(curData);

            } else {
                $("#resourceOutShowAnalytics" + index).html("");
            }
        }

    });
    $("textarea").unbind('keydown');
    $("textarea").keydown(function (e) {
        if (e.keyCode === 9) { // tab was pressed
            var start = this.selectionStart;
            var end = this.selectionEnd;

            var $this = $(this);
            var value = $this.val();
            $this.val(value.substring(0, start)
                    + "\t"
                    + value.substring(end));

            this.selectionStart = this.selectionEnd = start + 1;
            e.preventDefault();
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
}


