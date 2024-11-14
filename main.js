// // Đối tượng lưu trữ số lượt nghe của từng bài hát
// var songCounts = {
//   ad1: 5,
//   dvt: 6,
//   tc: 8,
//   tlbt: 9,
//   ny: 50,
// };
// // Lấy tất cả các phần tử có class "thanbang"
// var thanBangElements = document.querySelectorAll(".thanbang .bai");
// var audioPlayer = document.getElementById("audio-player");
// var luotnghehientai = document.getElementById("luotnghehientai");
// var Heart = document.querySelectorAll(" .fa-heart");
// var addHeart = document.querySelector(".nutcong");

// thanBangElements.forEach((thanBang) => {
//   thanBang.addEventListener("click", function () {
//     const songName = thanBang.getAttribute("data-song");
//     if (songName) {
//       audioPlayer.src = songName + ".mp3";
//       audioPlayer.play();
//       songCounts[songName]++;
//       luotnghehientai.textContent = "Lượt nghe:" + songCounts[songName];

//       console.log("Đang phát:", songName);
//       // Dòng này giúp kiểm tra xem sự kiện click có hoạt động không
//       console.log("Lượt nghe:", songCounts[songName]);
//     } else {
//       console.log("Không tìm thấy dữ liệu bài hát");
//     }
//   });
// });

// function checkHeart(event) {
//   // Lấy phần tử trái tim mà người dùng đã nhấn
//   const clickedElement = event.currentTarget;

//   // Kiểm tra xem bài hát đã được yêu thích hay chưa
//   if (clickedElement.classList.contains("liked")) {
//     // Nếu đã yêu thích, chuyển sang chế độ bỏ thích
//     clickedElement.classList.remove("liked");
//     clickedElement.classList.add("unliked");

//     // Ẩn biểu tượng trái tim khi bỏ thích
//     clickedElement.style.display = "none";

//     console.log("Removed from favorites");
//   } else {
//     // Nếu chưa yêu thích, chuyển sang chế độ yêu thích
//     clickedElement.classList.remove("unliked");
//     clickedElement.classList.add("liked");

//     console.log("Added to favorites");
//   }
// }
// addHeart.addEventListener("click", function () {
//   // Hiển thị lại tất cả các trái tim
//   heart.forEach(function (element) {
//     element.style.display = "inline"; // hoặc "block" tùy kiểu hiển thị mong muốn
//   });
// });
var music = [
  {
    name: "Haru Haru",
    src: "ad1.mp3",
    listener: 111,
    lyric: "aaa",
  },
  {
    name: "Đừng về trễ",
    src: "dvt.mp3",
    listener: 111,
    lyric: "aaa",
  },
  {
    name: "Trống cơm",
    src: "tc.mp3",
    listener: 111,
    lyric: "aaa",
  },
  {
    name: "Tìm lại bầu trời",
    src: "tlbt.mp3",
    listener: 111,
    lyric: "aaa",
  },
  {
    name: "Người ấy",
    src: "ny.mp3",
    listener: 111,
    lyric: "aaa",
  },
  {
    name: "Nấu cơm cho em",
    src: "nace.mp3",
    listener: 111,
    lyric: "",
  },
  {
    name: "Anh yêu người khác rồi",
    src: "ad1.mp3",
    listener: 111,
    lyric: "",
  },
  {
    name: "Nhật ký của mẹ",
    src: "nkcm.mp3",
    listener: 111,
    lyric: "cccc",
  },
];

var currentIndex = -1;
function changeMusic(index) {
  var audioPlayer = document.getElementById("audio-player");
  if (currentIndex != index) {
    audioPlayer.src = music[index].src;
    audioPlayer.play();
    currentIndex = index;
  }
  addListener(currentIndex);
  addLyric(currentIndex);
}

function addListener(index) {
  music[index].listener++;
  var luotnghemoi = document.getElementById("luotnghehientai");
  luotnghemoi.innerHTML = "Lượt nghe:" + music[index].listener;
}
function addLyric(index) {
  document.querySelector(".ablum_cuthe").style = "display:none";
  document.getElementsByClassName("lyric")[0].innerHTML =
    "Lyric:" + music[index].lyric;
  document.getElementsByClassName("thunho")[0].style = "display:block";
  var thunho = document.getElementsByClassName("thunho")[0];
  thunho.addEventListener("click", function () {
    document.getElementsByClassName("ablum_cuthe")[0].style = "display:block";
    document.getElementsByClassName("lyric")[0].style = "display:none";
    document.getElementsByClassName("thunho")[0].style = "display:none";
  });
}
