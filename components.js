// KOMPONEN NAVBAR & FOOTER LENGKAP
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.classList.add('sticky', 'top-0', 'z-50', 'block', 'w-full');
        this.innerHTML = `
        <nav class="w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    
                    <!-- BRAND LOGO -->
                    <a href="index.html" class="group flex items-center gap-2">
                        <span class="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                          <span class="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Portofolio</span> <br>
                            ADRI <span class="text-cyan-400 font-extrabold group-hover:text-white transition-colors">WIYANTO</span>
                        </span>
                    </a>

                    <!-- DESKTOP MENU NAVBAR -->
                    <div class="hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 shadow-inner">
                        <a href="index.html" id="nav-index" class="nav-btn px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-800/60">HOME</a>
                        <a href="about.html" id="nav-about" class="nav-btn px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-800/60">ABOUT</a>
                        <a href="career.html" id="nav-career" class="nav-btn px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-800/60">CAREER</a>
                        <a href="organization.html" id="nav-organization" class="nav-btn px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-800/60">ORGANIZATION</a>
                    </div>

                    <!-- WHATSAPP BUTTON -->
                    <div class="hidden md:flex items-center">
                        <a href="https://wa.me/6285714244137?text=Halo%20Adri%20Wiyanto,%20saya%20tertarik%20untuk%20berdiskusi" target="_blank" class="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-5 py-2.5 rounded-full shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 text-sm">
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
                <a href="index.html" id="mobile-nav-index" class="mobile-nav-btn block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/60">HOME</a>
                <a href="about.html" id="mobile-nav-about" class="mobile-nav-btn block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/60">ABOUT</a>
                <a href="career.html" id="mobile-nav-career" class="mobile-nav-btn block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/60">CAREER</a>
                <a href="organization.html" id="mobile-nav-organization" class="mobile-nav-btn block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/60">ORGANIZATION</a>
                <a href="https://wa.me/6285714244137?text=Halo%20Adri%20Wiyanto" target="_blank" class="flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium px-4 py-3 rounded-xl text-base mt-2">
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

        const activeBtn = this.querySelector(`#nav-${path}`);
        const activeMobileBtn = this.querySelector(`#mobile-nav-${path}`);

        if (activeBtn) {
            activeBtn.className = "nav-btn px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25";
        }
        if (activeMobileBtn) {
            activeMobileBtn.className = "mobile-nav-btn block w-full text-left px-4 py-3 rounded-xl text-base font-bold bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400";
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

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="border-t border-slate-800/80 bg-slate-950 py-10 relative z-10 mt-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <!-- TOMBOL SOSIAL MEDIA NAVBAR FOOTER -->
                <div class="flex flex-wrap justify-center items-center gap-4">
                    <a href="https://www.linkedin.com/in/adriwiyanto" target="_blank" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all shadow-sm hover:scale-105 text-sm font-semibold">
                        <i class="fa-brands fa-linkedin text-lg text-cyan-400"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://instagram.com" target="_blank" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-pink-500/50 text-slate-300 hover:text-pink-400 transition-all shadow-sm hover:scale-105 text-sm font-semibold">
                        <i class="fa-brands fa-instagram text-lg text-pink-400"></i>
                        <span>Instagram</span>
                    </a>
                    <a href="https://tiktok.com" target="_blank" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-500 text-slate-300 hover:text-white transition-all shadow-sm hover:scale-105 text-sm font-semibold">
                        <i class="fa-brands fa-tiktok text-lg text-white"></i>
                        <span>TikTok</span>
                    </a>
                    <a href="https://github.com/adriwtrue08" target="_blank" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all shadow-sm hover:scale-105 text-sm font-semibold">
                        <i class="fa-brands fa-github text-lg text-cyan-400"></i>
                        <span>GitHub</span>
                    </a>
                </div>

                <div class="border-t border-slate-800/60 max-w-md mx-auto pt-6">
                    <p class="text-slate-400 text-sm font-medium">
                        <span class="text-cyan-400 font-semibold">ADRI WIYANTO</span> • Portofolio
                    </p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);