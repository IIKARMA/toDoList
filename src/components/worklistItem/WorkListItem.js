import { useState } from "react";
import done from "./img/icons8-ok.png";
import round from "./img/icons8-round.png";
import del from "./img/close.png";

import "./style/worklistitem.css";

const WorkListItem = ({
  headline,
  note,

  complited,
  onDone,
  deleteItem
}) => {
  const [showDel, setShowDel] = useState("noneDel");

  let status = round;

  if (complited) {
    status = done;
  } else {
    status = round;
  }

  const showDeleteClick = () => {
    if (showDel === "noneDel") {
      setShowDel("showDel");
    } else if (showDel === "showDel") {
      setShowDel("noneDel");
    }
  };
  return (
    <li className="workListItem" onDoubleClick={showDeleteClick}>
      <div className="note">
        <span> {headline}</span>
        <span> {note}</span>
      </div>

      <img onClick={onDone} src={status} alt="done" />
      <img onClick={deleteItem} src={del} className={showDel} alt="delete" />
    </li>
  );
};
export default WorkListItem;
