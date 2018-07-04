var quoteIndex
//This is the array that hold the quotes to be used with the getRandomQuote function
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

//This function returns a random quote from the quotes array
function getRandomQuote() {
  quoteIndex = Math.floor( Math.random() * quotes.length);
  return quoteIndex;
};

//This funciton prints the random quote to the page with the included CSS styles
function printQuote() {
  getRandomQuote();
  var displayQuote = quotes[quoteIndex].quote;
  var displaySource = quotes[quoteIndex].source;
  var message = '<p class="quote">'+[displayQuote]+'</p>';
  message += '<p><span class="source">'+[displaySource]+'</span>';
  document.write(message);

  //Need to figure out how to correctly position the output.
};

//This function produces a random background color
function randomBackgroundColor () {
  var red = Math.floor(Math.random() * 256 );
  var green = Math.floor(Math.random() * 256 );
  var blue = Math.floor(Math.random() * 256 );
  document.body.style.backgroundColor = 'rgb(' + red +', ' + green + ', ' + blue +')';
}

printQuote();

randomBackgroundColor ();

  document.getElementById('loadQuote').addEventListener("click", printQuote, false);



//Exceeds expectations requirement: quotes change automatically after 20 seconds
setInterval("window.location.reload()", 20000);

//Original code and notes from the project start files follows:
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
