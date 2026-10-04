import "./Splay.css";
import type { SplayCardEntry } from "./splay.types";
import { splayCardInfo } from "./splayDefinitions";

interface SplayCardProps {
    entry: SplayCardEntry;
    zIndex: number;
}

function SplayCard({ entry, zIndex }: SplayCardProps) {
    const { name, visibleFreedom } = splayCardInfo(entry);

    return (
        <div className="splay-card" style={{ zIndex }}>
            <div className="splay-card-label">
                <span className="splay-card-name">{name}</span>
                <span>{visibleFreedom}</span>
                {entry.kind === "revolution" && <span>VP: {entry.victoryPointsVisible ? "Yes" : "No"}</span>}
            </div>
        </div>
    );
}

export default SplayCard;
