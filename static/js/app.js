// from data.js
let tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

function tableBuild(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
              cell.text(value);
            }
          );
        });
      }

function clicker() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
  }

    tableBuild(filteredData);
}

d3.selectAll("#filter-btn").on("click", clicker);
tableBuild(tableData);