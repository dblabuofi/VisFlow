function LoadExample(file, agrument, workflowName) {
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(JSON.stringify(eval("example" + file).nodes)));
        data.edges.add(JSON.parse(JSON.stringify(eval("example" + file).edges)));
        if (eval("example" + file).globalmatch == undefined) {
            data.globalmatch = [];
        } else {
            data.globalmatch = JSON.parse(JSON.stringify(eval("example" + file).globalmatch));
        }
        if (agrument == true) {
                menuLoadExample();
                $('a[href="#home"]').trigger('click');
        }
        localStorage.setItem('exampleWorkflow', workflowName);
        
        $('#loadedHTMLworkflowname').html(workflowName);
        
//        options.physics.enabled = true;
//        network.setOptions(options);
//        var op = {offset: {x: 0, y: 0},
//                duration: 1000,
//                easingFunction: 'linear'
//        };
//        network.fit({animation: op});
//        options.physics.enabled = false;
//        network.setOptions(options);
}

function LoadExampleOne() {
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(JSON.stringify(exampleOne.nodes)));
        data.edges.add(JSON.parse(JSON.stringify(exampleOne.edges)));
}

function LoadExampleTwo(agrument) {
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(JSON.stringify(exampleTwo.nodes)));
        data.edges.add(JSON.parse(JSON.stringify(exampleTwo.edges)));
        if (agrument == true) {
                $('a[href="#home"]').trigger('click');
        }
}

function LoadExampleThree(agrument) {
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(JSON.stringify(exampleThree.nodes)));
        data.edges.add(JSON.parse(JSON.stringify(exampleThree.edges)));

        if (agrument == true) {
                $('a[href="#home"]').trigger('click');
        }

}

function LoadExampleFour(agrument) {
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(JSON.stringify(exampleFour.nodes)));
        data.edges.add(JSON.parse(JSON.stringify(exampleFour.edges)));

        if (agrument == true) {
                $('a[href="#home"]').trigger('click');
        }

}


function LoadExampleFive(agrument) {
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(JSON.stringify(exampleFive.nodes)));
        data.edges.add(JSON.parse(JSON.stringify(exampleFive.edges)));
             if (agrument == true) {
                $('a[href="#home"]').trigger('click');
        }
}

function LoadExampleSix(agrument) {
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(JSON.stringify(exampleSix.nodes)));
        data.edges.add(JSON.parse(JSON.stringify(exampleSix.edges)));
             if (agrument == true) {
                $('a[href="#home"]').trigger('click');
        }
}

function LoadExampleSeven(agrument) {
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(JSON.stringify(exampleSeven.nodes)));
        data.edges.add(JSON.parse(JSON.stringify(exampleSeven.edges)));
             if (agrument == true) {
                $('a[href="#home"]').trigger('click');
        }
}

function LoadExampleEight(agrument) {
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(JSON.stringify(exampleEight.nodes)));
        data.edges.add(JSON.parse(JSON.stringify(exampleEight.edges)));
             if (agrument == true) {
                $('a[href="#home"]').trigger('click');
        }
}

function LoadExampleNine(agrument) {
        data.nodes.clear();
        data.edges.clear();
        data.nodes.add(JSON.parse(JSON.stringify(exampleNine.nodes)));
        data.edges.add(JSON.parse(JSON.stringify(exampleNine.edges)));
             if (agrument == true) {
                $('a[href="#home"]').trigger('click');
        }
}