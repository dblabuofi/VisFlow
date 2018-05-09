function initialRegisterPage() {
    console.log("initialRegisterPage");

//        var username = localStorage.getItem("username");
//        console.log(username);

    registerTypeChange();
    registerResourceWrapperChange();
    $('progress').hide();
    //change action
//        $('#uploadFileForm').attr("action", baseurl + "resource/uploadresource");

//        $('#formsubmit').click(function () {
//
//
//        });



    $('#uploadForm').validate({// initialize the plugin
        rules: {
            resourceName: {
                required: true,
            },
        }, errorPlacement: function (label, element) {
            label.css('color', 'red');
            label.insertAfter(element);
        },
        submitHandler: function (form) { // for demo
            console.log("RegisterUpdateResource");

            var schema = returnQueryTree('schemaTree');
            console.log(schema);
            var attributeList = [];

            $("#registerUpdateAttributesTable tbody tr").each(function () {
                var attr = {};
                attr.name = $(this).find("td:eq(0) input").val();
                attr.value = $(this).find("td:eq(1) input").val();
                attr.required = $(this).find("td:eq(2) select").val();
                attr.shown = $(this).find("td:eq(3)  select").val();
                attr.attributeType = $(this).find("td:eq(4)  select").val();
                attr.example = $(this).find("td:eq(5) input").val();
                attr.description = $(this).find("td:eq(6) input").val();
                attributeList.push(attr);
            });
            var username = localStorage.getItem("user");
            var formData = new FormData($('#uploadForm')[0]);
            formData.append("schema", JSON.stringify(schema));
            formData.append("attributeList", JSON.stringify(attributeList));
            formData.append("username", username);
            console.log(formData);
            $.ajax({
                url: baseurl + "resource/uploadresource", //Server script to process data
                type: 'POST',
                xhr: function () {  // Custom XMLHttpRequest
                    var myXhr = $.ajaxSettings.xhr();
                    if (myXhr.upload) { // Check if upload property exists
                        myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // For handling the progress of the upload
                    }
                    return myXhr;
                },
//                        //Ajax events
                beforeSend: function () {
                    $('#resourcesblock').hide();
                    $('progress').show();
                },
                success: function (response) {
                    $('progress').hide();
                    $('#resourcesblock').show();
                    $('#uploadForm')[0].reset();
                    registerTypeChange();
                    registerResourceWrapperChange();
                    updateAggregateNames();
                },
                error: function (response) {
                    $('#resourcesblock').show();
                    console.log(response);
                },
                // Form data
                data: formData,
                //Options to tell jQuery not to process data or worry about content-type.
                cache: false,
                contentType: false,
                processData: false
            });

        }});

    $('#updateFormLibrary').validate({// initialize the plugin
        rules: {
            libraryName: {
                required: true,
            },
            libraryType: {
                required: true,
            },
            organization: {
                required: true,
            },
            description: {
                required: true
            }
        }, errorPlacement: function (label, element) {
            label.css('color', 'red');
            label.insertAfter(element);
        },
        submitHandler: function (form) { // for demo
            var formData = new FormData($('#updateFormLibrary')[0]);
            var username = localStorage.getItem("user");
            formData.append("username", username);

            $.ajax({
                url: baseurl + "resource/uploadlibrary", //Server script to process data
                type: 'POST',
                xhr: function () {  // Custom XMLHttpRequest
                    var myXhr = $.ajaxSettings.xhr();
                    if (myXhr.upload) { // Check if upload property exists
                        myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // For handling the progress of the upload
                    }
                    return myXhr;
                },
//                        //Ajax events
                beforeSend: function () {
                    $('#resourcesblock').hide();
                    $('progress').show();
                },
                success: function (response) {
                    $('progress').hide();
                    $('#resourcesblock').show();
                    updateAggregateNames();
                },
                error: function (response) {
                    $('#resourcesblock').show();
                    console.log(response);
                },
                // Form data
                data: formData,
                //Options to tell jQuery not to process data or worry about content-type.
                cache: false,
                contentType: false,
                processData: false
            });

        }});

    $('#uploadFormFunction').validate({// initialize the plugin
        rules: {
            functionName: {
                required: true
            },
        }, errorPlacement: function (label, element) {
            label.css('color', 'red');
            label.insertAfter(element);
        },
        submitHandler: function (form) { // for demo
            console.log("RegisterUpdateFunction");

            var attributeList = [];

            $("#registerUpdateFunctionAttributeTable tbody tr").each(function () {
                var attr = {};
                attr.name = $(this).find("td:eq(0) input").val();
                attr.value = $(this).find("td:eq(1) input").val();
                attr.required = $(this).find("td:eq(2) select").val();
                attr.shown = $(this).find("td:eq(3)  select").val();
                attr.attributeType = $(this).find("td:eq(4)  select").val();
                attr.example = $(this).find("td:eq(5) input").val();
                attr.description = $(this).find("td:eq(6) input").val();
                attributeList.push(attr);
            });

            var formData = new FormData($('#uploadFormFunction')[0]);
            formData.append("attributeList", JSON.stringify(attributeList));
            var username = localStorage.getItem("user");
            formData.append("username", username);

            $.ajax({
                url: baseurl + "resource/uploadfunction", //Server script to process data
                type: 'POST',
                xhr: function () {  // Custom XMLHttpRequest
                    var myXhr = $.ajaxSettings.xhr();
                    if (myXhr.upload) { // Check if upload property exists
                        myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // For handling the progress of the upload
                    }
                    return myXhr;
                },
//                        //Ajax events
                beforeSend: function () {
                    $('#resourcesblock').hide();
                    $('progress').show();
                },
                success: function (response) {
                    $('progress').hide();
                    $('#functionsblock').show();
                    $('#uploadFormFunction')[0].reset();
                    updateAggregateNames();
                },
                error: function (response) {
                    $('#functionsblock').show();
                    console.log(response);
                },
                // Form data
                data: formData,
                //Options to tell jQuery not to process data or worry about content-type.
                cache: false,
                contentType: false,
                processData: false
            });

        }});

    $('#updateFormExample').validate({// initialize the plugin
        rules: {
            example: {
                required: true
            }
        }, errorPlacement: function (label, element) {
            label.css('color', 'red');
            label.insertAfter(element);
        },
        submitHandler: function (form) { // for demo
            var formData = new FormData($('#updateFormExample')[0]);
            $.ajax({
                url: baseurl + "resource/uploadExample", //Server script to process data
                type: 'POST',
                xhr: function () {  // Custom XMLHttpRequest
                    var myXhr = $.ajaxSettings.xhr();
                    if (myXhr.upload) { // Check if upload property exists
                        myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // For handling the progress of the upload
                    }
                    return myXhr;
                },
//                        //Ajax events
                beforeSend: function () {
                    $('#resourcesblock').hide();
                    $('progress').show();
                },
                success: function (response) {
                    $('progress').hide();
                    $('#resourcesblock').show();
                    updateAggregateNames();
                },
                error: function (response) {
                    $('#resourcesblock').show();
                    console.log(response);
                },
                // Form data
                data: formData,
                //Options to tell jQuery not to process data or worry about content-type.
                cache: false,
                contentType: false,
                processData: false
            });

        }});

    bindRegisterFunction();
    updateAggregateNames();
}

