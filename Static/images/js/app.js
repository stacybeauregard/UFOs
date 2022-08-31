// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// build a table to hold the data
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // Append a row to the table body    
        let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
    });
}

//create a function handleClick
//add a variable to hold data

function handleClick() {
    let date = d3.select("#datetime").property("value");

    // default filter and save to a new variable    
    let filteredData = tableData;

// if statement
if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
};

//call the table, if no date was entered, the filteredData will be the origina tableData.
buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);


// Build the table when the page loads
buildTable(tableData);

