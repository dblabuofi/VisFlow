function generateTitle(curData, type) {
    var innerhtml = "<table class='table table-bordered table-hover table-sm' style='width:100%'>";
    innerhtml += "<tbody>";
    innerhtml +=
            "<tr><td class='col-md-2'> Type </td><td class='col-md-6'><label>" + type + "</label></td></tr>" +
            "<tr><td class='col-md-2'> Id </td><td class='col-md-6' ><label>" + curData.id + "</label></td></tr>" +
            "<tr><td class='col-md-2'> Name </td><td class='col-md-6'><label>" + curData.label + "</label></td></tr>" +
            "</tbody></table>";
    return innerhtml;
}
// last is delete
function generateDataResources(curData, resource, func) {
    var innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    innerhtml += "<thead><tr><th></th><th><label>Resource Name</label></th><th><label>Resource Type</label></th><th>Delete</th><tr></thead>";
    innerhtml += "<tbody>";
    for (var i = 0; i < curData[resource].length; ++i) {
        innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
        innerhtml += "<td>" + curData[resource][i].urlReturnFileName + "</td>";
        innerhtml += "<td>" + curData[resource][i].urlReturnFileType + "</td>";
        innerhtml += "<td><a><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + func + "(" + JSON.stringify(i) + ")'></span></a></td>";
        innerhtml += "</tr>";

        innerhtml += "<tr class='hideit select-row'><td colspan=4>";
        if ((curData[resource][i].resourceType === "CSV" || curData[resource][i].resourceType === "XML" || curData[resource][i].resourceType === "Other")) {
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<tr>";
            innerhtml += "<td>Organization</td>";
            innerhtml += "<td colspan='2'>" + curData[resource][i].organization + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>description</td>";
            innerhtml += "<td colspan='2'>" + curData[resource][i].description + "</td>";
            innerhtml += "</tr>";
            innerhtml += "</table>";
        } else {//need input
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<tr>";
            innerhtml += "<td>Organization</td>";
            innerhtml += "<td>" + curData[resource][i].organization + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>description</td>";
            innerhtml += "<td>" + curData[resource][i].description + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>URL</td>";
            innerhtml += "<td>" + curData[resource][i].url + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>method</td>";
            innerhtml += "<td>" + curData[resource][i].method + "</td>";
            innerhtml += "</tr>";

            innerhtml += "<tr><td colspan='2'>Params Exmaple</td></tr>";
            if (curData[resource][i].attributes !== undefined && curData[resource][i].attributes.length > 0) {
                for (var j = 0; j < curData[resource][i].attributes.length; ++j) {
                    if (curData[resource][i].attributes[j].shown === true) {
                        innerhtml += "<tr>";
                        innerhtml += "<td>" + curData[resource][i].attributes[j].name + "</td>";
                        innerhtml += "<td>" + curData[resource][i].attributes[j].example + "</td>";
                        innerhtml += "</tr>";
                    }
                }
            }
            innerhtml += "</table>";
        }
        innerhtml += "</td></tr>";

    }
    innerhtml += "</tbody></table>";

    return innerhtml;
}

function generateDataUpdateResources(curData, resource) {
    var innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    innerhtml += "<thead><tr><th></th><th><label>Resource Name</label></th><th><label>Resource Type</label></th><tr></thead>";
    innerhtml += "<tbody>";
    for (var i = 0; i < curData[resource].length; ++i) {
        innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
        innerhtml += "<td>" + curData[resource][i].urlReturnFileName + "</td>";
        innerhtml += "<td>" + curData[resource][i].urlReturnFileType + "</td>";
        innerhtml += "</tr>";

        innerhtml += "<tr class='hideit select-row'><td colspan=4>";
        if (curData[resource][i].resourceType === "CSV" || curData[resource][i].resourceType === "XML" || curData[resource][i].resourceType === "SQL" || curData[resource][i].resourceType === "Other") {
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<tr>";
            innerhtml += "<td>Organization</td>";
            innerhtml += "<td colspan='3'>" + curData[resource][i].organization + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>description</td>";
            innerhtml += "<td colspan='3'>" + curData[resource][i].description + "</td>";
            innerhtml += "</tr>";
            innerhtml += "</table>";
        } else {//need input
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<tr>";
            innerhtml += "<td>Organization</td>";
            innerhtml += "<td colspan='3'>" + curData[resource][i].organization + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>description</td>";
            innerhtml += "<td colspan='3'>" + curData[resource][i].description + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>URL</td>";
            innerhtml += "<td colspan='3' width='80%'>" + curData[resource][i].url + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>method</td>";
            innerhtml += "<td colspan='3'>" + curData[resource][i].method + "</td>";
            innerhtml += "</tr>";

            innerhtml += "<tr><td colspan='4'>Set Params</td>";
            innerhtml += "</tr>";

            //set params
            innerhtml += "<tr><td>Parameter</td><td>From</td><td>Value</td><td width='30%'>Example</td></tr>";
            if (curData[resource][i] !== undefined && curData[resource][i].attributes !== undefined && curData[resource][i].attributes.length > 0) {
                for (var j = 0; j < curData[resource][i].attributes.length; ++j) {
                    if (curData[resource][i].attributes[j].shown === true) {
                        innerhtml += "<tr>";
                        if (curData[resource][i].attributes[j].required === true) {
                            innerhtml += "<td>" + curData[resource][i].attributes[j].name + "*</td>";
                        } else {
                            innerhtml += "<td>" + curData[resource][i].attributes[j].name + "</td>";
                        }

                        innerhtml += "<td>";
                        innerhtml += "<select class='form-control' id='analyticsupdateResourceParams" + i + j + "' onchange='analyticsUpdateResourceParamChange(" + i + ", " + j + ")'>" +
                                "<option value='input' selected>Input</option>";
                        for (var k = 0; k < curData[resource].length; ++k) {
                            if (curData[resource][k].resourceType === 'CSV' || curData[resource][k].resourceType === 'SQL' || curData[resource][k].resourceType === 'XML') {
//                                                                innerhtml += "<option value='"+ curData[resource][k].urlReturnFileName+"' >" + curData[resource][k].urlReturnFileName + "</option>";
                                innerhtml += "<option value='" + k + "' >" + curData[resource][k].urlReturnFileName + "</option>";
                            }
                        }
                        innerhtml += "</select>";
                        innerhtml += "</td>";

                        innerhtml += "<td id='analyticsUpdateParamInput" + i + j + "'>";
                        if (curData[resource][i].attributes[j].attributeType === "selection") {
                            innerhtml += "<select  class='form-control'  id='" + curData[resource][i].attributes[j].name + "'>";
                            for (var k = 0; k < curData[resource][i].attributes[j].selectionpair.length; ++k) {
                                innerhtml += "<option value='" + curData[resource][i].attributes[j].selectionpair[k].value + "'>" + curData[resource][i].attributes[j].selectionpair[k].label + "</option>";
                            }
                            innerhtml += "</select>";
                        } else if (curData[resource][i].attributes[j].attributeType === "input") {
                            innerhtml += "<input class='form-control' id='" + curData[resource][i].attributes[j].name + "'>";
                        }
                        innerhtml += "</td>";

                        innerhtml += "<td id='analyticsUpdateParamResource" + i + j + "' style='display:none;'><input class='form-control' placeholder='Attribute Name' id='" + curData[resource][i].attributes[j].name + "Resource'></td>";

                        innerhtml += "<td><xmp>" + curData[resource][i].attributes[j].example + "</xmp></td>";
                        innerhtml += "</tr>";
                    }
                }
            }
            innerhtml += "</table>";

//                        //select output attributes
//                        innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
//                        innerhtml += "<tr>";
//                        innerhtml += "<td width='10%'>Out Attributes:</td>";
//                        innerhtml += "<td>";
//                        if (curData[resource][i].outAttributes !== undefined && curData[resource][i].outAttributes.length > 0) {
//                                for (var j = 0; j < curData[resource][i].outAttributes.length; ++j) {
//                                        innerhtml += "<input id='outAttributesUpdate"+i + j+"' type='checkbox' checked><span class='badge alert-info'>" + curData[resource][i].outAttributes[j].name + "</span>";
//                                }
//                        }
//                        innerhtml += "";
//                        innerhtml += "</td>";
//                        innerhtml += "</tr>";
//                        innerhtml += "</table>";
//                        

        }

        innerhtml += "</td></tr>";
    }
    innerhtml += "</tbody></table>";

    return innerhtml;
}

