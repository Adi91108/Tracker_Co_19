import axios from "axios";

const BASE_URL = 'https://disease.sh/v3/covid-19';

export const getDataByCountry = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/countries`);
        return response.data;
    }catch (error) {
        console.error('Error fetching COVID data by country: ', error)
        throw error;
    }
};

export const getDataGlobal = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all`);
        return response.data;
    }catch (error) {
        console.error('Error fetching global COVID data: ', error);
        throw error;
    }
}
