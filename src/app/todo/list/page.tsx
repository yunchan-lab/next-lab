"use client"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import useCreateTodo from "~/services/todo/mutations/useCreateTodo"
import useFetchTodoList from "~/services/todo/queries/useFetchTodoList"
import { TODO_QUERY_KEY } from "~/services/todo/query-key"

export default function TodoPage() {
  const queryClient = useQueryClient()
  const [input, setInput] = useState("")

  const { data } = useFetchTodoList()
  const { mutate } = useCreateTodo({
    onSuccess: () => {
      setInput("")
      queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY.todoList, exact: true })
    },
  })

  const addTodo = () => {
    if (input) {
      mutate({ task: input })
      return
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-10">ToDo List</h1>
      <div className="mb-4 flex-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
        >
          Add ToDo
        </button>
      </div>
      <ul>
        {data?.items?.map(({ task }, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-2 dark:text-black">
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}
