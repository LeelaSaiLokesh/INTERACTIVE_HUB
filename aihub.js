// Category filter functionality
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                // Remove active class from all buttons
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                const category = this.textContent.trim();
                const toolCards = document.querySelectorAll('.tool-card');

                if (category === 'All') {
                    toolCards.forEach(card => card.style.display = 'block');
                } else {
                    toolCards.forEach(card => {
                        const cardCategory = card.querySelector('.tool-badge').textContent.trim();
                        card.style.display = cardCategory === category ? 'block' : 'none';
                    });
                }
            });
        });

        // Search functionality
        const searchInput = document.querySelector('.search-container input');
        const searchBtn = document.querySelector('.search-btn');

        searchBtn.addEventListener('click', function () {
            const searchTerm = searchInput.value.toLowerCase();
            const toolCards = document.querySelectorAll('.tool-card');

            toolCards.forEach(card => {
                const title = card.querySelector('.tool-title').textContent.toLowerCase();
                const description = card.querySelector('.tool-description').textContent.toLowerCase();

                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Allow search on Enter key
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });