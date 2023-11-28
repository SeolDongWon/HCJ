var slides = document.querySelectorAll("#slides>img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}
function prevSlide() {
  if (current > 0) {
    current -= 1;
  } else {
    current = slides.length - 1;
  }
  showSlides(current);
}
function nextSlide() {
  if (current < slides.length - 1) {
    current += 1;
  } else {
    current = 0;
  }
  showSlides(current);
}

/*-----------------------------------*/
/*-----------오토슬라이드----------------*/
let slideCnt = 0;

function autoSlide() {
  showSlides(slideCnt);
  slideCnt = (slideCnt + 1) % 3;
}

let slideShow = document.getElementById("slideShow");
slideShow.onmouseover = stopTimer;
slideShow.onmouseout = startTimer;

function startTimer() {
  intervalIndex = setInterval(autoSlide, 1000);
}
startTimer();

function stopTimer() {
  clearInterval(intervalIndex);
}
/*-----------오토슬라이드----------------*/
/*-----------------------------------*/
/*-----------공지사항----------------*/

let noticeEventCnt = 0;
let mxNoticeEventCnt = 1; // 공지사항에 표시할 event의 수

let noticeArticleCnt = 0;
let mxNoticeArticleCnt = 3; // 공지사항에 표시할 article의 수

let noticeItem = {
  "H2": "공지사항 내용입니다.",
  "item": [
    {
      "no": "1",
      "topic": "event",
      "subject": "테스트이벤트6",
      "date": "2023.11.11"
    },
    {
      "no": "2",
      "topic": "event",
      "subject": "테스트이벤트7",
      "date": "2023.11.11"
    },

    {
      "no": "3",
      "topic": "article",
      "subject": "테스트아티클8",
      "date": "2023.11.11"
    },
    {
      "no": "4",
      "topic": "article",
      "subject": "테스트아티클9",
      "date": "2023.11.11"
    },
    {
      "no": "5",
      "topic": "article",
      "subject": "가을, 추천 여행지",
      "date": "2023.11.20"
    },
    {
      "no": "6",
      "topic": "event",
      "subject": "[참가 모집] 여름 방학 기간, 올므 체험단을 모집합니다.",
      "date": "2023.11.22"
    },
    {
      "no": "7",
      "topic": "event",
      "subject": "[참가 모집] 카약 체험에 초대합니다.",
      "date": "2023.11.23"
    },
    {
      "no": "8",
      "topic": "article",
      "subject": "겨울, 추천 여행지",
      "date": "2023.11.25"
    },
    {
      "no": "9",
      "topic": "article",
      "subject": "사무실을 이전했습니다",
      "date": "2023.11.27"
    }
  ]
};

let value = "";
let noticeDiv = document.getElementById("notice");

value += "<h2>" + noticeItem.H2 + "</h2>";
value += "<ul>";

for (let i = noticeItem.item.length - 1; i != 0; i--) {
  if (noticeItem.item[i].topic == 'event') {
    value += "<li>" + noticeItem.item[i].subject + "</li>";
    noticeEventCnt += 1
  }
  if (noticeEventCnt == mxNoticeEventCnt) {
    noticeEventCnt = 0;
    break;
  }
}


for (let i = noticeItem.item.length - 1; i != 0; i--) {
  if (noticeItem.item[i].topic == 'article') {
    value += "<li>" + noticeItem.item[i].subject + "</li>";
    noticeArticleCnt += 1
  }
  if (noticeArticleCnt == mxNoticeArticleCnt) {
    noticeArticleCnt = 0;
    break;
  }
}
value += "</ul>";

noticeDiv.innerHTML = value;

/*-----------공지사항----------------*/
/*-----------------------------------*/
/*-----------갤러리----------------*/

let galleryCnt = 0;
let mxGalleryCnt = 4; //갤러리에 표시할 사진의 수

var galleryItem = {
  "H2": "갤러리 내용입니다.",
  "item": [
    {
      "no": "1",
      "topic": "event",
      "subject": "<img src='images/img-1.jpg' alt=''>",
      "date": "2023.11.11"
    },
    {
      "no": "2",
      "topic": "event",
      "subject": "<img src='images/img-2.jpg' alt=''>",
      "date": "2023.11.11"
    },

    {
      "no": "3",
      "topic": "article",
      "subject": "<img src='images/img-3.jpg' alt=''>",
      "date": "2023.11.11"
    },
    {
      "no": "1",
      "topic": "event",
      "subject": "<img src='images/img-1.jpg' alt=''>",
      "date": "2023.11.11"
    },
    {
      "no": "2",
      "topic": "event",
      "subject": "<img src='images/img-2.jpg' alt=''>",
      "date": "2023.11.11"
    },

    {
      "no": "3",
      "topic": "article",
      "subject": "<img src='images/img-3.jpg' alt=''>",
      "date": "2023.11.11"
    },
    {
      "no": "1",
      "topic": "event",
      "subject": "<img src='images/img-1.jpg' alt=''>",
      "date": "2023.11.11"
    },
    {
      "no": "2",
      "topic": "event",
      "subject": "<img src='images/img-2.jpg' alt=''>",
      "date": "2023.11.11"
    },

    {
      "no": "3",
      "topic": "article",
      "subject": "<img src='images/img-3.jpg' alt=''>",
      "date": "2023.11.11"
    }
  ]
};

let valueG = "";
let galleryDiv = document.getElementById("gallery");

valueG += "<h2>" + galleryItem.H2 + "</h2>";
valueG += "<ul>";

for (let i = galleryItem.item.length - 1; i != 0; i--) {
  valueG += "<li>" + galleryItem.item[i].subject + "</li>";
  galleryCnt += 1
  if (galleryCnt == mxGalleryCnt) {
    galleryCnt = 0;
    break;
  }
}
valueG += "</ul>";
galleryDiv.innerHTML = valueG;

/*-----------갤러리----------------*/
/*-----------------------------------*/


