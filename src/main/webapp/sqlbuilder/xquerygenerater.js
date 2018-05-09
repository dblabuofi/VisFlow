function showXQuery() {
    var script = generateXQuery();
    $("#sqlqueryshow").empty();
    $("#sqlqueryshow").text(script);
}
 
function generateXQuery() {
    var base = $('#sqlbuildercanvas');
    //the big table
    var bigTable = $('#sqlbuildercanvas').children("table").eq(0);
    var script = 'xquery version "3.0";\n';
    var tables = bigTable.find("> tbody > tr > td > table");
    for (var i = 0; i < tables.size(); ++i) {
        script += generateXQUERYStatement(tables.eq(i));
    }
    var returnScript = script;
 
    return returnScript;
}
 
function extractXQueryAttributes(attrTrs) {
    var selectAttrs = [];
    for (var i = 0; i < attrTrs.size(); ++i) {
        var tr = attrTrs.eq(i);
        if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan") || tr.find("td").eq(2).find("input").eq(0).prop('checked') == true) {
            if (tr.find("td").eq(1).find("input").eq(0).val() === '') {
                if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                    selectAttrs.push({
                        attr: tr.find("td").eq(0).find("input").val(),
                        alias: tr.find("td").eq(0).find("input").val()
                    });
                } else {
                    selectAttrs.push({
                        attr: tr.find("td").eq(0).text(),
                        alias: tr.find("td").eq(0).text()
                    });
                }
            } else {
                if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                    selectAttrs.push({
                        attr: tr.find("td").eq(0).find("input").val(),
                        alias: tr.find("td").eq(1).find("input").eq(0).val()
                    });
                } else {
                    selectAttrs.push({
                        attr: tr.find("td").eq(0).text(),
                        alias: tr.find("td").eq(1).find("input").eq(0).val()
                    });
                }
            }
        }
    }
    return selectAttrs;
}
 
function extractDeleteFromAttributes(fromAttrs) {
    var FromRets = [];
    for (var i = 0; i < fromAttrs.size(); ++i) {
        var tr = fromAttrs.eq(i);
        if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan") || tr.find("td").eq(2).find("input").eq(0).prop('checked') == true) {
            if (tr.find("td").eq(1).find("input").eq(0).val() === '') {
                if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                    FromRets.push({
                        name: "from",
                        attr: tr.find("td").eq(0).find("input").val(),
                        alias: tr.find("td").eq(0).find("input").val()
                    });
                } else {
                    FromRets.push({
                        name: "from",
                        attr: tr.find("td").eq(0).text(),
                        alias: tr.find("td").eq(0).text()
                    });
                }
            } else {
                if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                    FromRets.push({
                        name: "from",
                        attr: tr.find("td").eq(0).find("input").val(),
                        alias: tr.find("td").eq(1).find("input").eq(0).val()
                    });
                } else {
                    FromRets.push({
                        name: "from",
                        attr: tr.find("td").eq(0).text(),
                        alias: tr.find("td").eq(1).find("input").eq(0).val()
                    });
                }
            }
        }
    }
    //we need change it make it more easy when codeing
    var res = [];
    for (var i = 0; i < FromRets.length; ++i) {
        //empty
        var tt = FromRets[i];
        if (res.length == 0) {
            var type = tt.name;
            res.push({name: type, value: []});
            res[res.length - 1].value.push(tt);
        } else {
            var oldType = res[res.length - 1].name;
            var type = tt.name;
            if (oldType == type) {
                res[res.length - 1].value.push(tt);
            } else {
                res.push({name: type, value: []});
                res[res.length - 1].value.push(tt);
            }
        }
    }
    return res;
}
 
