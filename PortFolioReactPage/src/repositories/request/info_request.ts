import axios, { AxiosResponse } from 'axios';


export async function info_request(): Promise<AxiosResponse> {
    try {
        const response = await axios.get('http://127.0.0.1:8000/kassio');
        return response;
      } catch (error) {

        throw error;
      }
}


