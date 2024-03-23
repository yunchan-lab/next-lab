import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { createTodo } from "../repository"
import { CreateTodoRequest, CreateTodoResponse } from "~/types/services/todo"
import HTTPError from "~/utilities/errors/HttpError"

export default function useCreateTodo<TContext = unknown>(
  options?: Omit<
    UseMutationOptions<CreateTodoResponse, HTTPError, CreateTodoRequest, TContext>,
    "mutationFn"
  >
) {
  return useMutation<CreateTodoResponse, HTTPError, CreateTodoRequest, TContext>({
    mutationFn: ({ task }) => createTodo({ task }),
    ...options,
  })
}
