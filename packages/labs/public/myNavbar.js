import { attachShadow } from "./utils.mjs";

const TEMPLATE = document.createElement("template");
TEMPLATE.innerHTML = `
    <style>
        .topNav {
            display: flex;
            flex-direction: row; 
            background-color: var(--color-primary);
        }

        .navLinks {
            display: none;
            flex-direction: column; 
            order: 2
            font-size: 1.2em;
            font-family: var(--font-heading);
            gap: var(--spacing-medium);
            margin: 0 var(--spacing-medium) var(--spacing-medium) var(--spacing-medium);
            flex-basis: 0;
            align-self: flex-start;
        }

        a { 
            font-size: 1.2em;
            color: var(--color-accent-bold);
            text-decoration: none;
            width: fit-content;
        }

        a.active {
            border-bottom: 3px solid var(--color-accent-bold);
        }

        a:hover {
            color: var(--color-link-hover);
        }

        h1 {
            flex: 1;
            font-family: var(--font-heading);
            font-size: 2em;
            color: var(--color-text-primary);
            margin: var(--spacing-small);
        }

        label {
            align-self: center;
            margin-right: var(--spacing-small);
            justify-self: stretch;
            text-wrap: nowrap;
        }
        
        button {
            display: flex;
            margin-left: auto;
            width: fit-content;
            height: fit-content;
            align-self: center;
            margin-right: var(--spacing-medium);
        }

        .button.active-btn {
            grid-row: 1; 
            grid-column: 2; 
        }

        .topNav.active-nav {
            display: grid; 
            grid-template-columns: 3fr 0.4fr auto;
        }

        @media only screen and (min-width: 800px){
            .topNav {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
            }
            
            .navLinks {
                display: flex;
                flex-direction: row;
                font-size: 1.2em;
                font-family: var(--font-heading);
                gap: var(--spacing-medium);
                align-self: end;
            }

            h1 {
                flex: 0; 
                flex-basis: auto;  
                margin-bottom: var(--spacing-small);
            }

            button {
                display: none; 
            }

            label {
                order: 3;
                margin-left: auto;
            }
        }
    </style>

    <nav class="topNav">
        <h1>Vanessa Wei</h1>
        <label>
            <input type="checkbox" autocomplete="off" />
            Dark mode
        </label>
        <button>Menu</button>
        <div class="navLinks">
            <a href="index.html">Home</a>
            <a href="second.html">Hobbies</a>
        </div>
    </nav>
`;

class myNavbar extends HTMLElement {
    connectedCallback() {
        const shadowRoot = attachShadow(this, TEMPLATE);
        const currentPath = window.location.pathname; // get the current path
        const links = shadowRoot.querySelector(".navLinks");
        const btn = shadowRoot.querySelector("button");
        const topNav = shadowRoot.querySelector(".topNav");
        const checkbox = shadowRoot.querySelector("input[type='checkbox']");

        const body = document.body;

        // to get current active page
        shadowRoot.querySelectorAll("a").forEach(link => {
            if (currentPath.endsWith(link.getAttribute("href"))) {
                link.classList.add("active");
            }
        });

        // toggle visibility of navlinks
        btn.addEventListener("click", () => {
            const isHidden = window.getComputedStyle(links).display === "none";

            if (isHidden) {
                links.style.display = "flex"; // Show links
                btn.classList.add("active-btn"); // Add active button styling
                topNav.classList.add("active-nav"); // Ensure correct layout
            } else {
                links.style.display = "none"; // Hide links
                btn.classList.remove("active-btn"); // Remove active button styling
                topNav.classList.remove("active-nav"); // Reset layout
            }
        });

        // check if the user clicked inside the navbar
        document.addEventListener("click", (event) => {
            const inNavBar = this.contains(event.target);

            if (!inNavBar && links.style.display === "flex") {
                links.style.display = "none"; // Hide links
                btn.classList.remove("active-btn"); // Remove active button styling
                topNav.classList.remove("active-nav"); // Reset layout
            }
        })

        // load dark mode state frm local storage
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            checkbox.checked = true;
        }

        checkbox.addEventListener("change", () => {
            console.log("Dark mode toggled:", checkbox.checked);
            if (checkbox.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "enabled")
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "disabled");
            }
        })
    }
}

customElements.define("my-navbar", myNavbar);

