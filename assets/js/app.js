const endpoint = 'https://striveschool-api.herokuapp.com/books';
        const bookContainer = document.getElementById('book-container');

        function fetchBooks() {
            fetch(endpoint)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Errore nella risposta');
                    }
                    return response.json();
                })
                .then(books => {
                    renderBooks(books);
                })
                .catch(error => {
                    console.error('Errore nel recupero dei libri:', error);
                });
        }

        function renderBooks(books) {
            books.forEach(book => {
                const col = document.createElement('div');
                col.className = 'col-md-3 mb-4';
                col.innerHTML = `
                    <div class="card">
                        <img src="${book.img}" class="card-img-top" alt="Copertina del libro">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">Prezzo: €${book.price}</p>
                            <button class="btn btn-danger btn-sm scarta-btn">Scarta</button>
                            <button class="btn btn-primary btn-sm compra-btn">Compra ora</button>
                        </div>
                    </div>
                `;
                const scartaBtn = col.querySelector('.scarta-btn');
                scartaBtn.addEventListener('click', () => col.remove());
                bookContainer.appendChild(col);
            });
        }

        fetchBooks();