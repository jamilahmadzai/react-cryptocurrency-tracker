import React from "react";

function Coin({
  symbol,
  name,
  image,
  current_price: price,
  total_volume: volume,
  price_change_24h: price_change,
}) {
  // const  = props;
  return (
    <div className="coin">
      <div className="row">
        <div className="left-side">
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p className="symbol">{symbol}</p>
        </div>
        <div className="right-side">
          <p>€{price}</p>
          <p>{volume.toLocaleString()}</p>
          <p className={price_change > 0 ? "green" : "red"}>
            {price_change.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
