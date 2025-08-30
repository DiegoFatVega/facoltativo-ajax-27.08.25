console.log('Hello World')

const swapiPersons = "https://swapi.info/api/people"; // --->endpoint salvato in una variabile
const cardListElements = document.getElementById('cards');

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
                                     <img src="..." class="card-img-top" alt="...">
                                            <div class="card-body">
                                               <h5 class="card-title">${person.name}</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                card’s content.</p>
                                            </div>
                                    </div>
                                </div>`;
    cardListElements.insertAdjacentHTML('beforeend', cardString);
        })
    })
    .catch((error) => console.error(error))