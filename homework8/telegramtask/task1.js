const books = [
    { title: "JS для начинающих", price: 500, genre: "programming" },
    { title: "CSS в деталях", price: 300, genre: "design" },
    { title: "React быстро", price: 800, genre: "programming" },
];

const progBooks = books.filter(book => book.genre === "programming");

console.log(progBooks);

const booksName = books.map(book => book.title)

console.log(booksName)

const sumPrice = books.reduce((prevBook, currentBook) => {
    
    return { price: prevBook.price + currentBook.price}

})
console.log(sumPrice)