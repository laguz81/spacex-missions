import axios from "axios";

const API_URL = "https://api.spacexdata.com/v3";


export async function getAllLaunches() {
    try {
        const response = await axios.get(`${API_URL}/launches`);
        return await response.data;        
        
    } catch (error) {
        console.error(error);
    }     
  }

  export async function getLauchByFlightNumber(flightNumber) {
    try {
        const response = await axios.get(`${API_URL}/launches/${flightNumber}`);
        return await response.data;        
        
    } catch (error) {
        console.error(error);
    }     
  }
