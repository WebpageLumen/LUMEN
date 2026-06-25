// Crear estilos desde JavaScript
const style = document.createElement("style");
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
    }

    body.fade-in {
        opacity: 1;
    }

    body.fade-out {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Animación al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

// Animación al cambiar de página
document.addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if (
        link &&
        link.href &&
        !link.target &&
        !link.href.includes("#")
    ) {
        e.preventDefault();

        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = link.href;
        }, 400);
    }
});