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
    // Add more headlines
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

function populateNews() {
    const newsList = document.getElementById('news-list');

    newsData.forEach((headline) => {
        const listItem = document.createElement('li');
        listItem.className = 'news-item';
        listItem.textContent = headline;
        newsList.appendChild(listItem);
    });
}

function changeChart(currency) {
    const forexImage = document.getElementById('forex-image');
    forexImage.src = `images/${currency}.jpg`;
}

populateNews();
