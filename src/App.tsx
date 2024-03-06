import Home from "./pages/Home";
import Container from "@mui/material/Container";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import {todosApi} from "./service/todos";
function App() {
  return (
    <ApiProvider api={todosApi}>
      <Container>
        <Home />
      </Container>
    </ApiProvider>
  );
}

export default App;
