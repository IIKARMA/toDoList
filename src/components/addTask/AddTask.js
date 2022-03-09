import { useState } from "react";
import "./style/addTask.css";
import add from "./img/plus.png";
const AddTask = ({ addTask }) => {
  const [newNote, setNewNote] = useState({
    headline: "",
    note: ""
  });
  const [showPanel, setShowPanel] = useState("displaynone");
  const onSubmit = (e) => {
    e.preventDefault();
    addTask(newNote);
    setShowPanel("displaynone");
    setNewNote({ headline: "", note: "" });
  };
  const onChangeHeadline = (event) => {
    setNewNote({ ...newNote, headline: event.target.value });
  };

  const onChangeNote = (event) => {
    setNewNote({ ...newNote, note: event.target.value });
  };
  const showAddPanel = () => {
    setShowPanel("displayblock");
  };
  const hiddAddPanel = () => {
    setShowPanel("displaynone");
  };

  return (
    <form onSubmit={onSubmit} className="block">
      <input
        type="text"
        value={newNote.headline}
        onChange={onChangeHeadline}
        placeholder="Введите заголовок"
        className={showPanel}
      />
      <input
        value={newNote.note}
        onChange={onChangeNote}
        type="text"
        placeholder="Заметка..."
        onClick={showAddPanel}
      />
      <div className="downPanel">
        <button type="submit" className={showPanel}>
          <img src={add} alt="add" />
        </button>
        <span className={showPanel} onClick={hiddAddPanel}>
          Закрыть
        </span>
      </div>
    </form>
  );
};

export default AddTask;
