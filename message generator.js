


var quotes = [" you are welcome","work on yourself better than you do on your job","take advice but not order"]; 

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
