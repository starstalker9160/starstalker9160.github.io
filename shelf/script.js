document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(div) {
        div.addEventListener('click', function() { if (div.getAttribute('data-url')){ window.location.href = div.getAttribute('data-url') }});
    });
});