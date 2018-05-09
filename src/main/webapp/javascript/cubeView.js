/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var eleByAtomicNo = "H,He,Li,Be,B,C,N,O,F,Ne,Na,Mg,Al,Si,P,S,Cl,Ar,K,Ca,Sc,Ti,V,Cr,Mn,Fe,Co,Ni,Cu,Zn,Ga,Ge,As,Se,Br,Kr,Rb,Sr,Y,Zr,Nb,Mo,Tc,Ru,Rh,Pd,Ag,Cd,In,Sn,Sb,Te,I,Xe,Cs,Ba,REE,La,Ce,Pr,Nd,Pm,Sm,Eu,Gd,Tb,Dy,Ho,Er,Tm,Yb,Lu,Hf,Ta,W,Re,Os,Ir,Pt,Au,Hg,Tl,Pb,Bi,Po,At,Rn,Fr,Ra,Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr,Rf,Db,Sg,Bh,Hs,Mt,Ds,Rg,Cn,Nh,Fl,Mc,Lv,Ts,Og";
var xAxisCount = 0; //count of elements selected on x-axis
var yAxisCount = 0; //count of elements selected on y-axis
var zAxisCount = 0; //count of elements selected on z-axis
var length = 0;
var container;
var camera, controls, scene, renderer;
var raycaster = new THREE.Raycaster();
var csvRows;
var deafaultOffset = 1.2;
var radius = 100, cubeValue = [];
var localfilename = "";
var headerlength = 0;
var isAllEle = 1;
var mouse = new THREE.Vector2(), intersectedObject, objectOriginalHex, objectOriginalOpacity;
var cubeOffset = new THREE.Vector3(10, 10, 10);



function initialCube(dataset) {
    console.log("initialCube");
//    dataset = [
//        "zaxis,yaxis,H,Na,K",
//        "H,H,634,634,140",
//        "H,Na,153,22,9",
//        "H,K,657,149,78",
//        "Na,H,634,975,193",
//        "Na,Na,634,634,140",
//        "Na,K,140,193,193",
//        "K,H,634,975,193",
//        "K,Na,634,634,140",
//        "K,K,140,193,193"
//    ];

    createSubset(dataset);
}

function createSubset(dataset) {
    csvRows = dataset;
    //console.log("csvRows : "+csvRows[0].split(","));
    //console.log("csvRows.length : "+csvRows.length);
    columns = csvRows[0].split(",").length - 2;
    headerlength = xAxisCount = columns;
    var arrZ = [];
    var arrY = [];

    for (var i = 1; i < csvRows.length; ++i) {
        var line = csvRows[i].split(',');
        for (var j = 0; j < line.length; ++j) {
            arrZ.push(line[0]);
            arrY.push(line[1]);
        }
    }

    var setZ = new Set(arrZ);
    var setY = new Set(arrY);
    console.log(setZ);
    console.log(setY);
    yAxisCount = setY.size;
    zAxisCount = setZ.size;

    console.log("********************");
    console.log("csvRows: " + csvRows);
    console.log("xAxisCount: " + xAxisCount);
    console.log("yAxisCount: " + yAxisCount);
    console.log("zAxisCount: " + zAxisCount);
    //console.log("csvRows[0].split(",").length"+csvRows[0].split(",").length);
    //console.log("columns : "+columns);
    
    $("#myD3Visual")[0].contentWindow.windowload(isAllEle, xAxisCount, yAxisCount, zAxisCount, localfilename, headerlength, csvRows);
    
}
