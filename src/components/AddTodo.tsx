import {Container, Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { useAddTodoMutation } from "../service/todos";

const AddTodo = () => {
  const [text, setText] = useState("");
  const [addTodo] = useAddTodoMutation();

  const handleClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <Container>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: { xs: "flex-start", sm: "center" },
          m: { xs: 1, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="New Todo"
          color="success"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          inputProps={{ maxLength: 100 }}
        />
        <Button
          variant="contained"
          color="success"
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          disabled={!text.trim()}
          endIcon={<SaveIcon />}
          onClick={handleClick}
        >
          Save Todo
        </Button>
      </Box>
    </Container>
  );
};

export default AddTodo;
