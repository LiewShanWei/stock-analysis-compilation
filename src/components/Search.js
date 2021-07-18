import React, { useState } from "react";
import OpenChartMillUrl from "./Urls/OpenChartMillUrl";
import OpenCnbcUrl from "./Urls/OpenCnbcUrl";
import OpenFinvizUrl from "./Urls/OpenFinvizUrl";
import OpenSeekingAlphaUrl from "./Urls/OpenSeekingAlphaUrl";
import OpenStockwitsUrl from "./Urls/OpenStockwitsUrl";
import OpenStreetInsiderUrl from "./Urls/OpenStreetInsiderUrl";


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
        OpenStreetInsiderUrl(enteredTicker);
    };

    return (
        <React.Fragment>
            <input placeholder="Enter a Stock Ticker" onChange={OnEnterTickerHandler} type="text"/>
            <button onClick={SearchTickerHandler}>Open Stock Pages</button>
        </React.Fragment>
    );
};

export default Search;