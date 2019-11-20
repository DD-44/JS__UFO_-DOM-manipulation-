// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function() {
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var findnews = tableData.filter(news => inputValue === news.datetime);
  //sepearte the arrays

  var tbody = d3.select("tbody");
  tbody.html("");

  findnews.forEach(news => {
    var row = tbody.append("tr");
    Object.entries(news).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