function updateAggregateNames() {
    setTimeout(function () {
        $.ajax({
            url: baseurl + "agg/getAll", //Server script to process data
            type: 'GET',
            success: function (response) {
                var html = "";
                $('#aggnames').html(html);
                response = JSON.parse(response);

                for (var i = 0; i < response.length; ++i) {
                    html += "<option value='" + response[i] + "'>";
                }

                $('#aggnames').append(html);
            },
            error: function (response) {
                console.log(response);
            },
        });

        $.ajax({
            url: baseurl + "agg/fungetAll", //Server script to process data
            type: 'GET',
            success: function (response) {
                var html = "";
                $('#aggfunnames').html(html);
                response = JSON.parse(response);

                for (var i = 0; i < response.length; ++i) {
                    html += "<option value='" + response[i] + "'>";
                }

                $('#aggfunnames').append(html);
            },
            error: function (response) {
                console.log(response);
            },
        });
    }, 0);
}

function progressHandlingFunction(e) {
    if (e.lengthComputable) {
        $('progress').attr({value: e.loaded, max: e.total});
    }
}

function registerTypeChange() {
    $('#resourcesblock').hide();
    $('#librariesblock').hide();
    $('#functionsblock').hide();
    $('#examplesblock').hide();

    var value = $('#registerType').val();
    if (value === "R") {
        $('#resourcesblock').show();

        $('#schemaTree').jstree({
            "core": {
                "animation": 0,
                "dblclick_toggle": false,
                "check_callback": function (op, node, par, pos, more) {
                    if (op === "delete_node") {
                        if (node.parent === '#') {
                            return false;
                        }
                    }
                    return true;
                },
                "themes": {
                    "icons": false},
                'data': [
                    {"text": " "}
                ]
            },
            "types": {
                "#": {
                    "max_children": 10,
                    "max_depth": 10,
                    "valid_children": ["root"]
                },
                "root": {
                    "icon": "/static/3.3.2/assets/images/tree_icon.png",
                    "valid_children": ["default"]
                },
                "default": {
                    "valid_children": ["default", "file"]
                },
                "file": {
                    "icon": "glyphicon glyphicon-file",
                    "valid_children": []
                }
            },
            "plugins": [
                "contextmenu", "dnd", "search",
                "state", "types", "wholerow"
            ]
        });
        $('#schemaTree').bind("dblclick.jstree", function (event) {
            var node = $("#schemaTree").jstree("get_selected");
            $('#schemaTree').jstree("edit", node, node.text, editCallBackSchema);
        });
        registerResourceTypeChange();

    } else if (value === "L") {
        $('#librariesblock').show();
    } else if (value === "F") {
        $('#functionsblock').show();
        bindRegisterFunction();
    } else if (value === "E") {
        $('#examplesblock').show();
    }

}

