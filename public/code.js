document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('aboutscroll');
    const targetElement = document.getElementById('about');

    scrollButton.addEventListener('click', function () {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('experiencescroll');
    const targetElement = document.getElementById('experience');

    scrollButton.addEventListener('click', function () {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('projectscroll');
    const targetElement = document.getElementById('projects');

    scrollButton.addEventListener('click', function () {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('contactscroll');
    const targetElement = document.getElementById('contact');

    scrollButton.addEventListener('click', function () {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

