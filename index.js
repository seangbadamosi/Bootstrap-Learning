// For Spinner / loader 

window.onload = function() {
    // Wait until the page is fully loaded
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';  // Hide the preloader
        document.querySelector('.content').style.display = 'block';   // Show the content
    }, 1000);  // Adjust the timeout duration as needed
};

// for Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'});