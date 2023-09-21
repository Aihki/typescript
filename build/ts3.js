// TODO: Implement the promptForBook function
const promptForBook = () => {
  // TODO: Prompt user for book details (title, author, publication year)
  const bookTitle = String(prompt("Give a book tittle"));
  const bookAuthor = String(prompt("Give a authors name"));
  const bookPublicationYear = Number(prompt("Give a publication year"));
  // TODO: Create an object of type 'Book' with the entered values
  const book = {
    title: bookTitle,
    author: bookAuthor,
    publicationYear: bookPublicationYear,
  };
  return book;
};
// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();
// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
