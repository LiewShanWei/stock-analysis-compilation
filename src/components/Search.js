import React, { useState } from "react";
import OpenChartMill from "./Urls/OpenChartMill";
import OpenCnbc from "./Urls/OpenCnbc";
import OpenFinviz from "./Urls/OpenFinviz";
import OpenSeekingAlpha from "./Urls/OpenSeekingAlpha";
import OpenStockwits from "./Urls/OpenStockwits";
import OpenStreetInsider from "./Urls/OpenStreetInsider";
import OpenYahooFinance from "./Urls/OpenYahooFinance";


const Search = () => {
    const [enteredTicker,setEnteredTicker] = useState();

    const OnEnterTickerHandler = (event) => {
        setEnteredTicker(event.target.value);
    };

    const SearchTickerHandler = () => {
        console.log("Ticker Entered: " + enteredTicker);

        OpenFinviz(enteredTicker);
        OpenStockwits(enteredTicker);
        OpenChartMill(enteredTicker);
        OpenSeekingAlpha(enteredTicker);
        OpenCnbc(enteredTicker);
        OpenStreetInsider(enteredTicker);
        OpenYahooFinance(enteredTicker);
    };

    return (
        <React.Fragment>
            <input placeholder="Enter a Stock Ticker" onChange={OnEnterTickerHandler} type="text"/>
            <button onClick={SearchTickerHandler}>Open Stock Pages</button>
        </React.Fragment>
    );
};

export default Search;