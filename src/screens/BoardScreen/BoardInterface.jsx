import { Grid } from "@mui/material";
import BoardTabs from "./BoardTabs";
import AddTaskModal from "./AddTaskModal";
import { useState } from "react";

const statusMap = {
  todos: "Todos",
  isProgress: "In Progress",
  completed: "Completed",
};

export default function BoardInterface() {
  const [addTaskTo, setAddTaskTo] = useState("");
  return (
    <>
      {!!addTaskTo && (
        <AddTaskModal
          tabName={statusMap[addTaskTo]}
          onClose={() => setAddTaskTo("")}
        />
      )}
      <Grid container px={2} mt={5} spacing={4}>
        {Object.keys(statusMap).map((status) => (
          <BoardTabs
            key={status}
            name={statusMap[status]}
            addTask={() => setAddTaskTo(status)}
          />
        ))}

        {/* <BoardTabs />
        <BoardTabs /> 
        <BoardTabs /> */}
      </Grid>
    </>
  );
}