function generateResources(curData, resource, showId) {
    var innerhtml = "";
    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    innerhtml += "<thead><tr><th></th><th><label>Resource name</label></th><th><label>Resource Type</label></th><tr></thead>";
    innerhtml += "<tbody>";
    for (var i = 0; i < curData[resource].length; ++i) {
        if (curData[resource][i].resourceType === 'CSV' || curData[resource][i].resourceType === 'XML' || curData[resource][i].resourceType === 'SQL' || curData[resource][i].resourceType === 'SQLTable' || curData[resource][i].resourceType === 'Other') {
            innerhtml += "<tr ><td width='1%' class='collapserow'><span class='glyphicon glyphicon-chevron-right'></span></td>";
            innerhtml += "<td>" + curData[resource][i].urlReturnFileName + "</td>";
            innerhtml += "<td>" + curData[resource][i].urlReturnFileType + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr class='hideit select-row'><td colspan='3'><div id='" + showId + i + "'></div><img src='image/loading.gif' style='position:relative;left:46%;height:5vh;width:5vh;'/></td></tr>";
        } else {//we show example
            innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
            innerhtml += "<td>" + curData[resource][i].urlReturnFileName + "</td>";
            innerhtml += "<td>" + curData[resource][i].urlReturnFileType + "</td>";
            innerhtml += "</tr>";

            innerhtml += "<tr class='hideit select-row'><td colspan=4>";
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<tr>";
            innerhtml += "<td>Organization</td>";
            innerhtml += "<td>" + curData[resource][i].organization + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>description</td>";
            innerhtml += "<td>" + curData[resource][i].description + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>URL</td>";
            innerhtml += "<td>" + curData[resource][i].url + "</td>";
            innerhtml += "</tr>";
            innerhtml += "<tr>";
            innerhtml += "<td>method</td>";
            innerhtml += "<td>" + curData[resource][i].method + "</td>";
            innerhtml += "</tr>";

            innerhtml += "<tr><td colspan='2'>Params Exmaple</td></tr>";
            if (curData[resource][i].attributes !== undefined && curData[resource][i].attributes.length > 0) {
                for (var j = 0; j < curData[resource][i].attributes.length; ++j) {
                    if (curData[resource][i].attributes[j].shown === true) {
                        innerhtml += "<tr>";
                        innerhtml += "<td>" + curData[resource][i].attributes[j].name + "</td>";
                        innerhtml += "<td>" + curData[resource][i].attributes[j].example + "</td>";
                        innerhtml += "</tr>";
                    }
                }
            }
            innerhtml += "</table>";
            innerhtml += "</td></tr>";


        }


    }
    innerhtml += "</tbody></table>";

    return innerhtml;
}

