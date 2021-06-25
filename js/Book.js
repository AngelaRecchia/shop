export default class Book {
    /**
     * 
     * @param {string} title 
     * @param {string} author 
     * @param {number} price 
     * @param {string} cover
     */
    constructor(title, author, price, cover) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.cover = cover;
    }
}

