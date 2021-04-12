/**
 * CONSTANTS AND GLOBALS
 * */
 const width = window.innerWidth * 0.9,
 height = window.innerHeight * 0.9,
 margin = { top: 20, bottom: 50, left: 60, right: 40 };


let svg;
let tooltip;

/**
* APPLICATION STATE
* */
let state = {
    data: null,
    hover: null
    // + INITIALIZE STATE
};

/**
* LOAD DATA
* */
d3.json("../data/flare.json", d3.autotype).then(data => {
    state.data = data;
    init();
});

/**
* INITIALIZING FUNCTION
* this will be run *one time* when the data finishes loading in
* */
function init() {

    // const color = d3.scaleOrdinal(d3.schemeSet3)
    const color = d3.scaleSequential([0, 5], d3.interpolatePurples)
    // console.log(state.data)
    const container = d3.select("#d3-container").style("position", "relative");

    svg = container
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("text-anchor", "middle")

    // + INITIALIZE TOOLTIP IN YOUR CONTAINER ELEMENT
    tooltip = container.append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("top", 0)
        .style("left", 0)
        .style("background-color", "lightblue")

    // + CREATE YOUR ROOT HIERARCHY NODE 
    const root = d3.hierarchy(state.data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value)

    const circle = d3.pack()
        .size([width - 2, height - 2])
        .padding(3)
    // console.log(state.data)
    // console.log(root)

    // + CREATE YOUR LAYOUT GENERATOR
    // const treeLayout = d3.treemap()
    //     .size([width, height])
    //     .padding(1)

    // + CALL YOUR LAYOUT FUNCTION ON YOUR ROOT DATA
    // treeLayout(root)
    circle(root)
    const node = root.descendants()


    // + CREATE YOUR GRAPHICAL ELEMENTS
    // const leavesPack = rootPack.leaves()
    // console.log(leaves)

    const Group = svg.selectAll("g")
        .data(node)
        .join("g")
        .attr("transform", d => `translate(${d.x},${d.y})`)

    Group.append("circle")
        .attr("r", d => d.r)
        .attr("fill", d => color(d.height))
        // .attr("fill", d => {
        //     const pack1Ancestor = d.ancestors().find(a => a.depth === 1)
        //     return color(pack1Ancestor.data.name)
        // })
        .attr("stroke", "black")
        .attr("width", d => d.x)
        .attr("height", d => d.y)

    // leafGroup.append("text")
    //   .attr("dy", "1em")
    //   .text(d => d.data.name)
    //   .attr("font-size", "8")

    Group.on("mouseover", (event, d) => {
        state.hover = {
            position: [d.x, d.y],
            name: d.data.name,
            value: d.data.value,
            ancestors: d.ancestors()
                .reverse()
                .map(d => d.data.name)
                .join("/")
        }
        draw()
    })
        .on("mouseleave", () => {
            state.hover = null
            draw();
        })
    draw; // calls the draw function
}

/**
* DRAW FUNCTION
* we call this everytime there is an update to the data/state
* */
function draw() {
    // + UPDATE TOOLTIP

    if (state.hover) {
        tooltip
            .html(
                `
       <div>Name: ${state.hover.name} </div>
       <div>Value: ${state.hover.value} </div>
       <div>Hierarchy Path: ${state.hover.ancestorsPath} </div>
     `
            )
            .style("font-size", "12px")
            .transition()
            .duration(200)
            .style("transform", `translate(${state.hover.position[0]}px, ${state.hover.position[1]}px )`)

    }
    tooltip.classed("visible", state.hover)
}