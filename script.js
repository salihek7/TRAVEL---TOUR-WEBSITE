const header = document.querySelector("header");
        window.addEventListener("scroll", function() {
            header.classList.toggle("sticky", window.scrollY > 60)
        });

        let menu = document.querySelector('#menubar');
        let navbar = document.querySelector('.navbar');

        menu.onclick = () => {
            menu.classList.toggle('fa-bars');
            navbar.classList.toggle('open');
        };