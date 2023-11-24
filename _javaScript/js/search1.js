let special = "~!@#$%^&*()_=+|\\{}[];:\'\"<>,?/";
let str = prompt("ID를 입력하세요", "language");
let reg = /\W/;
let bool = false;

for (let i = 0; i < str.length; i++) {
  let c = str.charAt(i);
  if (special.search(c) >= 0) {
    bool = true;
    break;
  }
}

if(bool){
  alert("특수문자는 ID에 사용할 수 없습니다");
}else if(str.search(reg)>=0){
  alert("ID는 영문과 숫자만 가능합니다");
}else{
  alert(str+"은 ID에 사용할 수 있습니다");
}