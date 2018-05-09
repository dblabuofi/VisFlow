function initSQLBuilder(resources) {
    console.log("initSQLBuilder");

    var html = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    html += "<tr><td>";
    html += createCodeBlock(resources);
    html += "</td><tr>";
    html += "</tbody>";
    html += "<tfoot ><td colspan='500'><span class='sqlbuilderAddNewStatement'><button class='btn btn-info'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Statement</button></span></td></tfoot>";

    html += "</table>";
    $('[id="sqlbuildercanvas"]').append(html);


    bindSQLBuilderFunctions();
}

function bindSQLBuilderFunctions() {

    $(".sqlbuilderAddAttibutes").unbind("click");
    $(".sqlbuilderAddAttibutes").bind("click", function () {
        var table = $(this).closest("table");
        var size = table.find("tr").eq(0).children("th").size();
        console.log(size);
        var html = "<tr><td>";
        html += createSELECTattrbiutes(curData.resourcesIn, true);
        html += "</td>";
        if (size != 2) {
            html += "<td>";
            html += "<input class='form-control'>";
            html += "</td>";
        }
        html += "<td>";
        html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
        html += "</td>";
        html += "</tr>";
        table.append(html);
        bindSQLBuilderFunctions();

    });

    $(".sqlbuilderDeleteAddNewResources").unbind("click");
    $(".sqlbuilderDeleteAddNewResources").bind("click", function () {
        var table = $(this).closest("table");
        var size = table.find("tr").eq(0).children("tr").size();
        console.log(size);
        var html = "<tr><td>";
        html += createSELECTResources(curData.resourcesIn);
        html += "</td>";
        html += "<td><input class='form-control'></td>"
        html += "<td>";
        html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
        html += "</td>";
        html += "</tr>";
        console.log(html);
        table.append(html);
        bindSQLBuilderFunctions();

    });

    $(".tableRemoveSpan").unbind("click");
    $(".tableRemoveSpan").bind("click", function () {
        $(this).closest('tr').remove();
    });

    $(".tableRemove").unbind("click");
    $(".tableRemove").bind("click", function () {
        $(this).closest('table').closest("tr").remove();
    });
    $(".tableRemoveJoin").unbind("click");
    $(".tableRemoveJoin").bind("click", function () {
        $(this).closest('tr').next().next().remove();
        $(this).closest('tr').next().remove();
        $(this).closest('tr').remove();
    });

    $(".sqlbuildercustominput").unbind("click");
    $(".sqlbuildercustominput").bind("click", function () {
        if ($(this).prop('checked') === true) {
            $(this).parent().next().hide();
            $(this).parent().next().next().show();
        } else {
            $(this).parent().next().show();
            $(this).parent().next().next().hide();
        }
    });
    $(".sqlbuilderFromClause").unbind("click");
    $(".sqlbuilderFromClause").bind("click", function () {
        if ($(this).parent().parent().children("td").size() == 4) {
            $(this).parent().next().next().html(createCodeBlock(curData.resourcesIn, false));
        } else {
            $(this).parent().next().next().html(createCodeBlock(curData.resourcesIn));
        }
        if ($(this).prop('checked') === true) {
            $(this).next("div").show();
            $(this).parent().next().hide();
            $(this).parent().next().next().show();
        } else {
            $(this).next("div").hide();
            $(this).parent().next().show();
            $(this).parent().next().next().hide();
        }
        bindSQLBuilderFunctions();
    });


    $(".sqlbuilderAddCondition").unbind("click");
    $(".sqlbuilderAddCondition").bind("click", function () {
        var table = $(this).closest("table");
        var title = table.parent().prev().find("td").text();
        console.log(title);
        var html = "";
        if (table.find("> tbody > tr").size() != 0 && title != 'set') {
            html += "<tr>";
            html += "<td>";
            html += "condition"
            html += "</td>";
            html += "<td>";
            html += "<select class='form-control'><option value='and'>and</option><option value='or'>or</option></select>"
            html += "</td>";
            html += "<td>";
            html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
            html += "</td>";
            html += "</tr>";
        }
        html += "<tr>";
        html += "<td>";
        html += "custom input:<input class='sqlbuildercustominput' type='checkbox'>";
        html += "</td>";
        html += "<td>";
        html += "<div class='row'>";
        html += "<div class='col-md-5'>";
        html += createSELECTattrbiutes(curData.resourcesIn, true);
        html += "</div>";
        html += "<div class='col-md-2'>";
        html += createCondition();
        html += "</div>";
        html += "<div class='col-md-5'>";
        html += createSELECTattrbiutes(curData.resourcesIn, true);
        html += "</div>";
        html += "</div>"
        html += "</td>";
        html += "<td style='display:none'>";
        html += createSELECTattrbiutes(curData.resourcesIn, true);
        html += "</td>";
        html += "<td>";
        html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
        html += "</td>";
        html += "</tr>";
        table.append(html);

        bindSQLBuilderFunctions();
    });
    $(".sqlbuilderAddSet").unbind("click");
    $(".sqlbuilderAddSet").bind("click", function () {
        var table = $(this).closest("table");
        var html = "";
        html += "<tr>";
        html += "<td>";
        html += "custom input:<input class='sqlbuildercustominput' type='checkbox'>";
        html += "</td>";
        html += "<td>";
        html += "<div class='row'>";
        html += "<div class='col-md-5'>";
        html += createSELECTattrbiutes(curData.resourcesIn, true);
        html += "</div>";
        html += "<div class='col-md-2'>";
        html += createCondition();
        html += "</div>";
        html += "<div class='col-md-5'>";
        html += createSELECTattrbiutes(curData.resourcesIn, true);
        html += "</div>";
        html += "</div>"
        html += "</td>";
        html += "<td style='display:none'>";
        html += createSELECTattrbiutes(curData.resourcesIn, true);
        html += "</td>";
        html += "<td>";
        html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
        html += "</td>";
        html += "</tr>";
        table.append(html);

        bindSQLBuilderFunctions();
    });

    $(".sqlbuilderAddNewStatement").unbind("click");
    $(".sqlbuilderAddNewStatement").bind("click", function () {
        var table = $(this).closest("table");
        var html = "<tr><td colspan='500' style='margin:5%'>";
        html += createCodeBlock(curData.resourcesIn);
        html += "</td>";
        html += "</tr>";
        table.append(html);
        bindSQLBuilderFunctions();
    });

//    sqlbuilderAddNewStatementTable
    $(".sqlbuilderAddNewStatementTable").unbind("click");
    $(".sqlbuilderAddNewStatementTable").bind("click", function () {
        var table = $(this).closest("table");
        var html = "";
        html += createFORMClauseRow(curData.resourcesIn);
        table.append(html);
        bindSQLBuilderFunctions();
    });

    $(".sqlbuilderAddJoin").unbind("click");
    $(".sqlbuilderAddJoin").bind("click", function () {
        var table = $(this).closest("table");
        var html = "";
        html += "<tr>";
        html += "<td>Join</td>";
        html += "<td>";
        html += createJOinStatement();
        html += "</td>";
        html += "<td rowspan='3'>";
        html += "<span class='tableRemoveJoin glyphicon glyphicon-remove' style='color: red;' ></span>";
        html += "</td>";
        html += "</tr>";
        html += createFORMClauseRow(curData.resourcesIn, false);
        html += "<tr>";
        html += "<td>On</td>";
        html += "<td>";
        html += createWhereClause(curData.resourcesIn, false);
        html += "</td>";
        html += "</tr>";
        table.append(html);
        bindSQLBuilderFunctions();
    });

//    $(".sqlbuildactionerchange").unbind("onchange");
    $(".sqlbuildactionerchange").change(function () {
        var val = $(this).val();
        var trs = $(this).closest("table tbody").children("tr");
        if (val == 'select') {
            trs.slice(1, 6).show();
            trs.slice(6, 9).hide();
            trs.slice(9, 12).hide();
        } else if (val == 'delete') {
            trs.slice(1, 6).hide();
            trs.slice(6, 9).show();
            trs.slice(9, 12).hide();
        } else {
            trs.slice(1, 6).hide();
            trs.slice(6, 9).hide();
            trs.slice(9, 12).show();
        }


    });
}
function createJOinStatement() {
    var html = "<select class='form-control'>";
//    html += "<option value='left join'>left join</option>";
//    html += "<option value='right join'>right join</option>";
    html += "<option value='inner join'>inner join</option>";
    html += "</select>";
    return html;
}

