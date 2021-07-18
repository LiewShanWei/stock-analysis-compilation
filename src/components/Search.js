import React, { useState } from "react";

const finvizUrl = "https://finviz.com/quote.ashx?t="

const Search = () => {
    const [enteredTicker,setEnteredTicker] = useState();

    const OnEnterTickerHandler = (event) => {
        setEnteredTicker(event.target.value);
    };

    const SearchTickerHandler = () => {
        console.log("Ticker Entered: " + enteredTicker);
        window.open(finvizUrl + enteredTicker,"_blank","noopener,noreferrer");
    };

    return (
        <React.Fragment>
            <label>Type a Stock Symbol: </label>
            <input onChange={OnEnterTickerHandler} type="text"/>
            <button onClick={SearchTickerHandler}>Open Analysis Pages</button>
        </React.Fragment>
    );
};

export default Search;