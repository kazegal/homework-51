import React from 'react';

interface IGameProps {
    num: number;
}

const Game: React.FC<IGameProps> = props => {
    return (
        <div className="circle">
            <div>{props.num}</div>
        </div>
    );
};

export default Game;