function registerResourceTypeChange() {
    var value = $('#resourcetype').val();
    if (value === "CSV" || value === "XML" || value === "Other") {
        $("#registerResourceRemote").hide();
        $("#registerResourceSQLTable").hide();
        $("#registerResourceLocal").show();
    } else if (value == "SQLTable") {
        $("#registerResourceLocal").hide();
        $("#registerResourceRemote").hide();
        $("#registerResourceSQLTable").show();
    } else {
        $("#registerResourceLocal").hide();
        $("#registerResourceSQLTable").hide();
        $("#registerResourceRemote").show();
        bindRegisterFunction();
    }
}

function loadFromFile() {
    console.log($('#uploadFile').val());
    $('#resourceblocklocation').val($('#uploadFile').val());
//        $('#resourceblocklocation').val($('#uploadFile').val().substring($('#uploadFile').val().lastIndexOf('\\') + 1));
    $('#openblockFile').modal('toggle');
}

function registerAddRow(id) {
    var innerhtml = "<tr>";

    innerhtml += "<td><input class='form-control' ></td>";
    innerhtml += "<td><input class='form-control'></td>";
    innerhtml += "<td>";
    innerhtml += "<select class='form-control' >" +
            "<option value='TRUE' selected >TRUE</option>" +
            "<option value='FALSE' >FALSE</option>" +
            "</select>";
    innerhtml += "</td>";
    innerhtml += "<td>";
    innerhtml += "<select class='form-control' >" +
            "<option value='TRUE' selected >TRUE</option>" +
            "<option value='FALSE' >FALSE</option>" +
            "</select>";
    innerhtml += "</td>";
    innerhtml += "<td>";
    innerhtml += "<select class='form-control' id=''>" +
            "<option value='String' >String</option>" +
            "<option value='Integer' >Integer</option>" +
            "<option value='Double' >Double</option>" +
            "<option value='Boolean' >Boolean</option>" +
            "</select>";
    innerhtml += "</td>";
    innerhtml += "<td><input class='form-control'></td>";
    innerhtml += "<td><input class='form-control'></td>";
    innerhtml += "<td><span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;'></span></a></td>";
    innerhtml += "</tr>";
    $("[id='" + id + "']").append(innerhtml);
    bindRegisterFunction();
}