function extractFromAttributes(fromAttrs) {
    var FromRets = [];
    for (var i = 0; i < fromAttrs.size(); ++i) {
        var tr = fromAttrs.eq(i);
        if (tr.find("td").eq(0).text().indexOf("resource") != -1) {//resouces
            var subTabletrs = tr.find("> td").eq(1).find("table > tbody > tr");
            if (subTabletrs.size() > 0) {
                for (var j = 0; j < subTabletrs.size(); ++j) {
                    var tr = subTabletrs.eq(j);
                    if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan") || tr.find("td").eq(2).find("input").eq(0).prop('checked') == true) {
                        if (tr.find("td").eq(1).find("input").eq(0).val() === '') {
                            if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                                FromRets.push({
                                    name: "from",
                                    attr: tr.find("td").eq(0).find("input").val(),
                                    alias: tr.find("td").eq(0).find("input").val()
                                });
                            } else {
                                FromRets.push({
                                    name: "from",
                                    attr: tr.find("td").eq(0).text(),
                                    alias: tr.find("td").eq(0).text()
                                });
                            }
                        } else {
                            if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                                FromRets.push({
                                    name: "from",
                                    attr: tr.find("td").eq(0).find("input").val(),
                                    alias: tr.find("td").eq(1).find("input").eq(0).val()
                                });
                            } else {
                                FromRets.push({
                                    name: "from",
                                    attr: tr.find("td").eq(0).text(),
                                    alias: tr.find("td").eq(1).find("input").eq(0).val()
                                });
                            }
                        }
                    }
                }
            }
        } else if (tr.find("td").eq(0).text().indexOf("Join") != -1) {
            var joinType = tr.find("td").eq(1).find("select").eq(0).val();
            tr = fromAttrs.eq(i + 1);
            var subTabletrs = tr.find("> td").eq(1).find("table > tbody > tr");
            if (subTabletrs.size() > 0) {
                for (var j = 0; j < subTabletrs.size(); ++j) {
                    var tr = subTabletrs.eq(j);
                    if (tr.find("td").eq(2).find("> span").eq(0).hasClass("tableRemoveSpan") || tr.find("td").eq(2).find("input").eq(0).prop('checked') == true) {
                        if (tr.find("td").eq(1).find("input").eq(0).val() == "") {
                            FromRets.push({
                                name: joinType,
                                attr: tr.find("td").eq(0).text(),
                                alias: tr.find("td").eq(0).text()
                            });
                        } else {
                            FromRets.push({
                                name: joinType,
                                attr: tr.find("td").eq(0).text(),
                                alias: tr.find("td").eq(1).find("input").eq(0).val()
                            });
                        }
                    }
                }
            }
            //on 
            tr = fromAttrs.eq(i + 2);
            var onTabletrs = tr.find("td").eq(1).find("> table > tbody > tr");
            if (onTabletrs.size() > 0) {
                for (var j = 0; j < onTabletrs.size(); ++j) {
                    var tr = onTabletrs.eq(j);
                    if (tr.find("td").eq(0).find("input").eq(0).prop('checked') == true) {
                        FromRets.push({
                            name: "on",
                            custom: tr.find("td").eq(2).find("input").eq(0).val()
                        });
                    } else {
                        FromRets.push({
                            name: "on",
                            left: tr.find("td").eq(1).find("input").eq(0).val(),
                            relation: tr.find("td").eq(1).find("select").eq(0).val(),
                            right: tr.find("td").eq(1).find("input").eq(1).val()
                        });
                    }
                }
            }
            i += 2;
        }
    }
    //we need change it make it more easy when codeing
    var res = [];
    for (var i = 0; i < FromRets.length; ++i) {
        //empty
        var tt = FromRets[i];
        if (res.length == 0) {
            var type = tt.name;
            res.push({name: type, value: []});
            res[res.length - 1].value.push(tt);
        } else {
            var oldType = res[res.length - 1].name;
            var type = tt.name;
            if (oldType == type) {
                res[res.length - 1].value.push(tt);
            } else {
                res.push({name: type, value: []});
                res[res.length - 1].value.push(tt);
            }
        }
    }
    return res;
}
 
function extractConditions(conditionTrs, conditionOn) {
    var cons = [];
    for (var i = 0; i < conditionTrs.size(); ++i) {
        var tr = conditionTrs.eq(i);
        if (tr.find("td").eq(0).find("input").eq(0).prop('checked') == true) {
            cons.push({
                name: conditionOn,
                custom: tr.find("td").eq(2).find("input").eq(0).val()
            });
        } else if (tr.find("td").eq(0).find("input").eq(0).prop('checked') == false) {
            cons.push({
                name: conditionOn,
                left: tr.find("td").eq(1).find("input").eq(0).val(),
                relation: tr.find("td").eq(1).find("select").eq(0).val(),
                right: tr.find("td").eq(1).find("input").eq(1).val()
            });
        } else {
            cons.push({
                name: "outer",
                left: "",
                relation: tr.find("td").eq(1).find("select").eq(0).val(),
                right: ""
            });
        }
    }
    return cons;
}
function extractGroupBy(groupByTrs) {
    var attrs = [];
 
    for (var i = 0; i < groupByTrs.size(); ++i) {
        var tr = groupByTrs.eq(i);
        if (tr.find("td").eq(1).find("input").eq(0).prop('checked') || tr.find("td").eq(1).find("> span").eq(0).hasClass("tableRemoveSpan")) {
            if (tr.find("td").eq(1).find("> span").eq(0).hasClass("tableRemoveSpan")) {
                attrs.push({
                    name: "groupby",
                    attr: tr.find("td").eq(0).find("input").eq(0).val(),
                    alias: tr.find("td").eq(0).find("input").eq(0).val()
                });
            } else {
                attrs.push({
                    name: "groupby",
                    attr: tr.find("td").eq(0).text(),
                    alias: tr.find("td").eq(0).text()
                });
            }
        }
    }
    return attrs;
}
function generateXQUERYStatement(table) {
    var script = "";
    var trs = table.find("> tbody > tr");
    var outputfile = trs.find("> td").eq(1).find("input").eq(0).val();
    var action = trs.find(" > td").eq(0).find("select").eq(0).val();
    //based on action
    if (action == 'select') {
        var selectAttrs = [];
        var fromRets = [];
        var whereCons = [];
        var groupbyCons = [];
        var havingCons = [];
 
        //select attributes
        var attrTableTrs = trs.eq(1).find("td").eq(1).find("> table > tbody > tr");
        selectAttrs = extractXQueryAttributes(attrTableTrs);
        //from !!
        var fromTableTrs = trs.eq(2).find("td").eq(1).find("> table > tbody > tr");
        fromRets = extractFromAttributes(fromTableTrs);
        //where
        var whereTrs = trs.eq(3).find("td").eq(1).find("> table > tbody > tr");
        whereCons = extractConditions(whereTrs, "where");
        //group by
        var groupByTrs = trs.eq(4).find("td").eq(1).find("> table > tbody > tr");
        groupbyCons = extractGroupBy(groupByTrs);
        //having
        var havingTrs = trs.eq(5).find("td").eq(1).find("> table > tbody > tr");
        havingCons = extractConditions(havingTrs, "having");
        script += generatexQuerySelectScript(selectAttrs, fromRets, whereCons, groupbyCons, havingCons);
    } else if (action == 'delete') {
        var deleteAttrs = [];
        var fromRets = [];
        var whereCons = [];
        //delete
        var deleteTrs = trs.eq(6).find("td").eq(1).find("> table > tbody > tr");
        deleteAttrs = extractGroupBy(deleteTrs);
        //from
        var fromTableTrs = trs.eq(7).find("td").eq(1).find("> table > tbody > tr");
        fromRets = extractDeleteFromAttributes(fromTableTrs);
        //where
        var whereTrs = trs.eq(8).find("td").eq(1).find("> table > tbody > tr");
        whereCons = extractConditions(whereTrs, "where");
        script += generatexQueryDeleteScript(deleteAttrs, fromRets, whereCons);
 
    } else if (action == 'update') {
        var updateAttrs = [];
        var setAttrs = [];
        var whereCons = [];
        //update
        var updateAttrTrs = trs.eq(9).find("td").eq(1).find("> table > tbody > tr");
        updateAttrs = extractFromAttributes(updateAttrTrs);
        //set
        var setTrs = trs.eq(10).find("td").eq(1).find("> table > tbody > tr");
        setAttrs = extractConditions(setTrs);
        //where
        var whereTrs = trs.eq(11).find("td").eq(1).find("> table > tbody > tr");
        whereCons = extractConditions(whereTrs, "where");
        script += generatexQueryUpdateScript(updateAttrs, setAttrs, whereCons);
    }
 
    //find lca
 
 
    //output file
    if (action == 'select') {
        script += "let $source-doc := local:remove-empty-elements($doc)\n";
    } else {
        script += "let $source-doc := <resultsets>\n";
        script += '{$res}\n';
        script += '</resultsets>\n';
    }
 
    script += 'let $target-directory := "C:\\Users\\jupiter\\Documents\\NetBeansProjects\\AutoInterfaceWS\\data\\"\n';
    script += 'let $target-path := concat($target-directory,"' + removeextension(outputfile) + '.xml")\n';
    script += 'return\nfile:serialize($source-doc, $target-path, ("omit-xml-declaration=yes", "indent=yes"))';
 
    return script;
}
 
