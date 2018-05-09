/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var libraryData = [];
function generateUpdateLibrary() {
    colorFun.reset();
    var innerhtml = "<table class='table table-bordered table-hover table-sm wholewidth' ><tbody>";
    innerhtml += "<tr><td width='10%'><label>Match Type:</label></td>";
    innerhtml += "<td><div id='radiogroup'><input type='radio' checked value='active' name='matchtype'><label>Active Matching</label><input type='radio' value='direct'  name='matchtype'><label>Direct Matching</label></div></td>";
    innerhtml += "<tr id ='topkrow'><td><label>Top-k Matching k:</label></td>";
    innerhtml += "<td><select class='form-control' id='dataupdateselect'><option val='1'>1</option><option value='2'>2</option><option value='3' selected>3</option><option value='4'>4</option><option value='5'>5</option><option value='51'>return all</option></select></td></tr>";
    innerhtml += "<tr><td><label class='label label-primary'>Filter:</label></td><td>";
//        innerhtml += "<input id='libraryupdatewebservices'  class='form-control'></td></tr>";
    innerhtml += "<div id='querytree' style='width: 100px;'></div></td></tr>";
    innerhtml += "<tr><td colspan='2'><button class='btn btn-info' onclick='callLibraryWS()'>Search</button></td><tr>";
    innerhtml += "</tbody></table>";

    innerhtml += "<label class='label label-primary'>Results:</label>";
    innerhtml += "<div id='libraryupdatewebservicesshow'></div>";
    innerhtml += "<img class='hideit' src='image/loading.gif' style='position:relative;left:46%;height:5vh;width:5vh;'/>";
    innerhtml += "<br>";
    innerhtml += "<button class='btn btn-info' onclick='updateLibrary()'>Update Library</button>";

    return innerhtml;
}

function callLibraryWS() {

//        var queryTree = returnQueryTree("querytree");
//
//        if (queryTree === undefined || queryTree === null) {
//                resources = [];
//                generateLibraryWSInfo([]);
//                return;
//        }
//        
//        $('#libraryupdatewebservicesshow').html("");
//        $('#libraryupdatewebservicesshow').next().show();
//        
//        var url = baseurl + "recommend/libraryWS?queryTree=" + JSON.stringify(queryTree)
//                + "&matchType=" + $("input[name='matchtype']:radio:checked").val()
//                + "&topk=" + $("#dataupdateselect option:selected").val();
//        console.log(url);
//        $.ajax({
//                url: url,
//        }).then(function (data) {
//                $('#libraryupdatewebservicesshow').next().hide();
//                libraryData = JSON.parse(data);
//                console.log(libraryData);
//                generateLibraryWSInfo(libraryData);
//                bindLibraryFunctions();
//        });

    var queryTree = returnQueryTree('querytree');
    //currently we only allow one libraries running on this
    if (queryTree !== undefined && queryTree !== null) {
        $('#libraryupdatewebservicesshow').html("");
        $('#libraryupdatewebservicesshow').next().show();
        var username = localStorage.getItem("user");
//                var url = baseurl + "recommend/functionWS?queryTree=" + JSON.stringify(queryTree)
        var url = baseurl + "recommend/functionWS?queryTree=" + encodeURI(JSON.stringify(queryTree))
                + "&matchType=" + $("input[name='matchtype']:radio:checked").val()
                + "&topk=" + $("#dataupdateselect option:selected").val()
                + "&username=" + username
                + "&library=";
        console.log(url);
        $.ajax({
            url: url
        }).then(function (data) {
            $('#libraryupdatewebservicesshow').next().hide();
            data = JSON.parse(data);
            functions = data;
//                        console.log(data);
            generateFunctionInfoLibrary(data, 'libraryupdatewebservicesshow');
        });
    } else {
        var data = [];
        generateFunctionInfoLibaray(data, 'libraryupdatewebservicesshow');
    }

}

function generateLibraryWSInfo(data) {
    var innerhtml = generateUpdateLibraries(data);

    $('#libraryupdatewebservicesshow').html(innerhtml);
}

function updateLibrary() {
    console.log('updateLibrary');
    var queryTree = returnQueryTree("querytree");
    curData.label = '';

    if (queryTree !== undefined || queryTree !== null) {
        //select only one of them
        for (var i = 0; i < functions.length; ++i) {
            if ($("[id='analyticsFunction" + i + "']").is(':checked')) {

                if (curData.label.length > 0 && curData.label != functions[i].aggregateName) {
                    alert("Library Icon requires all resources from the the aggregate resources");
                    return;
                } else {
                    curData.label = functions[i].aggregateName;
                    curData.libraries.push(JSON.parse(JSON.stringify(functions[i])));
                }
            }
        }

        data.nodes.update(curData);
        updateNodes(curData);
        generateInnerhtml();
        gotoNodeInfo();
    }

}

function removeLibraryLibraries(index) {
    curData.libraries.splice(index, 1);
    data.nodes.update(curData);
    updateNodes(curData);
    generateInnerhtml();
}

function bindLibraryFunctions() {
//        console.log('bindLibraryFunctions');
//    $("#libraryupdatewebservices").unbind('keyup');
//    $('#libraryupdatewebservices').keyup(function (event) {
//        callLibraryWS();
//    });

    $("#radiogroup input").change(function () {
        if ($(this).val() === 'direct') {
            $('#topkrow').hide();
        } else {
            $('#topkrow').show();
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

//function changeLibraryUpdateGlyphicon(index) {
//        if ($("[id='libraryupdateglyphicon"+index+"']").hasClass("glyphicon-chevron-right")) {
//                $("[id='libraryupdateglyphicon"+index+"']").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");
//
//        } else {
//                $("[id='libraryupdateglyphicon"+index+"']").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
//        }
//}


//function changeLibraryGlyphicon(index) {
//        if ($("[id='libraryglyphicon"+index+"']").hasClass("glyphicon-chevron-right")) {
//                $("[id='libraryglyphicon"+index+"']").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");
//
//        } else {
//                $("[id='libraryglyphicon"+index+"']").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
//        }
//}