const url = "https://seekingalpha.com/symbol/"

const SeekingAlphaUrl = (ticker) => {
    return url + ticker
};

const OpenSeekingAlphaUrl = (ticker) => {
    return window.open(SeekingAlphaUrl(ticker), "_blank","noopener,noreferrer")
};

export default OpenSeekingAlphaUrl;