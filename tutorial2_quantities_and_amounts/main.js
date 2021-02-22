d3.csv('../data/squirrelActivities.csv', d3.autoType)
.then(squirrelData => {
    console.log("data", squirrelData)
    //constants
    const width = window.innerWidth *.9;
    const height = window.innerHeight /3;

//scales
//xscale = catagorical activities
const xScale = d3.scaleBand()
 .domain(squirrelData.map(d=> d.activity))
 .range([0, window.innerWidth]) //visual variable

 //yscale - linear, count
const yScale = d3.scaleLinear()
 .domain([0, d3.max(squirrelData, d => d.count)])
 .range([window.innerHeight, 0])

 // svg
const svg = d3.select("#barchart")
 .append("svg")
 .attr("width", width)
 .attr("height", height)


//bars
svg.selectAll("rect")
 .data(squirrelData)
 .join("rect")

//select
// data join
//style/draw elements
})
