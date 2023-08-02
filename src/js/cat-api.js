
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_flQsdmawXVHOEszZKd0VDFO3Nlsnte0OFf9SJwDCYz8Cq2lt0EpZwPMk51cGmD3e';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1'

const fetchBreeds = () =>axios('/breeds').then(resp => resp.data).catch(console.error())
const fetchCatByBreed = (breedId) => axios(`/images/search?breed_ids=${breedId}`).then(resp => resp.data).catch(console.error())
export {fetchBreeds, fetchCatByBreed}