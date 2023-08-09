import { AxiosResponse } from "axios"
import { info_request } from "../request/info_request"

export async function getTestimonials(){
    let result: Promise<AxiosResponse> = info_request()
    let testimonials: Object =  (await result).data['testimonials']
    return Object.values(testimonials)
  }
  
  
  