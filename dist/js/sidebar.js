var SIDEBAR = document.querySelector('.sidebar');
// var SIDEBAR_OVERLAY = document.querySelector('.sidebar-overlay');

function closeSidebar() {
    SIDEBAR.classList.remove('active');
    document.body.style = "overflow: unset;";
    // document.body.removeChild(SIDEBAR_OVERLAY);
    // console.log(SIDEBAR)
}

function openSidebar() {
    SIDEBAR.classList.add("active");
    document.body.style = "overflow: hidden;";
}

window.onload = function() {
    let closeBtn = document.querySelector("#sidebar-button");
    closeBtn.addEventListener("click", function(e) {
        closeSidebar();
    });

    let mainNavBtn = document.querySelector('#mainNavBtn');
    mainNavBtn.addEventListener("click", function(e) {
        openSidebar();
    });
}