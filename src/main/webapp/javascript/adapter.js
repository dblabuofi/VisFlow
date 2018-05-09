function generateUpdateAdapter() {
    colorFun.reset();
    var innerhtml = "";
    if (curData.resourcesIn === undefined) {
        return innerhtml;
    }

    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td width='10%;'><label>Adapter Name</label></td><td><input id='adapterName' class='form-control'></td></tr>";
    innerhtml += "<tr><td><label>Library Type</label></td><td>";
    innerhtml += "</select><select class='form-control' id='adapterupdatefunctions' onchange='adapterSelectChange()'>" +
            "<option value='Code' selected>Code</option>" +
            "<option value='Resource' >Resource</option>" +
            "<option value='Transformer Function' >Transformer Function</option>" +
            "<option value='sqlquerybuilder' >Visual Query Builder</option>" +
//            "<option value='xquerybuilder' selected>xQuery Builder</option>" +
            "</select>";

    innerhtml += "</td></tr>";
    innerhtml += "</tbody></table>";
    innerhtml += "<div id='adapterupdatewebdiv'> </div>";
    innerhtml += "<div id='adapterupdatewebAttributediv'> </div>";
    innerhtml += "<div><button class='btn btn-info' onclick='updateadapter()'>Update Adapter</button></div>";

    return innerhtml;
}

