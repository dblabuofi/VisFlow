var resultNetwork = null;
var resultData = getScaleFreeNetwork();
var myGetStatusInterval = null;

function initialResultNetwork() {
    var workflowName = localStorage.getItem('exampleWorkflow');
    if (workflowName === undefined || workflowName === null || workflowName === 'undefined') {
        $('#loadedworkflowname').html("");
    } else {
        $('#loadedworkflowname').html(workflowName);
    }
    
    $('#verticalbuton2info').text("Running Information:");
    $("#processmessage").html("");
    $("#processmessage").show();
    $('#pathimage').addClass('hideit');
    $('#outputshow').html("");
    $('#curMap').hide();
    $('#oldMap').hide();
    $('#myD3Visual').hide();
    destroy(resultNetwork);
    // create a network
    var container = document.getElementById('mynetworkresult');
    //        console.log(container);
    var resultoptions = {
        locale: 'en',
        physics: {
            "enabled": false
            //                        "enabled": true 
        },
        edges: {
            smooth: {
                type: 'continuous'
            }
        },
        interaction: {
            dragNodes: false,
            dragView: true,
            selectConnectedEdges: false,
            selectable: false
        }
    };
    resultData.nodes.clear();
    resultData.edges.clear();
    data.nodes.forEach(function(item) {
        resultData.nodes.add(JSON.parse(JSON.stringify(item)));
    });
    data.edges.forEach(function(item) {
        resultData.edges.add(JSON.parse(JSON.stringify(item)));
    });
    console.log(resultData);
    //testing
    //        resultData.nodes.clear();
    //        resultData.edges.clear();
    //        resultData.nodes.add(JSON.parse(JSON.stringify(exampleFour.nodes)));
    //        resultData.edges.add(JSON.parse(JSON.stringify(exampleFour.edges)));
    //testing done

    resultNetwork = new vis.Network(container, resultData, resultoptions);
    //        console.log(network.getViewPosition());

    var points = [];
    resultData.nodes.forEach(function(item) {
        points.push({
            x: item.x,
            y: item.y
        });
    });
    //add first one
    points.push(points[0]);
    //        console.log(points);
    var centerPoint = calCenterPoint(points);
    //        console.log(centerPoint);




    resultNetwork.once('afterDrawing', function() {
        resultoptions.physics.enabled = true;
        resultNetwork.setOptions(resultoptions);
        var options = {
            offset: {
                x: 0,
                y: 0
            },
            duration: 1000,
            easingFunction: 'linear'
        };
        resultNetwork.fit({
            animation: options
        });
        resultoptions.physics.enabled = false;
        resultNetwork.setOptions(resultoptions);
        //                console.log(resultNetwork.getViewPosition());

        var url = globalurl + 'graph';
        //                console.log('run');
        //                console.log(JSON.stringify({nodes: data.nodes.get(), edges: data.edges.get()}));
        
        var ids = [];
        var resourcesOuts = [];
        data.nodes.forEach(function (node) {
            console.log(node);
            if (node.type == 'IO') {
                ids.push(node.id);
                resourcesOuts.push(node.resourcesOut);
            } else if (node.type == 'nested') {
                var localNodes = getScaleFreeNetwork();
                if (node.action != undefined) {
                    localNodes.nodes.add(node.action[0].module.graph.nodes);
                    localNodes.nodes.forEach(function (node2) {//current one level
                        if (node2.type == 'IO') {
                            ids.push(node2.id);
                            resourcesOuts.push(node2.resourcesOut);
                        }
                    });
                }
            }
        });
        uploadedIOids = [];
        numberofIOs = ids.length;
        
        
        getStatus();
        myGetStatusInterval = setInterval(function() {
            getStatus();
        }, 2000);
        //printer testing
        //                clearInterval(myinterval);
        //            KEGG                
        //                var data = [{"lastNode":"Terminal","printType":"table","resourceName":"pathway.csv","tableContent":[["pathway-id"],["hsa00010"],["hsa00053"],["hsa00071"],["hsa00280"],["hsa00310"],["hsa00330"],["hsa00340"],["hsa00380"],["hsa00410"],["hsa00561"],["hsa00620"],["hsa01100"],["hsa00010"],["hsa00340"],["hsa00350"],["hsa00360"],["hsa00410"],["hsa00980"],["hsa00982"],["hsa01100"],["hsa05204"],["hsa00010"],["hsa00053"],["hsa00071"],["hsa00280"],["hsa00310"],["hsa00330"],["hsa00340"],["hsa00380"],["hsa00410"],["hsa00561"],["hsa00620"],["hsa01100"]],"id":"e8cfab8a-40a7-46e8-a5f1-01b088c57632","submit":{"values":[["pathway-id"]],"windowFunction":["PathWay"]},"numOfWins":1,"location":"C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/"}];
        ////              ICDE example
        //                var data = [{"lastNode":"Terminal","printType":"table","resourceName":"table.csv","tableContent":[["FeatureType","terms","primaryGuidingCriterion","coordinates","Paleo Coordinates","age","picture","wiki","color"],["Bashkirian","GSSP of Base Pennsylvanian","Arrow Canyon Nevada | 82.9m above the top of the Battleship Formation in the lower Bird Spring Formation | Conodont FAD Declinognathodus noduliferus","36.7333 -114.7778","36.73 -114.78","323.2","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Bashkirian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Bashkirian","#98e5cb"],["Bathonian","GSSP of Base Bathonian","Ravin du Bes Bas Auran area Alpes de Haute Provence France  | base of limestone bed RB07 |Ammonite FAD Gonolkite convergens (defines base of Zigzagiceras zigzag Zone)","43.9606 6.3153","23.17 27.6","168.3","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Bathonian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Bathonian","#b2fef1"],["Cambrian","GSSP of Base Phanerozoic","Fortune Head SE Newfoundland Canada | 2.4m above the base of Member 2 in the Chapel Island Formation | Trace fossil FAD Trichophycus pedum","47.0762 -55.8310","47.08 -55.83","541.0","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Fortunian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Cambrian","#7fcb58"],["Carboniferous","GSSP of Base Carboniferous","La Serre France | base of Bed 89 in Trench E at La Serre (but FAD now known to be at base of Bed 85)  | Conodont FAD Siphonodella sulcata IMPRECISE (GSSP discovered in 2006 to have biostratigraphic problems and can not be correlated with precision.)","43.5555 3.3573","43.56 3.36","358.9","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Tournaisian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Carboniferous","#65d8b2"],["Cenomanian","GSSP of Base Upper Cretaceous","Mount Risou Hautes Alpes France | 36 meters below the top of the Marnes Bleues Formation on the south side of Mont Risou | Planktonic foraminifer FAD Rotalipora globotruncanoides","44.3925 5.5119","37.63 12.12","100.5","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Cenomanian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Cenomanian","#b2fe4c"],["Cenozoic","GSSP of Base Cenozoic","Oued Djerfane west of El Kef Tunisia | reddish layer at the base of the 50cm thick dark boundary clay | Iridium geochemical anomaly. Associated with a major extinction horizon (dinosaurs ammonites foraminifers etc.)","36.1537 8.6486","26.86 8.67","66.0","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Danian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Cenozoic","#f1fe00"],["Cisuralian","GSSP of Base Permian","Aidaralash Creek Kazakhstan | 27m above the base of Bed 19 Aidaralash Creek | Conodont FAD of isolated-nodular morphotype of Streptognathodus wabaunsensis","50.2458 57.8914 ","50.25 57.89","298.9","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Asselian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Cisuralian","#f15865"],["Cretaceous","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Asselian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Cretaceous","#7ffe3f"],["Darriwilian","GSSP of Base Darriwilian","Huangnitang section Changshan Zhejiang Province SE China |  base of Bed AEP 184 | Graptolite FAD Undulograptus austrodentatus","28.8539 118.4897","51.67 102.09","467.3","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Darriwilian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Darriwilian","#72fea5"],["Devonian","GSSP of Base Devonian","Klonk near Prague Czech Republic | within Bed 20 Graptolite FAD Monograptus uniformis","49.8550 13.7920","49.85 13.79","419.2","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Lochkovian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Devonian","#cb983f"],["Emsian","GSSP of Base Emsian","Zinzil'ban Gorge in the Kitab State Geological Reserve Uzbekistan | base of Bed 9/5 Conodont FAD Polygnathus kitabicus","39.2000 67.3056","39.2 67.31","407.6","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Emsian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Emsian","#e5d87f"],["Eocene","GSSP of Base Eocene","Dababiya near Luxor Egypt | base of Bed 1 in DBH subsection |   Carbon Isotope Excursion base initiation of basal Eocene Thermal maximum (PETM)","25.5000 32.5311","15.67 27.83","56","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Ypresian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Eocene","#feb27f"],["Famennian","GSSP of Base Famennian","Coumiac Quarry near Cessenon Montagne Noire France | Base of Bed 32a | Conodont FAD Palmatolepis triangularis just above a major extinction horizon (Kellwasser Event) with conodont LADs Ancyrodella and Ozarkodina and Goniatite LADs of Gephuroceratidae and Beloceratidae","43.4613 3.0403","43.46 3.04","372.2","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Famenne_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Famennian","#f1f1cb"],["Jurassic","GSSP of Base Jurassic","Kuhjoch sectionTyrol Austria | FAD of first species (Psiloceras spelae) of Psiloceras ammonite group; significantly above a sharp negative carbonisotope excursion","47.4839 11.5306","47.48 11.53","201.3","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Hettangian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Jurassic","#32f1fe"],["Llandovery","GSSP of Base Silurian","Dobs Linn Scotland | 1.6m above thebase of the Birkhill Shale Formation  | Graptolite FAD Akidograptus ascensus","55.4400 -3.2700","55.44 -3.27","443.4","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Rhudd_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Llandovery","#98febe"],["Lopingian","GSSP of Base Lopingian","Penglaitan Guanxi Province South China | base of Bed 6k in the Penglaitan Section | Conodont FAD Clarkina postbitteri postbitteri","23.6953 109.3211","18.96 87.65","259.9","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Wuchiapingian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Lopingian","#fea5b2"],["Lower Cambrian","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Wuchiapingian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Lower_Cambrian","#8bd872"],["Lower Cretaceous","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Wuchiapingian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Lower_Cretaceous","#8bfe4c"],["Lower Devonian","GSSP of Base Devonian","Klonk near Prague Czech Republic | within Bed 20 Graptolite FAD Monograptus uniformis","49.8550 13.7920","49.85 13.79","419.2","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Lochkovian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Lower_Devonian","#e5b258"],["Ludlow","GSSP of Base Ludlow","near Ludlow UK | coincident with the base of the Lower Elton Formation |Graptolite FAD Saetograptus (Colonograptus) varians","52.3592 -2.7772","52.36 -2.78","427.4","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Gorstian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Ludlow","#befed8"],["Mesoproterozoic","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Gorstian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Mesoproterozoic","#feb272"],["Mesozoic","GSSP of Base Mesozoic","Meishan Zhejiang Province China | base of Bed 27c in the Meishan D Section |  Conodont FAD Hindeodus parvus","31.0798 119.7058","27.42 117.5","252.2","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Induan_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Mesozoic","#65fee5"],["Middle Cambrian","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Induan_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Middle_Cambrian","#a5f18b"],["Middle Devonian","GSSP of Base Middle Devonian","Wetteldorf Eifel Hills Germany | 21.25m above the base of the exposed section base of sample station WP30 | Conodont FAD Polygnathus costatus partitus","50.1496 6.4716","50.15 6.47","393.3","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Eifelian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Middle_Devonian","#f1cb72"],["Middle Jurassic","GSSP of Base Middle Jurassic","Fuentelsaz Spain | base of Bed FZ 107 | Ammonite FAD Leioceras opalinum and Leioceras lineatum","41.1708 -1.8333","20.61 19.23","174.1","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Aalenian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Middle_Jurassic","#7ffef1"],["Mississippian","GSSP of Base Carboniferous","La Serre France | base of Bed 89 in Trench E at La Serre (but FAD now known to be at base of Bed 85)  | Conodont FAD Siphonodella sulcata IMPRECISE (GSSP discovered in 2006 to have biostratigraphic problems and can not be correlated with precision.)","43.5555 3.3573","43.56 3.36","358.9","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Tournaisian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Mississippian","#65be72"],["Moscovian","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Tournaisian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Moscovian","#b2e5cb"],["Neogene","GSSP of Base Neogene","Lemme Carrioso Section Allessandria Province Italy | 35m from the top of the section Magnetic  base of Chron C6Cn.2n planktonic foraminifer FAD of Paragloborotalia kugleri calcareous nannofossil near LAD Reticulofenestra bisecta (base Zone NN1) Oxygen isotopic event Mi 1.","44.6589 8.8364","41.7 5.83","23.03","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Aquitanian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Neogene","#fee500"],["Neoproterozoic","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Aquitanian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Neoproterozoic","#feb24c"],["No Data Entered","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Aquitanian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/No_Data_Entered","#b2b2b2"],["Oligocene","GSSP of Base Oligocene","Massignano near Ancona Italy | base of a 0.5m thick greenishgrey marl bed 19m above base of section |  Foraminifer LAD Hantkenina and ribrohantkenina","43.5328 13.6011  ","39.05 9.52","33.9","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Rupelian_GSSP__web_June20121.jpg","https://en.wikipedia.org/wiki/Oligocene","#febe8b"],["Ordovician","GSSP of Base Ordovician","Green Point Section western Newfoundland | at the 101.8m level within Bed 23 in the measured section| Conodont FAD Iapetognathus fluctivagus","49.6829 -57.9653","49.68 -57.97","485.4","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Tremadocian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Ordovician","#00fe65"],["Oxfordian","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Tremadocian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Oxfordian","#befefe"],["Paleocene","GSSP of Base Cenozoic","Oued Djerfane west of El Kef Tunisia | reddish layer at the base of the 50cm thick dark boundary clay | Iridium geochemical anomaly. Associated with a major extinction horizon (dinosaurs ammonites foraminifers etc.)","36.1537 8.6486","26.86 8.67","66.0","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Danian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Paleocene","#fea572"],["Paleogene","GSSP of Base Cenozoic","Oued Djerfane west of El Kef Tunisia | reddish layer at the base of the 50cm thick dark boundary clay | Iridium geochemical anomaly. Associated with a major extinction horizon (dinosaurs ammonites foraminifers etc.)","36.1537 8.6486","26.86 8.67","66.0","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Danian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Paleogene","#fe9865"],["Paleoproterozoic","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Danian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Paleoproterozoic","#fe3fb2"],["Paleozoic","GSSP of Base Phanerozoic","Fortune Head SE Newfoundland Canada | 2.4m above the base of Member 2 in the Chapel Island Formation | Trace fossil FAD Trichophycus pedum","47.0762 -55.8310","47.08 -55.83","541.0","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Fortunian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Paleozoic","#98e598"],["Pennsylvanian","GSSP of Base Pennsylvanian","Arrow Canyon Nevada | 82.9m above the top of the Battleship Formation in the lower Bird Spring Formation | Conodont FAD Declinognathodus noduliferus","36.7333 -114.7778","36.73 -114.78","323.2","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Bashkirian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Pennsylvanian","#98e5cb"],["Permian","GSSP of Base Permian","Aidaralash Creek Kazakhstan | 27m above the base of Bed 19 Aidaralash Creek | Conodont FAD of isolated-nodular morphotype of Streptognathodus wabaunsensis","50.2458 57.8914 ","50.25 57.89","298.9","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Asselian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Permian","#f13f3f"],["Phanerozoic","GSSP of Base Phanerozoic","Fortune Head SE Newfoundland Canada | 2.4m above the base of Member 2 in the Chapel Island Formation | Trace fossil FAD Trichophycus pedum","47.0762 -55.8310","47.08 -55.83","541.0","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Fortunian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Phanerozoic","#98fef1"],["Precambrian","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Fortunian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Precambrian","#fe3fb2"],["Pridoli","GSSP of Base Pridoli","Po ary Section Reporyje Prague Czech Republic | within Bed 96 | Graptolite FAD Monograptus parultimus","50.0277 14.3249","50.03 14.32","423","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Pridoli_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Pridoli","#e5fee5"],["Proterozoic","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Pridoli_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Proterozoic","#fe32a5"],["Silurian","GSSP of Base Silurian","Dobs Linn Scotland | 1.6m above thebase of the Birkhill Shale Formation  | Graptolite FAD Akidograptus ascensus","55.4400 -3.2700","55.44 -3.27","443.4","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Rhudd_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Silurian","#b2febe"],["Thanetian","GSSP of Base Thanetian","Zumaia section northern Spain | 30.5m above the base of Itzurun Formation | Magnetic Base of Chron C26n","43.3006 -2.2594","37.15 -1.78","59.2","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Thanetian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Thanetian","#febe7f"],["Tournaisian","GSSP of Base Carboniferous","La Serre France | base of Bed 89 in Trench E at La Serre (but FAD now known to be at base of Bed 85)  | Conodont FAD Siphonodella sulcata IMPRECISE (GSSP discovered in 2006 to have biostratigraphic problems and can not be correlated with precision.)","43.5555 3.3573","43.56 3.36","358.9","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Tournaisian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Tournaisian","#8bd872"],["Tremadocian","GSSP of Base Ordovician","Green Point Section western Newfoundland | at the 101.8m level within Bed 23 in the measured section| Conodont FAD Iapetognathus fluctivagus","49.6829 -57.9653","49.68 -57.97","485.4","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Tremadocian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Tremadocian","#32fe7f"],["Triassic","GSSP of Base Mesozoic","Meishan Zhejiang Province China | base of Bed 27c in the Meishan D Section |  Conodont FAD Hindeodus parvus","31.0798 119.7058","27.42 117.5","252.2","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Induan_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Triassic","#7f32fe"],["Upper Cretaceous","GSSP of Base Upper Cretaceous","Mount Risou Hautes Alpes France | 36 meters below the top of the Marnes Bleues Formation on the south side of Mont Risou | Planktonic foraminifer FAD Rotalipora globotruncanoides","44.3925 5.5119","37.63 12.12","100.5","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Cenomanian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Upper_Cretaceous","#a5fe3f"],["Upper Devonian","GSSP of Base Upper Devonian","Col du Puech de la Suque Montage Noire France | base of Bed 42  at Col du Puech de la Suque section E |Conodont FAD Ancyrodella rotundiloba","43.5032 3.0868","43.5 3.09","382.7","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Frasne_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Upper_Devonian","#f1e5a5"],["Upper Jurassic","","","","","","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Frasne_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Upper_Jurassic","#b2fefe"],["Upper Ordovician","GSSP of Base Upper Ordovician","Sularp Brook Fagelsang Sweden | 1.4m below a phosphorite marker bed in the E14b outcrop | Graptolite FAD Nemagraptus gracilis","55.7137 13.3255","55.71 13.33","458.4","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Sandbian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Upper_Ordovician","#7ffe98"],["Wenlock","GSSP of Base Wenlock","Hughley Brook UK | base of the Buildwas Formation | Imprecise. Between the base of acritarch biozone 5 and LAD of conodont Pterospathodus amorphognathoides. The current GSSP does not coincide with the base of the Cyrtograptus centrifugus Biozone as was supposed when the GSSP was defined. Restudy recommends a slightly higher and correlatable level on condonts  the Ireviken datum 2 which coincides approximately with the base of the murchisoni Graptolite Biozone","52.5811 -2.6389","52.58 -2.64","433.4","https://engineering.purdue.edu/Stratigraphy/images/combined/full/Sheinwoodian_GSSP_web_June20121.jpg","https://en.wikipedia.org/wiki/Wenlock","#b2fecb"]],"id":"bc19e5a2-5dd0-4858-98e7-33d96713dce3","submit":{"values":[[""],[""]],"windowFunction":["PathWay","PathWay"]},"numOfWins":0,"location":"C:/Users/jupiter/Documents/NetBeansProjects/AutoInterfaceWS/data/","colFuns":[{"functionName":"WebSite","value":"picture"},{"functionName":"WebSite","value":"wiki"},{"functionName":"ShowColor","value":"color"}]}];

        ////              OGC example                                
        //                var data = [{"lastNode":"Terminal","printType":"table","resourceName":"fossilResultTable.csv","tableContent":[
        //                                        ["\"occurrence_no\"","\"record_type\"","\"reid_no\"","\"flags\"","\"collection_no\"","\"identified_name\"","\"identified_rank\"","\"identified_no\"","\"difference\"","\"accepted_name\"","\"accepted_rank\"","\"accepted_no\"","\"early_interval\"","\"late_interval\"","\"max_ma\"","\"min_ma\"","\"reference_no\"","\"lng\"","\"lat\"","\"paleomodel\"","\"paleolng\"","\"paleolat\"","\"geoplate\"","\"cc\"","\"state\"","\"county\"","\"latlng_basis\"","\"latlng_precision\"","\"geogscale\"","\"geogcomments\"","oldlat","oldlng"],
        //                                        ["8028","occ","","","544","Crinoidea indet.","class","31590","","Crinoidea","class","31590","Kinderhookian","","358.9","353.8","60995","-105.591667","47.416668","gp_mid","-52.67","-17.15","101","US","Montana","","based on political unit","minutes","basin","NW Montana","-105.59","47.42"],
        //                                        ["8029","occ","","","544","Orbiculoidea sp.","genus","26527","","Orbiculoidea","genus","26527","Kinderhookian","","358.9","353.8","60995","-105.591667","47.416668","gp_mid","-52.67","-17.15","101","US","Montana","","based on political unit","minutes","basin","NW Montana","-105.59","47.42"],
        //                                        ["8030","occ","","","544","Rhynchonellidae indet.","family","80697","","Rhynchonellidae","family","80697","Kinderhookian","","358.9","353.8","60995","-105.591667","47.416668","gp_mid","-52.67","-17.15","101","US","Montana","","based on political unit","minutes","basin","NW Montana","-105.59","47.42"],
        //                                        ["8031","occ","","","544","Spirifer sp.","genus","29638","","Spirifer","genus","29638","Kinderhookian","","358.9","353.8","60995","-105.591667","47.416668","gp_mid","-52.67","-17.15","101","US","Montana","","based on political unit","minutes","basin","NW Montana","-105.59","47.42"],
        //                                        ["8032","occ","","","544","Composita sp.","genus","29181","","Composita","genus","29181","Kinderhookian","","358.9","353.8","60995","-105.591667","47.416668","gp_mid","-52.67","-17.15","101","US","Montana","","based on political unit","minutes","basin","NW Montana","-105.59","47.42"],
        //                                        ["8033","occ","","","544","Rhipidomella ? sp.","genus","26974","","Rhipidomella","genus","26974","Kinderhookian","","358.9","353.8","60995","-105.591667","47.416668","gp_mid","-52.67","-17.15","101","US","Montana","","based on political unit","minutes","basin","NW Montana","-105.59","47.42"]]
        //                        ,"id":"d4aa8007-e494-4bcd-a71b-a60e0b03a98b",
        //                        "numOfWins":"2",
        //                        "submit":{
        ////                                "windowFunction":["Google Map", "Gplates"],
        //                                "windowFunction":[ "Gplates", "Google Map"],
        ////                                "values":[["lat", "lng"], ["lat", "lng", "min_ma", "max_ma"]]
        //                                "values":[["lat", "lng", "min_ma", "max_ma"], ["lat", "lng"] ]
        //                        }
        //                        }];
        //                        
        //Fossil Example




        //                
        //                getStatus(data, resultPageupdateResult);
        
        generateUploadGeneralIO();

        $.ajax({
            type: "POST",
            url: url,
            // The key needs to match your method's input parameter (case-sensitive).
            data: JSON.stringify({
                nodes: data.nodes.get(),
                edges: data.edges.get(),
                globalmatch:data.globalmatch
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                clearInterval(myGetStatusInterval);
                getStatus(data, resultPageupdateResult);
            },
            failure: function(errMsg) {
                alert(errMsg);
            }
        });
    });
};

function resultPageupdateResult(statusData, data) {
    console.log(data);
    if (statusData === undefined)
        return;
    var ids = resultData.nodes.getIds();
    var terminal = false, printer = false;
    for (var i = 0; i < ids.length; ++i) {
        var node = resultData.nodes.get(ids[i]);
        if (node.image.includes("highlight")) {
            node.image = node.image.replace(" highlight", "");
            resultData.nodes.update(node);
        }
    }
    
    for (var i = 0; i < data.length; ++i) {
        var node = data[i];
        if (node.lastNode == 'Terminal') {
            terminal = true;
        }
        if (node.lastNode == 'Printer') {
            printer = true;
        }
    }
    
    
    //finished is finished not showing anything
//    var lastNode = resultData.nodes.get(data[data.length - 1].id);
//    lastNode.image = lastNode.image.replace(".", " highlight.");
//    resultData.nodes.update(lastNode);
    console.log();
    if (terminal && printer) {
        $('#outputConent1').show();
        $('#outputConent2').show();
        generateOutputHtml(data);
        generatePrinterHtml(data);
    } else if (terminal) {
        $('#outputConent1').show();
        $('#outputConent2').hide();
        $("#outputTypePannel li").removeClass("active");
        $("#outputTypePannel li:first").addClass("active");
        $("#outputConent").addClass("active").addClass("in");
        $("#outputFile").removeClass("active").removeClass("in");
        generateOutputHtml(data);
    } else if (printer) {
        $('#outputConent1').hide();
        $('#outputConent2').show();
        $("#outputTypePannel li").removeClass("active");
        $("#outputTypePannel li:last").addClass("active");
        $("#outputConent").removeClass("active").removeClass("in");
        $("#outputFile").addClass("active").addClass("in");
        
        
        generatePrinterHtml(data);
    }
    $('#verticalbuton2info').text("Information");
}


function calArea(points) {
    var area = 0;
    for (var i = 0; i < points.length - 1; ++i) {
        area += points[i].x * points[i + 1].y - points[i + 1].x * points[i].y;
    }
    return area / 2.0;
}

function calCenterPoint(points) {
    var area = calArea(points);
    var x = 0;
    var y = 0;
    for (var i = 0; i < points.length - 1; ++i) {
        x += (points[i].x + points[i + 1].x) * (points[i].x * points[i + 1].y - points[i + 1].x * points[i].y);
        y += (points[i].y + points[i + 1].y) * (points[i].x * points[i + 1].y - points[i + 1].x * points[i].y);
    }
    return {
        x: x / (6.0 * area),
        y: y / (6.0 * area)
    };
}

function hightlightNode(nodes, id) {
    var node = nodes.get(id);
    if (node != null && !node.image.includes('highlight')) {
        node.image = node.image.replace(".", " highlight.");
        nodes.update(node);
    }
}

function clearResultHighlights(nodes) {
    nodes.forEach(function(n) {
        if (n.image !== undefined && n.image.includes('highlight')) {
            n.image = n.image.replace(" highlight", "");
            resultData.nodes.update(n);
        }
    });
}

function initCurMap() {
    //    var uluru = {lat: -25.363, lng: 131.044};
    //    var uluru2 = {lat: -26.363, lng: 132.044};
    //    map = new google.maps.Map(document.getElementById('curMap'), {
    //        zoom: 8,
    //        center: uluru
    //    });
    //    
    //    var infowindow = new google.maps.InfoWindow();
    //    
    //    var marker = new google.maps.Marker({
    //        position: uluru,
    //        map: map
    //    });
    //    var marker1 = new google.maps.Marker({
    //        position: uluru2,
    //        map: map
    //    });
    //    
    //    var i = 0;
    //    google.maps.event.addListener(marker, 'click', (function(marker) {
    //        return function () {
    //            infowindow.setContent('This is first');
    //            infowindow.open(map, marker);
    //        }
    //    })(marker));
    //    google.maps.event.addListener(marker1, 'click', (function(marker) {
    //        return function () {
    //            infowindow.setContent('This is second');
    //            infowindow.open(map, marker);
    //        }
    //    })(marker1));

    //    var latlngbounds = new google.maps.LatLngBounds();
    //    latlngbounds.extend(marker.getPosition());
    //    latlngbounds.extend(marker1.getPosition());
    //    map.setCenter(latlngbounds.getCenter());
    //    map.fitBounds(latlngbounds); 
    //    map.setCenter({lat: -25.363, lng: 131.044}); 
    //    google.maps.event.addListenerOnce(map, 'idle', function () {
    //        
    //        setTimeout(function() {
    //            console.log('triggered');
    //            google.maps.event.trigger(map, 'resize');
    //        }, 500);
    //        
    //        
    //    });

}

function initOldMap() {
    //    var uluru = {lat: -25.363, lng: 131.044};
    //    var uluru2 = {lat: -26.363, lng: 132.044};
    //    map = new google.maps.Map(document.getElementById('curMap'), {
    //        zoom: 8,
    //        center: uluru
    //    });
    //    
    //    var infowindow = new google.maps.InfoWindow();
    //    
    //    var marker = new google.maps.Marker({
    //        position: uluru,
    //        map: map
    //    });
    //    var marker1 = new google.maps.Marker({
    //        position: uluru2,
    //        map: map
    //    });
    //    
    //    var i = 0;
    //    google.maps.event.addListener(marker, 'click', (function(marker) {
    //        return function () {
    //            infowindow.setContent('This is first');
    //            infowindow.open(map, marker);
    //        }
    //    })(marker));
    //    google.maps.event.addListener(marker1, 'click', (function(marker) {
    //        return function () {
    //            infowindow.setContent('This is second');
    //            infowindow.open(map, marker);
    //        }
    //    })(marker1));

    //    var latlngbounds = new google.maps.LatLngBounds();
    //    latlngbounds.extend(marker.getPosition());
    //    latlngbounds.extend(marker1.getPosition());
    //    map.setCenter(latlngbounds.getCenter());
    //    map.fitBounds(latlngbounds); 
    //    map.setCenter({lat: -25.363, lng: 131.044}); 
    //    google.maps.event.addListenerOnce(map, 'idle', function () {
    //        
    //        setTimeout(function() {
    //            console.log('triggered');
    //            google.maps.event.trigger(map, 'resize');
    //        }, 500);
    //        
    //        
    //    });

}

//
//<ul id='nodeinfopanel' class = "nav nav-pills" >
//        < li class = "active" > < a data - toggle = "tab" href = "#nodeinfo" id = "infoTab1" style = "font-size:1.5vh;font-weight:bold" > Node Info < /a></li >
//        < li > < a data - toggle = "tab" href = "#nodeupdate" style = "font-size:1.5vh;font-weight:bold" > Update < /a></li >
//        < /ul>
//        < div class = "tab-content" style = "height:85%;margin: 0.1vh;" >
//        < div id = "nodeinfo" class = "tab-pane fade in active nav-tabs" >
//        < div id = "selectedinfo" > < /div>
//        < /div>
//        < div id = "nodeupdate" class = "tab-pane fade in nav-tabs" >
//        < div id = "updatediv" > < /div>
//        < /div>
//        < /div>


function generateOutputHtml(outputData) {
    //        console.log('generateOutputHtml');
    var innerhtml = "";
    $('#curMap').hide();
    $('#oldMap').hide();
    $('#myD3Visual').hide();

    innerhtml += '<ul class = "nav nav-pills">';
    for (var i = 0; i < outputData.length; ++i) {
        if (outputData[i].lastNode != 'Terminal') continue; 
        if (i == 0) {
            innerhtml += '<li class="active"><a data-toggle="tab" href="#outputTab' + i + '" style = "font-size:1.5vh;font-weight:bold">' + outputData[i].resourceName + '<span class="glyphicon glyphicon-download" role="button" onclick=\'downloadImage('+JSON.stringify(outputData[i].resourceName)+')\'></span></a></li>';
        } else {
            innerhtml += '<li><a data-toggle="tab" href="#outputTab' + i + '" style = "font-size:1.5vh;font-weight:bold">' + outputData[i].resourceName + '<span class="glyphicon glyphicon-download" role="button" onclick=\'downloadImage('+JSON.stringify(outputData[i].resourceName)+')\'></span></a></li>';
        }
    }
    innerhtml += '</ul>';
    innerhtml += '<div class = "tab-content" style = "height:85%;margin: 0.1vh;" >';
    for (var i = 0; i < outputData.length; ++i) {
        if (outputData[i].lastNode != 'Terminal') continue; 
        var type = outputData[i].resourceName.getFileType();
        console.log(type);
        //< div id = "nodeinfo" class = "tab-pane fade in active nav-tabs" >
            //draw table
            if (i == 0) {
                innerhtml += "<div id='outputTab" + i + "' class = 'tab-pane fade in active nav-tabs'>";
            } else {
                innerhtml += "<div id='outputTab" + i + "' class = 'tab-pane fade in nav-tabs'>";
            }
        if (type == 'XML') {
            innerhtml += '<textarea id="outputResultXMLshow'+i+'" style="resize: vertical;height:50vh;width:100%;" disabled>';
            innerhtml += outputData[i].tableContent[0][0];
            innerhtml += '</textarea>';
        } else if (outputData[i].printType === 'table' && type != 'XML') {
            var table = outputData[i].tableContent;
            if (outputData[i].submit !== undefined && outputData[i].submit.windowFunction.length === 1) {

                if (outputData[i].submit.windowFunction[0] == 'PathWay') {
                    //we need submit to the server to download the image
                    //pick rows
                    var rowsData = [];
                    var index = -1;
                    for (var j = 0; j < table[0].length; ++j) {
                        if (table[0][j].replace(/\"/g, "") == outputData[i].submit.values[0][0]) {
                            index = j;
                            break;
                        }
                    }
                    if (index != -1) {
                        for (var j = 1; j < table.length; ++j) {
                            rowsData.push(table[j][index]);
                        }
                    }

                    //last one is the location
                    rowsData.push(outputData[i].location);
                    var url = baseurl + 'printerRules/KEGGPathway';
                    //                                        console.log(url);
                    //submit to server:
                    $.ajax({
                        type: "POST",
                        url: url,
                        // The key needs to match your method's input parameter (case-sensitive).
                        data: JSON.stringify(rowsData),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function(data) { //this is a two dimanional array
                            console.log(data);
                        },
                        error: function(request, status, error) {},
                        failure: function(errMsg) {
                            alert(errMsg);
                        }
                    });
                }

                if (outputData[i].submit.windowFunction[0] == 'Google Map') {
                    $("#processmessage").hide();
                    $("#curMap").show();
                    var keyWordOne = outputData[i].submit.values[0][0];
                    var keyWordTwo = outputData[i].submit.values[0][1];
                    var latIndex = -1;
                    var lngIndex = -1;
                    var latArr = [];
                    var lngArr = [];
                    for (var j = 0; j < table[0].length; ++j) {
                        if (table[0][j].replace(/\"/g, "") === keyWordOne) {
                            latIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordTwo) {
                            lngIndex = j;
                        }
                    }

                    if (latIndex != -1 && lngIndex != -1) {
                        for (var j = 1; j < table.length; ++j) {
                            latArr.push(table[j][latIndex].replace(/\"/g, ""));
                            lngArr.push(table[j][lngIndex].replace(/\"/g, ""));
                        }
                    }

                    $("#curMap").show();
                    var infowindow = new google.maps.InfoWindow();
                    var latlngbounds = new google.maps.LatLngBounds();
                    var map = new google.maps.Map(document.getElementById('curMap'), {
                        zoom: 1
                    });
                    var markers = [];
                    var pointSet = new Set();
                    for (var k = 0; k < latArr.length; ++k) {
                        //                                        console.log(data[i].tableContent[k][18]);
                        //                                        console.log(data[i].tableContent[k][17]);
                        var loc = {
                            lat: parseFloat(latArr[k]),
                            lng: parseFloat(lngArr[k])
                        };
                        var lat = parseFloat(latArr[k]);
                        var lng = parseFloat(lngArr[k]);
                        if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                            pointSet.add(lng + "," + lat);
                        }
                        //                                        console.log(loc);
                        var marker = new google.maps.Marker({
                            position: loc,
                            map: map
                        });
                        google.maps.event.addListener(marker, 'click', (function(marker) {
                            return function() {
                                infowindow.setContent('This is first');
                                infowindow.open(map, marker);
                            }
                        })(marker));
                        markers.push(marker);
                    }
                    var points = "";
                    for (let item of pointSet) {
                        points += item + ",";
                    }
                    points = points.substring(0, points.length - 1);
                    map.setCenter(markers[0].getPosition());
                    var markerCluster = new MarkerClusterer(map, markers, {
                        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
                    });
                }

                if (outputData[i].submit.windowFunction[0] == 'Gplates') {
                    $("#processmessage").hide();
                    $('#oldMap').show();
                    var keyWordOne = outputData[i].submit.values[0][0];
                    var keyWordTwo = outputData[i].submit.values[0][1];
                    var keyWordThree = outputData[i].submit.values[0][2];
                    var keyWordFour = outputData[i].submit.values[0][3];
                    var latIndex = -1;
                    var lngIndex = -1;
                    var minMaIndex = -1;
                    var maxMaIndex = -1;
                    var latArr = [];
                    var lngArr = [];
                    var minMaArr = [];
                    var maxMaArr = [];
                    for (var j = 0; j < table[0].length; ++j) {
                        if (table[0][j].replace(/\"/g, "") === keyWordOne) {
                            latIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordTwo) {
                            lngIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordThree) {
                            minMaIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordFour) {
                            maxMaIndex = j;
                        }
                    }

                    if (latIndex != -1 && lngIndex != -1) {
                        for (var j = 1; j < table.length; ++j) {
                            latArr.push(table[j][latIndex].replace(/\"/g, ""));
                            lngArr.push(table[j][lngIndex].replace(/\"/g, ""));
                            minMaArr.push(table[j][minMaIndex].replace(/\"/g, ""));
                            maxMaArr.push(table[j][maxMaIndex].replace(/\"/g, ""));
                        }
                    }

                    var pointSet = new Set();
                    for (var k = 0; k < latArr.length; ++k) {
                        var lat = parseFloat(latArr[k]);
                        var lng = parseFloat(lngArr[k]);
                        if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                            pointSet.add(lng + "," + lat);
                        }
                    }
                    var points = "";
                    for (let item of pointSet) {
                        points += item + ",";
                    }
                    points = points.substring(0, points.length - 1);
                    //old-------------------------------------------------
                    //Old map
                    var width = 900;
                    var height = 400;
                    var scale0 = (width - 1) / 2 / Math.PI;
                    var eScale0 = (width - 1) / 2 / Math.PI,
                        oScale0 = (width - 1) / 4;
                    $("#oldMap").show();
                    var svg = d3.select("body svg");
                    var projRect = d3.geo.equirectangular()
                        .scale(scale0)
                        .rotate([0.1, 0, 0])
                        .translate([width / 2, height / 2])
                        .precision(.1);
                    projection = projRect;
                    path = d3.geo.path().projection(projection);
                    coastlinsLayer = svg.append('g');
                    geometryLayer = svg.append('g');
                    graticuleLayer = svg.append('g');
                    var graticule = d3.geo.graticule();
                    graticuleLayer.append("path")
                        .datum(graticule)
                        .attr("class", "graticule")
                        .attr("d", path);
                    var time = (parseFloat(minMaArr[0]) + parseFloat(maxMaArr[0])) / 2.0;
                    console.log(time);
                    console.log(points);
                    reconstruct(time, points);
                }

                console.log(outputData[i]);
                if (outputData[i].submit.windowFunction[0] == 'ShowCube') {
                    $("#processmessage").hide(); 
                    $('#myD3Visual').show();

                    var dataset = [];
                    for (var k = 0; k < outputData[i].tableContent.length; ++k) {
//                        dataset.push('"' + outputData[i].tableContent[k].join(",") + '"');
                        dataset.push( outputData[i].tableContent[k].join(",") );
                    }
                    console.log(dataset);
                    initialCube(dataset);
                }

            } else if (outputData[i].submit !== undefined && outputData[i].submit.windowFunction.length === 2) {
                $("#processmessage").hide();
                var curMap = $("#curMap");
                var oldMap = $("#oldMap");
                var newCurMap = curMap.clone();
                var newOldMap = oldMap.clone();
                //check order
                var newMapIsFirst = false;
                if (curMap.prev()[0] === oldMap[0]) { //old map is first
                    newMapIsFirst = false;
                } else {
                    newMapIsFirst = true;
                }
                //change order if needed
                if (outputData[i].submit.windowFunction[0] == 'Google Map' && outputData[i].submit.windowFunction[1] == 'Gplates') {
                    if (newMapIsFirst == false) {
                        curMap.replaceWith(newOldMap);
                        oldMap.replaceWith(newCurMap);
                    }
                } else if (outputData[i].submit.windowFunction[0] == 'Gplates' && outputData[i].submit.windowFunction[1] == 'Google Map') {
                    if (newMapIsFirst == true) {
                        curMap.replaceWith(newOldMap);
                        oldMap.replaceWith(newCurMap);
                    }

                }


                if (outputData[i].submit.windowFunction[0] == 'Google Map') {
                    var keyWordOne = outputData[i].submit.values[0][0];
                    var keyWordTwo = outputData[i].submit.values[0][1];
                    var latIndex = -1;
                    var lngIndex = -1;
                    var latArr = [];
                    var lngArr = [];
                    for (var j = 0; j < table[0].length; ++j) {
                        if (table[0][j].replace(/\"/g, "") === keyWordOne) {
                            latIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordTwo) {
                            lngIndex = j;
                        }
                    }

                    if (latIndex != -1 && lngIndex != -1) {
                        for (var j = 1; j < table.length; ++j) {
                            latArr.push(table[j][latIndex].replace(/\"/g, ""));
                            lngArr.push(table[j][lngIndex].replace(/\"/g, ""));
                        }
                    }
                    //                                        console.log(keyWordOne);
                    //                                        console.log(keyWordTwo);
                    //                                        console.log(latIndex);
                    //                                        console.log(lngIndex);
                    //                                        console.log(latArr);
                    //                                        console.log(lngArr);

                    $("#curMap").show();
                    var infowindow = new google.maps.InfoWindow();
                    var latlngbounds = new google.maps.LatLngBounds();
                    var map = new google.maps.Map(document.getElementById('curMap'), {
                        zoom: 1
                    });
                    var markers = [];
                    var pointSet = new Set();
                    for (var k = 0; k < latArr.length; ++k) {
                        //                                        console.log(data[i].tableContent[k][18]);
                        //                                        console.log(data[i].tableContent[k][17]);
                        var loc = {
                            lat: parseFloat(latArr[k]),
                            lng: parseFloat(lngArr[k])
                        };
                        var lat = parseFloat(latArr[k]);
                        var lng = parseFloat(lngArr[k]);
                        if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                            pointSet.add(lng + "," + lat);
                        }
                        //                                        console.log(loc);
                        var marker = new google.maps.Marker({
                            position: loc,
                            map: map
                        });
                        google.maps.event.addListener(marker, 'click', (function(marker) {
                            return function() {
                                infowindow.setContent('This is first');
                                infowindow.open(map, marker);
                            }
                        })(marker));
                        markers.push(marker);
                    }
                    var points = "";
                    for (let item of pointSet) {
                        points += item + ",";
                    }
                    points = points.substring(0, points.length - 1);
                    //                                        console.log(points);
                    map.setCenter(markers[0].getPosition());
                    var markerCluster = new MarkerClusterer(map, markers, {
                        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
                    });
                } else if (outputData[i].submit.windowFunction[1] == 'Google Map') {
                    var keyWordOne = outputData[i].submit.values[1][0];
                    var keyWordTwo = outputData[i].submit.values[1][1];
                    var latIndex = -1;
                    var lngIndex = -1;
                    var latArr = [];
                    var lngArr = [];
                    for (var j = 0; j < table[0].length; ++j) {
                        if (table[0][j].replace(/\"/g, "") === keyWordOne) {
                            latIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordTwo) {
                            lngIndex = j;
                        }
                    }

                    if (latIndex != -1 && lngIndex != -1) {
                        for (var j = 1; j < table.length; ++j) {
                            latArr.push(table[j][latIndex].replace(/\"/g, ""));
                            lngArr.push(table[j][lngIndex].replace(/\"/g, ""));
                        }
                    }

                    $("#curMap").show();
                    var infowindow = new google.maps.InfoWindow();
                    var latlngbounds = new google.maps.LatLngBounds();
                    var map = new google.maps.Map(document.getElementById('curMap'), {
                        zoom: 1
                    });
                    var markers = [];
                    var pointSet = new Set();
                    for (var k = 0; k < latArr.length; ++k) {
                        //                                        console.log(data[i].tableContent[k][18]);
                        //                                        console.log(data[i].tableContent[k][17]);
                        var loc = {
                            lat: parseFloat(latArr[k]),
                            lng: parseFloat(lngArr[k])
                        };
                        var lat = parseFloat(latArr[k]);
                        var lng = parseFloat(lngArr[k]);
                        if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                            pointSet.add(lng + "," + lat);
                        }
                        //                                        console.log(loc);
                        var marker = new google.maps.Marker({
                            position: loc,
                            map: map
                        });
                        google.maps.event.addListener(marker, 'click', (function(marker) {
                            return function() {
                                infowindow.setContent('This is first');
                                infowindow.open(map, marker);
                            }
                        })(marker));
                        markers.push(marker);
                    }
                    var points = "";
                    for (let item of pointSet) {
                        points += item + ",";
                    }
                    points = points.substring(0, points.length - 1);
                    map.setCenter(markers[0].getPosition());
                    var markerCluster = new MarkerClusterer(map, markers, {
                        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
                    });
                }

                if (outputData[i].submit.windowFunction[1] == 'Gplates') {

                    var keyWordOne = outputData[i].submit.values[1][0];
                    var keyWordTwo = outputData[i].submit.values[1][1];
                    var keyWordThree = outputData[i].submit.values[1][2];
                    var keyWordFour = outputData[i].submit.values[1][3];
                    var latIndex = -1;
                    var lngIndex = -1;
                    var minMaIndex = -1;
                    var maxMaIndex = -1;
                    var latArr = [];
                    var lngArr = [];
                    var minMaArr = [];
                    var maxMaArr = [];
                    for (var j = 0; j < table[0].length; ++j) {
                        if (table[0][j].replace(/\"/g, "") === keyWordOne) {
                            latIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordTwo) {
                            lngIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordThree) {
                            minMaIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordFour) {
                            maxMaIndex = j;
                        }
                    }

                    if (latIndex != -1 && lngIndex != -1) {
                        for (var j = 1; j < table.length; ++j) {
                            latArr.push(table[j][latIndex].replace(/\"/g, ""));
                            lngArr.push(table[j][lngIndex].replace(/\"/g, ""));
                            minMaArr.push(table[j][minMaIndex].replace(/\"/g, ""));
                            maxMaArr.push(table[j][maxMaIndex].replace(/\"/g, ""));
                        }
                    }

                    var pointSet = new Set();
                    for (var k = 0; k < latArr.length; ++k) {
                        var lat = parseFloat(latArr[k]);
                        var lng = parseFloat(lngArr[k]);
                        if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                            pointSet.add(lng + "," + lat);
                        }
                    }
                    var points = "";
                    for (let item of pointSet) {
                        points += item + ",";
                    }
                    points = points.substring(0, points.length - 1);
                    //old-------------------------------------------------
                    //Old map
                    var width = 900;
                    var height = 400;
                    var scale0 = (width - 1) / 2 / Math.PI;
                    var eScale0 = (width - 1) / 2 / Math.PI,
                        oScale0 = (width - 1) / 4;
                    $("#oldMap").show();
                    var svg = d3.select("body svg");
                    var projRect = d3.geo.equirectangular()
                        .scale(scale0)
                        .rotate([0.1, 0, 0])
                        .translate([width / 2, height / 2])
                        .precision(.1);
                    projection = projRect;
                    path = d3.geo.path().projection(projection);
                    coastlinsLayer = svg.append('g');
                    geometryLayer = svg.append('g');
                    graticuleLayer = svg.append('g');
                    var graticule = d3.geo.graticule();
                    graticuleLayer.append("path")
                        .datum(graticule)
                        .attr("class", "graticule")
                        .attr("d", path);
                    var time = (parseFloat(minMaArr[0]) + parseFloat(maxMaArr[0])) / 2.0;
                    reconstruct(time, points);
                } else if (outputData[i].submit.windowFunction[0] == 'Gplates') {

                    var keyWordOne = outputData[i].submit.values[0][0];
                    var keyWordTwo = outputData[i].submit.values[0][1];
                    var keyWordThree = outputData[i].submit.values[0][2];
                    var keyWordFour = outputData[i].submit.values[0][3];
                    var latIndex = -1;
                    var lngIndex = -1;
                    var minMaIndex = -1;
                    var maxMaIndex = -1;
                    var latArr = [];
                    var lngArr = [];
                    var minMaArr = [];
                    var maxMaArr = [];
                    for (var j = 0; j < table[0].length; ++j) {
                        if (table[0][j].replace(/\"/g, "") === keyWordOne) {
                            latIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordTwo) {
                            lngIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordThree) {
                            minMaIndex = j;
                        } else if (table[0][j].replace(/\"/g, "") === keyWordFour) {
                            maxMaIndex = j;
                        }
                    }

                    if (latIndex != -1 && lngIndex != -1) {
                        for (var j = 1; j < table.length; ++j) {
                            latArr.push(table[j][latIndex].replace(/\"/g, ""));
                            lngArr.push(table[j][lngIndex].replace(/\"/g, ""));
                            minMaArr.push(table[j][minMaIndex].replace(/\"/g, ""));
                            maxMaArr.push(table[j][maxMaIndex].replace(/\"/g, ""));
                        }
                    }

                    var pointSet = new Set();
                    for (var k = 0; k < latArr.length; ++k) {
                        var lat = parseFloat(latArr[k]);
                        var lng = parseFloat(lngArr[k]);
                        if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                            pointSet.add(lng + "," + lat);
                        }
                    }
                    var points = "";
                    for (let item of pointSet) {
                        points += item + ",";
                    }
                    points = points.substring(0, points.length - 1);
                    //old-------------------------------------------------
                    //Old map
                    var width = 900;
                    var height = 400;
                    var scale0 = (width - 1) / 2 / Math.PI;
                    var eScale0 = (width - 1) / 2 / Math.PI,
                        oScale0 = (width - 1) / 4;
                    $("#oldMap").show();
                    var svg = d3.select("body svg");
                    var projRect = d3.geo.equirectangular()
                        .scale(scale0)
                        .rotate([0.1, 0, 0])
                        .translate([width / 2, height / 2])
                        .precision(.1);
                    projection = projRect;
                    path = d3.geo.path().projection(projection);
                    coastlinsLayer = svg.append('g');
                    geometryLayer = svg.append('g');
                    graticuleLayer = svg.append('g');
                    var graticule = d3.geo.graticule();
                    graticuleLayer.append("path")
                        .datum(graticule)
                        .attr("class", "graticule")
                        .attr("d", path);
                    var time = (parseFloat(minMaArr[0]) + parseFloat(maxMaArr[0])) / 2.0;
                    reconstruct(time, points);
                }
            }
            //check colfunctions
            var keywordsIndexs = {};
            //                        console.log(outputData[i].colFuns);
            if (outputData[i].colFuns !== undefined) {

                for (var j = 0; j < table[0].length; ++j) {
                    for (var k = 0; k < outputData[i].colFuns.length; ++k) {
                        if (table[0][j] === outputData[i].colFuns[k].value) {
                            keywordsIndexs[j] = outputData[i].colFuns[k].functionName;
                        }
                    }
                }
            }

            if (outputData[i].submit != undefined && outputData[i].submit.windowFunction != undefined && outputData[i].submit.windowFunction[0] == 'PathWay') {
                for (var j = 0; j < table[0].length; ++j) {
                    if (table[0][j].replace(/\"/g, "") === outputData[i].submit.values[0][0]) {
                        keywordsIndexs[j] = "PathWay";
                        break;
                    }
                }
            }

            
            innerhtml += "<table class='table table-bordered table-hover table-sm' style='width:100%'><tbody>";
            innerhtml += "<tr>";
            for (var k = 0; k < outputData[i].tableContent[0].length; ++k) {
                innerhtml += "<td>" + outputData[i].tableContent[0][k] + "</td>";
            }
            innerhtml += "</tr>";
            for (var j = 1; j < outputData[i].tableContent.length; ++j) {
                innerhtml += "<tr>";
                for (var k = 0; k < outputData[i].tableContent[j].length; ++k) {
                    var functionName = keywordsIndexs[k];
                    switch (functionName) {
                        case "PathWay":
                            innerhtml += "<td><a onclick='downloadImage(" + JSON.stringify("pathway" + outputData[i].tableContent[j][k] + ".png") + ")'  style='cursor:pointer'>" + outputData[i].tableContent[j][k] + "</a></td>";
                            break;
                        case "WebSite":
                            innerhtml += "<td><a href='" + outputData[i].tableContent[j][k] + "' target='_blank'>" + outputData[i].tableContent[j][k] + "</a></td>";
                            break;
                        case "ShowColor":
                            innerhtml += "<td style='background-color:" + outputData[i].tableContent[j][k] + "'></td>";
                            break;
                        default:
                            innerhtml += "<td>" + outputData[i].tableContent[j][k] + "</td>";
                    }
                }
                innerhtml += "</tr>";
            }
            innerhtml += "</tbody></table>";
        } else if (outputData[i].printType === "barchart") {} else if (outputData[i].printType === "piechart") {} else if (outputData[i].printType === "linechart") {}
        innerhtml += "</div>";
    }
    innerhtml += "</div>";
    $('#outputshow').html(innerhtml);
    
    $('#outputshow').find("textarea").height($(this).prop('scrollHeight'));
    
}

function generatePrinterHtml(data) {
    console.log(data);
    var innerhtml = "";
    innerhtml = "<table class='table table-bordered table-hover table-sm' style='width:100%'><tbody>";
    for (var i = 0; i < data.length; ++i) {
        if (data[i].lastNode == 'Printer') {
            innerhtml += "<tr>";
            innerhtml += "<td><a onclick='downloadImage(" + JSON.stringify(data[i].resourceName) + ")' style='cursor:pointer'>" + data[i].resourceName + "</a></td>";
            innerhtml += "</tr>";
            printFileToPrinter(data[i].resourceName);
        }
    }
    innerhtml += "</tbody></table>";
    $('#outputFileShow').html(innerhtml);
}

function printFileToPrinter(fileName) {
    console.log('printFileToPrinter');
    var url = globalurl + 'fileToPrinter/' + fileName;
    var w = window.open(url);
    var sched = null;
    var printAndClose = function() {
        console.log('checking');
        if (w.document.readyState === 'complete') {
            clearInterval(sched);
            console.log('print');
            w.print();
        }
    }
    sched = setInterval(printAndClose(), 1000);
}


function doanloadImageText() {
    //        downloadImage('hsa01100.png');
    downloadImage('locations.xml');
}

function downloadImage(imageName) {
    if (imageName.includes('.png')) {
        $("#processmessage").hide();
        console.log('download Image');
        var url = globalurl + 'image/';
        console.log(imageName);
        
        if (imageName.indexOf("pathway") != -1) {
            imageName = imageName.replace("pathway", "").replace(".png", "");
            if (isNum(imageName)) {
                imageName = "hsa" + imageName + ".png";
            } else {
                imageName = imageName + ".png";
            }
        }
        
        url = url + imageName;
        console.log(url);
        $('#pathimage').next().removeClass('hideit');
        $('#pathimage').addClass('hideit');
        $.ajax({
            type: "GET",
            url: url,
            success: function(data) {
                $('#pathimage').next().addClass('hideit');
                setImage(data, imageName);
            },
            failure: function(errMsg) {
                alert(errMsg);
            }
        });
    } else { //download file
        console.log('download file');
        var url = globalurl + 'file/';
        url = url + imageName;
        console.log(window.location.href);
        var index = window.location.href.indexOf("/VisFlow/")
        var host = window.location.href.substring(0, index);
        url = host + url;
        console.log(url);
        window.open(url, '_blank');
    }

}

var viewer = null;

function setImage(data, filename) {
    $('#verticalbuton2info').text(filename);
    //        $('#imagelabel').html(filename);
    $('#pathimage').removeClass('hideit');
    $('#pathimage').attr('src', 'data:image/png;base64,' + data);
    //        console.log($('#pathimage'));
    //        if (document.getElementById('pathimage').viewer !== undefined) {
    //                console.log("remove viewer");
    //                document.getElementById('pathimage').viewer.destory(); problems
    //        }

    if (viewer !== null) {
        viewer.destroy();
    }

    viewer = new Viewer(document.getElementById('pathimage'), {
        hidden: function() {
            console.log("hidden");
            //                        this.viewer.destroy();
        },
        viewed: function() {
            console.log("viewed");
        }
    });
}

function closeimage() {
    $('#imageshow').addClass('hideit');
}

function continueVisFlow() {
    console.log('continueVisFlow');
    var url = globalurl + 'resumegraph';
    console.log(url);
    $.ajax({
        type: "GET",
        url: url,
        success: function(data) {
            console.log(data);
            getStatus();
            myGetStatusInterval = setInterval(function() {
                getStatus();
            }, 2000);
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
}

function pauseVisFlow() {
    console.log('pauseVisFlow');
    var url = globalurl + 'pausegraph';
    console.log(url);
    $.ajax({
        type: "GET",
        url: url,
        success: function(data) {
            console.log(data);
            clearInterval(myGetStatusInterval);
        },
        failure: function(errMsg) {
            alert(errMsg);
            clearInterval(myGetStatusInterval);
        }
    });
}

function stopVisFlow() {
    console.log('stopgGraph');
    var url = globalurl + 'stopgraph';
    console.log(url);
    $.ajax({
        type: "GET",
        url: url,
        success: function(data) {
            console.log(data);
            clearInterval(myGetStatusInterval);
        },
        failure: function(errMsg) {
            alert(errMsg);
            clearInterval(myGetStatusInterval);
        }
    });
}


//d3 showing
function reconstructPoints(time, points) {
    //    var points = "116,39";
    var url = "https://gws.gplates.org/reconstruct/reconstruct_points/?points=" + points + "&time=" + time + "&model=SETON2012";
    $("#request-url").html("<strong>Request URL:</strong> <br> <a href=\"" + url + "\" target=\"_blank\">" + url);
    d3.json(url, function(error, data) {
        $("#raw-data").html('<strong>Returned Raw Data:</strong> <pre>' + JSON.stringify(data, undefined, 4) + '</pre>');
        geometryLayer.selectAll("*").remove();
        var circle = d3.geo.circle();
        d3.selectAll(".pathPoint").remove();
        reconstructedPoints = [];
        data.coordinates.forEach(function(d) {
            reconstructedPoints.push([d[0], d[1]]);
            drawPoint(d);
        });
    });
}

function reconstruct(time, points) {
    d3.json("https://gws.gplates.org/reconstruct/coastlines_low/?time=" + time + '&apikey=mchin-e494599c-c81b-4972-acbb-c167728c9fb2', function(error, topology) {
        coastlinsLayer.selectAll(".coastline").remove();
        coastlinsLayer.selectAll(".coastline")
            .data(topology.features)
            .attr("class", "coastlines")
            .attr("d", path)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", "coastline")
            .on('mouseover', function(d, i) {
                d3.select(this).style('fill-opacity', .7);
                d3.select(this).style('stroke', 'red');
                d3.select(this).style('stroke-width', '1px');
            })
            .on('mouseout', function(d, i) {
                d3.select(this).style({
                    'fill-opacity': .5
                });
                d3.select(this).style('stroke', 'blue');
                d3.select(this).style('stroke-width', '.25px');
            });
    });
    reconstructPoints(time, points);
}

function drawPoint(d, angle) {
    var _angle = angle || 1;
    geometryLayer.append("circle")
        .datum([d[0], d[1]])
        .attr("cx", function(d) {
            return projection(d)[0];
        })
        .attr("cy", function(d) {
            return projection(d)[1];
        })
        .attr("r", 3)
        //.attr("d",path)
        .style("fill", "red")
        .attr("class", "pathPoint")
        .append("svg:title")
        .text(function(d) {
            return "Longitude: " + d[0] + "\nLatitude: " + d[1]
        });
}