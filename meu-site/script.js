/* ==========================================================
   CONFIGURAÇÕES DO SITE
========================================================== */

const CONFIG = {

    /*
        COLOQUE AQUI O NÚMERO DO WHATSAPP

        Formato:
        55 + DDD + número

        Não coloque:
        +
        espaços
        parênteses
        traços
    */

    whatsapp: "5565996963516"

};


/* ==========================================================
   LINK DO WHATSAPP
========================================================== */

const waLink = (mensagem) => {

    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;

};


/* ==========================================================
   IDENTIFICA QUE O JAVASCRIPT ESTÁ ATIVO
========================================================== */

document.documentElement.classList.add("js");


/* ==========================================================
   LINKS DO WHATSAPP
========================================================== */

document.querySelectorAll("[data-wa]").forEach((elemento) => {

    elemento.href = waLink(
        elemento.dataset.wa
    );

    elemento.target = "_blank";

    elemento.rel = "noopener noreferrer";

});


/* ==========================================================
   FORMULÁRIO
========================================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const nome =
                document
                    .getElementById("fName")
                    .value
                    .trim();


            const servico =
                document
                    .getElementById("fService")
                    .value;


            const mensagem =
                document
                    .getElementById("fMsg")
                    .value
                    .trim();


            const texto =

                `Olá, Igor! Meu nome é ${nome}. ` +

                `Tenho interesse em: ${servico}.` +

                `${mensagem ? ` ${mensagem}` : ""}`;


            window.open(
                waLink(texto),
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* ==========================================================
   MENU
========================================================== */

const nav =
    document.getElementById("nav");


if (nav) {

    const onScroll = () => {

        nav.classList.toggle(
            "is-scrolled",
            window.scrollY > 24
        );

    };


    onScroll();


    window.addEventListener(
        "scroll",
        onScroll,
        {
            passive: true
        }
    );

}


/* ==========================================================
   MENU MOBILE
========================================================== */

const toggle =
    document.getElementById("navToggle");


const links =
    document.getElementById("navLinks");


if (toggle && links) {

    const setMenu = (aberto) => {

        links.classList.toggle(
            "is-open",
            aberto
        );


        toggle.setAttribute(
            "aria-expanded",
            aberto
        );


        toggle.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu"
                : "Abrir menu"
        );

    };


    toggle.addEventListener(
        "click",
        () => {

            const aberto =
                links.classList.contains(
                    "is-open"
                );


            setMenu(!aberto);

        }
    );


    links
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    setMenu(false);

                }
            );

        });

}


/* ==========================================================
   ANIMAÇÃO DOS ELEMENTOS
========================================================== */

const items =
    document.querySelectorAll(
        ".reveal"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "is-visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    items.forEach(
        (elemento, indice) => {

            elemento.style.transitionDelay =
                `${(indice % 4) * 70}ms`;

            observer.observe(
                elemento
            );

        }
    );

} else {

    items.forEach(
        (elemento) => {

            elemento.classList.add(
                "is-visible"
            );

        }
    );

}


/* ==========================================================
   EFEITO DO HERO COM O MOUSE
========================================================== */

const hero =
    document.querySelector(
        ".hero"
    );


if (hero) {

    hero.addEventListener(
        "pointermove",
        (event) => {

            const area =
                hero.getBoundingClientRect();


            hero.style.setProperty(
                "--mx",
                `${event.clientX - area.left}px`
            );


            hero.style.setProperty(
                "--my",
                `${event.clientY - area.top}px`
            );

        }
    );

}