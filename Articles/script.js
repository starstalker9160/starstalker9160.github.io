document.addEventListener('DOMContentLoaded', function() {
    var clickableDivs = document.querySelectorAll('.carouselItem');
    clickableDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            var url = div.getAttribute('data-url');
            window.location.href = url;
        });
    });
});