const url = "https://www.cnbc.com/quotes/"

const CnbcUrl = (ticker) => {
    return url + ticker
};

const OpenCnbcUrl = (ticker) => {
    return window.open(CnbcUrl(ticker), "_blank","noopener,noreferrer")
};

export default OpenCnbcUrl;