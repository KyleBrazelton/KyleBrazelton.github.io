const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns']
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven") {
                getEvents(towns[i]);
            }
        }

        function getEvents(townEvents) {
            let townCard = document.createElement('div')
            let title = document.createElement('h2');
            let townDates = document.createElement('div');
            let eventP1 = document.createElement('p');
            let eventP2 = document.createElement('p');
            let eventP3 = document.createElement('p');

            townCard.classList.add('townCard');
            title.classList.add('titleH2');
            townDates.classList.add('townDates');
            eventP1.classList.add('eventsP');
            eventP2.classList.add('eventsP');
            eventP3.classList.add('eventsP');


            title.textContent = "Upcoming Events:";
            eventP1.textContent = townEvents.events[0];
            eventP2.textContent = townEvents.events[1];
            eventP3.textContent = townEvents.events[2];


            townCard.appendChild(title);
            townDates.appendChild(eventP1);
            townDates.appendChild(eventP2);
            townDates.appendChild(eventP3);
            townCard.appendChild(townDates);

            document.querySelector('.events').appendChild(townCard);
        }
    });