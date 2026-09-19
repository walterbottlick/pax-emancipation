import MapCard from "./features/MapCard/MapCard";
import './App.css'
import { GameProvider } from "./game/GameContext";
import { useGameState } from "./game/useGame";
import { MAP_CARD_DEFINITIONS } from "./features/MapCard/mapCardDefinitions";

function App() {
    return (
        <GameProvider>
            <Board />
        </GameProvider>
    );
}

function Board() {
    const gameState = useGameState();

    return (
        <div id="board">
            <div className="map">
                {MAP_CARD_DEFINITIONS.map(def => (
                    <MapCard key={def.cardNumber} definition={def} state={gameState.mapCards[def.cardNumber]} />
                ))}
            </div>
        </div>
    );
}

export default App
