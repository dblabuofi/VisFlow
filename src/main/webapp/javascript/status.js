/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getStatus(finishedData, callback, ids, resourceOuts) {
    var url = baseurl + "status";
    $.ajax({
        url: url
    }).then(function (data) {

        data = JSON.parse(data);
        console.log(data);
        var ids = [];
        var messages = "";

        for (var i = 0; i < data.length; ++i) {
            ids.push(data[i].id);
            messages += data[i].message;
        }
//                console.log(data);
        $('#processmessage').html(messages);
        $("#processmessageWrapper").animate({scrollTop: $("#processmessageWrapper")[0].scrollHeight}, 1000);

        clearResultHighlights(resultData.nodes);
        for (var i = 0; i < ids.length; ++i) {
            hightlightNode(resultData.nodes, ids[i]);
        }
//                console.log(resultData.nodes);
        if (callback !== undefined && callback != null) {
            callback(data, finishedData);
        }
    });
}

function getStatusforSubGraph() {
    var url = baseurl + "status";
    $.ajax({
        url: url
    }).then(function (response) {
        response = JSON.parse(response);
        for (var i = 0; i < response.length; ++i) {
            for (var k = 0; k < uploadFileGeneralIOids.length; ++k) {
                var id = uploadFileGeneralIOids[k];
                if (response[i].id == id && !uploadedIOids.includes(id) && !($("#generalIOUploadFile").is(':visible'))) {
                    //we need download the files

                    var resourcesIn = data.nodes.get(id).resourcesIn;
                    for (var j = 0; j < resourcesIn.length; ++j) {
                        downloadImage(resourcesIn[j].urlReturnFileName);
                    }

                    $('#generalIOUploadFile').modal('toggle');
                    var resourceOut = uploadFileGeneralResourceOuts[k];
                    var html = "";
                    for (var j = 0; j < resourceOut.length - 1; ++j) {
                        html += resourceOut[j].urlReturnFileName + ",";
                    }
                    html += resourceOut[resourceOut.length - 1].urlReturnFileName;
                    $('#generalUploadFilesNeeded').html(html);
                    $('#generalUploadFilesID').val(id);
                }
            }
        }
    });
}