function generateActions(curData, removeFunction) {
    var innerhtml = "";

    for (var i = 0; i < curData.actions.length; ++i) {
        if (curData.actions[i].act === "Code") {
            innerhtml += "<table class='table table-bordered table-hover table-sm' witdh='100%' style='margin-top:0.5vh;'><thead><tr>"
                    + "<th width='2%'><label>Library Type</label></th>"
//                    + "<th><label>Resources In</label></th>"
//                    + "<th><label>Method Name</label></th>"
                    + "<th><label>Method Type</label></th>"
                    + "<th><label>Code</label></th>"
                    + "<th><label>Resources Out</label></th>"
                    + "<th><label>Delete</label></th><tr></thead>";
            innerhtml += "<tbody>";
            innerhtml += "<tr><td>" + curData.actions[i].act + "</td>";
//            innerhtml += "<td>";
//            for (var j = 0; j < curData.actions[i].inputFileNames.length - 1; ++j) {
//                innerhtml += curData.actions[i].inputFileNames[j] + "&nbsp;,&nbsp;";
//            }
//            innerhtml += curData.actions[i].inputFileNames[curData.actions[i].inputFileNames.length - 1];
//            innerhtml += "</td>";

//            innerhtml += "<td>" + curData.actions[i].codeName + "</td>";
            innerhtml += "<td>" + curData.actions[i].codeType + "</td>";
            innerhtml += "<td>" + "<xmp>" + curData.actions[i].val + "</xmp></td>";

            innerhtml += "<td>";
            for (var j = 0; j < curData.actions[i].outputFileNames.length - 1; ++j) {
                innerhtml += curData.actions[i].outputFileNames[j] + "&nbsp;,&nbsp;";
            }
            innerhtml += curData.actions[i].outputFileNames[curData.actions[i].outputFileNames.length - 1];
            innerhtml += "</td>";
            innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(i) + ")'></span></a>" +
                    "</td></tr>";
            innerhtml += "</tbody></table>";
        } else if (curData.actions[i].act === "Resource") {
            innerhtml += "<table class='table table-bordered table-hover table-sm' witdh='100%' style='margin-top:0.5vh;'>";
//            innerhtml += "<thead><tr><th></th><th width='2%'><label>Library Type</label></th><th><label>Resource Name</label></th><th><label>Resource Type</label></th><th><label>Method For Results</label></th><th><label>Resources Out</label></th><th><label>Delete</label></th><tr></thead>";
            innerhtml += "<thead><tr><th></th><th width='2%'><label>Library Type</label></th><th><label>Resource Name</label></th><th><label>Resource Type</label></th><th><label>Resources Out</label></th><th><label>Delete</label></th><tr></thead>";
            innerhtml += "<tbody>";
            innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
            innerhtml += "<td>" + curData.actions[i].act + "</td>";

            innerhtml += "<td>";
            innerhtml += curData.actions[i].targetResource.resourceName;
            innerhtml += "</td>";
            innerhtml += "<td>";
            innerhtml += curData.actions[i].targetResource.resourceType;
            innerhtml += "</td>";
//            innerhtml += "<td>";
//            innerhtml += curData.actions[i].resultMethod;
//            innerhtml += "</td>";

            innerhtml += "<td>";
            for (var j = 0; j < curData.actions[i].outputFileNames.length - 1; ++j) {
                innerhtml += curData.actions[i].outputFileNames[j] + "&nbsp;,&nbsp;";
            }
            innerhtml += curData.actions[i].outputFileNames[curData.actions[i].outputFileNames.length - 1];
            innerhtml += "</td>";
            innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(i) + ")'></span></a>" +
                    "</td></tr>";

            innerhtml += "<tr class='hideit select-row'><td colspan=7>";
            var targetResource = curData.actions[i].targetResource;
            if (targetResource.resourceType === "CSV" || targetResource.resourceType === "XML" || targetResource.resourceType === "Other") {
                innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
                innerhtml += "<tr>";
                innerhtml += "<td>Organization</td>";
                innerhtml += "<td colspan='3'>" + targetResource.organization + "</td>";
                innerhtml += "</tr>";
                innerhtml += "<tr>";
                innerhtml += "<td>description</td>";
                innerhtml += "<td colspan='3'>" + targetResource.description + "</td>";
                innerhtml += "</tr>";
                innerhtml += "</table>";
            } else {//need input
                innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
                innerhtml += "<tr>";
                innerhtml += "<td>Organization</td>";
                innerhtml += "<td colspan='3'>" + targetResource.organization + "</td>";
                innerhtml += "</tr>";
                innerhtml += "<tr>";
                innerhtml += "<td>description</td>";
                innerhtml += "<td colspan='3'>" + targetResource.description + "</td>";
                innerhtml += "</tr>";
                innerhtml += "<tr>";
                innerhtml += "<td>URL</td>";
                innerhtml += "<td colspan='3'>" + targetResource.url + "</td>";
                innerhtml += "</tr>";
                innerhtml += "<tr>";
                innerhtml += "<td>method</td>";
                innerhtml += "<td colspan='3'>" + targetResource.method + "</td>";
                innerhtml += "</tr>";

                innerhtml += "<tr><td colspan='4'>Params</td>";
                innerhtml += "</tr>";
                //show params
                innerhtml += "<tr><td>Parameter</td><td>From</td><td>Value</td></tr>";
                if (targetResource !== undefined && targetResource.attributes !== undefined && targetResource.attributes.length > 0) {
                    for (var j = 0; j < targetResource.attributes.length; ++j) {
                        if (targetResource.attributes[j].shown === true) {
                            innerhtml += "<tr>";
                            if (targetResource.attributes[j].required === true) {
                                innerhtml += "<td>" + targetResource.attributes[j].name + "*</td>";
                            } else {
                                innerhtml += "<td>" + targetResource.attributes[j].name + "</td>";
                            }

                            innerhtml += "<td>";
                            innerhtml += targetResource.attributes[j].from;
                            innerhtml += "</td>";

                            innerhtml += "<td>";
                            innerhtml += targetResource.attributes[j].value;
                            innerhtml += "</td>";
                            innerhtml += "</tr>";
                        }
                    }
                }
                innerhtml += "</table>";

//                                //select output attributes
//                                innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
//                                innerhtml += "<tr>";
//                                innerhtml += "<td width='10%'>Out Attributes:</td>";
//                                innerhtml += "<td>";
//                                if (targetResource.outAttributes !== undefined && targetResource.outAttributes.length > 0) {
//                                        for (var j = 0; j < targetResource.outAttributes.length; ++j) {
//                                                if (targetResource.outAttributes[j].selected === 'true') {
//                                                        innerhtml += "<span class='badge alert-info'>" + targetResource.outAttributes[j].name + "</span>";
//                                                }
//                                        }
//                                }
//                                innerhtml += "";
//                                innerhtml += "</td>";
//                                innerhtml += "</tr>";
//                                innerhtml += "</table>";

            }
            innerhtml += "</td></tr>";
            innerhtml += "</tbody></table>";
        } else if (curData.actions[i].act === "Function") {
            var targetFunction = curData.actions[i].targetFunction;
            innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'><thead><th></th><th width='2%'><label>Library Type</label></th><th>Function Name</th><th>Description</th><th>Function Type</th><th>Library Name</th><th>Return Files</th><th>Return File Types</th><th>Delete</th></thead><tbody>";
            innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
            innerhtml += "<td>" + curData.actions[i].act + "</td>";
            innerhtml += "<td>" + targetFunction.functionName + "</td>";
            innerhtml += "<td>" + targetFunction.description + "</td>";
            innerhtml += "<td>" + targetFunction.functionType + "</td>";
            innerhtml += "<td>" + targetFunction.libraryName + "</td>";
//            innerhtml += "<td>";
//            innerhtml += curData.actions[i].resultMethod;
//            innerhtml += "</td>";
            innerhtml += "<td>" + curData.actions[i].outputFileNames + "</td>";
            innerhtml += "<td>" + curData.actions[i].outputFileTypes + "</td>";
            innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(i) + ")'></span></a></td></tr>";

            innerhtml += "<tr class='hideit select-row'><td colspan=10>";
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<tr><td colspan='4'>Params</td>";
            innerhtml += "</tr>";
            //show params
            innerhtml += "<tr><td width='1%'>Parameter</td><td>From</td><td>Value</td></tr>";
            if (targetFunction !== undefined && targetFunction.attributes !== undefined && targetFunction.attributes.length > 0) {
                for (var j = 0; j < targetFunction.attributes.length; ++j) {
                    if (targetFunction.attributes[j].shown === true && targetFunction.attributes[j].value !== "") {
                        innerhtml += "<tr>";
                        if (targetFunction.attributes[j].required === true) {
                            innerhtml += "<td>" + targetFunction.attributes[j].name + "*</td>";
                        } else {
                            innerhtml += "<td>" + targetFunction.attributes[j].name + "</td>";
                        }

                        innerhtml += "<td>";
                        innerhtml += targetFunction.attributes[j].from;
                        innerhtml += "</td>";

                        innerhtml += "<td>";
                        innerhtml += targetFunction.attributes[j].value;
                        innerhtml += "</td>";
                        innerhtml += "</tr>";
                    }
                }
            }

            if (targetFunction.comandLine.length > 0) {
                innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
                innerhtml += "<tr><td width='1%'><label >Command</label></td><td>" + targetFunction.comandLine + "</td></tr>";
                innerhtml += "</table>";
            }

            innerhtml += "</table>";

            innerhtml += "</td></tr>";
            innerhtml += "</tbody></table>";
        } else if (curData.actions[i].act === "ExtractFunction") {
            console.log(curData);
            innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'><thead><th></th><th width='2%'>Library Type</th><th>Return Files</th><th>Return File Types</th><th>Delete</th></thead><tbody>";
            innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
            innerhtml += "<td>" + curData.actions[i].act + "</td>";
            if (curData.resourcesOut !== undefined && curData.resourcesOut !== null && curData.resourcesOut.length != 0) {
                innerhtml += "<td>" + curData.resourcesOut[i].urlReturnFileName + "</td>";
                innerhtml += "<td>" + curData.resourcesOut[i].urlReturnFileType + "</td>";
            } else {
                innerhtml += "<td></td><td></td>";
            }
            innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(i) + ")'></span></a></td></tr>";
            innerhtml += "<tr class='hideit select-row'><td colspan=9>";
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            if (curData.actions[i].selectAttrs.length != 0) {
                if (curData.actions[i].selectAttrs[0].xpath != undefined) {
                    innerhtml += "<th>attribute</th><th>name</th><th>xpath</th>";
                } else {
                    innerhtml += "<th>attribute</th><th>name</th>";
                }
                for (var j = 0; j < curData.actions[i].selectAttrs.length; ++j) {
                    innerhtml += "<tr>";
                    innerhtml += "<td>" + curData.actions[i].selectAttrs[j].attribute + "</td>";
                    innerhtml += "<td>" + curData.actions[i].selectAttrs[j].name + "</td>";
                    if (curData.actions[i].selectAttrs[j].xpath != undefined) {
                        innerhtml += "<td>" + curData.actions[i].selectAttrs[j].xpath + "</td>";
                    }
                    innerhtml += "</tr>";
                }
            }

            if (curData.actions[i].newAttrs !== undefined) {
                innerhtml += "<tr><th><label>NEW ATTRIBUTE</label></th><th><label>NAME</label></th>";
                for (var j = 0; j < curData.actions[i].newAttrs.length; ++j) {
                    innerhtml += "<tr>";
                    innerhtml += "<td>" + curData.actions[i].newAttrs[j].attribute + "</td>";
                    innerhtml += "<td>" + curData.actions[i].newAttrs[j].xpath + "</td>";
                    innerhtml += "</tr>";
                }
            }

//                        if (curData.actions[i].xqueries !== undefined) {
//                                for (var j = 0; j < curData.actions[i].xqueries.length;++j) {
//                                        innerhtml += "<tr><td>XPath:</td><td>" +  curData.actions[i].xqueries[j] + "</td></tr>";
//                                }
//                        }
            innerhtml += "</table>";
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<tr><td>After Extract Action</td><td>" + curData.actions[i].afterAction.action + "</td><td><textarea readonly style='resize:none;width:100%;'>" + (curData.actions[i].afterAction.input == undefined ? "" : curData.actions[i].afterAction.input) + "</textarea></td></tr>";
            innerhtml += "</table>";
            innerhtml += "</tbody></table>";
        } else if (curData.actions[i].act === "MergeTable") {
            innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'><thead><th></th><th width='2%'>Library Type</th><th>Return Files</th><th>Return File Types</th><th>Delete</th></thead><tbody>";
            innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
            innerhtml += "<td>" + curData.actions[i].act + "</td>";
            innerhtml += "<td>" + curData.resourcesOut[i].urlReturnFileName + "</td>";
            innerhtml += "<td>" + curData.resourcesOut[i].urlReturnFileType + "</td>";
            innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(i) + ")'></span></a></td></tr>";
            innerhtml += "<tr class='hideit select-row'><td colspan=9>";
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<tr><td>merge action</td><td>" + curData.actions[i].mergeTableSelect + "</td><td>" + curData.actions[i].mergeTableSelectInput + "</td></tr>";
            innerhtml += "</table>";
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            if (curData.actions[i].outputFileNames[0].indexOf("xml") != -1) {
                innerhtml += "<th>attribute</th><th>name</th><th>xpath</th>";
            } else {
                innerhtml += "<th>attribute</th><th>name</th>";
            }
            if (curData.actions[i].selectAttrs !== undefined) {
                for (var j = 0; j < curData.actions[i].selectAttrs.length; ++j) {
                    innerhtml += "<tr>";
                    innerhtml += "<td>" + curData.actions[i].selectAttrs[j].attribute + "</td>";
                    innerhtml += "<td>" + curData.actions[i].selectAttrs[j].name + "</td>";
                    if (curData.actions[i].outputFileNames[0].indexOf("xml") != -1) {
                        innerhtml += "<td>" + curData.actions[i].selectAttrs[j].xpath + "</td>";
                    }
                    innerhtml += "</tr>";
                }
            }
            if (curData.actions[i].newAttrs !== undefined) {
                for (var j = 0; j < curData.actions[i].newAttrs.length; ++j) {
                    innerhtml += "<tr>";
                    innerhtml += "<td>" + curData.actions[i].newAttrs[j].attribute + "</td>";
                    innerhtml += "<td>" + curData.actions[i].newAttrs[j].action + "</td>";
                    innerhtml += "<td>" + curData.actions[i].newAttrs[j].input + "</td>";
                    innerhtml += "<td>" + curData.actions[i].newAttrs[j].attribute + "</td>";
                    innerhtml += "</tr>";
                }
            }
            innerhtml += "</table>";

            innerhtml += "</tbody></table>";
        } else if (curData.actions[i].act === "Transformer Function") {
            var targetFunction = curData.actions[i].targetFunction;
            innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'><thead><th></th><th width='2%'><label>Analytics Method</label></th><th>Return Files</th><th>Return File Types</th><th>Delete</th></thead><tbody>";
            innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
            innerhtml += "<td>" + curData.actions[i].act + "</td>";
            innerhtml += "<td>" + curData.resourcesOut[i].urlReturnFileName + "</td>";
            innerhtml += "<td>" + curData.resourcesOut[i].urlReturnFileType + "</td>";
            innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(i) + ")'></span></a></td></tr>";
            innerhtml += "<tr class='hideit select-row'><td colspan=9>";

            if (curData.actions[i].transformResources.length > 0) {
                innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
                innerhtml += "<thead><th>Resource</th><th>Type</th></thead>";
                //show params
                for (var j = 0; j < curData.actions[i].transformResources.length; ++j) {
                    innerhtml += "<tr>";
                    innerhtml += "<td>" + curData.actions[i].transformResources[j].Resource + "</td>";
                    innerhtml += "<td>" + curData.actions[i].transformResources[j].Type + "</td>";
                    innerhtml += "</tr>";
                }
                innerhtml += "</table>";
            }

            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            if (curData.actions[i].outputFileNames[0].indexOf("xml") != -1) {
                innerhtml += "<th>attribute</th><th>name</th><th>xpath</th>";
            } else {
                innerhtml += "<th>attribute</th><th>name</th>";
            }
            for (var j = 0; j < curData.actions[i].updateAttrs.length; ++j) {
                innerhtml += "<tr>";
                innerhtml += "<td>" + curData.actions[i].updateAttrs[j].attribute + "</td>";
                innerhtml += "<td>" + curData.actions[i].updateAttrs[j].name + "</td>";
                if (curData.actions[i].outputFileNames[0].indexOf("xml") != -1) {
                    innerhtml += "<td>" + curData.actions[i].updateAttrs[j].xpath + "</td>";
                }
                innerhtml += "</tr>";
                innerhtml += "<tr><td colspan='100'>";
                innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'>";
                innerhtml += "<th><label>attribute</label></th><th><label>value</label></th>";
                for (var k = 0; k < curData.actions[i].updateAttrs[j].action.attributes.length; ++k) {
                    innerhtml += "<tr>";
                    innerhtml += "<td>" + curData.actions[i].updateAttrs[j].action.attributes[k].label + "</td>"
                    innerhtml += "<td>" + curData.actions[i].updateAttrs[j].action.attributes[k].value + "</td>"
                    innerhtml += "</tr>";
                }
                innerhtml += "</table>";
                innerhtml += "</td></tr>";
            }

            if (curData.actions[i].newAttrs !== undefined) {
                for (var j = 0; j < curData.actions[i].newAttrs.length; ++j) {
                    innerhtml += "<tr><td colspan='100'>";
                    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0vh;'>";
                    innerhtml += "<th>new attribute</th><th>action</th>";
                    innerhtml += "<tr>";
                    innerhtml += "<td>" + curData.actions[i].newAttrs[j].attribute + "</td>";
                    innerhtml += "<td>" + curData.actions[i].newAttrs[j].action.libraryName + "</td>";
                    innerhtml += "</tr>";
                    innerhtml += "<tr>";
                    innerhtml += "<td><label>LABEL</label></td>";
                    innerhtml += "<td><label>VALUE</label></td>";
                    innerhtml += "</tr>";
                    for (var k = 0; k < curData.actions[i].newAttrs[j].action.attributes.length; ++k) {
                        innerhtml += "<tr>";
                        innerhtml += "<td>" + curData.actions[i].newAttrs[j].action.attributes[k].label + "</td>";
                        innerhtml += "<td>" + curData.actions[i].newAttrs[j].action.attributes[k].value + "</td>";
                        innerhtml += "</tr>";
                    }
                    innerhtml += "</table>";
                }
            }
            innerhtml += "</table>";


            innerhtml += "</td></tr>";
            innerhtml += "</tbody></table>";
        } else if (curData.actions[i].act === "IF") {
            innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'><thead><th><label>Resource</label></th><th><label>Attribute</label></th><th>Group Operator</th><th>Condition</th><th>Value</th><th>Delete</th></thead><tbody>";

            for (var j = 0; j < curData.actions[i].conditions.length; ++j) {
                innerhtml += "<tr>";
                if (curData.actions[i].conditions[j].logic === "") {
                    innerhtml += "<td>" + curData.actions[i].conditions[j].resource + "</td>";
                    innerhtml += "<td>" + curData.actions[i].conditions[j].attribute + "</td>";
                    innerhtml += "<td>" + curData.actions[i].conditions[j].groupOP + "</td>";
                    innerhtml += "<td>" + curData.actions[i].conditions[j].condition + "</td>";
                    innerhtml += "<td>" + curData.actions[i].conditions[j].value + "</td>";
                    innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(j) + ")'></span></a></td></tr>";
                } else {
                    innerhtml += "<td>" + curData.actions[i].conditions[j].logic + "</td>";
                }
                innerhtml += "</tr>";
            }
            innerhtml += "</tbody></table>";

            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<thead><th>Branch</th><th>Label</th><th>ID</th></thead>";
            innerhtml += "<tr><td>True branch</th><td>" + curData.actions[i].trueBranch.label + "</td><td>" + curData.actions[i].trueBranch.id + "</td></tr>";
            innerhtml += "<tr><td>False branch</th><td>" + curData.actions[i].falseBranch.label + "</td><td>" + curData.actions[i].falseBranch.id + "</td></tr>";
            innerhtml += "</table>";
        } else if (curData.actions[i].act === "Repeat") {

            if (curData.actions[i].conditionType == 'count') {
                innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'><thead><th><label>Repeat Times</label></th><th><label>Repeat Node Label</label></th><th>Repeat Node ID</th><th>Delete</th></thead><tbody>";
                innerhtml += "<tr>";
                innerhtml += "<td>" + curData.actions[i].repeatTimes + "</td>";
                innerhtml += "<td>" + curData.actions[i].repeatNode.label + "</td>";
                innerhtml += "<td>" + curData.actions[i].repeatNode.id + "</td>";
                innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(j) + ")'></span></a></td></tr>";
                innerhtml += "</tr>";
            } else {
                innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'><thead><th><label>Resource</label></th><th><label>Attribute</label></th><th>Group Operator</th><th>Condition</th><th>Value</th><th>Delete</th></thead><tbody>";
                for (var j = 0; j < curData.actions[i].conditions.length; ++j) {
                    innerhtml += "<tr>";
                    if (curData.actions[i].conditions[j].logic === "" || curData.actions[i].conditions[j].logic.length == 0) {
                        innerhtml += "<td>" + curData.actions[i].conditions[j].resource + "</td>";
                        innerhtml += "<td>" + curData.actions[i].conditions[j].attribute + "</td>";
                        innerhtml += "<td>" + curData.actions[i].conditions[j].groupOP + "</td>";
                        innerhtml += "<td>" + curData.actions[i].conditions[j].condition + "</td>";
                        innerhtml += "<td>" + curData.actions[i].conditions[j].value + "</td>";
                        innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(j) + ")'></span></a></td></tr>";
                    } else {
                        innerhtml += "<td>" + curData.actions[i].conditions[j].logic + "</td>";
                    }
                    innerhtml += "</tr>";
                }
            }

            innerhtml += "</tbody></table>";

        } else if (curData.actions[i].act === "procedure") {
            innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'>";
            innerhtml += "<thead><tr><th><label>Module</label></th><th><label>" + curData.actions[i].module.fileName + "</label></th><th><button class='btn btn-warning' id='procedureShowModule' onclick='procedureShowModule()'><span>Show</span></button></th><th><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(i) + ")'></span></a></th></tr></thead><tbody>";
            innerhtml += "<tr><td colspan='10'>";
            if (curData.actions[i].inputReplace.length != 0) {
                innerhtml += '<div class="inputfiles" ><label class="btn-warning">Input Files</label>';
                for (var j = 0; j < curData.actions[i].inputReplace.length; ++j) {
                    innerhtml += "<div class='row'>";
                    innerhtml += '<div class="col-md-5">' + curData.actions[i].inputReplace[j].oldFile + '</div>';
                    innerhtml += '<div class="col-md-2"><label>REPLACED</label></div>';
                    innerhtml += '<div class="col-md-5">' + curData.actions[i].inputReplace[j].newFile + '</div>';
                    innerhtml += "</div>";
                }
                innerhtml += "</div>";
            }
            innerhtml += '<div class="outputfiles"><label class="btn-warning">Output Files</label>';
            for (var j = 0; j < curData.actions[i].outputReplace.length; ++j) {
                innerhtml += "<div class='row'>";
                innerhtml += '<div class="col-md-5">' + curData.actions[i].outputReplace[j].oldFile + '</div>';
                innerhtml += '<div class="col-md-2"><label>REPLACED</label></div>';
                innerhtml += '<div class="col-md-5">' + curData.actions[i].outputReplace[j].newFile + '</div>';
                innerhtml += "</div>";
            }
            innerhtml += "</div>";
            innerhtml += "</td></tr>";
            innerhtml += "</tbody></table>";
        } else if (curData.actions[i].act === "generalIO") {
            if (curData.resourcesOut.length == 0)
                continue;
            innerhtml += "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'>";
            innerhtml += "<thead><tr><th><label>Resource</label></th><th><label>Remove</label></th></tr></thead><tbody>";
            for (var k = 0; k < curData.resourcesOut.length; ++k) {
                innerhtml += "<tr>";
                innerhtml += "<td>";
                innerhtml += curData.resourcesOut[k].urlReturnFileName;
                innerhtml += "</td>";
                innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunction + "(" + JSON.stringify(i) + ")'></span></a></td></tr>";
            }

            innerhtml += "</tbody></table>";
        }

    }

    return innerhtml;
}


