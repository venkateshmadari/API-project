const express = require("express");
const database = require("./database");
const { get } = require("http");
const project = express();


/*
--------to get all books--------
route         /
decription    get all the books
access       public
parameter     none
methods       get
*/
project.get("/", (req, res) => {
    return res.json({ books: database.books });
})
// it is used to check that all are connected well or not. It shows all the details of the books array


/*     
----------Based on specific book----------
route         /
decription    get a specific books
access       public
parameter     ISBN
methods       get
*/

project.get("/is/:ISBN", (req, res) => {
    const getSpecificBook = database.books.filter((book) =>
        book.ISBN === req.params.ISBN
    );

    if (getSpecificBook.length === 0) {
        return res.json({ error: `No book found for the ISBN of ${req.params.ISBN}` });
    }
    else {

        return res.json({ book: getSpecificBook })
    }
})


/*     

route         /c
decription    get a specific books
access       public
parameter     cateogry
methods       get
*/
project.get("/c/:category", (req, res) => {
    const getSpecificBook = database.books.filter((book) => book.category.includes(req.params.category));
    if (getSpecificBook.length === 0) {
        return res.json({ error: `no book found for the category of ${req.params.category}` })
    }
    return res.json({ book: getSpecificBook });
})

// language
/*     

route         /lan
decription    get a  books by language
access       public
parameter     cateogry
methods       get
*/
project.get("/lan/:language", (req, res) => {
    const getBookBylanguage = database.books.filter((book) => book.language === req.params.language);
    if (getBookBylanguage.length === 0) {
        return res.json({ error: `no book found for the language of ${req.params.language}` })
    }
    return res.json({ book: getBookBylanguage });
})

/*     AUTHOR
route         /author
decription    get all author
access       public
parameter     author
methods       get
*/

project.get("/author", (req, res) => {
    return res.json({author: database.author})
})

/*    SPECIFIC AUTHOR
route         /author
decription    get specific author by name
access       public
parameter     name
methods       get
*/

project.get("/author/:name", (req,res) =>{
    const getSpecificAuthor = database.author.filter((book)=> book.name === req.params.name);
    if(getSpecificAuthor.length ===0){
        return res.json({error: `no book found on the author name of ${req.params.name} `})
    }
    else {
        return res.json({author:  getSpecificAuthor})
    }
});


/*    SPECIFIC AUTHOR
route         /author/name
decription    get specific author by bookname
access       public
parameter     isbn
methods       get
*/

project.get("/author/books/:isbn", (req,res) => {
    const getSpecificBookByAuthor  = database.author.filter((author)=> author.books.includes(req.params.isbn))
    if (getSpecificBookByAuthor  ===0 ){
        return res.json({error:  `no author found for book of ${req.params.isbn}`})
    }
    else{
        return res.json({authors: getSpecificBookByAuthor})
    }
})

/*    PUBLICATIONS
route         /publications
decription    get  all pulications
access       public
parameter     none
methods       get
*/

project.get("/publication", (req,res)=>{
    res.json({publications: database.publication})
})


/*    PUBLICATIONS
route         /publications
decription     get a specific publications
access       public
parameter     name
methods       get
*/

project.get("/publication/:name", (req,res)=>{
    const getPublicationByName = database.publication.filter((publication)=> publication.name ===  req.params.name )

    if (getPublicationByName === 0) {
        return res.json({error:    `no publication found on ${req.params.name}`}) 
    }
    else {
        return res.json({publications: getPublicationByName})
    }
})

/*    PUBLICATIONS
route         /publications/name
decription     get a list of publications based on books
access       public
parameter     isbn
methods       get
*/

project.get("/publication/name/:isbn", (req,res) =>{
    const getPublicationByBook = database.publication.filter((publication)=> publication.books.includes(req.params.isbn))
    if(getPublicationByBook === 0) {
        return res.json({error: `no publication found based on ${req.params.isbn}`})
    }
    else{
        return res.json({publications: getPublicationByBook})
    }
})






project.listen(3100, () => {
    console.log("The server is running successfully ");
});



//npm  i nodemon   --> nodemon is something that update the server automatically so we dont need to press the crtl+c to stop and again run the server.
// npx nodemon .\index.js  