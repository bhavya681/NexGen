import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RamayanQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://ramayan-quotes.p.rapidapi.com/users', {
        headers: {
          'x-rapidapi-key': 'a53533056cmsha74c4001eb49250p173993jsn9025d4b767c8',
          'x-rapidapi-host': 'ramayan-quotes.p.rapidapi.com',
        },
      });
      setQuotes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading quotes...</div>;

  return (
    <div className="ramayan-quotes p-4 bg-yellow-500 text-gray-800 rounded-lg shadow-lg lg:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Ramayan Quotes</h2>
      <ul className="space-y-4">
        {quotes.map((quote, index) => (
          <li key={index} className="bg-yellow-300 p-3 rounded-lg shadow">
            <p className="text-lg">{quote.text}</p>
            <p className="text-sm text-right">- {quote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RamayanQuotes;
