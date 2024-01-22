const currencies = ['USD-AUD', 'USD-CND', 'USD-EUR', 'USD-GBP', 'USD-RUB'];

function changeChart(currency) {
    const plotlyData = getFakeChartData(currency);

    Plotly.newPlot('myDiv', plotlyData, { title: `Forex Chart - ${currency}` });
}

function getFakeChartData(currency) {
    const plotlyData = [];

    if (currency === 'ALL') {
        currencies.forEach((c) => {
            plotlyData.push({
                x: [1, 2, 3, 4],
                y: [getRandomValue(), getRandomValue(), getRandomValue(), getRandomValue()],
                type: 'scatter',
                mode: 'lines',
                line: { color: getRandomColor() },
                name: c,
                stackgroup: 'stack'
            });
        });
    } else {
        const data = {
            x: [1, 2, 3, 4],
            y: [getRandomValue(), getRandomValue(), getRandomValue(), getRandomValue()],
            type: 'scatter',
            mode: 'lines',
            line: { color: getRandomColor() },
            name: currency,
            stackgroup: 'stack'
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

// Function to update the sentiment pie chart
function updateSentimentPieChart() {
    const sentimentData = getSentimentData(); // Implement a function to get real sentiment data

    const pieData = [{
        values: sentimentData.values,
        labels: ['Positive', 'Negative', 'Neutral'],
        type: 'pie',
        marker: {
            colors: ['#008000', '#FF0000', '#0000FF'] // Green for positive, Red for negative, Blue for neutral
        }
    }];

    const pieLayout = {
        height: 300, // Adjusted height to fit within the available space
        width: 400,  // Adjusted width to fit within the available space
        title: 'Sentiment Analysis'
    };

    Plotly.newPlot('sentiment-pie-chart', pieData, pieLayout);
}

// Function to get sample sentiment data (replace with real data)
function getSentimentData() {
    // Replace this with actual sentiment data
    return {
        values: [30, 20, 50] // Example values for positive, negative, and neutral sentiments
    };
}

// Call the functions to update the charts on page load
changeChart('ALL');
updateSentimentPieChart();
