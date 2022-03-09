import WorkListItem from "../worklistItem/WorkListItem";
// import add from "./img/plus.png";

import "./style/worklist.css";
import AddTask from "../addTask/AddTask";
// import { useState } from "react";

const WorkList = ({ mas, onDone, addTask, showAddTask, deleteItem }) => {
  // let date = new Date();

  // if (date.getDate() <= 9) {
  //   date = `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
  // } else {
  //   date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  // }
  // const [show, setShow] = useState("hidd");
  // const [Datte, setDate] = useState(date);
  // const changeDate = (event) => {
  //   setDate(event.target.value.toString());
  // };
  const list = mas.map((item) => {
    const { ...itemProps } = item;
    return (
      <>
        <WorkListItem
          deleteItem={() => deleteItem(itemProps.id)}
          onDone={() => onDone(itemProps.id)}
          key={itemProps.id}
          {...itemProps}
        />
      </>
    );
  });

  return (
    <div className="workList">
      <AddTask addTask={addTask} />
      <ul className="list ">{list}</ul>
    </div>
  );
};
export default WorkList;
