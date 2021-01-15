$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    $(".output").show();
    $("form").hide();
  })
})