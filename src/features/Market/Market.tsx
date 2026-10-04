import "./Market.css";

const CARD_SPACES_PER_COLUMN = 6;

interface MarketColumnProps {
    label: string;
    deckClassName: string;
}

function MarketColumn({ label, deckClassName }: MarketColumnProps) {
    return (
        <div className="market-column">
            <div className={`market-deck ${deckClassName}`}>{label}</div>
            {Array.from({ length: CARD_SPACES_PER_COLUMN }, (_, index) => (
                <div key={index} className="market-space" />
            ))}
        </div>
    );
}

function Market() {
    return (
        <div className="market">
            <MarketColumn label="Western" deckClassName="market-deck-western" />
            <MarketColumn label="Eastern" deckClassName="market-deck-eastern" />
        </div>
    );
}

export default Market;
