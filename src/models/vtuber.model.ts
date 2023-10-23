import { t } from "elysia";

export const vtuberDTO =  t.Object({
    id: t.Number(),
    name: t.String()
})

export const vtubersDTO =  t.Array(vtuberDTO)
