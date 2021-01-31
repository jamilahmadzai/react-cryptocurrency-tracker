import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);

  const api =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  useEffect(() => {
    axios.get(api).then((res) => {
      setCoins(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      {coins.map((coin) => {
        return <Coin key={coin.id} {...coin} />;
      })}
    </div>
  );
}

export default App;
