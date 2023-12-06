function screanCheck() {
    document.getElementById('w').innerHTML = "<h1>화면 너비 : " + window.outerWidth + "</h1>";
    document.getElementById('h').innerHTML = "<h1>화면 높이 : " + window.outerHeight + "</h1>";

    let containDiv = document.getElementById('container');
    document.getElementById('containerWidth').innerHTML =
        '<h1>width : ' + containDiv.clientWidth + '</h1>';
    document.getElementById('containerHight').innerHTML =
        '<h1>hight : ' + containDiv.clientHeight + '</h1>';

    let maintab2Div = document.getElementById('maintab2');
    document.getElementById('maintab2Width').innerHTML =
        '<h1>width : ' + maintab2Div.clientWidth + '</h1>';
    document.getElementById('maintab2Hight').innerHTML =
        '<h1>hight : ' + maintab2Div.clientHeight + '</h1>';



    if (containDiv.clientWidth < 720) {
        document.getElementById('maintab1').style.width = "100%";
        document.getElementById('maintab2').style.width = "100%";
        // document.getElementsByClassName('maintab').style = "width:100%;";
        // document.getElementById('inner').style = "width:100%;";
    } else {
        document.getElementById('maintab1').style.width = "";
        document.getElementById('maintab2').style.width = "";
    }

    // if (maintab2Div.clientWidth < 300) {
        // document.getElementById('maintab2').style = "width:100%;";
    // }

}