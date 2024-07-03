document.addEventListener('DOMContentLoaded', function() {
    var clickableDivs = document.querySelectorAll('.carouselItem');
    clickableDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            var url = div.getAttribute('data-url');
            window.location.href = url;
        });
    });
    var clickableDivs2 = document.querySelectorAll('.carouselItem2');
    clickableDivs2.forEach(function(div) {
        div.addEventListener('click', function() {
            var url = div.getAttribute('data-url');
            window.location.href = url;
        });
    });
});