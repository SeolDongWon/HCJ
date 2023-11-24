
let hello = {
  "name": "javascript",

  "eng": function () {
    let console = document.getElementById('console');
    console.innerHTML = "hello " + this.name;
    console.style.color = "#ff0000";
  },
  "kor": function () {
    let console = document.getElementById('console');
    console.innerHTML = "안녕 " + this.name;
    console.style.color = "#0000ff";
  }
}

function loadTable() {
  let div = document.getElementById('con');
  let value = "";
  value += "<table class='table container-sm table-bordered'>";
  value += "<thead class='table-success'>";
  value += "<tr>";
  value += "<th><input type='button' value='sayEng' onclick='hello.eng()' /></th>";
  value += "<th><input type='button' value='sayKor' onclick='hello.kor()' /></th>";
  value += "</tr>";
  value += "</thead>";
  value += "<tbody>";
  value += "<tr>";
  value += "<td colspan='2' class='d-flex justify-content-center'><h1 id='console'>여기에</h1></td>";
  value += "</tr>";
  value += "</tbody>";
  value += "</table>";
  div.innerHTML = value;

}