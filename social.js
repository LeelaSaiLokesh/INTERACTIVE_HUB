 // Simple category filter functionality
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                // Remove active class from all buttons
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                const category = this.textContent.trim();
                const appCards = document.querySelectorAll('.app-card');

                if (category === 'All') {
                    appCards.forEach(card => card.style.display = 'block');
                } else {
                    appCards.forEach(card => {
                        const cardCategory = card.querySelector('.app-badge').textContent.trim();
                        card.style.display = cardCategory === category ? 'block' : 'none';
                    });
                }
            });
        });