function company() {
  //객체참조변수선언
  let name = document.getElementById("name");
  let since = document.getElementById("since");
  let department = document.getElementById("department");
  let biz = document.getElementById("biz");

  //서버에서 데이터 가져오기(AJAX) JSON방식으로올것이다.
  let data = {
    "name": "(주)굿디자인",
    "since": "2015",
    "department": ["기획팀", "영업팀", "디자인팀", "개발팀"],
    "biz": ["소프트웨어개발", "통신판매업", "위치정보서비스"]
  };

  //화면 데이터 바인딩
  name.innerText += data.name;
  since.innerText += data.since;

  for (let value of data.department) {
    department.innerHTML += "<li>" + value + "</li>";
  }

  let bizV = '';
  for (let i = 0; i < data.biz.length; i++) {
    bizV = data.biz[i]
    biz.innerHTML += "<li>" + bizV + "</li>";
  }
  biz.style.listStyleType = "none"
  biz.style.margin = "0";
  biz.style.padding = "0";

}