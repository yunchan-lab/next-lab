type Todo = {
  id: string
  task: string
  isCompleted: boolean
}

export type FetchTodoListRequest = void

export type FetchTodoListResponse = {
  items: Todo[]
}

export type CreateTodoRequest = {
  task: string
}

export type CreateTodoResponse = {
  todo: Todo
}
