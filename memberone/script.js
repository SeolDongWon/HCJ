function idCheck(id){
  console.log(idCheck);
  if(id==""){
    alert("아이디를 입력해 주세요.");
    document.regForm.id.forus();
  }else{
    url="idCheck.jsp?id="+id;
    window.open(url,"post","width=300,height=150");
  }
}