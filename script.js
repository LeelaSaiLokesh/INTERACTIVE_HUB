        // INTRO VIDEO FUNCTIONALITY - ADDED AT TOP
        document.addEventListener('DOMContentLoaded', function () {
            const videoIntro = document.getElementById('video-intro');
            const introVideo = document.getElementById('intro-video');
            const introMusic = document.getElementById('intro-music');
            const skipButton = document.getElementById('skip-intro');

            // Start music when video starts playing
            introVideo.addEventListener('play', function () {
                introMusic.currentTime = 0;
                introMusic.volume = 10.5;
                introMusic.play().catch(e => console.log("Audio play failed:", e));
            });

            // Error handling
            introVideo.addEventListener('error', hideIntro);
            introMusic.addEventListener('error', hideIntro);

            // When video ends
            introVideo.addEventListener('ended', hideIntro);

            // Skip button functionality
            skipButton.addEventListener('click', function () {
                introVideo.pause();
                introMusic.pause();
                hideIntro();
            });

            function hideIntro() {
                introMusic.pause();
                videoIntro.style.opacity = '0';
                videoIntro.style.transition = 'opacity 0.5s ease';

                setTimeout(function () {
                    videoIntro.style.display = 'none';
                    // Show all other elements
                    document.querySelectorAll('body > *').forEach(el => {
                        if (el.id !== 'video-intro') {
                            el.style.display = '';
                        }
                    });
                    // Initialize your other components
                    initWebsite();
                }, 500);
            }

            // Safety timeout
            setTimeout(function () {
                if (videoIntro.style.display !== 'none') {
                    hideIntro();
                }
            }, 15000);
        });

        // YOUR EXISTING JAVASCRIPT BELOW - WRAPPED IN FUNCTION
        function initWebsite() {
            // Trading Chart
            const initTradingChart = () => {
                const ctx = document.getElementById('tradingChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                            label: 'Market Trend',
                            data: [65, 59, 80, 81, 56, 55],
                            borderColor: '#2563eb',
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            };

            // AI Chat Interface
            const chatMessages = document.getElementById('chatMessages');
            const userInput = document.getElementById('userInput');
            const sendButton = document.getElementById('sendMessage');

            const addMessage = (message, isUser = false) => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
                messageDiv.style.padding = '0.5rem 1rem';
                messageDiv.style.margin = '0.5rem 0';
                messageDiv.style.borderRadius = '0.5rem';
                messageDiv.style.backgroundColor = isUser ? '#2563eb' : '#e2e8f0';
                messageDiv.style.color = isUser ? 'white' : 'black';
                messageDiv.style.alignSelf = isUser ? 'flex-end' : 'flex-start';
                messageDiv.textContent = message;
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            };

            const handleUserMessage = () => {
                const message = userInput.value.trim();
                if (message) {
                    addMessage(message, true);
                    userInput.value = '';

                    // Simulate AI response
                    setTimeout(() => {
                        addMessage('I understand your message. How can I help you further?');
                    }, 1000);
                }
            };

            sendButton.addEventListener('click', handleUserMessage);
            userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleUserMessage();
            });

            // 3D Animation
            const heroCube = document.querySelector('.hero-cube');
            let rotation = 0;

            const animateCube = () => {
                rotation += 0.5;
                heroCube.style.transform = `rotate3d(1, 1, 1, ${rotation}deg)`;
                requestAnimationFrame(animateCube);
            };

            // Initialize components
            initTradingChart();
            animateCube();

            // Add initial AI message
            addMessage('Hello! How can I assist you today?');

            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Interactive book effects
            document.querySelectorAll('.book').forEach(book => {
                book.addEventListener('mousemove', (e) => {
                    const rect = book.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const rotateY = ((x / rect.width) - 0.5) * 30;
                    const rotateX = ((y / rect.height) - 0.5) * -30;

                    book.querySelector('.book-cover').style.transform =
                        `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
                });

                book.addEventListener('mouseleave', () => {
                    book.querySelector('.book-cover').style.transform = 'rotateY(0) rotateX(0)';
                });
            });
        }