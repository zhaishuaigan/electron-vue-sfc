import View from "./vue/view.js";
(async function () {
    var page = location.hash = location.hash || "#index";
    page = page.substring(1);
    View.create(page);
})();