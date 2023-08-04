import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
axios.defaults.headers.common['x-api-key'] = 'live_flQsdmawXVHOEszZKd0VDFO3Nlsnte0OFf9SJwDCYz8Cq2lt0EpZwPMk51cGmD3e';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1'

const breedSelector = document.querySelector('.breed-select')
const container = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')
const error = document.querySelector('.error')
breedSelector.addEventListener('input', onBreedChoose)

const createMarkup = breed =>`<option value="${breed.id}">${breed.name}</option>`;

fetchBreeds()
.then(resp => {breedSelector.hidden =false; error.hidden = true; resp.map(breed => 
breedSelector.insertAdjacentHTML('beforeend', createMarkup(breed)))})
.catch(()=>{body.innerHTML = '';
    error.hidden = false})


function onBreedChoose(){container.innerHTML = '';
error.hidden = true
    loader.hidden = false;
    const breedId = breedSelector.value
    fetchCatByBreed(breedId)
    .then(resp => {loader.hidden = true;
        const cat = resp[0].breeds[0]
        container.innerHTML = 
        `<div class="img-wrp"><img src="${resp[0].url}" alt="${cat.name}" ></div>
        <p>${cat.name}</p>
        <p>${cat.description}</p>
        <p>${cat.temperament}</p>`;
        })
       
        .catch(()=>{body.innerHTML = '';
        error.hidden = false})
   
}
export {loader, error}

