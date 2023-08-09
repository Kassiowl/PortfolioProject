import { AxiosResponse } from "axios"
import { info_request } from "../request/info_request"

export async function getPortfolio(){

    let result: Promise<AxiosResponse> = info_request()
    let portfolio: Object =  (await result).data['projects']
    return Object.values(portfolio)
  }
  