$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let name = $("#name").val();
    $("#nameOut").text(name);
    $(".output").show();
    $("form").hide();
  });
});