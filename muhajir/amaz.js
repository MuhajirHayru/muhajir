document.addEventListener('DOMContentLoaded', function() {
    var modeToggle = document.getElementById('modeToggle');
    var body = document.body;

    modeToggle.addEventListener('change', function() {
        if (modeToggle.checked) {
            body.classList.add('night-mode');
        } else {
            body.classList.remove('night-mode');
        }
    });
});
