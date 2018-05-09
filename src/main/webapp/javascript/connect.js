function generateUpdateConnect() {
    var innerhtml = "";
    if (curData.resourcesIn === undefined) {
        return innerhtml;
    }
    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td width='10%;'><label>Connect Name</label></td><td><input id='connectName' class='form-control'></td></tr>";
    innerhtml += "</tbody></table>";
    //resources
    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<thead><tr><th><label>Resource name</label></th><th><label>Resource Type</label></th><tr></thead>";

    for (var i = 0; i < curData.resourcesIn.length; ++i) {
        innerhtml += "<tr>";
        innerhtml += "<td>" + curData.resourcesIn[i].urlReturnFileName + "</td>";
        innerhtml += "<td>" + curData.resourcesIn[i].urlReturnFileType + "</td>";
        innerhtml += "</tr>";
    }

    innerhtml += "</tbody></table>";
    innerhtml += "<button class='btn btn-info' onclick='updateConnect()'>Update Connect</button>";

    return innerhtml;
}

function updateConnect() {
//    curData.resourcesOut = curData.resourcesIn;
    var action = {
        id: guid(),
        act: 'connect'
    };
    curData.label = $('#connectName').val();
    curData.actions = [];
    curData.actions.push(action);
    data.nodes.update(curData);
    updateNodes(curData);
    //update ui
    generateInnerhtml();
    gotoNodeInfo();
}

function bindConnectFunctions() {
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
                $('#resourceInShowConnect' + index).hide();
                $('#resourceInShowConnect' + index).next().show();
                curData.stop = "input";
                curData.resourcesIn[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceInShowConnect' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowConnect" + index).html("");
            }
        } else if ($partent.text().indexOf("Out") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                console.log(index);
                $('#resourceOutShowConnect' + index).hide();
                $('#resourceOutShowConnect' + index).next().show();

                //mark stop
                curData.stop = "output";
                curData.resourcesOut[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceOutShowConnect' + index);
                curData.stop = undefined;
                curData.resourcesOut[index].isReturn = undefined;
                data.nodes.update(curData);

            } else {
                $("#resourceOutShowConnect" + index).html("");
            }
        }

    });
}
