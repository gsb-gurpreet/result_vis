var margin = {top: 10, right: 30, bottom: 30, left: 30},
    width = 1000 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var xScale = d3.scale.linear();
var yScale = d3.scale.linear();
xScale.range([0, width ]);
yScale.range([0, height]);

var database = [2,4,9,7,5,2,1,6];

var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom");

xScale.domain([0, database.length]);
yScale.domain([0, d3.max(database)]);

var svg = d3.select("#graphContainer")
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
				.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
	.attr("class", "axis")
	.attr("transform", "translate(" + margin.left + "," + height + ")")
	.call(xAxis);

svg.selectAll("rect")
	.data(database)
	.enter()
	.append("rect")
	.attr("class", "chart")
	.attr("x", function (d, i) {
		return( i*(width/database.length));
	})
	.attr("width", function () {
		return( width/(database.length + 10));
	})
	.attr("y", function (d, i) {
		return( height - yScale(d));
	})
	.attr("height", function (d, i) {
		return( yScale(d) );
	})
