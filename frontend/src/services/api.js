import axios from 'axios';

const API_URL = 'https://swift-share-backend-dipsankadariyas-projects.vercel.app/?vercelToolbarCode=46oVfqY9KsrZOLb';

export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_URL}/upload`, data);
    return response.data;
  }  catch (error) {
    console.log('Error while calling the API ', error.message);
}
}