const Cleaner = () => {
    // constructor() {
    //     this.films: [],
    //     this.people: [],
    //     this.planets: [],
    //     this.vehicle: [] 
    // };




    const getPeople = () => {

    };


    const getData = () => {
        const apiUrl = 'https://swapi.co/api/'
        fetch(apiUrl)
            .then(response => response.json)
            .then(data => data)
    };
};

export default Cleaner;