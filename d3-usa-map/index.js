const svgHeight = 1000;
const svgWidth = 800;
let toggle = false;

// projection
const projection = d3.geo.albersUsa();

// map path
const path = d3.geo.path().projection(projection);

// create svg
const svg = d3
	.select('#map')
	.append('svg')
	.attr('width', svgHeight)
	.attr('height', svgWidth);

// load json map data
d3.json('statesmap.json', function(json) {
	svg
		.append('g')
		.attr('class', 'usa')
		.selectAll('path')
		.data(json.features)
		.enter()
		.append('path')
		.attr('d', path)
		.style('fill', '#D3D3D3')
		.style('stroke', '#000000')
		.on('click', changeStateColor);
});

function changeStateColor() {
	if (!toggle) {
		d3.select(this).style('fill', '#2196f3');
		toggle = true;
	} else {
		d3.select(this).style('fill', '#ff5252');
		toggle = false;
	}
}
