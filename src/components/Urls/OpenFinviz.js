const url = "https://finviz.com/quote.ashx?t="

const FinvizUrl = (ticker) => {
    return url + ticker
};

const OpenFinviz = (ticker) => {
    return window.open(FinvizUrl(ticker), "_blank","noopener,noreferrer")
};

export default OpenFinviz;