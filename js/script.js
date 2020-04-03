function count(input) {
  var inputs = [];
  var one = "1";
  var two = "2";
  var three = "3";
  var finalString = [];

  for (i = 0; i <= input; i++) {
    var inputString = i.toString();
    var finalString = inputString.split("");
    inputs.push(finalString);
  }
  inputs.forEach(function(finalString) {
    var index = inputs.indexOf(finalString);
    if (finalString.includes(three)) {
      inputs[index] = "Won't you be my neighbor?";
    } else if (finalString.includes(two)) {
      inputs[index] = "Boop!";
    } else if (finalString.includes(one)) {
      inputs[index] = "Beep";
    } else {
      inputs[index] = finalString.join("");
    }
  });
  return inputs;
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var result = count(input);
    console.log(result);
    $("#result").text(result);
  });
});
