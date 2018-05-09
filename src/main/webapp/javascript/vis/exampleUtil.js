function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            } else {
                error(xhr);
            }
        }
    };
    xhr.open('GET', path, true);
    xhr.send();
}

function mapShape(key) {
    var myMap = new Map();
    myMap.set("process", "big box");
    myMap.set("table", "database");
    myMap.set("slice", "ellipse");
    myMap.set("join", "triangleDown");
    myMap.set("if", "diamond");
    myMap.set("screen", "square");


    return myMap.get(key);
}

function getScaleFreeNetwork() {
    var nodes = new vis.DataSet();
    var edges = new vis.DataSet();

    var nodeID = 0;
    var edgeID = 0;
//    nodes.add({
//        id: nodeID++,
//        label: 'process',
//        type: 'process',
//        processname: 'test one',
//        shape: 'big box'
//    });
//    nodes.add({
//        id: nodeID++,
//        label: 'table',
//        type: 'table',
//        tablename: 'test table',
//        alias: 'first table',
//        columns: [{columnname: 'start', columntype: 'int'}, {columnname: 'miRNA', columntype: 'string'}],
//        shape: 'database'
//    });
//    nodes.add({
//        id: nodeID++,
//        label: 'slice',
//        type: 'slice',
//        shape: 'elipse'
//    });
//    nodes.add({
//        id: nodeID++,
//        label: 'join',
//        type: 'join',
//        shape: 'triangleDown'
//    });
//    nodes.add({
//        id: nodeID++,
//        label: 'if',
//        type: 'if',
//        shape: 'diamond'
//    });
//    nodes.add({
//        id: nodeID++,
//        label: 'screen',
//        type: 'screen',
//        shape: 'square'
//    });
//
//
//    //edges
//    edges.add({
//        id: edgeID++,
//        from: 0,
//        to: 1,
//        arrows: 'to'
//    });
//    edges.add({
//        id: edgeID++,
//        from: 1,
//        to: 2,
//        arrows: 'to'
//    });
//    edges.add({
//        id: edgeID++,
//        from: 2,
//        to: 3,
//        arrows: 'to'
//    });
//    edges.add({
//        id: edgeID++,
//        from: 3,
//        to: 4,
//        arrows: 'to'
//    });
//    edges.add({
//        id: edgeID++,
//        from: 4,
//        to: 5,
//        arrows: 'to'
//    });

    return {nodes: nodes, edges: edges, globalmatch:[]};
}
