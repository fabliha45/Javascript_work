/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 60, left: 70, right: 40 },
  radius = 5;

// these variables allow us to access anything we manipulate in init() but need access to in draw().
// All these variables are empty before we assign something to them.
let svg;
let xScale;
let yScale;

/* APPLICATION STATE */
let state = {
  data: [],
  selectedParty: "All" // + YOUR FILTER SELECTION
};

/* LOAD DATA */
d3.csv("../data/HeartFailureRecords.csv", d3.autoType).then(Heart_data => {
  console.log("Heart_data", Heart_data);
  state.data = Heart_data;
  init();
});


//* INITIALIZING FUNCTION */
// this will be run *one time* when the data finishes loading in
function init() {
  console.log('state', state)

  // SCALES
    xScale = d3.scaleLinear()
      .domain(d3.extent(state.data, d => d.age))
      .range([margin.left, width - margin.right])

    yScale = d3.scaleLinear()
      .domain(d3.extent(state.data, d => d.serum_creatinine)) // [min, max]
      .range([height - margin.bottom, margin.bottom])

  // AXES
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

     // + CREATE SVG ELEMENT
     svg = d3.select("#d3-container")
     .append("svg")
     .attr('width', width)
     .attr('height', height)
///*** */
  // + UI ELEMENT SETUP
    const dropdown = d3.select("#dropdown") // select dropdown from HTML
  // + add dropdown options
    dropdown.selectAll("option")
      .data([
        { key: "All", label: "All"},
        { key: "0", label: "Female"},
        { key: "1", label: "Male"}])
      .join("option")
      .attr("value", d => d.key) // set the key to the 'value' -- what we will use to FILTER our data later
      .text(d => d.label); // set the label to text -- easier for the user to read than the key
 
  // + add event listener for 'change'
    dropdown.on("change", event => {
      // 'event' holds all the event information that triggered this callback
      console.log("DROPDOWN Changed", event.target.value);
      // save this new selection to application state
      state.selectedParty = event.target.value
      console.log("NEW STATE:", state);
      draw(); // re-draw the graph based on this new selection
  })
  
      draw();
 
  // + CREATE AXES
    svg.append("g")
      .attr("class", "xAxis")
      .attr("transform", `translate(${0}, ${height - margin.bottom})`) // move to the bottom
      .call(xAxis)
      .append("text") // add xAxis label
        .attr("font-size", "14")
        .attr("transform", `translate(${width / 2}, ${40})`)
        .attr("fill", "Blue")
        .text("Age")
    
   svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${0})`) // align with left margin
    .call(yAxis)
    .append("text") // add yAxis label
      .attr("class", 'axis-title')
      .attr("font-size", "14")
      .attr("writing-mode", "vertical-lr")
      .attr("text-anchor", "middle")
      .attr("transform", `translate(${-35}, ${height / 2})`)
      .attr("fill", "Blue")
      .text("serum_creatinine")

    draw(); // calls the draw function

}

/* DRAW FUNCTION */
// we call this everytime there is an update to the data/state
function draw() {
  console.log("Drawing Function")
  // + FILTER DATA BASED ON STATE
  const filteredData = state.data // <--- update to filter
  .filter(d => {
    if (state.selectedParty == "All") return true
    else return d.Gender == state.selectedParty
  })

  // + DRAW CIRCLES
  const dot = svg
    svg.selectAll("circle")
    .data(filteredData, d => d.Count) // new column w unique key for that row
    .join(
      // + HANDLE ENTER SELECTION
      enter => enter.append("circle")
      .attr("r", radius)
      .attr("fill", d => {
        if(d.Gender == "1") return "red"
        else return "Black"})
      .attr("cx", d => xScale(d.age)) // start dots on the left
      .attr("cx", margin.left)
      .attr("cy", d => yScale(d.serum_creatinine))
      .call(enter => enter.transition()
        .duration(1000)
        .attr("cx", d => xScale(d.age)) // transition to correct position
      ),

      // + HANDLE UPDATE SELECTION
      update => update
      .call(sel => sel
        .transition()
        .duration(250)
        .attr("r", radius * 0.5) // increase radius size
        .transition()
        .duration(250)
        .attr("r", radius) // bring it back to original size
      ),

      // + HANDLE EXIT SELECTION
      exit => exit
         .attr("cy", d =>yScale(d.serum_creatinine))
         .attr ("cx", d =>xScale(d.age))
         .call(exit => exit
          .transition()
          .ease(d3.easeExpOut)
          .style("opacity", .25)
          .duration(500)
          .attr("cx", width - margin.right)
          .attr("cy", height / 2)
          .remove()
      )
  );
}