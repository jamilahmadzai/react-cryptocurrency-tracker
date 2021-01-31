import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const api =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  useEffect(() => {
    axios.get(api).then((res) => {
      setCoins(res.data);
      // console.log(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filterdCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <form>
        <input
          className="search"
          value={search}
          type="text"
          placeholder="Search for Coins"
          onChange={handleChange}
        />
      </form>
      {filterdCoins.map((coin) => {
        return <Coin key={coin.id} {...coin} />;
      })}
    </div>
  );
}

export default App;
