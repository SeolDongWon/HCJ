<%@page import="projectS1.S1MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String id = request.getParameter("id");
	System.out.println("1 : "+id);
	S1MemberDAO sMDA = new S1MemberDAO();
	System.out.println("2 : "+sMDA);
	boolean idCheck = sMDA.idDuplicateCheck(id);
	System.out.println("3 : "+idCheck);
	session.setAttribute("idDuplicateCheck", idCheck);
	System.out.println("4 : "+session.getAttribute("idDuplicateCheck"));
%>
<!-- <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>IdDuplicateCheck</title>
</head>

<body> -->
<h1 id="idCheck">123</h1>

<!-- </body> -->
<script>
	alert()
	let idCheck = <%=idCheck%>;
	let joinfrm = joinFrom.document.id.value
	console.log("sc : "+joinFrom.id.value)
	console.log(idCheck);
	let answer;
	if(!idCheck){
		answer='사용가능';
	}else{
		answer='사용불가';
	}
	console.log(answer);
	document.getElementById("idCheck").innerHTML=answer;
</script>
<!-- </html> -->