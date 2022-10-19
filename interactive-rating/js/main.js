var buttons = $(".button-1, .button-2, .button-3, .button-4, .button-5");
var but1 = $(".button-1");
var but2 = $(".button-2");
var but3 = $(".button-3");
var but4 = $(".button-4");
var but5 = $(".button-5");

var selected = 0;

$(function() {
    initHover();
    click();
    submit();
});

function initHover(){
  buttons.hover(function(){
    $(this).addClass("hover");
  }, function(){
    $(this).removeClass("hover");
  });
}

function click(){
  but1.click(function(){
    but1.toggleClass("active");
    but2.removeClass("active");
    but3.removeClass("active");
    but4.removeClass("active");
    but5.removeClass("active");
    selected = 1;
  });

  but2.click(function(){
    but2.toggleClass("active");
    but1.removeClass("active");
    but3.removeClass("active");
    but4.removeClass("active");
    but5.removeClass("active");
    selected = 2;
  });

  but3.click(function(){
    but3.toggleClass("active");
    but2.removeClass("active");
    but1.removeClass("active");
    but4.removeClass("active");
    but5.removeClass("active");
    selected = 3;
  });

  but4.click(function(){
    but4.toggleClass("active");
    but2.removeClass("active");
    but3.removeClass("active");
    but1.removeClass("active");
    but5.removeClass("active");
    selected = 4;
  });

  but5.click(function(){
    but5.toggleClass("active");
    but2.removeClass("active");
    but3.removeClass("active");
    but4.removeClass("active");
    but1.removeClass("active");
    selected = 5;
  });
}

function submit(){
  var butSubmit = $("#submit");
  butSubmit.click(function(){
    if(selected == 0){
      alert("Please select an option");
    }
    else{
      var main = $(".content-main");
      var thanks = $(".content-thanks");
      var span = $("#feedback");

      main.addClass("hidden");

      // animações
      main.fadeOut(1000);
      setTimeout(function(){
        thanks.removeClass("hidden");
      }, 1000);
      thanks.fadeIn(1000);

      // mostrando o feedback
      span.text(selected);
    }
  });
}