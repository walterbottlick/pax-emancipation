import "./PlayerArea.css";
import type { GameState } from "../../shared/types";
import type { Faction } from "../../shared/factions";
import { playerBoardLayout } from "./players.types";
import { piecePool } from "../../game/gameQueries";
import FinanceBoard from "../FinanceBoard/FinanceBoard";
import PiecePoolDisplay from "./PiecePoolDisplay";

interface PlayerSlotProps {
    gameState: GameState;
    faction: Faction;
    small?: boolean;
}

function PlayerSlot({ gameState, faction, small = false }: PlayerSlotProps) {
    return (
        <div className={small ? "player-slot player-slot-beside" : "player-slot player-slot-below"}>
            <FinanceBoard faction={faction} small={small} />
            <PiecePoolDisplay pool={piecePool(gameState, faction)} vertical={small} />
        </div>
    );
}

interface PlayerAreaProps {
    gameState: GameState;
}

function PlayerArea({ gameState }: PlayerAreaProps) {
    const layout = playerBoardLayout(gameState.players);

    return (
        <div className="player-area">
            <div className="player-area-column">
                <PlayerSlot gameState={gameState} faction={layout.left} />
            </div>
            <div className="player-area-column">
                {layout.right.map(faction => (
                    <PlayerSlot key={faction} gameState={gameState} faction={faction} small={layout.rightIsSmall} />
                ))}
            </div>
        </div>
    );
}

export default PlayerArea;
