import { Elysia } from "elysia";


const app = new Elysia();
// Data
const data =
[
  { id: 1, name: 'Fu Xuan', type: 'Preservation', element: 'Quantum' },
  { id: 2, name: 'Clara', type: 'Destruction', element: 'Physical' },
  { id: 3, name: 'Asta', type: 'Harmony', element: 'Fire' },
  { id: 4, name: 'Jing Liu', type: 'Destruction', element: 'Ice' },
  { id: 5, name: 'Kafka', type: 'Nihility', element: 'Lightning' },
] 

/* Routing */

// Index
app.get("/", () => { return data })

// Detail
app.get("/:id", ({ params: { id } }) => { 
  return data.find(item => item.id === +id)
})

// Create
app.post('/', ({ body }) => {
  data.push(body)
  return data
})




app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
