import {
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

export default function TOdoForm() {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([]);
 
  const handleSubmit = (e) => {
    e.preventDefault();

    //add a Todo
    const newTodo = {
      id: uuidv4(),
      title: text,
    };
    setTodos([...todos, newTodo]);
    setText("");
    // console.log(newTodo);
  };
  //Delete a todo
  const deleteTodo = (id) => {
   
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <Container maxWidth="sm">
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <form onSubmit={handleSubmit}>
            <FormControl fullwidth={true}>
              <Typography variant="h4" style={{ marginBottom: "10px" }}>
                TODO List
              </Typography>
              <TextField
                variant="outlined"
                label="Add Data"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth={true}
              ></TextField>

              <Button
                variant="contained"
                color="secondary"
                fullWidth={true}
                type="submit"
                style={{ marginTop: "15px" }}
              >
                {" "}
                ADD
              </Button>
            </FormControl>
          </form>
          <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
        </div>
      </Container>
    </>
  );
}
