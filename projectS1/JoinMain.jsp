<%@page import="java.sql.SQLException"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.sql.SQLException"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JoinMain</title>
</head>
<body>
	<%
	if (session.getAttribute("user") != null) {
		String sessionId = session.getId();
		System.out.println("세션 아이디 : " + sessionId);
		String user = (String) session.getAttribute("user");
	%>
	<table border='1' width='300'>
		<tr>
			<td width='300' align='center'>" + <%=user%> + " 님 로그인 되었습니다.
			</td>
		</tr>
		<tr>
			<td align='center'><a href='#'>회원정보</a> <a href='Logout'>로그아웃</a>
			</td>
		</tr>
	</table>
	<%
	} else {
	%>
	<form method='post' action='LoginCheck'>
		<table>
			<tr>
				<th>id</th>
				<td><input type='text' name='id'></td>
			</tr>
			<tr>
				<th>password</th>
				<td><input type='password' name='password'></td>
			</tr>
			<tr>
				<td><a href="/jsptest/projectS1/GetMemberList.jsp">MemberList</a></td>
				<td><a href="/jsptest/projectS1/JoinForm.jsp">회원가입</a>
				<input type='submit'value='로그인'></td>
			</tr>
		</table>
	</form>
	<%
	}
	%>
</body>
<style>
table {
	margin: auto;
}

table, td, th, input {
	border-collapse: collapse;
	border: 1px solid black;
	padding: 5px 10px 5px 10px;
	/* padding: 2px; */
}
</style>
</html>