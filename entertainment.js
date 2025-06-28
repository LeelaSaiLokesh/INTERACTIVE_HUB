// Initialize floating elements
function initFloatingElements() {
    const floatItems = document.querySelectorAll('.float-item');
    floatItems.forEach((item, index) => {
        const speed = parseFloat(item.getAttribute('data-speed')) || 2;
        item.style.left = `${Math.random() * 80 + 10}%`;
        item.style.top = `${Math.random() * 80 + 10}%`;
        item.style.animationDuration = `${speed * 3}s`;
        item.style.animationDelay = `${index * 0.5}s`;
    });
}

// Movie card 3D effect
function initMovieCards() {
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            card.style.transition = 'transform 0.1s';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s';
        });
    });
}

// Game card flip effect
function initGameCards() {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const cover = card.querySelector('.game-cover');
            cover.style.transform = 'rotateY(180deg)';
        });

        card.addEventListener('mouseleave', () => {
            const cover = card.querySelector('.game-cover');
            cover.style.transform = 'rotateY(0)';
        });
    });
}

// Music player functionality
function initMusicPlayer() {
    const playButton = document.querySelector('.player-controls .play');
    const playlistItems = document.querySelectorAll('.playlist-item');
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playButton.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
        
        // Add animation to album art when playing
        const albumArt = document.querySelector('.album-art img');
        albumArt.style.animation = isPlaying ? 'rotate 20s linear infinite' : 'none';
    });

    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            playlistItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

// Sports card parallax effect
function initSportsCards() {
    const sportCards = document.querySelectorAll('.sport-card');
    
    sportCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 20;
            const moveY = (y - centerY) / 20;
            
            card.style.transform = `scale(1.05) translate3d(${moveX}px, ${moveY}px, 20px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) translate3d(0, 0, 0)';
        });
    });
}

// Channel card hover effect
function initChannelCards() {
    const channelCards = document.querySelectorAll('.channel-card');
    
    channelCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            const logo = card.querySelector('.channel-logo');
            logo.style.transform = 'scale(1.1) rotate(5deg)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            const logo = card.querySelector('.channel-logo');
            logo.style.transform = 'scale(1) rotate(0)';
        });
    });
}

// Smooth scrolling for navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Parallax scrolling for hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            // Add search animation
            searchButton.classList.add('searching');
            setTimeout(() => {
                searchButton.classList.remove('searching');
                // Here you would typically handle the search
                console.log('Searching for:', query);
            }, 1000);
        }
    });

    // Handle enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// Add some CSS animations
function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .searching {
            animation: searching 1s infinite;
        }

        @keyframes searching {
            0% { transform: scale(1); }
            50% { transform: scale(0.8); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addStyles();
    initFloatingElements();
    initMovieCards();
    initGameCards();
    initMusicPlayer();
    initSportsCards();
    initChannelCards();
    initSmoothScroll();
    initParallaxEffect();
    initSearch();

    // Add loading animation
    document.body.classList.add('loaded');
});

// Handle resize events for responsive behavior
window.addEventListener('resize', () => {
    initFloatingElements();
});

// Add some ambient particle background
function createParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.2
        };
    }

    function initParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });

    resize();
    initParticles();
    animate();
}

// Initialize particle background
createParticleBackground();