function xqueryElementInArray(arr, key, value) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i][key] == value) {
            return true;
        }
    }
    return false;
}
 
/* return used variable in this query
 * resAttrs is the variables in the resources
 * attrs is from select list
 */
 
function getxQueryVaribles(attrs, resAttrs) {
    var usedList = [];
    for (var i = 0; i < attrs.length; ++i) {
        if (xqueryElementInArray(resAttrs, "text", attrs[i].attr)) {
            var j = 0;
            for (; j < usedList.length; ++j) {
                if (usedList[j].attr == attrs[i].attr)
                    break;
            }
            if (j == usedList.length) {
                usedList.push(attrs[i]);
            }
        } else {
            var str = attrs[i].attr;
            var first = str.indexOf("(");
            var last = str.lastIndexOf(")");
            var list = str.substring(first + 1, last).split(',').map(Function.prototype.call, String.prototype.allTrim).clean("");
            for (var j = 0; j < list.length; ++j) {
                if (xqueryElementInArray(resAttrs, "text", list[j])) {
                    var k = 0;
                    for (; k < usedList.length; ++k) {
                        if (usedList[k].attr == list[j])
                            break;
                    }
                    if (j == usedList.length) {
                        usedList.push({attr: list[j], alias: list[j]});
                    }
                }
            }
        }
    }
    return usedList;
}
 
function getxQueryConditionVaribles(attrs, resAttrs) {
    var usedList = [];
    for (var i = 0; i < attrs.length; ++i) {
        if (xqueryElementInArray(resAttrs, "text", attrs[i].left)) {
            usedList.push({attr: attrs[i].left, alias: attrs[i].left})
        } else {
            var str = attrs[i].left;
            var first = str.indexOf("(");
            var last = str.lastIndexOf(")");
            var list = str.substring(first + 1, last).split(',').map(Function.prototype.call, String.prototype.allTrim).clean("");
            for (var j = 0; j < list.length; ++j) {
                if (xqueryElementInArray(resAttrs, "text", list[j])) {
                    usedList.push({attr: list[j], alias: list[j]});
                }
            }
        }
        if (xqueryElementInArray(resAttrs, "text", attrs[i].right)) {
            usedList.push({attr: attrs[i].right, alias: attrs[i].right})
        } else {
            var str = attrs[i].right;
            var first = str.indexOf("(");
            var last = str.lastIndexOf(")");
            var list = str.substring(first + 1, last).split(',').map(Function.prototype.call, String.prototype.allTrim).clean("");
            for (var j = 0; j < list.length; ++j) {
                if (xqueryElementInArray(resAttrs, "text", list[j])) {
                    usedList.push({attr: list[j], alias: list[j]});
                }
            }
        }
    }
    return usedList;
}
 
function addWithOutDuplicate(arr1, arr2) {
    var res = arr1;
    for (var i = 0; i < arr2.length; ++i) {
        var j = 0;
        for (; j < arr1.length; ++j) {
            if (arr1[j].attr == arr2[i].attr) {
                break;
            }
        }
        if (j == arr1.length) {
            arr1.push(arr2[i]);
        }
    }
    return res;
}
 
