let randomNumber = Math.floor(Math.random() * 6) + 1;

export const getData = async () => {
    const url = 'https://swapi.co/api/'

    
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.films)
    const returnMovieData = await fetchFilms(data.films)
    return returnMovieData
};

export const fetchFilms = async (filmUrl) => {
    const response = await fetch(filmUrl)
    const data = await response.json();
    return data.results[randomNumber];
}

export const getPeople = async () => {
    const url = 'https://swapi.co/api/people';
    const response = await  fetch(url)
    const data = await response.json()
    const people = fetchPerson(data.results)
    return people
}

export const fetchPerson = async (array) => {
    let person = {}
    const characters = array.map( async character => {
        person = {
            name: character.name,
            Species: await getSpecies(character.species[0]),
            Homeworld: await getHomeworld(character.homeworld),
            population: await getPopulation(character.homeworld),

        }
      return person
    })

    return Promise.all(characters);
}

export const getSpecies = async (url) => {
    const response = await fetch(url)
    const species = await response.json()
    return species.name
}

export const getHomeworld = async (url) => {
    const response = await fetch(url)
    const homeWorld = await response.json()
    return homeWorld.name;
}

export const getPopulation = async (url) => {
    const repsonse = await fetch(url);
    const homeWorld = await repsonse.json();
    return homeWorld.population
}


export const getPlanets = async () => {
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
                name: world.name,
                terrain: world.terrain,
                population: world.population,
                climate: world.climate,
                residents: await residents,
            }
            return planet
        })
        
    return Promise.all(planetArr)
}


export const fetchResident = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.name
}


export const getVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/'
    let vehicle = {}
    const response = await fetch(url);
    const data = await response.json();
    const newVehicle = data.results.map( vehicleIteration => {
        return vehicle = {
            name: vehicleIteration.name,
            model: vehicleIteration.model,
            class: vehicleIteration.vehicle_class,
            passengers: vehicleIteration.passengers
        }
    })
    
    return newVehicle
}