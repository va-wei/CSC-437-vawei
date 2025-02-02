import { toHtmlElement } from './toHtmlElement.mjs';

export function createNavBar() {
    const navBarHTML = `
        <nav class="topNav">
            <h1>Vanessa Wei</h1>
            <div class="navLinks">
                <a href="index.html">Home</a>
                <a href="second.html">Hobbies</a>
            </div>
        </nav>
    `;

    const navbar = toHtmlElement(navBarHTML);
    document.body.prepend(navbar);

    const links = navbar.querySelectorAll("a");
    const currentURL = window.location.pathname;

    // for each <a> tag compare the href of the link to curr URL; if they match (includes) then add active class to link
    links.forEach(link => {
        // extract relative path 
        const linkPath = new URL(link.href).pathname;

        if (currentURL == linkPath) { // if curr URL path matches link's path, add "active" class
            link.classList.add("active");
        }
    });
}

window.addEventListener("load", () => { // Create a function on the fly
    // Code in this function will run once the page is done loading
    createNavBar();
});