//should be table
function createCodeBlock(resources, noremove) {
    var html = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    html += "<tr><td>Action";
    html += "";
    html += "<select class='form-control sqlbuildactionerchange'>";
    html += "<option value='select'>create new table</option>";
    html += "<option value='delete' >remove rows</option>";
    html += "<option value='update' >modify column</option>";
    html += "</select>";
    html += "</td>"
    html += "<td>";
    html += "Output table:<input class='form-control'>";
    html += "</td>"
    if (noremove == undefined) {
        html += "<td><span class='tableRemove glyphicon glyphicon-remove' style='color: red;' ></span></td>";
    }
    html += "</tr>";
    html += "<tr><td>Select Attribute <label style='display:none'>Distinct</label> <input style='display:none' type='checkbox'></td><td colspan='500'>"
    html += createLISTattrbiutes(resources);
    html += "</td></tr>";
    html += "<tr>";
    html += "<td>";
    html += "From data resource";
    html += "</td>";
    html += "<td colspan='500'>";
    html += createFROMClause(resources);
    html += "</td>";
    html += "</tr>";
    html += "<tr>";
    html += "<td>";
    html += "select condition";
    html += "</td>";
    html += "<td colspan='500'>";
    html += createWhereClause(resources);
    html += "</td>";
    html += "</tr>";
    html += "<tr>";
    html += "<td>";
    html += "group attribute";
    html += "</td>";
    html += "<td colspan='500'>";
    html += createLISTattrbiutes(resources, false);
    html += "</td>";
    html += "</tr>";
    html += "<tr>";
    html += "<td>";
    html += "group condition";
    html += "</td>";
    html += "<td colspan='500'>";
    html += createWhereClause(resources);
    html += "</td>";
    html += "</tr>";
    //for delete
    html += "<tr style='display:none'>";
    html += "<td>";
    html += "delete attribute";
    html += "</td>";
    html += "<td colspan='500'>";
    html += createLISTattrbiutes(resources, false);
    html += "</td>";
    html += "</tr>";
    html += "<tr style='display:none'>";
    html += "<td>";
    html += "from data resource";
    html += "</td>";
    html += "<td colspan='500'>";
    html += sqlbuilderDeleteresources(resources);
    html += "</td>";
    html += "</tr>";
    html += "<tr style='display:none'>";
    html += "<td>";
    html += "delete condition";
    html += "</td>";
    html += "<td colspan='500'>";
    html += createWhereClause(resources);
    html += "</td>";
    html += "</tr>";
    //for udpate
    html += "<tr style='display:none'>";
    html += "<td>";
    html += "update attribute";
    html += "</td>";
    html += "<td colspan='500'>";
    html += sqlbuildercreateresources(resources);
    html += "</td>";
    html += "</tr>";
    html += "<tr style='display:none'>";
    html += "<td>";
    html += "update rule";
    html += "</td>";
    html += "<td colspan='500'>";
    html += createSetClause(resources, false);
//    html += createLISTattrbiutes(resources);
    html += "</td>";
    html += "</tr>";
    html += "<tr style='display:none'>";
    html += "<td>";
    html += "update condition";
    html += "</td>";
    html += "<td colspan='500'>";
    html += createWhereClause(resources);
    html += "</td>";
    html += "</tr>";




    html += "</tbody></table>";
    return html;
}

