// business logic
var robogers = function(number) {
  var robogersArray = [];
  for (var i = 0; i <= number; i++) {
    robogersArray.push(i);
  }
  return robogersArray.join(", ");
}

// user interface logic
$(document).ready(function() {
  $("form#mr-robogers").submit(function(event) {
    event.preventDefault();
    var number = $("input#input").val();
    var robogerOutput = robogers(number);
    $("#output").text(robogerOutput);
    $("#output").show();
  });
});