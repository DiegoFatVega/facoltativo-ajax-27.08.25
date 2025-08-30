console.log('Hello World')

const swapiPersons = "https://swapi.info/api/people"; // --->endpoint salvato in una variabile
const personListElements = document.getElementById('person')
fetch(swapiPersons)
    .then((res) => res.json())
    .then(element => {
        /*  for (let i = 0; i < element.length; i++) {
             const thisElement = element[i];
             console.log(thisElement.title)
         } */
        element.forEach(person => {
            console.log(person.name)
            const liEl = document.createElement('li');
            liEl.innerText = person.name;
            personListElements.appendChild(liEl)
        })

    })
    .catch((error) => console.error(error))