function sqlbuilderDeleteresources(resources) {
    var html = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    html += "<thead><tr><th>attribute</th><th>alais</th><th>select/remove</th></tr></thead>";
    html += "<tbody>";
    html += sqlbuildercreateresourceswithoutTable(resources);
    html += "</tbody>";
    html += "<tfoot ><td colspan='500'><span class='sqlbuilderDeleteAddNewResources'><button class='btn btn-info' ><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Resource</button><span></td></tfoot>";
    html += "</table>";
    return html;
}

function createSetClause(resouces) {
    var html = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    html += "<tbody>";
    html += "</tbody>";
    html += "<tfoot ><td colspan='500'><span class='sqlbuilderAddSet'><button class='btn btn-info' ><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New field</button><span></td></tfoot>";
    html += "</table>";
    return html;
}



function createWhereClause(resouces) {
    var html = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    html += "<tbody>";
    html += "</tbody>";
    html += "<tfoot ><td colspan='500'><span class='sqlbuilderAddCondition'><button class='btn btn-info' ><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Condition</button><span></td></tfoot>";
    html += "</table>";
    return html;
}

function createSELECTattrbiutes(resources, plaintext) {
    var html = "";
    html = '<input list="browsers1" autocomplete="false" class="form-control">';
    html += '<datalist id="browsers1">';
    for (var i = 0; i < resources.length; ++i) {
        var attrs = getResourcesAttribute(resources[i]);
        for (var j = 0; j < attrs.length; ++j) {
//            html += '<option value="' + removeextension(resources[i].urlReturnFileName) + "." + attrs[j].text + '">';
            html += '<option value="' + attrs[j].text + '">';
        }
    }
    if (plaintext != undefined) {
        html += generateSELECTSQLSupportFunction();
    }
    html += '</datalist>';
    return html;
}
function createSELECTResources(resources, plaintext) {
    var html = "";
    html += '<input list="browsers" autocomplete="false" class="form-control">';
    html += '<datalist id="browsers">';
    for (var i = 0; i < resources.length; ++i) {
        html += '<option value="' + removeextension(resources[i].urlReturnFileName) + '">';
    }
    if (plaintext != undefined) {
        html += generateSELECTSQLSupportFunction();
    }
    html += '</datalist>';
    return html;
}

