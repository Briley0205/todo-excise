const quotes = [{
    quote: "너는 내 앞에 다른 신들을 두지 말라.",
    author: "출애굽기 20:3",
},
{
    quote: "너는 너를 위하여 어떤 새긴 형상도 만들지 말고 그것들에게 절하지 말고 그것들을 섬기지 말라. ",
    author: "출애굽기 20:4,5",
},
{
    quote: "너는 {주} 네 [하나님]의 이름을 헛되이 취하지 말라. ",
    author: "출애굽기 20:7",
},
{
    quote: "안식일을 기억하여 거룩히 지키라.",
    author: "출애굽기 20:8",
},
{
    quote: "네 아버지와 어머니를 공경하라. ",
    author: "출애굽기 20:12",
},
{
    quote: "너는 살인하지 말라.",
    author: "출애굽기 20:13",
},
{
    quote: "너는 간음하지 말라.",
    author: "출애굽기 20:14",
},
{
    quote: "너는 도둑질하지 말라.",
    author: "출애굽기 20:15",
},
{
    quote: "너는 네 이웃을 대적하여 거짓 증언하지 말라.",
    author: "출애굽기 20:16",
},
{
    quote: "너는 네 이웃의 집을 탐내지 말라.",
    author: "출애굽기 20:17",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random () *quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


