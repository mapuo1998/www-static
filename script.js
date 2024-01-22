// Sample headlines
const newsData = [
    "USD Strengthens Against Major Currencies",
    "Eurozone Economic Outlook Improves",
    "GBP Volatility Amidst Brexit Uncertainty",
    "Asian Markets React to Trade Developments",
    "Oil Prices Reach New Highs",
    "USD-AUD Exchange Rate Hits Record High",
    "USD-CND Economic Indicators Show Positive Trend",
    "USD-EUR Sees Stability Amidst Market Fluctuations",
    "USD-GBP Faces Challenges with Brexit Negotiations",
    "USD-RUB Gains Traction in Russian Markets",
    "Stock Markets Experience Volatility",
    "Cryptocurrency Market Surges to New Heights",
    "Federal Reserve Announces Interest Rate Decision",
    "Chinese Yuan Strengthens Against the Dollar",
    "Technology Sector Leads Market Rally",
    "Global Trade Tensions Impact Currency Markets",
    "Commodities Prices on the Rise",
    "Central Banks Coordinate Monetary Policy",
    "Emerging Markets Show Resilience",
    "Investors Monitor Geopolitical Developments",
    "Economic Recovery Spurs Investor Confidence"
];

const currencies = ['USD-AUD', 'USD-CND', 'USD-EUR', 'USD-GBP', 'USD-RUB'];

function populateNews() {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = ''; // Clear existing news list

    newsData.forEach((headline) => {
        const listItem = document.createElement('li');
        listItem.className = 'news-item';
        listItem.textContent = headline;
        newsList.appendChild(listItem);
    });
}

function changeChart(currency) {
    // Update news and forex chart (if needed)

    // Update Plotly chart
    const plotlyData = getFakeChartData(currency);

    Plotly.newPlot('myDiv', plotlyData, { title: `Forex Chart - ${currency}` });
}

function getFakeChartData(currency) {
    const plotlyData = [];

    // Sample data for different currencies
    if (currency === 'ALL') {
        currencies.forEach((c) => {
            plotlyData.push({
                x: [1, 2, 3, 4],
                y: [getRandomValue(), getRandomValue(), getRandomValue(), getRandomValue()],
                type: 'scatter',
                mode: 'lines',
                line: { color: getRandomColor() },
                name: c
            });
        });
    } else {
        const data = {
            x: [1, 2, 3, 4],
            y: [getRandomValue(), getRandomValue(), getRandomValue(), getRandomValue()],
            type: 'scatter',
            mode: 'lines',
            line: { color: getRandomColor() },
            name: currency
        };
        plotlyData.push(data);
    }

    return plotlyData;
}

function getRandomValue() {
    return Math.floor(Math.random() * 20) + 1;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initial population of news
populateNews();

// Show chart for the default currency on page load
changeChart('ALL');
