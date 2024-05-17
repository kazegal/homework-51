import {useState} from 'react';
import './App.css';
import Game from "./Game/Game";

const App = () => {
    const [number, setNumber] = useState<number []>([]);
    const getRandomBall = () => {
        const randomBall: number[] = [];
        let i = 0;
        do {
            const count = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
            if (!randomBall.includes(count)) {
                randomBall.push(count);
                i = i + 1;
            }
        } while (i < 5);
        randomBall.sort((a, b) => a - b);
        setNumber(randomBall);
    };

    return (
        <div className="App">
            <div className="game-wrapper">
                <button className="change-btn" onClick={getRandomBall}>New Numbers</button>
                <div>
                    <Game num={number[0]}/>
                    <Game num={number[1]}/>
                    <Game num={number[2]}/>
                    <Game num={number[3]}/>
                    <Game num={number[4]}/>
                </div>
            </div>
        </div>
    );
};

export default App;