function generateSELECTSQLSupportFunction() {
    var html = "";
    html += "<option disable value='-----------------------------------------------------------'>";
    html += "<option value='substring([attr], [start], [len])'>";
//    html += "<option value='abs([attr|number])'>";
    html += "<option value='abs([(attr|string)])'>";
//    html += "<option value='avg([attr])'>";
//    html += "<option value='concat([(attr|string)],[attr|string])'>";
    html += "<option value='concat([attr|string],[attr|string])'>";
//    html += "<option value='count([(attr|string)],[attr|string])'>";
//    html += "<option value='max(attr)'>";
//    html += "<option value='min(attr)'>";
    html += "<option value='pow([(attr|number)],[attr|number])'>";
    return html;
}


function createCondition() {
    var html = "<select class='form-control'>";
    html += "<option value='='>=</option>";
    html += "<option value='>'>></option>";
    html += "<option value='<'><</option>";
    html += "<option value='!='>!=</option>";
    html += "<option value='>='>>=</option>";
    html += "<option value='<='><=</option>";
    html += "<option value='like'>like</option>";
    html += "</select>";
    return html;
}

function createLISTattrbiutes(resources, noalias) {
//    console.log(JSON.stringify(resources));

    var html = "";
    html += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    html += "<thead><tr>";
    if (noalias == undefined) {
        html += "<th>attribute</th><th>alias</th><th>select/remove</th>";
    } else {
        html += "<th>attribute</th><th>select/remove</th>";
    }
    html += "</tr></thead><tbody>";
    for (var i = 0; i < resources.length; ++i) {
        var attrs = getResourcesAttribute(resources[i]);
        for (var j = 0; j < attrs.length; ++j) {
            html += "<tr><td>" + attrs[j].text + "</td>";
            if (noalias == undefined) {
                html += "<td><input class='form-control'></td>";
            }
            html += "<td><input type='checkbox' /></td>";
            html += "</tr>";
        }
    }
    html += "</tbody><tfoot ><td colspan='500'><span class='sqlbuilderAddAttibutes'><button class='btn btn-info'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Attibutes</button></span></td></tfoot>";
    html += "</table>";
    return html;
}

function createFORMClauseRow(resources, noremove) {
    var html = "";
    html += "<tr>";
    html += "<td>";
    html += "<label style='display:none'>resource or statement(check):</label><input style='display:none' class='sqlbuilderFromClause' type='checkbox'>";
    html += "<div style='display:none'>alias:<input class='form-control'></div>";
    html += "</td>";
    html += "<td>";
    html += sqlbuildercreateresources(resources);
    html += "</td>";
    if (noremove != undefined) {
        html += "<td style='display:none'>";
    } else {
        html += "<td style='display:none' colspan='2'>";
    }
    html += "</td>";
    if (noremove == undefined) {
        html += "<td>";
        html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
        html += "</td>";
    }
    html += "</tr>";
    return html;
}

function sqlbuildercreateresources(resources) {
    var html = "";
    html += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    html += "<thead><tr><th>resource</th><th>alias</th><th>selct/remove</th></tr></thead><tbody>";
    for (var i = 0; i < resources.length; ++i) {
        html += "<tr><td>" + removeextension(resources[i].urlReturnFileName) + "</td><td><input class='form-control' /></td><td><input type='checkbox' /></td></tr>";
    }
    html += "<td><input class='form-control'></td><td><input class='form-control' /></td><td><input type='checkbox' /></td>";
    html += "</tbody></table>";
    return html;
}
function sqlbuildercreateresourceswithoutTable(resources) {
    var html = "";
    for (var i = 0; i < resources.length; ++i) {
        html += "<tr><td>" + removeextension(resources[i].urlReturnFileName) + "</td><td><input class='form-control' /></td><td><input type='checkbox' /></td></tr>";
    }
    return html;
}

function createFROMClause(resources) {
    var html = "";
    html += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    html += createFORMClauseRow(resources);
    html += "</tbody><tfoot>";
    html += "<td colspan='10'><span class='sqlbuilderAddJoin'><button class='btn btn-info'><span class='glyphicon glyphicon-plus'></span>&nbsp;Join</button></span>";
    html += " <span class='sqlbuilderAddNewStatementTable'><button class='btn btn-info'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Statement</button></span></td>";
    html += "</tfoot>";
    html += "</table>";
    return html;
}

