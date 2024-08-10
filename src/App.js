import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

const App = () => {
  // State for the list of bots
  const [bots, setBots] = useState([]);
  
  // State for the bots in the army
  const [army, setArmy] = useState([]);

  // Fetch bots data when the component mounts
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  // Add a bot to the army if it's not already present
  const addBotToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Remove a bot from the army
  const removeBotFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Discharge (delete) a bot and update the state
  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      setArmy(army.filter((b) => b.id !== bot.id));
    });
  };

  return (
    <>
      <header>
        <h1>Bot Battlr</h1>
      </header>
      <div className="App">
        <div className="bot-container">
          <BotCollection bots={bots} addBot={addBotToArmy} />
        </div>
        <div className="army-container">
          <YourBotArmy army={army} removeBot={removeBotFromArmy} dischargeBot={dischargeBot} />
        </div>
      </div>
    </>
  );
}

export default App;
