class customNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul>
                <li class="current">
                   <a href="/">Home</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                    <ul class="dropdown">
                        <li>
                        <a href="https://github.com/aurzenith/A-Simple-Web-Server">Web Server</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/Photography/">Photography</a>
                </li>
                <li>
                    <a href="/readme/">Readme</a>
                </li>
                <li>
                    <a href="https://github.com/aurzenith/">Github</a>
            
            </ul>
        </nav> `
    }
}

customElements.define("custom-navbar", customNavbar)