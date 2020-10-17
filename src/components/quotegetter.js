import React, {useState, useEffect} from 'react';
import findQuote from 'find-quote';
import "everyday-fun";
import everydayFun from 'everyday-fun';

function Quotegetter() {
    const [clicked, setClicked] = useState("");
    const [quote, setQuote] = useState("");
    const [quoteAuthor, setQuoteAuthor] = useState("");

    useEffect(() => {
        setQuote("");
        setClicked("");
      }, []);

    const appendQuote = () => {
        setClicked("-");
        const num = Math.floor((Math.random() * 3) + 1);
        if(num===1 || num===2) {
            const foundQuote = findQuote.getQuoteWithAuthor();
            setQuote(foundQuote.quote);
            setQuoteAuthor(foundQuote.author);

        } else {
            const foundQuote = everydayFun.getRandomQuote();

            setQuote(foundQuote.quote);
            setQuoteAuthor(foundQuote.author);
        }
    }

    return (
        <div className="quote-getter">
            <div className="quote-getter-text">
                <h2>RandQuote</h2>
                <h3>Generate a random quote</h3>
            </div>
            <button className="quote-button" onClick={appendQuote}>Find quote</button>
            <div className="spacer"/>
            <div className="quote-container">
                <p className="quote-text">{quote}</p>
                <p className="quote-author-text">{clicked}{quoteAuthor}</p>
            </div>
        </div>
    )
}

export default Quotegetter;
