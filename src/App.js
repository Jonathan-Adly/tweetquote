import React, { useState, useEffect } from 'react'

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuotes] = useState([]);
  const [author, setAuthor] = useState([])
  const [twitterLink, setLink] = useState("")

  const newQuote = () => {
    fetch("https://www.quotable.io/random")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuotes(result.content);
          setAuthor(result.author)
          setLink(`https://www.twitter.com/intent/tweet?text=${result.content}%0D%0A%0D%0A${result.author}`)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  useEffect(newQuote, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="px-3" id="quote-box">
        <h1> The Quote </h1>
        <div id="text">

          <p className="lead">{quote} </p>
        </div>
        <div id="author">
          <p> Author: {author} </p>
        </div>
        <button className="btn btn-secondary mx-2" onClick={newQuote} id="new-quote"> New Quote </button>
        <a
          href={twitterLink}
          id="tweet-quote"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Tweet
        </a>
      </div>
    );


  }
}

export default App;