function bindRegisterFunction() {

    $('#inputUploadFunction').on("change", function (event) {
        $('#inputUploadFunctionSelected').val($('#inputUploadFunction').val().substring($('#inputUploadFunction').val().lastIndexOf('\\') + 1));
    });
    $('#inputUpload').on("change", function (event) {
        $('#inputUploadSelected').val($('#inputUpload').val().substring($('#inputUpload').val().lastIndexOf('\\') + 1));
    });

    $(".tableRemoveSpan").unbind('click');
    $('.tableRemoveSpan').click(function () {
        $(this).closest('tr').remove();
    });

//    $("[id='updateResReturnFileType']").chained("[id='updateResMethodReturnType']");

}

function RegisterUpdateResource() {
    console.log("RegisterUpdateResource");

    var schema = returnQueryTree('schemaTree');
    var attributeList = [];

    $("#registerUpdateAttributesTable tbody tr").each(function () {
        var attr = {};
        attr.name = $(this).find("td:eq(0) input").val();
        attr.value = $(this).find("td:eq(1) input").val();
        attr.required = $(this).find("td:eq(2) select").val();
        attr.shown = $(this).find("td:eq(3)  select").val();
        attr.attributeType = $(this).find("td:eq(4)  select").val();
        attr.example = $(this).find("td:eq(5) input").val();
        attr.description = $(this).find("td:eq(6) input").val();
        attributeList.push(attr);
    });

    var formData = new FormData($('#uploadForm')[0]);
    formData.append("schema", JSON.stringify(schema));
    formData.append("attributeList", JSON.stringify(attributeList));
    console.log(formData.getAll("resourceType"));
    $.ajax({
        url: baseurl + "resource/uploadresource", //Server script to process data
        type: 'POST',
        xhr: function () {  // Custom XMLHttpRequest
            var myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) { // Check if upload property exists
                myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // For handling the progress of the upload
            }
            return myXhr;
        },
//                        //Ajax events
        beforeSend: function () {
            $('#resourcesblock').hide();
            $('progress').show();
        },
        success: function (response) {
            $('progress').hide();
            $('#resourcesblock').show();
        },
        error: function (response) {
            $('#resourcesblock').show();
            console.log(response);
        },
        // Form data
        data: formData,
        //Options to tell jQuery not to process data or worry about content-type.
        cache: false,
        contentType: false,
        processData: false
    });


}

function editCallBackSchema(node, status, cancelled) {
    var parent = $("#schemaTree").jstree("get_parent", node);
    if (parent === "#" && node.text != " ") {
        node.text = node.text.replace(/  +/g, "");
        var children = $('#schemaTree').jstree("get_children_dom", node);
        var flag = true;
        for (var i = 0; i < children.length; ++i) {
            var text = $(children[i]).find(".jstree-anchor").text();
            if (text === " ") {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            $('#schemaTree').jstree("create_node", node, " ", "last", function (newNode) {
//                                console.log('node called');
                $('#schemaTree').jstree("open_node", node);
                setTimeout(function () {
                    $('#schemaTree').jstree("edit", newNode, newNode.text, editCallBackSchema);
                }, 100);
            });
        }
    } else if (node.text != " ") {
        var children = $('#schemaTree').jstree("get_children_dom", parent);
        var flag = true;
        for (var i = 0; i < children.length; ++i) {
            var text = $(children[i]).find(".jstree-anchor").text();
            if (text === " ") {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            $('#schemaTree').jstree("create_node", parent, " ", "last", function (newNode) {
//                                console.log('I am called');
                setTimeout(function () {
                    $('#schemaTree').jstree("edit", newNode, newNode.text, editCallBackSchema);
                }, 100);
            });
        }
    }
}


function registerResourceWrapperChange() {
    var value = $('#updateResReturnFilewrapper').val();
    if (value === "textTableWrapper") {
        $("#textTableWrapper").show();
        $("#jsonToxmlWrapper").hide();
        $("#myTableExactor").hide();
    } else if (value === "jsonToxmlWrapper") {
        $("#textTableWrapper").hide();
        $("#jsonToxmlWrapper").show();
        $("#myTableExactor").hide();

    } else if (value === "myTableExactor") {
        $("#textTableWrapper").hide();
        $("#jsonToxmlWrapper").hide();
        $("#myTableExactor").show();
    }
    bindRegisterFunction();
}