function generateLibrary(curData, library, removeFunc) {
    var innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    innerhtml += "<thead><tr><th></th><th><label>Library Name</label></th><th><label>Library Type</label></th><th>Delete</th></tr></thead>";
    innerhtml += "<tbody>";
    for (var i = 0; i < curData[library].length; ++i) {
        innerhtml += "<tr><td class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
        innerhtml += "<td>" + curData[library][i].libraryName + "</td>";
        innerhtml += "<td>" + curData[library][i].libraryType + "</td>";
        innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunc + "(" + JSON.stringify(i) + ")'></span></td></tr>";
        innerhtml += "<tr class='hideit select-row'><td colspan='4'>";
        innerhtml += "<p>" + curData[library][i].description + "</p>";
        innerhtml += "<label>Functions:</label><br>";
        innerhtml += "<ul>";
        for (var j = 0; j < curData[library][i].function.length; ++j) {
            innerhtml += "<li data-toggle='tooltip' title='" + curData[library][i].function[j].description + "'>" + curData[library][i].function[j].functionName + "</li>";
        }
        innerhtml += "</ul>";
        innerhtml += "</td>";
        innerhtml += "<tr>";
    }
    innerhtml += "</tbody></table>";

    return innerhtml;
}


function generateLibraryFunction(curData, library, removeFunc) {
//        var innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
//        innerhtml += "<thead><tr><th></th><th><label>Library Name</label></th><th><label>Library Type</label></th><th>Delete</th></tr></thead>";
//        innerhtml += "<tbody>";
    var innerhtml = "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'>";
    innerhtml += "<thead><th></th><th>Function Name</th><th>Function Type</th><th>Organization</th><th>Input Paramters</th><th>Return File Type</th><th>Remove</th></thead><tbody>";

    for (var i = 0; i < curData[library].length; ++i) {
        innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
        innerhtml += "<td>" + curData[library][i].functionName + "</td>";
        innerhtml += "<td>" + curData[library][i].functionType + "</td>";
        innerhtml += "<td>" + curData[library][i].organization + "</td>";
        innerhtml += "<td>";
        if (curData[library][i].attributes !== undefined) {
            for (var j = 0; j < curData[library][i].attributes.length; ++j) {
                if (curData[library][i].attributes[j].shown === true) {
                    innerhtml += "<span class='badge alert-info'>" + curData[library][i].attributes[j].name + "</span>";
                }
            }
        }
        innerhtml += "</td>";
        if (curData[library][i].urlReturnFileType === undefined)
            curData[library][i].urlReturnFileType = "";
        innerhtml += "<td>" + curData[library][i].urlReturnFileType + "</td>";
        innerhtml += "<td><span class='glyphicon glyphicon-remove' style='color: red;' onclick='" + removeFunc + "(" + JSON.stringify(i) + ")'></span></td></tr>";
        innerhtml += "<tr class='hideit select-row'><td colspan=9>";
        innerhtml += curData[library][i].description + "</td>";
        innerhtml += "</tr>";
    }
    innerhtml += "</tbody></table>";

    return innerhtml;
}

