let randomNumber = Math.floor(Math.random() * 6) + 1;

const getData = () => {
    const url = 'https://swapi.co/api/'

    return fetch(url)
    .then(response => response.json())
    .then(data => fetchFilms(data.films))
    
};

const fetchFilms = (filmUrl) => {
    
    const fetchFilm = fetch(filmUrl)
        .then(response => response.json())
        .then(data => data.results[randomNumber])

    return fetchFilm;
}

const getPeople = () => {
    const url = 'https://swapi.co/api/people';
    return fetch(url)
      .then(response => response.json())
      .then(data => fetchPerson(data.results))
}

const fetchPerson = (array) => {
    const characters = array.map(character => {
      return character
    })
    return characters;
}






// const getPeople = () => {
//     const url = 'https://swapi.co/api/'

//     return fetch(url)
//         .then(response => response.json())
//         .then( data => fetchPeople(console.log(data.people)))

// }

// const fetchPeople = (peopleUrl) => {
    
//     const fetchPerson = 
//         peopleUrl.map( person => {
//             return fetch(peopleUrl)
//                 .then( response => response.json())
//                 .then( data => (console.log(data)))
//         })

//     return Promise.all(fetchPerson);
// }

const _getData = getData;
export { _getData as getData };
const _getPeople = getPeople;
export { _getPeople as getPeople };