const container = document.querySelector(".card-container");
const newFormBtn = document.querySelector(".newForm");
const newBookBtn = document.querySelector(".NewBook");
const BookTitle = document.querySelector(".Title");
const BookAuthor = document.querySelector(".Author");
const BookPages = document.querySelector(".Pages");
const form = document.querySelector(".form");
let deletebtn;
const myLibrary = [];
let counter = 0;

function resetForm(){
    BookTitle.value = "";
    BookTitle.placeholder = "Title";
    BookAuthor.value = "";
    BookAuthor.placeholder = "Author";
    BookPages.value = "";
    BookPages.placeholder = "Number Of Pages";
};


function makeCards(curr){
    const card = document.createElement("div");
    card.id = counter;

        card.classList.add("book")
        container.appendChild(card);
        const title = document.createElement("h3");
        title.classList.add("title");
        title.innerHTML=curr.title;
        card.appendChild(title);
        const author = document.createElement("h3");
        author.classList.add("author");
        author.innerHTML = curr.author;
        card.appendChild(author);
        const pages = document.createElement("h3");
        pages.classList.add("pages");
        pages.innerHTML = `${curr.pages} pages`;
        card.appendChild(pages);
        deletebtn = document.createElement("button");
        deletebtn.innerHTML = "delete";
        card.appendChild(deletebtn);
        counter = counter + 1;
        deletebtn.addEventListener("click", function(){
            card.remove(); 
            counter = counter-1;
            myLibrary.splice(counter)    
        })
}


function getIndex(){
    let index = myLibrary.length-1;
   makeCards(myLibrary[index]);
};

newFormBtn.addEventListener("click", function(){
    form.classList.add("flexDisplay");
   
})

newBookBtn.addEventListener("click", function(){
    inputField();
    let newBook = new book(BookTitle.value,BookAuthor.value,BookPages.value, "no");
    myLibrary.push(newBook);
    getIndex();
    form.classList.remove("flexDisplay");
    resetForm();
    console.log(myLibrary);

})


function inputField (){
    BookTitle.innerHTML = BookTitle.value;
    BookAuthor.innerHTML = BookAuthor.value;
    BookPages.innerHTML = BookPages.value;
    return
}










// createBook()






function book (title, author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function(){
        return(`${this.title} by ${this.author} has ${this.pages} pages, ${this.read}`)
    }
}


function takeEntries (){
    const title = prompt("Title of Book");
    const author = prompt("who is the Author");
    const pages = prompt("how many pages does the book have");
    const read = prompt("Have you read the book yet");
   const newBook = new book(title,author,pages,read);
   myLibrary.push(newBook);
}











