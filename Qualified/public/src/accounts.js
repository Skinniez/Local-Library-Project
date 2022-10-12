const {filterBooks} = require ("./home")



function findAccountById(accounts, id) {
return accounts.find(account => account.id === id); // .find to match account id to the id argument
}

function sortAccountsByLastName(accounts) { //returns the sorted list of accounts by last name alphabetized
return accounts.sort((accountA, accountB) => // pulls account names from the list 
accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 )
}  


function getTotalNumberOfBorrows(account, books) {  // go through all books to see if the given account has check out that book at least once count the results 
const { id } = account
  let result = books.reduce((acc, ele)=>{
ele.borrows.forEach((borrow) =>{
  if (borrow.id === id){
    acc ++
  }
}) 
return acc

},0)
return result
}
//filter through all books to see ALL books including author information checked out
//by a given account object
function getBooksPossessedByAccount(account, books, authors) {  
  let filtered= filterBooks(books, account)           //use account argument to filter just books for that account
  return filtered.map((bookObj)=>{          
    let author = authors.find(author=> author.id === bookObj.authorId)   //finding the author info for each book
    return {...bookObj, author }       //return the current out books and the author info for each book
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
