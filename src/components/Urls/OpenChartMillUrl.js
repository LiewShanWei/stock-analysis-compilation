const url = "https://www.chartmill.com/stock/quote/"

const ChartMillUrl = (ticker) => {
    return url + ticker
};

const OpenChartMillUrl = (ticker) => {
    return window.open(ChartMillUrl(ticker), "_blank","noopener,noreferrer")
};

export default OpenChartMillUrl;