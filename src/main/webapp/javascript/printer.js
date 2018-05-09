/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function bindPrinterFunctions() {
        $(".collapserow").unbind('click');
        $(".collapserow").on('click', function (event) {
                  $(this).parent().next().slideToggle();
                $glyphicon = $(this).find("span.glyphicon");
                $glyphicon.toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
                
                $partent = $(this).parent().parent().parent().prev().prev();

                if ($glyphicon.hasClass('glyphicon-chevron-down')) {
                        var index = parseInt($(this).parent().index() / 2);
                        curData.stop = "input";
                        curData.resourcesIn[index].isReturn = "return";
                        data.nodes.update(curData);
                        runsubGraph('resourceInShowPrinter' + index);
                        curData.stop = undefined;
                        curData.resourcesIn[index].isReturn = undefined;
                        data.nodes.update(curData);
                } else {
                        $("#resourceInShowPrinter" + index).html("");
                }
        });

}