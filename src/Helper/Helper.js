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
    let person = {}
    const characters = array.map( async character => {
        person = {
            Name: character.name,
            Species: await getSpecies(character.species[0]),
            Homeworld: await getHomeworld(character.homeworld),
            population: await getPopulation(character.homeworld),

        }
      return person
    })

    return Promise.all(characters);
}

const getSpecies = async (url) => {
    const response = await fetch(url)
    const species = await response.json()
    return species.name
}

const getHomeworld = async (url) => {
    const response = await fetch(url)
    const homeWorld = await response.json()
    return homeWorld.name;
}

const getPopulation = async (url) => {
    const repsonse = await fetch(url);
    const homeWorld = await repsonse.json();
    return homeWorld.population
}



const _getData = getData;
export { _getData as getData };
const _getPeople = getPeople;
export { _getPeople as getPeople };