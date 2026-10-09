// Komponen NAVBAR
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    
                    <!-- BRAND LOGO -->
                    <a href="index.html" class="group flex items-center gap-2">
                        <span class="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                            ADRI <span class="text-cyan-400 font-extrabold group-hover:text-white transition-colors">WIYANTO</span>
                        </span>
                    </a>

                    <!-- DESKTOP MENU -->
                    <div class="hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 shadow-inner">
                        <a href="index.html" id="nav-index" class="nav-link px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-800/60">HOME</a>
                        <a href="about.html" id="nav-about" class="nav-link px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-800/60">ABOUT</a>
                        <a href="career.html" id="nav-career" class="nav-link px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-800/60">CAREER</a>
                        <a href="organization.html" id="nav-organization" class="nav-link px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-800/60">ORGANIZATION</a>
                    </div>

                    <!-- WHATSAPP BUTTON -->
                    <div class="hidden md:flex items-center">
                        <a href="https://wa.me/6281234567890?text=Halo%20Adri%20Wiyanto,%20saya%20tertarik%20untuk%20berdiskusi" target="_blank" class="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-5 py-2.5 rounded-full shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 text-sm">
                            <i class="fa-brands fa-whatsapp text-lg"></i>
                            <span>Let's Talk</span>
                        </a>
                    </div>

                    <!-- MOBILE MENU BUTTON -->
                    <div class="md:hidden flex items-center">
                        <button id="mobile-menu-btn" class="text-slate-300 hover:text-white focus:outline-none p-2">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>

                </div>
            </div>

            <!-- MOBILE MENU DROPDOWN -->
            <div id="mobile-menu" class="hidden md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2">
                <a href="index.html" id="mobile-nav-index" class="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/60">HOME</a>
                <a href="about.html" id="mobile-nav-about" class="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/60">ABOUT</a>
                <a href="career.html" id="mobile-nav-career" class="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/60">CAREER</a>
                <a href="organization.html" id="mobile-nav-organization" class="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/60">ORGANIZATION</a>
                <a href="https://wa.me/6281234567890?text=Halo%20Adri%20Wiyanto" target="_blank" class="flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium px-4 py-3 rounded-xl text-base mt-2">
                    <i class="fa-brands fa-whatsapp text-lg"></i>
                    <span>Let's Talk via WhatsApp</span>
                </a>
            </div>
        </nav>
        `;

        this.highlightActivePage();
        this.initMobileMenu();
    }

    highlightActivePage() {
        let path = window.location.pathname.split('/').pop();
        if (path === '' || path === 'index.html') path = 'index';
        else path = path.replace('.html', '');

        const activeLink = this.querySelector(`#nav-${path}`);
        const activeMobileLink = this.querySelector(`#mobile-nav-${path}`);

        if (activeLink) {
            activeLink.className = "nav-link px-6 py-2 rounded-full text-sm font-semibold bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300";
        }
        if (activeMobileLink) {
            activeMobileLink.className = "block w-full text-left px-4 py-3 rounded-xl text-base font-medium bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400";
        }
    }

    initMobileMenu() {
        const btn = this.querySelector('#mobile-menu-btn');
        const menu = this.querySelector('#mobile-menu');
        if (btn && menu) {
            btn.addEventListener('click', () => menu.classList.toggle('hidden'));
        }
    }
}

// Komponen FOOTER
class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="border-t border-slate-800/80 bg-slate-950 py-8 relative z-10 mt-auto">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <p class="text-slate-400 text-sm font-medium">
                    © 2026 <span class="text-cyan-400 font-semibold">ADRI WIYANTO</span> • Portofolio
                </p>
            </div>
        </footer>
        `;
    }
}

// Registrasi Tag HTML Custom
customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);