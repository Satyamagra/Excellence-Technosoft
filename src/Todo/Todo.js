import {
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Check, Delete } from "@material-ui/icons";

export default function Todo(props) {
  const { title, id, deleteTodo } = props;
  const delTodo = () => deleteTodo(id);

  return (
    <div>
      <Container>
        <Card variant="outlined" style={{ marginTop: "25px" }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              <IconButton style={{ float: "left" }}>
                <Check style={{ color: "green" }} />
              </IconButton>
              <span>{title}</span>
              <IconButton style={{ float: "right" }}>
                <Delete style={{ color: "red" }} onClick={delTodo} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
