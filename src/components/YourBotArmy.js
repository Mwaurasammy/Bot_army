import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, removeBot, dischargeBot }) => {
  return (
    <div className='army-container'>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <BotCard
          key={bot.id}  // Unique identifier for each BotCard
          bot={bot}
          handleClick={() => removeBot(bot)}  // Function to remove the bot
          handleDischarge={() => dischargeBot(bot)} // Function to discharge the bot
          inArmy
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
