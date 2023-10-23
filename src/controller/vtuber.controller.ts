import { NotFoundError } from "elysia"
import { vtuber } from "../interfaces/vtuber.interface"
import { vtuberDTO } from "../models/vtuber.model"
import { log } from "console"

const data: vtuber[] = [
    {id: 1, name: 'Vestia Zeta'},
    {id: 2, name: 'Kobo Kanaeru'},
    {id: 3, name: 'Kaela Kovalskia'}
]

// Get index
export function getData (): vtuber[] {
    return data
} 

// Get detail
export function getDetail(id: number): vtuber {
    const detail = data.filter((item) => item.id === id)
    
    if (detail.length <= 0) {
      throw new NotFoundError()
    }

    return detail[0]
}

// Create Data
export function addData(request: vtuber): vtuber[] {
    log(request);
    
    data.push({
        id: request.id,
        name: request.name
    })

    return data
}