function getxQueryFromConditionVaribles(attrsList, resAttrs) {
    var usedList = [];
    for (var i = 0; i < attrsList.length; ++i) {
        if (attrsList[i].name !== 'on')
            continue;
        var attrs = attrsList[i].value;
        for (var j = 0; j < attrs.length; ++j) {
            if (xqueryElementInArray(resAttrs, "text", attrs[j].left)) {
                usedList.push({attr: attrs[j].left, alias: attrs[j].left});
            } else {
                var str = attrs[j].left;
                var first = str.indexOf("(");
                var last = str.lastIndexOf(")");
                var list = str.substring(first + 1, last).split(',').map(Function.prototype.call, String.prototype.allTrim).clean("");
                for (var j = 0; j < list.length; ++j) {
                    if (xqueryElementInArray(resAttrs, "text", list[j])) {
                        usedList.push({attr: list[j], alias: list[j]});
                    }
                }
            }
            if (xqueryElementInArray(resAttrs, "text", attrs[j].right)) {
                usedList.push({attr: attrs[j].right, alias: attrs[j].right});
            } else {
                var str = attrs[j].right;
                var first = str.indexOf("(");
                var last = str.lastIndexOf(")");
                var list = str.substring(first + 1, last).split(',').map(Function.prototype.call, String.prototype.allTrim).clean("");
                for (var k = 0; k < list.length; ++k) {
                    if (xqueryElementInArray(resAttrs, "text", list[k])) {
                        usedList.push({attr: list[k], alias: list[k]});
                    }
                }
            }
        }
    }
    return usedList;
}
 
function getxQueryUpdateVaribles(attrs) {
    var usedList = [];
    for (var i = 0; i < attrs.length; ++i) {
        usedList.push({attr: attrs[i].left, alias: attrs[i].left, left: attrs[i].left, relation: attrs[i].relation, right: attrs[i].right})
    }
    return usedList;
}
 
function generatexQueryUpdateScript(updateAttrs, setRets, whereCons) {
    console.log(updateAttrs);//if you wanna use them, select them 
    console.log(setRets);
    console.log(whereCons);
    var resAttrs = generateResAttrs(curData.resourcesIn);//attr list with resource prefix
    console.log(resAttrs);
    var queryVars = [];
    var selectVars = [];
    console.log(queryVars);
    if (setRets.length > 0) {
        selectVars = getxQueryUpdateVaribles(setRets);
        queryVars = addWithOutDuplicate(queryVars, getxQueryConditionVaribles(setRets, resAttrs));
    }
    if (whereCons.length > 0) {
        queryVars = addWithOutDuplicate(queryVars, getxQueryConditionVaribles(whereCons, resAttrs));
    }
    console.log(queryVars);
    console.log(selectVars);
    console.log("custom function");
 
    var script = 'declare namespace functx = "http://www.functx.com";\ndeclare function functx:remove-elements-deep\n($nodes as node()*,';
    for (var i = 0; i < queryVars.length - 1; ++i) {//here we only select varaibles, not functions
        script += '$' + queryVars[i].attr + ' as node()*,';
    }
    script += '$' + queryVars[queryVars.length - 1].attr + ' as node()* ';
    script += ') as node()* {\n';
    //function
    script += 'for $node in $nodes\nreturn\nif ($node instance of element())\nthen\n';
     
     
    script += 'if ($node/text()=$' + whereCons[0].right + ') then element\n';
    script += '{ node-name($node)}\n{ $node/@*,\n';
    script += setRets[0].right + '}\n';
    for (var i = 1; i < whereCons.length; ++i) {//here we only select varaibles, not functions
        script += 'else if ($node/text()=$' + whereCons[i].attr + ') then element\n';
        script += '{ node-name($node)}\n{ $node/@*,\n';
        script += setRets[i].right + '}\n';
    }
     
    script += 'else element { node-name($node)}\n';
    script += '{ $node/@*,\nfunctx:remove-elements-deep($node/node(), ';
    for (var i = 0; i < queryVars.length - 1; ++i) {//here we only select varaibles, not functions
        script += '$' + queryVars[i].attr + ',';
    }
    script += '$' + queryVars[queryVars.length - 1].attr;
    script += ') }';
    script += 'else if ($node instance of document-node())\n';
    script += 'then functx:remove-elements-deep($node/node(), ';
    for (var i = 0; i < queryVars.length - 1; ++i) {//here we only select varaibles, not functions
        script += '$' + queryVars[i].attr + ',';
    }
    script += '$' + queryVars[queryVars.length - 1].attr;
    script += ')\n';
    script += 'else $node\n};\n';
    //extract part
    var filename = "";
    for (var i = 0; i < queryVars.length; ++i) {//here we only select varaibles, not functions
        filename = removeextension(queryVars[i].attr);
        var varName = getxQueryFileAttr(queryVars[i].attr);
        script += 'let $' + queryVars[i].attr + ' := doc("' + filename + '.xml")//' + varName + "\n";
    }
    //run function
 
    script += 'let $res := functx:remove-elements-deep(doc("' + filename + '.xml"),';
 
    for (var i = 0; i < queryVars.length - 1; ++i) {//here we only select varaibles, not functions
        script += '$' + queryVars[i].attr + ',';
    }
    script += '$' + queryVars[queryVars.length - 1].attr;
    script += ' )\n';
    return script;
}
 
