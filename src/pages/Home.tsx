import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddTodo from "../components/AddTodo";
import ToDoList from "../components/ToDoList";
import { useGetTodosQuery } from "../service/todos";

const Home = () => {
  const { data } = useGetTodosQuery();
  console.log(data);
  return (
    <Container>
      <Typography
        color="purple"
        align="center"
        component="h1"
        variant="h3"
        margin={"3rem"}
      >
        TASK MANAGEMENT APP
      </Typography>
      <AddTodo />
      <ToDoList />
    </Container>
  );
};

export default Home;
