document.addEventListener('DOMContentLoaded', function () {
    var headerHeight = document.querySelector('header').offsetHeight;
    var navHeight = document.querySelector('nav').offsetHeight;

    var letterLinks = document.querySelectorAll('nav a');

    letterLinks.forEach(function (link) {
        // Adding click event listener to each letter link for scrolling to the target section
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var targetId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            var scrollPosition = targetSection.offsetTop - (headerHeight + navHeight);

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    });
});