function generateFunctionInfoLibrary(data, id) {
    console.log(data);
    if (data.length === 0) {
        $("#" + id).html("");
        return;
    }
    var innerhtml = "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'>";
    innerhtml += "<thead><th></th><th>Function Name</th><th>Function Type</th><th>Organization</th><th>Descripiton</th><th>Aggregate Name</th><th>Input Paramters</th><th>Return File Type</th><th>selected</th></thead><tbody>";
    for (var i = 0; i < data.length; ++i) {
        var index = myIncludeFieldIndex(curData.actions, data[i].id, 'id');
        innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
        innerhtml += "<td>" + data[i].functionName + "</td>";
        innerhtml += "<td>" + data[i].functionType + "</td>";
        innerhtml += "<td>" + data[i].organization + "</td>";
        innerhtml += "<td>" + data[i].description + "</td>";
        innerhtml += "<td>" + data[i].aggregateName + "</td>";
        innerhtml += "<td>";
        if (data[i].attributes !== undefined) {
            for (var j = 0; j < data[i].attributes.length; ++j) {
                if (data[i].attributes[j].shown === true) {
                    innerhtml += "<span class='badge alert-info'>" + data[i].attributes[j].name + "</span>";
                }
            }
        }
        innerhtml += "</td>";
        if (data[i].urlReturnFileType === undefined)
            data[i].urlReturnFileType = "";
        innerhtml += "<td>" + data[i].urlReturnFileType + "</td>";
        if (index !== -1) {
            innerhtml += "<td><input checked id='analyticsFunction" + i + "' type='checkbox'></td>";
        } else {
            innerhtml += "<td><input id='analyticsFunction" + i + "' type='checkbox'></td>";
        }
        innerhtml += "</tr>";

        innerhtml += "<tr class='hideit select-row'><td colspan=9>";
        innerhtml += data[i].description + "</td>";
        innerhtml += "</tr>";

    }
    innerhtml += "</tbody></table>";

    $("#" + id).html(innerhtml);
    bindAnalyticsFunctions();
}



function generateUpdateLibraries(data) {
//        var innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
//        innerhtml += "<thead><tr><th width='1%'></th><th><label>Library Name</label></th><th><label>Library Type</label></th><th>Selected</th><tr></thead>";
//        innerhtml += "<tbody>";
//        for (var i = 0; i < data.length; ++i) {
//                innerhtml += "<tr><td class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
//                innerhtml += "<td>" + data[i].libraryName + "</td>";
//                innerhtml += "<td>" + data[i].libraryType + "</td>";
//                
//                var index = myIncludeFieldIndex(curData.libraries, data[i].libraryName, "libraryName");
//                if (index !== -1) {
//                        innerhtml += "<td><input checked id='librarywebservice" + i + "' type='checkbox'></td>";
//                } else {
//                        innerhtml += "<td><input id='librarywebservice" + i + "' type='checkbox'></td>";
//                }
//                innerhtml += "</tr>";
//                innerhtml += "<tr class='hideit select-row'><td colspan='4'>";
//                innerhtml += "<p>" + data[i].description + "</p>";
//                innerhtml += "<label>Functions:</label><br>";
//                innerhtml += "<ul>";
//                for (var j = 0; j < data[i].function.length; ++j) {
//                        innerhtml += "<li data-toggle='tooltip' title='" + data[i].function[j].description + "'>" + data[i].function[j].functionName + "</li>";
//                }
//                innerhtml += "</ul>";
//                innerhtml += "</td>";
//                innerhtml += "<tr>";
//        }
//        innerhtml += "</tbody></table>";

    var innerhtml = "<table class='table table-bordered table-hover table-sm wholewidth' style='margin-top:0.5vh;'>";
    innerhtml += "<thead><th></th><th>Function Name</th><th>Function Type</th><th>Organization</th><th>Input Paramters</th><th>Return File Type</th><th>selected</th></thead><tbody>";
    for (var i = 0; i < data.length; ++i) {
        var index = myIncludeFieldIndex(curData.libraries, data[i].id, 'id');
        innerhtml += "<tr><td width='1%'  class='collapsecolumn'><span class='glyphicon glyphicon-chevron-right'></span></td>";
        innerhtml += "<td>" + data[i].functionName + "</td>";
        innerhtml += "<td>" + data[i].functionType + "</td>";
        innerhtml += "<td>" + data[i].organization + "</td>";
        innerhtml += "<td>";
        if (data[i].attributes !== undefined) {
            for (var j = 0; j < data[i].attributes.length; ++j) {
                if (data[i].attributes[j].shown === true) {
                    innerhtml += "<span class='badge alert-info'>" + data[i].attributes[j].name + "</span>";
                }
            }
        }
        innerhtml += "</td>";
        if (data[i].urlReturnFileType === undefined)
            data[i].urlReturnFileType = "";
        innerhtml += "<td>" + data[i].urlReturnFileType + "</td>";
        if (index !== -1) {
            innerhtml += "<td><input checked id='librarywebservice" + i + "' type='checkbox'></td>";
        } else {
            innerhtml += "<td><input id='librarywebservice" + i + "' type='checkbox'></td>";
        }
        innerhtml += "</tr>";

        innerhtml += "<tr class='hideit select-row'><td colspan=9>";
        innerhtml += data[i].description + "</td>";
        innerhtml += "</tr>";

    }
    innerhtml += "</tbody></table>";

    return innerhtml;
}

