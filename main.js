// main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        const isHidden = mobileMenu.classList.contains('hidden');
        // Alternar ícone (list -> x)
        mobileMenuBtn.innerHTML = isHidden 
            ? '<i class="ph ph-list"></i>' 
            : '<i class="ph ph-x"></i>';
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar num link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // --- Form Submission Mock ---
    const leadForm = document.getElementById('lead-form');
    const formSuccess = document.getElementById('form-success');
    const submitBtn = leadForm.querySelector('button[type="submit"]');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita reload

            // Adiciona loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="ph ph-spinner animate-spin"></i> Processando...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

            // Simula delay de requisição
            setTimeout(() => {
                // Remove loading
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                
                // Limpa formulário
                leadForm.reset();

                // Mostra mensagem de sucesso
                formSuccess.classList.remove('hidden');
                
                // Esconde após 5s
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 5000);
                
            }, 1000);
        });
    }

    // --- Scroll Styling on Header ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('shadow-md');
            header.classList.remove('shadow-sm');
        } else {
            header.classList.add('shadow-sm');
            header.classList.remove('shadow-md');
        }
    });

});