// Game data
        const games = {
            cyberpunk: {
                title: "Cyberpunk 2077",
                image: "https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
                category: "RPG • Open World",
                rating: 4.0,
                players: "Single Player",
                duration: "80+ hours",
                difficulty: "Medium",
                description: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
                playLink: "https://www.cyberpunk.net"
            },
            fifa: {
                title: "FIFA 23",
                image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                category: "Sports • Simulation",
                rating: 4.5,
                players: "1-4 Players (Online 22)",
                duration: "Unlimited",
                difficulty: "Easy to Hard",
                description: "FIFA 23 brings even more of the action and realism of football to the pitch with HyperMotion2 Technology, enhanced physics, and both men's and women's World Cup tournaments. Experience the most true-to-life football game with over 19,000 players, 700+ teams, 100+ stadiums and 30+ leagues.",
                playLink: "https://www.ea.com/games/fifa/fifa-23"
            },
            zelda: {
                title: "Zelda: Tears of the Kingdom",
                image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                category: "Adventure • Action",
                rating: 5.0,
                players: "Single Player",
                duration: "50+ hours",
                difficulty: "Medium",
                description: "The Legend of Zelda: Tears of the Kingdom is the sequel to the critically acclaimed Breath of the Wild. Journey through the vast landscapes of Hyrule and the mysterious floating islands in the sky. With new abilities and expanded exploration, discover what caused the kingdom to fall into ruin and uncover the truth behind the legendary kingdom.",
                playLink: "https://www.zelda.com/tears-of-the-kingdom/"
            },
            minecraft: {
                title: "Minecraft",
                image: "https://cdn.wallpapersafari.com/8/48/wQlHz1.jpeg",
                category: "Sandbox • Creative",
                rating: 5.0,
                players: "1-8 Players (Online 100)",
                duration: "Infinite",
                difficulty: "Varies",
                description: "Minecraft is a game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep in survival mode, crafting weapons and armor to fend off dangerous mobs.",
                playLink: "https://www.minecraft.net"
            },
            cod: {
                title: "Call of Duty: Modern Warfare II",
                image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                category: "FPS • Action",
                rating: 4.2,
                players: "1-4 Players (Online 150)",
                duration: "8-10 hours (Campaign)",
                difficulty: "Medium to Hard",
                description: "Call of Duty: Modern Warfare II drops players into an unprecedented global conflict featuring the return of the iconic Operators of Task Force 141. Experience state-of-the-art gameplay with advanced AI, new gunsmith system, and a variety of multiplayer modes including the all-new DMZ extraction mode.",
                playLink: "https://www.callofduty.com/modernwarfare2"
            },
            amongus: {
                title: "Among Us",
                image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
                category: "Party • Strategy",
                rating: 4.7,
                players: "4-15 Players",
                duration: "5-15 minutes per game",
                difficulty: "Easy",
                description: "Among Us is a multiplayer game where crewmates work together to complete tasks on a spaceship while impostors try to sabotage their efforts and eliminate them. Use discussion and voting to identify the impostors before it's too late! With customizable game settings and multiple maps, each game is a unique social experience.",
                playLink: "https://www.innersloth.com/games/among-us/"
            }
        };

        // DOM Elements
        const gameCards = document.querySelectorAll('.game-card');
        const gameModal = document.getElementById('gameModal');
        const modalContent = document.getElementById('modalContent');
        const closeModal = document.querySelector('.close-modal');
        const categoryBtns = document.querySelectorAll('.category-btn');

        // Open game modal with details
        function openGameModal(gameId) {
            const game = games[gameId];
            
            modalContent.innerHTML = `
                <div class="game-modal-image">
                    <img src="${game.image}" alt="${game.title}">
                    <div class="game-modal-play">
                        <a href="${game.playLink}" target="_blank" class="game-modal-play-btn">
                            <i class="fas fa-play"></i>
                        </a>
                    </div>
                </div>
                <div class="game-modal-details">
                    <h2>${game.title}</h2>
                    <span class="game-modal-category">${game.category}</span>
                    <div class="game-modal-rating">
                        <div class="stars">
                            ${renderStars(game.rating)}
                        </div>
                        <span>${game.rating}/5</span>
                    </div>
                    <div class="game-modal-stats">
                        <span class="game-modal-stat">${game.players}</span>
                        <span class="game-modal-stat">${game.duration}</span>
                        <span class="game-modal-stat">${game.difficulty}</span>
                    </div>
                    <p class="game-modal-description">${game.description}</p>
                    <div class="game-modal-actions">
                        <a href="${game.playLink}" target="_blank" class="btn btn-primary">
                            <i class="fas fa-play"></i> Play Now
                        </a>
                        <button class="btn btn-outline" id="addToFavorites">
                            <i class="far fa-heart"></i> Add to Favorites
                        </button>
                    </div>
                </div>
            `;
            
            gameModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // Render star ratings
        function renderStars(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            return stars;
        }

        // Close modal
        function closeGameModal() {
            gameModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Event listeners
        gameCards.forEach(card => {
            card.addEventListener('click', function() {
                const gameId = this.getAttribute('data-game');
                openGameModal(gameId);
            });
        });

        closeModal.addEventListener('click', closeGameModal);

        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === gameModal) {
                closeGameModal();
            }
        });

        // Category filter functionality
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.textContent.trim();
                const gameCards = document.querySelectorAll('.game-card');
                
                if (category === 'All') {
                    gameCards.forEach(card => card.style.display = 'block');
                } else {
                    gameCards.forEach(card => {
                        const cardCategory = card.querySelector('.game-badge').textContent.trim();
                        card.style.display = cardCategory === category ? 'block' : 'none';
                    });
                }
            });
        });

        // Search functionality
        const searchInput = document.querySelector('.search-container input');
        const searchBtn = document.querySelector('.search-btn');
        
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase();
            const gameCards = document.querySelectorAll('.game-card');
            
            gameCards.forEach(card => {
                const title = card.querySelector('.game-title').textContent.toLowerCase();
                const description = card.querySelector('.game-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        
        // Allow search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });