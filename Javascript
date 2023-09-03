    var inputSection = document.getElementById("inputSection");
    var yearInput = document.getElementById("year");
    var submitButton = document.getElementById("submit");
    var outputDiv = document.getElementById("output");
    var body = document.body; 

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function generateCalendar() {
      inputSection.style.display = "none";

      var year = parseInt(yearInput.value);

      var yearHeading = document.createElement("h1");
      yearHeading.textContent = "THE CALENDAR FOR THE YEAR " + year;
      yearHeading.style.textAlign = "center";
      yearHeading.classList.add("three-d-text"); 

      body.style.background = "#1a1a1a";

      outputDiv.innerHTML = "";

      outputDiv.appendChild(yearHeading);

      var calendarsContainer = document.createElement("div");
      calendarsContainer.className = "container";

      for (var i = 0; i < months.length; i++) {
        var monthDiv = document.createElement("div");
        monthDiv.className = "calendar";
        monthDiv.style.animation = "slide-up 0.5s ease-in-out"; 

        var monthNameDiv = document.createElement("div");
        monthNameDiv.className = "month";
        monthNameDiv.textContent = months[i] + " " + year;

        var daysDiv = document.createElement("div");
        daysDiv.className = "days";

        for (var j = 0; j < days.length; j++) {
          var dayDiv = document.createElement("div");
          dayDiv.className = "day";
          dayDiv.textContent = days[j];
          daysDiv.appendChild(dayDiv);
        }

        var firstDay = new Date(year, i, 1).getDay();

        for (var k = 0; k < firstDay; k++) {
          var dayDiv = document.createElement("div");
          dayDiv.className = "day";
          daysDiv.appendChild(dayDiv);
        }

        var numDays = new Date(year, i + 1, 0).getDate();

        for (var l = 1; l <= numDays; l++) {
          var dayDiv = document.createElement("div");
          dayDiv.className = "day";
          dayDiv.textContent = l;
          daysDiv.appendChild(dayDiv);
        }

        monthDiv.appendChild(monthNameDiv);
        monthDiv.appendChild(daysDiv);

        calendarsContainer.appendChild(monthDiv);
      }

      outputDiv.appendChild(calendarsContainer);
    }
