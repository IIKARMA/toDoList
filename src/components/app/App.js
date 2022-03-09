import WorkList from "../worklist/WorkList";
import ExplorerApp from "../ExplorerApp/ExplorerApp";

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import "./style/app.css";
const App = () => {
  const [workList, setWorkList] = useState([]);

  const [index, setIndex] = useState(new Date().getMilliseconds());

  useEffect(() => {
    const getData = async () => {};
    getData();
  }, []);
  const showNotes = async () => {
    var data = null;

    var XMLHttpRequest = require("xhr2");
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this);
      }
    });

    xhr.open("GET", "https://notes-338e.restdb.io/rest/notes");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "c8255550ba2f7b918067f9dec478595bf3dd4");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
  };
  showNotes();
  const findItem = (id, value) => {
    const index = workList.findIndex((el) => el.id === id);
    const finded = workList[index];
    const first = workList.slice(0, index);
    const second = workList.slice(index + 1);

    const changed =
      value === "complited"
        ? { ...finded, complited: !finded.complited }
        : { ...finded, complited: finded.complited };
    const newArr = [...first, changed, ...second];
    return newArr;
  };

  const onDone = (id) => {
    setIndex(index + 1);
    setWorkList(findItem(id, "complited"));
    DoneStorage(JSON.stringify(findItem(id, "complited")));
  };

  const delItem = (id) => {
    const rezultat = workList.filter((item) => item.id !== id);
    return rezultat;
  };
  const deleteItem = (id) => {
    setWorkList(delItem(id));
    DoneStorage(JSON.stringify(delItem(id)));
  };
  const addTask = async (value) => {
    setIndex(index + 1);
    const item = {
      headline: value.headline,
      note: value.note,
      id: index
    };

    const arr = [...workList, item];
    setWorkList(arr);
    AddStorage(item);
  };
  const AddStorage = async (arr) => {
    var request = require("request");

    var options = {
      method: "POST",
      url: "https://notes-338e.restdb.io/rest/notes",
      headers: {
        "cache-control": "no-cache",
        "x-apikey": "c8255550ba2f7b918067f9dec478595bf3dd4",
        "content-type": "application/json"
      },
      body: {
        headline: arr.headline,
        note: arr.note,
        id: arr.id
      },
      json: true
    };

    request(options, function (error, response, body) {});
  };

  const DoneStorage = async (arr) => {
    await AsyncStorage.removeItem("worklist");
    await AsyncStorage.setItem("worklist", arr);
  };

  return (
    <div className="application">
      <ExplorerApp />

      <WorkList
        addTask={addTask}
        mas={workList}
        deleteItem={deleteItem}
        onDone={onDone}
      />
    </div>
  );
};
export default App;
