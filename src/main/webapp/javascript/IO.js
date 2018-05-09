function  generateUpdateIO() {
    var innerhtml = "";
    if (curData.resourcesIn === undefined) {
        $("#updatediv").html(innerhtml);
        return;
    }

    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td width='10%;'><label>I/O Name</label></td><td><input id='ioName' class='form-control'></td></tr>";
    innerhtml += "<tr><td><label>Output File Names</label></td><td>";
    innerhtml += generateOutPutFileInputs();
    innerhtml += "</td></tr>";
    innerhtml += "</tbody></table>";
    innerhtml += "<div id='ioupdatewebdiv'> </div>";

    innerhtml += "<button class='btn btn-info' onclick='updateIO()'>Update I/O</button>";

    return innerhtml;
}

function updateIO() {
    curData.actions = [];
    if ($('#ioName').val() !== undefined && $('#ioName').val().length > 0) {
        curData.label = $('#ioName').val();
        data.nodes.update(curData);
    }

    var action = {
        id: guid(),
        act: 'generalIO'
    };
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
    action.inputFileNames = [];
    for (var i = 0; i < curData.resourcesIn.length; ++i) {
        action.inputFileNames.push(curData.resourcesIn[i].urlReturnFileName);
    }


    curData.actions.push(action);
    updateAnalyticsOutResources();
    data.nodes.update(curData);
    updateNodes(curData);
    //update ui
    generateInnerhtml();
    gotoNodeInfo();
}

function bindIOFunctions() {
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
                runsubGraph('resourceInShowIO' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowIO" + index).html("");
            }
        } else if ($partent.text().indexOf("Out") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                $('#resourceOutShowIO' + index).hide();
                $('#resourceOutShowIO' + index).next().show();

                //mark stop
                curData.stop = "output";
                curData.resourcesOut[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceOutShowIO' + index);
                curData.stop = undefined;
                curData.resourcesOut[index].isReturn = undefined;
                data.nodes.update(curData);

            } else {
                $("#resourceOutShowIO" + index).html("");
            }
        }

    });

}

function generalIOUploadFile() {
    console.log("generalIOUploadFile");
    var id = $('#generalUploadFilesID').val();
    uploadedIOids.push(id);
    
    var formData = new FormData();
    if (--numberofIOs == 0) {
        clearInterval(mySubGraphInterval);
    }
    if ($("#generalUploadFiles")[0].files.length == 0) {
        return;
    }

    $.each($("#generalUploadFiles")[0].files, function (i, file) {
        formData.append('file', file);
    });

    $.ajax({
        url: baseurl + "resource/uploadFile", //Server script to process data
        type: 'POST',
        // Form data
        data: formData,
        //Options to tell jQuery not to process data or worry about content-type.
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            console.log(data);
            $('#generalIOUploadFile').modal('toggle');
        },
        error: function (data) {
            $('#generalIOUploadFile').modal('toggle');
        }
    });

}

function removeGeneralIOAction(index) {
    console.log(index);
    curData.resourcesOut.splice(index, 1);
    console.log(curData.resourcesOut);
    data.nodes.update(curData);
    updateNodes(curData);

    generateInnerhtml();
}