function adapterSelectChange() {
    var innerhtml = "";
    $("#adapterupdatewebAttributediv").html("");
    if ($('#adapterupdatefunctions :selected').val() === 'Resource') {
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
        innerhtml += "<div style='display:none;margin-top:4px;' id='wrappertableindex' class='row' ><div class='col-md-2'><label>Table Index:</label></div><div class='col-md-10'><input class='form-control'></div></div>";
        innerhtml += "</td></tr>";
        innerhtml += "<tr style='display:none;'><td><label>Method applied for results</label></td>";
        innerhtml += "<td><select id='adapterUpdateResourceSelect' class='form-control'>" +
                "<option value='Append' selected>Append</option>" +
                "<option value='Remove Duplicated' >Remove Duplicated</option>" +
                "</select></td></tr>";
        
        innerhtml += "</tbody></table>";
        $("#adapterupdatewebdiv").html(innerhtml);
    } else if ($('#adapterupdatefunctions :selected').val() === 'sqlquerybuilder') {
        $("#adapterupdatewebdiv").html("");
        innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
        innerhtml += "<tr><td><label>Output File Names</label></td><td>";
        innerhtml += generateOutPutFileInputs();
        innerhtml += "</td></tr>";
        innerhtml += "</tbody></table>";
        innerhtml += "<label class='label label-primary'>Query Builder:</label><br>";
        innerhtml += "<label class='label label-info'>Choose query type:</label>SQL<input type='radio' value='sql' name='querybuildercodetype' checked>xQuery<input value='xquery' name='querybuildercodetype'  type='radio'><br>";
        innerhtml += "<div style='margin:0.1vh' id='sqlQueryBuilder'></div>";
        $("#adapterupdatewebdiv").html(innerhtml);
        $("#sqlQueryBuilder").load("sqlbuilder/sqlbuilder.html", function (data) {
            var deferreds = [curData.resourcesIn];
            console.log();
            for (var i = 0; i < curData.resourcesIn.length; ++i) {
                if (curData.resourcesIn[i].resourceType === "CSV" || curData.resourcesIn[i].resourceType === "XML" || curData.resourcesIn[i].resourceType === "SQL" || curData.resourcesIn[i].resourceType === "Other") {
                    //we need generate the schema
                    if (curData.resourcesIn[i].jsUrlReturnFileSchema === undefined || curData.resourcesIn[i].jsUrlReturnFileSchema === ""
                            || curData.resourcesIn[i].jsUrlReturnFileSchema === null
                            || isEmpty(curData.resourcesIn[i].jsUrlReturnFileSchema)) {
                        //get the file name and submit to the webserver
                        var location = curData.resourcesIn[i].location;
                        var fileName = curData.resourcesIn[i].urlReturnFileName;
                        console.log(location);
                        console.log(fileName);
                        var url = baseurl + "queryTree/schema?location=" + encodeURI(location)
                                + "&fileName=" + fileName + "&index=" + i;
                        ;
                        deferreds.push($.get({
                            url: url,
                            type: "get"
                        }).success(function (response) {
                            var index = 0;
                            if (response.indexOf("#") != -1) {
                                index = response.substring(response.lastIndexOf("#") + 1);
                                response = response.substring(0, response.lastIndexOf("#"));
                            }
                            console.log(response);
                            curData.resourcesIn[index].jsUrlReturnFileSchema = JSON.parse(response);
                        }));
                    }
                }
            }
            $.when.apply($, deferreds).done(function () {
                console.log("done");
                initSQLBuilder(curData.resourcesIn);
            });
        });

    } else if ($('#adapterupdatefunctions :selected').val() === 'Code') {
        innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
        innerhtml += "<tr><td><label>Code Type</label></td>";
        innerhtml += "<td><select class='form-control' id='adapterupdatecodeType'>" +
                "<option value='xquery' >XQuery</option>" +
                "<option value='sql' selected>SQL</option>" +
                "<option value='python' >Python</option>" +
                "<option value='r'>R</option>" +
                "</select></td></tr>";

//        innerhtml += "<tr><td width='10%'><label>Code Name</label></td><td><input id='adapterUpdateCodeName' class='form-control'></td></tr>";
//        innerhtml += "<tr><td><label>Input File Names</label></td><td><input id='adapterinputnames' placeholder='separated by comma' class='form-control'></td></tr>";
        innerhtml += "<tr><td><label>Output File Name</label></td><td>";
        innerhtml += "<table id='outputFileOutAttributesTable' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody><tr><td>";
        innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
        innerhtml += "<thead><tr><th>File Name</th><th colspan='10'><input class='form-control'></th></tr></thead>";
        innerhtml += "<tbody></table>";
        innerhtml += "</td></tr><tbody></table>";
        innerhtml += "</td></tr>";
        innerhtml += "</tbody></table>";
        innerhtml += "<label class='label label-primary'>Code:</label><br>";
        innerhtml += "<textarea  id='adapterupdateinput' class='wholewidth'  style='height: 25vh;'></textarea>";
        $("#adapterupdatewebdiv").html(innerhtml);

    } else if ($('#adapterupdatefunctions :selected').val() === 'Transformer Function') {
        innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
        innerhtml += "<tr><td><label>Output File Names</label></td><td>";
        innerhtml += generateOutPutFileInputs();
        innerhtml += "</td></tr>";
        innerhtml += "</tbody></table>";

        innerhtml += "<table id='adapterTransferResource' class='autoIncreaseTable table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><thead>";
        innerhtml += "<thead><th>Transformer Resource</th><th>To Type</th><th>Delete</th></thead><tbody>";
        innerhtml += "<tr class='tablerow'><td>";
        innerhtml += genrateResourceSelcetion(curData.resourcesIn);
        innerhtml += "</td>";
        innerhtml += "<td>";
        innerhtml += "<select class='form-control' id=''>" +
                "<option value='CSV' >CSV</option>" +
                "<option value='XML' >XML</option>" +
                "<option value='SQL' >SQL</option>" +
                "</select>";
        innerhtml += "</td>";
        innerhtml += "<td><span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span></a>" +
                "</td>";
        innerhtml += "</tr>";
        innerhtml += "<tfoot style='border:none;' class='addButtonRow'><td colspan='3'><button class='btn btn-info' onclick='adapterAddRow()'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Transformer</button></td></tfoot>";
        innerhtml += "</table>";
        $("#adapterupdatewebdiv").html(innerhtml);

        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            if (curData.resourcesIn[i].resourceType === "CSV" || curData.resourcesIn[i].resourceType === "XML" || curData.resourcesIn[i].resourceType === "Other") {
                var schemaData = null;
                var resouceIn = curData.resourcesIn[i];
                if (curData.resourcesIn[i].jsUrlReturnFileSchema === undefined || curData.resourcesIn[i].jsUrlReturnFileSchema === "" || isEmpty(curData.resourcesIn[i].jsUrlReturnFileSchema)) {
                    var location = curData.resourcesIn[i].location;
                    var fileName = curData.resourcesIn[i].urlReturnFileName;
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
                        innerhtml = "<table id='adapterAttrsSelectTable" + i + "' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
                        if (schema.xpath === undefined) {
                            innerhtml += "<th></th><th>attribute</th><th>name</th><th>action</th><th>select</th>";
                        } else {
                            innerhtml += "<th></th><th>attribute</th><th>name</th><th>action</th><th>xPath</th><th>select</th>";
                        }
                        innerhtml += generateAdapterSchemaTable(schema, 0, false, curData.librariesIn);
                        innerhtml += "</tbody></table>";
                        innerhtml += "<table id='adapterAttrsNewTable" + i + "' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'>";
                        innerhtml += "<th>new attribute</th><th>rule</th><th>Action input</th><th>delete</th>";
                        innerhtml += "<tfoot class='addButtonRow'><td colspan='5'><button class='btn btn-info' onclick='adapterNewAttrAddRow(" + i + ")'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New attribute</button></td></tfoot>";
                        innerhtml += "</table>";

                        $("#adapterupdatewebAttributediv").append(innerhtml);
                    });
                } else {
                    schemaData = JSON.stringify(curData.resourcesIn[i].jsUrlReturnFileSchema);
                    var schema = JSON.parse(schemaData);
                    innerhtml = "<table id='adapterAttrsSelectTable" + i + "' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'><tbody>";
                    if (schema.xpath === undefined) {
                        innerhtml += "<th></th><th>attribute</th><th>name</th><th>action</th><th>select</th>";
                    } else {
                        innerhtml += "<th></th><th>attribute</th><th>name</th><th>action</th><th>xPath</th><th>select</th>";
                    }
//                    console.log(generateAdapterSchemaTable(schema, 0, false, curData.librariesIn));
                    innerhtml += generateAdapterSchemaTable(schema, 0, false, curData.librariesIn);
                    innerhtml += "</tbody></table>";

                    innerhtml += "<table id='adapterAttrsNewTable" + i + "' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'>";
                    innerhtml += "<th></th><th>new attribute</th><th>action</th><th>delete</th>";
                    innerhtml += "<tfoot class='addButtonRow'><td colspan='5'><button class='btn btn-info' onclick='adapterNewAttrAddRow(" + i + ")'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New attribute</button></td></tfoot>";
                    innerhtml += "</table>";
                    $("#adapterupdatewebAttributediv").append(innerhtml);
                }
            }
        }
    } else {
        $("#adapterupdatewebdiv").html("");
    }
    bindAdapterFunctions();
}

