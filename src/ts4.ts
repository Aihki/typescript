export {};
type ElectronicDevice = {
  type: "electronic";
  brand: string;
  model: string;
};

type Book = {
  type: "book";
  title: string;
  author: string;
};

type Product = ElectronicDevice | Book;

const createElectronicDevice = (): ElectronicDevice => {
  const brand = prompt("enter the electronic device brand");
  const model = prompt("enter the electronic device model");
  const electronicDevice: ElectronicDevice = {
    type: "electronic",
    brand: brand ?? "thats not a brand",
    model: model ?? "thats not a model",
  };
  return electronicDevice;
};
const createBook = (): Book => {
  const title = prompt("give the title of the book");
  const author = prompt("give author of the book");

  const book: Book = {
    type: "book",
    title: title ?? "thats not a book title",
    author: author ?? "thats not an author",
  };

  return book;
};

const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

function displayProductDetails(product: Product) {
  console.log(`Product Type: ${product.type}`);
  if (product.type === "electronic") {
    console.log(`Brand: ${product.brand}`);
    console.log(`Model: ${product.model}`);
  } else {
    console.log(`Title: ${product.title}`);
    console.log(`Author: ${product.author}`);
  }
}

console.log("Electronic Device Details:");
displayProductDetails(electronicProduct);

console.log();

console.log("Book Details:");
displayProductDetails(bookProduct);
