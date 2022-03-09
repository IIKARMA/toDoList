import TradeListItem from "../tradelistItem/TradeListItem";

import "./style/tradeList.css";
const TradeList = ({ valuts }) => {
  let listValuts = valuts.map((item) => {
    const { ...itemProps } = item;
    return (
      <>
        <TradeListItem key={itemProps.id} {...itemProps} />
      </>
    );
  });
  return (
    <>
      <table>
        <tr>
          <th rowSpan="2">Валютная пара</th>
          <th colSpan="2">15m</th>
          <th colSpan="2"> 5m </th>
          <th rowSpan="2">$</th>
        </tr>
        <tr>
          <th>Тренд</th>
          <th>Локал.Тренд </th>
          <th>Тренд</th>
          <th>Локал.Тренд </th>
        </tr>
        {listValuts}
      </table>
    </>
  );
};
export default TradeList;