function generateAdapterSchemaTable(schema, level, csvFile, libraries) {
    if (schema === null)
        return "";
    var html = "";
    if (!(level == 0 && csvFile != undefined && csvFile == false)) {
        html += "<tr id='adapterattrrow" + schema.text + "'><td width='1%'  class='collapseAdapterNewcolumn'><span class='glyphicon glyphicon-chevron-right'></span></td><td>";
        for (var i = 0; i < level; ++i) {
            html += "&nbsp;&nbsp;";
        }
        html += schema.text + "</td>";
        html += "<td><input class='form-control' /></td>";
        html += '<td>';
//        if (libraries !== undefined) {
        html += generateAdapterNewAttrSelect(schema.text);
//        } else {
//            html += "<select class='form-control'></select>";
//        }
        html += '</td>';
        if (schema.xpath != undefined) {
            html += "<td><input value='" + schema.xpath + "'></td>";
        }
        html += "<td><input type='checkbox' /></td></tr>";

        html += "<tr style='display:none'><td colspan='100'>";
//        if (libraries != undefined) {
        html += generateLibrariesRow(libraries);
//        }
        html += "</td></tr>";
    }

    for (var i = 0; i < schema.children.length; ++i) {
        html += generateAdapterSchemaTable(schema.children[i], level + 1, csvFile, libraries);
    }
    return html;
}

function generateLibrariesRow(libraries) {
    //default
    var html = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'>";
    html += "<tr>";
    html += "<td>attribute</td>"
    html += "<td><input class='form-control' ></td>"
    html += "</tr>";
    html += "<tr>";
    html += "<td>prefix</td>"
    html += "<td><input class='form-control' ></td>"
    html += "</tr>";
    html += "</table>";
    if (libraries == undefined)
        return html;
    for (var i = 0; i < libraries.length; ++i) {
        if (libraries[i].attributes == undefined)
            continue;
        if (i == 0) {
            html += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'>";
        } else {
            html += "<table style='display:none' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'>";
        }
        html += "<th>attribute</th><th>input</th>";
        for (var j = 0; j < libraries[i].attributes.length; ++j) {
            html += "<tr>";
            html += "<td>" + libraries[i].attributes[j].label + "</td>"
            html += "<td><input class='form-control' ></td>"
            html += "</tr>";
        }
        html += "</table>";
    }
    return html;
}

