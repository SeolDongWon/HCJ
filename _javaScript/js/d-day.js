
function getDDay(y, m, d) {
  let today = new Date();
  let dday = new Date(y, m - 1, d);
  let cnt = dday.getTime() - today.getTime();
  let n = Math.ceil(cnt / (24 * 60 * 60 * 1000));
  return n;
}

function calDate() {
  let date = new Date();
  let y = date.getFullYear();
  let dday = getDDay(y, 12, 31);
  let h1Arr = document.getElementsByTagName("h1");
  h1Arr[0].innerHTML = "올해 " + dday + "일 남았어.";
}

function clear1() {
  let h1Arr = document.getElementsByTagName("h1");
  h1Arr[0].innerHTML = "올해 며칠 남았어?";
}