function getResroucesLibrary(data) {
//       var innerhtml = "<div class='container'>"; 
    var innerhtml = "";
    innerhtml += "<div class='panel-group'>";
    innerhtml += "<div class='panel panel-info'>";
    innerhtml += "<div class='panel-heading' style='text-align:center'>";
    innerhtml += data.libraryName
    innerhtml += "</div>";

    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";

    innerhtml += "<tr><td width='15%';><label class='label label-primary'>Organization:</label></td><td>" + data.organization + "</td></tr>";
    innerhtml += "<tr><td><label class='label label-primary'>Library Type:</label></td><td>" + data.libraryType + "</td></tr>";
    innerhtml += "<tr><td><label class='label label-primary'>ID:</label></td><td>" + data.id + "</div>";
    innerhtml += "<tr><td><label class='label label-primary'>Description:</label></td><td>" + data.description + "</td></tr>";
    innerhtml += "<tr><td><label class='label label-primary'>Functions:</label></td><td>";

    innerhtml += "<ul class='list-group'>";
    for (var i = 0; i < data.function.length; ++i) {
        innerhtml += "<li class='list-group-item'>" + data.function[i].functionName + "</li>";
    }
    innerhtml += "</ul>";

    innerhtml += "</td></tr></tbody></table>";

    innerhtml += "</div>";
    innerhtml += "</div>";
//        innerhtml += "</div>";
    return innerhtml;


}

function getResroucesFunction(data) {
//        var innerhtml = "<div class='container'>";
    var innerhtml = "";
    innerhtml += "<div class='panel-group'>";
    innerhtml += "<div class='panel panel-info'>";
    innerhtml += "<div class='panel-heading' style='text-align:center'>";
    innerhtml += data.functionName;
    innerhtml += "</div>";

    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";


//        innerhtml += "<tr><td ><label class='label label-primary'>Library Name:</label></td><td>" + data.libraryName + "</td></tr>";
    if (data.organization === undefined)
        data.organization = "";
    innerhtml += "<tr><td width='15%';><label class='label label-primary'>Organization:</label></td><td>" + data.organization + "</td></tr>";
    innerhtml += "<tr><td><label class='label label-primary'>ID:</label></td><td>" + data.id + "</td></tr>";
    innerhtml += "<tr><td><label class='label label-primary'>Type:</label></td><td>" + data.functionType + "</td></tr>";
//        innerhtml += "<tr><td><label class='label label-primary'>Function Method:</label></td><td>" + data.method + "</td></tr>";
    if (data.description === undefined)
        data.description = "";
    innerhtml += "<tr><td><label class='label label-primary'>Description:</label></td><td>" + data.description + "</td></tr>";

    if (data.attributes !== undefined) {
        innerhtml += "<tr><td><label class='label label-primary'>Input Attributes:</label></td><td>";
        for (var i = 0; i < data.attributes.length; ++i) {
            innerhtml += "<label class='badge alert-info'>" + data.attributes[i].name + "</label>";
        }
        innerhtml += "</td></tr>";
    }
//        if (data.outputAttributes !== undefined) {
//                innerhtml += "<tr><td><label class='label label-primary'>Output Attributes:</label></td><td>";
//                for (var i = 0; i < data.outputAttributes.length; ++i) {
//                        innerhtml += "<label class='badge alert-info'>" + data.outputAttributes[i].name + "</label>";
//                }
//                innerhtml += "</td></tr>";
//        }

    innerhtml += "</tbody></table>";

    innerhtml += "</div>";
    innerhtml += "</div>";
    return innerhtml;
}

function getResroucesResrouces(data) {
    var innerhtml = "";
    innerhtml += "<div class='panel-group'>";
    innerhtml += "<div class='panel panel-info'>";
    innerhtml += "<div class='panel-heading' style='text-align:center;width:100%;'>";
    innerhtml += data.resourceName;
    innerhtml += "</div>";
    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";

    innerhtml += "<tr><td><label class='label label-primary'>ID:</label></td><td>" + data.id + "</td></tr>";
    innerhtml += "<tr><td width='15%';><label class='label label-primary'>Resource Type:</label></td><td>" + data.resourceType + "</td></tr>";
    if (data.organization === undefined)
        data.organization = "";
    innerhtml += "<tr><td><label class='label label-primary'>Organization:</label></td><td>" + data.organization + "</td></tr>";
    innerhtml += "<tr><td><label class='label label-primary'>File Name:</label></td><td>" + data.fileName + "</td></tr>";
    if (data.description === undefined)
        data.description = "";
    innerhtml += "<tr><td><label class='label label-primary'>Description:</label></td><td>" + data.description + "</td></tr>";

    if (data.inputAttributes !== undefined) {
        innerhtml += "<tr><td><label class='label label-primary'>Attributes:</label></td><td>";
        for (var i = 0; i < data.attributes.length; ++i) {
            innerhtml += "<label class='badge alert-info'>" + data.attributes[i].name + "</label>";
        }
        innerhtml += "</td></tr>";
    }

    innerhtml += "</tbody></table>";
    innerhtml += "</div>";
    innerhtml += "</div>";

    innerhtml += "<div style='width:100%;height:100%;'>";
    innerhtml += "<div id='resourcePreview' style='height:100%' ><h3>Preview<h3>";
    innerhtml += "<div id='resourcePreviewContent' style='height:100%'>";
    innerhtml += "</div>";
    innerhtml += "</div>";
    innerhtml += "</div>";


    return innerhtml;
}

function generatePreview(data) {
    var innerhtml = "<textarea style='height:100%;resize:none;' disabled class='wholewidth'>" + data + "</textarea>";

    return innerhtml;
}

function generateCombine(curData, removeFunc) {
    var innerhtml = "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    innerhtml += "<tbody>";
    innerhtml += "<tr><td width='30%'>Matcher</td><td><label>" + curData.actions[0].matcher + "</label></td></tr>";
    innerhtml += "<tr><td>Key Identifier</td><td><label>" + curData.actions[0].identifier + "</label></td></tr>";
    innerhtml += "<tr><td>Output File Name</td><td><label>" + curData.actions[0].outputFileNames + "</label></td></tr>";
    innerhtml += "<tr><td>Output File type</td><td><label>" + curData.actions[0].outputFileTypes + "</label></td></tr>";
    innerhtml += "<tr><td>Matched Keys</td><td>";
    innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    innerhtml += "<tr><td>";
    var leftKeys = curData.actions[0].leftKeys;
    var rightKeys = curData.actions[0].rightKeys;
    for (var i = 0; i < curData.actions[0].leftKeys.length; ++i) {
        innerhtml += "<div class='row'><div class='col-md-5'>" + leftKeys[i] + "</div><div class='col-md-2'>matches</div><div class='col-md-5'>" + rightKeys[i] + "</div></div>";
    }
    innerhtml += "</td>"
    innerhtml += "</tr>"


    innerhtml += "</td></tr>";
    innerhtml += "</tbody>";
    innerhtml += "</table>";
    innerhtml += "</td></tr>";
    innerhtml += "<tfoot><td colspan='2'><button class='btn btn-info' onclick='" + removeFunc + "()'>Delete Action</button>" +
            "</td></tfoot>";
    innerhtml += "</tbody></table>";

    return innerhtml;
}

