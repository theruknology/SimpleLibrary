// getting form info
const errorField = document.querySelector('.error');
const bookInput = document.querySelector('#bookIn');
const authorInput = document.querySelector('#authorIn');
const pageInput = document.querySelector('#pageIn');

const addBtn = document.querySelector('.add-button');
const bookCase = document.querySelector('.books-container');

// Book constructor
var ider = 0;
let myLibrary = [];
function Book(name, author, page, read) {

    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
    this.id = 'book'+ider;

    ider++;
    console.log(this.id);
    console.log(this.name + ' was created!');

    bookCase.innerHTML += `<div class="book-card" id="${this.id}">
        <h2> ${this.name} </h2>
        <p>By ${this.author}</p>
        <p>${this.page}</p>
        <p>${this.read}</p>
        <button class="remove-button" id="rb-${this.id}">Remove button</button>
    </div>`
   
}

Book.prototype.elementRemover = function () {
    listenAdder(this.id);
    // document.querySelector('#rb-'+this.id).addEventListener('click', () => {
    //     console.log('remov');
    //     document.querySelector('#'+this.id).remove();
    // })
}

function listenAdder(ele) {
    console.log('listener on '+ele);
    document.querySelector('#rb-'+ele).addEventListener('click', () => {
        document.querySelector('#rb-'+ele).style.backgroundColor = 'hotpink';
        console.log('clicked');
        document.querySelector('#'+ele).remove();
    })
}

Book.prototype.readit = function() {
    this.read = 'Read';
}

Book.prototype.discardit = function() {

    var discardBook = document.querySelector('#'+this.id);
    discardBook.remove();

}



//book objectification done!

//form setting up 
function errorMessage(str) {
    errorField.innerHTML = str;
}

errorField.style.display = 'none';

errorMessage('Error here');

addBtn.addEventListener('click', () => {
    console.log(bookInput.value);
    console.log(authorInput.value);
    console.log(pageInput.value == '');

    if (bookInput.value == '' || authorInput.value == '' || pageInput.value == '') {
        errorMessage('Please enter all details');
        errorField.style.display = 'block';

    } else {

        myLibrary[ider] = new Book(bookInput.value, authorInput.value, pageInput.value, 'Read');
        errorField.style.display = 'none';

        bookInput.value = '';
        authorInput.value = '';
        pageInput.value = '';

        console.log(myLibrary);
       
        listenAdder(myLibrary[myLibrary.length-1].id);

    }
});

