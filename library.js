document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const bookModal = document.getElementById('bookModal');
    const closeModals = document.querySelectorAll('.close-modal');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const featuredBooksContainer = document.getElementById('featuredBooks');
    const recentBooksContainer = document.getElementById('recentBooks');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Sample book data
    const books = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
            rating: 4.5,
            pages: 180,
            year: 1925,
            category: "Fiction",
            description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan."
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=400&q=80",
            rating: 4.8,
            pages: 281,
            year: 1960,
            category: "Fiction",
            description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize."
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            cover: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=400&q=80",
            rating: 4.7,
            pages: 328,
            year: 1949,
            category: "Science Fiction",
            description: "Nineteen Eighty-Four is a dystopian social science fiction novel by English novelist George Orwell. It was published in 1949 as Orwell's ninth and final book completed in his lifetime."
        },
        {
            id: 4,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            cover: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?auto=format&fit=crop&w=400&q=80",
            rating: 4.6,
            pages: 310,
            year: 1937,
            category: "Fantasy",
            description: "The Hobbit is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction."
        },
        {
            id: 5,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
            rating: 4.7,
            pages: 279,
            year: 1813,
            category: "Romance",
            description: "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness."
        },
        {
            id: 6,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            cover: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?auto=format&fit=crop&w=400&q=80",
            rating: 4.2,
            pages: 234,
            year: 1951,
            category: "Fiction",
            description: "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945-1946 and as a novel in 1951. It was originally intended for adults but is often read by adolescents for its themes of angst, alienation, and as a critique on superficiality in society."
        },
        {
            id: 7,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=400&q=80",
            rating: 4.9,
            pages: 1178,
            year: 1954,
            category: "Fantasy",
            description: "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work."
        },
        {
            id: 8,
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
            rating: 4.8,
            pages: 223,
            year: 1997,
            category: "Fantasy",
            description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry."
        }
    ];

    // Display books in the UI
    function displayBooks(books, container) {
        container.innerHTML = '';
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.dataset.id = book.id;
            bookCard.innerHTML = `
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title}">
                </div>
                <div class="book-details">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <div class="book-rating">
                        <div class="stars">
                            ${renderStars(book.rating)}
                        </div>
                        <span>${book.rating}</span>
                    </div>
                    <div class="book-meta">
                        <span>${book.pages} pages</span>
                        <span>${book.year}</span>
                    </div>
                </div>
            `;
            container.appendChild(bookCard);
            
            // Add click event to show book details
            bookCard.addEventListener('click', () => showBookDetails(book.id));
        });
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

    // Show book details in modal
    function showBookDetails(bookId) {
        const book = books.find(b => b.id === bookId);
        if (!book) return;
        
        document.getElementById('modalBookCover').src = book.cover;
        document.getElementById('modalBookTitle').textContent = book.title;
        document.getElementById('modalBookAuthor').textContent = `by ${book.author}`;
        document.getElementById('modalBookRating').textContent = `${book.rating}/5`;
        document.getElementById('modalBookPages').textContent = `${book.pages} pages`;
        document.getElementById('modalBookYear').textContent = book.year;
        document.getElementById('modalBookCategory').textContent = book.category;
        document.getElementById('modalBookDescription').textContent = book.description;
        
        openModal(bookModal);
    }

    // Modal functions
    function openModal(modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event Listeners
    loginBtn.addEventListener('click', () => openModal(loginModal));
    signupBtn.addEventListener('click', () => openModal(signupModal));
    
    closeModals.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal(loginModal);
        openModal(signupModal);
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal(signupModal);
        openModal(loginModal);
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Form submissions
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // In a real app, you would validate and send to server
        alert(`Login attempted with email: ${email}`);
        closeModal(loginModal);
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // In a real app, you would validate and send to server
        alert(`Signup attempted for: ${name}, email: ${email}`);
        closeModal(signupModal);
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Initialize the page
    function init() {
        // Display featured books (first 4)
        displayBooks(books.slice(0, 4), featuredBooksContainer);
        
        // Display recent books (last 4)
        displayBooks(books.slice(-4), recentBooksContainer);
        
        // Add click event to category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function() {
                const category = this.dataset.category;
                const filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
                alert(`Showing ${filteredBooks.length} books in ${category} category`);
                // In a real app, you would display these books
            });
        });
    }

    init();
});