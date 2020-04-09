const requestURL = "js/guides.json";
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const guides = jsonObject['guides'];


        for (let i = 0; i < guides.length; i++) {
            let card = document.createElement('section');
            let fullname = document.createElement('h3');
            let image = document.createElement('img');
            let certificationtype = document.createElement('p');
            let years = document.createElement('p');
            let emailtype = document.createElement('p');
            let biography = document.createElement('p');

            image.setAttribute('src', guides[i].imageurl);
            image.setAttribute('alt', 'portrait of ' + name);
            fullname.textContent = guides[i].name;
            certificationtype.textContent = "Certification: " + guides[i].certification;
            years.textContent = "Years of Experience: " + guides[i].yearsExperience;
            emailtype.textContent = "Email: " + guides[i].email;
            biography.textContent = "Biography: " + guides[i].bio;


            card.appendChild(fullname);
            card.appendChild(image);
            card.appendChild(certificationtype);
            card.appendChild(years);
            card.appendChild(emailtype);
            card.appendChild(biography);
            document.querySelector('div.cards').appendChild(card);
        }
    });