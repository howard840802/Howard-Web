// 網頁的主程式寫在這裡

$(".ad-toggle-btn").click(function () {
  // 點到ad-toggle-btn後要做的事情
  // 切換函數.ad-box 加入 active
  $(".ad-box").toggleClass("active");
});

//當導覽列.navbar-nav裡面的nav-link被點擊時
$("btn-next").click(function () {
  // 取得當下被點擊到的 .nav-link
  // console.log(this);
  // 取得屬性質.attr()
  // 取得移動目標 -->取得當下(this)被點到href值 -->#標籤
  var target = $(this).attr("href"); // ID選擇器
  // 取得移動目標的所在
  var position = $(target).offset().top;

  // 設定動畫時間ms
  var duration = 700;
  // 先停止前一個動畫，在設定下一個滑動動畫.animate(object{},ms)
  // $(".navbar").outerHeight()取得高度
  var navbarHeight = $(".navbar").outerHeight();
  console.log(position - navbarHeight);
  $("html,body")
    .stop()
    .animate(
      {
        scrollTop: position - navbarHeight,
      },
      duration
    );
});
