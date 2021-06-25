import Book from "./Book.js";
const books = [
    new Book("L'uomo che scambiò sua moglie per un cappello", "Oliver Sacks", 12.00, "https://static.lafeltrinelli.it/static/images-1/xl/122/1710122.jpg"),
    new Book("Il lupo della steppa", "Hermann Hesse", 11.40, "https://static.lafeltrinelli.it/static/frontside/xxl/225/7145225_1663099.jpg"),
    new Book("Il crollo della mente bicamerale e l'origine della coscienza", "Julian Jaynes", 17.10, "https://static.lafeltrinelli.it/static/images-1/xl/314/765314.jpg"),
    new Book("Cent'anni di solitudine", "Gabriel Garcia Marquez", 13.30, "https://static.lafeltrinelli.it/static/images-1/xl/972/7567972.jpg"),
    new Book("Il più grande uomo scimmia del Pleistocene", "Roy Lewis", 10.45, "https://static.lafeltrinelli.it/static/images-1/xl/177/1363177.jpg"),
    new Book("Delitto e castigo", "Fedor Michajlov Dostoevskij", 10.40, "https://static.lafeltrinelli.it/static/images-1/xl/921/3979921.jpg"),
    new Book("Le porte della percezione - Paradiso e inferno", "Aldous Huxley", 11.40, "https://static.lafeltrinelli.it/static/images-1/xl/280/7376280.jpg"),
    new Book("On the road", "Jack Kerouac", 13.77, "https://static.lafeltrinelli.it/static/images-1/xl/413/8505413.jpg"),

];

books.forEach(elem => {
    const {title, author, price, cover} = elem;
    console.log(cover);
    document.getElementById("container").innerHTML +=
    `
    <div class="box">

        <img src="${cover}" class="cover">

        <div class="infos">
            <div class="title">${title}</div>
            <div class="author">${author}</div>
            <div class="price">${price.toFixed(2)}€</div>
        </div>
    

    </div>
    `
})