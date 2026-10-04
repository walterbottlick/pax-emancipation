import "./Splay.css";
import type { SplayCardEntry } from "./splay.types";
import { splayCardId } from "./splay.types";
import SplayCard from "./SplayCard";

interface SplayProps {
    entries: SplayCardEntry[];
}

function Splay({ entries }: SplayProps) {
    return (
        <div className="splay">
            {entries.map((entry, index) => (
                <SplayCard key={splayCardId(entry)} entry={entry} zIndex={entries.length - index} />
            ))}
        </div>
    );
}

export default Splay;
