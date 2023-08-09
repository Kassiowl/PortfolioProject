import axios, { AxiosResponse } from 'axios';


export async function icons_request(): Promise<AxiosResponse> {
    try {
        const response = await axios.get('http://127.0.0.1:8000/icons');
        return response;
      } catch (error) {

        throw error;
      }
}


