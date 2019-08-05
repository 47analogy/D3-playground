const svgHeight = 1000;
const svgWidth = 800;

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
		.style('fill', '#69b3a2')
		.on('click', changeStateColor);
});

function changeStateColor() {
	d3.select(this).style('fill', '#800080');
}
