import { AxiosResponse } from "axios"
import { icons_request } from "../request/icons_request"


export async function get_tecnology_stack_icons(){

    let result: Promise<AxiosResponse> = icons_request()
    let tecnology_stacks: Object =  (await result).data['tecnology_stacks']
    return Object.values(tecnology_stacks)
}

export async function get_social_media_icons(){

  let result: Promise<AxiosResponse> = icons_request()
  let social_media: Object =  (await result).data['social_media']
  return Object.values(social_media)
}



  