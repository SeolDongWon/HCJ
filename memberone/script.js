function sizeChange() {
  let containDiv = document.getElementById('container');
  document.getElementById('containerWidth').innerHTML =
      '<h1>width : ' + containDiv.clientWidth + '</h1>';
  document.getElementById('containerHight').innerHTML =
      '<h1>hight : ' + containDiv.clientHeight + '</h1>';

  if (containDiv.clientWidth < 768) {
      document.getElementById('inner').style = "width:100%;";
  } else {
      document.getElementById('inner').style = "width: 500px;";
  }
}