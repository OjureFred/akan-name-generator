function generate() {
  var date = document.getElementById("age-inpute");
  document.getElementById("submit").addEventListener("click", function () {
    console.log(date.value);
  });
}
