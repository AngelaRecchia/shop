export default class Book {
    /**
     * 
     * @param {string} title 
     * @param {string} author 
     * @param {number} price 
     * @param {string} cover
     */
    constructor(title, author, price, link) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.cover = link
    }
}

