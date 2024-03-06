import { Grid, Typography } from "@mui/material";
import TodoListItem from "./TodoListItem";
import "./style.css";
import { useGetTodosQuery } from "../service/todos";

const ToDoList = () => {
  const { data: todos, isLoading, error} = useGetTodosQuery();

  const progressTodos = todos?.filter((todo) => !todo.isDone);
  const completedTodos = todos?.filter((todo) => todo.isDone);

  return (
    <>
      {isLoading ? (
        <>loading</>
      ) : error ? (
        <>error</>
      ) : (
        <>
          <Grid
            container
            sx={{
              d: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              mt: 3,
            }}
          >
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              position={"relative"}
              className="myscrool scrool-progress"
              sx={{
                border: "1px solid purple",
                borderRadius: "0.5rem",
                minHeight: "350px",
                maxHeight: "350px",
                overflow: "auto",
              }}
            >
              <Typography
                color="secondary"
                align="center"
                variant="h4"
                className="title"
              >
                InProgress Todos
              </Typography>
              {progressTodos?.length ? (
                progressTodos.map((todo) => (
                  <TodoListItem
                    key={todo.id}
                    todo={todo}
                 
                  />
                ))
              ) : (
                <Typography color="error" mt={3}>
                  No Progress Todos!
                </Typography>
              )}
            </Grid>

            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              position={"relative"}
              className="myscrool scrool-completed"
              sx={{
                border: "1px solid green",
                borderRadius: "0.5rem",
                minHeight: "350px",
                maxHeight: "350px",
                overflow: "auto",
              }}
            >
              <Typography
                sx={{ color: "green" }}
                align="center"
                variant="h4"
                className="title"
              >
                Completed Todos
              </Typography>
              {completedTodos?.length ? (
                completedTodos.map((todo) => (
                  <TodoListItem
                    key={todo.id}
                    todo={todo}
                   
                  />
                ))
              ) : (
                <Typography color="error" mt={3}>
                  No Completed Todos!
                </Typography>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default ToDoList;
