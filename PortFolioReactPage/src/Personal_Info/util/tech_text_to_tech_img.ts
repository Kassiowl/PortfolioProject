import { icons_request } from "../../repositories/request/icons_request";

export async function extractTechImage(tech_text: string){

    const tech_text_lower = tech_text.toLowerCase()
    const icons_request_result: any = await icons_request()
    return icons_request_result.data.tecnology_stacks[tech_text_lower]
}