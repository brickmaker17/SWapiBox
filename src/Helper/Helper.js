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
            name: character.name,
            species: await getSpecies(character.species[0]),
            homeworld: await getHomeworld(character.homeworld),
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


const getPlanets = async () => {
    const url = 'https://swapi.co/api/planets/'

    let planet = {}
    const response = await fetch(url);
    const data = await response.json();
    const planetArr = data.results.map( async world => {
            const planet1 =  await world.residents.map( async resident => {
                return fetchResident( resident )
            })
            const residents = Promise.all(planet1)
            planet = {
                Name: world.name,
                Terrain: world.terrain,
                Population: world.population,
                Climate: world.climate,
                Residents: await residents,
            }
            console.log(planet1)
            return planet
        })
        
    return Promise.all(planetArr)
}


const fetchResident = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.name
}


const getVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/'
    let vehicle = {}
    const response = await fetch(url);
    const data = await response.json();
    const newVehicle = data.results.map( vehicleIteration => {
        return vehicle = {
            Name: vehicleIteration.name,
            Model: vehicleIteration.model,
            Class: vehicleIteration.vehicle_class,
            Passengers: vehicleIteration.passengers
        }
    })
    
    return newVehicle
}



const _getData = getData;
export { _getData as getData };
const _getPeople = getPeople;
export { _getPeople as getPeople };
const _getPlanets = getPlanets;
export { _getPlanets as getPlanets };
const _getVehicles = getVehicles;
export { _getVehicles as getVehicles };