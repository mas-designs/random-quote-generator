//https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json

const colors = ['#2a4d69','#4b86b4','#adcbe3','#e7eff6','#63ace5','#6e7f80','#536872','#708090','#536878','#36454f','#d2d4dc','#afafaf','#f8f8fa','#e5e6eb','#c0c2ce'];
const quoteUrl='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let quoteJSON;
let newQuoteButtton = document.querySelector('#new-quote');

fetch(quoteUrl).then(function(response){
	return response.json();
}).then(function(quoteJson){
	quoteJSON = quoteJson;
	hideLoading();
	drawNewQuote();
	showQuotebox();
});
newQuoteButtton.addEventListener('click',function(){
	drawNewQuote();
});


function hideLoading(){
	let loadingBox = document.querySelector('#loading');
	loadingBox.classList.add('hidden');
}
function showQuotebox(){
	let quoteBox = document.querySelector('#qoute-box');
	quoteBox.classList.remove('hidden');
}


function drawNewQuote(){
	let randomColorIndex = Math.floor(Math.random() * 14);
	let quote = document.querySelector('#text');
	let author = document.querySelector('#author');
	let randomQuoteIndex = Math.floor(Math.random()*quoteJSON.quotes.length-1);
	let newQuote = quoteJSON.quotes[randomQuoteIndex];
	document.querySelector('body').style.backgroundColor=colors[randomColorIndex];
	quote.innerHTML= newQuote.quote;
	author.innerHTML = newQuote.author;
}


