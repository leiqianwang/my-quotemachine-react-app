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
