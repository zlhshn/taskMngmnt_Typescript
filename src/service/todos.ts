import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SweetAlertIcons, SweetPosition, notify } from "../helper/sweetalert";

const apiUrl: string = import.meta.env.VITE_BASE_URL;

export const todosApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }), 
    tagTypes: ["Todos"], 
    endpoints: (builder) => ({
      getTodos: builder.query<ITodoType[], void>({
        query: () => "todos",
        providesTags: ["Todos"],
      }),
      addTodo: builder.mutation({
        
        query: (text: string) => ({
          url: "todos",
          method: "POST",
          body: { todo: text, isDone: false },
        }),
        invalidatesTags: ["Todos"], 
        transformResponse: (response: ITodoType[]) => {
          notify(
            "The todo was created successfully!",
            SweetAlertIcons.SUCCESS,
            SweetPosition.Center
          );
          return response;
        },
        transformErrorResponse: (response) => {
          notify(
            "The todo was not created successfully!",
            SweetAlertIcons.ERROR,
            SweetPosition.Center
          );
          return response;
        },
      }),
      toggleTodo: builder.mutation({
        query: (todo: ITodoType) => ({
          url: `todos/${todo.id}`,
          method: "PUT",
          body: { ...todo, isDone: !todo.isDone },
        }),
        invalidatesTags: ["Todos"],
        transformResponse: (response: ITodoType[]) => {
          notify(
            "The todo was updated successfully!",
            SweetAlertIcons.SUCCESS,
            SweetPosition.Center
          );
          return response;
        },
        transformErrorResponse: (response) => {
          notify(
            "The todo was not updated successfully!",
            SweetAlertIcons.ERROR,
            SweetPosition.Center
          );
          return response;
        },
      }),
      deleteTodo: builder.mutation({
        query: (id: string | number) => ({
          url: `todos/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Todos"],
        transformResponse: (response: ITodoType[]) => {
          notify(
            "The todo was deleted successfully!",
            SweetAlertIcons.SUCCESS,
            SweetPosition.Center
          );
          return response;
        },
        transformErrorResponse: (response) => {
          notify(
            "The todo was not deleted successfully!",
            SweetAlertIcons.ERROR,
            SweetPosition.Center
          );
          return response;
        },
      }),
    }),
  });
  

  export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useToggleTodoMutation,
    useDeleteTodoMutation,
  } = todosApi