function generateUpdateWaiton() {
    var innerhtml = "";

    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td width='10%;'><label>WaitOn Name</label></td><td><input id='waitonName' class='form-control'></td></tr>";
    innerhtml += "</tbody></table>";

    innerhtml += "<button class='btn btn-info' onclick='updateWaitOn()'>Update WaitOn</button>";
    return innerhtml;
}

function updateWaitOn() {
    curData.label = $('#waitonName').val();
    curData.actions = [];
    curData.actions.push(action);
    
    data.nodes.update(curData);
    updateNodes(curData);
    //update ui
    generateInnerhtml();
    gotoNodeInfo();
}

function bindWaitOnFunctions() {

    $(".tableRemoveSpan").unbind('click');
    $('.tableRemoveSpan').click(function () {
        $(this).closest('tr').remove();
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
                $('#resourceInShowWaiton' + index).hide();
                $('#resourceInShowWaiton' + index).next().show();
                curData.stop = "input";
                curData.resourcesIn[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceInShowWaiton' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowWaiton" + index).html("");
            }
        } else if ($partent.text().indexOf("Out") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                console.log(index);
                $('#resourceOutShowWaiton' + index).hide();
                $('#resourceOutShowWaiton' + index).next().show();

                //mark stop
                curData.stop = "output";
                curData.resourcesOut[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceOutShowWaiton' + index);
                curData.stop = undefined;
                curData.resourcesOut[index].isReturn = undefined;
                data.nodes.update(curData);

            } else {
                $("#resourceOutShowWaiton" + index).html("");
            }
        }

    });
    
    $(".collapsecolumn").unbind('click');
    $(".collapsecolumn").on('click', function (event) {
        $parent = $(this).parent();
        $parent.next().slideToggle();
        $glyphicon = $(this).find("span.glyphicon").first();
        $glyphicon.toggleClass('glyphicon-chevron-right glyphicon-chevron-down');

    });
    
}