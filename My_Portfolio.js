
        // Create wave effect for "Frontend Developer" text
        function createWaveEffect() {
            const waveText = document.getElementById('wave-text');
            const text = waveText.textContent;
            waveText.innerHTML = '';
            
            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i] === ' ' ? '\u00A0' : text[i]; // Use non-breaking space for spaces
                waveText.appendChild(span);
            }
        }

        // Initialize wave effect when page loads
        document.addEventListener('DOMContentLoaded', createWaveEffect);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 255, 136, 0.1)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.9)';
                header.style.boxShadow = 'none';
            }
        });

        // Add interactive hover effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });