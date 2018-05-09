//menu functions
function newFun() {
    alert("Hello! new function");
}

function openFun() {
    alert("Hello! open function");
}


function run() {
    if (data.nodes.length === 0) {
        showErrorMessage("workflow is empty.");
        return;
    }

    if (networkErrorTypeCheck()) {
        showErrorMessage("Please fix all errors first.");
        return;
    }

    enAbleResultPage();


    clearHighlights(data.nodes);
    $('#processmessage').html("Running...");
    $('a[href="#menu1"]').trigger('click');

    initialResultNetwork();

}

function networkErrorTypeCheck() {//true has problem false good
    var ids = data.nodes.getIds();
    for (var i = 0; i < ids.length; ++i) {
        var node = data.nodes.get(ids[i]);
        var image = node.image;
        if (image.includes("type") || image.includes("error")) {
            return true;
        }
    }
    return false;
}

function enAbleResultPage() {
    $("#myTabs li:eq(1)").removeClass("disabled");
    $("#myTabs li:eq(1) a").attr("data-toggle", "tab");
}

function disableResultPage() {
    $("#myTabs li:eq(1)").addClass("disabled");
    $("#myTabs li:eq(1) a").removeAttr("data-toggle");
}

function clearNetwork() {
    //we only clear here
    localStorage.removeItem('exampleWorkflow');
    $("#loadedHTMLworkflowname").html("");
    $("#loadedworkflowname").html("");
    console.log("clearNetwork");
    data.nodes.clear();
    data.edges.clear();
    disableResultPage();
}

function download() {
    var fileName = $('#saveFileName').val();
    var graph = $("#modalData").val();
    if ($('input[type=radio][name=wftype]:checked').val() == 'workflow') {
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(graph));
        pom.setAttribute('download', fileName);

        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        } else {
            pom.click();
        }
    } else {//submit to our server 
        var url = baseurl + 'module/add';
        var startNode = $('#modalStartNode').val().split(":")[1];
        var endNode = $('#modalEndNode').val().split(":")[1];
        var description = $('#modalDescription').val();
        var data = JSON.stringify({fileName: fileName, startNode: startNode, endNode: endNode, description: description,
            graph: JSON.parse(graph)});
        $.ajax({
            type: "POST",
            url: url,
            // The key needs to match your method's input parameter (case-sensitive).
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log("Done");
            }, failure: function (errMsg) {
                alert(errMsg);
            }
        });
    }
    $('#myModal').modal('toggle');
}

var readFileContent = "";
function upLoad(evt) {
    var file = evt.target.files[0];
    console.log(file);
    if (file) {
        var r = new FileReader();
        r.onload = function (e) {
            readFileContent = e.target.result;
            console.log(readFileContent);
        };
        r.readAsText(file);
    }
}

function loadExampleFromFile() {
    var readFile = JSON.parse(readFileContent);
    console.log(readFile);
    data.nodes.clear();
    data.edges.clear();
    data.nodes.add(JSON.parse(JSON.stringify(readFile.nodes)));
    data.edges.add(JSON.parse(JSON.stringify(readFile.edges)));
    $('#openFile').modal('toggle');


    disableResultPage();
}

function about() {
    $('#about').modal('toggle');
}

function help() {
    $('#help').modal('toggle');
}

//var menuLoad = 0;
//function menuLoadExample() {
//        if (menuLoad === 0) {
//                console.log(1);
//                $("#nonExmaplePage").hide();
//                $("#examplePage").show();
//        } else {
//                console.log(2);
//                $("#nonExmaplePage").show();
//                $("#examplePage").hide();
//        }
//        menuLoad = (menuLoad + 1) % 2;
//}        

function menuLoadExample() {
    $("#nonExmaplePage").toggle();

    if ($("#nonExmaplePage").is(":visible")) {
        $("#menuLabel").html("<i class='fas fa-cubes'></i>Examples");
    } else {
        $("#menuLabel").html("<i class='fas fa-microchip'></i>Queries");
    }

    $("#examplePage").toggle();

}


function signIn() {
    $('#signInPage').modal('toggle');
//    var index = $('a[data-toggle="tab"]').eq(2).;
//    console.log(index);

}

function signInButton() {
    var username = $('#signUserName').val();
    var password = $('#signPassword').val();
    $('#visflowAdminPage').hide();
    $.ajax({
        url: baseurl + "admin/login?username=" + username + "&organization=" + newOrg + "&password=" + password, //Server script to process data
        type: 'GET',
        // Form data
        success: function (data) {
            console.log(data);
            if (data.indexOf('permission') != -1) {
                alert('You dont have permission yet!');
            } else if (data.indexOf('password') != -1) {
                alert('username or password not right!');
            } else {
                localStorage.setItem('user', username);
                $('#signUserNameLabel').html(username);
                $('#signInPage').modal('toggle');
                $('#signInbutton').hide();
                $('#signInfo').show();
                if (username.indexOf('dblabuofi@gmail.com') != -1) {
                    $('#visflowAdminPage').show();
                }
                
            }
        },
        error: function (data) {
            alert('Something wrong!');
        }
    });
}

function signOut() {
    $('#signInbutton').show();
    $('#signInfo').hide();
    $('#visflowAdminPage').hide();
    localStorage.removeItem('user');
}

function openAccountRegisterPage() {
    $('#signInPage').modal('toggle');
    $('#accountRegisterPage').modal('toggle');
}

function registerButton() {
    var username = $('#newUserName').val();
    var newOrg = $('#newOrg').val();
    var newFirst = $('#newFirstName').val();
    var newLast = $('#newLastName').val();
    var newDes = $('#newDesignation').val();
    var password = $('#newPassword').val();
    var password1 = $('#newPassword1').val();
    if (password != password1) {
        alert('password not the same');
        return;
    } 

    $.ajax({
        url: baseurl + "admin/register?username=" + username 
                + "&organization=" + newOrg 
                + "&first=" + newFirst 
                + "&last=" + newLast 
                + "&des=" + newDes 
                + "&password=" + password, //Server script to process data
        type: 'GET',
        // Form data
        success: function (data) {
            console.log(data);
            if (data.indexOf('Duplicat') != -1) {
                alert('The username has taken by another user, please change another one');
            } else {
                alert('You have not been approved.');
                $('#accountRegisterPage').modal('toggle');
            }
        },
        error: function (data) {
            alert('User Name has taken, using another one');
        }
    });




}
