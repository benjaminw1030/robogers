// business logic
var robogers = function(number) {
  var robogersArray = [];
  for (var i = 0; i <= number; i++) {
    robogersArray.push(i);
  };
  var robogersArrayMod = robogersArray.map(function(number) {
    var digits = number.toString().split("");
    if (digits.includes("2")) {
      return "Boop";
    } else if (digits.includes("1")) {
      return "Beep";
    } else {
      return number;
    }
  });
  return robogersArrayMod.join(", ");
};

// user interface logic
$(document).ready(function() {
  $("form#mr-robogers").submit(function(event) {
    event.preventDefault();
    var number = $("input#input").val();
    debugger
    var robogerOutput = robogers(number);
    $("#output").text(robogerOutput);
    $("#output").show();
  });
});