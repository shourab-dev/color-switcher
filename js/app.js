$(function () {
  $(".color_picker span").click(function () {
    $(this).parent().toggleClass("active");
  });

  //   color
  $(".allColors li label").click(function () {
    let color = $(".allColors input:checked").attr("data-value");
    $("html , body").toggleClass(color);
  });
});
