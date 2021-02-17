(function () {
  var lineMaker = new LineMaker({
    // position: if fixed the lines container will have fixed position.
    position: "fixed",
    /*
    lines: [
      {
        top: 0,
        left: "0%",
        width: 1,
        height: "100vh",
        color: "#0c286a1a",
        hidden: true,
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
          delay: 0,
          direction: "TopBottom",
        },
      },
      {
        top: 0,
        left: "15%",
        width: 1,
        height: "100vh",
        color: "#0c286a1a",
        hidden: true,
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
          delay: 0,
          direction: "TopBottom",
        },
      },
      {
        top: 0,
        left: "30%",
        width: 1,
        height: "100vh",
        color: "#0c286a1a",
        hidden: true,
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
          delay: 0,
          direction: "TopBottom",
        },
      },
      {
        top: 0,
        left: "45%",
        width: 1,
        height: "100vh",
        color: "#0c286a1a",
        hidden: true,
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
          delay: 0,
          direction: "TopBottom",
        },
      },
      {
        top: 0,
        left: "60%",
        width: 1,
        height: "100vh",
        color: "#0c286a1a",
        hidden: true,
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
          delay: 0,
          direction: "TopBottom",
        },
      },
      {
        top: 0,
        left: "75%",
        width: 1,
        height: "100vh",
        color: "#0c286a1a",
        hidden: true,
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
          delay: 0,
          direction: "TopBottom",
        },
      },
      {
        top: 0,
        left: "90%",
        width: 1,
        height: "100vh",
        color: "#0c286a1a",
        hidden: true,
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
          delay: 0,
          direction: "TopBottom",
        },
      },
    ], */
    lines: [
      {top: 0, left: '10vw', width: 1, height: '100%', color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' }},
      {top: 0, left: '20vw', width: 1, height: '100%', color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 20, direction: 'TopBottom' }},
      {top: 0, left: '30vw', width: 1, height: '100%', color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 40, direction: 'TopBottom' }},
      {top: 0, left: '40vw', width: 1, height: '100%', color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 60, direction: 'TopBottom' }},
      {top: 0, left: '50vw', width: 1, height: '100%', color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 80, direction: 'TopBottom' }},
      {top: 0, left: '60vw', width: 1, height: '100%', color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 100, direction: 'TopBottom' }},
      {top: 0, left: '70vw', width: 1, height: '100%', color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 120, direction: 'TopBottom' }},
      {top: 0, left: '80vw', width: 1, height: '100%', color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 140, direction: 'TopBottom' }},
      {top: 0, left: '90vw', width: 1, height: '100%', color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 160, direction: 'TopBottom' }},
      {top: '10vh', left: 0, width: '100%', height: 1, color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 20, direction: 'LeftRight' }},
      {top: '20vh', left: 0, width: '100%', height: 1, color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 40, direction: 'LeftRight' }},
      {top: '30vh', left: 0, width: '100%', height: 1, color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 60, direction: 'LeftRight' }},
      {top: '40vh', left: 0, width: '100%', height: 1, color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 80, direction: 'LeftRight' }},
      {top: '50vh', left: 0, width: '100%', height: 1, color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 100, direction: 'LeftRight' }},
      {top: '60vh', left: 0, width: '100%', height: 1, color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 120, direction: 'LeftRight' }},
      {top: '70vh', left: 0, width: '100%', height: 1, color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 140, direction: 'LeftRight' }},
      {top: '80vh', left: 0, width: '100%', height: 1, color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 160, direction: 'LeftRight' }},
      {top: '90vh', left: 0, width: '100%', height: 1, color: '#00000008', opacity: '0.2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 180, direction: 'LeftRight' }}
    ]
  });

  setTimeout(function () {
    disableButtons();
    lineMaker.animateLinesIn(enableButtons);
  }, 500);

  /*
  methods:

  // Shows all lines with an animation.
  // callback is optional.
  - lineMaker.animateLinesIn([callback]);
  
  // Hides all lines with an animation.
  // callback is optional.
  - lineMaker.animateLinesOut([callback]);
  
  // Shows one line with an animation.
  // lineIndex: index/position of the line in the LineMaker.options.lines array.
  // animationSettings is optional: if not passed, the animation settings defined in LineMaker.options.lines for each line will be used.
  - lineMaker.animateLineIn(lineIndex [,animationSettings]);
  
  // Hides one line with an animation.
  // lineIndex: index/position of the line in the LineMaker.options.lines array.
  // animationSettings is optional: if not passed, the animation settings defined in LineMaker.options.lines for each line will be used.
  - lineMaker.animateLineOut(lineIndex [,animationSettings]);

  // Shows all lines.
  - lineMaker.showLines();

  // hides all lines.
  - lineMaker.hideLines();

  // Shows one line.
  // lineIndex: index/position of the line in the LineMaker.options.lines array.
  - lineMaker.showLine(lineIdx);

  // Hides one line.
  // lineIndex: index/position of the line in the LineMaker.options.lines array.
  - lineMaker.hideLine(lineIdx);

  // Creates a line.
  // settings is optional: same settings passed in LineMaker.options.lines for one line.
  - lineMaker.createLine([settings]);
  
  // Removes all lines.
  - lineMaker.removeLines();

  // Removes a line.
  // lineIndex: index/position of the line in the LineMaker.options.lines array.
  - lineMaker.removeLine(lineIdx);

  */

  var ctrls = [].slice.call(document.querySelectorAll(".actions > button"));
  ctrls.forEach(function (ctrl) {
    ctrl.setAttribute("disabled", true);
  });

  function enableButtons() {
    ctrls.forEach(function (ctrl) {
      ctrl.removeAttribute("disabled");
    });
  }

  function disableButtons() {
    ctrls.forEach(function (ctrl) {
      ctrl.setAttribute("disabled", true);
    });
  }

  document.querySelector("#animateOut").addEventListener("click", function () {
    disableButtons();
    lineMaker.animateLinesOut(enableButtons);
  });

  document.querySelector("#animateIn").addEventListener("click", function () {
    disableButtons();
    lineMaker.animateLinesIn(enableButtons);
  });

  document.querySelector("#hideAll").addEventListener("click", function () {
    lineMaker.hideLines();
  });

  document.querySelector("#showAll").addEventListener("click", function () {
    lineMaker.showLines();
  });
})();