function generateUpdateWhereField(fileName, attr, resAttrs) {
    console.log(fileName);
    console.log(resAttrs);
 
    if (xqueryElementInArray(resAttrs, "attr", fileName)) {
        if (fileName == attr) {
            return '$node';
        } else {
            return "$" + fileName;
        }
    } else if (fileName.indexOf("(") != -1) {
        return generateUpdateFuncCall(fileName, attr, resAttrs);
    } else {
        return fileName;
    }
}
 
function generateUpdateFuncCall(str, attr, resAttrs) {
    var first = str.indexOf("(");
    var last = str.lastIndexOf(")");
    var list = str.substring(first + 1, last).split(',').map(Function.prototype.call, String.prototype.allTrim).clean("");
    var funCall = str.substring(0, first + 1);
    var funName = str.substring(0, first);
    if (funName == 'abs') {
        funCall += 'number(';
    }
    console.log(str);
    console.log(list);
    console.log(resAttrs);
    for (var j = 0; j < list.length - 1; ++j) {
        if (xqueryElementInArray(resAttrs, "attr", list[j])) {
            if (list[j] == attr) {
                funCall += '$node ,';
            } else {
                funCall += "$" + list[j] + " , ";
            }
        } else {
            funCall += "" + list[j] + " , ";
        }
    }
    console.log(resAttrs);
    console.log(list);
    if (xqueryElementInArray(resAttrs, "attr", list[list.length - 1])) {
        if (list[list.length - 1] == attr) {
            funCall += '$node , ';
        } else {
            funCall += "$" + list[list.length - 1];
        }
    } else {
        funCall += "" + list[list.length - 1];
    }
    if (funName == 'abs') {
        funCall += '))';
    } else {
        funCall += ')';
    }
    return funCall;
}
 
 
function generatexQueryDeleteScript(selectAttrs, fromRets, whereCons) {
    console.log(selectAttrs);//if you wanna use them, select them 
    console.log(fromRets);
    console.log(whereCons);
 
    var script = "";
    //to deal with functions, we need add func praramters to our select list, then remove it at last 
    var resAttrs = generateResAttrs(curData.resourcesIn);//attr list with resource prefix
    console.log(resAttrs);
    var queryVars = getxQueryVaribles(selectAttrs, resAttrs);
    console.log(queryVars);
    if (fromRets.length > 0) {
        queryVars = addWithOutDuplicate(queryVars, getxQueryFromConditionVaribles(fromRets, resAttrs));
    }
    if (whereCons.length > 0) {
        queryVars = addWithOutDuplicate(queryVars, getxQueryConditionVaribles(whereCons, resAttrs));
    }
    console.log(queryVars);
    console.log("$$$$$$ add prifex and other ");
    script += 'declare namespace functx = "http://www.functx.com";\n';
    script += 'declare function functx:remove-elements-deep($nodes as node()*, $n as node()*)  as node()* {\n';
    script += 'for $node in $nodes\nreturn\nif ($node instance of element())\nthen if ($node=$n)\nthen ()\n';
    script += 'else element { node-name($node)}\n{ $node/@*,\nfunctx:remove-elements-deep($node/node(), $n)}\n';
    script += 'else if ($node instance of document-node())\nthen functx:remove-elements-deep($node/node(), $n)\nelse $node};\n';
 
    //init
    var filename = "";
    for (var i = 0; i < queryVars.length; ++i) {//here we only select varaibles, not functions
        filename = removeextension(queryVars[i].attr);
        var varName = getxQueryFileAttr(queryVars[i].attr);
        script += 'let $' + queryVars[i].attr + ' := doc("' + filename + '.xml")//' + varName + "\n";
    }
 
    //find cla
    if (queryVars.length == 1) {
        script += 'let $cla := $' + queryVars[0].attr + "/..\n";
    } else if (selectAttrs.length > 1) {
        script += 'let $cla :=(';
        for (var i = 0; i < queryVars.length - 1; ++i) {//here we only select varaibles, not functions
            script += '$' + queryVars[i].attr + '/ancestor-or-self::node() intersect ';
        }
        script += '$' + queryVars[i].attr + '/ancestor-or-self::node()';
        script += ')[last()]\n';
    }
    //find delete node
    script += 'let $nodes := doc("' + filename + '.xml")//*[name() = $cla/name()]\n';
    script += 'let $no := for $row in $nodes\n';
    if (whereCons.length > 0) {
        script += 'where ( '
        for (var i = 0; i < whereCons.length - 1; ++i) {
            if (whereCons[i].custom != undefined) {
                script += whereCons[i].custom + " and ";
            } else {
                script += generateDeleteWhereField(whereCons[i].left, queryVars)
                        + whereCons[i].relation
                        + generateDeleteWhereField(whereCons[i].right, queryVars) + " and ";
            }
        }
        if (whereCons[whereCons.length - 1].custom != undefined) {
            script += whereCons[whereCons.length - 1].custom + " ";
        } else {
            script += generateDeleteWhereField(whereCons[whereCons.length - 1].left, queryVars)
                    + whereCons[whereCons.length - 1].relation
                    + generateDeleteWhereField(whereCons[whereCons.length - 1].right, queryVars) + " ";
        }
        script += ' )\n';
    }
    script += 'return $row\n';
 
    //delete nodes
    script += 'let $res := functx:remove-elements-deep(doc("' + filename + '.xml"), $no)\n';
 
    return script;
}
 
