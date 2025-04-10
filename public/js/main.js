(() => {
  // <stdin>
  window.addEventListener("DOMContentLoaded", (event) => {
    const listHoursArray = document.body.querySelectorAll(".list-hours li");
    listHoursArray[(/* @__PURE__ */ new Date()).getDay()].classList.add("today");
  });
})();
/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