function getResourcesAttribute(resource) {
    var attrs = [];
    var count = 0;
    var resName = removeextension(resource.urlReturnFileName);
    if (resource.outAttributes != undefined) {
        for (var i = 0; i < resource.outAttributes.length; ++i) {
            attrs.push({
                "id": resName + "." + resource.outAttributes[i].name,
                "text": resName + "." + resource.outAttributes[i].name,
                "textWithOutRes": resource.outAttributes[i].name
            });
        }
    } else {
        getResourceAttr(resource.jsUrlReturnFileSchema, attrs, removeextension(resource.urlReturnFileName));
    }
    return attrs;
}

function getResourceAttr(tree, attrs, resName) {
    if (tree.children.length == 0) {
        attrs.push({
            "id": resName + "." + tree.text,
            "text": resName + "." + tree.text,
            "textWithOutRes": tree.text
        });
        return;
    }
    for (var i = 0; i < tree.children.length; ++i) {
        getResourceAttr(tree.children[i], attrs, resName);
    }
}

function removeextension(name) {
    var index = name.lastIndexOf(".");
    return index == -1 ? name : name.substring(0, index);
}


function generateSQLQuery() {
    var base = $('#sqlbuildercanvas');
    //the big table
    var bigTable = $('#sqlbuildercanvas').children("table").eq(0);
    var script = "";
    var tables = bigTable.find("> tbody > tr > td > table");
    for (var i = 0; i < tables.size(); ++i) {
        script += generateStatement(tables.eq(i));
    }
    var returnScript = "";
    if (script.indexOf("update") != -1 || script.indexOf("delete") != -1) {
        returnScript = "SET SQL_SAFE_UPDATES = 0;\n";
        returnScript += script;
        returnScript += "SET SQL_SAFE_UPDATES = 1;\n";
    } else {
        returnScript = script;
    }

    return returnScript;
}

function showSQLQuery() {
    var script = generateSQLQuery();
    $("#sqlqueryshow").empty();
    $("#sqlqueryshow").text(script);
}

function checkAddComma(script) {
    return script.substr(-8).indexOf("from") == -1
            && script.substr(-8).indexOf("join") == -1
            && script.substr(-8).indexOf("select") == -1
            && script.substr(-10).indexOf("distinct") == -1
            && script.substr(-10).indexOf("delete") == -1
            && script.substr(-10).indexOf("update") == -1
            && script.substr(-10).indexOf("group by") == -1;
}

