var vg_1 = "/src/w9.json";
vegaEmbed("#map", vg_1).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "/src/w10.json";
vegaEmbed("#bar", vg_2).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);