function generateAdapterNewAttrSelect(text) {
    var html = "<select class='form-control' onchange='AdapterNewAttrSelectChange(" + JSON.stringify(text) + ")'>";
    //default option
    html += '<option value="0">addPrefix</option>';

    if (curData.librariesIn != undefined) {
        for (var i = 0; i < curData.librariesIn.length; ++i) {
            html += '<option value="' + i + '">' + curData.librariesIn[i].libraryName + '</option>';
        }
    }
    html += "</select>";
    return html;
}

function AdapterNewAttrSelectChange(id) {
    var tr = $('[id="adapterattrrow' + id + '"]');
    var index = tr.find("td").eq(3).find("select").val();
    if (index == undefined) {
        tr = $('[id="adapterNewAttrRow' + id + '"]');
        index = tr.find("td").eq(2).find("select").val();
    }
    console.log($(id));
    console.log($('[id="adapterNewAttrRow' + id + '"]'));
    console.log(index);
    for (var i = 0; i < curData.librariesIn.length; ++i) {
        tr.next("tr").find("table").eq(i).hide();
    }
    tr.next("tr").find("table").eq(index).show();
}
var globalAdapterNewAttrCnt = 0;
function adapterNewAttrAddRow(index) {
    var html = "<tr id='adapterNewAttrRow" + globalAdapterNewAttrCnt + "' class='tablerow'>"
            + "<td width='1%'  class='collapseAdapterNewcolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>"
            + "<td><input class='form-control'></td>"
            + "<td>"
            + generateAdapterNewAttrSelect(globalAdapterNewAttrCnt++)
            + "</td>"
            + "<td><span class='adapterNewAttrtableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span></a></td>"
            + "</tr>";
    html += "<tr style='display:none'><td colspan='100'>";
    if (curData.librariesIn != undefined) {
        html += generateLibrariesRow(curData.librariesIn);
    }
    html += "</td></tr>";
    $('[id="adapterAttrsNewTable' + index + '"]').append(html);
    bindAdapterFunctions();
}


function genrateResourceSelcetion(resources) {
    var innerhtml = "";
    innerhtml += "<select class='form-control' id=''>";
    for (var i = 0; i < resources.length; ++i) {
        innerhtml += "<option value='" + resources[i].urlReturnFileName + "'>Name:" + resources[i].urlReturnFileName + "  ID:" + resources[i].id + "</option>";
    }
    innerhtml += "</select>";
    return innerhtml;
}

function adapterAddAttributeRow() {
    $('#adapterTransferResourceAttributes').append(
            "<tr class='tablerowRelation'><td>"
            + genrateResourceAttributeSelcetion(curData.resourcesIn)
            + "</td>"
            + "<td>"
            + "<select class='form-control' id='adapterUpdateResourceAttributeSelect'>" +
            "<option value='String' >String</option>" +
            "<option value='Integer' >Integer</option>" +
            "<option value='Double' >Double</option>" +
            "</select>"
            + "</td>"
            + "<td><span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span></a></td>"
            + "</tr>");
    bindAdapterFunctions();
}
function adapterAddRow() {
    $('#adapterTransferResource').append(
            "<tr class='tablerowRelation'><td>"
            + genrateResourceSelcetion(curData.resourcesIn)
            + "</td>"
            + "<td>"
            + "<select class='form-control' id='adapterUpdateResourceSelect'>" +
            "<option value='CSV' >CSV</option>" +
            "<option value='XML' >XML</option>" +
            "</select>"
            + "</td>"
            + "<td><span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span></a></td>"
            + "</tr>");

    bindAdapterFunctions();
}

