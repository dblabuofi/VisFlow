function initxQueryBuilder(resources) {
    var html = "";

    var html = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    html += "<tr><td>";
    html += createXQueryBlock(resources);
    html += "</td>";
    html += "<td>";
    html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
    html += "</td>";
    html += "</tr>";
    html += "</tbody>";
    html += "<tfoot ><td colspan='500'><span class='xquerybuilderAddNewStatement'><button class='btn btn-info'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Statement</button></span></td></tfoot>";

    html += "</table>";

    $('[id="xbuildercanvas"]').append(html);


    bindSQLBuilderFunctions();
}

function bindSQLBuilderFunctions() {
    $(".tableRemoveSpan").unbind("click");
    $(".tableRemoveSpan").bind("click", function () {
        $(this).closest('tr').remove();
    });
    
    $(".xquerybuilderExpress").unbind("click");
    $(".xquerybuilderExpress").bind("click", function () {
        if ($(this).prop('checked') === true) {
            $(this).parent().next().hide();
            $(this).parent().next().next().show();
        } else {
            $(this).parent().next().show();
            $(this).parent().next().next().hide();
        }
    });
    
    $(".xquerybuilderAddNewStatement").unbind("click");
    $(".xquerybuilderAddNewStatement").bind("click", function () {
        var table = $(this).closest("table");
        console.log(table);
        var html = "";
        html += "<tr><td>";
        html += createXQueryBlock(curData.resourcesIn);
        html += "</td>";
        html += "<td>";
        html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
        html += "</td>";
        html += "</tr>";

        table.append(html);
        bindSQLBuilderFunctions()
    });

}

function createXQueryBlock(resources) {
    var html = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    html += "<thead><tr><td>variable</td><td colspan='100'>expression</td></tr></thead>";
    html += "<tbody>"
    html += createXQueryVariable(resources);
    html += "</tbody></table>";
    return html;
}
//each row
function createXQueryVariable(resources) {
    var html = "";
    html += "<tr>";
    html += "<td>";
    html += "<input class='form-control'>";
    html += "</td>";
    html += createExpression(resources);
    html += "</tr>";
    return html;
}
//expression <td>select<td>FLWOR
function createExpression(resources) {
    var html = "";
    html += "<td>";
    html += "select or FLWOR (check) <input class='xquerybuilderExpress' type='checkbox'>";
    html += "</td>";
    html += "<td>";
    html += createXQuerySelect(resources);
    html += "</td>";
    html += "<td style='display:none;'>";
    html += createXQeryFLWOR(resources);
    html += "</td>";

    return html;
}

function createXQuerySelect(resources) {
    var html = "";
    html = '<input list="browsers1" autocomplete="false" class="form-control">';
    html += '<datalist id="browsers1">';
    for (var i = 0; i < resources.length; ++i) {
        var attrs = getResourcesAttribute(resources[i]);
        for (var j = 0; j < attrs.length; ++j) {
            html += '<option value="' + attrs[j].text + '">';
        }
    }
    html += createXQuerySelectFunction();
    html += '</datalist>';
    return html;
}

function createXQuerySelectFunction() {
    var html = "";
    html += '<option value="----------------------------------">';
    html += '<option value="concat(string,string,...)">';
    html += '<option value="string-join((string,string,...),sep)">';
    html += '<option value="substring(string,start,len)">';
    html += '<option value="abs(num)">';
    html += '<option value="floor(num)">';
    return html;
}

function createXQeryFLWOR(resources) {
    var html = "";
    html += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    html += "<tbody>";
    //for
    html += "<tr><td>for</td>";
    html += "<td>";
    html += "<input class='form-control'>";
    html += "</td>";
    html += "<td>";
    html += "in";
    html += "</td>";
    html += "<td>";
    html += createXQuerySelect(resources);
    html += "</td>";
    html += "</tr>";
    //where
    html += "<tr><td>where</td>";
    html += "<td colspan='90'>";
    html += createXQuerySelect(resources);
    html += "</td>";
    html += "</tr>";
    html += "<tr><td>return</td>";
    html += "<td colspan='90'>";
    html += "<textarea style='resize: vertical;' class='form-control'></textarea>";
    html += "</td>";
    html += "</tr>";

    html += "</tbody></table>";
    return html;
}

