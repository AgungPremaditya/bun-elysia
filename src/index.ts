import { Elysia, t } from "elysia";
import { addData, getData, getDetail } from "./controller/vtuber.controller";
import { vtuberDTO } from "./models/vtuber.model";

export const app = new Elysia()

// Route
app.group('vtubers', app => app
  .get('/', () => getData())
  .get('/:id', ({params}) => getDetail(+params.id))
  .post('/', ({body}) => addData(body),{body: vtuberDTO} )
)

// Run App
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
