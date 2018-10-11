let randomNumber = Math.floor(Math.random() * 6) + 1;

const getData = async () => {
    const url = 'https://swapi.co/api/'

    
    const response = await fetch(url)
    const data = await response.json()
    const returnMovieData = await fetchFilms(data.films)
    return returnMovieData
};

const fetchFilms = async (filmUrl) => {
    const response = await fetch(filmUrl)
    const data = await response.json();
    return data.results[randomNumber];
}

const getPeople = async () => {
    const url = 'https://swapi.co/api/people';
    const response = await  fetch(url)
    const data = await response.json()
    const people = fetchPerson(data.results)
    return people
}

const fetchPerson = async (array) => {
    const characters = array.map( character => {
      return character
    })
    return characters;
}




const _getData = getData;
export { _getData as getData };
const _getPeople = getPeople;
export { _getPeople as getPeople };