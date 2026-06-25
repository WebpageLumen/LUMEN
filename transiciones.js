document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (
        link &&
        link.href &&
        !link.target
    ) {
        const url = new URL(link.href);
        const isSamePage = url.pathname === window.location.pathname;

        // Si es la misma página, deja que el navegador haga scroll normal
        if (isSamePage) return;

        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = link.href; // lleva el hash incluido
        }, 400);
    }
});
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) target.scrollIntoView({ behavior: "smooth" });
        }, 450);
    }
});
