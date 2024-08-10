import React from 'react'

const BotCard = ({ bot, handleClick, handleDischarge, inArmy = false }) => {
    return (
        <div className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button
                onClick={handleClick}
                className={inArmy ? "release-btn" : "enlist-btn"}
            >
                {inArmy ? "Release Bot" : "Enlist Bot"}
            </button>

            {inArmy && (
                <button onClick={handleDischarge} className="discharge-button">
                    X(discharge)
                </button>
            )}
        </div>
    );
}

export default BotCard;