function generateNodeShow(curData) {
    var innerhtml = "<table class='table table-bordered table-hover table-sm' style='width:100%'>";
    if (curData.type === "data") {
        innerhtml = generateTitle(curData, 'Data');
        if (curData.resources !== undefined && curData.resources.length > 0) {
            innerhtml += "<label  class='label label-primary'>Resources:</label><br>";
            innerhtml += generateDataResources(curData, 'resources', 'removeResource');
        }
    } else if (curData.type === "combine") {
        innerhtml = generateTitle(curData, 'Combine');
        //Resources
        innerhtml += "<label  class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowCombine');
        }
        //Resources
        innerhtml += "<label  class='label label-primary'>Resources Out:</label><br>";
        if (curData.resourcesOut !== undefined && curData.resourcesOut.length > 0) {
            innerhtml += generateResources(curData, 'resourcesOut', 'resourceOutShowCombine');
        }
        //actions
        innerhtml += "<label class='label label-primary'>Actions:</label><br>";
        if (curData.actions !== undefined && curData.actions.length > 0) {
            innerhtml += generateCombine(curData, 'removeCombineAction');
        }
    } else if (curData.type === "fusion") {
        innerhtml = generateTitle(curData, 'Fusion');
        //Resources
        innerhtml += "<label  class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowFusion');
        }
        //Resources
        innerhtml += "<label  class='label label-primary'>Resources Out:</label><br>";
        if (curData.resourcesOut !== undefined && curData.resourcesOut.length > 0) {
            innerhtml += generateResources(curData, 'resourcesOut', 'resourceOutShowFusion');
        }
        //actions
        innerhtml += "<label class='label label-primary'>Actions:</label><br>";
        if (curData.actions !== undefined && curData.actions.length > 0) {
            innerhtml += generateCombine(curData, 'removeCombineAction');
        }
    } else if (curData.type === "analytics") {
        innerhtml = generateTitle(curData, 'Analytics');
        //Resources
        innerhtml += "<label  class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowAnalytics');
        }
        //Resources out
        innerhtml += "<label class='label label-primary'>Resources Out:</label><br>";
        if (curData.resourcesOut !== undefined && curData.resourcesOut.length > 0) {
            innerhtml += generateResources(curData, 'resourcesOut', 'resourceOutShowAnalytics');
        }
        //actions
        innerhtml += "<label class='label label-primary'>Action:</label><br>";
        if (curData.actions !== undefined && curData.actions.length > 0) {
            innerhtml += generateActions(curData, 'removeAnalyticsAction');
        }
    } else if (curData.type === "terminal") {
        innerhtml = generateTitle(curData, 'Terminal');
        //attributes
        innerhtml += "<label class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowTerminal');
        }
        //actions
        innerhtml += "<label class='label label-primary'>Actions:</label><br>";
        if (curData.actions !== undefined) {
            innerhtml += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
            innerhtml += "<thead><tr><th><label>Resource Name</label></th><th><label>Print Type</label></th><th>Delete</th></tr></thead>";
            innerhtml += "<tbody>";
            for (var i = 0; i < curData.actions.length; ++i) {
                innerhtml += "<tr><td>" + curData.actions[i].outputFileNames[0] + "</td><td>" + curData.actions[i].printType + "</td><td>";
                innerhtml += "<span class='glyphicon glyphicon-remove' style='color: red;' onclick='removeTerminalAction(" + JSON.stringify(i) + ")'></span></a>" +
                        "</td></tr>";
                if (curData.actions[i].printType == 'table' && curData.actions[i].submit !== undefined && curData.actions[i].numOfWins != 0) {
                    innerhtml += "<tr><td colspan='3'>"
                    innerhtml += "<table class='table table-bordered table-hover table-sm' witdh='100%' style='margin-top:0.5vh;'>";
                    innerhtml += "<tbody>";
                    innerhtml += "<tr>"
                    innerhtml += "<td width='20%'>";
                    innerhtml += "Number of Windows";
                    innerhtml += "</td>";
                    innerhtml += "<td width='20%'>";
                    innerhtml += curData.actions[i].numOfWins;
                    innerhtml += "</td>";
                    innerhtml += "</tr>"
                    innerhtml += "<tr>"
                    innerhtml += "<td width='20%'>";
                    innerhtml += "First Window";
                    innerhtml += "</td>";
                    innerhtml += "<td width='20%'>";
                    innerhtml += curData.actions[i].submit.windowFunction[0];
                    innerhtml += "</td>";
                    innerhtml += "</tr>"
                    innerhtml += "<tr>"
                    innerhtml += "<td width='20%'>";
                    innerhtml += "Paramters";
                    innerhtml += "</td>";
                    innerhtml += "<td width='20%'>";
                    if ($.isArray(curData.actions[i].submit.values[0]) == true) {
                        for (var j = 0; j < curData.actions[i].submit.values[0].length - 1; ++j)
                            innerhtml += curData.actions[i].submit.values[0][j] + ", ";
                        innerhtml += curData.actions[i].submit.values[0][curData.actions[i].submit.values[0].length - 1];
                    } else {
                        innerhtml += curData.actions[i].submit.values[0];
                    }
                    innerhtml += "</td>";
                    innerhtml += "</tr>"
                    if (curData.actions[i].submit.windowFunction.length == 2) {
                        innerhtml += "<td width='20%'>";
                        innerhtml += "Second Window";
                        innerhtml += "</td>";
                        innerhtml += "<td width='20%'>";
                        innerhtml += curData.actions[i].submit.windowFunction[1];
                        innerhtml += "</td>";
                        innerhtml += "</tr>"
                        innerhtml += "<tr>"
                        innerhtml += "<td width='20%'>";
                        innerhtml += "Paramters";
                        innerhtml += "</td>";
                        innerhtml += "<td width='20%'>";
                        if ($.isArray(curData.actions[i].submit.values[0]) == true) {
                            for (var j = 0; j < curData.actions[i].submit.values[1].length - 1; ++j)
                                innerhtml += curData.actions[i].submit.values[1][j] + ", ";
                            innerhtml += curData.actions[i].submit.values[1][curData.actions[i].submit.values[1].length - 1];
                        } else {
                            innerhtml += curData.actions[i].submit.values[1];
                        }
                        innerhtml += "</td>";
                        innerhtml += "</tr>";
                    }
                    innerhtml += "</tbody></table>";
                    innerhtml += "</td></tr>";
                }
                if (curData.actions[i].printType == 'table' && curData.actions[i].colFuns != undefined && curData.actions[i].colFuns.length != 0) {
                    innerhtml += "<tr><td colspan='3'>"
                    innerhtml += "<table class='table table-bordered table-hover table-sm' witdh='100%' style='margin-top:0.5vh;'>";
                    innerhtml += "<tbody>";
                    innerhtml += "<tr>"
                    innerhtml += "<td width='20%'>";
                    innerhtml += "Column Function";
                    innerhtml += "</td>";
                    innerhtml += "<td width='20%'>";
                    innerhtml += "Parameter";
                    innerhtml += "</td>";
                    innerhtml += "</tr>"
                    for (var j = 0; j < curData.actions[i].colFuns.length; ++j) {
                        innerhtml += "<tr>"
                        innerhtml += "<td width='20%'>";
                        innerhtml += curData.actions[i].colFuns[j].functionName;
                        innerhtml += "</td>";
                        innerhtml += "<td width='20%'>";
                        innerhtml += curData.actions[i].colFuns[j].value;
                        innerhtml += "</td>";
                        innerhtml += "</tr>"
                    }
                    innerhtml += "</tbody></table>";
                    innerhtml += "</td></tr>";
                }
            }
            innerhtml += "</tbody></table>";
        }
    } else if (curData.type === "adapter") {
        innerhtml = generateTitle(curData, 'Adapter');
        innerhtml += "<label class='label label-primary'>Resources In:</label><br>";
        //inattris
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowAdapter');
        }
        //outattris
        innerhtml += "<label class='label label-primary'>Resources Out:</label><br>";
        if (curData.resourcesOut !== undefined && curData.resourcesOut.length > 0) {
            innerhtml += generateResources(curData, 'resourcesOut', 'resourceOutShowAdapter');
        }
        //actions
        innerhtml += "<label>Action:</label><br>";
        if (curData.actions !== undefined && curData.actions.length > 0) {
            innerhtml += generateActions(curData, 'removeAdapterAction');
        }
    } else if (curData.type === "library") {
        innerhtml = generateTitle(curData, 'Library');
        //inattris
        innerhtml += "<label class='label label-primary'>Librarys:</label><br>";
        if (curData.libraries !== undefined && curData.libraries.length > 0) {
            innerhtml += generateLibraryFunction(curData, 'libraries', 'removeLibraryLibraries');
        }
    } else if (curData.type === "printer") {
        innerhtml = generateTitle(curData, 'Printer');
        //attributes
        innerhtml += "<label class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowPrinter');
        }
    } else if (curData.type === "IO") {
        innerhtml = generateTitle(curData, 'I/O');
        //attributes
        innerhtml += "<label class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowIO');
        }
        //attributes
        innerhtml += "<label class='label label-primary'>Resources Out:</label><br>";
        if (curData.resourcesOut !== undefined && curData.resourcesOut.length > 0) {
            innerhtml += generateResources(curData, 'resourcesOut', 'resourceOutShowIO');
        }
        //actions
        innerhtml += "<label class='label label-primary'>Action:</label><br>";
        if (curData.actions !== undefined && curData.actions.length > 0) {
            innerhtml += generateActions(curData, 'removeGeneralIOAction');
        }
    } else if (curData.type === "waiton") {
        innerhtml = generateTitle(curData, 'Wait On');
        //attributes
        innerhtml += "<label class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowWaiton');
        }
        //attributes
        innerhtml += "<label class='label label-primary'>Resources Out:</label><br>";
        if (curData.resourcesOut !== undefined && curData.resourcesOut.length > 0) {
            innerhtml += generateResources(curData, 'resourcesOut', 'resourceOutShowWaiton');
        }
    } else if (curData.type === "if") {
        innerhtml = generateTitle(curData, 'IF');
        //attributes
        innerhtml += "<label class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowIF');
        }
        //actions
        innerhtml += "<label class='label label-primary'>Action:</label><br>";
        if (curData.actions !== undefined && curData.actions.length > 0) {
            innerhtml += generateActions(curData, 'removeIFAction');
        }
    } else if (curData.type === "repeat") {
        innerhtml = generateTitle(curData, 'Repeat');
        //attributes
        innerhtml += "<label class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowRepeat');
        }
        //attributes
        innerhtml += "<label class='label label-primary'>Resources Out:</label><br>";
        if (curData.resourcesOut !== undefined && curData.resourcesOut.length > 0) {
            innerhtml += generateResources(curData, 'resourcesOut', 'resourceOutShowRepeat');
        }
        //actions
        innerhtml += "<label class='label label-primary'>Action:</label><br>";
        if (curData.actions !== undefined && curData.actions.length > 0) {
            innerhtml += generateActions(curData, 'removeRepeatAction');
        }
    } else if (curData.type === "connect") {
        innerhtml = generateTitle(curData, 'Connect');
        //attributes
        innerhtml += "<label class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowConnect');
        }
        //outattris
        innerhtml += "<label class='label label-primary'>Resources Out:</label><br>";
        if (curData.resourcesOut !== undefined && curData.resourcesOut.length > 0) {
            innerhtml += generateResources(curData, 'resourcesOut', 'resourceOutShowConnect');
        }
    } else if (curData.type === "nested") {
        innerhtml = generateTitle(curData, 'Procedure');
        //attributes
        innerhtml += "<label class='label label-primary'>Resources In:</label><br>";
        if (curData.resourcesIn !== undefined && curData.resourcesIn.length > 0) {
            innerhtml += generateResources(curData, 'resourcesIn', 'resourceInShowProcedure');
        }
        //outattris
        innerhtml += "<label class='label label-primary'>Resources Out:</label><br>";
        if (curData.resourcesOut !== undefined && curData.resourcesOut.length > 0) {
            innerhtml += generateResources(curData, 'resourcesOut', 'resourceOutShowProcedure');
        }
        //actions
        innerhtml += "<label class='label label-primary'>Action:</label><br>";
        if (curData.actions !== undefined && curData.actions.length > 0) {
            innerhtml += generateActions(curData, 'removeRepeatAction');
        }
    } else {
    }
    return innerhtml;
}

