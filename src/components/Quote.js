import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMathQuote = async (attempt = 1, maxAttempts = 10) => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': '9M8eqyVUZz6NLV199saPcA==1qBeSX9NEC8ScVZ1',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch quote from API Ninja');
        }

        const json = await response.json();
        const fetchedQuote = json[0];

        if (fetchedQuote.category.toLowerCase() === 'mathematics') {
          setQuote(fetchedQuote);
          setError(null);
          setLoading(false);
        } else if (attempt < maxAttempts) {
          fetchMathQuote(attempt + 1); // Recursive retry
        } else {
          setError('No mathematics quote found after several attempts.');
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMathQuote();
  }, []);

  if (loading) return <div className="quote">Loading a quote...</div>;
  if (error) {
    return (
      <div className="quote">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quote">
      <p>{quote.quote}</p>
      <p>
        -
        {quote.author}
      </p>
    </div>
  );
};

export default Quote;
