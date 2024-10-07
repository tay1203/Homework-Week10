// var vg_1 = "w9.json";
// vegaEmbed("#map", vg_1).then(function(result){
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

// var vg_2 = "w10.json";
// vegaEmbed("#bar", vg_2).then(function(result){
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

// Create container elements
document.addEventListener('DOMContentLoaded', function() {
    let treeView, nutritionView;

    // Function to load JSON file
    async function loadJSON(url) {
      const response = await fetch(url);
      return response.json();
    }

    // Initialize visualizations
    async function initVisualizations() {
      try {
        // Load specifications
        const treeSpec = await loadJSON('treemap.json');
        const nutritionSpec = await loadJSON('w10.json');

        // Create visualizations
        const treeResult = await vegaEmbed('#tree-container', treeSpec);
        treeView = treeResult.view;

        const nutritionResult = await vegaEmbed('#nutrition-container', nutritionSpec);
        nutritionView = nutritionResult.view;

        // Listen for changes in the selected food signal from the tree
        treeView.addSignalListener('Food', async function(name, value) {
            if (value) {
              // Update the nutrition chart with the selected food
              await nutritionView.signal("Food", value).runAsync();
            }
            console.log('Selected food:', value);
          });

      } catch (error) {
        console.error('Error loading visualizations:', error);
      }
    }

    // Start the initialization
    initVisualizations();
});
