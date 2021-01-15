$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let name = $("#name").val();
    $(".nameOut").text(name);
    let total = 0;
    let g = 0;
    let choice = 0;
    if ($("#gender").val() === "Male") {
      g = 1;
    } else if ($("#gender").val() === "Female") {
      g = 10;
    }
    if ($("input:radio[name=celebrity]:checked").val() === "char") {
      choice = 100;
    } else if ($("input:radio[name=celebrity]:checked").val() === "cel") {
      choice = 1;
    }
    total = g + choice;
    if (total < 10) {

      $(".output2").show();
      $("form").hide();
    } else if (total < 100) {
      $(".output1").show();
      $("form").hide();
    } else if (total > 100) {
      $(".output3").show();
      $("form").hide();

    }
  });
});