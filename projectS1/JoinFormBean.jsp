<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
request.setCharacterEncoding("UTF-8");
%>
<jsp:useBean id="JoinFormVO" class="projectS1.S1MemberVO" />
<jsp:setProperty name="JoinFormVO" property="*" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JoinFormBean</title>
</head>
<body>
	<br><jsp:getProperty name="JoinFormVO" property="id" />
	<br><jsp:getProperty name="JoinFormVO" property="password" />
	<br><jsp:getProperty name="JoinFormVO" property="name" />
	<br><jsp:getProperty name="JoinFormVO" property="birthday" />
	<br><jsp:getProperty name="JoinFormVO" property="tel" />
	<br><jsp:getProperty name="JoinFormVO" property="postcode" />
	<br><jsp:getProperty name="JoinFormVO" property="address" />
</body>
</html>
