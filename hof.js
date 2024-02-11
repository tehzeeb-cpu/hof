// #1
let input = "Hld";
function revString(input){
    console.log(input.split('').reverse().join(''));
}
setTimeout(()=>{
    revString(input);
}, 2000);

// #2
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}
function generateRandomNumberWithDelay(delayInSeconds) {
    console.log(`Generating a random number after a delay of ${delayInSeconds} seconds...`);
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        console.log(`${countdown} seconds remaining...`);
        countdown--;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            const randomNumber = generateRandomNumber();
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000);
}

generateRandomNumberWithDelay(3);

// #3
// Object containing items with names, categories, and prices in USD
const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 1499,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 499,
    },
];
const exchangeRate = 80;

function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
    ...item,
    priceINR: convertToINR(item.priceUSD),
}));

console.log(itemsInINR);

// #4
const books = [
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        year: 2010,
    },
    {
        title: "The God of Small Things",
        author: "Arundhati Roy",
        year: 1997,
    },
    {
        title: "A Suitable Boy",
        author: "Vikram Seth",
        year: 1993,
    },
    {
        title: "The White Tiger",
        author: "Aravind Adiga",
        year: 2018,
    },
    {
        title: "Midnight's Children",
        author: "Salman Rushdie",
        year: 1981,
    },
];
function capitalize(year){
    return year.toUpperCase();
}
const filterBook = books.filter((book)=>{
    return book.year >= 2010;
})
var newBooks = filterBook.map((book) => {
    return {...book,
    author: book.author.toUpperCase(),
    }

});
console.log(newBooks);

// #5
const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;
function validURL(url){
    if(urlPattern.test(url)){
        console.log(`${url} is a valid URL.`);
    }
    else{
        console.log(`${url} is not a valid URL.`);
    }
}
let testURL = "htt://pwskills.com";
validURL(testURL);

// #6
const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;
function linkedIn(profile){
    if(linkedinProfileRegex.test(profile)){
        console.log(`${profile} is valid.`);
    }
    else{
        console.log(`${profile} is not valid.`)
    }
}
let linkProfile = "https://www.linkedin.com/in/mithun-s-83a8a3186/";
linkedIn(linkProfile);