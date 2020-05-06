function getValues() {
  //get values from the web page
  var date = document.getElementById("age-input").value;
  var gender = document.getElementById("gender-input").value;

  //split the date vale
  var dateArr = date.split("/");
  var dd = dateArr[0];
  var mm = dateArr[1];
  var yy = dateArr[2];

  //validate Day
  var dateErrorResponse = document.getElementById("dateError");
  var dateErrMsg = "Invalid Date";

  if (dd < 0 || dd > 31) {
    alert("invalid date");
  }
  if (mm < 0 || mm > 12) {
    alert("invalid date");
  }
  if (yy > 2020) {
    alert("future date");
  }

  //extract century and year
  var dyy = yy % 100;
  var cc = Math.trunc(yy / 100);

  //calculate day of week - Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
  var dow = Math.floor(
    (cc / 4 - 2 * cc - 1 + (5 * dyy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7
  );

  //validate gender
  var lcGender = gender.toLowerCase();
  if (lcGender != "male" && lcGender != "female") {
    alert("invalid gender");
  }

  //Generate name
  var maleNames = ["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akoswa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var genName = akanName(lcGender, dow);

  function akanName(subjectGender, dayOfWeek) {
    if (subjectGender === "male") {
      return maleNames[dow];
    } else {
      return femaleNames[dow];
    }
  };

  //display values in <p> elements
  var dateDisplay = document.getElementById("display-date");
  var genderDisplay = document.getElementById("display-gender");
  dateDisplay.innerHTML = dd + " " + mm + " " + yy + " " + dyy + " " + cc + " " + dow + " " + genName;
  genderDisplay.innerHTML = lcGender;
}