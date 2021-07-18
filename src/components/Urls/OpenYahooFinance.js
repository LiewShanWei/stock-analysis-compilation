const url = "https://finance.yahoo.com/quote/"

const YahooFinanceUrl = (ticker) => {
    return url + ticker
};

const OpenYahooFinance = (ticker) => {
    return window.open(YahooFinanceUrl(ticker), "_blank","noopener,noreferrer")
};

export default OpenYahooFinance;