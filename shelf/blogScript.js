document.addEventListener('DOMContentLoaded', function () {
    const codeElements = document.querySelectorAll('code[data-url]');
    codeElements.forEach(function (codeElement) {
        fetch(codeElement.getAttribute('data-url'))
            .then(response => {
                if (!response.ok) { throw new Error('File not found'); }
                return response.text();
            })
            .then(data => { codeElement.textContent = data; })
            .catch(error => {
                console.error('Error fetching the file:', error);
                codeElement.textContent = 'Failed to load the file content.';
            });
    });

    document.addEventListener('scroll', function() {
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollTop = window.scrollY;
    
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = scrollPercent + '%';
    });
});
