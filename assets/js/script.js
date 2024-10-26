$(function () {
  $(".header .menu-btn").on("click", function () {
    $(".header .header-desktop .main_menu").slideToggle();
    $(this).toggleClass("open");
  });
});
