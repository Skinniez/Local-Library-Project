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

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