var adapterfunctions = [];
function updateadapter() {
//        console.log('updateadapter');
    if ($('#adapterName').val() !== undefined && $('#adapterName').val().length > 0) {
        curData.label = $('#adapterName').val();
        data.nodes.update(curData);
    }

    curData.actions = [];

    if ($('#adapterupdatefunctions :selected').val() === 'Code') {
//        if ($('#adapterupdateinput').val().length === 0) {
//            return;
//        }
    }

    var action = {
        id: guid(),
        act: $('#adapterupdatefunctions :selected').val()
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

    if ($('#adapterupdatefunctions :selected').val() === 'Code') {
        if ($('#adapterupdateinput').val() !== undefined && $('#adapterupdateinput').val().length > 0) {
            action.val = $('#adapterupdateinput').val();
            action.codeType = $('#adapterupdatecodeType :selected').val();
            action.codeName = makeFileName(7);
        }
    } else if ($('#adapterupdatefunctions :selected').val() === 'Resource') {
        action.resultMethod = $('#adapterUpdateResourceSelect').val();
        action.webservices = [];
        //assume there are one resource need be called, we just take care of that one
        var targetResource = null;
        var resourceIndex = -1;
        //find it
        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            if (curData.resourcesIn[i].resourceType !== "CSV"
                    && curData.resourcesIn[i].resourceType !== "XML"
                    && curData.resourcesIn[i].resourceType !== "SQL"
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
        
        //we need update the wrapper information
        targetResource.wrapper = {
            wrapperName:$('#adapterUpdateResourceWrapper').val(),
            tableIndex: $('#wrappertableindex').find("input").eq(0).val(),
            headers:[]
        }; 
        targetResource.matcher = $('#adapterUpdateResourceMatcher').val();
        targetResource.wrapper.headers = [];
        for (var i = 0; i < action.outAttributes[0].length; ++i) {
            targetResource.wrapper.headers.push(action.outAttributes[0][i].name);
        }
        console.log(targetResource.wrapper);
        action.targetResource = targetResource;

    } else if ($('#adapterupdatefunctions :selected').val() === 'sqlquerybuilder') {
        if ($('input[type=radio][name=querybuildercodetype]:checked').val() == 'xquery') {
            action.act = "Code";
            action.val = generateXQuery();
            action.codeType = "xquery";
        } else {
            action.act = "Code";
            action.val = generateSQLQuery();
            action.codeType = "sql";
        }
        action.codeName = makeFileName(7);

    } else if ($('#adapterupdatefunctions :selected').val() === 'Transformer Function') {
        action.webservices = [];
        action.transformResources = [];
        console.log(action);
        $('#adapterTransferResource tbody tr').each(function (index) {
            var inputType = "";
            var resource = $(this).find("select").first().val();

            for (var t = 0; t < curData.resourcesIn.length; ++t) {
                if (curData.resourcesIn[t].urlReturnFileName == resource) {
                    var index1 = resource.lastIndexOf(".");
                    if (index1 == -1) {
                        inputType = "SQL";
                    } else {
                        inputType = resource.substring(index1 + 1);
                    }
                }
            }
            var pair = {
                inputType: inputType,
                Resource: $(this).find("select").first().val(),
                Type: $(this).find("select").last().val()
            }
            action.transformResources.push(pair);
        });
        action.updateAttrs = [];
        action.newAttrs = [];

        for (var i = 0; i < curData.resourcesIn.length; ++i) {
            for (var j = 1; j < $("#adapterAttrsSelectTable" + i + " tbody tr").length; ++j) {
                if (curData.resourcesIn[i].urlReturnFileName.indexOf("xml") != -1) {
                    if ($("#adapterAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(5).find("input").is(':checked')) {
                        var rACT = {
                            attribute: $("#adapterAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(0).text().replaceAll("\u00a0", ""),
                            name: $("#adapterAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(1).find("input").val(),
                            xpath: $("#adapterAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(2).find("input").val(),
                            resourceName: curData.resourcesIn[i].urlReturnFileName,
                        };
                        action.updateAttrs.push(rACT);
                    }
                } else {
                    if ($("#adapterAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(4).find("input").is(':checked')) {
                        var libIndex = $("#adapterAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(3).find("select").val();
                        var rACT = {
                            attribute: $("#adapterAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(1).text().replaceAll("\u00a0", ""),
                            name: $("#adapterAttrsSelectTable" + i + " tbody tr").eq(j).find("td").eq(2).find("input").val(),
                            action: curData.librariesIn[libIndex],
                        };
                        for (var k = 0; k < rACT.action.attributes.length; ++k) {
                            rACT.action.attributes[k].value = $('[id="adapterattrrow' + rACT.attribute + '"]').next("tr").find("table").eq(libIndex).find("input").eq(k).val();
                        }
                        action.updateAttrs.push(rACT);
                    }
                }
            }
            console.log($("[id='adapterAttrsNewTable" + i + "'").find("> tbody > tr").length);
            for (var j = 1; j < $("[id='adapterAttrsNewTable" + i + "'").find("> tbody > tr").length - 1; j += 2) {
                var libIndex = $("[id='adapterAttrsNewTable" + i + "'").find("> tbody > tr").eq(j).find("td").eq(2).find("select").val();
//                var newAction = Object.assign({}, curData.librariesIn[libIndex]);
                var newAction = jQuery.extend(true, {}, curData.librariesIn[libIndex]);
                var table = $("[id='adapterAttrsNewTable" + i + "'").find("> tbody > tr").eq(j + 1).find("table").eq(libIndex);
                for (var k = 0; k < newAction.attributes.length; ++k) {
                    newAction.attributes[k].value = table.find("> tbody > tr").eq(k + 1).find("td").eq(1).find("input").val();
                }
                var rACT = {
                    attribute: $("[id='adapterAttrsNewTable" + i + "'").find("> tbody > tr").eq(j).find("td").eq(1).find("input").val(),
                    action: newAction,
                    resourceName: curData.resourcesIn[i].urlReturnFileName
                };
                action.newAttrs.push(rACT);
            }
        }
    }

    curData.actions.push(action);
    updateAdapterOutResources();
    data.nodes.update(curData);
    updateNodes(curData);
    //update ui
    generateInnerhtml();
    gotoNodeInfo();
}

function updateAdapterOutResources() {
//        console.log('updateAdapterOutAttrs');
    curData.resourcesOut = [];
    if (curData.actions === undefined || curData.actions.length === 0) {
        return;
    }
    //one actions one adapter
//        if (curData.actions[0].act === 'Transformer Function') {
//                for (var i = 0; i < curData.resourcesIn.length; ++i) {
//                        var newRes = {
//                                urlReturnFileName: curData.resourcesIn[i].urlReturnFileName,
//                                urlReturnFileType: curData.resourcesIn[i].urlReturnFileType,
//                                resourceType:curData.resourcesIn[i].urlReturnFileType
//                        };
//                        newRes.id = curData.resourcesIn[i].id;
//                        var index = myIncludeFieldIndex(curData.actions[0].transformResources, curData.resourcesIn[i].urlReturnFileName, 'Resource');
//                        if (index !== -1) {
////                                var re = new RegExp("/" + curData.resourcesIn[i].urlReturnFileType + "/ig");
////                                var fileName = curData.resourcesIn[i].urlReturnFileName.replace(re, "");
//                                var fileName = curData.resourcesIn[i].urlReturnFileName.substring(0, curData.resourcesIn[i].urlReturnFileName.lastIndexOf(".") + 1);
//                                newRes.urlReturnFileName = fileName + curData.actions[0].transformResources[index].Type.toLowerCase();
//                                newRes.urlReturnFileType = curData.actions[0].transformResources[index].Type;
//                                newRes.resourceType = curData.actions[0].transformResources[index].Type;
//                        }
//                        
//                        curData.resourcesOut.push(newRes);
//                }
//                
//                data.nodes.update(curData);
//        } else {
//        }
    updateAnalyticsOutResources();

}


function removeAdapterAction(index) {
    curData.actions.splice(index, 1);
    updateAdapterOutResources();
    data.nodes.update(curData);
    updateNodes(curData);

    generateInnerhtml();
}

function callAdapterWS() {
    var queryTree = returnQueryTree();
    if (queryTree !== undefined && queryTree !== null) {
        var url = baseurl + "recommend/functionWS?queryTree=" + JSON.stringify(queryTree)
                + "&matchType=" + $("input[name='matchtype']:radio:checked").val()
                + "&topk=" + $("#dataupdateselect option:selected").val()
                + "&library=" + curData.librariesIn[0].libraryName;
        console.log(url);
        $.ajax({
            url: url
        }).then(function (data) {
            data = JSON.parse(data);
            adapterfunctions = data;
//                        console.log(data);
            generateFunctionInfo(data, 'adapterupdatewebservicesshow');
        });
    } else {
        var data = [];
        generateFunctionInfo(data, 'adapterupdatewebservicesshow');
    }

}

function bindAdapterFunctions() {
    $(".adapterNewAttrtableRemoveSpan").unbind('click');
    $('.adapterNewAttrtableRemoveSpan').click(function () {
        $(this).closest('tr').remove();
    });

    $("#radiogroup input").change(function () {
        if ($(this).val() === 'direct') {
            $('#topkrow').hide();
        } else {
            $('#topkrow').show();
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
                $('#resourceInShowAdapter' + index).hide();
                $('#resourceInShowAdapter' + index).next().show();
                curData.stop = "input";
                curData.resourcesIn[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceInShowAdapter' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowAdapter" + index).html("");
            }
        } else if ($partent.text().indexOf("Out") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                console.log(index);
                $('#resourceOutShowAdapter' + index).hide();
                $('#resourceOutShowAdapter' + index).next().show();

                //mark stop
                curData.stop = "output";
                curData.resourcesOut[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceOutShowAdapter' + index);
                curData.stop = undefined;
                curData.resourcesOut[index].isReturn = undefined;
                data.nodes.update(curData);

            } else {
                $("#resourceInShowAdapter" + index).html("");
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

    $(".tableRemoveSpan").unbind('click');
    $('.tableRemoveSpan').click(function () {
        $(this).closest('tr').remove();
    });

    $(".collapseAdapterNewcolumn").unbind('click');
    $(".collapseAdapterNewcolumn").on('click', function (event) {
        $parent = $(this).parent();
        $parent.next().slideToggle();
        $glyphicon = $(this).find("span.glyphicon").first();
        $glyphicon.toggleClass('glyphicon-chevron-right glyphicon-chevron-down');

    });
    $(".collapsecolumn").unbind('click');
    $(".collapsecolumn").on('click', function (event) {
        $parent = $(this).parent();
        $parent.next().slideToggle();
        $glyphicon = $(this).find("span.glyphicon").first();
        $glyphicon.toggleClass('glyphicon-chevron-right glyphicon-chevron-down');

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
//            console.log(table);
//            console.log(html);
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

//control data inputs outputs dropdowns
//run subgraph
function runsubGraph(id) {
    var url = globalurl + 'subgraph';
    if (data.nodes.length == 0 || data.edges.length == 0)
        return;

    console.log('run subgraph');
    console.log(JSON.stringify({nodes: data.nodes.get(), edges: data.edges.get(), globalmatch: data.globalmatch}));
    $.ajax({
        type: "POST",
        url: url,
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify({nodes: data.nodes.get(), edges: data.edges.get(), globalmatch: data.globalmatch}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {//this is a two dimanional array
            console.log(data);
            generateResourceShow(data, id);
            $('#' + id).show();
            $('#' + id).next().hide();
        },
        error: function (request, status, error) {
            alert(request.responseText);
            console.log(request);
            $("#" + id).html("");
            $('#' + id).show();
            $('#' + id).next().hide();
        },
        failure: function (errMsg) {
            alert(errMsg);
            console.log(errMsg);
        },
        complete: function (data) {
        }
    });
}

function generateResourceShow(data, id) {
    var innerhtml = "";
    innerhtml += "<textarea style='display:inline-block;' disabled class='wholewidth textareavertical' >" + data + "</textarea>";
    $("#" + id).html(innerhtml);
}

function cleanStops(nodes) {
    var ids = nodes.getIds();
    for (var i = 0; i < ids.length; ++i) {
        var node = nodes.get(ids[i]);
        if (node.stop != undefined) {
            node.stop = undefined;
            if (node.resourcesIn !== undefined) {
                for (var j = 0; j < node.resourcesIn.length; ++j) {
                    if (node.resourcesIn[j].return !== undefined)
                        node.resourcesIn[j].return = undefined;
                }
            }
            if (node.resourcesOut !== undefined) {
                for (var j = 0; j < node.resourcesOut.length; ++j) {
                    if (node.resourcesOut[j].isReturn !== undefined)
                        node.resourcesOut[j].isReturn = undefined;
                }
            }
            data.nodes.update(node);
        }
    }
}

