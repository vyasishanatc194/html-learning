// Wrap every letter in a span
var textWrapper = document.querySelector(".title-animation-letter");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".title-animation-letter .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 3000,
    delay: (el, i) => 140 * (i + 1),
  })
  .add({
    targets: ".title-animation-letter",
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// Loader code
(function (loader) {
  window.addEventListener("beforeunload", function (e) {
    activateLoader();
  });

  window.addEventListener("load", function (e) {
    deactivateLoader();
  });

  function activateLoader() {
    loader.style.display = "block";
    loader.style.opacity = 1;
    loader.classList.add("loader-active04");
    // title-animation-letter
  }

  function deactivateLoader() {
    /**
     * ensures that the loading animation plays for at least a second to give the
     * appearance of seamless loading on pages that execute and load extremely
     * quickly (i.e., intranet pages)
     */
    setTimeout(function () {
      deactivate();
    }, 3000);

    function deactivate() {
      loader.style.opacity = 0;
      loader.addEventListener(
        "transitionend",
        function () {
          loader.style.display = "none";
        },
        false
      );
      loader.classList.remove("loader-active04");
      loader.classList.add("loader-deactivate");
    }
  }
})(document.querySelector(".loader-active04"));
