// from data.js
var tableData = data;

// Select the button
var search = d3.select("#firstList");

search.on("change", function getSearchValues() {
  var list1 = document.getElementById("firstList");
  var list2 = document.getElementById("secondList");
  var list1SelectedValue = list1.value;

  //1. Check the selected value from List 1 (Filter Type)
  //>> Listxxxx creating an array for the specific Type/column
  //>> uniquexxx clean the list to show only unique values
  //>> For loop: add the unique values to be displayed in List 2 (Search Value)

  if (list1SelectedValue == "Date") {
    var listDates = tableData.map(datez => datez.datetime);
    var uniqueDates = Array.from(new Set(listDates));
    console.log(uniqueDates);
    list2.length = 0;
    list2.options[0] = new Option("--Select Value--");
    for (i = 1; i <= uniqueDates.length + 1; i++) {
      list2.options[i] = new Option(uniqueDates[i - 1]);
    }
  }
  // else if for the City column
  else if (list1SelectedValue == "City") {
    var listCities = tableData.map(citiez => citiez.city);
    var uniqueCities = Array.from(new Set(listCities));
    console.log(uniqueCities);
    uniqueCities.sort();
    console.log(uniqueCities);
    list2.length = 0;
    list2.options[0] = new Option("--Select Value--");
    for (i = 1; i <= uniqueCities.length + 1; i++) {
      list2.options[i] = new Option(uniqueCities[i - 1]);
    }
  }
  // else if for the State column
  else if (list1SelectedValue == "State") {
    var listStates = tableData.map(statez => statez.state);
    var uniqueState = Array.from(new Set(listStates));
    console.log(uniqueState);
    uniqueState.sort();
    console.log(uniqueState);
    list2.length = 0;
    list2.options[0] = new Option("--Select Value--");
    for (i = 1; i <= uniqueState.length + 1; i++) {
      list2.options[i] = new Option(uniqueState[i - 1]);
    }
  }
  // else if for the Country column
  else if (list1SelectedValue == "Country") {
    var listCountries = tableData.map(countriez => countriez.country);
    var uniqueCountries = Array.from(new Set(listCountries));
    console.log(uniqueCountries);
    uniqueCountries.sort();
    console.log(uniqueCountries);
    list2.length = 0;
    list2.options[0] = new Option("--Select Value--");
    for (i = 1; i <= uniqueCountries.length + 1; i++) {
      list2.options[i] = new Option(uniqueCountries[i - 1]);
    }
  }
  // else if for the Shape column
  else if (list1SelectedValue == "Shape") {
    var listShapes = tableData.map(shapez => shapez.shape);
    var uniqueShapes = Array.from(new Set(listShapes));
    console.log(uniqueShapes);
    uniqueShapes.sort();
    console.log(uniqueShapes);
    list2.length = 0;
    list2.options[0] = new Option("--Select Value--");
    for (i = 1; i <= uniqueShapes.length + 1; i++) {
      list2.options[i] = new Option(uniqueShapes[i - 1]);
    }
  }
  // else if for the Duration column
  else if (list1SelectedValue == "Duration") {
    var listDuration = tableData.map(durationz => durationz.durationMinutes);
    var uniqueDuration = Array.from(new Set(listDuration));
    console.log(uniqueDuration);
    uniqueDuration.sort();
    console.log(uniqueDuration);
    list2.length = 0;
    list2.options[0] = new Option("--Select Value--");
    for (i = 1; i <= uniqueDuration.length + 1; i++) {
      list2.options[i] = new Option(uniqueDuration[i - 1]);
    }
  }

  // // Complete the click handler for the form
  var checkList2 = d3.select("#secondList");
  checkList2.on("change", function() {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#secondList");

    // Get the value property of the input element
    var inputList2 = inputElement.property("value");
    console.log(inputList2);

    // Filter the results by list1 and list2 values
    var findnews = tableData.filter(function(news) {
      if (list1SelectedValue === "Date") {
        return inputList2 === news.datetime;
      } else if (list1SelectedValue === "City") {
        return inputList2 === news.city;
      } else if (list1SelectedValue === "State") {
        return inputList2 === news.state;
      } else if (list1SelectedValue === "Country") {
        return inputList2 === news.country;
      } else if (list1SelectedValue === "Shape") {
        return inputList2 === news.shape;
      } else if (list1SelectedValue === "Duration") {
        return inputList2 === news.durationMinutes;
      }
    });
    console.log(findnews);

    //display the filtered list in the HTML page - as a table
    var findTable = d3.select("#filter-btn");
    findTable.on("click", function() {
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
  });
});
