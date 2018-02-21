//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass('tasty');
    $('img').style.tasty {
      border-width: "5px";
      border-color: red;
      border-style: solid;
    }
  })
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
