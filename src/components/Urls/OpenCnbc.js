const url = "https://www.cnbc.com/quotes/"

const CnbcUrl = (ticker) => {
    return url + ticker
};

const OpenCnbc = (ticker) => {
    return window.open(CnbcUrl(ticker), "_blank","noopener,noreferrer")
};

export default OpenCnbc;