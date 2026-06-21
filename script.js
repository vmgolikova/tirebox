// ======================================
// MOBILE MENU
// ======================================

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

function openMenu() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');

    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');

    document.body.style.overflow = '';
}

burger.addEventListener('click', openMenu);

closeMenu.addEventListener('click', closeMobileMenu);

overlay.addEventListener('click', closeMobileMenu);

// ======================================
// CLOSE MENU AFTER CLICK
// ======================================

const mobileLinks = document.querySelectorAll(
    '.mobile-menu__nav a'
);

mobileLinks.forEach(link => {

    link.addEventListener('click', () => {

        closeMobileMenu();

    });

});

// ======================================
// SMOOTH SCROLL
// ======================================

const anchorLinks = document.querySelectorAll(
    'a[href^="#"]'
);

anchorLinks.forEach(link => {

    link.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });

});

// ======================================
// INTERSECTION OBSERVER
// ======================================

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('active');

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    observer.observe(element);

});

// ======================================
// CART ANIMATION
// ======================================

const cartButton = document.querySelector('.cart-button');

if (cartButton) {

    cartButton.addEventListener('click', () => {

        cartButton.classList.add('cart-active');

        setTimeout(() => {

            cartButton.classList.remove('cart-active');

        }, 600);

    });

}

// ======================================
// PRODUCT CARDS HOVER EFFECT
// ======================================

const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
            'translateY(-10px) scale(1.02)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'translateY(0) scale(1)';

    });

});

// ======================================
// HEADER SHADOW ON SCROLL
// ======================================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            '0 8px 25px rgba(0,0,0,.35)';

    } else {

        header.style.boxShadow = 'none';

    }

});

// ======================================
// BUTTON RIPPLE EFFECT
// ======================================

document.querySelectorAll('button').forEach(button => {

    button.addEventListener('click', function (e) {

        const circle =
            document.createElement('span');

        const diameter =
            Math.max(
                this.clientWidth,
                this.clientHeight
            );

        circle.style.width =
            circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.offsetX - diameter / 2}px`;

        circle.style.top =
            `${e.offsetY - diameter / 2}px`;

        circle.classList.add('ripple');

        const oldRipple =
            this.querySelector('.ripple');

        if (oldRipple) {

            oldRipple.remove();

        }

        this.appendChild(circle);

    });

});

// ======================================
// PRELOADER EFFECT
// ======================================

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});

// ======================================
// CURRENT YEAR AUTO UPDATE
// ======================================

const copyright =
    document.querySelector('.copyright');

if (copyright) {

    const year =
        new Date().getFullYear();

    copyright.innerHTML =
        `©${year} TIREBOX. Все права защищены`;

}

// ======================================
// PRELOADER
// ======================================

window.addEventListener('load', () => {

    const preloader =
        document.getElementById('preloader');

    setTimeout(() => {

        preloader.classList.add('hide');

    }, 1000);

});

/* ======================================
   MODAL WINDOWS FOR TIRE CATEGORIES
====================================== */

const categoryCards = document.querySelectorAll(".category-open");
const modalWindows = document.querySelectorAll(".products-modal");
const modalCloseButtons = document.querySelectorAll(".products-modal__close");

/* Открытие окна по клику на карточку */
categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
        const modalName = card.dataset.modal;
        const modal = document.getElementById(`${modalName}-modal`);

        if (modal) {
            modal.classList.add("is-open");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        }
    });
});

/* Закрытие через крестик */
modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".products-modal");

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    });
});

/* Закрытие при клике на затемнённый фон */
modalWindows.forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("is-open");
            modal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }
    });
});

/* Закрытие на Escape */
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modalWindows.forEach((modal) => {
            modal.classList.remove("is-open");
            modal.setAttribute("aria-hidden", "true");
        });

        document.body.style.overflow = "";
    }
});

/* ======================================
   ACCESSORIES MODAL
====================================== */

const accessoriesButton = document.querySelector(".accessories-open");

if (accessoriesButton) {
    accessoriesButton.addEventListener("click", () => {
        const accessoriesModal = document.getElementById("accessories-modal");

        accessoriesModal.classList.add("is-open");
        accessoriesModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    });
}