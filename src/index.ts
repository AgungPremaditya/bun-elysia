import { Elysia, t } from "elysia";
import { addData, getData, getDetail } from "./controller/vtuber.controller";
import { vtuberDTO, vtubersDTO } from "./models/vtuber.model";
import { swagger } from "@elysiajs/swagger";

export const app = new Elysia()

// Route
app.group('vtubers', app => app
  .group('/holoid', app => app
    .get('/', () => getData())
    .get('/:id', ({params}) => getDetail(+params.id))
    .post('/', ({body}) => addData(body),{body: vtuberDTO, response: vtubersDTO, schema: {
      responses: t.Array(
        t.Object({
          id: t.Number(),
          name: t.String()
        })
      )
    }})
  )
)

// Run App
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
