import { useState } from "react";
import round from "./img/icons8-round.png";
import down from "./img/icons8-down.png";
import done from "./img/icons8-ok.png";
import roundDown from "./img/icons8-round-down.png";
import "./style/tradelistitem.css";

const TradeListItem = ({ val, trend15min }) => {
  const [status5minRedLocal, setStatus5minRedLocal] = useState(roundDown);
  const [status5minGreenLocal, setstatus5minGreenLocal] = useState(round);
  const [status5minGreen, setstatus5minGreen] = useState(round);
  const [status5minRed, setstatus5minRed] = useState(roundDown);
  const [status15minRedLocal, setStatus15minRedLocal] = useState(roundDown);
  const [status15minGreenLocal, setstatus15minGreenLocal] = useState(round);
  const [status15minGreen, setstatus15minGreen] = useState(round);
  const [status15minRed, setstatus15minRed] = useState(roundDown);

  const onDoneTradeList = (e) => {
    console.log(e.target.alt);
    if (e.target.alt.toString() === "trend5minLocalGreen") {
      setstatus5minGreenLocal(done);
      setStatus5minRedLocal(roundDown);
    } else if (e.target.alt.toString() === "trend5minLocalRed") {
      setstatus5minGreenLocal(round);
      setStatus5minRedLocal(down);
    }
    if (e.target.alt.toString() === "trend5minGreen") {
      setstatus5minGreen(done);
      setstatus5minRed(roundDown);
    } else if (e.target.alt.toString() === "trend5minRed") {
      setstatus5minGreen(round);
      setstatus5minRed(down);
    }
    if (e.target.alt.toString() === "trend15minLocalGreen") {
      setstatus15minGreenLocal(done);
      setStatus15minRedLocal(roundDown);
    } else if (e.target.alt.toString() === "trend15minLocalRed") {
      setstatus15minGreenLocal(round);
      setStatus15minRedLocal(down);
    }
    if (e.target.alt.toString() === "trend15minGreen") {
      setstatus15minGreen(done);
      setstatus15minRed(roundDown);
    } else if (e.target.alt.toString() === "trend15minRed") {
      setstatus15minGreen(round);
      setstatus15minRed(down);
    }
  };
  return (
    <>
      <tr>
        <td>
          <li id="valuta">{val}</li>
        </td>
        <td>
          <li>
            <img
              onClick={onDoneTradeList}
              src={status5minGreenLocal}
              alt="trend5minLocalGreen"
            />
            <img
              onClick={onDoneTradeList}
              src={status5minRedLocal}
              alt="trend5minLocalRed"
            />
          </li>
        </td>
        <td>
          <li>
            <img
              onClick={onDoneTradeList}
              src={status5minGreen}
              alt="trend5minGreen"
            />
            <img
              onClick={onDoneTradeList}
              src={status5minRed}
              alt="trend5minRed"
            />
          </li>
        </td>
        <td>
          <li>
            <img
              onClick={onDoneTradeList}
              src={status15minGreenLocal}
              alt="trend15minLocalGreen"
            />
            <img
              onClick={onDoneTradeList}
              src={status15minRedLocal}
              alt="trend15minLocalRed"
            />
          </li>
        </td>
        <td>
          <li>
            <img
              onClick={onDoneTradeList}
              src={status15minGreen}
              alt="trend15minGreen"
            />
            <img
              onClick={onDoneTradeList}
              src={status15minRed}
              alt="trend15minRed"
            />
          </li>
        </td>
        <td>
          <input type="number" />
        </td>
      </tr>
    </>
  );
};
export default TradeListItem;