function generateDeleteWhereField(fileName, resAttrs) {
    console.log(fileName);
    console.log(resAttrs);
    if (xqueryElementInArray(resAttrs, "attr", fileName)) {
        return "$row/" + getxQueryFileAttr(fileName);
    } else if (fileName.indexOf("(") != -1) {
        return generateDeleteFuncCall(fileName, resAttrs);
    } else {
        return fileName;
    }
}
 
function generateDeleteFuncCall(str, resAttrs) {
    var first = str.indexOf("(");
    var last = str.lastIndexOf(")");
    var list = str.substring(first + 1, last).split(',').map(Function.prototype.call, String.prototype.allTrim).clean("");
    var funCall = str.substring(0, first + 1);
    var funName = str.substring(0, first);
    if (funName == 'abs') {
        funCall += 'number(';
    }
    for (var j = 0; j < list.length - 1; ++j) {
        if (xqueryElementInArray(resAttrs, "text", list[j])) {
            funCall += "$row/" + getxQueryFileAttr(list[j]) + ",";
        } else {
            funCall += "" + getxQueryFileAttr(list[j]) + ",";
        }
    }
    console.log(resAttrs);
    console.log(list);
    if (xqueryElementInArray(resAttrs, "attr", list[list.length - 1])) {
        funCall += "$row/" + getxQueryFileAttr(list[list.length - 1]);
    } else {
        funCall += "" + getxQueryFileAttr(list[list.length - 1]) + "";
    }
    if (funName == 'abs') {
        funCall += '))';
    } else {
        funCall += ')';
    }
    return funCall;
}
 
