const url = "https://stocktwits.com/symbol/"

const StockwitsUrl = (ticker) => {
    return url + ticker
};

const OpenStockwits = (ticker) => {
    return window.open(StockwitsUrl(ticker), "_blank","noopener,noreferrer")
};

export default OpenStockwits;