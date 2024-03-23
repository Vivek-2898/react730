import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './RandomQuote.css'

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [savedQuotes, setSavedQuotes] = useState([]);

  
  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const { content } = response.data;
      setQuote(content);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };


  const changeBackgroundColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  
  useEffect(() => {
    fetchRandomQuote();
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      fetchRandomQuote();
      changeBackgroundColor();
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  
  const saveQuote = () => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  // Function to delete a quote
  const deleteQuote = (quoteToDelete) => {
    const updatedQuotes = savedQuotes.filter(q => q !== quoteToDelete);
    setSavedQuotes(updatedQuotes);
  };

  return (
    <div class="quote-container" style={{ backgroundColor }}>
      <blockquote class="quote-text">{quote}</blockquote>
      <div class="quote-actions">
        <button onClick={saveQuote}>Save</button>
      </div>
      <div class="saved-quotes">
        <h2>Saved Quotes</h2>
        <ul>
          {savedQuotes.map((savedQuote, index) => (
            <li key={index}>{savedQuote} <button onClick={() => deleteQuote(savedQuote)}>Delete</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RandomQuote;