function generateOutPutFileInputs() {
    var html = "";
    html += "<table id='outputFileOutAttributesTable' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    html += "</tbody>";
    html += "<tfoot><td colspan='500'><span class='outputFileAddNewOutput'><button class='btn btn-info'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Output</button></span></td></tfoot>";
    html += "</table>";

    return html;
}

function genereateOutputFileInput() {
    var html = "";
    html += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    html += "<thead><tr><th>File Name</th><th colspan='10'><input class='form-control'></th></tr></thead>";
    html += "<tbody></tbody>";
    html += "<tfoot ><td colspan='500'><span class='outputFileAddNewAttribute'><button class='btn btn-info'><span class='glyphicon glyphicon-plus'></span>&nbsp;Add New Attribute</button></span></td></tfoot>";
    html += "</table>";

    return html;
}

function generateOutPutFileInputsBasedOnWebService(resources) {
    var resource = null;
    for (var i = 0; i < resources.length; ++i) {
        if (resources[i].resourceType == 'REST' || resources[i].resourceType == 'HTTP' || resources[i].resourceType == 'HTTPS') {
            resource = resources[i];
            break;
        }
    }
    if (resource === null) {
        return "";
    }
    var html = "";
    html += "<table id='outputFileOutAttributesTable' class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'><tbody>";
    html += "<tr><td>"
    html += "<table class='table table-bordered table-hover table-sm' width='100%' style='margin-top:0.5vh;'>";
    if (resource.suggestOutputFileName != undefined) {
        html += "<thead><tr><th>File Name</th><th colspan='10'><input class='form-control' value='" + resource.suggestOutputFileName + "' ></th></tr></thead>";
    } else {
        html += "<thead><tr><th>File Name</th><th colspan='10'><input class='form-control'></th></tr></thead>";
    }
    html += "<tbody>";
    if (resource.outAttributes != undefined) {
        for (var i = 0; i < resource.outAttributes.length; ++i) {
            html += "<tr>";
            html += "<td>Attribute Name</td>";
            html += "<td><input class='form-control' value='" + resource.outAttributes[i].name + "' disabled></td>";
            html += "<td>Attribute Type</td>";
            html += "<td><input class='form-control' value='" + resource.outAttributes[i].type + "' disabled></td>";
            html += "<td>Description</td>";
            html += "<td><input class='form-control' value='" + resource.outAttributes[i].description + "' disabled></td>";
//            html += "<td>";
//            html += "<span class='tableRemoveSpan glyphicon glyphicon-remove' style='color: red;' ></span>";
//            html += "</td>";
            html += "</tr>";
        }
    }
    html += "</tbody>";
    html += "</table>";
    html += "</td></tr>"
    html += "</tbody>";
    html += "</table>";
    return html;
}

function generateWebServiceWrapperRecommandation(resources) {
    var resource = null;
    for (var i = 0; i < resources.length; ++i) {
        if (resources[i].resourceType == 'REST' || resources[i].resourceType == 'HTTP' || resources[i].resourceType == 'HTTPS') {
            resource = resources[i];
            break;
        }
    }
    if (resource === null) {
        return "";
    }

//                "<option value='NTW' >NTW</option>" +
//                "<option value='FastWrap' >FastWrap</option>" +
    var innerhtml = "<select id='adapterUpdateResourceWrapper' class='form-control' onchange='resourceWrapperChange()'>";
    innerhtml += "<option value='textTableWrapper' " + (resource.methodReturnFileType == "TEXT" ? "selected" : "") + ">CSVWrap</option>";
    innerhtml += "<option value='XMLWrap' " + (resource.methodReturnFileType == "XML" ? "selected" : "") + ">XMLWrap</option>";
    innerhtml += "<option value='jsonTOxmlWrapper' " + (resource.methodReturnFileType == "JSON" ? "selected" : "") + ">JSONtoXMLwrap</option>";
    innerhtml += "<option value='HTMLWrapper' " + (resource.methodReturnFileType == "HTML" ? "selected" : "") + ">HTMLwrap</option>";
    innerhtml += "</select>";
    if (resource.methodReturnFileType == 'HTML') {
        setTimeout(function() {
            $('#wrappertableindex').show();
        }, 100);
    }
    return innerhtml;
}

function resourceWrapperChange() {
    var value = $('#adapterUpdateResourceWrapper').val();
    console.log(value);
    if (value == 'HTMLWrapper') {
        $('#wrappertableindex').show();
    } else {
        $('#wrappertableindex').hide();
    }
}

