d3.csv('../data/squirrelActivities.csv', d3.autoType)
.then(squirrelData => {
    console.log("data", squirrelData)

 //constants helps us to look back for references for same values
 const width = window.innerWidth *.8;
 const height = window.innerHeight /2.5;
 const margins = { top: 20, bottom: 30, left: 20, right: 30 };
 

 // color reference https://github.com/d3/d3-scale-chromatic

const color = d3.scaleSequential()
.domain([0, d3.max (squirrelData , d => d.count)])
.interpolator(d3.interpolateRdPu)

//scales * reference from d3.scales*
//xscale = catagorical activities

const xScale = d3.scaleBand()
 .domain(squirrelData.map(d=> d.activity))
 .range([margins.left, width - margins.right]) //visual variable
 .paddingInner(0.2)

 //yscale - linear, count

const yScale = d3.scaleLinear()
 .domain([0, d3.max(squirrelData, d => d.count)])
 .range([height - margins.bottom, margins.top])

 // svg *Drawing of Elements*
const svg = d3.select("#barchart")
 .append("svg")
 .attr("width", width)
 .attr("height", height);

//draw bars
svg.selectAll("rect")
 .data(squirrelData)
 .join("rect")
 .attr("width", xScale.bandwidth())
 .attr("height", d => height - margins.bottom - yScale(d.count))
 .attr("fill", d=> color(d.count)) 
 .attr("x", d=> xScale(d.activity))
 .attr("y", d=> yScale(d.count))

 //draw activity texts at the bottom
 svg.selectAll("text.activity")
 .data(squirrelData)
 .join("text")
 .attr("class", 'activity')
 .attr("x", d => xScale(d.activity) + (xScale.bandwidth() / 2))
 .attr("y", height - margins.bottom)
 .attr("dy", "1em") 
 .attr("text-anchor", 'left') 
 .text(d => d.activity) 

//draw count text on the top
svg.selectAll("text.count")
      .data(squirrelData)
      .join("text")
      .attr("class", 'count')
      .attr("x", d => xScale(d.activity) + (xScale.bandwidth() / 2))
      .attr("y", d => yScale(d.count))
      .attr("dy", "1em") 
      .attr("text-anchor", 'Right') 
      .text(d => d3.format(",")(d.count))
      .style("fill", "Red")

/// HORIZONTAL Bars\\\

// Drawing the horizontal Bar Graphs with same data
// Redefining Variables
//console.log(xScale_1.domain(),xScale_1.range())
//console.log(yScale_1.domain(), yScale_1.range())

 //xscale_1 - linear, count
 const xScale_1 = d3.scaleLinear()
 .domain([0, d3.max(squirrelData, d => d.count)])
 .range([100, width - 10- margins.right]) //visual variable

 console.log(xScale_1.domain(),xScale_1.range())

const yScale_1 = d3.scaleBand()
 .domain(squirrelData.map(d=> d.activity))
 .range([height, 0])
 .paddingInner(0.2)

 console.log(yScale_1.domain(), yScale_1.range())
// color reference https://github.com/d3/d3-scale-chromatic

const color_1 = d3.scaleSequential()
.domain([0, d3.max (squirrelData , d => d.count)])
.interpolator(d3.interpolateYlGnBu)


 // svg *Drawing of Elements*
const svg_1 = d3.select("#barchart")
 .append("svg_1")
 .attr("width", width)
 .attr("height", height);

//drawings of Rectang
svg.selectAll("rect")
 .data(squirrelData)
 .join("rect")
 .attr("width", d => xScale_1(d.count))
 .attr("height", yScale_1.bandwidth())
 .attr("fill", d=> color_1(d.count)) 
 .attr("x", d=> 100)
 .attr("y", d=> yScale_1(d.activity))
 

 //draw activity texts at the bottom
 svg.selectAll("text.activity")
 .data(squirrelData)
 .join("text")
 .attr("class", 'activity')
 .attr("x", height - margins.bottom)
 .attr("y", d => yScale_1(d.activity) + (yScale_1.bandwidth() / 2))
 .attr("dx", "1em") 
 .attr("text-anchor", 'Start') 
 .text(d => d.activity) 

//draw count text on the top
svg.selectAll("text.count")
      .data(squirrelData)
      .join("text")
      .attr("class", 'count')
      .attr("x", d => xScale_1(d.count))
      .attr("y", d => yScale_1(d.activity) + (yScale_1.bandwidth() / 2))
      .attr("dx", "1em") 
      .attr("text-anchor", 'End') 
      .text(d => d3.format(",")(d.count))
    
})
