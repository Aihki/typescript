const createElectronicDevice = () => {
    const brand = String(prompt("enter the electronic device brand"));
    const model = String(prompt("enter the electronic device model"));
    const electronicDevice = {
        type: "electronic",
        brand,
        model,
    };
    return electronicDevice;
};
const createBook = () => {
    const title = String(prompt("give the title of the book"));
    const author = String(prompt("give author of the book"));
    const book = {
        type: "book",
        title,
        author,
    };
    return book;
};
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === "electronic") {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log("Electronic Device Details:");
displayProductDetails(electronicProduct);
console.log();
console.log("Book Details:");
displayProductDetails(bookProduct);
export {};
