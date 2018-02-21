//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass('tasty');
      $('img').tasty.border.width = "5px";
      $('img').tasty.border.color = "#FF0000";
      $('img').tasty.border = "solid";
  });
}

function pressIt() {
  $("form").on("keydown", function() {
    if ($("input").val() === 71) {
      alert('G was pressed');
      return;
    }
    return;
  });
}

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
  });
}

$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

/*

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass('tasty');
    tasty.style.borderColor = "#FF0000";
  });
}
*/
