function getTotalBooksCount(books) {
  return arrayCount(books); //using arrayCount helper function because we are just checking length
}

function getTotalAccountsCount(accounts) {
  return arrayCount(accounts); //using arrayCount helper function because we are just checking length
}

function getBooksBorrowedCount(books) {
  // filter the books list by borrowed and only return the books that returned : false
  return books.reduce((borrowCount, { borrows }) => {
    const currentOut = borrows[0]; // assign a varriable for current borrow count for books list
    if (!currentOut.returned) borrowCount++; // if statement to test is borrows property is true
    return borrowCount;
  }, 0);
}
function getMostCommonGenres(books) {
// {genre:" science", count:0}
// loop through books list and create an array of objects for each genre
// loop through the books array and count the number of times each genre occurs
// add a key for count to the genres array and +1 for each occurence
let genreCount = {}
books.forEach((book) => {
  let currentGenre = book.genre
  if (currentGenre in genreCount){
    genreCount[currentGenre] += 1
  }else{
    genreCount[currentGenre] = 1
  }
  return genreCount
})
let popularGenre = [{genreCount}]
return sliceSort(popularGenre)
console.log(popularGenre)
console.log("********************************")

} //for each / if

function getMostPopularBooks(books) {
  const borrows = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  return sliceSort(borrows); //using helper function to sort and slice the return
}

function getMostPopularAuthors(books, authors) {
  let result = []; //declare a place holder for the most popular authors
  authors.forEach((author) => {
    //forEach to loop through author array
    let popAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    }; //create an author object to compare against the books borrows history
    books.forEach((book) => {
      //use foreach to loop and match author to book
      if (book.authorId === author.id) {
        //compare author to book
        popAuthor.count += book.borrows.length; //increment the count
      }
    });
    result.push(popAuthor); //push currnt popAuthor to the result array
  });
  return sliceSort(result); //return the helper function with result arrgument
}

// helper functions to streamline

function arrayCount(item) {
  // helper function to count the length of a given input array
  return item.length;
}

function sliceSort(arr, slicer = 5) {
  // helper function to sort a given array and slice to the top 5 results
  const newArray = [...arr];
  return newArray
    .sort(({ count: count1 }, { count: count2 }) => count2 - count1)
    .slice(0, slicer);
}
//helper function to find element id
function findId(element, id) {
  return element.find((element) => element.id === id);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
  findId,
  sliceSort,
  arrayCount,
};
