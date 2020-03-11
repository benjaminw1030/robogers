// business logic
var robogers = function(number) {
  if (isNaN(number)) {
    return "DOES NOT COMPUTE, NEIGHBOR UNIT";
  } else {
    var robogersArray = [];
    for (var i = 0; i <= number; i++) {
      robogersArray.push(i);
    };
    var robogersArrayMod = robogersArray.map(function(num) {
      var digits = num.toString().split("");
      if (digits.includes("3")) {
        return "\"Won't you be my neighbor?\"";
      } else if (digits.includes("2")) {
        return "\"Boop\"";
      } else if (digits.includes ("1")) {
        return "\"Beep\"";
      } else {
        return num;
      };
    });
    return robogersArrayMod.join(", ");
  };
};

// user interface logic
$(document).ready(function() {
  $("form#mr-robogers").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#input").val());
    var robogerOutput = robogers(number);
    $("#output").text(robogerOutput);
    $("#robogers").fadeIn();
  });
});