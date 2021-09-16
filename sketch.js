// Basic command-line file

var fs = require('fs')
var trianglify = require('trianglify');

// Generate a pattern and render to an SVG node tree
const svg = trianglify({
  width: 5000,
  height: 5000,
  cellSize: 500,
  xColors: ['#333', '#aaa', '#333'],
  yColors: ['#333', '#aaa', '#333'],
  variance: Math.random()
}).toSVG()

// Save the string to a file
fs.writeFileSync('trianglify.svg', svg.toString())