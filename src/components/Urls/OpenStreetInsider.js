const url = "https://www.streetinsider.com/stock_lookup.php?LookUp=Get+Quote&q="

const StreetInsiderUrl = (ticker) => {
    return url + ticker
};

const OpenStreetInsider = (ticker) => {
    return window.open(StreetInsiderUrl(ticker), "_blank","noopener,noreferrer")
};

export default OpenStreetInsider;