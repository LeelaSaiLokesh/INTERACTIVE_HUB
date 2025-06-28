let cartCount = 0;
        const cartCountElement = document.querySelector('.cart-count');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                cartCount++;
                cartCountElement.textContent = cartCount;

                // Animation effect
                this.textContent = 'Added!';
                this.style.backgroundColor = '#10b981';

                setTimeout(() => {
                    this.textContent = 'Add to Cart';
                    this.style.backgroundColor = 'var(--primary-color)';
                }, 1000);
            });
        });

        // Category filter functionality
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                // Remove active class from all buttons
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                const category = this.textContent.trim();
                const productCards = document.querySelectorAll('.product-card');

                if (category === 'All') {
                    productCards.forEach(card => card.style.display = 'block');
                } else {
                    productCards.forEach(card => {
                        const cardCategory = card.querySelector('.product-category').textContent.split('•')[0].trim();
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
            const productCards = document.querySelectorAll('.product-card');

            productCards.forEach(card => {
                const title = card.querySelector('.product-title').textContent.toLowerCase();
                const description = card.querySelector('.product-description').textContent.toLowerCase();

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