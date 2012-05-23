
var n = 4, // number of layers
    m = 120; // number of samples per layer

//generate and format data to the expected format
var exampleData = stream_layers(n,m).map(function(data, i) {
  return { 
    key: 'Stream' + i,
    values: data
  };
});




// Build the chart using all the default settings
nv.charts.stackedAreaChart()
    .selector('#areaChart')
    .data(exampleData)
    .build();






/**************************************
 * Simple test data generator
 */


function stream_layers(n, m, o) {
  if (arguments.length < 3) o = 0;
  function bump(a) {
    var x = 1 / (.1 + Math.random()),
        y = 2 * Math.random() - .5,
        z = 10 / (.1 + Math.random());
    for (var i = 0; i < m; i++) {
      var w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }
  return d3.range(n).map(function() {
      var a = [], i;
      for (i = 0; i < m; i++) a[i] = o + o * Math.random();
      for (i = 0; i < 5; i++) bump(a);
      return a.map(stream_index);
    });
}

