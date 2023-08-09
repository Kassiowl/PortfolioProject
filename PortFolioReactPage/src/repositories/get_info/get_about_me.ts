import { AxiosResponse } from "axios"
import { info_request } from "../request/info_request"


export async function getAboutMe(){

    let result: Promise<AxiosResponse> = info_request()
    let paragraphs: Object =  (await result).data['about_me']['paragraph']
  
    return Object.values(paragraphs)
  }
  