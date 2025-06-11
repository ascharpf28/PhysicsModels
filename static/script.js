/*Initializing Variables*/
var domain;
var range;
var preheatTemp;
var apparentP;
var velocity;
var material;
var thermalCond;
var density;
var specHeat;
var tMelt;
var meltDepth;
var meltWidth;



/*Code for getting variables"*/
function getVars(){
    domain=(document.getElementById("domain")).value;
    range=(document.getElementById("range")).value;
    preheatTemp=(document.getElementById("preheatTemp")).value;
    console.log("inputs: ", domain, range, preheatTemp);
    apparentP=(document.getElementById("apparentP")).value;
    console.log(apparentP);
    velocity=(document.getElementById("velocity")).value;
    material=getMaterial();
    thermalCond=(document.getElementById("thermalCond")).value;
    console.log("inputs: ", domain, range, preheatTemp, apparentP, velocity, material, thermalCond);
    density=(document.getElementById("density")).value;
    console.log("inputs: ", density);
    specHeat=(document.getElementById("specHeat")).value;
    console.log("inputs: ", specHeat);
    tMelt=(document.getElementById("tMelt")).value;
    console.log("inputs: ", tMelt);
    meltDepth=(document.getElementById("meltDepth")).value;
    meltWidth=(document.getElementById("meltWidth")).value;
    console.log("inputs: ", meltDepth, meltWidth);
    console.log("inputs: ", domain, range, preheatTemp, apparentP, velocity, material, thermalCond, density, specHeat, tMelt, meltDepth, meltWidth);
}

function getMaterial(){
    if (document.getElementById("316L").checked){
        return "316L";
    }
    if (document.getElementById("Ti-GAl-4V").checked){
        return "Ti-GAl-4V";
    }
    if (document.getElementById("In718").checked){
        return "In 718";
    }
    if (document.getElementById("AllOSiMg").checked){
        return "AllOSiMg";
    }
}

function drawGraph(){
    var domainMin=0-domain;
    var domainMax=domain;
    var rangeMin=0-range;
    var rangeMax=range; 
    console.log(typeof domainMin); 
    new Chart("graph", {
        type:"line", 
        data: {
            datasets: [{
              data: [
                {x: domainMin, y: rangeMin},
                {x: domainMax, y: rangeMax},
              ],
              showLine: false,
              fill: false,
            }]
        },  
        options: {
            scales:{
                x:{
                    type: "linear",
                    min:domainMin,
                    max:domainMax
                },
                y:{
                    min:rangeMin,
                    max:rangeMax
                }
            },
            title: {
                display: true,
                text: "Model",
                fontSize: 16
                }
            }
      });
    console.log("drawn")
}
