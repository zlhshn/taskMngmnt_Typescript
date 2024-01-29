import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddTodo from "../components/AddTodo";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState<ITodoType[]>([]);
  const url = import.meta.env.VITE_BASE_URL;

  const getTodos = async () => {
    try {
      const { data } = await axios.get<ITodoType[]>(url);
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const addTodo:AddFn = async (text) => {
    try {
      await axios.post(url,{task:text,isDone:false});
    
    } catch (error) {
      console.log(error);
    }
  };




  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography color={"purple"} align="center" component={"h1"} variant="h3">
        TASK MANAGEMENT APP
      </Typography>
      <AddTodo />
    </Container>
  );
};

export default Home;
