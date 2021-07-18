import React, { useState } from "react";
import OpenFinvizUrl from "./Urls/OpenFinvizUrl";


const Search = () => {
    const [enteredTicker,setEnteredTicker] = useState();

    const OnEnterTickerHandler = (event) => {
        setEnteredTicker(event.target.value);
    };

    const SearchTickerHandler = () => {
        console.log("Ticker Entered: " + enteredTicker);

        OpenFinvizUrl(enteredTicker);
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