function loadTableDate() {
  //서버에서 json 객체 데이터 가져오기
  var bbs = {
    "title": "Javascript",
    "description": "교육원에서 진행중인 Javascript 강의 자료입니다. "
      + "각 게시판의 다운로드 권한은 매 강의 개강시마다 부여됩니다.",
    "total": 4,
    "item": [
      {
        "no": "공지",
        "subject": "'Javascript' 강의 자료실입니다.",
        "hit": 3,
        "date": "2015.10.29"
      },
      {
        "no": 3,
        "subject": "Javascript 3일차 강의자료입니다.",
        "hit": 6,
        "date": "2015.11.08"
      },
      {
        "no": 2,
        "subject": "Javascript 2일차 강의자료입니다.",
        "hit": 15,
        "date": "2015.11.07"
      },
      {
        "no": 1,
        "subject": "Javascript 1일차 강의자료입니다.",
        "hit": 19,
        "date": "2015.11.05"
      }
    ]
  };

  //화면에 바인딩하기
  let ulData = document.getElementById("ul_data");
  ulData.innerHTML += "<li class='list-group-item'>" + bbs.title + "</li>";
  ulData.innerHTML += "<li class='list-group-item'>" + bbs.description + "</li>";
  ulData.innerHTML += "<li class='list-group-item'>" + bbs.total + "</li>";

  //화면에 바인딩하기
  let value = "";
  let tableData = document.getElementById("table_data");
  value += "<thead class='table-dark'>";
  value += "<tr>";
  value += "<th>no</th>";
  value += "<th>subject</th>";
  value += "<th>hit</th>";
  value += "<th>date</th>";
  value += "</tr>";
  value += "</thead>";

  value += "<tbody>";
  for (let i = 0; i < bbs.item.length; i++) {
    value +=  "<tr>";
    value +=  "<td>"+bbs.item[i].no+"</td>";
    value +=  "<td>"+bbs.item[i].subject+"</td>";
    value +=  "<td>"+bbs.item[i].hit+"</td>";
    value +=  "<td>"+bbs.item[i].date+"</td>";
    
    value +=  "</tr>";
  }

  // value +=  "<th>no</th>";
  // value +=  "<th>subject</th>";
  // value +=  "<th>hit</th>";
  // value +=  "<th>date</th>";
  // value +=  "</tr>";
  value += "</tbody>";

  tableData.innerHTML = value;
}
