import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
function Todo({ todo }) {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={todo} secondary='10:53 AM' />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