function generatexQuerySelectScript(selectAttrs, fromRets, whereCons, groupbyCons, havingCons) {
    console.log(selectAttrs);//if you wanna use them, select them 
    console.log(fromRets);
    console.log(whereCons);
    console.log(groupbyCons);
    console.log(havingCons);
    var script = "";
    //to deal with functions, we need add func praramters to our select list, then remove it at last 
    var resAttrs = generateResAttrs(curData.resourcesIn);//attr list with resource prefix
    console.log(resAttrs);
    var queryVars = getxQueryVaribles(selectAttrs, resAttrs);
    console.log(queryVars);
    if (fromRets.length > 0) {
        queryVars = addWithOutDuplicate(queryVars, getxQueryFromConditionVaribles(fromRets, resAttrs));
    }
    if (whereCons.length > 0) {
        queryVars = addWithOutDuplicate(queryVars, getxQueryConditionVaribles(whereCons, resAttrs));
    }
    if (havingCons.length > 0) {
        queryVars = addWithOutDuplicate(queryVars, getxQueryConditionVaribles(havingCons, resAttrs));
    }
    console.log(queryVars);
    console.log("$$$$$$ select");
    script += "declare function local:remove-empty-elements($nodes as node()*)  as node()* {\nfor $node in $nodes\n return\n if ($node instance of element())\n then if (normalize-space($node) = '')\n then ()\n else element { node-name($node)} \n { $node/@*, \n local:remove-empty-elements($node/node())} \n else if ($node instance of document-node())\nthen local:remove-empty-elements($node/node())\nelse $node\n } ;";
    //we copy the old
    var fileName = removeextension(queryVars[0].attr);
    script += 'let $doc := doc("' + fileName + '.xml")\n';
    script += 'let $doc2 := util:deep-copy($doc)\n';
 
    //old code
    script += 'let $res := ';
    for (var i = 0; i < queryVars.length; ++i) {//here we only select varaibles, not functions
        var filename = removeextension(queryVars[i].attr);
        var varName = getxQueryFileAttr(queryVars[i].attr);
        if (i == 0) {
            script += 'for $' + queryVars[i].attr + ' at $count' + i + ' in $doc2//' + varName;
        } else {
            script += '$' + queryVars[i].attr + ' at $count' + i + ' in $doc2//' + varName;
        }
        if (i == queryVars.length - 1) {
            script += '';
        } else {
            script += ',';
        }
        script += '\n';
    }
    console.log("$$$$$$ where");
    //generate where
    var flag = false;
    if (queryVars.length > 1) {
        flag = true;
        script += 'where ( ';
        for (var i = 1; i < queryVars.length - 1; ++i) {
            script += '$count0=' + '$count' + i + " and ";
        }
        var t = queryVars.length - 1;
        script += '$count0=$count' + t + '';
    }
    if (fromRets.length != 0 && fromRets[0].value.length > 1) {//simple select from one file add conditions map 
        //join on part
        if (!flag) {
            script += 'where ( ';
        }
        flag = true;
        //now going to on part
        for (var j = 0; j < fromRets.length; ++j) {
            if (fromRets[j].name == 'on') {
                var onCons = fromRets[j].value;
                for (var i = 0; i < onCons.length - 1; ++i) {
                    if (onCons[i].custom != undefined) {
                        script += onCons[i].custom + " and ";
                    } else {
                        script += generateWhereField(onCons[i].left, queryVars)
                                + whereCons[i].relation
                                + generateWhereField(onCons[i].right, queryVars) + " and ";
                    }
                }
                if (onCons[onCons.length - 1].custom != undefined) {
                    script += onCons[onCons.length - 1].custom + " ";
                } else {
                    script += generateWhereField(onCons[onCons.length - 1].left, queryVars)
                            + onCons[onCons.length - 1].relation
                            + generateWhereField(onCons[onCons.length - 1].right, queryVars) + " ";
                }
            }
        }
 
    }
    //where the outside where 
    if (whereCons.length > 0) {
        if (!flag) {
            script += 'where ( ';
        } else {
            script += " and "
        }
        flag = true;
        for (var i = 0; i < whereCons.length - 1; ++i) {
            if (whereCons[i].name == 'outer') {
                script += " " + whereCons[i].relation + " ";
            } else if (whereCons[i].custom != undefined) {
                script += whereCons[i].custom + " ";
            } else {
                script += generateWhereField(whereCons[i].left, queryVars)
                        + whereCons[i].relation
                        + generateWhereField(whereCons[i].right, queryVars) + " ";
            }
        }
        if (whereCons[whereCons.length - 1].custom != undefined) {
            script += whereCons[whereCons.length - 1].custom + " ";
        } else {
            script += generateWhereField(whereCons[whereCons.length - 1].left, queryVars)
                    + whereCons[whereCons.length - 1].relation
                    + generateWhereField(whereCons[whereCons.length - 1].right, queryVars) + " ";
        }
    }
    if (flag) {
        script += " ) \nreturn \n";
    } else {
        script += "return \n";
    }
    script += "<row>\n";
    for (var i = 0; i < queryVars.length; ++i) {
        script += "<" + queryVars[i].attr + ">";
        script += "{$" + queryVars[i].attr + "/text()}";
        script += "</" + queryVars[i].attr + ">\n";
    }
    script += "</row>\n";
 
    console.log("$$$$$$ groupby");
    //group by and having we change it in here
    if (groupbyCons.length > 0) {
        //we change the result input
        var index = script.lastIndexOf("$res");
        script = script.substring(0, index) + "$res8" + script.substring(index + 4);
        //add new group by
        script += "let $res := for $row in $res8\n";
 
        for (var i = 0; i < groupbyCons.length - 1; ++i) {
            script += "let $" + groupbyCons[i].attr + " := $row/" + groupbyCons[i].attr + "\n";
        }
        script += "let $" + groupbyCons[groupbyCons.length - 1].attr + " := $row/" + groupbyCons[groupbyCons.length - 1].attr + "\n";
        //having 
        if (havingCons.length > 0) {
            script += "where ( "
            for (var i = 0; i < havingCons.length - 1; ++i) {
                if (havingCons[i].custom != undefined) {
                    script += havingCons[i].custom + " and ";
                } else {
                    script += generateWhereField(havingCons[i].left, queryVars)
                            + havingCons[i].relation
                            + generateWhereField(havingCons[i].right, queryVars) + " and ";
                }
            }
            if (havingCons[havingCons.length - 1].custom != undefined) {
                script += havingCons[havingCons.length - 1].custom + " ";
            } else {
                script += generateWhereField(havingCons[havingCons.length - 1].left, queryVars)
                        + havingCons[havingCons.length - 1].relation
                        + generateWhereField(havingCons[havingCons.length - 1].right, queryVars) + " ";
            }
            script += ")\n";
        }
        //group by
        script += "group by ";
        for (var i = 0; i < groupbyCons.length - 1; ++i) {
            script += "$" + groupbyCons[i].attr + " , ";
        }
        script += "$" + groupbyCons[groupbyCons.length - 1].attr + "\n";
//        //order by
//        script += "order by ";
//        for (var i = 0; i < groupbyCons.length - 1; ++i) {
//            script += "$" + groupbyCons[i].attr + " , ";
//        }
//        script += "$" + groupbyCons[groupbyCons.length - 1].attr + "\n";
 
        script += "return \n<row>\n";
        for (var i = 0; i < queryVars.length; ++i) {
            script += "<" + queryVars[i].attr + ">";
            script += "{head($row/" + queryVars[i].attr + ")/text()}";
            script += "</" + queryVars[i].attr + ">\n";
        }
        script += "</row>\n";
    }
    console.log("$$$$$$ convert");
    //we change the alias and other functions
    var index = script.lastIndexOf("let $res");
    script = script.substring(0, index) + "let $res5" + script.substring(index + 8);
    //change alias and apply functions to the result
    script += "let $resBefore := for $row in $res5\n";
    for (var i = 0; i < queryVars.length; ++i) {
        if (xqueryElementInArray(resAttrs, "text", queryVars[i].attr)) {
            script += "let $" + queryVars[i].attr + " := $row/" + queryVars[i].attr + "\n";
        }
    }
//    if (queryVars.length > 0) {
//        script += 'where ( ';
//        for (var i = 0; i < queryVars.length - 1; ++i) {
//            script += '$c=' + '$count' + i + " and ";
//        }
//        var t = queryVars.length - 1;
//        script += '$c=$count' + t + '';
//    }
    script += "return \n<row>\n";
    for (var i = 0; i < selectAttrs.length; ++i) {
        script += "<" + getxQueryFileAttr(selectAttrs[i].alias) + ">";
        if (xqueryElementInArray(resAttrs, "text", selectAttrs[i].attr)) {
            script += "{$row/" + selectAttrs[i].attr + "/text()}";
        } else {//is a function need reconstruct
            var str = selectAttrs[i].attr;
            var first = str.indexOf("(");
            var last = str.lastIndexOf(")");
            var list = str.substring(first + 1, last).split(',').map(Function.prototype.call, String.prototype.allTrim).clean("");
            var funCall = str.substring(0, first + 1);
            var funName = str.substring(0, first);
            if (funName == 'abs') {
                funCall += 'number(';
            }
            for (var j = 0; j < list.length - 1; ++j) {
                if (xqueryElementInArray(resAttrs, "text", list[j])) {
                    funCall += "$row/" + list[j] + ",";
                } else {
                    funCall += "" + list[j] + ",";
                }
            }
            if (xqueryElementInArray(resAttrs, "text", list[list.length - 1])) {
                funCall += "$row/" + list[list.length - 1];
            } else {
                funCall += "" + list[list.length - 1] + "";
            }
            if (funName == 'abs') {
                funCall += '))';
            } else {
                funCall += ')';
            }
            script += "{" + funCall + "}";
        }
        script += "</" + getxQueryFileAttr(selectAttrs[i].alias) + ">\n";
    }
    script += "</row>\n";
 
    //find cla for final update
    if (queryVars.length == 1) {
        script += 'let $cla2 := $doc//' + getxQueryFileAttr(queryVars[0].attr) + "/..\n";
    } else if (selectAttrs.length > 1) {
        script += 'let $cla2 :=(';
        for (var i = 0; i < queryVars.length - 1; ++i) {//here we only select varaibles, not functions
            script += '$doc//' + getxQueryFileAttr(queryVars[i].attr) + '/ancestor-or-self::node() intersect ';
        }
        script += '$doc//' + getxQueryFileAttr(queryVars[i].attr) + '/ancestor-or-self::node()';
        script += ')[last()]\n';
    }
 
    script += 'let $claNodes := $doc//*[name()=$cla2/name()]\n';
    script += 'let $tmp := for $claNode in $claNodes return update delete $claNode/*\n';
    script += 'let $tmp := for $claNode at $c in $claNodes,\n'
    for (var i = 0; i < queryVars.length; ++i) {//here we only select varaibles, not functions
        var varName = getxQueryFileAttr(queryVars[i].attr);
        script += '$' + varName + ' at $count' + i + ' in $resBefore//' + varName;
        if (i == queryVars.length - 1) {
            script += '';
        } else {
            script += ',';
        }
        script += '\n';
    }
    if (queryVars.length > 0) {
        script += 'where ( ';
        for (var i = 0; i < queryVars.length - 1; ++i) {
            script += '$c=' + '$count' + i + " and ";
        }
        var t = queryVars.length - 1;
        script += '$c=$count' + t + '';
    }
    script += " ) \nreturn \nupdate insert (";
    for (var i = 0; i < queryVars.length - 1; ++i) {
        var varName = getxQueryFileAttr(queryVars[i].attr);
        script += '$' + varName + ", ";
    }
    var varName = getxQueryFileAttr(queryVars[queryVars.length - 1].attr);
    script += '$' + varName + ") into $claNode \n"
 
    return script;
}
 
