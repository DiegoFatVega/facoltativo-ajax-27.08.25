console.log('Hello World')

const swapiPersons = "https://swapi.info/api/people"; // --->endpoint salvato in una variabile
const swapiFilms = "https://swapi.info/api/films";
const swapiStarships = "https://swapi.info/api/starships";

const cardListElements = document.getElementById('cards');
const filmEl = document.getElementById('card-title');



fetch(swapiPersons)
    .then((res) => res.json())
    .then(element => {
        /*  for (let i = 0; i < element.length; i++) {
            const thisElement = element[i];
            console.log(thisElement.title)
            } */
        /*    element.forEach(person => {
         console.log(person.name)
         const liEl = document.createElement('li');
         liEl.innerText = person.name;
         personListElements.appendChild(liEl)
         }) */
        element.forEach(person => {
            const cardString = `<div class="col mt-4">
                                    <div class="card" style="width: 18rem;">
                                    <img src="https://picsum.photos/400/200?random=${person.mass}" class="card-img-top" alt="">
                                    <div class="card-body">
                                    <h5 class="card-title" id="card'title">${person.name}</h5>   
                                    </div>
                                    </div>
                                    </div>`;
            cardListElements.insertAdjacentHTML('beforeend', cardString);

            if (person.films != null) {
                fetch(swapiFilms)
                    .then((res) => res.json())
                    .then(element => {
                        element.forEach(films => {
                            const filmString = `<p class="card-text">${films.title}</p>`;
                            console.log(films.title);
                        })
                    })
                    .catch((error) => console.error(error))
            }
        })
    })
    .catch((error) => console.error(error))
/* <p class="card-text">${person.films}</p> */

function swFilms() {
    fetch(swapiFilms)
        .then((res) => res.json())
        .then(element => {
            element.forEach(films => {
                return films.title;
            })
        })
        .catch((error) => console.error(error))
}
function swStarships() {
    fetch(swapiStarships)
        .then((res) => res.json())
        .then(element => {
            element.forEach(Starships => {
                console.log(Starships.name);
                return Starships.name;
            })
        })
        .catch((error) => console.error(error))
}