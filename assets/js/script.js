// *** begin:https://bootstrap-menu.com/multi-level-dropdown.html//
document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
    // close all inner dropdowns when parent is closed
    document
      .querySelectorAll(".navbar .dropdown")
      .forEach(function (everydropdown) {
        everydropdown.addEventListener("hidden.bs.dropdown", function () {
          // after dropdown is hidden, then find all submenus
          this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
            // hide every submenu as well
            everysubmenu.style.display = "none";
          });
        });
      });

    document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
      element.addEventListener("click", function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains("submenu")) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          if (nextEl.style.display == "block") {
            nextEl.style.display = "none";
          } else {
            nextEl.style.display = "block";
          }
        }
      });
    });
  }
  // end if innerWidth
});
// *** end:https://bootstrap-menu.com/multi-level-dropdown.html//

/*begin::odometer */
$.appear("#ws-counter", {});
$("#ws-counter").on("appear", function () {
  document.querySelectorAll(".odometer").forEach(function (element) {
    let data_target = element.getAttribute("data-target");
    element.innerHTML = data_target;
  });
});
/*end::odometer */
/* begin::sliders */
const ws_comments_slider_el = document.getElementById("ws-comments-slider");
const ws_comments_slider = new Swiper(ws_comments_slider_el, {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 100,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ws-partners-slider
const ws_partners_slider_el = document.getElementById("ws-partners-slider");
const ws_partners_slider = new Swiper(ws_partners_slider_el, {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
});
/*end::sliders */
/* end::sliders */
$(document).ready(function () {
  $("nav").sticky({ topSpacing: 0 });
});