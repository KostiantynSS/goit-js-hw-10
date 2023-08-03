
import axios from 'axios';
import { error, loader } from './index';
axios.defaults.headers.common['x-api-key'] = 'live_flQsdmawXVHOEszZKd0VDFO3Nlsnte0OFf9SJwDCYz8Cq2lt0EpZwPMk51cGmD3e';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1'

const fetchBreeds = () =>axios('/breeds').then(resp => { return resp.data}).catch(console.error()).finally(()=>loader.hidden = true)
const fetchCatByBreed = (breedId) => axios(`/images/search?breed_ids=${breedId}`).then(resp => {loader.hidden = false;return resp.data}).catch(console.error()).finally(()=>loader.hidden = true)
export {fetchBreeds, fetchCatByBreed}