import React, { useEffect, useState } from 'react';
import './App.css'; // You can put your CSS styles here

function App() {
  const [quote, setQuote] = useState({ content: '', author: '' });

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }

  return (
    <div className="quote-container">
      <p className="quote-text">"{quote.content}"</p>
      <p className="quote-author">- {quote.author}</p>
      <button className="new-quote-btn" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;



//In this React code:

//We import React and necessary hooks (useState, useEffect).
//We create a functional component called App.
//We use the useState hook to manage the state of the quote data.
// We use the useEffect hook to fetch a random quote when the component mounts.
// The fetchQuote function fetches a random quote from the API and updates the state with the received data.
// Inside the return statement, we use JSX to display the quote and a button to fetch a new quote when clicked.
// Don't forget to replace the CSS styles in the App.css file with the styles from your original CSS file. Also, make sure to import this App component in your main React application file and render it.
