import "./FinanceBoard.css";
import type { Faction } from "../../shared/factions";

interface FinanceBoardProps {
    faction: Faction;
    small?: boolean;
}

function FinanceBoard({ faction, small = false }: FinanceBoardProps) {
    return (
        <div className={small ? "finance-board finance-board-small" : "finance-board"}>
            {faction}
        </div>
    );
}

export default FinanceBoard;
