var quoteIndex
var quotes = [
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas Alva Edison"
    //https://www.cs.virginia.edu/~robins/quotes.html
  },
  {
    quote: "The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.",
    source: "James Branch Cabell"
    //https://www.cs.virginia.edu/~robins/quotes.html
  }
  //Need to add 3 more quotes and 2 more parameters
];

function getRandomQuote() {
  quoteIndex = Math.floor( Math.random() * quotes.length);
  return quoteIndex;
};

function printQuote() {
  getRandomQuote();
  var displayQuote = quotes[quoteIndex].quote;
  var displaySource = quotes[quoteIndex].source;
  var message = '<p class="quote">'+[displayQuote]+'</p>';
  message += '<p><span class="source">'+[displaySource]+'</span>';
  document.write(message);
  //Need to figure out how to correctly position the output.
};

printQuote();





//Original code and notes from the project start files follows:
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