function generateResAttrs(resources) {
    var res = [];
    for (var i = 0; i < resources.length; ++i) {
        var attrs = getResourcesAttribute(resources[i]);
        for (var j = 0; j < attrs.length; ++j) {
            res.push(attrs[j]);
        }
    }
    return res;
}
 
function generateFuncCall(str, resAttrs) {
    var first = str.indexOf("(");
    var last = str.lastIndexOf(")");
    var list = str.substring(first + 1, last).split(',').map(Function.prototype.call, String.prototype.allTrim).clean("");
    var funCall = str.substring(0, first + 1);
    var funName = str.substring(0, first);
    if (funName == 'abs') {
        funCall += 'number(';
    }
    for (var j = 0; j < list.length - 1; ++j) {
        if (xqueryElementInArray(resAttrs, "attr", list[j])) {
            funCall += "$" + list[j] + ",";
        } else {
            funCall += "" + list[j] + ",";
        }
    }
    console.log(resAttrs);
    console.log(list);
    if (xqueryElementInArray(resAttrs, "attr", list[list.length - 1])) {
        funCall += "$" + list[list.length - 1];
    } else {
        funCall += "" + list[list.length - 1] + "";
    }
    if (funName == 'abs') {
        funCall += '))';
    } else {
        funCall += ')';
    }
    return funCall;
}
 
function generateWhereField(fileName, resAttrs) {
    console.log(fileName);
    console.log(resAttrs);
    if (xqueryElementInArray(resAttrs, "attr", fileName)) {
        return "$" + fileName;
    } else if (fileName.indexOf("(") != -1) {
        return generateFuncCall(fileName, resAttrs);
    } else {
        return fileName;
    }
}
 
function generateHavingField(fileName, resources) {
    var html = "";
    var resAttrs = generateResAttrs(resources);
    for (var i = 0; i < resAttrs.length; ++i) {
        if (resAttrs[i].text == fileName) {
//            html += removeextension(fileName) + '/text()';
            html += "$row/" + getxQueryFileAttr(fileName) + '/text()';
            return html;
        }
    }
    return '"' + fileName + '"';
}
 
function isNum(val) {
    return /^\d+$/.test(val);
}
 
function getxQueryFileAttr(file) {
    var index = file.indexOf(".");
    return index == -1 ? file : file.substring(index + 1);
}