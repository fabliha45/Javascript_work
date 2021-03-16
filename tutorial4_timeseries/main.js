/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.7,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 50, left: 60, right: 60 },
  radius = 5;

const formatBillions = (num) => d3.format(".2s")(num).replace(/G/, 'B')
const formatDate = d3.timeFormat("%Y")

// these variables allow us to access anything we manipulate in init() but need access to in draw().
// All these variables are empty before we assign something to them.
let svg;
let xScale;
let yScale;
let yAxis;
let xAxisGroup;
let yAxisGroup;

/* APPLICATION STATE */
let state = {
  data: [],
  selection: "All", // + YOUR FILTER SELECTION
};

/* LOAD DATA */
// + SET YOUR DATA PATH
d3.csv('../data/NYSMathTestResults.csv', d=> {
  return {
    year: new Date(+d.Year, 0, 1),
    category : d.Category,
    meanScaleScore: +d.MeanScaleScore
  }

})
  .then(data => {
    console.log("loaded data:", data);
    state.data = data;
    init();
  });

/* INITIALIZING FUNCTION */
// this will be run *one time* when the data finishes loading in
function init() {
  // + SCALES
  xScale = d3.scaleTime()
   .domain(d3.extent(state.data, d => d.year))
   .range([margin.right, width - margin.left])

  yScale = d3.scaleLinear()
   .domain(d3.extent(state.data, d => d.meanScaleScore))
   .range([height - margin.bottom, margin.top])

  // + AXES
  const xAxis = d3.axisBottom(xScale)
    .ticks(6) // limit the number of tick marks showing -- note: this is approximate
  yAxis = d3.axisLeft(yScale)
    .tickFormat(formatBillions)
    
  // + UI ELEMENT SETUP

    // + UI ELEMENT SETUP
    const selectElement = d3.select("#dropdown")

    // add in dropdown options from the unique values in the data
    selectElement.selectAll("option")
      .data([
        // manually add the first value
        "Select a Race",
        // add in all the unique values from the dataset
        ...new Set(state.data.map(d => d.category))])
      .join("option")
      .attr("attr", d => d)
      .text(d => d)
  
    // + SET SELECT ELEMENT'S DEFAULT VALUE (optional)
    selectElement.on("change", event => {
      state.selection = event.target.value
      console.log('state has been updated to: ', state)
      draw(); // re-draw the graph based on this new selection
    });
  
    // + CREATE SVG ELEMENT
    svg = d3.select("#d3-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
  
    // + CALL AXES
    xAxisGroup = svg.append("g")
      .attr("class", "xAxis")
      .attr("transform", `translate(${0}, ${height - margin.bottom})`)
      .call(xAxis)
  
    xAxisGroup.append("text")
      .attr("class", 'xLabel')
      .attr("transform", `translate(${width / 2}, ${35})`)
      .text("Year")
  
    yAxisGroup = svg.append("g")
      .attr("class", "yAxis")
      .attr("transform", `translate(${margin.right}, ${0})`)
      .call(yAxis)
  
    yAxisGroup.append("text")
      .attr("class", 'yLabel')
      .attr("transform", `translate(${-45}, ${height / 2})`)
      .attr("writing-mode", 'vertical-rl')
      .text("Mean_Score")
  
    draw(); // calls the draw function
  }
  
  /* DRAW FUNCTION */
  // we call this everytime there is an update to the data/state
  function draw() {
    // + FILTER DATA BASED ON STATE
    const filteredData = state.data
      .filter(d => d.category === state.selection)
  
    // + UPDATE SCALE(S), if needed
    yScale.domain([0, d3.max(filteredData, d => d.meanScaleScore)])
    // + UPDATE AXIS/AXES, if needed
    yAxisGroup
      .transition()
      .duration(1000)
      .call(yAxis.scale(yScale))// need to udpate the scale
  
    // + DRAW CIRCLES/LABEL GROUPS, if you decide to
    const dots = svg
      .selectAll(".dot")
      .data(filteredData, d => d.year)
      .join(
        enter => enter.append("g")
          .attr("class", "dot")
          .attr("transform", d => `translate(${xScale(d.year)}, ${yScale(d.meanScaleScore)})`),
        update => update
          .call(update => update.transition()
            .duration(1000)
            .attr("transform", d => `translate(${xScale(d.year)}, ${yScale(d.meanScaleScore)})`)
          ),
        exit => exit.remove()
      );
  
    // add circle into group
    dots.selectAll("circle")
      .data(d => [d]) // pass along data from parent to child
      .join("circle")
      .attr("r", radius)
  
    // add text into group
    dots.selectAll("text")
      .data(d => [d]) // pass along data from parent to child
      .join("text")
      .attr("text-anchor", "end")
      .text(d => `${formatDate(d.year)}: ${formatBillions(d.meanScaleScore)} `)
  
    // specify line generator function
    const lineGen = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.meanScaleScore))
  
    // + DRAW LINE AND/OR AREA
    svg.selectAll(".line")
      .data([filteredData]) // data needs to take an []
      .join("path")
      .attr("class", 'line')
      .attr("fill", "none")
      .attr("stroke", "black")
      .transition()
      .duration(1000)
      .attr("d", d => lineGen(d))
  }