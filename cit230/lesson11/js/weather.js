const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

.then(function(jsonObject) {
    const towns = jsonObject['towns']

    console.table(jsonObject); //temporary checking for valid response and data parsing

    towns.forEach(town => {
        switch (town.name) {
            case 'Preston':
            case 'Fish Haven':
            case 'Soda Springs':
                let card = document.createElement('section');
                let townName = document.createElement('h2');

                let townFounded = document.createElement('p');
                let townPopulation = document.createElement('p');
                let townRainfall = document.createElement('p');
                let image = document.createElement('img');

                townName.textContent = town.name;

                townFounded.textContent = 'Year Founded: ' + town.yearFounded;
                townPopulation.textContent = 'Population: ' + town.currentPopulation;
                townRainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;
                image.setAttribute('src', 'images/' + town.photo);
                image.setAttribute('alt', 'photo of ' + town.name);

                card.appendChild(townName);

                card.appendChild(townFounded);
                card.appendChild(townPopulation);
                card.appendChild(townRainfall);
                card.appendChild(image);

                document.querySelector('.towns').appendChild(card);
                break;
            default:
                break;
        };
    });
})