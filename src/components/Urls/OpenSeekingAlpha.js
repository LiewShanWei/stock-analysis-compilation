const url = "https://seekingalpha.com/symbol/"

const SeekingAlphaUrl = (ticker) => {
    return url + ticker
};

const OpenSeekingAlpha = (ticker) => {
    return window.open(SeekingAlphaUrl(ticker), "_blank","noopener,noreferrer")
};

export default OpenSeekingAlpha;