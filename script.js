document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab li');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

