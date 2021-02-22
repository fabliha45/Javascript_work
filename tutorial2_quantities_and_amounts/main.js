d3.csv('../data/squirrelActivities.csv', d3.autoType)
.then(squirrelData => {
    console.log("data", squirrelData)

 //constants helps us to look back for references for same values
 const width = window.innerWidth *.8;
 const height = window.innerHeight /2;
 const margins = { top: 10, bottom: 25, left: 10, right: 10 };

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
 .attr("text-anchor", 'middle') 
 .text(d => d.activity) 

//draw count text on the top
svg.selectAll("text.count")
      .data(squirrelData)
      .join("text")
      .attr("class", 'count')
      .attr("x", d => xScale(d.activity) + (xScale.bandwidth() / 2))
      .attr("y", d => yScale(d.count))
      .attr("dy", "1em") 
      .attr("text-anchor", 'middle') 
      .text(d => d3.format(",")(d.count))
      .style("fill", "yellow")

})
