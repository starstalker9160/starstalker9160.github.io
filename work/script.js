document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(div) {
        div.addEventListener('click', function() { if (div.getAttribute('data-url')){ window.open(div.getAttribute('data-url'), '_blank'); }});
    });
});
