const {findId }= require("./home")
const {sliceSort} = require("./home")


function findBookById(books, id){
  return findId(books, id)
}

function findAuthorById(author, id){
  return findId(author, id)
} 

function partitionBooksByBorrowedStatus(books) { 
  const bookOut= books.filter((book) =>{
  return book.borrows[0].returned ===false                            //return book if returned property is false
  })
  const bookIn = books.filter((book) =>{
 return book.borrows[0].returned === true
})
let bookStatus = [bookOut,bookIn]
return bookStatus
}


function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account };
   })
   .slice(0, 10);
 }



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
