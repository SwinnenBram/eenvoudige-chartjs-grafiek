# eenvoudige-chartjs-grafiek

In deze opdracht maak je een eenvoudige webpagina die een dataset inleest uit een CSV-bestand en deze visualiseert met een grafiek, met behulp van Chart.js. Je werkt individueel en gebruikt GitHub om je project op te slaan en versiebeheer toe te passen.

Doel van de opdracht
Vertrouwd raken met versiebeheer door GitHub te gebruiken voor een eenvoudig project.
Leren werken met data en visualisaties door CSV-data om te zetten in een grafiek.
Oefenen met webtechnologieën zoals HTML, JavaScript en Chart.js.

Opdrachtbeschrijving
Je gaat een HTML-pagina maken die:

Een dataset (bijvoorbeeld een lijst met jaartallen en waarden) inleest vanuit een CSV-bestand.
De gegevens weergeeft in een eenvoudige grafiek (lijn- of staafdiagram) met behulp van Chart.js

documentatie:

Je kunt via de html eerste een csv bestand kiezen uit je eigen bestanden. 
Van deze csv word dan een grafiek gemaakt.
De grafiek word weergeven als een lijngrafiek met juiste legende. 

Docker. 

zorg dat je docker hebt geinstaleerd en dat het werkt.

Maak in de juiste map een bestandje aan genaamd Dockerfile.txt 
schrijf daar de volgende code in (via kladblok of een andere text bewerker):

# Gebruik een officiële Apache-webserver image
FROM httpd:2.4

# Kopieer de inhoud van jouw website naar de standaard map van Apache
COPY ./ /usr/local/apache2/htdocs/

# Zorg dat Apache standaard op poort 80 draait
EXPOSE 80

Open vervolgens een terminal en zorg dat je in de juiste map zit.
Voer dan volgende commando's uit:
Docker build -t mijn-website:1.0 -f Dockerfile.txt . 
Docker run -d -p 8080:80 mijn-website:1.0 

Nu kan je als dit alles gelukt is je website openen op http://localhost:8080 
Normaal zie je ook in docker een nieuwe container staan. 

Zorg er natuurlijk ook voor dat je een werkende code hebt om een website te maken en dat deze in de zelfde map staat als je Dockerfile.txt. 

