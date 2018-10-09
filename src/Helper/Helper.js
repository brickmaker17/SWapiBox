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

module.exports.getData = getData;