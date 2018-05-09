var resourcePage_Libraries = [];
var resourcePage_resources = [];

function initialResourcesPage() {
//        console.log("initialResourcesPage");
        //resize
        $('#resourceRight').resizable({
                handles: 'w',
                maxWidth: 1500,
                minWidth: 345,
                resize: function (event, ui) {
                        var currentWidth = ui.size.width;
                        currentWidth = currentWidth + 0.1;
                        $(this).width(currentWidth);
                        
                        var leftWidth = $('#resourcesPage').width() - currentWidth;
                        $('#resourceLeft').css('width', leftWidth);
                },
                stop: function (event, ui) {
                        console.log(ui);
                        var currentWidth = ui.element.width();
                        currentWidth = currentWidth;
                        var p = currentWidth / $('#resourcesPage').width() * 100;
                        $(this).css('width', p + '%');
                        $(this).css('left', 100 - p + '%');
                        $('#resourceLeft').css('width', 100 - p + '%');
                        
                }
        });
        //tree search
        var to = false;
        $('#resourcesSearch').keyup(function () {
                if (to) {
                        clearTimeout(to);
                }
                to = setTimeout(function () {
                        var v = $('#resourcesSearch').val();
                        
                        var active = $("ul#resourcesTab li.active");
                        var href = active.find("a").attr("href");
                        
                        if (href === "#resourcesPageResources") {
                                $('#myjstreeResource').jstree(true).search(v);
                        } else {
                                $('#myjstreeFunctions').jstree(true).search(v);
                        }
                        
                        
                }, 250);
        });
        
        
        
        
        
}

function resourcePreviewClick() {
        if ($('#resourcePreview .ui-accordion-content').hasClass('ui-accordion-content-active')) {
                $('#testshow').css("overflow", "auto");
                var id = $('#myjstreeResource').jstree('get_selected')[0];
                var d = searchItem(resourcePage_resources, id);

                console.log(baseurl + "resource/preview?fileURL=" + encodeURI(d.location + d.fileName));

                $.ajax({
                        url: baseurl + "resource/preview?fileURL=" + encodeURI(d.location + d.fileName)
                }).then(function (data) {
                        console.log(data);
                        if (data !== "file too large") {
                                var innerhtml = generatePreview(data);
                                $('#resourcePreviewContent').html(innerhtml);
                        } else {
                                $('#downloadFile').modal("toggle");
                        }
                });
        } else {
                $('#testshow').css("overflow", "hidden");
        }
}


function searchItem(data, id) {
        var item = null;
        if (data === undefined) return item;
        for (var i = 0; i < data.length; ++i) {
               if (data[i].id == id) {
                       return data[i];
               } 
               var tmp = searchItem(data[i].children, id);
               if (tmp !== null) return tmp;
        }
        return item;
}


function downloadResourceFile() {
         var id = $('#myjstreeResource').jstree('get_selected')[0];
        var d = searchItem(resourcePage_resources, id);
        var fileName = d.fileName;
        downloadImage(fileName);
        $('#downloadFile').modal("toggle");
        
         $('#resourcePreview').accordion( "option", "active", false);
}