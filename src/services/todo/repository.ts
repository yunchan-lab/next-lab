import { fetcher } from "~/utilities/fetcher"

export async function fetchTodo() {
  const response = await fetcher("/api/todo/list", {
    method: "GET",
  })

  return response.json()
}

export async function createTodo({ task }: { task: string }) {
  const response = await fetcher("/api/todo", {
    method: "POST",
    body: {
      task,
    },
  })

  return response.json()
}
