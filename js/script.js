import Book from "./Book.js";
const container = new Vue({
    el: "#container_big",
    data: {
        books: [
            new Book("L'uomo che scambiò sua moglie per un cappello", "Oliver Sacks", 12.00, "https://images-na.ssl-images-amazon.com/images/I/71TOwJ96jUL.jpg"),
            new Book("Il lupo della steppa", "Hermann Hesse", 11.40, "https://static.lafeltrinelli.it/static/frontside/xxl/225/7145225_1663099.jpg"),
            new Book("Il crollo della mente bicamerale e l'origine della coscienza", "Julian Jaynes", 17.10, "https://images-na.ssl-images-amazon.com/images/I/71y3DJL+aUL.jpg"),
            new Book("Cent'anni di solitudine", "Gabriel Garcia Marquez", 13.30, "https://static.lafeltrinelli.it/static/images-1/xl/972/7567972.jpg"),
            new Book("Il più grande uomo scimmia del Pleistocene", "Roy Lewis", 10.45, "https://images-na.ssl-images-amazon.com/images/I/71KLiwbof0L.jpg"),
            new Book("Delitto e castigo", "Fedor Michajlov Dostoevskij", 10.40, "https://static.lafeltrinelli.it/static/images-1/xl/921/3979921.jpg"),
            new Book("Le porte della percezione - Paradiso e inferno", "Aldous Huxley", 11.40, "https://static.lafeltrinelli.it/static/images-1/xl/280/7376280.jpg"),
            new Book("On the road", "Jack Kerouac", 13.77, "https://static.lafeltrinelli.it/static/images-1/xl/413/8505413.jpg"),
            new Book("Cecità", "Jose Saramago", 9.50, "https://static.lafeltrinelli.it/static/frontside/xxl/821/3958821_253220.jpg"),
            new Book("Homo deus. Breve storia del futuro", "Yuval Noah Harari", 15.20, "https://static.lafeltrinelli.it/static/frontside/xxl/866/8863866_3371369.jpg"),
            new Book("Godel, Escher, Bach: un'eterna ghirlanda brillante", "Douglas R. Hofstadter", 21.85, "https://images-na.ssl-images-amazon.com/images/I/719miFDNP-L.jpg"),
            new Book("Sei pezzi facili", "Richard Phillips Feynman", 12.35, "https://media.adelphi.it/spool/078d1d1d1f56ad7dae1d13c1edb6c60e_w_h_mw600_mh900_cs_cx_cy.jpg"),
        ],
        wishlist: [],
        cart: [],
        totale: 0
    },
    methods: {
        addCart(index) {
            this.cart.push(this.books[index]);
            this.totale += this.books[index].price;
        },
        removeCart(book) {
            const elem = this.cart.indexOf(book);
            this.cart.splice(elem, 1);
            this.totale -= book.price;
        },
        addWishlist(index) {
            this.wishlist.push(this.books[index]);
        },
        removeWishlist(book) {
            const elem = this.wishlist.indexOf(book);
            this.wishlist.splice(elem, 1);
        }
    }
});
