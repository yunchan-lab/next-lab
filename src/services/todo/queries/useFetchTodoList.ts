import { QueryKey, UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query"
import { fetchTodo } from "../repository"
import { FetchTodoListResponse } from "~/types/services/todo"
import HTTPError from "~/utilities/errors/HttpError"
import { TODO_QUERY_KEY } from "../query-key"

export default function useFetchTodoList<TData = FetchTodoListResponse>(
  options?: Omit<
    UndefinedInitialDataOptions<FetchTodoListResponse, HTTPError, TData, QueryKey>,
    "queryFn" | "queryKey"
  >
) {
  return useQuery<FetchTodoListResponse, HTTPError, TData, QueryKey>({
    queryKey: TODO_QUERY_KEY.todoList,
    queryFn: fetchTodo,
    ...options,
  })
}
