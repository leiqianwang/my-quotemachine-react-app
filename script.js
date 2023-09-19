const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const newQuoteBtn = document.querySelector('.new-quote-btn');

// Function to fetch a random quote
async function fetchQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return data;
}

// Function to update the quote on the page
async function updateQuote() {
  const quote = await fetchQuote();
  quoteText.textContent = `"${quote.content}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

// Event listener for the "New Quote" button
newQuoteBtn.addEventListener('click', updateQuote);

// Initial quote load
updateQuote();