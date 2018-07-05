//This is the array that hold the quotes to be used with the getRandomQuote function
var quotes = [
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas Alva Edison",
    tags: ["Profund"]
    //https://www.cs.virginia.edu/~robins/quotes.html
  },
  {
    quote: "The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.",
    source: "James Branch Cabell",
    tags: ["Profound", "Philosophy"]
    //https://www.cs.virginia.edu/~robins/quotes.html
  },
  {
    quote: "This is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.",
    source: "Winston Churchill",
    year: "1992",
    tags: ["Profund", "WWII"]
    //http://www.historyinanhour.com/2011/11/22/famous-quotes-second-world-war/
  },
  {
    quote: "You're dealing with a lot of silly people in the marketplace; it's like a great big casino and everyone else is boozing. If you can stick with Pepsi, you should be O.K.",
    source: "Warren Buffett",
    citation: "Interview in Forbes",
    year: "1974",
    tags: ["Funny","Investing"]
    //https://www.thestreet.com/story/13207512/1/the-15-greatest-warren-buffett-quotes-of-all-time.html
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    source: "Harold Abelson",
    citation: "Structure and Interpretation of Computer Programs",
    year: "1984",
    tags: ["Coding"]
    //https://www.goodreads.com/quotes/tag/programming
  }
];

//This function returns a random quote from the quotes array
function getRandomQuote() {
  var quoteIndex = Math.floor( Math.random() * quotes.length);
  var quoteReturn = quotes[quoteIndex];
  return quoteReturn;

}

//This funciton prints the random quote to the page with the specified CSS styles
function printQuote() {
  getRandomQuote();
  var citationPicked = getRandomQuote();
  var message = '<p class="quote">'+citationPicked.quote+'</p>';

  message += '<p class="source">'+citationPicked.source;
  if (citationPicked.citation) {
    message += "<span class = 'citation'>" + citationPicked.citation + "</span>";
  }
  if (citationPicked.year) {
    message += "<span class = 'year'>" + citationPicked.year + "</span>";
  }
  //Code to display tags with each quote
  if (citationPicked.tags) {
    message += "<p>Tags: " + citationPicked.tags + "</p>";
  }

  message += '</p>';
  document.getElementById('quote-box').innerHTML = message;
  randomBackgroundColor ();
}

//This function produces a random background color
function randomBackgroundColor () {
  var red = Math.floor(Math.random() * 256 );
  var green = Math.floor(Math.random() * 256 );
  var blue = Math.floor(Math.random() * 256 );
  document.body.style.backgroundColor = 'rgb(' + red +', ' + green + ', ' + blue +')';
}

printQuote();
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//This causes the quote to change automatically after 30 seconds
setInterval(printQuote, 30000);
