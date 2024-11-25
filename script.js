// Functie om CSV te lezen en verwerken
function parseCSV(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const csvData = event.target.result;
        const parsedData = parseCSVData(csvData);
        createChart(parsedData);
    };
    reader.readAsText(file);
}

// Functie om CSV-data om te zetten naar een bruikbaar formaat
function parseCSVData(csv) {
    const lines = csv.split("\n");
    const labels = [];
    const data = [];

    // Neem aan dat de eerste regel de headers bevat
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].split(",");
        if (line.length > 1) {
            labels.push(line[0].trim());  // De eerste kolom is de label (bijv. de dagen)
            data.push(parseFloat(line[1].trim()));  // De tweede kolom is de data
        }
    }

    return { labels, data };
}

// Functie om een Chart.js grafiek te maken
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

// Event listener voor het bestand kiezen
document.getElementById('csvFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        parseCSV(file);
    }
});
