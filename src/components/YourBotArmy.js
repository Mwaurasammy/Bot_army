import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, removeBot, dischargeBot }) => {
  return (
    <div className='army-container'>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => removeBot(bot)}
          handleDischarge={() => dischargeBot(bot)}
          inArmy
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
