import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_flQsdmawXVHOEszZKd0VDFO3Nlsnte0OFf9SJwDCYz8Cq2lt0EpZwPMk51cGmD3e';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1'

const breedSelector = document.querySelector('.breed-select')
breedSelector.addEventListener('input', onBreedChoose)

function createMarkup (breed){
    return `<option value="${breed.id}">${breed.name}</option>`
}
axios('/breeds').then(resp => resp.data.map(breed => breedSelector.insertAdjacentHTML('beforeend', createMarkup(breed)))).catch(console.error())
function onBreedChoose(e){const selectedBreed = breedSelector.options[breedSelector.options.selectedIndex]
    console.dir(selectedBreed)
}