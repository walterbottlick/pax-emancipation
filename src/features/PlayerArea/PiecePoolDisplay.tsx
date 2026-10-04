import "./PiecePoolDisplay.css";
import type { PiecePool } from "../../game/gameQueries";

interface PiecePoolDisplayProps {
    pool: PiecePool;
    vertical?: boolean;
}

function PiecePoolDisplay({ pool, vertical = false }: PiecePoolDisplayProps) {
    return (
        <div className={vertical ? "piece-pool piece-pool-vertical" : "piece-pool"}>
            <span>Agents: {pool.agents}</span>
            <span>Meeples: {pool.meeples}</span>
            <span>Factory: {pool.factory}</span>
        </div>
    );
}

export default PiecePoolDisplay;
