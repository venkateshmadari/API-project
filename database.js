const books =[
    {
        ISBN : "789Book",
        title :"javascript",
        pubDate : "27-06-2023",
        numPages : 200,
        language : "english",
        author : [1,2],
        publications : [1],
        category : ["technology","science","education"]
    }
]

const author =[
    {
        id :1,
        name : "venkatesh",
        books : ["789book", "123book"]
    },
    {
        id :2,
        name : "dhoni",
        books : ["789book"]
    }
]
const publication = [
    {
     id : "143",
     name : "hydpublishers",
     books : ["789book"]   
    }
   
]
module.exports = {
    books,author,publication
};