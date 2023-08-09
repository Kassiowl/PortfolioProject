import { AxiosResponse } from "axios"
import { info_request } from "../request/info_request"

export async function getExperiences(){

    let result: Promise<AxiosResponse> = info_request()
    let experiences: Object =  (await result).data['experiences']
    return Object.values(experiences)
  }
  