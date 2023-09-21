// TODO: Define a type alias named 'Book' with appropriate properties
export {};
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};
// TODO: Implement the promptForBook function
const promptForBook = () => {
  // TODO: Prompt user for book details (title, author, publication year)
  const bookTitle: string | null = prompt("Give a number");
  const bookAuthor: string | null = prompt("Give a book");
  const bookPublicationYear: number | null = Number(
    prompt("Give a publication year")
  );

  // TODO: Create an object of type 'Book' with the entered values
  if (bookTitle != null || bookAuthor != null || bookPublicationYear != null) {
    const book: Book = {
      title: bookTitle ?? "thats invalid tittle",
      author: bookAuthor ?? "that is not a author",
      publicationYear: bookPublicationYear ?? 0,
    };
    return book;
  }
};
// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();
if (bookDetails != null) {
  console.log("Book Details:");
  console.log(`Title: ${bookDetails.title}`);
  console.log(`Author: ${bookDetails.author}`);
  console.log(`Publication Year: ${bookDetails.publicationYear}`);
}
