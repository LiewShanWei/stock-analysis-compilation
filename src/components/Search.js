import React, { useState } from "react";
import OpenChartMillUrl from "./Urls/OpenChartMillUrl";
import OpenCnbcUrl from "./Urls/OpenCnbcUrl";
import OpenFinvizUrl from "./Urls/OpenFinvizUrl";
import OpenSeekingAlphaUrl from "./Urls/OpenSeekingAlphaUrl";
import OpenStockwitsUrl from "./Urls/OpenStockwitsUrl";


const Search = () => {
    const [enteredTicker,setEnteredTicker] = useState();

    const OnEnterTickerHandler = (event) => {
        setEnteredTicker(event.target.value);
    };

    const SearchTickerHandler = () => {
        console.log("Ticker Entered: " + enteredTicker);

        OpenFinvizUrl(enteredTicker);
        OpenStockwitsUrl(enteredTicker);
        OpenChartMillUrl(enteredTicker);
        OpenSeekingAlphaUrl(enteredTicker);
        OpenCnbcUrl(enteredTicker);
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