function generateStatement(table) {
//    console.log(table);
    var script = "";
    var trs = table.find("> tbody > tr");
    var outputtable = trs.find("> td").eq(1).find("input").eq(0).val()
    var action = trs.find(" > td").eq(0).find("select").eq(0).val();

    //based on action
    if (action == 'select') {
        if (outputtable != "") {
            script += "drop table if exists " + removeextension(outputtable) + ";\n";
            script += "create table " + removeextension(outputtable) + " as \n";
        }
        //distinct
        var distinct = trs.eq(1).find("td").eq(0).find("input").prop('checked') == true ? "distinct" : "";
        script += action + " " + distinct;
        //select attributes
        var attrTableTrs = trs.eq(1).find("td").eq(1).find("> table > tbody > tr");
        for (var i = 0; i < attrTableTrs.size(); ++i) {
            var tr = attrTableTrs.eq(i);
            if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan") || tr.find("td").eq(2).find("input").eq(0).prop('checked') == true) {
                if (checkAddComma(script)) {
                    script += ", ";
                } else {
                    script += " ";
                }
                if (tr.find("td").eq(1).find("input").eq(0).val() === '') {
                    if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                        script += " " + tr.find("td").eq(0).find("input").val() + " ";
                    } else {
                        script += " " + tr.find("td").eq(0).text() + " ";
                    }
                } else {
                    if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                        script += "(" + tr.find("td").eq(0).find("input").val() + ") " + tr.find("td").eq(1).find("input").eq(0).val();
                    } else {
                        script += "(" + tr.find("td").eq(0).text() + ") " + tr.find("td").eq(1).find("input").eq(0).val();
                    }
                }
            }
        }
        script += "\n";
        //from !!
        var fromTableTrs = trs.eq(2).find("td").eq(1).find("> table > tbody > tr");
        if (fromTableTrs.size() > 0) {
            script += "from ";
            for (var i = 0; i < fromTableTrs.size(); ++i) {
                var tr = fromTableTrs.eq(i);
                if (tr.find("td").eq(0).text().indexOf("resource") != -1) {//resouces
                    if (tr.find("td > input").eq(0).prop("checked")) {//statement
                        //need find the alias name 
                        var alias = tr.find("> td input").eq(1).val();
                        var subTable = tr.find("> td").eq(2).find(" > table").eq(0);
                        script += "(" + generateStatement(subTable) + ") " + alias;
                    } else {
                        var subTabletrs = tr.find("> td").eq(1).find("table > tbody > tr");
                        if (subTabletrs.size() > 0) {
                            for (var j = 0; j < subTabletrs.size(); ++j) {
                                var tr = subTabletrs.eq(j);
                                if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan") || tr.find("td").eq(2).find("input").eq(0).prop('checked') == true) {
                                    if (checkAddComma(script)) {
                                        script += ", ";
                                    } else {
                                        script += " ";
                                    }
                                    if (j == subTabletrs.size() - 1) {//custom input
                                        script += tr.find("td").eq(0).find("input").val() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                                    } else {
                                        if (tr.find("td").eq(1).find("input").eq(0).val() === '') {
                                            if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                                                script += " " + tr.find("td").eq(0).find("input").val() + " ";
                                            } else {
                                                script += " " + tr.find("td").eq(0).text() + " ";
                                            }
                                        } else {
                                            if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                                                script += "" + tr.find("td").eq(0).find("input").val() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                                            } else {
                                                script += "" + tr.find("td").eq(0).text() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if (tr.find("td").eq(0).text().indexOf("Join") != -1) {
                    script += "\n " + tr.find("td").eq(1).find("select").eq(0).val();
                    //not nested no select
//                    script += "\n select";
                    script += "\n ";
                    tr = fromTableTrs.eq(i + 1);
                    if (tr.find("td > input").eq(0).prop("checked")) {//statement
                        //need find the alias name 
                        var alias = tr.find("> td input").eq(1).val();
                        var subTable = tr.find("> td").eq(2).find(" > table").eq(0);
                        script += "(" + generateStatement(subTable) + ") " + alias;
                    } else {
                        var subTabletrs = tr.find("> td").eq(1).find("table > tbody > tr");
                        if (subTabletrs.size() > 0) {
                            for (var j = 0; j < subTabletrs.size(); ++j) {
                                var tr = subTabletrs.eq(j);
                                if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan") || tr.find("td").eq(2).find("input").eq(0).prop('checked') == true) {
                                    if (checkAddComma(script)) {
                                        script += ", ";
                                    } else {
                                        script += " ";
                                    }
                                    if (j == subTabletrs.size() - 1) {//custom input
                                        script += tr.find("td").eq(0).find("input").val() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                                    } else {
                                        if (tr.find("td").eq(1).find("input").eq(0).val() === '') {
                                            if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                                                script += " " + tr.find("td").eq(0).find("input").val() + " ";
                                            } else {
                                                script += " " + tr.find("td").eq(0).text() + " ";
                                            }
                                        } else {
                                            if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                                                script += "" + tr.find("td").eq(0).find("input").val() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                                            } else {
                                                script += "" + tr.find("td").eq(0).text() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //on
                    tr = fromTableTrs.eq(i + 2);
                    var onTabletrs = tr.find("td").eq(1).find("> table > tbody > tr");
                    if (onTabletrs.size() > 0) {
                        script += "\n on ";
                        for (var j = 0; j < onTabletrs.size(); ++j) {
                            var tr = onTabletrs.eq(j);
                            if (tr.find("td").eq(0).find("input").eq(0).prop('checked') == true) {
                                if (j != 0) {
                                    script += ", ";
                                } else {
                                    script += " ";
                                }
                                script += tr.find("td").eq(2).find("input").eq(0).val();
                            } else {
                                if (j != 0) {
                                    script += ", ";
                                } else {
                                    script += " ";
                                }
                                script += tr.find("td").eq(1).find("input").eq(0).val() + " "
                                        + tr.find("td").eq(1).find("select").eq(0).val() + " "
                                        + tr.find("td").eq(1).find("input").eq(1).val();
                            }
                        }
                    }
                    i += 2;
                }
            }
            script += "\n";
        }
        //where
        var whereTrs = trs.eq(3).find("td").eq(1).find("> table > tbody > tr");
        if (whereTrs.size() > 0) {
            script += "where ";
            for (var i = 0; i < whereTrs.size(); ++i) {
                var tr = whereTrs.eq(i);
                if (tr.find("td").eq(0).text().indexOf("condition") != -1) {
                    script += tr.find("td").eq(1).find("select").val();
                } else {
                    if (tr.find("td").eq(0).find("input").eq(0).prop('checked') == true) {
                        script += " " + tr.find("td").eq(2).find("input").eq(0).val() + " ";
                    } else {
                        script += " " + tr.find("td").eq(1).find("input").eq(0).val() + " "
                                + tr.find("td").eq(1).find("select").eq(0).val() + " "
                                + tr.find("td").eq(1).find("input").eq(1).val() + " ";
                    }
                }
            }
            script += "\n";
        }
        //group by
        var groupByTrs = trs.eq(4).find("td").eq(1).find("> table > tbody > tr");
        if (groupByTrs.size() > 0) {
            var flag = false;
            for (var i = 0; i < groupByTrs.size(); ++i) {
                var tr = groupByTrs.eq(i);
                if (tr.find("td").eq(1).find("input").eq(0).prop('checked') || tr.find("td").eq(1).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                    flag = true;
                }
            }
            if (flag) {
                script += "group by ";
                for (var i = 0; i < groupByTrs.size(); ++i) {
                    var tr = groupByTrs.eq(i);
                    if (tr.find("td").eq(1).find("input").eq(0).prop('checked') || tr.find("td").eq(1).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                        if (checkAddComma(script)) {
                            script += ", ";
                        } else {
                            script += " ";
                        }
                        if (tr.find("td").eq(1).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                            script += tr.find("td").eq(0).find("input").eq(0).val();
                        } else {
                            script += tr.find("td").eq(0).text();
                        }
                    }
                }
                script += "\n";
            }
        }
        //having
        var havingTrs = trs.eq(5).find("td").eq(1).find("> table > tbody > tr");
        if (havingTrs.size() > 0) {
            script += "having ";
            for (var i = 0; i < havingTrs.size(); ++i) {
                var tr = havingTrs.eq(i);
                if (tr.find("td").eq(0).text().indexOf("condition") != -1) {
                    script += tr.find("td").eq(1).find("select").val();
                } else {
                    if (tr.find("td").eq(0).find("input").eq(0).prop('checked') == true) {
                        script += " " + tr.find("td").eq(2).find("input").eq(0).val() + " ";
                    } else {
                        script += " " + tr.find("td").eq(1).find("input").eq(0).val() + " "
                                + tr.find("td").eq(1).find("select").eq(0).val() + " "
                                + tr.find("td").eq(1).find("input").eq(1).val() + " ";
                    }
                }
            }
            script += "\n";
        }
        script += ";\n";
    } else if (action == 'delete') {
        //delete
        script += "delete ";
        var deleteAttributes = trs.eq(6).find("td").eq(1).find("> table > tbody > tr");
        if (deleteAttributes.size() > 0) {
            for (var i = 0; i < deleteAttributes.size(); ++i) {
                var tr = deleteAttributes.eq(i);
                if (tr.find("td").eq(1).find("input").eq(0).prop('checked') || tr.find("td").eq(1).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                    if (checkAddComma(script)) {
                        script += ", ";
                    } else {
                        script += " ";
                    }
                    if (tr.find("td").eq(1).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                        script += tr.find("td").eq(0).find("input").eq(0).val();
                    } else {
                        script += tr.find("td").eq(0).text();
                    }

                }
            }
        }
        script += "\n";
        var oldTable = "";
        //from
        script += "from ";
        var fromResources = trs.eq(7).find("td").eq(1).find("> table > tbody > tr");
        if (fromResources.size() > 0) {
            for (var i = 0; i < fromResources.size(); ++i) {
                var tr = fromResources.eq(i);
                if (tr.find("td").eq(2).find("input").eq(0).prop('checked') || tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                    if (checkAddComma(script)) {
                        script += ", ";
                    } else {
                        script += " ";
                    }
                    if (tr.find("td").eq(2).find("input").eq(0).prop('checked')) {
                        oldTable = tr.find("td").eq(0).text();
                    } else {
                        oldTable = tr.find("td > input").eq(0).val();
                    }
                    if (tr.find("td").eq(1).find("input").eq(0).val() === '') {
                        if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                            script += " " + tr.find("td").eq(0).find("input").val() + " ";
                        } else {
                            script += " " + tr.find("td").eq(0).text() + " ";
                        }
                    } else {
                        if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                            script += "" + tr.find("td").eq(0).find("input").val() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                        } else {
                            script += "" + tr.find("td").eq(0).text() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                        }
                    }
                }
            }
        }
        script += "\n";
        //where
        var whereTrs = trs.eq(8).find("td").eq(1).find("table > tbody > tr");
        if (whereTrs.size() > 0) {
            script += "where ";
            for (var i = 0; i < whereTrs.size(); ++i) {
                var tr = whereTrs.eq(i);
                if (tr.find("td").eq(0).text().indexOf("condition") != -1) {
                    script += tr.find("td").eq(1).find("select").val();
                } else {
                    if (tr.find("td").eq(0).find("input").eq(0).prop('checked') == true) {
                        script += " " + tr.find("td").eq(2).find("input").eq(0).val() + " ";
                    } else {
                        script += " " + tr.find("td").eq(1).find("input").eq(0).val() + " "
                                + tr.find("td").eq(1).find("select").eq(0).val() + " "
                                + tr.find("td").eq(1).find("input").eq(1).val() + " ";
                    }
                }
            }
        }
        script += ";\n";
        if (outputtable != "") {
            script += "drop table if exists " + removeextension(outputtable) + ";\n";
            script += "create table " + removeextension(outputtable) + "\n";
            script += "select * from " + removeextension(oldTable) + ";\n";
        }
    } else if (action == 'update') {
        script += "update ";
        var updateAttrTableTrs = trs.eq(9).find("td").eq(1).find("table > tbody > tr");
        for (var i = 0; i < updateAttrTableTrs.size(); ++i) {
            var tr = updateAttrTableTrs.eq(i);
            if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan") || tr.find("td").eq(2).find("input").eq(0).prop('checked') == true) {
                if (checkAddComma(script)) {
                    script += ", ";
                } else {
                    script += " ";
                }
                if (tr.find("td").eq(2).find("input").eq(0).prop('checked')) {
                    oldTable = tr.find("td").eq(0).text();
                } else {
                    oldTable = tr.find("td > input").eq(0).val();
                }
                if (i == updateAttrTableTrs.size() - 1) {//custom input
                    script += tr.find("td").eq(0).find("input").val() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                } else {
                    if (tr.find("td").eq(1).find("input").eq(0).val() === '') {
                        if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                            script += " " + tr.find("td").eq(0).find("input").val() + " ";
                        } else {
                            script += " " + tr.find("td").eq(0).text() + " ";
                        }
                    } else {
                        if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                            script += "" + tr.find("td").eq(0).find("input").val() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                        } else {
                            script += "" + tr.find("td").eq(0).text() + " " + tr.find("td").eq(1).find("input").eq(0).val();
                        }
                    }
                }
            }
        }
        script += "\n";

        var setConditions = trs.eq(10).find("td").eq(1).find("table > tbody > tr");
        if (setConditions.size() > 0) {
            script += "set ";
            for (var i = 0; i < setConditions.size(); ++i) {
                var tr = setConditions.eq(i);
                if (tr.find("td").eq(0).find("input").eq(0).prop('checked') == true) {
                    if (i != 0) {
                        script += ", ";
                    } else {
                        script += " ";
                    }
                    script += tr.find("td").eq(2).find("input").eq(0).val();
                } else {
                    if (i != 0) {
                        script += ", ";
                    } else {
                        script += " ";
                    }
                    script += tr.find("td").eq(1).find("input").eq(0).val() + " "
                            + tr.find("td").eq(1).find("select").eq(0).val() + " "
                            + tr.find("td").eq(1).find("input").eq(1).val();
                }
            }
            script += "\n";
        }

        var whereTrs = trs.eq(11).find("td").eq(1).find("table > tbody > tr");
        if (whereTrs.size() > 0) {
            script += "where ";
            for (var i = 0; i < whereTrs.size(); ++i) {
                var tr = whereTrs.eq(i);
                if (tr.find("td").eq(0).text().indexOf("condition") != -1) {
                    script += tr.find("td").eq(1).find("select").val();
                } else {
                    if (tr.find("td").eq(0).find("input").eq(0).prop('checked') == true) {
                        script += " " + tr.find("td").eq(2).find("input").eq(0).val() + " ";
                    } else {
                        script += " " + tr.find("td").eq(1).find("input").eq(0).val() + " "
                                + tr.find("td").eq(1).find("select").eq(0).val() + " "
                                + tr.find("td").eq(1).find("input").eq(1).val() + " ";
                    }
                }
            }
        }
        script += ";\n";
        if (outputtable != "") {
            script += "drop table if exists " + removeextension(outputtable) + ";\n";
            script += "create table " + removeextension(outputtable) + "\n";
            script += "select * from " + removeextension(oldTable) + ";\n";
        }

    }
    console.log(script);
    return script;
}

