$(document).ready(function () {
  //   $('#pagepiling').pagepiling({

  //     onLeave: function(index, nextIndex, direction){
  //       if(deleteLog){
  //         $('#callbacksDiv').html('');
  //       }
  //       $('#callbacksDiv').append('<p>onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction + '</p>')
  //     },
  //     // navigation: {
  //     //   'position': 'right',
  //     //    'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4', , 'Pgae 5', , 'Pgae 6', , 'Pgae 7']
  //     //  }
  // });

  if ($("#pagepiling").length > 0) {
    $("#pagepiling").pagepiling({
      sectionsColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
      direction: "vertical",
      verticalCentered: true,
      keyboardScrolling: true,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      afterRender: function (anchorLink, index) {
        NavbarColor();
      },
      afterLoad: function (anchorLink, index) {
        $(".pp-section .intro").removeClass("animate");
        $(".active .intro").addClass("animate");
        NavbarColor();
      },
    });
    function NavbarColor() {
      if ($(".pp-section.active").hasClass("navbar-is-white")) {
        $(".header-div").addClass("header-bgcolor slideInDown animated");
        $("#pattern-1").addClass("d-none");
      } else {
        $(".header-div").removeClass("header-bgcolor slideInDown animated");
        $("#pattern-1").removeClass("d-none");
      }
    }
  }
});
