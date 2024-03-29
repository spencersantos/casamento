document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".menu-link");

    // Função para atualizar o link do menu selecionado
    function updateMenuSelection() {
        var sections = document.querySelectorAll("section");

        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect(); // Obtém a posição da seção na tela

            if (rect.top <= 50 && rect.bottom >= 50) { // Se a seção estiver visível na tela
                var sectionId = section.getAttribute("id");
                links.forEach(function(link) {
                    if (link.getAttribute("href") === "#" + sectionId) {
                        links.forEach(function(item) {
                            item.classList.remove("selected");
                        });
                        link.classList.add("selected");
                    }
                });
            }
        });
    }

    // Atualizar o menu ao carregar e ao rolar a página
    window.addEventListener("load", updateMenuSelection);
    window.addEventListener("scroll", updateMenuSelection);

    // Atualizar o menu ao clicar nos links
    links.forEach(function(link) {
        link.addEventListener("click", function() {
            links.forEach(function(item) {
                item.classList.remove("selected");
            });
            this.classList.add("selected");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById("menu");
    var menuOffsetTop = menu.offsetTop; // Obtém a posição inicial do menu

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > menuOffsetTop) {
            menu.classList.add("fixed-menu"); // Adiciona a classe fixed-menu ao menu
        } else {
            menu.classList.remove("fixed-menu"); // Remove a classe fixed-menu do menu
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".menu-link");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita o comportamento padrão de clicar no link

            var targetId = this.getAttribute("href"); // Obtém o ID da seção alvo
            var targetSection = document.querySelector(targetId); // Seleciona a seção alvo

            // Rola suavemente até a seção alvo
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Adiciona a classe "selected" ao link atual e remove dos outros links
            links.forEach(function(item) {
                item.classList.remove("selected");
            });
            this.classList.add("selected");
        });
    });
});

function toggleDropdownMenu() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}


document.addEventListener("click", function(event) {
    var dropdownMenu = document.getElementById("dropdown-menu");
    var dropdownIcon = document.getElementById("dropbtn");
    
    // Verifica se o clique não foi dentro do dropdown e se o dropdown está aberto
    if (!dropdownIcon.contains(event.target) && dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    }
});



