
function bindFusionFunctions() {
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
//                                console.log($(this));
//                                console.log($(this).index());
//                                console.log($(this).parent().index());
                var index = parseInt($(this).parent().index() / 2);
                curData.stop = "input";
                curData.resourcesIn[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceInShowFusion' + index);
                curData.stop = undefined;
                curData.resourcesIn[index].isReturn = undefined;
                data.nodes.update(curData);
            } else {
                $("#resourceInShowFusion" + index).html("");
            }
        } else if ($partent.text().indexOf("Out") >= 0) {
            if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                var index = parseInt($(this).parent().index() / 2);
                $('#resourceOutShowFusion' + index).hide();
                $('#resourceOutShowFusion' + index).next().show();

                //mark stop
                curData.stop = "output";
                curData.resourcesOut[index].isReturn = "return";
                data.nodes.update(curData);
                runsubGraph('resourceOutShowFusion' + index);
                curData.stop = undefined;
                curData.resourcesOut[index].isReturn = undefined;
                data.nodes.update(curData);

            } else {
                $("#resourceOutShowFusion" + index).html("");
            }
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
