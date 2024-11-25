// De naam van het CSV-bestand dat we willen inladen
const csvFileName = 'data.csv';  // Dit is de naam van het CSV-bestand

// Functie om CSV-bestand in te lezen met fetch
function fetchCSVData(fileName) {
    fetch(fileName)
        .then(response => response.text())  // Verkrijg de tekst van het CSV-bestand
        .then(csvData => {
            const parsedData = parseCSVData(csvData);  // Verwerk de CSV-gegevens
            createChart(parsedData);  // Maak de grafiek
        })
        .catch(error => {
            console.error('Fout bij het inladen van CSV:', error);
        });
}

// Functie om CSV te verwerken en de gegevens om te zetten
function parseCSVData(csv) {
    const lines = csv.trim().split("\n");
    const labels = [];
    const data = [];

    // Begin met de tweede regel (de eerste regel zijn de headers)
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].split(",");
        if (line.length > 1) {
            labels.push(line[0].trim());  // De eerste kolom is de label (bijv. de dagen)
            data.push(parseFloat(line[1].trim()));  // De tweede kolom is de data
        }
    }

    return { labels, data };
}

// Functie om de grafiek te maken met Chart.js
function createChart(parsedData) {
    const ctx = document.getElementById('grafiekCanvas').getContext('2d');
    new Chart(ctx, {
        type: 'line', // Type grafiek: lijn
        data: {
            labels: parsedData.labels, // De labels voor de x-as
            datasets: [{
                label: 'Waarden',
                data: parsedData.data, // De gegevens voor de y-as
                borderColor: 'blue', // Kleur van de lijn
                fill: false, // Vul de onderkant van de lijn niet
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Dagen'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Waarde'
                    }
                }
            }
        }
    });
}

// Haal de CSV-gegevens op en maak de grafiek
fetchCSVData(csvFileName);
