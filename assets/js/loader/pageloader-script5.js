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
    loader.classList.add("loader-active05");
  }

  function deactivateLoader() {
    /**
     * ensures that the loading animation plays for at least a second to give the
     * appearance of seamless loading on pages that execute and load extremely
     * quickly (i.e., intranet pages)
     */
    setTimeout(function () {
      deactivate();
    }, 2000);

    function deactivate() {
      loader.style.opacity = 0;
      loader.addEventListener(
        "transitionend",
        function () {
          loader.style.display = "none";
        },
        false
      );
      loader.classList.remove("loader-active05");
      loader.classList.add("loader-deactivate");
    }
  }
})(document.querySelector(".loader-active05"));

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Path("#blooksy-outline", {
  easing: "easeInOut",
  duration: 2400,
});

bar.set(0);
bar.animate(1.0); // Number from 0.0 to 1.0
