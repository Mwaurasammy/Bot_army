import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, addBot }) => {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id} className="bot-item">
          <BotCard bot={bot} handleClick={() => addBot(bot)} />
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
