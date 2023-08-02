import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
axios.defaults.headers.common['x-api-key'] = 'live_flQsdmawXVHOEszZKd0VDFO3Nlsnte0OFf9SJwDCYz8Cq2lt0EpZwPMk51cGmD3e';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1'

const breedSelector = document.querySelector('.breed-select')
const container = document.querySelector('.cat-info')

breedSelector.addEventListener('input', onBreedChoose)

const createMarkup = breed =>`<option value="${breed.id}">${breed.name}</option>`;

fetchBreeds().then(resp => resp.map(breed => 
breedSelector.insertAdjacentHTML('beforeend', createMarkup(breed)))).catch(console.error())


function onBreedChoose(e){const breedId = breedSelector.value
    fetchCatByBreed(breedId).then(resp => console.dir(resp)).catch(console.error())
   
    // const selectedBreed = breedSelector.options[breedSelector.options.selectedIndex]
    // console.dir(selectedBreed)
}


